import { styled, css } from "frontity";

const Article = ({children, className, height}) => {
    if(height === "NaNpx"){
      height= "340px";
    }
    return (
        <ArticleCss css={css`height: ${height}`} className={className}>
            {children}
        </ArticleCss>
    )
}

const ArticleCss = styled.div`
  border: 1px solid #ddd;
  margin:0 auto;
  width: 100%;
  background-color: white;
  border-radius: 5px;
  font-family: "Poppins", Roboto,
    "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  
  overflow: hidden;

  display: flex !important;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  &.mb-2 {
    margin-bottom: 20px;
  }
  &.mb-4 {
    margin-bottom: 40px;
  }
  transition: all .2s;
  img {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  &:hover {
    transition: all .2s;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    border-color: transparent;
  }
`;
export default Article
