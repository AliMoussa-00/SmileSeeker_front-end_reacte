import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add login logic here
        console.log(formData);
    };

    return (
        <MDBContainer className="py-4">
            <MDBRow className="justify-content-center">
                <MDBCol md="5">
                    <div className="d-flex justify-content-center">
                        <img
                            src="src/assets/images/ss_logo_no_bg.png"
                            alt="Login Image"
                            className="img-fluid shadow-4 w-50"
                        />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <MDBRow className="mb-4" >
                            <MDBCol size="auto" md='2'>
                                <label htmlFor="email" className="col-form-label">Email</label>
                            </MDBCol>
                            <MDBCol>
                                <MDBInput
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="form-control"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className="mb-4" >
                            <MDBCol size="auto" md='2'>
                                <label htmlFor="password" className="col-form-label">Password</label>
                            </MDBCol>
                            <MDBCol >
                                <MDBInput
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="form-control"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </MDBCol>
                        </MDBRow>
                        <div className="d-grid gap-2">
                            <input className="btn btn-primary" type="submit" value="Submit"></input>
                            <Link to="/signup">new here?</Link>
                        </div>

                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default Login;