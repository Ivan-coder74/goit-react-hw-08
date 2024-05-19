 import { useEffect, useState } from "react";
 import {Link, Navigate} from "react-router-dom";

 const NotFoundPage = () => {
     const [seconds, setSeconds] = useState(0);
     useEffect(() => {
         const interval = setInterval(() => {
             setSeconds((prevSeconds) => prevSeconds + 1);
         }, 1000);
         return () => clearInterval(interval);
     }, []);
     if (seconds === 5) {
         return <Navigate to="/" replace />;
     }
     return (
        <div>
        <h1>The page you visited does not exist.</h1>
        <p>After {5 - seconds} seconds, you will be redirected to the main page.</p>
        <Link to="/">Go Home</Link>
      </div>
    );
  }
  
  export default NotFoundPage 