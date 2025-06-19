import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { SubmitButton, AminoAcidInput, Output } from 'components';
import { getAlignmentLines } from 'utils';
import { AminoAcidsType, IFormInput, Letter } from 'types';
import { aminoAcidColors } from 'types/colors';
import styles from './App.module.css';

function App() {
  const { control, handleSubmit, reset, watch } = useForm<IFormInput>({
    defaultValues: {
      sequence1: 'SAQVKAHGKKVADALTNAVGHLDCLPGALSALSDLHAYK',
      sequence2: 'SFQVKADSKCVADATLNAKDHLDDPPGGGSALSDLHATF',
    },
  });

  const [line1, setLine1] = useState<Letter[] | undefined>(undefined);
  const [line2, setLine2] = useState<Letter[] | undefined>(undefined);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const [l1, l2] = getAlignmentLines(data.sequence1, data.sequence2);
    setLine1(l1);
    setLine2(
      l2.map((l) => ({
        ...l,
        bg: l.highlight
          ? aminoAcidColors[l.char as AminoAcidsType]
          : 'transparent',
      }))
    );
    reset({
      sequence1: data.sequence1,
      sequence2: data.sequence2,
    });
  };

  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Sequence Alignment</h1>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputs}>
            <AminoAcidInput
              name="sequence1"
              control={control}
              watch={watch}
              watchName="sequence2"
              label="Amino acid sequence 1"
            />
            <AminoAcidInput
              name="sequence2"
              control={control}
              watch={watch}
              watchName="sequence1"
              label="Amino acid sequence 2"
            />
          </div>
          <SubmitButton type="submit" />
        </form>
        <Output line1={line1} line2={line2} />
      </div>
    </main>
  );
}

export default App;
