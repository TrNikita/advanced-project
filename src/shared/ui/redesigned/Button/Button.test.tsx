import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', function () {
	test('test render', () => {
		render(<Button>TEST</Button>);
		expect(screen.getByText('TEST')).toBeInTheDocument();
	});
	test('test clear theme', () => {
		render(<Button variant={'outline'}>TEST</Button>);
		expect(screen.getByText('TEST')).toHaveClass('clear');
		screen.debug();
	});
});
