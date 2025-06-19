import { Typography, useTheme } from '@mui/material';
import { Letter } from 'types';

type LineProps = {
  line: Letter[];
  bgTransform: (l: Letter) => string;
};

const Line = (props: LineProps) => {
  const { line, bgTransform } = props;
  const theme = useTheme();

  return (
    <Typography
      sx={{
        fontFamily: 'monospace',
        letterSpacing: 1.2,
        wordBreak: 'break-all',
        fontSize: '1.2rem',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        mb: 1,
      }}
      variant="h6"
    >
      {line.map((l, i) => (
        <span
          key={i}
          style={{
            background: bgTransform(l),
            color:
              theme.palette.mode === 'dark' && bgTransform(l) === 'transparent'
                ? theme.palette.common.white
                : theme.palette.common.black,
            borderRadius: 3,
            padding: '0 2px',
            margin: '0 1px',
            userSelect: 'text',
          }}
        >
          {l.char}
        </span>
      ))}
    </Typography>
  );
};

export default Line;
