import { useCallback, useState } from "react";

export function useRecord() {
  const [numberHourText, SetNumberHourText] = useState<string>("");
  const [numberMinuteText, SetNumberMinuteText] = useState<string>("");

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

  return { onNumberChange, numberHourText, numberMinuteText };
}
