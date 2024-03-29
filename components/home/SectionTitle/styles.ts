import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  h1 {
    background: linear-gradient(to right, #31ffff 0%, #7125e8 100%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-size: 4.5rem;
  }

  h2 {
    color: ${({ theme }) => theme.secondary};
    font-weight: 300;
    font-size: 3.5rem;
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 1.8rem;
    }

    h2 {
      font-size: 1.2rem;
    }
  }
`;
