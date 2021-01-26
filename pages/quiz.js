import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import GitHubCorner from '../src/components/GitHubCorner';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Quiz() {
  const router = useRouter();
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
            <p>
              Seja bem vindo,
              {' '}
              {router.query.name}
              {' '}
            </p>
          </Widget.Header>
          <Widget.Content>
            <img src={db.questions[0].image} alt="" />
            <h2>{db.questions[0].title}</h2>
            <p>{db.questions[0].description}</p>
            <QuizContainer>{db.questions[0].alternatives[0]}</QuizContainer>
            <QuizContainer>{db.questions[0].alternatives[1]}</QuizContainer>
            <QuizContainer>{db.questions[0].alternatives[2]}</QuizContainer>
            <QuizContainer>{db.questions[0].alternatives[3]}</QuizContainer>
            <button type="submit">Confirmar</button>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/lucianowribeiro" />
    </QuizBackground>
  );
}
