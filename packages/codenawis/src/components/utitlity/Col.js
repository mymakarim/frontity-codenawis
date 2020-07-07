import { styled } from "frontity";

const Col = ({children, className}) => {
    return (
        <ColCss className={className}>
            {children}
        </ColCss>
    )
}

const ColCss = styled.div`
  position: relative;
  padding-right: 15px;
  padding-left: 15px;
  
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  
  @media (min-width: 768px){
    &.m3 {
      flex: 0 0 25%;
      max-width: 25%;
    }
    &.m4 {
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
    &.m6 {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }
`;
export default Col
