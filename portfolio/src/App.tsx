import React from "react";
import { Helmet } from "react-helmet";
import { RecoilRoot, useRecoilValue } from "recoil";
import { MyDataTitleSelector } from "../src/store/ProfileAtom";

function App() {
  const title = useRecoilValue(MyDataTitleSelector);
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}

function Root() {
  return (
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
}

export default Root;
