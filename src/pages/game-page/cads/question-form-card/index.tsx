import React from 'react';
import { useSelector } from 'react-redux';

import gameSelectors from 'store/game/selectors';

import FoodQuestion from './food-card';
import QualityQuestion from './quality-card';

function QuestionFormCard(): JSX.Element {
  const showQuestionModal = useSelector(gameSelectors.showQuestionModal);

  if (showQuestionModal) {
    return (
      <>
        <FoodQuestion key="food" />
        <QualityQuestion key="quality" />
      </>
    );
  }

  return <></>;
}

export default QuestionFormCard;
