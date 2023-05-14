import { ReactNode } from 'react';
import { Container } from './styles';

interface SectionTitleProps {
  title: string | ReactNode;
  description?: string | ReactNode;
}

function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <Container data-aos="fade-right">
      <h1 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">{title}</h1>
      {description && <h2>{description}</h2>}
    </Container>
  );
}

export default SectionTitle;
