import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './MainPage.module.scss';

// import Input from 'shared/ui/Input/Input';

interface MainPageProps {
  className?: string;
}

const MainPage = ({ className }: MainPageProps) => {
    const { t } = useTranslation('main');
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div className={classNames(cls.MainPage, {}, [className])}>
            {/* <BugButton /> */}
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
