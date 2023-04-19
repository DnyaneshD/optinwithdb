import React, { useEffect, useState } from "react";

// Load components
import JobDetails from "./steps/JobDetails";
import CompanyDetails from "./steps/CompanyDetails";
import StepsWidget from "./sidebar/StepsWidget";
import SummaryWidget from "./sidebar/SummaryWidget";

const Form = (props: any) => {
  const formData = props.formData;
  const step = props.currentStep;

  const handleFormSubmit = (step: any, data: any, submitter: any) => {
    props.handleFormData(step, data, submitter);
  };

  const mapSteps: any = {
    1: (
      <JobDetails
        parentState={formData === undefined ? null : formData[1]}
        onChange={handleFormSubmit}
      />
    ),
    2: (
      <CompanyDetails
        parentState={formData === undefined ? null : formData[2]}
        onChange={handleFormSubmit}
      />
    ),
  };

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
  );
};

export default Form;
