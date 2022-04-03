import React from "react";
import Content from "./Components/Layout/Content/Content";
import Footer from "./Components/Layout/Footer/Footer";
import Header from "./Components/Layout/Header/Header";
import { MyPoKemonContextProvider } from "./Context/Context";

function App() {
  return (
    <>
      <MyPoKemonContextProvider>
        <Header />
        <Content />
        <Footer />
      </MyPoKemonContextProvider>
    </>
  );
}

export default App;
