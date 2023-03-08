import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

interface SelectProps {
	className?: string;
	label?: string;
}

export const Select = (props: SelectProps) => {
	const mods: Mods = {};

	const {
		className,
		label
	} = props;

	return (
		<div className={
			classNames(
				cls.Wrapper,
				{},
				[className]
			)}
		>
			{label && (
				<span className={cls.label}>
					{`${label}>`}
				</span>
			)}
			<select className={cls.select}>
				<option>123</option>
				<option>1234</option>
			</select>
		</div>
	);
};
