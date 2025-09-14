import nProgress from 'nprogress';
import React, { useEffect } from 'react'
import { useLocation } from 'react-router'
import "nprogress/nprogress.css";
import "../../progress.css"
export default function ProgressPage() {
  const location = useLocation();
  useEffect(()=>{
    nProgress.configure({ showSpinner: false });
    nProgress.start()
    setTimeout(() => {
      nProgress.done();
    }, 500);

    return ()=>{
        nProgress.done()
    }
  },[location])
  return null
}
