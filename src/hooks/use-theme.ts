import { useContext } from 'react';
import { Theme } from 'theme/index';
import { themeContext } from 'theme/theme-context';

function useTheme(): Theme {
  const theme = useContext(themeContext);

  return theme;
}

export default useTheme;
