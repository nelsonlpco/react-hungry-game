/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

type Props = {
  children: React.ReactNode;
  onClickHandler: () => void;
  color: string;
  width?: string;
};

function Button({
  children,
  color,
  width,
  onClickHandler,
}: Props): JSX.Element {
  return (
    <div
      className="pill-button"
      role="button"
      tabIndex={0}
      onClick={onClickHandler}
      style={{ backgroundColor: color, width }}
    >
      {children}
    </div>
  );
}

Button.defaultProps = {
  width: '110px',
};

export default Button;
