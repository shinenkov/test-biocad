import { memo } from 'react';
import { Control, Controller, UseFormWatch } from 'react-hook-form';
import { TextFieldProps, TextField } from '@mui/material';
import { IFormInput } from 'types';

type AminoAcidInputProps = {
  name: keyof IFormInput;
  watchName: keyof IFormInput;
  control: Control<IFormInput, keyof IFormInput, IFormInput>;
  watch: UseFormWatch<IFormInput>;
  label: string;
};

const AminoAcidInput = memo((props: AminoAcidInputProps & TextFieldProps) => {
  const { name, watchName, control, watch, label } = props;

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: 'Sequence is required',
        pattern: {
          value: /^[ARNDCEQGHILKMFPSTWYV-]+$/i,
          message: 'Only A,R,N,D,C,E,Q,G,H,I,L,K,M,F,P,S,T,W,Y,V,- allowed',
        },
        validate: (value) =>
          value.length === watch(watchName).length ||
          'Sequences must be the same length',
      }}
      render={({ field, fieldState }) => (
        <TextField
          fullWidth
          variant="outlined"
          {...field}
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
          label={label}
        />
      )}
    />
  );
});

export default AminoAcidInput;
