import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../services/store';
import { reset } from '../../services/slices/gameSlice';
import { Back } from '../Back/back';

export function Wrapper({ children }) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleBack = () => {
    dispatch(reset());
    navigate('/');
  };
  return (
    <>
      <Back resetGame={handleBack} />
      {children}
    </>
  );
}
