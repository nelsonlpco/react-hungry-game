import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

// import gameActions from 'store/game/actions';
import Button from 'components/button';
import useTheme from 'hooks/use-theme';

function TryAgainButton(): JSX.Element {
  const dispatch = useDispatch();
  const theme = useTheme();

  const confirmHandler = useCallback(() => {
    // dispatch(gameActions.start());
  }, [dispatch]);

  return (
    <Button
      width="100%"
      color={theme.colors.ok}
      onClickHandler={confirmHandler}
    >
      Tentar novamente
    </Button>
  );
}

export default TryAgainButton;
