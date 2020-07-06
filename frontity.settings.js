const settings = {
  "name": "newschin",
  "state": {
    "frontity": {
      "url": "https://newschin.mymakarim.vercel.app",
      "title": "NewsChin",
      "description": "A NextJs clone of NewsChin.com"
    }
  },
  "packages": [
    {
      "name": "@frontity/codenawis",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "News",
              "/category/news/"
            ],
            [
              "Featured",
              "/category/featured/"
            ],
            [
              "Report",
              "/category/report/"
            ],
            [
              "MultiMedia",
              "/category/multimedia/"
            ]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://kabulnow.af/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
