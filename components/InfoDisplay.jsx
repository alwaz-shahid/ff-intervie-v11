import React, { useState } from 'react'

const InfoDisplay = ({ val,index }) => {
    const [value, setValue] = useState(val)
    const [editable, setEditable] = useState(false)
    const handleChange = (e, index) => {

    }
    const handleEdit = () => {
        setEditable(!editable)
    }

    return (
        <div className="editable flex-r">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            <div style={{ padding:"5px"}}>
                {editable? < input type="text" value={value} />
                :<p>{value}</p>}
            </div>
        </div>
    )
}

export default InfoDisplay
