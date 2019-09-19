import React, {Component} from "react";

class App extends Component {

    /*COMENTARIO 1: LECTURA API DE BECAS Y FINANCIACION PARA ENVIARSELO A BACK*/ 
    /*TAMBIEN CONEXIONES CON BACK*/
    componentDidMount()
    {
        fetch("/financing/getFinancing")
            .then(res=> console.log("wenas",res));
    }
    /*COMENTARIO 2: POR FAVOR NO CAMBIEN LO QUE ESTA ENTRE EL COMENTARIO 1 Y 2*/



    render()
    {
        return(
            <div className="App">
                <h1>FRONT</h1>
            </div>
        )
    }


}
export default App;