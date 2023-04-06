import { useRecord } from "../../../../hooks/Record/useRecord";
import { Btn } from "../../Auth/Login/style";
import { Introduce } from "../Post/style";
import * as S from "./style";

export default function Record() {
  const { onNumberChange, numberHourText, numberMinuteText, onRecordSubmit } = useRecord();

  return (
    <S.RecordContainer>
      <Introduce isRecord={true}>얼마나 공부했는지 기록하세요!</Introduce>
      <S.RecordInput
        type="text"
        name="hour"
        placeholder="몇시간 공부하셨나요?"
        autoComplete="off"
        maxLength={2}
        value={numberHourText}
        onChange={onNumberChange}
      />
      <S.RecordInput
        type="text"
        name="minute"
        placeholder="몇분 공부하셨나요?"
        autoComplete="off"
        maxLength={2}
        value={numberMinuteText}
        onChange={onNumberChange}
      />

      <Btn isModal={true} isPost={false} onClick={onRecordSubmit}>
        등록하기
      </Btn>
    </S.RecordContainer>
  );
}
