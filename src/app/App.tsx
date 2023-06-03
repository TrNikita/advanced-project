import React, { memo, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getUserInited, initAuthData } from '@/entities/User';
import { AppLoaderLayout } from '@/shared/layouts/AppLoaderLayout';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { useAppToolbar } from './lib/useAppToolbar';
import { AppRouter } from './providers/router';
import { withTheme } from './providers/ThemeProvider/ui/withTheme';

const App = memo(function App() {
	const { theme } = useTheme();
	const dispatch = useAppDispatch();
	const inited = useSelector(getUserInited);
	const toolbar = useAppToolbar();

	useEffect(() => {
		if (!inited) {
			dispatch(initAuthData());
		}
	}, [dispatch, inited]);

	if (!inited) {
		return (
			<div id="app" className={classNames('app_redesigned', {}, [theme])}>
				<AppLoaderLayout />{' '}
			</div>
		);
	}

	return (
		<div id="app" className={classNames('app_redesigned', {}, [theme])}>
			<Suspense fallback="">
				<MainLayout
					header={<Navbar />}
					content={<AppRouter />}
					sidebar={<Sidebar />}
					toolbar={toolbar}
				/>
			</Suspense>
		</div>
	);
});

export default withTheme(App);
