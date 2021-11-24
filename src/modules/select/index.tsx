import React from 'react';
import Button from '../button';
import Dropdown from '../dropdown';

// styles module
import styles from './styles.module.scss';

// interfaces
export interface ISelectOptionProps {
    label: string,
    value: string | number,
    selected?: boolean,
}

export interface ISelectProps {
    className?: string,
    options: ISelectOptionProps[],
    emptySelectionLabel?: string,
    onChange?: (option: ISelectOptionProps) => void
}

// main
const Select = ({className, options, emptySelectionLabel, onChange}: ISelectProps): JSX.Element => {
    const defaultSelectedOption = options.find(opt => opt.selected);

    const [selectedOption, setSelectedOption] = React.useState<ISelectOptionProps | undefined>(defaultSelectedOption);
    const [isShowOptionsDropdown, setIsShowOptionsDropdown] = React.useState<boolean>(false);
    const timeoutHandlerRef = React.useRef<ReturnType<typeof setTimeout>>();

    const clearTimeoutHandlerIfExisted = (): void => {
        if(timeoutHandlerRef.current) clearTimeout(timeoutHandlerRef.current);
    };

    React.useEffect(() => {
        return (): void => {
            clearTimeoutHandlerIfExisted();
        };
    }, []);

    return (
        <div className={[styles.container, className].join(' ')}>
            <Button
                className={[styles.trigger, isShowOptionsDropdown ? styles.expanded : ''].join(' ')}
                onClick={(): void => {
                    if(!isShowOptionsDropdown) setIsShowOptionsDropdown(true);
                }}
            >
                {!selectedOption ? (emptySelectionLabel || 'Choose an option...') : selectedOption.label}
            </Button>

            {
                isShowOptionsDropdown
                &&
                <Dropdown
                    className={styles.dropdown}
                    options={options}
                    onSelect={(option): void => {
                        setSelectedOption({
                            ...option,
                            selected: true,
                        });
                        if(onChange) onChange({...option, selected: true});
                    }}
                    onUnmounted={(): void => {
                        clearTimeoutHandlerIfExisted();
                        timeoutHandlerRef.current = setTimeout(() => {
                            setIsShowOptionsDropdown(false);
                        }, 60);
                    }}
                />
            }
        </div>
    );
};

export default Select;