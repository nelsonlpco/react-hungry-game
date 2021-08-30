import React, { ChangeEvent, useCallback, KeyboardEvent } from 'react';

type Props = {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onEnterPressed: () => void;
};

function TextInput({
  placeholder,
  value,
  onChange,
  onEnterPressed,
}: Props): JSX.Element {
  const onChangeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    },
    [onchange],
  );

  const onKeyPressHandler = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        onEnterPressed();
        event.preventDefault();
      }
    },
    [onEnterPressed],
  );

  return (
    <input
      // eslint-disable-next-line jsx-a11y/no-autofocus
      autoFocus
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChangeHandler}
      onKeyPress={onKeyPressHandler}
    />
  );
}

TextInput.defaultProps = {
  placeholder: '',
};

export default TextInput;
