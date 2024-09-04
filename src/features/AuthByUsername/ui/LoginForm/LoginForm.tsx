import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input';
import { VStack } from 'shared/ui/Stack';
import { Text, TextSize } from 'shared/ui/Text';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import DynamicModuleLoader, {
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import GoogleIcon from 'shared/assets/icons/google.svg';
import FacebookIcon from 'shared/assets/icons/facebook.svg';
import GithubIcon from 'shared/assets/icons/github.svg';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading.ts/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError.ts/getLoginError';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [onSuccess, dispatch, password, username]);

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <div className={classNames(cls.LoginContainer, {}, [className])}>
                <VStack className={classNames(cls.LoginForm, {}, [className])}>
                    <Text className={cls.textTitle} title={t('Форма авторизации')} />
                    {error && (
                        <Text
                            text={t('Вы ввели неверный логин или пароль')}
                            variant="error"
                        />
                    )}
                    <div className={cls.socialIcons}>
                        <GoogleIcon className={cls.icon} />
                        <FacebookIcon className={cls.icon} />
                        <GithubIcon className={cls.icon} />
                    </div>
                    <span>{t('или используйте свою электронную почту и пароль')}</span>
                    <Input
                        autofocus
                        type="text"
                        className={cls.input}
                        placeholder={t('Электронный адрес')}
                        onChange={onChangeUsername}
                        value={username}
                    />
                    <Input
                        type="text"
                        className={cls.input}
                        placeholder={t('Пароль')}
                        onChange={onChangePassword}
                        value={password}
                    />
                    <Button
                        className={cls.loginBtn}
                        onClick={onLoginClick}
                        disabled={isLoading}
                    >
                        {t('Войти')}
                    </Button>
                </VStack>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
