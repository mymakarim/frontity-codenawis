import { connect, styled } from "frontity";
import React, { useRef } from "react";

const SearchForm = ({ state, actions, libraries }) => {
  const parse = libraries.source.parse(state.router.link);
  const searchQuery = parse.query["s"];

  const { closeSearchModal } = actions.theme;
  // Keep a reference to the input so we can grab it's value on form submission
  const inputRef = useRef();

  const handleSubmit = (event) => {
    // Prevent page navigation
    event.preventDefault();

    // Get the input's value
    const searchString = inputRef.current.value;

    // If the typed search string is not empty
    // Better to trim write spaces as well
    if (searchString.trim().length > 0) {
      // Let's go search for blogs that match the search string
      actions.router.set(`/?s=${searchString.toLowerCase()}`);

      // Scroll the page to the top
      window.scrollTo(0, 0);

      // Close the search modal
      closeSearchModal();
    }
  };

  return (
    <Form role="search" aria-label="404 not found" onSubmit={handleSubmit}>
      <Input type="search" defaultValue={searchQuery} placeholder="Search ..." ref={inputRef} />
      <Button type="submit"> Search </Button>
    </Form>
  );
};

export default connect(SearchForm);

const Form = styled.form`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
`;

const Input = styled.input`
    border: 0;
    padding:10px;
    width: 100%;
    :focus {
        border: 0;
        outline: 0;
    }
`;
const Button = styled.button` 
    padding: 10px 20px;
    border: 0;
`;