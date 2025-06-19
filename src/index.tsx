import { createRoot } from 'react-dom/client';
import ThemeController from 'app/ThemeController';
import './index.css';

const root = document.getElementById('root') as HTMLElement;

createRoot(root).render(<ThemeController />);
