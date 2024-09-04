import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AboutPage.module.scss';

interface AboutPageProps {
  className?: string;
}

const AboutPage = ({ className }: AboutPageProps) => {
    const { t } = useTranslation('about');

    return (
        <div className={classNames(cls.AboutPage, {}, [className])}>
            {t('О странице')}
        </div>
    );
};

export default AboutPage;
