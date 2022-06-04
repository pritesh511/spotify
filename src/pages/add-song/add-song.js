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
import React, { useState, useEffect } from "react";
import { Modal } from "baseui/modal";
import { Select, TYPE } from "baseui/select";
import AddArtistModal from "../../components/addartistmodal/addartistmodal";

export const songData = {
  songName: "",
  releaseDate: "",
  songImage: "",
};

const AddSong = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [value, setValue] = useState([]);
  const [artistData, setArtistData] = useState([]);
  const [songData, setSongData] = useState({
    songName: "",
    releaseDate: new Date(),
    songImage: "",
    artistArray: [],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { songName, releaseDate, songImage, artistArray } = songData;
    await fetch("/song", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
        crossdomain: true,
      },
      body: JSON.stringify({
        songName,
        releaseDate,
        songImage,
        artistArray,
      }),
    }).then(() => alert("You have been added to the system!"));
  };

  const fetchData = async () => {
    await fetch("/artist", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((actualData) => setArtistData(actualData))
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <AddSongContainer>
        <Heading>Add Artist</Heading>
        <AddSongForm
          onSubmit={(e) => {
            handleSubmit(e);
            setSongData({
              songName: "",
              releaseDate: new Date(),
              songImage: "",
            });
          }}
        >
          <InputBlock>
            <Label>Song Name</Label>
            <Input
              type="text"
              placeholder="Add Song Name"
              value={songData?.songName}
              onChange={(e) => {
                setSongData({
                  ...songData,
                  songName: e.target.value,
                });
              }}
            />
          </InputBlock>
          <InputBlock>
            <Label>Released Date</Label>
            <Input
              type="date"
              placeholder="Add Song Name"
              value={songData?.releaseDate}
              onChange={(e) => {
                setSongData({
                  ...songData,
                  releaseDate: e.target.value,
                });
              }}
            />
          </InputBlock>
          <InputBlock>
            <Label>Select Image</Label>
            <Input
              type="file"
              accept="image/png, image/jpg, image/svg"
              placeholder="Add Song Name"
              value={songData?.songImage}
              onChange={(e) => {
                setSongData({
                  ...songData,
                  songImage: e.target.value,
                });
              }}
            />
          </InputBlock>
          <ArtistSelectBlock>
            <Label>Select Artist</Label>
            <SelectWrap>
              <SelectBox>
                <Select
                  options={artistData}
                  labelKey="name"
                  valueKey="name"
                  placeholder="Choose a color"
                  maxDropdownHeight="300px"
                  type={TYPE.search}
                  multi
                  onChange={({ value }) => {
                    console.log("value", value);
                    setSongData({
                      ...songData,
                      artistArray: value,
                    });
                  }}
                  value={songData?.artistArray}
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
          <AddBtn className="submit-btn" type="submit">
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
