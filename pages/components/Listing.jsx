import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

import iconFounderLevelOne from '../assets/img/icons/founder-crown.svg';
import iconLocation from '../assets/img/icons/icon-location.svg';
import iconTime from '../assets/img/icons/icon-time.svg';
import iconSalary from '../assets/img/icons/icon-salary.svg';
// import api from "../utils/api.jsx";

// temp - remove later
import logoHotJar from '../assets/img/temp/hotjar.svg';

const Heading = () => {
    return (
        <div className="heading">
            <h2>Jobs posted by Bitable</h2>
        </div>
    )
}

const Filter = () => {
    return (
        <div className="filter">
            <p><b></b></p>
            <ul>
                <li><a href="#">All Jobs</a></li>
                <li><a href="#">IT - Software development</a></li>
                <li><a href="#">Product & Design</a></li>
                <li><a href="#">Marketing & Sales</a></li>
                <li><a href="#">Operations & Support</a></li>
                <li><a href="#">Finance & Accounting</a></li>
                <li><a href="#">HR & Recruiting</a></li>
                <li><a href="#">Intern Jobs</a></li>
                <li><a href="#">Other</a></li>
            </ul>
        </div>
    )
}

const Listing = (props) => {

    const [jobList, setJobList] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    // Handle State
    useEffect(() => {
        setLoading(true)
        // api.fecthJobList().then(resp => {
        //     setJobList(resp);
        //     setError(null);
        //     sortDateVisually(resp.date);
        //     setLoading(false);
        // }).catch(e => {
        //     console.warn(e);
        // })
    }, [])

    console.log("asdasdsdsd -- >", jobList);

    return (
        <section className="listing">
            <div className="wrap">
                {props.showTitle && <Heading />}
                {props.showFilter && <Filter />}
                <div className="list">
                    {props.showFilter &&
                        <p>Showing: <b>33</b> jobs from <b>Marketing & Sales</b></p>
                    }
                    <ul>
                        {jobList?.map((job) => {

                            return (
                                <li className="featured" key={job.jobId}>
                                    <Link to={ `job/${job.jobId}`  }>
                                        <div className="company-logo">
                                            <img src={job.companyLogo.base64} alt="#" />
                                        </div>
                                        <div className="job-description">
                                            <p>{job.companyName}</p>
                                            <h3>{job.jobTitle}</h3>
                                            <div className="job-details">
                                                <div className="item">
                                                    <img src={iconLocation} alt="Location" /><span>Europe Only</span>
                                                </div>
                                                <div className="item">
                                                    <img src={iconTime} alt="Time" /><span>{job.jobType}</span>
                                                </div>
                                                {/* <div className="item">
                                                    <img src={iconSalary} alt="Salary" /><span>{job.salaryRange}</span>
                                                </div> */}
                                            </div>
                                        </div>
                                        <div className="posting-status">
                                            <span className="featured">Featured</span>
                                        </div>
                                    </Link>
                                </li>
                            )

                        })}

                        
                    </ul>
                    {props.showFilter &&
                        <div className="listing-navigation">
                            <span><b>Show all jobs from</b></span>
                            <a href="#" className="cta main-cta">IT - Software Development</a>
                        </div>
                    }

                </div>
            </div>
        </section>
    )
}

export default Listing;

/* <li>
                        <a href="#">
                            <div className="company-logo">
                                <img src={logoHotJar} alt="#" />
                            </div>
                            <div className="job-description">
                                <p>Hotjar</p>
                                <h3>Engineering Manager</h3>
                                <div className="job-details">
                                    <div className="item">
                                        <img src={iconLocation} alt="Location" /><span>Europe Only</span>
                                    </div>
                                    <div className="item">
                                        <img src={iconTime} alt="Time" /><span>Full-Time</span>
                                    </div>
                                    <div className="item">
                                        <img src={iconSalary} alt="Salary" /><span>40k-50k</span>
                                    </div>                                    
                                </div>
                            </div>
                            <div className="posting-status">
                                <span className="date">Today</span>
                            </div>
                        </a>
                    </li>
                    <li className="featured">
                        <a href="#">
                            <div className="company-logo">
                                <img src={logoHotJar} alt="#" />
                            </div>
                            <div className="job-description">
                                <p>Hotjar</p>
                                <h3>Engineering Manager</h3>
                                <div className="job-details">
                                    <div className="item">
                                        <img src={iconLocation} alt="Location" /><span>Europe Only</span>
                                    </div>
                                    <div className="item">
                                        <img src={iconTime} alt="Time" /><span>Full-Time</span>
                                    </div>
                                    <div className="item">
                                        <img src={iconSalary} alt="Salary" /><span>40k-50k</span>
                                    </div>                                    
                                </div>
                            </div>
                            <div className="posting-status">
                                <span className="featured">Featured</span>
                            </div>
                        </a>
                    </li>
                    <li className="highlighted">
                        <a href="#">
                            <div className="company-logo">
                                <img src={logoHotJar} alt="#" />
                            </div>
                            <div className="job-description">
                                <p>Hotjar</p>
                                <h3>ReactJS Web Developer - EU Only/Remote/SaaS (m/f/d) </h3>
                                <div className="job-details">
                                    <div className="item">
                                        <img src={iconLocation} alt="Location" /><span>Europe Only</span>
                                    </div>
                                    <div className="item">
                                        <img src={iconTime} alt="Time" /><span>Full-Time</span>
                                    </div>
                                    <div className="item">
                                        <img src={iconSalary} alt="Salary" /><span>40k-50k</span>
                                    </div>                                    
                                </div>
                            </div>
                            <div className="posting-status">
                                <span className="featured">Featured</span>
                            </div>
                        </a>
                    </li>
                    <li className="featured founder">
                        <span className="badge founder-level-one">
                            <img src={iconFounderLevelOne} alt="FP" />
                        </span>
                        <a href="#">
                            <div className="company-logo">
                                <img src={logoHotJar} alt="#" />
                            </div>
                            <div className="job-description">
                                <p>Hotjar</p>
                                <h3>Engineering Manager</h3>
                                <div className="job-details">
                                    <div className="item">
                                        <img src={iconLocation} alt="Location" /><span>Europe Only</span>
                                    </div>
                                    <div className="item">
                                        <img src={iconTime} alt="Time" /><span>Full-Time</span>
                                    </div>
                                    <div className="item">
                                        <img src={iconSalary} alt="Salary" /><span>40k-50k</span>
                                    </div>                                    
                                </div>
                            </div>
                            <div className="posting-status">
                                <span className="featured">Featured</span>
                            </div>
                        </a>
                    </li>
                    <li className="highlighted">
                        <a href="#">
                            <div className="company-logo">
                                <img src={logoHotJar} alt="#" />
                            </div>
                            <div className="job-description">
                                <p>Hotjar</p>
                                <h3>Engineering Manager</h3>
                                <div className="job-details">
                                    <div className="item">
                                        <img src={iconLocation} alt="Location" /><span>Europe Only</span>
                                    </div>
                                    <div className="item">
                                        <img src={iconTime} alt="Time" /><span>Full-Time</span>
                                    </div>
                                    <div className="item">
                                        <img src={iconSalary} alt="Salary" /><span>40k-50k</span>
                                    </div>                                    
                                </div>
                            </div>
                            <div className="posting-status">
                                <span className="date">27 Sep</span>
                            </div>
                        </a>
                    </li>
                    <li className="highlighted founder founder-level-two">
                        <span className="badge">
                            <img src={iconFounderLevelOne} alt="FP" />
                        </span>
                        <a href="#">
                            <div className="company-logo">
                                <img src={logoHotJar} alt="#" />
                            </div>
                            <div className="job-description">
                                <p>Hotjar</p>
                                <h3>Engineering Manager</h3>
                                <div className="job-details">
                                    <div className="item">
                                        <img src={iconLocation} alt="Location" /><span>Europe Only</span>
                                    </div>
                                    <div className="item">
                                        <img src={iconTime} alt="Time" /><span>Full-Time</span>
                                    </div>
                                    <div className="item">
                                        <img src={iconSalary} alt="Salary" /><span>40k-50k</span>
                                    </div>                                    
                                </div>
                            </div>
                            <div className="posting-status">
                                <span className="featured">Featured</span>
                            </div>
                        </a>
                    </li> */