import React from "react";
import Logo from "../assets/img/logo.svg";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const router = useRouter();

  const checkUrl = () => {
    if (typeof router.pathname !== "/") {
      return "not-index";
    }
  };
  const isCreatingJob = router.pathname.includes("create");

  return (
    <header className={checkUrl()}>
      <div className="big-wrap">
        <Link href="/">
          <img src={Logo} alt="OptinRemote" />
        </Link>
        <nav>
          <ul>
            <li>
              <a href="/job-seekrs">For Job Seekers</a>
            </li>
            <li>
              <a href="/employers">For Employers</a>
            </li>
          </ul>
        </nav>
        {!isCreatingJob && (
          <Link href="/create" className="cta main-cta">
            Post a job for FREE
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
