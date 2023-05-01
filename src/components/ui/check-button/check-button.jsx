import { HiddenCheckBox, Label, LabelComponent } from "./styles";

function CheckButton({ checkButtonNum, onChange, isChecked, isCurrent }) {
  return (
    <Label>
      <HiddenCheckBox
        type="checkbox"
        checked={isChecked}
        onChange={() => onChange(checkButtonNum)}
      />
      <LabelComponent isCurrent={isCurrent} isChecked={isChecked} />
    </Label>
  );
}

export default CheckButton;
