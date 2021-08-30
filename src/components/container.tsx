import React from 'react';

type Props = {
  children: React.ReactNode;
  height?: string;
  width?: string;
  bgColor: string;
};

const style: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  padding: '10px',
  justifyContent: 'center',
  alignItems: 'center',
};

function Container({ children, height, width, bgColor }: Props): JSX.Element {
  return (
    <div style={{ ...style, height, width, background: bgColor }}>
      {children}
    </div>
  );
}

Container.defaultProps = {
  height: '100vh',
  width: '100vw',
};

export default Container;
