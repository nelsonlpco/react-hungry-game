import React from 'react';
import { useSelector } from 'react-redux';

import gameSelectors from 'store/game/selectors';
import Card from 'components/card';
import useTheme from 'hooks/use-theme';
import pt from 'store/globalization/pt';
import TryAgainButton from '../try-again-button';

function WinnerCard(): JSX.Element {
  const theme = useTheme();

  const animation = useSelector(gameSelectors.getAnimation);
  const showWinnerModal = useSelector(gameSelectors.showWinnerModal);

  if (!showWinnerModal) return <></>;

  return (
    <Card
      animation={animation}
      bgColor={theme.colors.secondaryBg}
      body={<div>{pt.winnerMessage}</div>}
      footer={<TryAgainButton />}
    />
  );
}

export default WinnerCard;
