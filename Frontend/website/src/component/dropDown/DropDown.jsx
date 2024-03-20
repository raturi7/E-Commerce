import React, { useState } from 'react';

function DropDown() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropDown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" onClick={toggleDropDown} aria-haspopup="true" aria-expanded={isOpen ? "true" : "false"}>
                    Address
                </button>
                <div className={`dropdown-menu${isOpen ? ' show' : ''}`} aria-labelledby="dropdownMenu2">
                    <button className="dropdown-item" type="button">Address1</button>
                    <button className="dropdown-item" type="button">Address2</button>
                    <button className="dropdown-item" type="button">Address3</button>
                </div>
            </div>
        </>
    );
}

export default DropDown;
