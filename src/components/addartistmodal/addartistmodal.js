import { useState } from "react";
import {
  ArtistForm,
  ArtInputBlock,
  Label,
  Input,
  TextArea,
  AddBtn,
} from "./styles";

const AddArtistModal = ({ onClose }) => {
  const [artist, setArtist] = useState({
    name: "",
    dob: "",
    bio: "",
  });
  const handleChange = async (e) => {
    e.preventDefault();
    const { name, dob, bio } = artist;
    await fetch("/artist", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        dob,
        bio,
      }),
    }).then(() => alert("You have been added to the system!"));
  };

  return (
    <>
      <ArtistForm
        onSubmit={(e) => {
          handleChange(e);
          setArtist({
            name: "",
            dob: "",
            bio: "",
          });
        }}
      >
        <ArtInputBlock>
          <Label>Artist Name</Label>
          <Input
            type="text"
            placeholder="Artist Name"
            value={artist?.name}
            required={true}
            onChange={(e) => {
              setArtist({
                ...artist,
                name: e.target.value,
              });
            }}
          />
        </ArtInputBlock>
        <ArtInputBlock>
          <Label>Date of Birth</Label>
          <Input
            type="date"
            placeholder="Add Song Name"
            required={true}
            value={artist?.dob}
            onChange={(e) => {
              setArtist({
                ...artist,
                dob: e.target.value,
              });
            }}
          />
        </ArtInputBlock>
        <ArtInputBlock>
          <Label>Artist Name</Label>
          <TextArea
            type="text"
            placeholder="Add Song Name"
            required={true}
            value={artist?.bio}
            onChange={(e) => {
              setArtist({
                ...artist,
                bio: e.target.value,
              });
            }}
          />
        </ArtInputBlock>
        <AddBtn
          onClick={() => {
            onClose();
          }}
          type="submit"
        >
          Add Artist
        </AddBtn>
      </ArtistForm>
    </>
  );
};

export default AddArtistModal;
