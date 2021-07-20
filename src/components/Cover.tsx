import React from 'react';
import { CoverProps } from '../types/CoverProps';

const Cover = (imageLinks?: CoverProps) => {
    return (
        <div>
            {imageLinks
                ? <div className="book-cover"
                    style={{
                        width: 128, height: 193,
                        backgroundImage: `url(${imageLinks['thumbnail']})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                    }}></div>
                : <div className="book-cover"
                    style={{
                        width: 128, height: 193,
                        backgroundImage: `url(http://via.placeholder.com/128x193?text=No%20Cover)`
                    }}></div>}
        </div>
    )
}

export default Cover;