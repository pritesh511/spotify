import {
  ArtistForm,
  ArtInputBlock,
  Label,
  Input,
  TextArea,
  AddBtn,
} from "./styles";

const AddArtistModal = ({ onClose }) => {
  return (
    <>
      <ArtistForm>
        <ArtInputBlock>
          <Label>Artist Name</Label>
          <Input type="text" placeholder="Artist Name" />
        </ArtInputBlock>
        <ArtInputBlock>
          <Label>Date of Birth</Label>
          <Input type="date" placeholder="Add Song Name" />
        </ArtInputBlock>
        <ArtInputBlock>
          <Label>Artist Name</Label>
          <TextArea type="text" placeholder="Add Song Name" />
        </ArtInputBlock>
        <AddBtn
          onClick={() => {
            onClose();
          }}
          type="button"
        >
          Add Artist
        </AddBtn>
      </ArtistForm>
    </>
  );
};

export default AddArtistModal;
