import {
  AddBtn,
  AddSongContainer,
  AddSongForm,
  ArtistSelectBlock,
  Input,
  InputBlock,
  Label,
  SelectBox,
  SelectWrap,
} from "./styles";
import React, { useState } from "react";
import { Modal } from "baseui/modal";

const AddSong = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <AddSongContainer>
        <AddSongForm>
          <InputBlock>
            <Label>Song Name</Label>
            <Input type="text" placeholder="Add Song Name" />
          </InputBlock>
          <InputBlock>
            <Label>Released Date</Label>
            <Input type="date" placeholder="Add Song Name" />
          </InputBlock>
          <InputBlock>
            <Label>Select Image</Label>
            <Input
              type="file"
              accept="image/png, image/jpg, image/svg"
              placeholder="Add Song Name"
            />
          </InputBlock>
          <ArtistSelectBlock>
            <Label>Select Artist</Label>
            <SelectWrap>
              <SelectBox></SelectBox>
              <AddBtn
                type="button"
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                Add Artist
              </AddBtn>
            </SelectWrap>
          </ArtistSelectBlock>
        </AddSongForm>
      </AddSongContainer>
      <Modal onClose={() => setIsOpen(false)} closeable isOpen={isOpen}>
        <div>haadiadgiag</div>
      </Modal>
    </>
  );
};

export default AddSong;
