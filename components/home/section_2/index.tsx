import SectionTitle from '../SectionTitle';
import Experience from './Experience';
import { Container } from './styles';

function ExperienceItems() {
  return (
    <Container>
      <SectionTitle 
        title="My Activity Experience"
      />
      <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        Here&apos;s what I did before activities
      </h3>
      <section>
        <Experience
          year="2016"
          title="Game Develop"
          description="GIGDC 고등부 동상 수상          <br/>AppJam 참여   "
        />
        <Experience
          year="2021"
          title="Activies"
          description="폭스러닝 딥레이서 행사 참여<br/>교내 게임제작 동아리 멘토             "
        />
        <Experience
          year="2022"
          title="AI"
          description="소프트웨어야놀자 AI 교육 멘토<br/>춘계학술대회 우수논문상 수상<br/>CDS빅데이터 경진대회 최우수상 수상"
        />
        <Experience
          year="2022"
          title="Participation"
          description="AI-X 해커톤 참여<br/>고양시 데이터톤 참여<br/>ICT 한이음멘토링 참여                  "
        />
        <Experience
          year="2023"
          title="Participation"
          description="네이버 DEVIEW 참여 <br/>ETRI 연구원 인턴                "
        />
      </section>
    </Container>
  );
}

export default ExperienceItems;
