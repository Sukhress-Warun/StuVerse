import React from 'react'
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";


function getStepsLabel() {
    return [
        <p className="fs-6 light-color-text">Basic Info</p>,
        <p className="fs-6 light-color-text">Documents</p>,
        <p className="fs-6 light-color-text">Educational details</p>
    ];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return (
                <>
                    <div>
                        <div className="input-group flex-nowrap ">
                            <span className="input-group-text grey-color-bg light-color-text">Name</span>
                            <input type="text" className="form-control grey-color-bg light-color-text" placeholder="Name" />
                        </div>
                        <div className="input-group flex-nowrap mt-4">
                            <span className="input-group-text grey-color-bg light-color-text">Email</span>
                            <input type="email" className="form-control grey-color-bg light-color-text" placeholder="Email" />
                        </div>
                        <div className="input-group flex-nowrap mt-4">
                        <span className="input-group-text grey-color-bg light-color-text">Gender</span>
                            <select className="form-select grey-color-bg light-color-text" aria-label="Gender">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div className="input-group flex-nowrap mt-4">
                            <span className="input-group-text grey-color-bg light-color-text">Address</span>
                            <input type="text" className="form-control grey-color-bg light-color-text" placeholder="Address" />
                        </div>
                        <div className="input-group flex-nowrap mt-4">
                            <span className="input-group-text grey-color-bg light-color-text">Phone Number</span>
                            <input type="tel" className="form-control grey-color-bg light-color-text" placeholder="Phone Number" />
                        </div>
                    </div>
                </>
            );
        case 1:
            return (
                <>
                    <div>

                    </div>
                </>
            );
        case 2:
            return (
                <>
                    <div>
                        <div className="input-group flex-nowrap mt-4">
                        <span className="input-group-text grey-color-bg light-color-text">Degree</span>
                            <select className="form-select grey-color-bg light-color-text" aria-label="Degree">
                                <option value="B.Tech">B.Tech</option>
                                <option value="B.E">B.E</option>
                                <option value="B.Sc">B.Sc</option>
                                <option value="B.Com">B.Com</option>
                            </select>
                        </div>
                        <div className="input-group flex-nowrap mt-4">
                        <span className="input-group-text grey-color-bg light-color-text">Status</span>
                            <select className="form-select grey-color-bg light-color-text" aria-label="status">
                                <option value="undergraduate">Undergraduate</option>
                                <option value="graduate">Graduate</option>
                            </select>
                        </div>
                        <div className="input-group flex-nowrap mt-4">
                            <span className="input-group-text grey-color-bg light-color-text">Year</span>
                            <select className="form-select grey-color-bg light-color-text" aria-label="year">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    </div>
                </>
            );
        default:
            return "Unknown step";
    }
}

function StudentForm() {

    const [activeStep, setActiveStep] = React.useState(0);
    const stepsLabel = getStepsLabel();

    const handleNext = () => {
        setActiveStep(
            (prevActiveStep) => prevActiveStep + 1
        );
    };

    const handleBack = () => {
        setActiveStep(
            (prevActiveStep) => prevActiveStep - 1
        );
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className="w-75 mx-auto my-5">
            
            <Stepper activeStep={activeStep}>
                {stepsLabel.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        <StepContent>
                            {getStepContent(index)}
                            <div className="mt-1">
                                <button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className="btn btn-dark m-2"
                                >
                                    Back
                                </button>
                                <button

                                    onClick={handleNext}
                                    className="btn btn-dark m-2"
                                >
                                    {activeStep === stepsLabel.length - 1 ? "Finish" : "Next"}
                                </button>
                            </div>
                        </StepContent>
                    </Step>
                ))}

            </Stepper>
        </div>
    )
}

export default StudentForm;
