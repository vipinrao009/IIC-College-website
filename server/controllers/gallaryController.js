import AsyncHandler from "../middleware/AsyncHandler.js";
import ErrorHandler from "../middleware/Error.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { Gallery } from "../model/gallerySchema.js";
import pdf from "html-pdf-node";

export const uploadGallery = AsyncHandler(async (req, res, next) => {
    const { title, date, location, type, description, club, theme, no_student, no_faculty, speaker, outcome, summary, event_for } = req.body;
    
    if (!title || !date || !location || !type || !theme || !club || !req.files || req.files.length === 0) {
      return next(new ErrorHandler("All fields and at least one file are required", 400));
  }
    // Array to hold uploaded file details
    const uploadedFiles = [];

    for (const file of req.files) {
        const result = await uploadOnCloudinary(file.path);

        if (!result) {
            return next(new ErrorHandler("Failed to upload one or more files to Cloudinary", 500));
        }

        uploadedFiles.push({
            url: result.secure_url,
            filename: result.original_filename || file.originalname,
            public_id: result.public_id // optional but helpful if you want to delete later
        });
    }

    const gallery = await Gallery.create({
        title,
        date,
        location,
        type,
        files: uploadedFiles,
        description,
        club,
        theme, 
        no_student, 
        no_faculty, 
        speaker, 
        outcome,
        summary, 
        event_for
    });

    res.status(201).json({
        success: true,
        message: "Gallery item uploaded successfully",
        gallery
    });
});

export const fetchGallary = AsyncHandler(async (req, res, next) => {
  const { year, club } = req.query;

  let query = {};
  if (club) {
    query.club = club; 
  }
  if (year) {
    const startOfYear = new Date(`${year}-01-01T00:00:00.000Z`);
    const endOfYear = new Date(`${parseInt(year) + 1}-01-01T00:00:00.000Z`);
    query.date = { $gte: startOfYear, $lt: endOfYear };
  }

  const gallery = await Gallery.find(query).sort({ createdAt: -1 });

  if (!gallery || gallery.length === 0) {
    return next(new ErrorHandler("No event data found", 404));
  }

  res.status(200).json({
    success: true,
    message: "Event data fetched successfully",
    gallery,
  });
});

export const singleGallery = AsyncHandler(async (req,res, next) => {
  const { id } = req.params;
  if (!id) {
    return next(new ErrorHandler("ID is required for fetching", 400));
  }

  const event = await Gallery.findById(id).select("-files")
  if (!event) {
    return next(new ErrorHandler("Event not found", 400));
  }

  res.status(200).json({
    success: true,
    message: "Event fetched successfully",
    event,
  });

})

export const deleteGallery = AsyncHandler(async (req, res, next) => {
    const { id } = req.params;
  
    if (!id) {
      return next(new ErrorHandler("ID is required for deletion", 400));
    }
  
    const deletedGallery = await Gallery.findByIdAndDelete(id);
    if (!deletedGallery) {
      return next(new ErrorHandler("Gallery item not found", 404));
    }
  
    res.status(200).json({
      success: true,
      message: "Gallery item deleted successfully",
    });
});

export const editGallery = AsyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { title, date, type, description,summary } = req.body;

  if (!id) {
    return next(new ErrorHandler("ID is required for updation", 400));
  }

  if (!date) {
    return next(new ErrorHandler("date is required for updation", 400));
  }

  const gallery = await Gallery.findById(id);
  if (!gallery) {
    return next(new ErrorHandler("Gallery item not found", 404));
  }

  // Update fields
  gallery.title = title || gallery.title;
  gallery.date = date || date;
  gallery.type = type || gallery.type;
  gallery.description = description || gallery.description;
  gallery.summary = summary || gallery.summary;

  await gallery.save();

  res.status(200).json({
    success: true,
    message: "Gallery item updated successfully",
    gallery,
  });
});

export const generatePDF = AsyncHandler(async (req, res) => {
  const { id } = req.params;

  const event = await Gallery.findById(id);
  if (!event) return res.status(404).json({ message: 'Event not found' });

  const logoUrl = "https://res.cloudinary.com/df3ykvedg/image/upload/v1745841124/IIC%20college%20website/PDF_fcshcu.png";

  // Utility function to split long text into parts
  const splitTextIntoPages = (text, maxChars = 2195) => {
    const paragraphs = text.split('\n');
    const pages = [];
    let current = '';

    for (const para of paragraphs) {
      if ((current + para).length > maxChars) {
        pages.push(current);
        current = para + '\n';
      } else {
        current += para + '\n';
      }
    }

    if (current.trim()) pages.push(current);
    return pages;
  };

  const summary = splitTextIntoPages(event.summary);

  const htmlContent = `
    <html>
      <head>
        <style>
          @page {
            margin: 0px;
          }

          body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
          }

          .page-box {
            border: 2px solid #ddd;
            border-radius: 10px;
            padding: 30px;
            margin: 40px;
            box-sizing: border-box;
            height: 1000px;
            page-break-after: always;
            position: relative;
          }

          .header {
            text-align: center;
            margin-bottom: 20px;
            border-bottom: 2px solid #ddd;
          }
          .logo {
            height: 180px;
            width:100%
          }

          .title {
            font-size: 24px;
            font-weight: bold;
            color: black;
            margin-top: 10px;
            margin-bottom: 10px
        
          }

          .section {
            margin-bottom: 15px;
            font-size: 16px;
            line-height: 1.6;
          }

          strong {
            color: black;
          }
        </style>
      </head>
      <body>
        <div class="page-box">
          <div class="header">
            <img src="${logoUrl}" class="logo" />
            <div class="title">IIC EVENT SUMMARY REPORT</div>
          </div>
          <div class="section"><strong>Name of Event:</strong> ${event.title}</div>
          <div class="section"><strong>Dates of Event:</strong> ${new Date(event.date).toLocaleDateString()}</div>
          <div class="section"><strong>Venue of Event:</strong> ${event.location}</div>
          <div class="section"><strong>Theme of Event:</strong> ${event.theme}</div>
          <div class="section"><strong>Event for Students/Faculty/Both:</strong> ${event.event_for}</div>
          <div class="section"><strong>No. of Students Present:</strong> ${event.no_student}</div>
          <div class="section"><strong>No. of Faculty Present:</strong> ${event.no_faculty}</div>
          <div class="section"><strong>Speakers Invited:</strong> ${event.speaker}</div>
          <div class="section"><strong>Event Objective:</strong> ${event.description}</div>
          <div class="section"><strong>Event Outcome:</strong> ${event.outcome}</div>
        </div>

        ${summary.map(text => `
          <div class="page-box">
            <div class="section"><strong>Event Summary:</strong><br/> ${text.replace(/\n/g, "<br/>")}</div>
          </div>
        `).join('')}
      </body>
    </html>
  `;

  const file = { content: htmlContent };
  const options = { format: 'A4' };

  const pdfBuffer = await pdf.generatePdf(file, options);

  res.set({
    'Content-Type': 'application/pdf',
    'Content-Disposition': 'attachment; filename=event-report.pdf',
  });
  res.send(pdfBuffer);
});
