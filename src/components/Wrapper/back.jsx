import ReactDOM from 'react-dom';
import { Button } from './button';
import { BUTTON_TYPES } from './config';

const backBtn = document.getElementById('back');

export const Back = () => ReactDOM.createPortal(
  <Button type={BUTTON_TYPES.back} />,
  backBtn
);
