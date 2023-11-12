import "./Select.css";

const Select = (props) => {

  return (
    <div className="select">
      <label>{props.label}</label>
      <select
        onChange={event => props.onTyped(event.target.value)}
        value={props.value}
        required={props.require}
        placeholder={props.placeholder}
      >
        {props.itens.map((item, index) => {
          return <option key={index}> {item}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;
