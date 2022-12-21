import React from "react";

export default function Main(){
    return (
        <div className="main-body">
           <div className="main-content"> <img className="header-image" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRULo95pjUWMmB_e-UmqyaXuqF9YC6KM_XlAw&usqp=CAU" />
            <h2>Olukunle Afolabi</h2>
            <p className="job-title">Backend Developer</p>
            <p>afolabikunle2@gmail.com</p>
            <div className="button-block">
                <a href="mailto:afolabikunle2@gmail.com"><button className="button1">
                    <i className="fa fa-envelope"></i>
                    <span> Email </span>
                </button></a>
               <a href="https://www.linkedin.com/in/olukunle-afolabi-a67453168/"> <button className="button2">
                    <i className="fab fa-linkedin"></i>
                    <span className="linkedin-color"> LinkedIn </span>
                </button></a>
            </div>
            </div>
        </div>
    )
}