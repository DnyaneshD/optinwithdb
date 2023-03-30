import React from "react";


const Create = () => {
    return (
        <section className="post-job">
            <div className="wrap">
                <div className="heading">
                    <h1>Post a job</h1>
                </div>        
                <div className="content">
                    <form action="" className="highlighted-box">
                        <h2>Please fill in the details</h2>
                        <div className="row full job-title">
                            <p className="mandatory">Job Title</p>
                            <input placeholder="Frontend developer - ReactJS ..." type="text" name="job-title" id="job-title" />
                        </div>
                        <div className="row full job-category">
                            <div className=" half">
                                <p className="mandatory">Job Category</p>
                                <select name="job-category" id="job-category">
                                    <option selected disabled>Select one</option>
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
                                        <input type="radio" name="job-type" id="part-time" value="part-time" />
                                        <label for="part-time">Part-Time</label>
                                    </div>
                                    <div className="half radio">
                                        <input type="radio" name="job-type" id="full-time" value="full-time" />
                                        <label for="full-time">Full-Time</label>
                                    </div>
                                
                                    <div className="half radio">
                                        <input type="radio" name="job-type" id="contract" value="contract" />
                                        <label for="contract">Contract</label>
                                    </div>
                                    <div className="half radio">
                                        <input type="radio" name="job-type" id="freelance" value="freelance" />
                                        <label for="freelance">Freelance</label>
                                    </div>
                            </div>
                        </div>
                        <div className="row full job-description">
                            <p className="mandatory">Job Description</p>
                            <textarea placeholder="Please write down the jobs description here…" name="job-description" id="job-description" cols="30" rows="10"></textarea>
                        </div>
                        <div className="row full where-to-apply">
                            <p className="mandatory">How To Apply?</p>
                            <p className="small-p">How should the applicants approach you? By email or an application page where they can directly apply?</p>
                            <input type="text" placeholder="Email / Application page URL" />
                        </div>
                        <div className="row full">
                            <p>Accept Applicants Worldwide?</p>
                            <div className="full radio">
                                <input id="remote-yes" type="radio" name="isremote" value="1" />
                                <label for="remote-yes">Yes</label>
                            </div>                               
                            <div className="full radio">
                                <input id="remote-no" type="radio" name="isremote" value="0" />
                                <label for="remote-no">With some GEO restrictions</label>
                            </div>
                            </div>
                            <div className="row full">
                                <p>Where should the applicats be located?</p>
                                <div className="geo-locations">
                                    <div className="split">
                                        <div className="full radio">
                                            <input id="europe" type="radio" name="geo-location" value="Europe" />
                                            <label for="europe">Europe</label>
                                        </div>    
                                        <div className="full radio">
                                            <input id="uk" type="radio" name="geo-location" value="UK" />
                                            <label for="uk">UK</label>
                                        </div>    
                                        <div className="full radio">
                                            <input id="asia" type="radio" name="geo-location" value="asia" />
                                            <label for="asia">Asia</label>
                                        </div>    
                                    </div>
                                    <div className="split">
                                        <div className="full radio">
                                            <input id="na" type="radio" name="geo-location" value="North America" />
                                            <label for="na">North America</label>
                                        </div>    
                                        <div className="full radio">
                                            <input id="sa" type="radio" name="geo-location" value="South America" />
                                            <label for="sa">South America</label>
                                        </div>    
                                        <div className="full radio">
                                            <input id="usa-only" type="radio" name="geo-location" value="USA Only" />
                                            <label for="usa-only">USA Only</label>
                                        </div> 
                                    </div>   
                                    <div className="split">
                                        <div className="full radio">
                                            <input id="au" type="radio" name="geo-location" value="Australia" />
                                            <label for="au">Australia</label>
                                        </div>    
                                        <div className="full radio">
                                            <input id="canada" type="radio" name="geo-location" value="Canada" />
                                            <label for="canada">Canada</label>
                                        </div>    
                                        <div className="full radio">
                                            <input id="africa" type="radio" name="geo-location" value="Africa" />
                                            <label for="africa">Africa</label>
                                        </div>  
                                    </div>    
                                </div>
                            </div>
                            <div className="other-geo full">
                                <p className="small-p">If other, state here:</p>
                                <input type="text" placeholder="Other" />
                            </div>
                            <div className="full cta-holder">
                                <a href="#" className="cta main-cta">Proceed</a>
                            </div>
                            
                    </form>
                    <div className="sidebar">
                        <div className="steps">
                            <h2 className="active"><span className="number">1.</span> Position Details</h2>
                            <h2><span className="number">2.</span> Company Details</h2>
                            <h2><span className="number">3.</span> Success</h2>
                        </div>
                        <div className="summary highlighted-box">
                            <h3>Summary</h3>
                            <div className="desc">
                                <h4>Items:</h4>
                                <div className="item">
                                    <p>Job posting:</p>
                                    <span className="price">$0,00</span>
                                </div>
                                <div className="item">
                                    <p>Promo plan:</p>
                                    <span className="price">$0,00</span>
                                </div>
                                <div className="item tax">
                                    <p>Tax</p>
                                    <span className="price">$0,00</span>
                                </div>
                                <div className="item total desc">
                                    <h3>Total</h3>
                                    <span className="price">$0,00</span>
                                </div>
                            </div>
                            <div className="cta-holder">
                                <a href="#" className="cta main-cta">Proceed</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Create;

