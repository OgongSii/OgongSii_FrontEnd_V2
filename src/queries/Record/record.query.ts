import { useMutation, useQuery } from "react-query";
import recordRepository from "../../repositories/Record/record.repository";
import { recordType } from "../../types/Record/record.type";

export const useRecordMutation = () => {
  const mutation = useMutation("record", (recordData: recordType) =>
    recordRepository.onPostRecord(recordData)
  );
  return mutation;
};

export const useGetTotalRecord = () =>
  useQuery("rank/total", () => recordRepository.onGetTotalRecord());

export const useGetTodayRecord = () =>
  useQuery("rank/today", () => recordRepository.onGetTodayRecord());
