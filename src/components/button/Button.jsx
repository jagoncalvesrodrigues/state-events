import { StyledButton } from './button.styles';

const Button = ({ color, children, action }) => {
	return (
		<StyledButton onClick={action} color={color}>
			{children}
		</StyledButton>
	);
};

export default Button;

//si lo ejecutas aqui
// const printClick = (event, name) => {
// 	console.log(event);
// 	console.log(name);
// };

// window.addEventListener('click', event => printClick(event, 'Juan'));
