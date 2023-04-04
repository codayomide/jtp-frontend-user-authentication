import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onFormSubmit = data => console.log(data);

    return (
        <div id="login" className="form-container">
            <form className="form form__login" onSubmit={handleSubmit(onFormSubmit)}>
                {/* <h2>Login</h2> */}
                <div className="form-main">
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
                
                    <button id="login-btn">Login</button>
                </div>

                <div className="link">Don't have an account? <Link to="/signup">Sign up here.</Link></div>
            </form>
        </div>
    );
}
 
export default Login;