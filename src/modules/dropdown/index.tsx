import React from 'react';

// styles module
import styles from './styles.module.scss';

// helpers
import { isDescendant } from '../../helpers/dom.helpers';

// components
import Button from '../button';

// interfaces
interface IDropdownOptionProps {
    label: string,
    value: string | number,
    selected?: boolean,
}
interface IDropdownProps {
    className?: string,
    options: IDropdownOptionProps[],
    onKeyboardSelect?: (option: IDropdownOptionProps | null) => void,
    onSelect?: (option: IDropdownOptionProps) => void,
    onUnmounted?: () => void,
}

// main
const Dropdown = ({
    className,
    options,
    onKeyboardSelect,
    onSelect,
    onUnmounted,
}: IDropdownProps): JSX.Element | null => {
    const [keyboardSelectOption, setKeyboardSelectOption] = React.useState<IDropdownOptionProps | null>(null);
    const keyboardSelectOptionRef = React.useRef<IDropdownOptionProps | null>(null);
    const optionsRef = React.useRef<IDropdownOptionProps[] | null>(null);
    const containerRef = React.useRef<HTMLDivElement>(null);

    const handleKeyUpEventListener = (e: KeyboardEvent): void => {
        if(!optionsRef.current) return;

        switch (e.key) {
            case 'ArrowDown': {
                if (!keyboardSelectOptionRef.current) setKeyboardSelectOption(optionsRef.current[0]);
                else {
                    const idx = optionsRef.current.findIndex(opt => opt.value === keyboardSelectOptionRef.current?.value);
                    if (idx >= 0) setKeyboardSelectOption(optionsRef.current[Math.min(idx + 1, optionsRef.current.length - 1)]);
                }
                break;
            }
            case 'ArrowUp': {
                if (!keyboardSelectOptionRef.current) setKeyboardSelectOption(optionsRef.current[optionsRef.current.length - 1]);
                else {
                    const idx = optionsRef.current.findIndex(opt => opt.value === keyboardSelectOptionRef.current?.value);
                    if (idx >= 0) setKeyboardSelectOption(optionsRef.current[Math.max(idx - 1, 0)]);
                }
                break;
            }
            case 'Enter': {
                if(onSelect && keyboardSelectOptionRef.current) onSelect(keyboardSelectOptionRef.current);
                if(onUnmounted) onUnmounted();
                break;
            }
            case 'Escape': {
                if(onUnmounted) onUnmounted();
                break;
            }
            default: 
                break;
        }
    };

    const handleClickEventListener = (e: MouseEvent): void => {
        if(containerRef.current && e.target && isDescendant(containerRef.current, (e.target as HTMLElement))) return;
        if(onUnmounted) onUnmounted();
    };

    const handleScrollToKeyboardSelectedOption = (): void => {
        const idx = options.findIndex(opt => opt.value === keyboardSelectOptionRef.current?.value);
        if(idx >= 0){
            const dis = Math.max(idx - 4, 0);
            containerRef.current?.scrollTo(0, idx >= 4 ? dis * 40 + 26 : dis * 40);
        }
    };

    React.useEffect(() => {
        setKeyboardSelectOption(null);
        optionsRef.current = options;
    }, [options]);

    React.useEffect(() => {
        keyboardSelectOptionRef.current = keyboardSelectOption;
        handleScrollToKeyboardSelectedOption();
        if(onKeyboardSelect) onKeyboardSelect(keyboardSelectOption);
    }, [keyboardSelectOption]);

    React.useEffect(() => {
        window.addEventListener('keyup', handleKeyUpEventListener);
        window.addEventListener('click', handleClickEventListener);

        return (): void => {
            window.removeEventListener('keyup', handleKeyUpEventListener);
            window.removeEventListener('click', handleClickEventListener);
        };
    }, []);

    if (!options || !options.length) return null;

    return (
        <div className={[styles.container, className].join(' ')} ref={containerRef}>
            {
                options.map(option =>
                    <Button
                        key={option.value}
                        className={[
                            keyboardSelectOption?.value === option.value ? styles.keyboardSelected : '',
                            option.selected ? styles.selected : '',
                        ].join(' ')}
                        onClick={(): void => {
                            if(onSelect) onSelect(option);
                            if(onUnmounted) onUnmounted();
                        }}
                    >
                        {option.label}
                    </Button>
                )
            }
        </div>
    );
};

export default Dropdown;