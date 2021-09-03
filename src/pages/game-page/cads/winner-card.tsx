import React from 'react';

import Card from 'components/card';
import useTheme from 'hooks/use-theme';
import pt from 'store/globalization/pt';
import TryAgainButton from '../try-again-button';

function WinnerCard(): JSX.Element {
  const theme = useTheme();

  return (
    <Card
      animation=""
      bgColor={theme.colors.secondaryBg}
      body={<div>{pt.winnerMessage}</div>}
      footer={<TryAgainButton />}
    />
  );
}

export default WinnerCard;
