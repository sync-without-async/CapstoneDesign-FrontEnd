import BackButton from "../../components/Button/BackButton";
import PageContainer from "../../components/Common/PageContainer";
import ReservationList from "../../components/Reservation/ReservationList.jsx";

const DoctorUntactReservePage = () => {
  return (
    <PageContainer>
      <BackButton text="대시보드로 돌아가기" />
      <ReservationList />
    </PageContainer>
  );
};

export default DoctorUntactReservePage;
