import { AppDispatch, RootState } from '../store';
import { setTimer, setBoard } from '../slices/gameSlice';
import { TBoard } from '../../utils/sharedTypes';

export const changeTimerThunk = () => (dispatch: AppDispatch) => {

}

type Test = '1' | '2' | '3' | '4';

export const changeAnswerThunk = (id: Test, value: string) => (dispatch: AppDispatch, getState: () => RootState) => {
  const { board } = getState().game;
  const answerKey: keyof Omit<TBoard, 'next'> = `ans${id}`;
  const newValue: string = board[answerKey] === '' ? value : '';

  const newBoard: TBoard = {
    ...board,
    [answerKey]: newValue,
  };
  dispatch(setBoard(newBoard));
}

export const changeNextThunk = () => (dispatch: AppDispatch, getState: () => RootState) => {
  const { board } = getState().game;
  const next: boolean = [board.ans1, board.ans2, board.ans3, board.ans4].some(el => el !== '');
  const newBoard: TBoard = {
    ...board,
    next: next
  };
  dispatch(setBoard(newBoard));
}