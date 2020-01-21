import React from "react";
import styled from "styled-components";
import TopMenu from "./top-menu";
import LeftMenu from "./left-menu";
import Head from "./core/head";
import { mq_md, padding } from '../variables/index'

const Outer = styled.div`
  background-color: #f4f4f4;
  display: grid;
  grid-template-rows: 75px auto;
  grid-template-areas: "HeaderArea" "InnerArea";
  grid-gap: 25px;
  min-height: 100%;
`;

const Inner = styled.div`
  grid-area: InnerArea;
  display: grid;
  grid-template-rows: 3fr;
  grid-template-columns: 2fr 7fr 1fr;
  grid-template-areas: "LeftArea ContentArea RightArea";
  max-width: ${mq_md};
  margin: 0 auto;
  grid-gap: 25px;
  padding: 0 25px;
  box-sizing: border-box;
  width: 100%;
`;

const Header = styled.div`
  grid-area: HeaderArea;
  height: 75px;
  z-index: 1000;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
`;

const LeftZone = styled.div`
  grid-area: LeftArea;
`;

const RightZone = styled.div`
  grid-area: RightArea;
`;

const Content = styled.div`
  grid-area: ContentArea;
  background-color: #f4f4f4;
  padding: 0 ${padding};
`;

const TemplateWrapper = ({ children }) => (
  <>
    <Head />
    <Outer>
      <Header>
        <TopMenu />
      </Header>
      <Inner>
        <LeftZone>
          <LeftMenu />
        </LeftZone>
        <Content>{children}</Content>
        <RightZone></RightZone>
      </Inner>
    </Outer>
  </>
);

export default TemplateWrapper;
