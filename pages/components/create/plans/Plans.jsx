import React, {useState} from "react";

import ImageT2Plan from '../../../assets/img/plans/t2.png';
import ImageT3Plan from '../../../assets/img/plans/t3.png';

import iconSuccess from '../../../assets/img/icons/icon-success.svg';
import iconSuccessGrey from '../../../assets/img/icons/icon-success-grey.svg';

const Plans = (props) => {
    
    const [selectedPlan, setSelectedPlan] = useState(99);

    const handleSelection = (price,currency) => {
        // Currency is added for later, if we want to implement swap currency for EU countries.
        setSelectedPlan(price);      
    }

    const handleSubmit = (price) => {
        props.handleFormSubmit(price)
    }

    return (
    <>
        {/* <section className="banner">
            <div className="wrap">
                <img src={iconSuccess} alt="Success" />
                <h2>Succesful submission, thank you!</h2>
                <p>We will shortly review it and get it published. Once its live, we will let you know per email.</p>
            </div>
        </section> */}
        <section className="plans">
            <div className="wrap">
                <div className="heading">
                    <h2>Stand out from the crowd - (Optional)</h2>
                    <p>Highlighting or featuring your listings will significantly increase the number of candidates while at the same time helping you to quickly fill your position.</p>
                </div>
                <ul>
                    <li className={selectedPlan == 49 ? 'highlighted-box active' : 'highlighted-box'} onClick={() => {handleSelection(49,'USD')}}>
                        <span className="selected">
                            Selected
                        </span>
                        <div className="price">
                            <p>Highlighted</p>
                            <div className="amount">
                                <span className="currency">$</span>
                                <span className="price">49</span>
                            </div>
                        </div>
                        <div className="perks">
                            <div className="item">
                                <img src={iconSuccessGrey} alt="#" />
                                <p>Lasts for 90 days</p>
                            </div>
                            <div className="item">
                                <img src={iconSuccessGrey} alt="#" />
                                <p>Refreshed once every 10 days</p>
                            </div>
                            <div className="item">
                                <img src={iconSuccessGrey} alt="#" />
                                <p>Ad is highlighted</p>
                            </div>
                        </div>
                        <div className="showcase plan-tier-2">
                            <p>Here's how it looks:</p>
                            <div className="img-bg">
                                <img src={ImageT2Plan} alt="Tier 2 - Highlighted" />
                            </div>
                        </div>
                    </li>
                    <li className={selectedPlan == 99 ? 'highlighted-box active' : 'highlighted-box'} onClick={() => {handleSelection(99,'USD')}}>
                        <span className="selected">
                            Selected
                        </span>
                        <div className="price">
                            <p>Featured</p>
                            <div className="amount">
                                <span className="currency">$</span>
                                <span className="price">99</span>
                            </div>
                        </div>
                        <div className="perks">
                            <div className="item">
                                <img src={iconSuccessGrey} alt="#" />
                                <p>Lasts for 90 days</p>
                            </div>
                            <div className="item">
                                <img src={iconSuccessGrey} alt="#" />
                                <p>Refreshed once every 10 days</p>
                            </div>
                            <div className="item">
                                <img src={iconSuccessGrey} alt="#" />
                                <p>Ad is highlighted</p>
                            </div>
                            <div className="item">
                                <img src={iconSuccessGrey} alt="#" />
                                <p>Ad is pinned on top for 7 days</p>
                            </div>
                            <div className="item">
                                <img src={iconSuccessGrey} alt="#" />
                                <p>Ad is featured</p>
                            </div>
                        </div>
                        <div className="showcase plan-tier-3">
                            <p>Here's how it looks:</p>
                            <div className="img-bg">
                                <img src={ImageT3Plan} alt="Tier 3 - Featured" />
                            </div>
                        </div>
                    </li>
                    <li className={selectedPlan == 149 ? 'highlighted-box active' : 'highlighted-box'} onClick={() => {handleSelection(149,'USD')}}>
                        <span className="selected">
                            Selected
                        </span>
                        <div className="price">
                            <p>Overlaid</p>
                            <div className="amount">
                                <span className="currency">$</span>
                                <span className="price">149</span>
                            </div>
                        </div>
                        <div className="perks">
                            <div className="item">
                                <img src={iconSuccessGrey} alt="#" />
                                <p>Lasts for 90 days</p>
                            </div>
                            <div className="item">
                                <img src={iconSuccessGrey} alt="#" />
                                <p>Refreshed once every 10 days</p>
                            </div>
                            <div className="item">
                                <img src={iconSuccessGrey} alt="#" />
                                <p>Ad is highlighted</p>
                            </div>
                            <div className="item">
                                <img src={iconSuccessGrey} alt="#" />
                                <p>Ad is pinned on top for 7 days</p>
                            </div>
                            <div className="item">
                                <img src={iconSuccessGrey} alt="#" />
                                <p>Ad is featured</p>
                            </div>
                            <div className="item">
                                <img src={iconSuccessGrey} alt="#" />
                                <p>Ad has colored background</p>
                            </div>
                        </div>
                        <div className="showcase plan-tier-1">
                            <p>Here's how it looks:</p>
                            <div className="img-bg founder-level-one">
                                <img src={ImageT3Plan} alt="Tier 1 - Normal" />
                            </div>
                        </div>
                    </li>
                </ul>
                <div> 
                    <a href="#" className="cta free-selection" onClick={() => {handleSubmit(0)}}>No thanks, I would like to publish for free.</a>               
                    <a href="#" className="cta main-cta" onClick={() => {handleSubmit(selectedPlan)}}>Proceed</a>
                </div>
            </div>
        </section>
    </>
    )
}

export default Plans;

