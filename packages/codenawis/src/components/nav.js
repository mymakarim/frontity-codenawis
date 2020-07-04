import React from "react";
import { connect, styled, css } from "frontity";
import Link from "./link";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Nav = ({ state }) => (
  <nav className="container navbar navbar-expand-lg navbar-dark bg-black d-none d-md-block pb-0">
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav mr-auto mb-0">
        {state.theme.menu.map(([name, link]) => {
          // Check if the link matched the current page url
          const isCurrentPage = state.router.link === link;
          return (
            <li key={name} className="nav-item px-1" css={isCurrentPage ? css`border-bottom: 5px solid #dc3545` : css``}>
              <Link link={link} aria-current={isCurrentPage ? "page" : undefined}>
                <a className={isCurrentPage ? "nav-link active text-uppercase" : "nav-link text-uppercase"} >{name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  </nav>
);

export default connect(Nav);
