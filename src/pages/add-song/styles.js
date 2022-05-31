import styled from "styled-components";

const AddSongContainer = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 30px auto;
`;
const AddSongForm = styled.form`
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const InputBlock = styled.div`
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
const ArtistSelectBlock = styled.div``;
const SelectWrap = styled.div``;
const SelectBox = styled.div``;
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
`;

export {
  AddSongContainer,
  AddSongForm,
  InputBlock,
  Label,
  Input,
  ArtistSelectBlock,
  SelectWrap,
  SelectBox,
  AddBtn,
};
