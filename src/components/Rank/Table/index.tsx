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
        <S.UserStudyedTime>공부한 시간</S.UserStudyedTime>
      </S.Property>

      <S.TupleContainer>{isTotal ? <Total /> : <Today />}</S.TupleContainer>
    </>
  );
}
