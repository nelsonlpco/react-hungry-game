import React, { useCallback } from 'react';

import TextInput from 'components/text-input';

type Props = {
  question: string;
  placeholder: string;
  onChange: (value: string) => void;
  onEnter: () => void;
  value: string;
};

function QuestionForm({
  question,
  placeholder,
  onChange,
  value,
  onEnter,
}: Props): JSX.Element {
  const onEnterPressedHandler = useCallback(() => {
    onEnter();
  }, []);

  return (
    <form>
      <label htmlFor={question}>
        <b>{question}</b>
      </label>
      <TextInput
        placeholder={placeholder}
        onChange={onChange}
        onEnterPressed={onEnterPressedHandler}
        value={value}
      />
    </form>
  );
}

export default QuestionForm;
