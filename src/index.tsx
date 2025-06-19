import { createRoot } from 'react-dom/client';
import App from 'app/App.tsx';
import './index.css';

const root = document.getElementById('root') as HTMLElement;

createRoot(root).render(<App />);
