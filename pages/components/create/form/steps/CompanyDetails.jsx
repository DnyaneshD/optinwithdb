import React from "react";
import { useForm, Controller } from "react-hook-form";
import RichEditor from "../utils/RichEditor";
import DragAndDropLogo from "../utils/DragAndDropLogo";
const CompanyDetails = (props) => {
  // Retrieve data from either session storage or state
  const valuesDerivedFromState = props.parentState;

  const {
    watch,
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: valuesDerivedFromState,
  });

  watch((e) => {
    console.log(e);
  });

  const onSubmit = (data, e) => {
    // Check if user wants to preview the job, send as submitted to parent.
    const submitter = e.nativeEvent.submitter.id == "preview";
    props.onChange(2, data, submitter);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="highlighted-box">
      <h2>A little about your company</h2>
      <p>
        <b>This step you do only once.</b> If you have posted previously, please
        just enter your business email and the data will be populated
        automatically.
      </p>
      {Object.keys(errors).length > 0 && (
        <p className="error">Please fill in all the required fields</p>
      )}

      <div className="row full company-details">
        <div className="half">
          <p className="mandatory">Company name</p>
          <input
            id="name"
            {...register("name", { required: true })}
            type="text"
            placeholder="Enter your company"
          />
        </div>
        <div className="half">
          <p className="mandatory">Email</p>
          <input
            id="company-email"
            {...register("email", { required: true })}
            type="text"
            placeholder="Enter your business email"
          />
        </div>
      </div>
      <div className="row full">
        <p className="mandatory">Add your company logo</p>
        {/* <div className="row full company-details">
                <DragAndDropLogo />
            </div> */}
        <div className="row full company-details">
          <Controller
            render={({ field: { onChange } }) => (
              <DragAndDropLogo
                data={valuesDerivedFromState && valuesDerivedFromState.logo}
                onChange={onChange}
              />
            )}
            name="logo"
            control={control}
            rules={{ required: true }}
          />
        </div>
      </div>
      <div className="row full company-details">
        <div className="half">
          <p className="mandatory">Company location</p>
          <input
            {...register("location", { required: true })}
            id="location"
            type="text"
            placeholder="Company Headquarters"
          />
        </div>
        <div className="half">
          <p className="mandatory">Company website</p>
          <input
            {...register("website", { required: true })}
            id="website"
            type="text"
            placeholder="https://companywebsite.com"
          />
        </div>
      </div>
      <div className="row full company-description job-description">
        <p className="mandatory">Company description</p>
        <Controller
          render={({ field: { onChange } }) => (
            <RichEditor
              data={
                valuesDerivedFromState && valuesDerivedFromState.description
              }
              onChange={onChange}
            />
          )}
          name="description"
          control={control}
          rules={{ required: true, minLength: 30 }}
          placeholder="enter your thought"
        />
      </div>
      <div className="full cta-holder">
        <input
          id="preview"
          type="submit"
          value="Review this job post"
          className="review-cta"
        />
        <span>or</span>
        <input
          id="submit"
          type="submit"
          value="Submit"
          className="cta main-cta"
        />
      </div>
    </form>
  );
};

export default CompanyDetails;
