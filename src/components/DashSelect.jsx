import React from 'react'
import './DashSelect.css' 

const DashSelect = ({selectTitle, options}) => {
    return (
        <div className='select-container'>
            <p className='select-title'>{selectTitle}</p>
            <select className='select'>
                <option value={options[0]}>{options[0]}</option>
                <option value={options[1]}>{options[1]}</option>
            </select>
        </div>
    )
}

export default DashSelect