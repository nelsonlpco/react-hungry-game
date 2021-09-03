import React from 'react';

import FoodQuestion from './food-card';
import QualityQuestion from './quality-card';

function QuestionFormCard(): JSX.Element {
  return (
    <>
      <FoodQuestion key="food" />
      <QualityQuestion key="quality" />
    </>
  );
}

export default QuestionFormCard;
