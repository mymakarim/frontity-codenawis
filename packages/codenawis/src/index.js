import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import {categoriesWidgetsHome} from './components/utitlity/config/categories';

const codeawisTheme = {
  name: "@frontity/codenawis",
  roots: {
    /**
     *  In Frontity, any package can add React components to the site.
     *  We use roots for that, scoped to the `theme` namespace.
     */
    theme: Theme,
  },
  state: {
    /**
     * State is where the packages store their default settings and other
     * relevant state. It is scoped to the `theme` namespace.
     */
    theme: {
      menu: [],
      isMobileMenuOpen: false,
      featured: {
        showOnList: true,
        showOnPost: true,
      },
    },
  },
  /**
   * Actions are functions that modify the state or deal with other parts of
   * Frontity like libraries.
   */
  actions: {
    theme: {
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
      beforeSSR: async ({ state, actions }) => {
        if (state.router.link === "/") {
          console.log(state.router.link)
          console.log('getting data from beforeSSR...')
          // await actions.source.fetch(`/category/featured/`);
          await Promise.all(
            Object.values(categoriesWidgetsHome)
              .map(category => actions.source.fetch(`/category/${category}/`))
          )
        }
      }
    },
  },
  libraries: {
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * inside the content HTML. You can add your own processors too
       */
      processors: [image, iframe],
    },
  },
};

export default codeawisTheme;
