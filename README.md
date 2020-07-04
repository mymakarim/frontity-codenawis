# CodeNawis Frontity Theme Project :art:

:fire: A WordPress CodeNawis Theme Project in React for Frontity.

:zap: Check out the [demo site here](http://newschin.mymakarim.vercel.app//).

# Demo 

<p align="center">
  <img alt="Frontity en la consola" src="assets/demo.png">
</p>
<p align="left">
  <img alt="Frontity en la consola" src="assets/demo-2.png">
</p>

# Installation :wrench:

## 1. For new projects: clone this project.

1. `git clone https://github.com/mymakarim/frontity-codenawis`.
2. `cd frontity-codenawis`.
3. `npm install && npx frontity dev` (from the project's root directory).

4. Your site will now be available at `http://localhost:3000/`

## 2. For new/existing project: use npm.

1. `npm install @frontity/codenawis`.
2. Add the package in `frontity-settings.js`.

```javascript
  packages: [
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
            ],
            [
              "About Us",
              "/about/"
            ]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          }
        }
      }
    },
```

3. Remove your previous theme (`mars-theme`?) from `frontity-settings.js`.
4. `npx frontity dev` (from project's root directory).
5. Your site will be available at `http://localhost:3000/`.

## Credits :white_flower:

- Build with love :blue_heart:, using [Frontity's](https://frontity.org) [mars-theme](https://www.npmjs.com/package/@frontity/mars-theme) as base.

## Authors

1. [Yahya Makarim](https://instagram.com/codenawis)

## License :scroll:

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  