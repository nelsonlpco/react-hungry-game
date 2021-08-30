import React from 'react';

type Props = {
  body: React.ReactNode;
  footer?: React.ReactNode;
  bgColor: string;
  animation: string;
};

function Card({ body, footer, bgColor, animation }: Props): JSX.Element {
  return (
    <div className={`card ${animation}`} style={{ background: bgColor }}>
      <div className="card__body">{body}</div>
      <div className="card__footer">{footer}</div>
    </div>
  );
}

Card.defaultProps = {
  footer: <></>,
};

export default Card;
