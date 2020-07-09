import React from "react";
import { connect, styled } from "frontity";
import HoverLink from "../utitlity/HoverLink";
import CardTitle from "../utitlity/cardTitle";

const ListItemNoImage = ({ state, item}) => {
  return (
            <Flex className="mb-2 border-0">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#dc3545" width="13" height="13" viewBox="0.5 0 12 12"><path d="M0.632,5.914L6.481,11.7l5.848-5.788L6.481,0.126Zm5.849,1.9-1.916-1.9,1.916-1.9L8.4,5.914Z"></path></svg>
                </span>
                <div>
                    <HoverLink link={item.link}>
                        <CardTitle title={item.title.rendered} />
                    </HoverLink>
                </div>
            </Flex>
  );
};

const Flex = styled.div`
    height: 50px;
    overflow: hidden;
    margin-bottom: 15px;
    span {
        float: left;
        margin-right: 10px;
        height: 50px;
    }
    h2 {
        margin-top: 0;
    }
`;
// Connect the Item to gain access to `state` as a prop
export default connect(ListItemNoImage);