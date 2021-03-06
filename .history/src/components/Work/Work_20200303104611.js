import React,{useEffect , useState} from 'react'
import gsap from 'gsap'
import "./Work.scss";
import Title from './../Title/Title';
export const Work = () => {
    let [slider, setSlider] = useState(0);
    /**
     * coded by Kevin =>
     *    @function Slider  
     */


     /**
      * 
      */

    const handleNextSlider = (e) => {
        e.preventDefault();
        setSlider(++ slider );
        console.log(slider)
    }
    const handlePrevSlider = (e) => {
        e.preventDefault();
        setSlider(--slider) ;
        console.log(slider)
    }
    useEffect(()=> {
        const imageSlider = document.getElementsByClassName('slider-image')
        let layer = document.getElementsByClassName('back-layer')
        const workTimeline = gsap.timeline();
        workTimeline
            .from(layer,.4,{x:"-100%", delay: .5, ease:"ease.out"})
            .from(imageSlider,.8,{x:"-100%", delay:-.8})
    })
    return (
        <section className="works">
            <div className="folio">
            <div className="work--container">
                <div className="inner--left--container">
                    <Title name="Omismo" />
                    <div className="work--navigation">
                        <div className="next">
                            <button className="button-nav button--next" onClick={handlePrevSlider}>Prev</button>
                        </div>
                        <div className="previous">
                            <button className="button-nav button--previous" onClick={handleNextSlider}> Next </button>
                        </div>
                    </div>
                <div className="breadcrumbs">
                    <p>1/2</p>
                </div>
            </div>
            <div className="inner--right--container">
                <div className="slider--work">
                    <div className="image--wrapper ">
                    <div className="back-layer"></div>
                        <img src="./assets/img/omismo.png" alt="" className="slider-image"/>
                        <div className="details--button">
                            <button className="details"> 
                                Details 
                                <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.5C0 4.22386 0.223858 4 0.5 4L16.5 4C16.7761 4 17 4.22386 17 4.5C17 4.77614 16.7761 5 16.5 5L0.5 5C0.223858 5 0 4.77614 0 4.5Z" fill="#131636"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6464 0.646447C12.8417 0.451184 13.1583 0.451184 13.3536 0.646447L17.2071 4.5L13.3536 8.35355C13.1583 8.54882 12.8417 8.54882 12.6464 8.35355C12.4512 8.15829 12.4512 7.84171 12.6464 7.64645L15.7929 4.5L12.6464 1.35355C12.4512 1.15829 12.4512 0.841709 12.6464 0.646447Z" fill="#131636"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            </div>

        </div>
    </section>
    )
}
export default Work ;