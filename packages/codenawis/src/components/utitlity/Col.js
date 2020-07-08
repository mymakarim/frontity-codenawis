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
  margin-top: 15px;
  margin-bottom: 15px;
  
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  
  @media (min-width: 768px){
    &.m1 {
      flex: 0 0 8.333333%;
      max-width: 8.333333%;
    }
    &.m2 {
      flex: 0 0 16.666667%;
      max-width: 16.666667%;
    }
    &.m3 {
      flex: 0 0 25%;
      max-width: 25%;
    }
    &.m4 {
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
    &.m5 {
      flex: 0 0 41.666667%;
      max-width: 41.666667%;
    }
    &.m6 {
      flex: 0 0 50%;
      max-width: 50%;
    }
    &.m7 {
      flex: 0 0 58.333333%;
      max-width: 58.333333%;
    }
    &.m8 {
      flex: 0 0 66.666667%;
      max-width: 66.666667%;
    }
    &.m9 {
      flex: 0 0 75%;
      max-width: 75%;
    }
    &.m10 {
      flex: 0 0 83.333333%;
      max-width: 83.333333%;
    }
    &.m11 {
      flex: 0 0 91.666667%;
      max-width: 91.666667%;
    }
    &.m12 {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
  @media (max-width: 570px){
    &.m1,
    &.m2,
    &.m3,
    &.m4,
    &.m5,
    &.m6,
    &.m7,
    &.m8,
    &.m9,
    &.m10,
    &.m11,
    &.m12 {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
`;
export default Col
