import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  padding-bottom: 100px;
  background: #1e1b1b;
  color: #939191;
  align-items: center;
  text-align: right;
  a:link {
    text-decoration: none;
  }
  a {
    color: orange;
    font-size: 17px;
    :hover {
      color: #ff7c00;
    }
  }

  div.button button {
    font-weight: bold;
    font-size: 17px;
    color: black;
  }
`;
export { StyledDiv };
