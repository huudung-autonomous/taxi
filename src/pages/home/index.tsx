import React from 'react';
import { animateScroll } from '../../helpers/dom.helpers';

// modules
import Header from '../../modules/header';
import Preview from '../../modules/preview';
import Booking from '../../modules/booking';
import Services from '../../modules/services';
import News from '../../modules/news';
import Footer from '../../modules/footer';
import ReCall from '../../modules/recall';
import Carousel from '../../modules/carousel';
import Cars from '../../modules/cars';
import Call from '../../modules/call';

// styles
import styles from './styles.module.scss';

// main
const Home = (): JSX.Element => {
    const bookingRef = React.useRef<HTMLDivElement>(null);
    const servicesRef = React.useRef<HTMLDivElement>(null);
    const newsRef = React.useRef<HTMLDivElement>(null);

    const scrollTo = (element: HTMLDivElement): void => {
        const initialPosition = window.scrollY;

        if (element) {
            animateScroll({
                targetPosition: element.offsetTop,
                initialPosition,
                duration: 1200,
            });
        }
    };

    const handleScrollToBooking = (): void => {
        if (bookingRef.current) {
            scrollTo(bookingRef.current);
        }
    };

    const handleScrollToServices = (): void => {
        if (servicesRef.current) {
            scrollTo(servicesRef.current);
        }
    };

    const handleScrollToNews = (): void => {
        if (newsRef.current) {
            scrollTo(newsRef.current);
        }
    };

    return (
        <div className={styles.container}>
            <Header onClickAction={handleScrollToBooking} />
            <Preview />
            <Carousel />
            <Booking containerRef={bookingRef} />
            <Cars />
            <ReCall
                onClick={handleScrollToBooking}
                title="Nhận báo giá chi tiết các loại xe cho chuyến đi của bạn"
                buttonLabel="Nhận báo giá"
            />
            <Services containerRef={servicesRef} />
            <ReCall
                onClick={handleScrollToBooking}
                title="Bắt đầu đặt xe để nhận thêm nhiều dịch vụ ưu đãi"
                buttonLabel="Bắt đầu đặt xe"
            />
            <News containerRef={newsRef} />
            <ReCall onClick={handleScrollToBooking} />
            <Footer
                onClickBooking={handleScrollToBooking}
                onClickIntro={handleScrollToServices}
                onClickNews={handleScrollToNews}
            />

            <Call />
        </div>
    );
};

export default Home;