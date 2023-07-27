import React from 'react'

function Jumbotron({ children, className }) {
    return (
        <div className="jumbotron">
            <div className="container-fluid bg-secondary p-5">
                <div className="card-body">
                    <h1 className="card-title">A warm welcome</h1>
                    <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto velit omnis debitis odit nobis corrupti dolore dicta ullam assumenda sit officiis, exercitationem, in laudantium, atque voluptates doloremque! Praesentium, veniam dolore.</p>
                    <a href="#" className="btn btn-primary">Call to action!</a>
                </div>
            </div>
        </div>
    )
}


export default Jumbotron