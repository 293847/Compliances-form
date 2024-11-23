import { useState, useEffect } from "react";
import "./App.css";

function App() {
    const initialValues = {
        // username: "",
        // email: "",
        // password: "",
        // confirmPassword: "",
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors, formValues, isSubmit]);
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = "*";
        }
      
        if (!values.password) {
            errors.password = "*";
        } 
        
        return errors;
    };

    return (
        <>
            <div className="bgImg"></div>
            <div className="container">
            

                <form onSubmit={handleSubmit}>
                    <h1> Compliances Checklist</h1>
                    <div className="ui divider"></div>
                    <div className="ui form">
                        <div className="field">
                            <label>Your Country</label>
                            <input
                                type="text"
                                name="username"
                                placeholder="Country Name"
                                value={formValues.username}
                                onChange={handleChange}
                            />
                        </div>
                        <p>{formErrors.username}</p>
                        {/* <div className="field">
                            <label>Email</label>
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                value={formValues.email}
                                onChange={handleChange}
                            />
                        </div> */}
                        <p>{formErrors.email}</p>
                        <div className="field">
                            <label>Target Market</label>
                            <input
                                type="text"
                                name="password"
                                placeholder="Country Name"
                                value={formValues.password}
                                onChange={handleChange}
                            />
                        </div>
                        <p>{formErrors.password}</p>
                        <div className="field">
                            <label>Product Type</label>
                            <input
                                type="text"
                                name=""
                                placeholder=""
                                value={formValues.confirmPassword}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="field">
                            <label>Government Intensive</label>
                            <input
                                type="text"
                                name=""
                                placeholder=""
                                value={formValues.confirmPassword}
                                onChange={handleChange}
                            />
                        </div>
                        <p>{formErrors.confirmPassword}</p>
                        <button className="fluid ui button blue">Generate Checklist</button>
                    </div>
                </form>
                {/* <div className="text">
                    Already have an account? <span>Login</span>
                </div> */}
            </div>{" "}
        </>
    );
}

export default App;
