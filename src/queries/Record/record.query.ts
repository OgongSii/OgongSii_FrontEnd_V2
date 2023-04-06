import { useMutation } from "react-query";
import recordRepository from "../../repositories/Record/record.repository";
import { recordType } from "../../types/Record/record.type";

export const useRecordMutation = () => {
  const mutation = useMutation("record", (recordData: recordType) =>
    recordRepository.onPostRecord(recordData)
  );
  return mutation;
};
