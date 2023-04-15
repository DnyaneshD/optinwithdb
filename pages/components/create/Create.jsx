import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

// Load components
import Form from "./form/Form";
import Plans from "./plans/Plans";
import Job from "../../pages/Job";
import Company from "../../pages/Company";

const Create = (props) => {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [currentStep, setCurrentStep] = useState(
    props.selectedCurrentStep || 1
  );

  // Prompt user before leaving - preserve state
  if (typeof window !== "undefined") {
    window.onbeforeunload = (event) => {
      const e = event || window.event;
      // Cancel the event
      e.preventDefault();
      if (e) {
        e.returnValue = "";
      }
      return "";
    };
  }

  // Restrict Step2 if Step1 data is missing
  const overrideStepBasedOnUrl = () => {
    const currentUrlPathname = window.location.pathname;

    const isUrlCreate =
      currentUrlPathname.split("/").length == 2 ? true : false;
    const isUrlCompanyDetails = currentUrlPathname.includes("company-details");
    const isUrlPlans = currentUrlPathname.includes("plans");
    const isUrlPreview = currentUrlPathname.includes("preview");
    const isUrlPreviewCompany = currentUrlPathname.includes("preview/company");

    // Since its same view, scrol the user to top when new form step is shown
    window.scrollTo(0, 0);

    if (isUrlCreate) {
      setCurrentStep(1);
    }
    if (isUrlCompanyDetails) {
      setCurrentStep(2);
    }
    if (isUrlPlans && currentStep < 3) {
      if (!formData[2]) {
        router.push("/create/company-details");
      }
    }
    if (isUrlCompanyDetails && currentStep < 2) {
      if (!formData[1]) {
        router.push("/create");
      }
    }
    if (isUrlPreview && !formData[1] && !formData[2]) {
      router.push("/create");
    } else if (isUrlPreview) {
      setCurrentStep(5);
    }
    if (isUrlPreviewCompany && !formData[2]) {
      router.push("/create");
    } else if (isUrlPreviewCompany) {
      setCurrentStep(6);
    }
  };

  useEffect(() => {
    overrideStepBasedOnUrl();
  });

  // Handle form 1 and form 2, as well as navigate user to proper step
  const handleFormData = (step, data, submitter) => {
    const newDataObj = formData;
    newDataObj[step] = data;
    if (submitter) {
      router.push("/create/preview");
    } else {
      setCurrentStep(step + 1);
      if (step + 1 === 2) {
        router.push({
          pathname: mapSteps[step + 1].url,
          query: {
            jobTitle: data.jobTitle,
            jobCategory: data.jobCategory,
            jobType: data.jobType,
            jobDescription: data.jobDescription,
            howToApply: data.howToApply,
            jobPlan: data.jobPlan,
          },
        });
      }

      if (step + 1 === 3) {
        handleFormSubmit(0);
      }
    }
  };

  // Take price from plans and api request data to save the job
  const handleFormSubmit = async (price) => {
    const { query } = router;

    const data = {
      jobTitle: query.jobTitle,
      jobCategory: query.jobCategory,
      jobType: query.jobType,
      jobDescription: query.jobDescription,
      howToApply: query.howToApply,
      jobPlan: query.jobPlan,
      company: {
        name: formData[2].name,
        email: formData[2].email,
        logo: formData[2].logo,
        location: formData[2].location,
        website: formData[2].website,
        description: formData[2].description,
      },
    };

    // user selected to post for free
    if (price == 0) {
      const response = await fetch("/api/movies", {
        method: "POST",
        body: JSON.stringify({ data }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  };

  // Define the component to not duplicate in the Object below
  const formComponent = (
    <Form
      handleFormData={handleFormData}
      formData={formData}
      currentStep={currentStep}
    />
  );

  // Not sure if its correct to keep components in object but keeping them like this felt organized and nice. TODO : Consult with Dnyanesh if this is good or bad.
  const mapSteps = {
    1: {
      url: "/create",
      component: formComponent,
    },
    2: {
      url: "/create/company-details",
      component: formComponent,
    },
    3: {
      url: "/create/plans",
      component: (
        <Plans handleFormSubmit={handleFormSubmit} currentStep={currentStep} />
      ),
    },
    4: {
      url: "/create/payment",
      component: "add payment component here",
    },
    5: {
      url: "/create/preview",
      component: <Job data={formData} />,
    },
    6: {
      url: "/create/preview/company",
      component: <Company data={formData} />,
    },
  };

  return <>{mapSteps[currentStep].component}</>;
};

export default Create;
