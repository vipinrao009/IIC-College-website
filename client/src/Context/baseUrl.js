const environment = process.env.NODE_ENV;  // Get current environment ('development' or 'production')

 const baseUrl = environment === 'development'
  ? "http://localhost:8080"  // Local development URL
  : "";  // Production URL

export default baseUrl