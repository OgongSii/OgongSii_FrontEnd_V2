import { useGetTotalRecord } from "../../../../queries/Record/record.query";
import { Property, UserStudyedTime } from "../style";

export default function Total() {
  const { data: getTotalRank } = useGetTotalRecord();

  return (
    <>
      {getTotalRank?.map((data, idx) => (
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
