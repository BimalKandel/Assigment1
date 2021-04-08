import React from 'react';
import './App.css';
import scpdetail from './data.json';

var datascp = scpdetail.map(
    (scpdetail) => {
        var image = null
        if(scpdetail.image){
            image = <div><img className="image" src={process.env.PUBLIC_URL+ '/img/' + scpdetail.image} alt={scpdetail.item}></img></div>;
        }
        var description = null
        if(scpdetail.description){
            description = <div><h3>Description:</h3><div className="text-justify">{scpdetail.description.map((item, i) => {
                return <p><div dangerouslySetInnerHTML={{__html:item}} /></p>
            })}</div></div>

        }
        var reference = null
        if(scpdetail.reference){
            reference = <div><h3>Reference:</h3><div className="text-justify">{scpdetail.reference.map((item, i) => {
                return <p><div dangerouslySetInnerHTML={{__html:item}} /></p>
            })}</div></div>

        }
        var additional_notes = null
        if(scpdetail.additional_notes){
            additional_notes = <div><h3>Additional notes:</h3><div className="text-justify">{scpdetail.additional_notes.map((item, i) => {
                return <p><div dangerouslySetInnerHTML={{__html:item}} /></p>
            })}</div></div>

        }
        var appendix_a = null
        if(scpdetail.appendix_a){
            appendix_a = <div><h3>Appendix a:</h3><div className="text-justify">{scpdetail.appendix_a.map((item, i) => {
                return <p><div dangerouslySetInnerHTML={{__html:item}} /></p>
            })}</div></div>

        }

        return(
            <div id={scpdetail.item}>
                <h1 class="text-center">{scpdetail.title}</h1>
                <h2>Item #: {scpdetail.item}</h2>
                <h2><b>Object Class: </b>{scpdetail.class}</h2>
                { image }
                
                <h3>Special Containment Procedures:</h3>
                <div className="text-justify">
                {scpdetail.procedures.map((item, i) => {
                return <p><div dangerouslySetInnerHTML={{__html:item}} /></p>
                })}
                </div>
                
                {description}
                {reference}
                {additional_notes}
                {appendix_a}
            </div>
        )
    }
        
);

function Maincontent(){
    return(
        
        <div class="container">
            <div class="row">
                <div className="col-sm-12">
                {datascp}
                </div>
                
            </div>
        </div>
    )
}

export default Maincontent;