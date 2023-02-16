import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, FC } from 'react';

export enum ButtonTheme {
	CLEAR = 'clear',
	OUTLINE = 'outline',
	BACKGROUND = 'background',
	BACKGROUND_INVERTED = 'backgroundInverted',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ButtonTheme;
	square?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
	const {
		className,
		children,
		theme,
		square,
		...OtherProps
	} = props;

	const mods: Record<string, boolean> = {
		[cls[theme]]: true,
		[cls.square]: square,
	};

	return (
		<button
			type='button'
			className=
				{classNames(
					cls.Button,
					mods,
					[className]
				)}
			{...OtherProps}
		>
			{children}
		</button>
	);
};
