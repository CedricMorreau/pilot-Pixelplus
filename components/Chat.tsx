import React from 'react'

export default function Chat() {
    return (
        <>
            <div className="fixed right-10 bg-[#0045FF] px-6 py-3 rounded-full shadow-md z-40">
                <svg className="inline-block mr-3" width="17.42" height="17.42" viewBox="0 0 24.42 24.42"><path d="M28.42,28.42l-4.884-4.884H5.831a1.752,1.752,0,0,1-1.267-.565A1.752,1.752,0,0,1,4,21.7V5.831a1.752,1.752,0,0,1,.565-1.267A1.752,1.752,0,0,1,5.831,4H26.588a1.735,1.735,0,0,1,1.282.565,1.774,1.774,0,0,1,.549,1.267ZM5.831,5.831V21.7H24.3l2.289,2.289V5.831Zm0,0v0Z" transform="translate(-4 -4)" fill="#fff" /></svg>
                <span className="text-[#fff]">Chat met ons</span>
            </div>
        </>
    )
}