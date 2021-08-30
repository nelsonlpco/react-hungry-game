import React, { useState, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import pt from 'store/globalization/pt';

import Card from 'components/card';
import Button from 'components/button';
import useTheme from 'hooks/use-theme';

import gameSelectors from 'store/game/selectors';
import questionSelectors from 'store/question/selectors';
import questionActions from 'store/question/actions';
import QuestionForm from '../../../../components/question-form';

function FoodQuestion(): JSX.Element {
  const dispatch = useDispatch();
  const theme = useTheme();
  const animation = useSelector(gameSelectors.getAnimation);
  const question = useSelector(questionSelectors.getQuestion);

  const showQuestionModal = useSelector(gameSelectors.showQuestionModal);
  const showFoodModal = useSelector(questionSelectors.showFoodModal);
  const showFoodCard = showQuestionModal && showFoodModal;

  const [food, setFood] = useState('');

  const setFoodHandler = useCallback((value: string) => {
    setFood(value);
  }, []);

  const nextHandler = useCallback(() => {
    if (food.length > 3) dispatch(questionActions.setFoodAsync(food));
  }, [dispatch, food]);

  const nextButton = useMemo(
    () => (
      <Button
        width="100%"
        color={food.length > 3 ? theme.colors.ok : theme.colors.off}
        onClickHandler={nextHandler}
      >
        {pt.next}
      </Button>
    ),
    [nextHandler, food],
  );

  if (!showFoodCard) return <></>;

  return (
    <Card
      animation={animation}
      bgColor={theme.colors.secondaryBg}
      body={
        <QuestionForm
          question={question}
          placeholder={pt.favoriteFood}
          onChange={setFoodHandler}
          value={food}
          onEnter={nextHandler}
        />
      }
      footer={nextButton}
    />
  );
}

export default FoodQuestion;
