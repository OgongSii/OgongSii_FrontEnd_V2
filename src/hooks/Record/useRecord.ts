import { useCallback, useState } from "react";
import { useRecordMutation } from "../../queries/Record/record.query";
import { B1ndToast } from "@b1nd/b1nd-toastify";
import { ISMODAL } from "../../store/Modal/modalAtom";
import { useSetRecoilState } from "recoil";
import { recordType } from "../../types/Record/record.type";
import { QueryClient } from "react-query";

export function useRecord() {
  const [numberHourText, SetNumberHourText] = useState<string>("");
  const [numberMinuteText, SetNumberMinuteText] = useState<string>("");
  const isModal = useSetRecoilState<boolean>(ISMODAL);

  const recordMutate = useRecordMutation();
  const queryClient = new QueryClient();

  const onNumberChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.name === "hour" && !isNaN(Number(e.target.value))) {
        SetNumberHourText(e.target.value);
      } else {
        if (!isNaN(Number(e.target.value))) {
          SetNumberMinuteText(e.target.value);
        }
      }
    },
    []
  );

  const onRecordSubmit = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (
        numberHourText &&
        numberMinuteText &&
        Number(numberHourText) <= 24 &&
        Number(numberMinuteText) >= 0
      ) {
        const recordData: recordType = {
          h: Number(numberHourText),
          m: Number(numberMinuteText),
        };
        recordMutate.mutateAsync(recordData, {
          onSuccess: () => {
            B1ndToast.showSuccess("공부한 시간을 등록하였습니다!");
            queryClient.invalidateQueries("record");
            isModal(false);
          },
          onError: () => {
            B1ndToast.showError("공부한 시간을 등록하지 못했습니다!");
          },
          onSettled: () => {
            SetNumberHourText("");
            SetNumberMinuteText("");
          },
        });
      } else B1ndToast.showInfo("제대로 입력해주세요!");
    },
    [isModal, numberHourText, numberMinuteText]
  );

  return { onNumberChange, numberHourText, numberMinuteText, onRecordSubmit };
}
