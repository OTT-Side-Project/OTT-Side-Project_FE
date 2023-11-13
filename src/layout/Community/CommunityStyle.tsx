import styled from "styled-components";

export const Community = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const MenuList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MenuShort = styled.div`
  cursor: pointer;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 35px;
  margin: 25px 16px 0 0;
  border-radius: 25px;
  border: 1px solid #9595955c;
  background: #efefef7d;
`;
export const MenuLong = styled.div`
  cursor: pointer;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 35px;
  margin: 20px 16px 0 0;
  border-radius: 25px;
  border: 1px solid #9595955c;
  background: #efefef7d;
`;

export const Write = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`;
export const WriteButton = styled.div`
  color: #000;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  width: 320px;
  height: 32px;
  padding: 5px 0px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid var(--rest-borders-default-border, #d1d1d1);
  background: var(--light-theme-rest-background-default-background, #fff);
  box-shadow: 0px 1.6px 3.6px 0px rgba(0, 0, 0, 0.11),
    0px 0.3px 0.9px 0px rgba(0, 0, 0, 0.07);
`;

export const BoardList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 25px;
`;
export const Board = styled.div`
  width: 400px;
  height: 215px;
  margin: 0 25px 25px 25px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0px 0.8px 1.8px 0px rgba(0, 0, 0, 0.13),
    0px 0.15px 0.45px 0px rgba(0, 0, 0, 0.11);
`;
