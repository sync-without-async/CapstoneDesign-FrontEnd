import styled from "styled-components";
import player from "../../assets/icons/player.png";
import Pagination from "../Pagination/Pagination";
import { getUserExercises } from "../../librarys/login-api";
import SearchBar from "../Input/SearchBar";
import DropdownFilter from "../Dropdown/DropdownFilter";

const Container = styled.div`
  width: 800px;
  height: 635px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #0064ff;
  border-radius: 10px;
  background-color: #ffffff;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 15px;
`;

const Divider = styled.hr`
  width: 100%;
  height: 1px;
  background-color: #d9d9d9;
  border: none;
  margin-bottom: 20px;
`;

const SearchAndFilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  height: 40px;
  border-bottom: 1px solid #e1e1e1;
  font-size: 14px;
`;

const TableCell = styled.td`
  padding: 10px 15px;
  &:first-child {
    width: 150px;
  }
  &:nth-child(2) {
    width: 150px;
  }
  &:nth-child(3) {
    width: 150px;
  }
  &:nth-child(4) {
    width: 150px;
  }
  &:nth-child(5) {
    width: 150px;
  }
`;

const TableHeader = styled.th`
  background-color: #f3f3f3;
  height: 40px;
  border-bottom: 2px solid #d9d9d9;
  font-size: 14px;
  color: #666666;
  text-align: left;
  padding-left: 15px;
  
  &:first-child {
    width: 150px;
  }
  &:nth-child(2) {
    width: 150px;
  }
  &:nth-child(3) {
    width: 150px;
  }
  &:nth-child(4) {
    width: 150px;
  }
  &:nth-child(5) {
    width: 150px;
  }
`;

const PlayerIcon = styled.img`
  width: 18px;
  height: 18px;
`;

const filterlist=["오늘 외래 순", "최신 등록 순", "수행도 높은 순"];

const DoctorPatientList = () => {
  const userId = "HL0001"; 
  const exercises = getUserExercises(userId);

  const totalItems = 40; 
  const itemsPerPage = 8;

  const handlePageChange = (selectedPage) => {
    console.log("Selected page:", selectedPage);
  };
  return (
    <Container>
      <Title>환자 목록</Title>
      <Divider />
      <SearchAndFilterContainer>
        <SearchBar />
        <DropdownFilter items={filterlist} />
      </SearchAndFilterContainer>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>환자 이름</TableHeader>
            <TableHeader>생년월일(만 나이)</TableHeader>
            <TableHeader>과제 수행도</TableHeader>
            <TableHeader>담당 재활치료사</TableHeader>
            <TableHeader>다음 외래 일정</TableHeader>
            <TableHeader>차트</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {exercises.map((exercise, index) => (
            <TableRow key={index}>
              <TableCell>
                {// 담당하는 환자 이름
                }
              </TableCell>
              <TableCell>
                {// 담당하는 환자의 생년월일
                }
              </TableCell>
              <TableCell>
                {// 담당하는 환자의 과제 수행도
                }
              </TableCell>
              <TableCell>
                {// 담당하는 환자의 재활치료사 이름
                }
              </TableCell>
              <TableCell>
                {//담당하는 환자의 다음 외래 일정
                }              
                </TableCell>
              <TableCell>
                <PlayerIcon src={player} alt="Player Icon" />
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>

      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onChange={handlePageChange}
      />
    </Container>
  );
};

export default DoctorPatientList;
