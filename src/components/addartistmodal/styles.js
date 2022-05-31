import styled from "styled-components";

const ArtistForm = styled.form`
  padding: 40px;
`;
const ArtInputBlock = styled.div`
  width: 100%;
  margin: 0 0 12px 0;
`;
const Label = styled.label`
  font-size: 16px;
  line-height: 24px;
  display: block;
  margin: 0 0 6px 0;
`;
const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: -webkit-fill-available;
`;
const TextArea = styled.textarea`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: -webkit-fill-available;
  height: 120px;
`;
const AddBtn = styled.button`
  padding: 6px 10px;
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  background-color: rgb(60, 124, 232);
  border: 1px solid rgb(46, 105, 206);
  border-radius: 26px;
  color: white;
  cursor: pointer;
  outline: none;
  width: 20%;
`;

export { ArtistForm, ArtInputBlock, Label, Input, TextArea, AddBtn };
