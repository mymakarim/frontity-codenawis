import React, { useEffect, useState } from "react";
import { connect, styled } from "frontity";
import Avatar from "./utitlity/avatar";
import FlexCenter from "./utitlity/FlexCenter";

const Comments = ({ libraries, state }) => {
    
    // Post Id for single post
    const postId = state.source.get(state.router.link).id;
    
    const [ comments, setComments ] = useState( [] );
    const [ loading, setLoading ] = useState( true );

    useEffect(() => {

        libraries.source.api.get({
            endpoint: "comments",
            params: { post: postId, _embed: false, per_page: 10 }
        })
        .then(response => {
            response.json().then( data => {
                setComments( data );
                setLoading( false )
            });
        });

    }, []);

    return (
        <CommentBox className="comment">
            <h3>Comments</h3>
            {loading && (<div>Loading...</div>)}
            {!loading && (
                <div>
                    {comments.length === 0 && (<p>Comment not found</p>)}
                    {comments.length > 0 && (
                        <>
                            {comments.map(item => {
                                console.log("Comment", item);
                                const date = new Date(item.date);
                                return (
                                    <SingleComment key={item.id}>
                                        <FlexCenter>
                                            <Avatar src={item.author_avatar_urls[96]} alt=""/>
                                            <div>
                                                <AuthorName>{item.author_name}</AuthorName>
                                                <small>{date.toDateString()}</small>
                                            </div>
                                        </FlexCenter>

                                        <SingleCommentContent dangerouslySetInnerHTML={{
                                            __html: item.content.rendered
                                        }}
                                        />
                                    </SingleComment>
                                )
                            })}
                        </>
                    )}
                </div>
            )}

        </CommentBox>
    );
}

export default connect(Comments);


const CommentBox = styled.div`
  display: block;
  margin: 20px 0;
`;

const SingleComment = styled.div`
  background: #fff;
  -webkit-box-shadow: 0 1px 4px rgba(0,0,0,.04);
  box-shadow: 0 1px 4px rgba(0,0,0,.04);
  border: 1px solid rgba(0,0,0,.09);
  -webkit-border-radius: 3px;
  border-radius: 3px;
  margin: 10px 0;
  padding: 10px;
`;

const AuthorName = styled.b`
    display: block;
`;

const SingleCommentContent = styled.div`
  font-size: 0.9em;
  p {
    margin: 7px 0;
  }
`;