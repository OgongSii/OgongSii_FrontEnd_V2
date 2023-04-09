import { customAxios } from "../../lib/Axios/customAxios";
import { recordTimeType, recordType } from "../../types/Record/record.type";

class RecordRepository {
  public async onPostRecord(recordData: recordType): Promise<void> {
    await customAxios.post("record/", recordData);
  }

  public async onGetTotalRecord(): Promise<recordTimeType[]> {
    const { data } = await customAxios.get("rank/total");
    return data;
  }
  public async onGetTodayRecord(): Promise<recordTimeType[]> {
    const { data } = await customAxios.get("rank/today");
    return data;
  }
}

export default new RecordRepository();
