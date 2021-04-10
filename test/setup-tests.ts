import '@testing-library/jest-dom/extend-expect';
// import '@testing-library/react';
import { render, fireEvent, screen } from '@testing-library/react';

(global as any).render = render;
(global as any).fireEvent = fireEvent;
(global as any).screen = screen;
