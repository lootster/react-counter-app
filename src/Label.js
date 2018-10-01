import React from 'react';


const formatlabel = value => {
  if (value === 0) return "Zero"
  if (value > 0) return "Positive"
  if (value < 0) return "Negative"
}

const Label = (props) => {
  console.log(props);
  return (
    <div>
      <span>{formatlabel(props.value)}</span>
    </div>
  );
}

export default Label;
