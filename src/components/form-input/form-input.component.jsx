import { FormInputLabel, Input, Group } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;

// import "./form-input.styles.scss";

// const FormInput = ({ label, inputOptions }) => {
//   return (
//     <div className="group">
//       {label && (
//         <label
//           className={`${
//             inputOptions.value.length ? "shrink" : ""
//           } form-input-label`}
//         >
//           {label}
//         </label>
//       )}
//       <input className="form-input" {...inputOptions} />
//     </div>
//   );
// };

// export default FormInput;
