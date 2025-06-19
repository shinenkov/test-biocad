import Button, { ButtonProps } from '@mui/material/Button';

type SubmitButtonProps = {
  type?: 'submit' | 'reset' | 'button';
};

export default function SubmitButton(props: SubmitButtonProps & ButtonProps) {
  const { type = 'submit' } = props;
  return (
    <Button type={type} fullWidth variant="contained">
      Submit
    </Button>
  );
}
