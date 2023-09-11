import react from "react";
import { styled } from "styled-components";
import GlobalButton from "./GlobalButton";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { GiCancel } from "react-icons/gi";
import { FaAngleDown } from "react-icons/fa";

const Header = () => {
  const [show, setshow] = useState(false);
  const Toggle = () => {
    setshow(!show);
  };
  const Drops = () => {
    setshow(!show);
  };
  return (
    <div>
      <Container>
        {show ? (
          <DropH>
            <DrWrap>
              <Right></Right>
              <Lft></Lft>
            </DrWrap>
          </DropH>
        ) : null}
        <Wrapper>
          <LogH>
            <svg
              width="36"
              height="35"
              viewBox="0 0 76 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#000000" />
            </svg>
            <Nav1>Vercel</Nav1>
          </LogH>
          <NavHold>
            <Nav4>
              <Nav onMouseEnter={Drops} onMouseLeave={Drops}>
                Features
              </Nav>
              <Ic>
                <FaAngleDown />
              </Ic>
            </Nav4>
            <Nav>Docs</Nav>
            <Nav>Templates</Nav>
            <Nav>Integrations</Nav>
            <Nav>customers</Nav>
            <Nav>Enterprices</Nav>
            <Nav>Pricing</Nav>
          </NavHold>
          <ButtonTag>
            <Nav>Contacts</Nav>
            <GlobalButton text="Log in" bcc="white" color="black" />
            <GlobalButton text="Sign-up" bcc="black" color="white" />
          </ButtonTag>
          <Icon>
            {!show ? (
              <FiMenu onClick={Toggle} size={40} />
            ) : (
              <GiCancel onClick={Toggle} size={40} />
            )}
            {show ? (
              <Card>
                <GlobalButton text="Log in" bcc="white" color="black" />
                <GlobalButton text="Sign-up" bcc="black" color="white" />
                <Nav>Features</Nav>
                <Nav>Docs</Nav>
                <Nav>Templates</Nav>
                <Nav>Integrations</Nav>
                <Nav>customers</Nav>
                <Nav>Enterprices</Nav>
                <Nav>Pricing</Nav>
              </Card>
            ) : null}
          </Icon>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Header;

const Lft = styled.div`
  width: 100%;
  height: 40px;
  background-color: green;
`;
const Right = styled.div`
  width: 100%;
  height: 40px;
  background-color: yellow;
`;
const Button = styled.div`
  width: 100%;
  height: 40px;
`;

const Ic = styled.div`
  display: flex;
  margin-top: 5px;
  justify-content: center;
  align-items: center;
`;

const DrWrap = styled.div`
  height: 150px;
  width: 300px;
  background-color: blue;
`;
const DropH = styled.div`
  height: 150px;
  width: 300px;
  background-color: gray;
  top: 65px;
  left: 150px;
  border: 1px solid black;
  position: absolute;
`;
const Nav4 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;

  &:hover {
    border-radius: 20px;
    background-color: grey;
    cursor: pointer;
  }
`;

const Card = styled.div`
  height: 550px;
  width: 97%;
  background-color: brown;
  position: absolute;
  right: 0;
  top: 70px;
  border: 3px solid black;
`;

const Icon = styled.div`
  @media screen and (max-width: 780px) {
    display: flex;
    cursor: pointer;
  }
  display: none;
  color: black;
  /* display: flex; */
`;

const ButtonTag = styled.div`
  display: flex;
  /* background-color: green; */
  width: 250px;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const Nav1 = styled.div`
  margin-right: 30px;
  font-size: 30px;
  font-weight: 500;
  font-style: italic;
`;

const Nav2 = styled.div``;

const Nav = styled.div`
  cursor: pointer;
  font-size: 13px;
`;

// const Svg = styled.div``;

const NavHold = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  /* background-color: yellow; */
  margin-right: 120px;

  @media screen and (max-width: 780px) {
    display: none;
  }
`;

const LogH = styled.div`
  display: flex;
  cursor: pointer;
`;

const Wrapper = styled.div`
  height: 60px;
  width: 97%;
  display: flex;
  /* background-color: red; */
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  height: 70px;
  width: 100%;
  /* background-color: blue; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
