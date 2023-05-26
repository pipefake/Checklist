import React, { Component } from 'react';
import './DoneCounter.css';

function DoneCounter({ completed }) {
    return (
        <>
            <div className='divTituloDone'>
                <h1>Hecho</h1>
                <p className='text_bold'>{completed}</p>

            </div>
        </>
    );
}
export { DoneCounter };
