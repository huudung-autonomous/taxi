import React, { InputHTMLAttributes } from 'react';
import styles from './styles.module.scss';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    onEnter?: () => void,
    label: string,
    containerClassName?: string,
    onTextChange?: (value: string) => void,
    inputRef?: React.RefObject<HTMLInputElement>
}

const Input = (props: IInputProps): JSX.Element => {
    const { className, onEnter, onKeyUp, containerClassName, onTextChange, inputRef, ...ogInputProps } = props;

    const [isFocusing, setIsFocusing] = React.useState<boolean>(false);
    const [value, setValue] = React.useState<string | number>('');

    const handleKeyUpEvent = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter' && onEnter) onEnter();
    };

    return (
        <div className={`${styles.container} ${containerClassName} ${isFocusing || !!value ? styles.focusing : ''}`}>
            <span className={styles.label}>{props.label}</span>
            <input
                ref={inputRef}
                className={className}
                onKeyUp={handleKeyUpEvent}
                onChange={(e): void => {
                    setValue(e.target.value);
                    if(onTextChange) onTextChange(e.target.value);
                }}
                onFocus={(): void => {
                    setIsFocusing(true);
                }}
                onBlur={(): void => {
                    setIsFocusing(false);
                }}
                {...{
                    ...ogInputProps,
                    spellCheck: false,
                }}
            />
        </div>
    );
};

export default Input;