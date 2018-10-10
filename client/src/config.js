const config = {
  ENVIRONMENT: process.env.REACT_APP_ENVIRONMENT || "develop",
  BACKEND_SERVER: process.env.REACT_APP_ENDPOINT || "http://localhost:5000",
  SPINNER: 'circle' // 'circle' | 'ring' | 'ellipsis' | 'ripple'
}

export default config