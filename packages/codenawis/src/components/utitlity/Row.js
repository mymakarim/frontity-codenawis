import { styled } from "frontity";

const Row = ({children}) => {
    return (
        <RowCss>
            {children}
        </RowCss>
    )
}

const RowCss = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px
`;
export default Row
