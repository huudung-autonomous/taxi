import React from 'react';
import Button from '../core/button';

// styles module
import styles from './styles.module.scss';

// interfaces
interface IRadioProps {
    className?: string,
    checked?: boolean,
    onChecked?: () => void,
}

// main
const Radio = ({ className, checked, onChecked }: IRadioProps): JSX.Element => {
    const toggle = (): void => {
        if (!checked && onChecked) {
            onChecked();
        }
    };

    return (
        <Button
            className={`${styles.container} ${className} ${checked ? styles.checked : ''}`}
            onClick={toggle}
        >
            x
        </Button>
    );
};

export default Radio;