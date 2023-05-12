import React, { ReactNode} from "react";
import * as S from "./index.style";

interface SubTitleProps {
    children: ReactNode;
}

const SubTitle: React.FC<SubTitleProps> = ({ children }) => {
    return (
        <S.subTitle>
            <S.subtitle>{children}</S.subtitle>
        </S.subTitle>
    )
}

export default SubTitle;