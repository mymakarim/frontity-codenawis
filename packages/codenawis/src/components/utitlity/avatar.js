import { styled } from "frontity";

const Avatar = ({src}) => {
    return (
        <AvatarCss src={src} />
    )
}

const AvatarCss = styled.img`
  width: 65px !important;
  border-radius: 50%;
  margin-right: 10px;
  background-color: #eee;
`;

export default Avatar