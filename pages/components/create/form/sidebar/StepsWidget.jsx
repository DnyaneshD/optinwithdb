import React, {useEffect} from "react";



const StepsWidget = () => {


    const urlPathName = window.location.pathname;
    const urlIsCompanyDetails = urlPathName.includes("company-details")
    const urlIsPayment = urlPathName.includes("payment")

    return (
        <div className="steps">
            <h2 className={!urlIsPayment && !urlIsCompanyDetails ? 'active' : ''}><span className="number">1.</span> Position Details</h2>
            <h2 className={urlIsCompanyDetails ? 'active' : ''}><span className="number">2.</span> Company Details</h2>
            <h2><span className="number">3.</span> Success</h2>
        </div>
    )
}

export default StepsWidget;

