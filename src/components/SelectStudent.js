import React from 'react';

function SelectStudent(props) {
  return (
    <label>
      <input
        type="checkbox"
        defaultChecked
        value={props.first_name}
        name={props.first_name}
        onChange={props.onChange}
      />
      {props.first_name}
    </label>
  );
}
export default SelectStudent;
