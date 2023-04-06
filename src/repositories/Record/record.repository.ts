import { customAxios } from "../../lib/Axios/customAxios";
import { recordType } from "../../types/Record/record.type";

class RecordRepository {
  public async onPostRecord(recordData: recordType): Promise<void> {
    await customAxios.post("record/", recordData);
  }
}

export default new RecordRepository();
