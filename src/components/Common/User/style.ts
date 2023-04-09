import styled from "styled-components";

export const UserContainer = styled.div`
  width: 100%;
  height: calc(100vh - 82px);

  position: absolute;
  bottom: 0;
`;

export const UserInfoContainer = styled.div`
  width: 100%;
  height: 30vh;

  background-color: #f2f8ff;
  margin-top: 2px;
  text-align: center;
  padding-top: 15px;
`;

export const UserName = styled.div`
  margin-top: 20px;
  font-size: 20px;
`;

export const UserAbleContainer = styled.div`
  width: 100%;
  height: calc(70vh - 82px);

  position: absolute;
  bottom: 0;
  background-color: #ebeef2;

  display: flex;
`;

export const LeftLayout = styled.div`
  width: 45%;
  height: calc(70vh - 82px);

  display: flex;
  flex-direction: column;
`;

export const MyStudyRecord = styled.div`
  width: 500px;
  height: 400px;
  background-color: #ffffff;

  border-radius: 1rem;
  margin-top: 20px;
  box-shadow: 0 0 10px #9199f5;

  animation: fadein 1s;
  -moz-animation: fadein 1s;
  -webkit-animation: fadein 1s;
  -o-animation: fadein 1s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-moz-keyframes fadein {
    /* Firefox */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadein {
    /* Safari and Chrome */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-o-keyframes fadein {
    /* Opera */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const RightLayout = styled.div`
  width: 55%;
  height: calc(70vh - 82px);

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`;

export const MyListsWrap = styled.div`
  width: 600px;
  height: 90%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  align-items: center;
  justify-content: center;

  margin-top: 45px;

  overflow-y: scroll;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    display: none;
  }
`;
