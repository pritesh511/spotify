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
} from "./styles";

const Home = () => {
  return (
    <>
      <Container>
        <TopButton>
          <PrimaryButton>Add Song</PrimaryButton>
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
                <img
                  src={"../../assets/images/ar-img-1.jpg"}
                  alt="ar-img-1"
                ></img>
              </Td>
              <Td>name</Td>
              <Td>name</Td>
              <Td>name</Td>
              <Td>name</Td>
            </Tr>
            <Tr>
              <Td>name</Td>
              <Td>name</Td>
              <Td>name</Td>
              <Td>name</Td>
              <Td>name</Td>
            </Tr>
          </DataBody>
        </DataTable>
      </Container>
    </>
  );
};

export default Home;
