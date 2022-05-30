import styled from "styled-components";

const TopButton = styled.div`
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const PrimaryButton = styled.button`
  padding: 8px 12px;
  font-size: 16px;
  line-height: 24px;
  background-color: rgb(60, 124, 232);
  border: 1px solid rgb(46, 105, 206);
  border-radius: 26px;
  color: white;
  cursor: pointer;
  outline: none;
`;
const Container = styled.div`
  max-width: 1232px;
  width: 100%;
  padding: 0 16px;
  margin: auto;
`;
const TopTitle = styled.h1`
  margin: 0;
  font-size: 32px;
  line-height: 40px;
  color: #000;
`;
const DataTable = styled.table`
  margin-top: 32px;
  width: 100%;
`;
const DataThead = styled.thead``;
const DataBody = styled.tbody``;
const Th = styled.th`
  width: 20%;
  border: 1px solid #000;
  font-size: 20px;
  line-height: 30px;
`;
const Tr = styled.tr``;
const Td = styled.td`
  text-align: center;
`;

export {
  TopButton,
  PrimaryButton,
  TopTitle,
  Container,
  DataTable,
  DataThead,
  DataBody,
  Th,
  Tr,
  Td,
};
