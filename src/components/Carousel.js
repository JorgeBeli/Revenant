import { useEffect, useState } from "react"

const Carousel = (imgs) => {
    const {children} = imgs
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)

    const next = () => {
        if(currentIndex < (length -1)){
            setCurrentIndex(prevState => prevState + 1)
        }
    }

    const prev = () =>{
        if(currentIndex > 0){
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    useEffect(() => {
        setLength(children.length)
    }, [children])

    return(
        <div className="carousel__container">
            <div className="carousel__wraper">
                {currentIndex > 0 && <button className="left__button" onClick={prev}>&lt;</button>}
                <div className="carousel__content__wraper">
                    <div className="carousel__content" style={{transform: `translateX(-${currentIndex * 100}%)`}}>
                        {children}
                    </div>
                </div>
                {currentIndex < (length -1) && <button className="right__button" onClick={next}>&gt;</button>}
            </div>
        </div>
    )
}

export default Carousel