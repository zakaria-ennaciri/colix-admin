const PROXY_CONFIG = [
    {
      context: [
        "/"
      ],
      target:  "http://localhost:8090"  ,
      secure: false
    }
  ]
  module.exports = PROXY_CONFIG;
  
  