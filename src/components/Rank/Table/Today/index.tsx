import { useGetTodayRecord } from "../../../../queries/Record/record.query";
import { Property, UserStudyedTime } from "../style";

export default function Today() {
  const { data: getTodayRank } = useGetTodayRecord();
  return (
    <>
      {getTodayRank?.map((data,idx) => (
        <Property isProperty={false} key={idx}>
          <div>{data.name?.split("@")[0]}</div>
          <UserStudyedTime>
            {data.hour}시간 {data.minutes}분
          </UserStudyedTime>
        </Property>
      ))}
    </>
  );
}
