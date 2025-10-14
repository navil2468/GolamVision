import React from 'react'

function FadeInImage() {
    const [isLoaded, setIsLoaded] = useState(false)
    
    return (
        <img 
            src={src}
            alt ={alt}
            className={`${className} transition-opacity duration-700 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setIsLoaded(true)}
            loading='lazy'
        />
    )
}

export default FadeInImage
