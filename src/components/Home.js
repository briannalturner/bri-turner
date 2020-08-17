import React from 'react'
import { gsap } from 'gsap'

export default class Home extends React.Component {

    constructor() {
        super()
        this.box = null;
        this.boxAnimation = null;
    }

    componentDidMount() {
        this.boxAnimation = gsap.to('.moving-orange-box', {
            x: '300', 
            duration: '3', 
            rotation: '360', 
            ease:'elastic', 
            yoyo: 'true', 
            repeat: -1
        }).pause();
    };
    

    render() {
        
        return(
            <div className='p-5'>
                <div ref={div => this.box = div} className='bg-danger card moving-orange-box' style={{width:'100px', height:'100px', border: 'none'}}>
                </div>
                <br></br>
                <button className='btn btn-danger float-left m-1' onClick={() => this.boxAnimation.play()}>Play</button>
                <button className='btn btn-danger float-left m-1' onClick={() => this.boxAnimation.pause()}>Pause</button>
                <button className='btn btn-danger float-left m-1' onClick={() => this.boxAnimation.reverse()}>Reverse</button>
                <button className='btn btn-danger float-left m-1' onClick={() => this.boxAnimation.restart()}>Restart</button>
            </div>
        )
    }
}