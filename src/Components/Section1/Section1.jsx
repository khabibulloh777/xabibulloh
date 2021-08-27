import React, {useState} from 'react'
import Section12 from './Section1.module.css' 
import TypingEffect from 'new-react-typing-effect'
function Section1() {

    return (
        <div className={Section12.header}>
            <div className={Section12.text}>
                 <div className={Section12.one}>
                <h3 className={Section12.h3uz}>Xabibulloh Xalilov</h3>
                <h3 className={Section12.h3uz}>Developer</h3>
            <TypingEffect
                          messages={
                                        [
                                            "Xabibulloh",
                                            "Xalilov",
                                        ]
                                    }
                                    cursor="|"
                                    textRenderer={(text, renderedCursor, atIndex) => {
                                        return (
                                            atIndex % 5 === 0 ?
                                                <h2 style={{ color: 'White',  fontSize: "50px" }}>{text}{renderedCursor}</h2> :
                                                <h2 style={{ color: 'White' ,fontSize: "50px" }}>{text}{renderedCursor}</h2>
                                        );
                                    }}
                                    cursorRenderer={(cursor) => (
                                        <span style={{ color: 'red' }}>{cursor}</span>
                                    )}
                                    options={{
                                        text: {
                                            charactersPerSecond: 5,
                                            fullTextDelayMS: 2000,
                                            cursorColor: "red",
                                        },
                                    }}
                                />
                                
                        <TypingEffect
                                    messages={
                                        [
                                            "Web developer",
                                            "Mobile developer",
                                            "Frontend Engineer",
                                            "Frontend Developer"
                                        ]
                                    }
                                    cursor="|"
                                    textRenderer={(text, renderedCursor, atIndex) => {
                                        return (
                                            atIndex % 2 === 0 ?
                                                <h1 style={{ color: 'coral', fontSize: "50px" }}>{text}{renderedCursor}</h1> :
                                                <h1 style={{ color: 'coral',  fontSize: "50px" }}>{text}{renderedCursor}</h1>
                                        );
                                    }}
                                    cursorRenderer={(cursor) => (
                                        <span style={{ color: 'red' }}>{cursor}</span>
                                    )}
                                    options={{
                                        text: {
                                            charactersPerSecond: 5,
                                            fullTextDelayMS: 2000,
                                            cursorColor: "red",
                                        },
                                    }}
                                />
                </div>
           </div>

           <div className={Section12.rasm}>
             <div className={Section12.img}>
            <img src="" alt="" />
             </div>

           </div>
        </div>
    )
}

export default Section1