import { useEffect, useState } from "react";
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
  const [songData, setSongData] = useState([]);
  const [artistData, setArtistData] = useState([]);
  // const [artistImage, setArtistImage] = useState([]);
  const fetchData = async () => {
    await fetch("/song", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((actualData) => setSongData(actualData))
      .catch((err) => {
        console.log(err.message);
      });
  };

  const fetchArtisData = async () => {
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

  console.log("songData", songData);

  useEffect(() => {
    fetchData();
    fetchArtisData();
  }, []);

  const handleArtistName = (artistName) => {
    console.log("artistname", artistName);
    return artistName.map((item, index) => {
      return <span>{item?.name}, </span>;
    });
  };

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
            {songData?.map((item, index) => {
              return (
                <>
                  <Tr key={index}>
                    <Td>
                      <ArtistImage>
                        <img src={img1} alt="ar-img-1"></img>
                      </ArtistImage>
                    </Td>
                    <Td>{item?.name}</Td>
                    <Td>{item?.dor}</Td>
                    <Td>{handleArtistName(item?.artists)}</Td>
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
                </>
              );
            })}
          </DataBody>
        </DataTable>
        <DataTable>
          <DataThead>
            <Th>Artist Name</Th>
            <Th>DOB</Th>
            <Th>Bio</Th>
          </DataThead>
          <DataBody>
            {artistData?.map((item, index) => {
              return (
                <>
                  <Tr key={index}>
                    <Td>{item?.name}</Td>
                    <Td>{item?.dob}</Td>
                    <Td>{item?.bio}</Td>
                  </Tr>
                </>
              );
            })}
          </DataBody>
        </DataTable>
      </Container>
    </>
  );
};

export default Home;
