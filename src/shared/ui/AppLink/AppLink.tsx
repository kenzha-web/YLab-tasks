import { classNames } from 'shared/lib/classNames/classNames';
import { memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

interface AppLinkProps extends LinkProps {
  className?: string;
  children?: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        to, className, children, ...otherProps
    } = props;
    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});

export default AppLink;
