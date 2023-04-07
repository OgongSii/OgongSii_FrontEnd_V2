import React from "react";
import * as S from "./style";

function HomeList() {
  return <S.ListContainer isModal={false}></S.ListContainer>;
}

export default React.memo(HomeList);