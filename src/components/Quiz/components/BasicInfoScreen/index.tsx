
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

interface BasicInfoScreenProps {
    onBasicInfoSubmit: (firstName: string, lastName: string) => void;
}

export default function BasicInfoScreen(props: BasicInfoScreenProps) {
    const recaptcha = useRef<ReCAPTCHA>(null);

    const [formData, setFormData] = useState<{ firstName: string; lastName: string; }>({
        firstName: '',
        lastName: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const [firstNameHasError, setFirstNameHasError] = useState(false)
    const [lastNameHasError, setLastNameHasError] = useState(false)
    const [captchaHasError, setCaptchaHasError] = useState(false)


        const handleBasicInfo = () => {
            setFirstNameHasError(false)
            setLastNameHasError(false)
            setCaptchaHasError(false)
            let hasError = false
    
            //Validate form, show errors, only when good go next
            if (!formData.firstName || formData.firstName.trim().length < 1) {
                setFirstNameHasError(true)
                hasError = true
            }
            if (!formData.lastName || formData.lastName.trim().length < 1) {
                setLastNameHasError(true)
                hasError = true
            }
            if(recaptcha.current != null && !recaptcha.current.getValue()){
                setCaptchaHasError(true)
                hasError = true
            }
            if (!hasError) {
                props.onBasicInfoSubmit(formData.firstName, formData.lastName)
            }
        }

    return (
        <>
            <div className="basicForm">
                <h2>Basic Information</h2>
                <div className="labelWithError">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                    />
                    <span className={firstNameHasError ? 'visible small-font' : 'hidden'}>Invalid first name!</span>
                </div>
                <div className="labelWithError">
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                    />
                    <span className={lastNameHasError ? 'visible small-font' : 'hidden'}>Invalid last name!</span>
                </div>
                <ReCAPTCHA sitekey={import.meta.env.VITE_SITE_KEY} ref={recaptcha} />
                <span className={captchaHasError ? 'visible small-font' : 'hidden'}>Please complete captcha to continue!</span>

                <br />
                <button type="button" onClick={handleBasicInfo}>Register</button>
            </div>
        </>
    )
}