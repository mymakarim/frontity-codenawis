import { styled } from "frontity";

const Hr = ({children, color}) => {
    return (
        color === "white" 
        ? <HrWhite>
            {children}
          </HrWhite> 
        : <HrBlack>
            {children}
        </HrBlack> 
    )
}

const HrBlack = styled.hr`
  background-color: #eee;
`;
const HrWhite = styled.hr`
  background-color: #222;
`;

export default Hr
