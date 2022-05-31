import {
  PrimaryButton,
  TopButton,
  TopTitle,
  Container,
  DataTable,
  DataThead,
  Th,
  DataBody,
  Tr,
  Td,
  ArtistImage,
  StartList,
  StartItem,
} from "./styles";
import img1 from "../../assets/images/ar-img-1.jpg";
import starIcon from "../../assets/images/star.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <TopButton>
          <PrimaryButton
            onClick={() => {
              navigate("/add-song");
            }}
          >
            Add Song
          </PrimaryButton>
        </TopButton>
        <TopTitle>Top 10 Songs</TopTitle>
        <DataTable>
          <DataThead>
            <Th>Artists Photo</Th>
            <Th>Song</Th>
            <Th>Date of Release</Th>
            <Th>Artists</Th>
            <Th>Rate</Th>
          </DataThead>
          <DataBody>
            <Tr>
              <Td>
                <ArtistImage>
                  <img src={img1} alt="ar-img-1"></img>
                </ArtistImage>
              </Td>
              <Td>Tere Bin jina</Td>
              <Td>12 may, 2020</Td>
              <Td>Arijit Sing</Td>
              <Td>
                <StartList>
                  <StartItem>
                    <img src={starIcon} alt="ar-img-1"></img>
                  </StartItem>
                  <StartItem>
                    <img src={starIcon} alt="ar-img-1"></img>
                  </StartItem>
                  <StartItem>
                    <img src={starIcon} alt="ar-img-1"></img>
                  </StartItem>
                </StartList>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <ArtistImage>
                  <img src={img1} alt="ar-img-1"></img>
                </ArtistImage>
              </Td>
              <Td>Tere Bin jina</Td>
              <Td>12 may, 2020</Td>
              <Td>Arijit Sing</Td>
              <Td>
                <StartList>
                  <StartItem>
                    <img src={starIcon} alt="ar-img-1"></img>
                  </StartItem>
                  <StartItem>
                    <img src={starIcon} alt="ar-img-1"></img>
                  </StartItem>
                  <StartItem>
                    <img src={starIcon} alt="ar-img-1"></img>
                  </StartItem>
                </StartList>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <ArtistImage>
                  <img src={img1} alt="ar-img-1"></img>
                </ArtistImage>
              </Td>
              <Td>Tere Bin jina</Td>
              <Td>12 may, 2020</Td>
              <Td>Arijit Sing</Td>
              <Td>
                <StartList>
                  <StartItem>
                    <img src={starIcon} alt="ar-img-1"></img>
                  </StartItem>
                  <StartItem>
                    <img src={starIcon} alt="ar-img-1"></img>
                  </StartItem>
                  <StartItem>
                    <img src={starIcon} alt="ar-img-1"></img>
                  </StartItem>
                </StartList>
              </Td>
            </Tr>
          </DataBody>
        </DataTable>
      </Container>
    </>
  );
};

export default Home;
