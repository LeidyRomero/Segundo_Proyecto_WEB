import React, {Component} from "react";
import Financing from "./Components/Financing"

class App extends Component {
    constructor(props)
    {
        super(props);
        this.state = {financing:[]};
    }
    /*COMENTARIO 1: LECTURA API DE BECAS Y FINANCIACION PARA ENVIARSELO A BACK*/ 
    /*TAMBIEN CONEXIONES CON BACK*/
    componentDidMount()
    {
        fetch("/financing/:id")
            .then(res=> res.json())
            .then(data=>{ 
                console.log("datos", data);
                this.setState({financing:data})
            });
    }

    renderComments()
    {
        console.log(this);
        return this.state.financing.map((c,i)=><Financing key = {i++} financing={c}></Financing>);
        /* El codigo anterior es lo mismo que el siguiente codigo
        let res = [];
        let i = 0;
        for(let c of this.state.comments)
        {
            res.push(<div key = {i++}>{c.text}</div>);
        }
        console.log(res);
        return res;
        */
    }

    /*COMENTARIO 2: POR FAVOR NO CAMBIEN LO QUE ESTA ENTRE EL COMENTARIO 1 Y 2*/



    render()
    {
        return(
            <div className="App">
                <h1>FRONT</h1>
                {this.renderComments()}
            </div>
        )
    }


}
export default App;