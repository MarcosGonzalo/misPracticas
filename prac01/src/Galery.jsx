import React, { memo, useEffect, useMemo, useState } from 'react'
import { useFetchPoke } from './customHook/useFetchPoke'
import { callPoke } from './customHook/callPoke';

export const Galery = memo(({ numPoke }) => {

    const [hover, setHover] = useState(false)


    // let newNum = useMemo(() => numPoke, [ numPoke ]);

    const { arrPoke } = useFetchPoke( numPoke );
    console.log("Me vulve arenderizar...")
    return (
    <div className='galeria'>
            {
                arrPoke.map((objPoke) => (
                    <figure
                        onMouseEnter={ () => setHover( true ) }
                        onMouseLeave={ () => setHover( false ) }
                        className='figure'>
                        <img key={ objPoke.url  } src={ hover ? objPoke.url_back: objPoke.url} alt="fue" />
                        <figcaption >
                            { objPoke.name }
                        </figcaption>
                    </figure>   
                    
                ))
            }

    </div>
)
}
)