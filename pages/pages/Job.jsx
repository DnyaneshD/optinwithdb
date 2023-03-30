import React, {useState, useEffect} from "react";
// import { Link, useParams, useNavigate } from "react-router-dom";

// import api  from "../utils/api.jsx";

import iconFounderLevelOne from '../assets/img/icons/founder-crown.svg';
import iconLocation from '../assets/img/icons/icon-location.svg';
import iconTime from '../assets/img/icons/icon-time.svg';
import iconSalary from '../assets/img/icons/icon-salary.svg';

import iconLinkedin from  '../assets/img/icons/icon-linkedin-dark.svg';
import iconFacebook from  '../assets/img/icons/icon-facebook-dark.svg';
import iconTwitter from  '../assets/img/icons/icon-twitter-dark.svg';

// temp - remove later
import logoHotJar from '../assets/img/temp/hotjar.svg';

// loader
import JobListingLoader from "../components/loaders/JobListingLoader";
import JobListingCompanyDetails from "../components/loaders/JobListingCompanyDetails";

const Job = (props) => {

    const navigate = useNavigate();
    const params = useParams();
    const [loading, setLoading] = useState(true)
    const [jobData, setJobData] = useState(null)
    
    const isPreviewMode = props.data && Object.keys(props.data).length > 1

    
   

    // Handle State
    useEffect(() => {
        setLoading(true)
      
        // Check if props data is empty == disable preview mode
        if(!isPreviewMode){
            
            if(params && params.jobId){
                api.fetchJobDetails(params.jobId).then(resp => {
                    setJobData(resp);
                    console.log(resp)                  
                    setLoading(false);            
                    sortDateVisually(resp.date);   
                }).catch( e => {
                    console.warn(e);
                    navigate('/');
                }) 
            }else{
                navigate('/');
            }

        }else{
            let formData = props.data;
            setJobData({
                "date": Date.now(),
                "title": formData[1].jobTitle,
                "location": formData[1].jobLocation,
                "jobType": formData[1].jobType,
                "jobSalary": formData[1].jobSalary,
                "jobDescription": formData[1].jobDescription,
                "jobCateogry": formData[1].jobCategory,
                "howToApply": formData[1].howToApply,
                "company": {
                    "name": formData[2].name,
                    "email": formData[2].email,
                    "logo": formData[2].logo.base64,
                    "location": formData[2].location,
                    "website": formData[2].website,
                    "descripton": formData[2].descripton,
                }
            })
            setLoading(false);
        }
        
    }, [])
    
    // Beautify date
    const sortDateVisually = (date) =>{      
        const dateSegments =new Date(date).toString().split(' ');
        return `${dateSegments[1]} ${dateSegments[2]}`        
    }


    return (
    <>
        <section className="full-job-listing">
            <div className="wrap"> 
                {isPreviewMode && <Link className="cta main-cta back-cta" to="/create/company-details">Go back</Link>}
            </div>
            <div className="wrap">
                
                <div className="content">
                {loading ? <JobListingLoader /> : 
                <>
                    <div className="heading">    
                        <p><b>{sortDateVisually(jobData.date)}</b></p>
                        <h1>{jobData.title}</h1>
                        <div className="job-details">
                            <div className="item">
                                <img src={iconLocation} alt="Location" /><span>{jobData.location}</span>
                            </div>
                            <div className="item">
                                <img src={iconTime} alt="Time" /><span>{jobData.jobType}</span>
                            </div>
                            {jobData.jobSalary &&
                            <div className="item">
                                <img src={iconSalary} alt="Salary" /><span>{jobData.jobSalary}</span>
                            </div>   
                            }
                                                             
                        </div>
                    </div>
                    <div className="wysiwyg" dangerouslySetInnerHTML={{__html: jobData.jobDescription}}></div>  
                    
                </>
                }

                </div>
                <div className="sidebar">
                    {loading ? <JobListingCompanyDetails /> : 
                    <>
                        <div className="highlighted-box">
                            {/* <span className="badge"><img src={iconFounderLevelOne} alt="#" /></span> */}
                            <div className="company-logo">
                                <img src={jobData.company && jobData.company.logo } alt="#" />
                            </div>
                            <div className="desc">
                                <p>Headquarters:</p>
                                <p><b>{jobData.company && jobData.company.location}</b></p>
                            </div>
                            <div className="desc">
                                <p>About the company</p>
                                {isPreviewMode 
                                ? <Link className="read-more" to="/create/preview/company">Read more...</Link>
                                : <Link className="read-more" to="/companies/hotjar">Read more...</Link>
                                }
                                
                                
                            </div>
                            <div className="desc">
                                <a target="_blank" href={jobData.howToApply} className="cta main-cta">Apply for this job</a>                                
                            </div>
                        </div>
                    </>
                    }
                </div>
            </div>
        </section>
        <section className="share-panel">
        <div className="wrap">
                <a target="_blank" href={loading ? "" :  jobData.howToApply} className="cta main-cta">Apply for this job</a>
                <div className="social">
                    <div className="social-media">
                        <p>Share this job</p>
                        <a href="#"><img src={iconLinkedin} alt="Linkedin" /></a>
                        <a href="#"><img src={iconFacebook} alt="Facebook" /></a>
                        <a href="#"><img src={iconTwitter} alt="Twitter" /></a>
                    </div>
                </div>
        </div>       
        </section>
    </>
    )
}

export default Job;

