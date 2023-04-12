import { useGetTodayRecord } from "../../../../queries/Record/record.query";
import { Property } from "../style";

export default function Today() {
  const { data: getTodayRank } = useGetTodayRecord();
  return (
    <>
      {getTodayRank?.map((data,idx) => (
        <Property isProperty={false} key={idx}>
          <div>{data.name?.split("@")[0]}</div>
          <div>
            {data.hour}시간 {data.minutes}분
          </div>
        </Property>
      ))}
    </>
  );
}
