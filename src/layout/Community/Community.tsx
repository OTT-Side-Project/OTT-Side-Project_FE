import * as S from "./CommunityStyle";
const Community = () => {
  return (
    <S.Community>
      <S.MenuList>
        <S.MenuShort>전체</S.MenuShort>
        <S.MenuShort>액션</S.MenuShort>
        <S.MenuShort>코미디</S.MenuShort>
        <S.MenuShort>드라마</S.MenuShort>
        <S.MenuLong>공포/스릴러</S.MenuLong>
      </S.MenuList>
      <S.Write>
        <S.WriteButton>글 작성하기</S.WriteButton>
      </S.Write>
      <S.BoardList>
        <S.Board></S.Board>
        <S.Board></S.Board>
        <S.Board></S.Board>
        <S.Board></S.Board>
      </S.BoardList>
    </S.Community>
  );
};

export default Community;
