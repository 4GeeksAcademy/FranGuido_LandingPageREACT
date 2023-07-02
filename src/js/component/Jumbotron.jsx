import React from 'react'

const jumbotronStyle = () =>{
    background: "#d3d3d3"
}


const Jumbotron = () => {
    return (

        <div style={jumbotronStyle} class="mt-4 p-5 rounded">
            <h1>A Warm Welcome!</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque debitis facere, quia et minima repellat rem obcaecati inventore modi, molestiae cumque ipsum eum. Vero praesentium harum sequi mollitia eos culpa autem velit placeat officiis, libero incidunt sint necessitatibus. Voluptas mollitia cupiditate id impedit, ratione doloremque molestias distinctio ducimus nostrum delectus.</p>
            <a class="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
        </div>

    )
}

export default Jumbotron