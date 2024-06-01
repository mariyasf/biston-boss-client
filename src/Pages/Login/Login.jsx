import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const { signIn } = useContext(AuthContext)

    const [disable, setDisable] = useState(true);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                console.log(result.user);

                Swal.fire({
                    title: "USer Login Success Full",
                    showClass: {
                        popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
                    },
                    hideClass: {
                        popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
                    }
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    const HandleValidateCaptcha = (e) => {
        let user_captcha_value = e.target.value;
        // console.log(user_captcha_value);
        if (validateCaptcha(user_captcha_value) == true) {
            setDisable(false)
        }
        else {
            setDisable(true);
        }

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit}
                        className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="text"
                                name="captcha"
                                onBlur={HandleValidateCaptcha}

                                placeholder="Type the Captcha Above" className="input input-bordered" required />


                        </div>

                        <div className="form-control mt-6">
                            <input
                                disabled={disable}
                                className="btn btn-primary" type="submit" value="Login" />

                        </div>
                    </form>

                    <p className='text-center pb-5'>
                        <small>New Here ? <Link to={"/signUp"}>Create an account</Link></small>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Login;