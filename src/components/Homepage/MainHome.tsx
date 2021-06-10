import React from 'react'
import { useMediaQuery } from "react-responsive";
import Gallery from './1_Gallery';
import States from './2_States';

const MainHome = () => {
    const isMobileDevice = useMediaQuery({query: '(max-width: 600px)'})
    return (
      <div>
        {!isMobileDevice ? (
          <>
            <Gallery />
            <States />
          </>
        ) : (
          <States />
        )}
      </div>
    );
}

export default MainHome
