import React, { FC, useCallback } from 'react';

export interface IButton {
  onClick: () => void
}

const Button: FC<IButton> = ({ onClick }) => {
  const handleClick = useCallback(onClick, [onClick])

  return (
    <button onClick={handleClick}>Olá</button>
  )
}

export default Button;
