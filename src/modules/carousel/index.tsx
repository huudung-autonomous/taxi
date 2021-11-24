import React from 'react';

// resources
import VolvoImage from '../../resources/images/volvo.jpeg';
import LincolnImage from '../../resources/images/lincoln.jpg';
import CoachImage from '../../resources/images/coach.jpeg';

// styles
import styles from './styles.module.scss';

// interfaces
interface IndexState {
    value: number,
    transition: boolean,
}

// main
const Carousel = (): JSX.Element => {
    const [index, setIndex] = React.useState<IndexState>({
        value: 1,
        transition: true,
    });
    const [isMoving, setIsMoving] = React.useState<boolean>(false);

    const indexRef = React.useRef<IndexState>(index);

    const next = (): void => {
        if (isMoving) return;

        const nextIndex = indexRef.current.value + 1;
        setIsMoving(true);

        setIndex({
            value: nextIndex,
            transition: true,
        });

        setTimeout(() => {
            if (nextIndex === 4) {
                setIndex({
                    value: 1,
                    transition: false,
                });
            }
            setIsMoving(false);
        }, 200);
    };

    React.useEffect(() => {
        indexRef.current = index;
    }, [index]);

    React.useEffect(() => {
        setInterval(() => {
            next();
        }, 3000);
    }, []);

    return (
        <div className={styles.container}>
            <div
                className={`${styles.items} ${index.transition ? styles.hasTransition : ''}`}
                style={{ left: `${-1 * index.value * 100}%` }}
            >
                <div className={styles.item} style={{ backgroundImage: `url(${CoachImage})` }} />
                <div className={styles.item} style={{ backgroundImage: `url(${LincolnImage})` }} />
                <div className={styles.item} style={{ backgroundImage: `url(${VolvoImage})` }} />
                <div className={styles.item} style={{ backgroundImage: `url(${CoachImage})` }} />
                <div className={styles.item} style={{ backgroundImage: `url(${LincolnImage})` }} />
            </div>
        </div>
    );
};

export default Carousel;