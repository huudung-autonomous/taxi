import React from 'react';
import Button from '../core/button';

// styles module
import styles from './styles.module.scss';

// interfaces
interface ICheckboxProps {
    className?: string,
    checked?: boolean,
    onChecked?: () => void,
    onUnchecked?: () => void,
}

// main
const Checkbox = ({ className, checked, onChecked, onUnchecked }: ICheckboxProps): JSX.Element => {
    const [isChecked, setIsChecked] = React.useState<boolean>(checked || false);

    const toggle = (): void => {
        if (isChecked && onUnchecked) onUnchecked();
        else if (!isChecked && onChecked) onChecked();
        setIsChecked(!isChecked);
    };

    return (
        <Button
            className={`${styles.container} ${isChecked ? styles.checked : ''}`}
            onClick={toggle}
        >
            x
        </Button>
    );
};

export default Checkbox;