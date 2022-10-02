import Carousel from "./Carousel";

const Intro = () =>{
    return (
        <div className="intro__wraper">
            <div className="intro__text">
                <h2>Revenant</h2>
                <p>Clothes for serious people</p>
            </div>
            <Carousel>
                <img src="https://www.hippotool.com/placeholder/1600x400/6b6868/a0a0a0" alt="placeholder" />
                <img src="https://www.hippotool.com/placeholder/1600x400/6b6868/a0a0a0" alt="placeholder" />
                <img src="https://www.hippotool.com/placeholder/1600x400/6b6868/a0a0a0" alt="placeholder" />
            </Carousel>
        </div>
    )
}

export default Intro