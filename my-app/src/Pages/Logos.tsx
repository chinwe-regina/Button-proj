import styled from "styled-components";
import Image from "../Assets/Vercel_ The_Washington_files/adobe.svg";
import Imag from "../Assets/Vercel_ The_Washington_files/okta.svg";
import Image2 from "../Assets/Vercel_ The_Washington_files/under-armour.svg";
import Image3 from "../Assets/Vercel_ The_Washington_files/ebay.svg";
import Image4 from "../Assets/Vercel_ The_Washington_files/zapier.svg";
import Imaga from "../Assets/Vercel_ The_Washington_files/loom.svg";
import Imagb from "../Assets/Vercel_ The_Washington_files/hashicorp.svg";
import Imagc from "../Assets/Vercel_ The_Washington_files/tailwindcss_logo.svg";
import Imagd from "../Assets/Vercel_ The_Washington_files/washingtonpost.svg";

const Logos = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <H1>Trusted by the best frontend team</H1>
          <LogoWrap>
            <Logo1>
              <Nav src={Image}></Nav>
              <Nav src={Imag}></Nav>
              <Nav src={Image2}></Nav>
              <Nav src={Image3}></Nav>
              <Nav src={Image4}></Nav>
            </Logo1>
            <Logo2>
              <Nav src={Imaga}></Nav>
              <Nav src={Imagb}></Nav>
              <Nav src={Imagc}></Nav>
              <Nav src={Imagd}></Nav>
            </Logo2>
          </LogoWrap>
          <H1>EXPLORE THE VERCEL WAY</H1>
          <Obj>
            <Vr></Vr>
            <Circle>1</Circle>
          </Obj>
          <Dev>Develop</Dev>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Logos;

const Nav = styled.img`
  height: 60px;
  width: 90px;
`;

const Circle = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #007cf0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Vr = styled.div`
  height: 70px;
  width: 1px;
  background-color: #007cf0;
  margin-left: 19px;
`;

const Obj = styled.div`
  height: 82px;
  width: 10px;
`;

const Dev = styled.div`
  height: 20px;
  width: 30px;
  font-size: 900;
  font-weight: 40px;
  margin-left: 15px;
`;

const H1 = styled.div``;

const Logo1 = styled.div`
  height: 90px;
  width: 750px;
  /* background-color: blue; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo2 = styled.div`
  height: 90px;
  width: 750px;
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoWrap = styled.div`
  height: 200px;
  width: 800px;
  /* background-color: gray; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;
const Wrapper = styled.div`
  width: 80%;
  height: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  /* background-color: gold; */
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
