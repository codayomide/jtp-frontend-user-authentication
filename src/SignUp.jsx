import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onFormSubmit = data => console.log(data);

    return (
        <div id="sign-up" className="form-container">
            <form className="form form__signup" onSubmit={handleSubmit(onFormSubmit)}>
                <div className="form-main">
                <div className="input-container">
                        <label htmlFor="username">Username</label>
                    
                        <input
                            type="text"
                            {...register("username", { required: true, pattern: "^[A-Za-z][A-Za-z0-9_]{7,29}$" ,minLength: 8, maxLength: 256})}
                            aria-invalid={errors.username ? "true" : "false"}
                        />
                        {errors.username && <p role="alert">Invalid Username</p>}
                    </div>

                    <div className="input-container">
                        <label htmlFor="email">Email</label>
                    
                        <input
                            type="text"
                            {...register("email", { required: true, pattern: /^(?=[^\s@]{1,64}@)[^\s@]+@[^\s@]+\.[^\s@.]+$/ })}
                            aria-invalid={errors.email ? "true" : "false"}
                        />
                        {errors.email && <p role="alert">Invalid Email</p>}
                    </div>
                    
                    <div className="input-container">
                        <label htmlFor="password">Password</label>
                    
                        <input
                            type="password"
                            {...register("password", { required: true, minLength: 8, maxLength: 256})}
                            aria-invalid={errors.password ? "true" : "false"}
                        />
                        {errors.password && <p role="alert">Invalid Password</p>}
                    </div>
                    
                    <button id="login-btn">Sign up</button>
                </div>

                <div className="link">Already have an account? <Link to="/login">Sign in here.</Link></div>
            </form>
        </div>
    );
}
 
export default SignUp;