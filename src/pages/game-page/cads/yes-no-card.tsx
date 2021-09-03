import React from 'react';
import pt from 'store/globalization/pt';

import Card from 'components/card';
import Button from 'components/button';
import useTheme from 'hooks/use-theme';

function YesNoCard(): JSX.Element {
  const theme = useTheme();

  return (
    <Card
      animation=""
      bgColor={theme.colors.secondaryBg}
      body={
        <div>
          <b />
        </div>
      }
      footer={[
        <Button
          key="yesbutton"
          color={theme.colors.cancel}
          onClickHandler={() => {
            console.log('intent');
          }}
        >
          {pt.no}
        </Button>,
        <Button
          key="nobutton"
          color={theme.colors.ok}
          onClickHandler={() => {
            console.log('intent');
          }}
        >
          {pt.yes}
        </Button>,
      ]}
    />
  );

  return <></>;
}

export default YesNoCard;
