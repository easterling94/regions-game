import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../services/store';
import { reset } from '../../services/slices/gameSlice';
import { Back } from './back';
import { Environment } from './environment';

export function Wrapper({ children }) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { environment } = useAppSelector((store) => store.general);
  const handleBack = () => {
    dispatch(reset());
    navigate('/');
  };
  const handleEnvironment = () => {
    console.log(environment);
  };
  return (
    <>
      <Back resetGame={handleBack} />
      {children}
      <Environment showEnvironment={handleEnvironment} environment={environment} />
    </>
  );
}
