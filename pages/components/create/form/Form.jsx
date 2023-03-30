import React, {useEffect, useState} from "react";
// import { useNavigate } from 'react-router-dom'

// Load components
import JobDetails from "./steps/JobDetails";
import CompanyDetails from "./steps/CompanyDetails";
import StepsWidget from "./sidebar/StepsWidget";
import SummaryWidget from "./sidebar/SummaryWidget";

const Form = (props) => {
    
    let navigate = useNavigate();
    const formData = props.formData
    const step = props.currentStep

    const handleFormSubmit = (step, data, submitter) => {
        props.handleFormData(step,data,submitter)              
    }
    
    const mapSteps = {
        1 : <JobDetails parentState={formData[1]} onChange={handleFormSubmit}/>,
        2 : <CompanyDetails parentState={formData[2]} onChange={handleFormSubmit} />
    }

    return (
        <section className="post-job">
            <div className="wrap">
                <div className="heading">
                    <h1>Post a job</h1>
                </div>        
                <div className="content">
                    {mapSteps[step]}
                    <div className="sidebar">
                        <StepsWidget />
                        <SummaryWidget />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Form;

