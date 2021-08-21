import { auth } from "../../firebase/utils";
import { toast } from "react-toastify";

toast.configure();

export const handleResetPasswordFuntion = (email) => {

    const config = {
        url: 'https://devdzone.netlify.app/login'
    };

    return new Promise((resolve, reject) => {
        auth.sendPasswordResetEmail(email, config)
            .then(() => {
                resolve();
                toast.success('Password link send successfully on your email address')
            })
            .catch(() => {
                const err = ['Email not found please try again!']
                reject(err);
                toast.error('Please enter valid email address')
            });
    })
}
