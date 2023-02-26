import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';

export interface LoginFormProps {
	className?: string;
}

const LoginForm = memo((props: LoginFormProps) => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const store = useStore();

	const {
		className,
	} = props;

	const { username, password, isLoading, error } = useSelector(getLoginState);

	const onChangeUsername = useCallback((value: string) => {
		dispatch(loginActions.setUsername(value));
	}, [dispatch]);

	const onChangePassword = useCallback((value: string) => {
		dispatch(loginActions.setPassword(value));
	}, [dispatch]);

	const onLoginClick = useCallback(() => {
		dispatch(loginByUsername({ username, password }));
	}, [dispatch, password, username]);

	return (
		<div className={
			classNames(
				cls.LoginForm,
				{},
				[className]
			)}
		>
			<Text title={t('Форма авторизации')}/>
			{error && <Text text={error} theme={TextTheme.ERROR}/>}
			<Input
				autoFocus
				type='text'
				className={cls.input}
				placeholder={t('введите username')}
				onChange={onChangeUsername}
				value={username}
			/>
			<Input
				type='text'
				className={cls.input}
				placeholder={t('введите пароль')}
				onChange={onChangePassword}
				value={password}
			/>
			<Button
				theme={ButtonTheme.OUTLINE}
				className={cls.loginBtn}
				onClick={onLoginClick}
				disabled={isLoading}
			>
				{t('Войти')}
			</Button>
		</div>
	);
});

export default LoginForm;
