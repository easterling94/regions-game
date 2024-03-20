import ReactDOM from 'react-dom';
import { useAppSelector } from '../../services/store';

export function Mode() {
  const { environment } = useAppSelector((store) => store.general);
  return (
    <div>
      {environment}
    </div>
  );
}
