import React from 'react'
import './StateBar.css'
import * as Icon from 'react-bootstrap-icons';
import StateButton from '../StateButton/StateButton'


const StateBar = () => {
    return (
        <div className='bg-[#f2f2f2]  w-full flex justify-between content-center px-12 py-2 max-lg:hidden' >
            <div className="timeLocation flex place-items-center">
                <p className='flex place-items-center mr-6'>
                    <span><Icon.GeoAltFill className='text-red-600 mr-2 text-sm' /></span>
                    123 Street, New York, USA </p>
                <p className='flex place-items-center'>
                    <span><Icon.Clock className='text-red-600 mr-2 text-sm' /></span>
                    Mon - Fri : 09.00 AM - 09.00 PM</p>
            </div>

            <div className="contactInformation flex place-items-center">
                <p className='flex place-items-center mr-6 text-sm'>
                    <span><Icon.TelephoneFill className='text-red-600 mr-2' /></span>
                    +012 345 6789</p>
                <StateButton icon={<Icon.Facebook />} />
                <StateButton icon={<Icon.Twitter />} />
                <StateButton icon={<Icon.Linkedin />} />
                <StateButton icon={<Icon.Instagram />} />
            </div>

        </div>

    )
}

export default StateBar
