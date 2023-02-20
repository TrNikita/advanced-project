import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterAcions } from '../model/slice/CounterSlice';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const Counter = () => {
	const dispatch = useDispatch();
const counterValue = useSelector((state: StateSchema) =>state.counter.value )
	const increment = () => {
		dispatch(counterAcions.increment());
	};

	const decrement = () => {
		dispatch(counterAcions.decrement());
	};

	return (
		<div>
			<h1>value = {counterValue}</h1>
			<Button
				onClick={increment}
			>
				increment
			</Button>
			<Button
				onClick={decrement}
			>
				decrement
			</Button>
		</div>
	);
};
