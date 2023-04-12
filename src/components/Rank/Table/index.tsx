import { RankContainer } from "../style";
import Today from "./Today";
import Total from "./Total";
import * as S from "./style";

interface Props {
  isTotal: boolean;
}

export default function Table({ isTotal }: Props) {
  return (
    <>
      <S.Property isProperty={true}>
        <div>유저네임</div>
        <div>공부한 시간</div>
      </S.Property>

      <S.TupleContainer>{isTotal ? <Total /> : <Today />}</S.TupleContainer>
    </>
  );
}
