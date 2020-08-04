const settings = {
  "name": "CodeNawis - Fashion Jackson",
  "state": {
    "frontity": {
      "url": "https://newschin.mymakarim.vercel.app",
      "title": "CodeNawis",
      "description": "A NextJs clone of FashionJackson.com"
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
              "Casual",
              "/category/outfits/casual/"
            ],
            [
              "Collage",
              "/category/collage/"
            ],
            [
              "Fashion",
              "/category/fashion/"
            ],
            [
              "Beauty",
              "/category/beauty/"
            ],
            [
              "Black Blazer",
              "/category/black-blazer/"
            ],
            [
              "External Link",
              "https://github.com/mymakarim"
            ],
            [
              "About Us",
              "/about"
            ],
            [
              "Contact Us",
              "/contact"
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
          "api": "https://fashionjackson.com/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "frontity-share",
    "frontity-contact-form-7"
  ]
};

export default settings;
