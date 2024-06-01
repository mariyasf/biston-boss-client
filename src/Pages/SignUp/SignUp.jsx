import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { loadCaptchaEnginge } from "react-simple-captcha";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";



const SignUp = () => {
    const { createNewUser } = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data);

        createNewUser(data.email, data.password)
            .then(res => {
                console.log(res.user);
            })
            .catch(err => {
                console.log(err);
            })
    }
    console.log(watch("password"))




    return (
        <>
            <Helmet>
                <title>Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)}
                            className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"
                                    {...register("name", { required: true })}
                                    name="name"
                                    placeholder="Name"
                                    required
                                    className="input input-bordered" />
                                {errors.name && <span className="text-red-600">This field is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"
                                    {...register("email", { required: true })}
                                    name="email" placeholder="email" className="input input-bordered" required />
                                {errors.email && <span className="text-red-600">This field is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                    {
                                    ...register("password", {
                                        required: true,
                                        maxLength: 20,
                                        minLength: 6,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/

                                    })
                                    }
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                />

                                {errors.password?.type == 'required' && <span className="text-red-600">This field is required</span>}
                                {errors.password?.type == 'minLength' && <span className="text-red-600">PW min 6 char</span>}
                                {errors.password?.type == 'maxLength' && <span className="text-red-600">PW max 20 char</span>}
                                {errors.password?.type == 'pattern' && <span className="text-red-600">1 Upper, 1 Lower, 1 Num, 1 Spacial char</span>}


                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>

                            </div>



                            <div className="form-control mt-6">
                                <input

                                    className="btn btn-primary" type="submit" value="Sign Up" />

                            </div>
                        </form>

                        <p className='text-center pb-5'>
                            <small>Have Account ? <Link className="text-red-600" to={"/login"}>Login</Link></small>
                        </p>

                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;