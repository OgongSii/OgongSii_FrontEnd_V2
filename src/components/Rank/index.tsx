import * as S from "./style";
import SiderBar from "../Common/SideBar";
import Table from "./Table";
import { useState } from "react";

export default function Rank() {
  const [isTotal, SetIsTotal] = useState<boolean>(true);

  return (
    <div>
      <SiderBar />
      <S.RankContainer>
        <S.ChooseContainer>
          <S.TotalRank onClick={() => SetIsTotal(true)} isTotal={isTotal}>
            Total 랭킹
          </S.TotalRank>
          <S.TodayRank onClick={() => SetIsTotal(false)} isTotal={isTotal}>
            Today 랭킹
          </S.TodayRank>
        </S.ChooseContainer>

        <S.RankingContainer>
          <Table isTotal={isTotal} />
        </S.RankingContainer>
      </S.RankContainer>
    </div>
  );
}
