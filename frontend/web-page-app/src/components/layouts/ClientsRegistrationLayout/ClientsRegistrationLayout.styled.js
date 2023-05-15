import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  padding-bottom: 100px;
  color: #939191;
  align-items: center;
  text-align: right;
  background: #1e1b1b;
  font-size: 20px;
  font-weight: bold;

  margin-bottom: 10px;
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

  h3 {
    color: #939191;
    font-size: 20px;
  }
`;

export { StyledDiv };
