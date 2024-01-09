import "./form-input.styles.scss";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {/* if label exists, render it */}
      {label && (
        <label
          //   if className has a lengthf (ie user has entered text) then render the label with 'shrink' class
          className={`${otherProps.value.length} ? "shrink" : ""} form-input-label `}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
