import React, {useEffect,  useState} from "react";
import { useForm, Controller } from "react-hook-form";
import RichEditor from "../utils/RichEditor"

const JobDetails = (props) => {

    // Retrieve data from either session storage or state
    const valuesDerivedFromState = props.parentState;
    const [isRemote, setIsRemote] = useState(null);
    const { register, handleSubmit, control, watch, formState: { errors } } = useForm({
        defaultValues: valuesDerivedFromState
    });
    const onSubmit = data => { 
        if(isRemote == '1' || !data.jobLocationOther && !data.jobLocation){
            data['jobLocation'] = 'Worldwide'
        }
        if(data.jobLocationOther){
            data['jobLocation'] =  data.jobLocationOther
        }
        props.onChange(1, data)             
    }

    const handleRemoteTogglePanel = (e) =>{
        setIsRemote(e.target.value);        
    }
    return (
        <form  onSubmit={handleSubmit(onSubmit)} className="highlighted-box">
            <h2>Please fill in the details</h2>
            {Object.keys(errors).length > 0 && <p className="error">Please fill in all the required fields</p>}
            <div className="row full job-title">
            {/* <RichEditor onChange={hello}/> */}
            </div>
            <div className="row full job-title">
                <p className="mandatory">Job Title</p>
                <input 
                    placeholder="Frontend developer - ReactJS ..." 
                    type="text" 
                    {...register("jobTitle", {required:true})} 
                    id="job-title" />
            </div>
            <div className="row full job-category">
                <div className=" half">
                    <p className="mandatory">Job Category</p>
                    <select defaultValue={'none'} 
                    {...register("jobCategory", {required:true} )} 
                    id="jobCategory">
                        <option value="none" disabled>Select one</option>
                        <option value="IT - Software development">IT - Software development</option>
                        <option value="Product & Design">Product & Design</option>
                        <option value="Marketing & Sales">Marketing & Sales</option>
                        <option value="Operations & Support">Operations & Support</option>
                        <option value="Finance & Accounting">Finance & Accounting</option>
                        <option value="HR & Recruiting">HR & Recruiting</option>
                        <option value="Intern Jobs">Intern Jobs</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className=" half job-type">
                    <p className="mandatory">Job Type</p>
                        <div className="half radio">
                            <input type="radio" 
                            {...register("jobType", {required:true})} 
                            id="part-time" 
                            value="Part-time"
                             />
                            <label htmlFor="part-time">Part-Time</label>
                        </div>
                        <div className="half radio">
                            <input type="radio" {...register("jobType")} id="full-time" value="Full-time" />
                            <label htmlFor="full-time">Full-Time</label>
                        </div>
                    
                        <div className="half radio">
                            <input type="radio" {...register("jobType")} id="contract" value="Contract" />
                            <label htmlFor="contract">Contract</label>
                        </div>
                        <div className="half radio">
                            <input type="radio" {...register("jobType")} id="freelance" value="Freelance" />
                            <label htmlFor="freelance">Freelance</label>
                        </div>
                </div>
            </div>
            <div className="row full job-description">
                <p className="mandatory">Job Description</p>
                <Controller
                render={({
                    field: {onChange}
                }) => (
                    <RichEditor
                    onChange={onChange}
                    data={valuesDerivedFromState && valuesDerivedFromState.jobDescription}
                    />)}
                    name="jobDescription"
                    control={control}
                    rules={{ required: true , minLength: 30 }}
                />
            </div>
            <div className="row full where-to-apply">
                <p className="mandatory">How To Apply?</p>
                <p className="small-p">How should the applicants approach you? By email or an application page where they can directly apply?</p>
                <input type="text" 
                {...register("howToApply", {required:true})} 
                placeholder="Email / Application page URL" />
            </div>
            <div className="row full">
                <p className="mandatory">Accept Applicants Worldwide?</p>
                <div className="full radio">
                    <input onClick={handleRemoteTogglePanel} id="remote-yes" type="radio" {...register("isRemote", {required:true})} value="1" />
                    <label htmlFor="remote-yes">Yes</label>
                </div>                               
                <div className="full radio">
                    <input onClick={handleRemoteTogglePanel} id="remote-no" type="radio" {...register("isRemote", {required:true})} value="0" />
                    <label htmlFor="remote-no">With some GEO restrictions</label>
                </div>
            </div>
            {isRemote == 0 &&
            <>
                    <div className="row full">
                    <p>Where should the applicats be located?</p>
                    <div className="geo-locations">
                        <div className="split">
                            <div className="full radio">
                                <input id="europe" type="radio" {...register("jobLocation")} value="Europe" />
                                <label htmlFor="europe">Europe</label>
                            </div>    
                            <div className="full radio">
                                <input id="uk" type="radio" {...register("jobLocation")} value="UK" />
                                <label htmlFor="uk">UK</label>
                            </div>    
                            <div className="full radio">
                                <input id="asia" type="radio" {...register("jobLocation")} value="asia" />
                                <label htmlFor="asia">Asia</label>
                            </div>    
                        </div>
                        <div className="split">
                            <div className="full radio">
                                <input id="na" type="radio" {...register("jobLocation")} value="North America" />
                                <label htmlFor="na">North America</label>
                            </div>    
                            <div className="full radio">
                                <input id="sa" type="radio" {...register("jobLocation")} value="South America" />
                                <label htmlFor="sa">South America</label>
                            </div>    
                            <div className="full radio">
                                <input id="usa-only" type="radio" {...register("jobLocation")} value="USA Only" />
                                <label htmlFor="usa-only">USA Only</label>
                            </div> 
                        </div>   
                        <div className="split">
                            <div className="full radio">
                                <input id="au" type="radio" {...register("jobLocation")} value="Australia" />
                                <label htmlFor="au">Australia</label>
                            </div>    
                            <div className="full radio">
                                <input id="canada" type="radio" {...register("jobLocation")} value="Canada" />
                                <label htmlFor="canada">Canada</label>
                            </div>    
                            <div className="full radio">
                                <input id="africa" type="radio" {...register("jobLocation")} value="Africa" />
                                <label htmlFor="africa">Africa</label>
                            </div>  
                        </div>    
                    </div>
                </div>
                <div className="other-geo full">
                    <p className="small-p">If other, state here:</p>
                    <input {...register("jobLocationOther")} type="text" placeholder="Other" />
                </div>
            </>
            }
                <div className="full cta-holder">
                    <input type="submit" value="Proceed" className="cta main-cta" />
                </div>
        </form>
    )
}

export default JobDetails;

