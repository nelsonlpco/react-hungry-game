/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import Container from 'components/container';
import useTheme from 'hooks/use-theme';
import WinnerCard from './cads/winner-card';
import YesNoCard from './cads/yes-no-card';
import QuestionFormCard from './cads/question-form-card';

function GamePage(): JSX.Element {
  const theme = useTheme();

  return (
    <Container bgColor={theme.colors.primaryBg}>
      <YesNoCard key="yesno" />
      <WinnerCard key="winner" />
      <QuestionFormCard key="questionform" />
    </Container>
  );
}

export default GamePage;
