import { ItemContainer } from './styles';
import Parser from 'html-react-parser';

interface ExperienciaProps {
  year: string;
  title: string;
  description: string;
}

export default function ExperienciaItem({
  year,
  title,
  description
}: ExperienciaProps) {
  return (
    <ItemContainer data-aos="fade-up">
      <div>
        <h1>{year}</h1>
        <h2>{title}</h2>
        <p>{Parser(description)}</p>
      </div>
    </ItemContainer>
  );
}
