import styled from "styled-components";
import * as m from "../../../globalStyles/mixin.style";

export const Title = styled.div`
  user-select: none;
  margin: 3.5rem 0 4.5rem 0;

  .title__h1 {
    font-size: ${m.size("large")};
    font-weight: ${m.weight("bold")};
    text-align: center;
  }

  ${m.mobileDown} {
    .title {
      user-select: none;
      margin: 1.5rem 0;

      .title__h1 {
        font-size: ${m.size("large")};
      }
    }
  }

  ${m.mobile} {
    .title {
      user-select: none;
      margin: 1.5rem 0;

      .title__h1 {
        font-size: ${m.size("large")};
      }
    }
  }
`;
