import { useState } from 'react';
import { Stack, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Message } from 'components';
import Line from './Line';
import usePartSize from 'hooks/usePartSize';
import { partSequence } from 'utils';
import { AminoAcidsType, Letter } from 'types';
import { aminoAcidColors } from 'types/colors';

const OutputPaper = styled(Paper)(({ theme }) => ({
  width: '100%',
  minHeight: 120,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
  overflowX: 'auto',
  boxSizing: 'border-box',
  margin: '0 auto',
  '@media (max-width: 500px)': {
    padding: theme.spacing(1),
    maxWidth: '100%',
  },
}));

type OutputProps = {
  line1?: Letter[];
  line2?: Letter[];
};

export default function Output(props: OutputProps) {
  const { line1, line2 } = props;
  const [copied, setCopied] = useState('');
  const [openMessage, setOpenMessage] = useState(false);

  const partSize = usePartSize();

  if (!line1 || !line2) return null;

  const line1Parts = partSequence(line1, partSize);
  const line2Parts = partSequence(line2, partSize);

  const handleMouseUp = async () => {
    const selection = window.getSelection();
    if (selection && selection.toString().length > 0) {
      const selectedText = selection.toString().replace(/\s/g, '');
      try {
        await navigator.clipboard.writeText(selectedText);
        setCopied(selectedText);
        setOpenMessage(true);
      } catch (e) {
        console.warn('Failed to copy text', e);
      }
    }
  };

  return (
    <>
      <Stack
        onMouseUp={handleMouseUp}
        sx={{ width: '100%' }}
        direction="column"
        spacing={1}
      >
        <OutputPaper variant="outlined">
          {line1Parts.map((part, idx) => (
            <div key={idx}>
              <Line line={part} bgTransform={(l) => l.bg} />
              {line2Parts[idx] && (
                <Line
                  line={line2Parts[idx]}
                  bgTransform={(l) =>
                    l.highlight
                      ? aminoAcidColors[l.char as AminoAcidsType]
                      : 'transparent'
                  }
                />
              )}
            </div>
          ))}
        </OutputPaper>
      </Stack>
      <Message
        title={`Part of sequence [${copied}] is copied to clipboard`}
        message={''}
        severity="success"
        variant={'filled'}
        open={openMessage}
        setOpen={setOpenMessage}
      />
    </>
  );
}
