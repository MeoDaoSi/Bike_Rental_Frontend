import React from 'react';
import moment from 'moment';

export const Format_DateTime: React.FC = (time: any) => {
    return (
        <>
            <span className='block'>{moment(time).format('MM/DD/YYYY')}</span>
        </>
    )
}
