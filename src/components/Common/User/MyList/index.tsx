import React from "react";
import { ListContainer } from "../../Home/HomeList/style";
import * as S from "./style";

function MyList() {
  return <ListContainer isModal={false}>내 게시글</ListContainer>;
}

export default React.memo(MyList);