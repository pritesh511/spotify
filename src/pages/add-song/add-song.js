import {
  AddBtn,
  AddSongContainer,
  AddSongForm,
  ArtistSelectBlock,
  Heading,
  Input,
  InputBlock,
  Label,
  SelectBox,
  SelectWrap,
} from "./styles";
import React, { useState } from "react";
import { Modal } from "baseui/modal";
import { Select, TYPE } from "baseui/select";
import AddArtistModal from "../../components/addartistmodal/addartistmodal";

const AddSong = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = React.useState([]);
  return (
    <>
      <AddSongContainer>
        <Heading>Add Artist</Heading>
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
              <SelectBox>
                <Select
                  options={[
                    { id: "AliceBlue", color: "#F0F8FF" },
                    { id: "AntiqueWhite", color: "#FAEBD7" },
                    { id: "Aqua", color: "#00FFFF" },
                    { id: "Aquamarine", color: "#7FFFD4" },
                    { id: "Azure", color: "#F0FFFF" },
                    { id: "Beige", color: "#F5F5DC" },
                  ]}
                  labelKey="id"
                  valueKey="color"
                  placeholder="Choose a color"
                  maxDropdownHeight="300px"
                  type={TYPE.search}
                  multi
                  onChange={({ value }) => setValue(value)}
                  value={value}
                />
              </SelectBox>
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
          <AddBtn
            className="submit-btn"
            type="button"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Save
          </AddBtn>
        </AddSongForm>
      </AddSongContainer>
      <Modal onClose={() => setIsOpen(false)} closeable isOpen={isOpen}>
        <AddArtistModal onClose={() => setIsOpen(false)} />
      </Modal>
    </>
  );
};

export default AddSong;
