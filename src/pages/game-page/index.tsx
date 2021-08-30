/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import gameActions from 'store/game/actions';
import Container from 'components/container';
import useTheme from 'hooks/use-theme';
import WinnerCard from './cads/winner-card';
import YesNoCard from './cads/yes-no-card';
import QuestionFormCard from './cads/question-form-card';

function GamePage(): JSX.Element {
  const dispatch = useDispatch();
  const theme = useTheme();

  useEffect(() => {
    dispatch(gameActions.start());
  }, [dispatch]);

  return (
    <Container bgColor={theme.colors.primaryBg}>
      <YesNoCard key="yesno" />
      <WinnerCard key="winner" />
      <QuestionFormCard key="questionform" />
    </Container>
  );
}

export default GamePage;
