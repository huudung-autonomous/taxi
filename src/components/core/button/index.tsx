import React, { ButtonHTMLAttributes } from 'react';
import styles from './styles.module.scss';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    primary?: boolean,
    disabled?: boolean,
}

const Button = (props: IButtonProps): JSX.Element => {
    const {primary, disabled, className, ...ogButtonProps} = props;

    return (
        <button
            className={[
                styles.container,
                props.className,
                primary ? styles.primary : '',
                disabled ? styles.disabled : '',
            ].join(' ')}
            {...ogButtonProps}
        />
    );
};

export default Button;