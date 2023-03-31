import React from "react";
import Logo from  '../assets/img/logo.svg';

const Header = () => {
   
    const checkUrl = () =>{

        if (typeof window !== "undefined" && window.location.pathname !== '/') {
            return 'not-index';
          }
    }
    const isCreatingJob =  typeof window !== "undefined" && window.location.pathname.includes("create")
    
    return (
        <header className={checkUrl()}>
            <div className="big-wrap">
                <a href="/"><img src={Logo} alt="OptinRemote"/></a>
                <nav>
                    <ul>                     
                        <li><a href="/job-seekrs">For Job Seekers</a></li>
                        <li><a href="/employers">For Employers</a></li>
                    </ul>
                </nav>
                {!isCreatingJob && <a href="/create" className="cta main-cta">Post a job for FREE</a>}                
            </div>
        </header>
    )
}

export default Header;

