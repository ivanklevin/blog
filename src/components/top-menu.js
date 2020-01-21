import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { mq_md, padding } from "../variables/index";

const StyledLink = styled(props => <Link {...props} />)`
  color: #000;
  text-transform: uppercase;
  display: block;
  margin: 0 15px;
  box-sizing: border-box;
  text-decoration: none;
  padding-bottom: 10px;
  border-bottom: 2px solid #0773de;
`;

const Outer = styled.div`
  background-color: #fff;
  height: 100%;
`;

const Inner = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 2fr 7fr 1fr;
  grid-template-areas: "LeftArea CenterArea RightArea";
  max-width: ${mq_md};
  margin: 0 auto;
  grid-gap: 25px;
  padding: 0 25px;
  box-sizing: border-box;
`;

const LeftZone = styled.div`
  grid-area: LeftArea;
`;

const RightZone = styled.div`
  grid-area: RightArea;
`;

const CenterZone = styled.div`
  grid-area: CenterArea;
  padding: 0 ${padding};
`;

const Logo = styled.div`
  height: 100%;
  display: inline-flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
`;

const LogoIcon = styled.div`
  cursor: pointer;
  height: 50px;
  width: 50px;
  background-image: url("/img/logo-icon.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Menu = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: flex-end;
  margin: 0 -15px;
`;

const TopMenu = () => {
  return (
    <Outer>
      <Inner>
        <LeftZone>
          <Logo>
            <Link to="/">
              <LogoIcon />
            </Link>
          </Logo>
        </LeftZone>
        <CenterZone>
          <Menu>
            <StyledLink className="navbar-item" to="/about">
              Информация
            </StyledLink>
            <StyledLink className="navbar-item" to="/contact">
              Контакты
            </StyledLink>
          </Menu>
        </CenterZone>
        <RightZone></RightZone>
      </Inner>
    </Outer>
  );
};

export default TopMenu;
