import React from "react";
import styled from "styled-components";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
const AppStyled = styled.div.attrs({
  className:
    "font-montserrat font-light tracking-widest  font-normal w-full  col-start-3 col-end-11 lg:col-start-3 lg:col-end-11 xl:col-end-11 xl:col-start-3 ",
})``;
const App = () => {
  return (
    <div className="w-full bg-black10  grid grid-cols-12  text-yellow-golden">
      <AppStyled>
        <Header />
        <Content />
        <Footer />
      </AppStyled>
    </div>
  );
};

export default App;
