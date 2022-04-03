import React from "react";
import loaderGif from "../../loading.gif";
import { LoaderContainer } from "./LoaderStyle";

function Loader() {
  return (
    <LoaderContainer>
      <img src={loaderGif} alt="" />
    </LoaderContainer>
  );
}

export default Loader;
