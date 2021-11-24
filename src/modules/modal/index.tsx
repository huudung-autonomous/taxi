import React from 'react';

// resources
import XeImage from '../../resources/images/xe.png';

// components
import Button from '../button';

// styles module
import styles from './styles.module.scss';

// interfaces
interface IModalProps {
    className?: string,
    children: React.ReactNode,
    title: string,
    onClose?: () => void,
    actions?: React.ReactNode,
    preventManuallyClose?: boolean,
}

// main
const Modal = ({ className, children, title, onClose, actions, preventManuallyClose }: IModalProps): JSX.Element => {
    const [animating, setAnimating] = React.useState<'open' | 'close' | 'stay' | undefined>(undefined);
    const timeoutHandlerRef = React.useRef<ReturnType<typeof setTimeout> | undefined>();

    const getClassNameWithAnimatingState = (): string => {
        switch (animating) {
            case 'open': return styles.showing;
            case 'stay': return styles.stay;
            case 'close': return styles.hidding;
            default: return '';
        }
    };

    const close = (): void => {
        if (preventManuallyClose) return;

        setAnimating('close');
        timeoutHandlerRef.current = setTimeout(() => {
            setAnimating('stay');
            if (onClose) onClose();
        }, 300);
    };

    const handleKeyUpEventListener = (e: KeyboardEvent): void => {
        switch (e.key) {
            case 'Escape': {
                close();
                break;
            }
            default:
                break;
        }
    };

    React.useEffect(() => {
        window.addEventListener('keyup', handleKeyUpEventListener);
        setAnimating('open');
        timeoutHandlerRef.current = setTimeout(() => {
            setAnimating('stay');
        }, 300);

        return (): void => {
            if (timeoutHandlerRef.current) clearTimeout(timeoutHandlerRef.current);
            window.removeEventListener('keyup', handleKeyUpEventListener);
        };
    }, []);

    return (
        <div className={[styles.container, className].join(' ')}>
            <div className={styles.overlay} onClick={close} />
            <div className={[
                styles.body,
                getClassNameWithAnimatingState(),
            ].join(' ')}>
                {
                    !preventManuallyClose
                    &&
                    <Button primary className={styles.close} onClick={close}>x</Button>
                }
                <img src={XeImage} alt="Xe" />

                <h3 className={styles.title}>{title}</h3>
                <div className={styles.main}>{children}</div>
                <div className={styles.actions}>
                    {
                        !preventManuallyClose
                        &&
                        <Button onClick={close}>Đóng</Button>
                    }
                    {actions}
                </div>
            </div>
        </div>
    );
};

export default Modal;