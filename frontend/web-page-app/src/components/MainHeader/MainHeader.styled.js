import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-bottom: 100px;
  background-color: #1e1b1b;
  color: #939191;
  align-items: center;
  text-align: right;
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
  a:link {
    padding-left: 15px;
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
    color: red;
  }

  h2 {
    color: white;
  }
`;

export { StyledDiv };
