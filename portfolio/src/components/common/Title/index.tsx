import React, { ReactNode } from "react";
import * as T from "./index.style";
import { useRecoilValue } from "recoil";
import { nicknameState } from "../../../store/ProfileAtom";

interface Porps {
  nicknameState: string;
}

const Title: React.FC = () => {
  const nickname = useRecoilValue<string | any>(nicknameState);

  return (
    <T.Title>
      <h1 className="title_h1">&#123 {nickname} &#125</h1>
    </T.Title>
  );
};

export default Title;
