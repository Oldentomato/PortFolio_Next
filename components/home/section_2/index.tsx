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
          description="GIGDC 고등부 동상 수상, AppJam 참여"
        />
        <Experience
          year="2021"
          title="Activies"
          description="폭스러닝 딥레이서 행사 참여, 교내 게임제작 동아리 멘토"
        />
        <Experience
          year="2022"
          title="AI"
          description="소프트웨어야놀자 AI 교육 멘토, 춘계학술대회 우수논문상 수상"
        />
        <Experience
          year="2022"
          title="Hackathon"
          description="AI-X 해커톤 참여, 고양시 데이터톤 참여, CDS빅데이터 경진대회 최우수상 수상"
        />
        <Experience
          year="2023"
          title="Participation"
          description="네이버 DEVIEW 참여"
        />
      </section>
    </Container>
  );
}

export default ExperienceItems;
