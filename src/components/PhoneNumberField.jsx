import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const PhoneNumberField = ({id, phone, onChange}) => {
  return (
    <PhoneInput
      id={id}
      className="w-full px-3 py-2 border rounded-md text-[var(--electric-blue)"
      defaultCountry="PL"
      value={phone}
      onChange={onChange}
      placeholder="Enter phone number"
    />
  );
};

export default PhoneNumberField;
