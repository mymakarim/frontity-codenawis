import React from "react";
import { connect, styled, css } from "frontity";
import Link from "./link";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Nav = ({ state }) => (
  <NavBar>
      <NavUl>
        {state.theme.menu.map(([name, link]) => {
          // Check if the link matched the current page url
          const isCurrentPage = state.router.link === link;
          return (
            <li key={name} className="nav-item px-1" css={isCurrentPage ? css`border-bottom: 5px solid #dc3545; color: white;` : css``}>
              <Link link={link} aria-current={isCurrentPage ? "page" : undefined}>
                <a className={isCurrentPage ? "nav-link active text-uppercase" : "nav-link text-uppercase"} >{name}</a>
              </Link>
            </li>
          );
        })}
      </NavUl>
  </NavBar>
);

export default connect(Nav);

const NavBar = styled.div`
position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: left;
    padding: .5rem 1rem;
padding-bottom: 0!important;
display: none;
@media (min-width: 1200px){
  max-width: 1400px;
}
@media (min-width: 992px){
  flex-flow: row nowrap;
  justify-content: flex-start;
}
@media (min-width: 768px){
  display: block!important;
}
width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
`;

const NavUl = styled.ul`
    flex-direction: row;
    margin-right: auto!important;
    display: flex;
    flex-direction: row;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    margin-top: 0;
    color: #aaa;

    li {
      display: block;
      padding-bottom: .5rem;
      a {
        padding-right: .5rem;
        padding-left: .5rem;
      }
    }    
`;