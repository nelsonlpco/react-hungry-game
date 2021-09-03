import React, { useState, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from 'components/card';
import Button from 'components/button';
import useTheme from 'hooks/use-theme';

// import gameSelectors from 'store/game/selectors';
import questionActions from 'store/question/actions';
import questionSelectors from 'store/question/selectors';

import pt from 'store/globalization/pt';
import QuestionForm from '../../../../components/question-form';

function FoodQuestion(): JSX.Element {
  const dispatch = useDispatch();
  const theme = useTheme();
  // const animation = useSelector(gameSelectors.getAnimation);
  const question = useSelector(questionSelectors.getQuestion);

  const showFoodModal = useSelector(questionSelectors.showFoodModal);

  const [quality, setQuality] = useState('');

  const setQualityHandler = useCallback((value: string) => {
    setQuality(value);
  }, []);

  const nextHandler = useCallback(() => {
    if (quality.length > 3) dispatch(questionActions.setQualityAsync(quality));
  }, [dispatch, quality]);

  const nextButton = useMemo(
    () => (
      <Button
        width="100%"
        color={quality.length > 3 ? theme.colors.ok : theme.colors.off}
        onClickHandler={nextHandler}
      >
        {pt.next}
      </Button>
    ),
    [nextHandler, quality],
  );

  if (showFoodModal) return <></>;

  return (
    <Card
      animation=""
      bgColor={theme.colors.secondaryBg}
      body={
        <QuestionForm
          question={question}
          placeholder={pt.foodQuality}
          onChange={setQualityHandler}
          value={quality}
          onEnter={nextHandler}
        />
      }
      footer={nextButton}
    />
  );
}

export default FoodQuestion;
