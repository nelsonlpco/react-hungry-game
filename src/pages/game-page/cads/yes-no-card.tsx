import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import gameActions from 'store/game/actions';
import pt from 'store/globalization/pt';

import Card from 'components/card';
import Button from 'components/button';
import useTheme from 'hooks/use-theme';

import gameSelectors from 'store/game/selectors';

import { UserResponse } from 'store/domain/model/option-model';

function YesNoCard(): JSX.Element {
  const dispatch = useDispatch();
  const theme = useTheme();

  const showYesNoCard = useSelector(gameSelectors.showYesNoCard);
  const animation = useSelector(gameSelectors.getAnimation);
  const question = useSelector(gameSelectors.getQuestion);

  const yesButtonHandler = useCallback(() => {
    dispatch(gameActions.answerAsync(UserResponse.yes));
  }, [dispatch]);

  const noButtonHandler = useCallback(() => {
    dispatch(gameActions.answerAsync(UserResponse.no));
  }, [dispatch]);

  if (!showYesNoCard) return <></>;

  return (
    <Card
      animation={animation}
      bgColor={theme.colors.secondaryBg}
      body={
        <div>
          <b>{question}</b>
        </div>
      }
      footer={[
        <Button
          key="yesbutton"
          color={theme.colors.cancel}
          onClickHandler={noButtonHandler}
        >
          {pt.no}
        </Button>,
        <Button
          key="nobutton"
          color={theme.colors.ok}
          onClickHandler={yesButtonHandler}
        >
          {pt.yes}
        </Button>,
      ]}
    />
  );
}

export default YesNoCard;
