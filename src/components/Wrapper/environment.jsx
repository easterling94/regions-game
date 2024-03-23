import ReactDOM from 'react-dom';
import { Button } from './button';
import { BUTTON_TYPES } from './config';

const backBtn = document.getElementById('environment');

export const Environment = () => ReactDOM.createPortal(
  <Button type={BUTTON_TYPES.environment} />,
  backBtn
);
