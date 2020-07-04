import { styled } from "frontity";

const Container = ({children}) => {
    return (
        <ContainerWrapper>
            {children}
        </ContainerWrapper>
    )
}

const ContainerWrapper = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  padding-top:30px;
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px){
    max-width: 720px;
  }
  @media (min-width: 992px){
    max-width: 960px;
  }
  @media (min-width: 1200px){
     max-width: 1140px;
  }
`;

export default Container
