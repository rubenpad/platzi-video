import { useState } from 'react';

function useInputValue(initialValue) {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => setValue(event.target.value);

  return { value, onChange };
}

export default useInputValue;
