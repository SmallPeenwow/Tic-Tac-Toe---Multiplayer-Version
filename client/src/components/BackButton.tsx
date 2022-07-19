import { Link } from 'react-router-dom';

const BackButton = () => {
	return (
		<Link to='/' className='button-style button-color-two w-24'>
			Back
		</Link>
	);
};

export default BackButton;
