import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import axios from 'axios';


function getStepsLabel() {
    return [
        <p className="fs-6 light-color-text">Basic Info</p>,
        <p className="fs-6 light-color-text">Documents</p>,
        <p className="fs-6 light-color-text">Educational details</p>
    ];
}

function GetStepContent({step, studentData, handleInputChange, handleFileChange}) {
    switch (step) {
        case 0:
            return (
                <>
                    <div>
                        <div className="input-group flex-nowrap ">
                            <span className="input-group-text grey-color-bg light-color-text">Name</span>
                            <input type="text" name="name" defaultValue={studentData.name} className="form-control grey-color-bg light-color-text" placeholder="Name"  onChange={handleInputChange}/>
                        </div>
                        <div className="input-group flex-nowrap mt-4">
                            <span className="input-group-text grey-color-bg light-color-text">Email</span>
                            <input type="email" name="email" defaultValue={studentData.email} className="form-control grey-color-bg light-color-text" placeholder="Email" onChange={handleInputChange} />
                        </div>
                        <div className="input-group flex-nowrap mt-4">
                            <span className="input-group-text grey-color-bg light-color-text">Gender</span>
                            <select name="gender" className="form-select grey-color-bg light-color-text" aria-label="Gender" onChange={handleInputChange}>
                                <option value="male" selected={studentData.gender === "male"}>Male</option>
                                <option value="female" selected={studentData.gender === "female"}>Female</option>
                            </select>
                        </div>
                        <div className="input-group flex-nowrap mt-4">
                            <span className="input-group-text grey-color-bg light-color-text">Address</span>
                            <input name="address" type="text" defaultValue={studentData.address} className="form-control grey-color-bg light-color-text" placeholder="Address" onChange={handleInputChange}/>
                        </div>
                        <div className="input-group flex-nowrap mt-4">
                            <span className="input-group-text grey-color-bg light-color-text">Phone Number</span>
                            <input name="phone" type="tel" defaultValue={studentData.phone} className="form-control grey-color-bg light-color-text" placeholder="Phone Number" onChange={handleInputChange}/>
                        </div>
                    </div>
                </>
            );
        case 1:
            return (
                <>
                    <div>
                        <div className="input-group flex-nowrap mt-4">
                            <span className="input-group-text grey-color-bg light-color-text">Photo</span>
                            <input name="photoFile" type="file" className="form-control grey-color-bg light-color-text"/>
                        </div>
                        <div className="input-group flex-nowrap mt-4">
                            <span className="input-group-text grey-color-bg light-color-text">Mark Sheet 10th</span>
                            <input name="marksheet10thFile" type="file" className="form-control grey-color-bg light-color-text"/>
                        </div>
                        <div className="input-group flex-nowrap mt-4">
                            <span className="input-group-text grey-color-bg light-color-text">Mark Sheet 12th</span>
                            <input name="marksheet12thFile" type="file" className="form-control grey-color-bg light-color-text"/>
                        </div>
                        <div className="input-group flex-nowrap mt-4">
                            <span className="input-group-text grey-color-bg light-color-text">TC Certificate</span>
                            <input name="tcCertificateFile" type="file" className="form-control grey-color-bg light-color-text"/>
                        </div>
                    </div>
                </>
            );
        case 2:
            return (
                <>
                    <div>
                        <div className="input-group flex-nowrap mt-4">
                            <span className="input-group-text grey-color-bg light-color-text">Degree</span>
                            <select name="degree" className="form-select grey-color-bg light-color-text" aria-label="Degree" onChange={handleInputChange}>
                                <option value="B.Tech" selected={studentData.degree === "B.Tech"}>B.Tech</option>
                                <option value="B.E" selected={studentData.degree === "B.E"}>B.E</option>
                                <option value="B.Sc" selected={studentData.degree === "B.Sc"}>B.Sc</option>
                                <option value="B.Com" selected={studentData.degree === "B.Com"}>B.Com</option>
                            </select>
                        </div>
                        <div className="input-group flex-nowrap mt-4">
                            <span className="input-group-text grey-color-bg light-color-text">Status</span>
                            <select name="degreeStatus" className="form-select grey-color-bg light-color-text" aria-label="status" onChange={handleInputChange}>
                                <option value="undergraduate" selected={studentData.degreeStatus === "undergraduate"}>Undergraduate</option>
                                <option value="graduate" selected={studentData.degreeStatus === "graduate"}>Graduate</option>
                            </select>
                        </div>
                        <div className="input-group flex-nowrap mt-4">
                            <span className="input-group-text grey-color-bg light-color-text">Year</span>
                            <select name="year" className="form-select grey-color-bg light-color-text" aria-label="year" onChange={handleInputChange}>
                                <option value="1" selected={studentData.year === "1"}>1</option>
                                <option value="2" selected={studentData.year === "2"}>2</option>
                                <option value="3" selected={studentData.year === "3"}>3</option>
                                <option value="4" selected={studentData.year === "4"}>4</option>
                                <option value="5" selected={studentData.year === "5"}>5</option>
                            </select>
                        </div>
                        <div className="input-group flex-nowrap mt-4">
                            <span className="input-group-text grey-color-bg light-color-text">College Name</span>
                            <input name="collegeName" type="text" defaultValue={studentData.collegeName} className="form-control grey-color-bg light-color-text" placeholder="College Name" onChange={handleInputChange}/>
                        </div>
                    </div>
                </>
            );
        default:
            return "Unknown step";
    }
}

function StudentForm({login}) {

    let navigate = useNavigate();
    useEffect(() => {
        if(!login){
            navigate('/')
        }
    }, [login])

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        gender: 'male',
        address: '',
        phone: '',
        degree: 'B.Tech',
        degreeStatus: 'Undergraduate',
        year: '1',
        collegeName: '',
        photoFile: null,
        marksheet10thFile: null,
        marksheet12thFile: null,
        tcCertificateFile: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(name, value);
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData({ ...formData, [name]: files[0] });
    };

    const handleSubmit = async () => {
        const form = new FormData();
        for (const key in formData) {
            form.append(key, formData[key]);
        }
        try {
            const response = await axios.post('https://stuverse-backend.onrender.com/student/add', form, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            console.log(response);
            setFormData({
                name: '',
                email: '',
                gender: 'male',
                address: '',
                phone: '',
                degree: 'B.Tech',
                degreeStatus: 'Undergraduate',
                year: '1',
                collegeName: '',
                photoFile: null,
                marksheet10thFile: null,
                marksheet12thFile: null,
                tcCertificateFile: null
            });
            // clear form values
            let formInputs = document.querySelectorAll('input');
            formInputs.forEach(input => {
                input.value = '';
            }
            );
            let formSelects = document.querySelectorAll('select');
            formSelects.forEach(select => {
                select.value = '';
            });
            let formFileInputs = document.querySelectorAll('input[type="file"]');
            formFileInputs.forEach(fileInput => {
                fileInput.value = '';
            });
            setActiveStep(0);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const [activeStep, setActiveStep] = React.useState(0);
    const stepsLabel = getStepsLabel();

    const handleNext = () => {
        if (activeStep === stepsLabel.length - 1) {
            handleSubmit();
        }
        else{
            setActiveStep(
                (prevActiveStep) => prevActiveStep + 1
            );
        }
        
    };

    const handleBack = () => {
        setActiveStep(
            (prevActiveStep) => prevActiveStep - 1
        );
    };

    return (
        <div className="w-75 mx-auto my-5">
            
            <Stepper activeStep={activeStep}>
                {stepsLabel.map((label, index) => (
                    <Step key={index}>
                        <StepLabel>{label}</StepLabel>
                        
                    </Step>
                ))}
            </Stepper>
            <br />
                    <GetStepContent step={activeStep} studentData={formData} handleInputChange={handleChange} handleFileChange={handleFileChange}/>
                    <br />
                    <div className="mt-1 row d-flex justify-content-center">
                        <button
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            className="btn btn-dark m-2 col-2"
                        >
                            Back
                        </button>
                        <button

                            onClick={handleNext}
                            className="btn btn-dark m-2 col-2"
                        >
                            {activeStep === stepsLabel.length - 1 ? "Finish" : "Next"}
                        </button>
                    </div>
        </div>
    )
}

export default StudentForm;