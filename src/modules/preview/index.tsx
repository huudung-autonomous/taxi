import React from 'react';

// resources
import XeImage from '../../resources/images/xe.png';

// styles
import styles from './styles.module.scss';

// main
const Preview = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <img src={XeImage} alt="Xe"/>
            <div>Uy tín, chuyên nghiệp, tận tình,<br />không phí phát sinh.</div>
        </div>
    );
};

export default Preview;