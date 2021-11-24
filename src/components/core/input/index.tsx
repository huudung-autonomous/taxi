import React, { InputHTMLAttributes } from 'react';
import styles from './styles.module.scss';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    onEnter?: () => void,
}

const Input = (props: IInputProps): JSX.Element => {
    const { className, onEnter, onKeyUp, ...ogInputProps } = props;

    const handleKeyUpEvent = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter' && onEnter) onEnter();
    };

    return (
        <input
            className={[
                styles.container,
                className,
            ].join(' ')}
            onKeyUp={handleKeyUpEvent}
            {...{
                ...ogInputProps,
                spellCheck: false,
            }}
        />
    );
};

export default Input;