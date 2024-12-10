import { useState } from 'react';
import Button from './components/button/Button';
import { GlobalStyles } from './styles/GlobalStyles';
import { StyledButton } from './components/button/button.styles';

/*
HOOKS
-tienen dos cosas VALOE y FUNCION DE ACTUALIZACION
-siempre empiezan por use...
-USESTATE
-El primer valor es el nombre qu queramos
-El segundo valor SIEMPRE sera set y nombre del valor

*/

let counter = 0;

const App = () => {
	// const state = useState();
	// const value = state[0];
	// const setValue = state[1];

	const [value, setValue] = useState(0);
	const [incrementValue, setIncrementValue] = useState(1);

	const evenOdd = value % 2 === 0 ? 'Par' : 'Impar';

	return (
		<div>
			<GlobalStyles />
			<h1>
				El numero {value} es {evenOdd};
			</h1>
			<p>Counter Settings</p>
			<Button
				action={() => increment(incrementValue, value, setValue)}
				color='#51c523'
			>
				+{incrementValue}
			</Button>
			<Button action={() => reset(setValue)} color='#308a4b'>
				Reset
			</Button>
			<Button
				action={() => decrement(incrementValue, value, setValue)}
				color='#1b8f2a'
			>
				-{incrementValue}
			</Button>
			<p>Increment Settings (+{incrementValue})</p>
			<Button
				action={() => incrementSettigs(incrementValue, setIncrementValue)}
				color='#3c883c'
			>
				+{incrementValue}
			</Button>
			<Button action={() => resetSettigs(setIncrementValue)} color='#0e5e26'>
				Reset
			</Button>
		</div>
	);
};

const increment = (incrementValue, value, setValue) => {
	setValue(value + incrementValue);
};
const decrement = (incrementValue, value, setValue) => {
	setValue(value - incrementValue);
};
const reset = setValue => {
	setValue(0);
};
const incrementSettigs = (incrementValue, setIncrementValue) => {
	setIncrementValue(incrementValue + 1);
};
const resetSettigs = setIncrementValue => {
	setIncrementValue(1);
};

export default App;
