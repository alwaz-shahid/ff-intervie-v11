import React, { useEffect, useState } from 'react'
import InfoDisplay from './InfoDisplay'

const Home = () => {
    const [data, setData] = useState(users)
    const [editable, setEditable] = useState(false)
    // const handleUpdate = (e,id) => {
    //     const updateData = data.filter(item => item.id === id)
    // const updatedData=[...data]

    // }

    function handleChange(e, id) {

        let propVal = e.target.name
        let value = e.target.value
        let updatedData = [...data]; 
        updatedData[id][propVal]= value;
    
        setData(updatedData);
    }
    const handleEdit = () => {
        setEditable(!editable)
    }

    // useEffect(() => {},])
    return (
        <div className="data">
            <div>
                <span onClick={handleEdit} style={{ padding: "5px" }}>{<svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>} </span>

            </div>
            {data?.map((item, index) => {
                return (
                    <div key={index} className="flex-r">
                        <h4>{item?.name}</h4>
                        {editable && <input onChange={(e) => handleChange(e, item.id)} type="text"  name="name"/>}
                        <hr/>
                        <h4>{item?.email}</h4>
                        {editable && <input onChange={(e) => handleChange(e, item.id)} type="text" name="email"/>}
                    </div>
                )
            })}
        </div>
    )
}

export default Home

const users = [
    {
        id: 0,
        name: "Sammay",
        email:"exp@emp.com"
    },
    {
        id: 1,
        name: "John",
        email:"exp@emp.com"
    },
    {
        id: 2,
        name: "Jane",
        email:"exp@emp.com"
    },
    {
        id: 3,
        name: "Jack",
        email:"exp@emp.com"
    }
]