import React from 'react';
import emailjs from 'emailjs-com';

// resources
import LocationIcon from '../../resources/images/place.png';
import PhoneIcon from '../../resources/images/phone-call.png';
import PhoneIconBlue from '../../resources/images/phone-call-blue.png';
import CalendarIcon from '../../resources/images/calendar.png';
import XeImage from '../../resources/images/xe.png';

// modules
import Button from '../button';
import Input from '../input';
import Select from '../select';

// styles
import styles from './styles.module.scss';
import Modal from '../modal';

// interfaces
interface BookingProps {
    containerRef?: React.RefObject<HTMLDivElement>
}
interface FormInput {
    value?: string,
    error?: string,
}
interface FormState {
    from?: FormInput,
    to?: FormInput,
    phone?: FormInput,
    time?: FormInput,
    type?: FormInput,
}


// main
const Booking = ({ containerRef }: BookingProps): JSX.Element => {
    const [isShowPopup, setIsShowPopup] = React.useState<boolean>(false);
    const [formData, setFormData] = React.useState<FormState>({});
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [isShowForm, setIsShowForm] = React.useState<boolean>(true);

    const validate = (): boolean => {
        let flag = true;

        if (!formData.from?.value) {
            flag = false;
            setFormData(data => ({
                ...data,
                from: {
                    ...data.from,
                    error: 'empty',
                }
            }));
        }

        if (!formData.to?.value) {
            flag = false;
            setFormData(data => ({
                ...data,
                to: {
                    ...data.to,
                    error: 'empty',
                }
            }));
        }

        if (!formData.phone?.value) {
            flag = false;
            setFormData(data => ({
                ...data,
                phone: {
                    ...data.phone,
                    error: 'empty',
                }
            }));
        }

        if (!formData.time?.value) {
            flag = false;
            setFormData(data => ({
                ...data,
                time: {
                    ...data.time,
                    error: 'empty',
                }
            }));
        }

        if (!formData.type?.value) {
            flag = false;
            setFormData(data => ({
                ...data,
                type: {
                    ...data.type,
                    error: 'empty',
                }
            }));
        }

        return flag;
    };

    const submit = async (): Promise<void> => {
        if (isLoading || !validate()) return;
        setIsLoading(true);
        try {
            await emailjs.send(
                'service_2v2d8fj',
                'template_kdd76ht',
                {
                    phone: formData.phone?.value,
                    address_from: formData.from?.value,
                    address_to: formData.to?.value,
                    time: formData.time?.value,
                    type: `${formData.type?.value} chỗ`,
                },
                'user_R8x24X09yZpgIpeIgWgfq'
            );
            setIsLoading(false);
            setIsShowPopup(true);
        } catch (e) {
            //handle error
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className={styles.container} ref={containerRef}>
                <div className={styles.call}>
                    {'Gọi tổng đài '}
                    <a href="tel:+84912345678">
                        <img src={PhoneIconBlue} alt="Phone" />
                        091.234.5678
                    </a>
                </div>
                <div className={styles.or}>hoặc</div>
                <div className={styles.book}>

                    <h3>Đăng ký tổng đài gọi lại</h3>

                    <div className={styles.form}>
                        <img src={XeImage} alt="Xe" />

                        {
                            isShowForm
                            &&
                            <>
                                <div className={`${styles.inputGroup} ${formData.from?.error ? styles.hasError : ''}`}>
                                    <Input containerClassName={styles.input} label="Điểm đón" onTextChange={(value): void => {
                                        setFormData((data) => ({
                                            ...data,
                                            from: {
                                                value,
                                                error: ''
                                            }
                                        }));
                                    }} />
                                    <img src={LocationIcon} alt="Location" />
                                    {
                                        !!formData.from?.error
                                        &&
                                        <div className={styles.error}>Vui lòng nhập điểm đón</div>
                                    }
                                </div>

                                <div className={`${styles.inputGroup} ${formData.to?.error ? styles.hasError : ''}`}>
                                    <Input containerClassName={styles.input} label="Điểm đến" onTextChange={(value): void => {
                                        setFormData((data) => ({
                                            ...data,
                                            to: {
                                                value,
                                                error: ''
                                            }
                                        }));
                                    }} />
                                    <img src={LocationIcon} alt="Location" />
                                    {
                                        !!formData.to?.error
                                        &&
                                        <div className={styles.error}>Vui lòng nhập điểm đến</div>
                                    }
                                </div>

                                <div className={`${styles.inputGroup} ${formData.phone?.error ? styles.hasError : ''}`}>
                                    <Input containerClassName={styles.input} type="tel" label="Số điện thoại" onTextChange={(value): void => {
                                        setFormData((data) => ({
                                            ...data,
                                            phone: {
                                                value,
                                                error: ''
                                            }
                                        }));
                                    }} />
                                    <img src={PhoneIcon} alt="Phone" />
                                    {
                                        !!formData.phone?.error
                                        &&
                                        <div className={styles.error}>Vui lòng nhập số điện thoại</div>
                                    }
                                </div>

                                <div className={`${styles.inputGroup} ${formData.time?.error ? styles.hasError : ''}`}>
                                    <Input containerClassName={styles.input} label="Ngày đi" onTextChange={(value): void => {
                                        setFormData((data) => ({
                                            ...data,
                                            time: {
                                                value,
                                                error: ''
                                            }
                                        }));
                                    }} />
                                    <img src={CalendarIcon} alt="Calendar" />
                                    {
                                        !!formData.time?.error
                                        &&
                                        <div className={styles.error}>Vui lòng nhập ngày đi</div>
                                    }
                                </div>
                            </>
                        }
                    </div>

                    <div className={`${styles.inputGroup} ${formData.type?.error ? styles.hasError : ''}`}>
                        <Select
                            className={styles.select}
                            emptySelectionLabel="Loại xe"
                            onChange={(option): void => {
                                setFormData((data) => ({
                                    ...data,
                                    type: {
                                        value: String(option.value),
                                        error: ''
                                    }
                                }));
                            }}
                            options={[
                                {
                                    label: 'Xe 4 chỗ',
                                    value: '4',
                                },
                                {
                                    label: 'Xe 7 chỗ',
                                    value: '7',
                                },
                                {
                                    label: 'Xe 16 chỗ',
                                    value: '16',
                                },
                                {
                                    label: 'Xe 29 chỗ',
                                    value: '29',
                                },
                                {
                                    label: 'Xe 45 chỗ',
                                    value: '45',
                                }
                            ]}
                        />
                        {
                            !!formData.type?.error
                            &&
                            <div className={styles.error}>Vui lòng chọn loại xe</div>
                        }
                    </div>
                </div>

                <div className={styles.inputGroup}>
                    <Button
                        className={styles.action}
                        onClick={submit}
                    >
                        {isLoading ? 'Đang xử lý ...' : 'Nhận cuộc gọi báo giá'}
                    </Button>
                </div>
            </div>

            {
                isShowPopup
                && (
                    <Modal
                        title="Đăng ký thành công"
                        onClose={(): void => {
                            setIsShowPopup(false);
                            setFormData(data => ({
                                ...data,
                                from: {},
                                to: {},
                                phone: {},
                                time: {},
                            }));
                            setIsShowForm(false);
                            setTimeout(() => {
                                setIsShowForm(true);
                            }, 50);
                        }}
                    >
                        <p className={styles.comingSoon}>Chúng tôi sẽ liên hệ lại với quý khách ngay sau ít phút. Xin chân thành cảm ơn.</p>
                        <div className={styles.summary}>
                            <div>Điểm đón: <span>{formData.from?.value}</span></div>
                            <div>Điểm đến: <span>{formData.to?.value}</span></div>
                            <div>Số điện thoại: <span>{formData.phone?.value}</span></div>
                            <div>Ngày đi: <span>{formData.time?.value}</span></div>
                            <div>Loại xe: <span>{formData.type?.value} chỗ</span></div>
                        </div>
                    </Modal>
                )
            }
        </>
    );
};

export default Booking;