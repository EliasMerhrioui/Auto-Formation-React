function Welcome({name, children}){
    const title = "Création d'une classe d'incrementation :"
    return <div>
        <h1>Bonjour {name}</h1>
        <p>
            {children}
        </p>
        <h2>{title}</h2>
    </div> 
}

//Création d'une classe 
class Incrementer extends React.Component{
    //initialisation du constructeur
    constructor(props){
        super(props)
        this.state = {n: props.start}
        this.timer = null
    }

    //Composant montée 
    componentDidMount(){
         window.setInterval(this.tick.bind(this),1000)
    }

    //Composant démontée 
    componentDidUnmount(){
        window.clearInterval(this.timer)
    }

    tick(){
        this.setState(function(state, props) {
            return {n: state.n + props.step}
        })
        //ou sinon avec une fonction flechée : 
        //this.setState((state, props) => ({n: state.n + 1}))
    }
        
    render(){
        return <div>
            La valeur : {this.state.n}             
        </div>
    }
}

Incrementer.defaultProps = {
    start : 0,
    step : 1
}

function Home(){
    return <div>
        <Welcome name="Elias">Ce document permet de montrer ce que j'ai pu apprendre sur le language de programmation React.js</Welcome>
        <p>Comme vous pouvez le voir la valeur varie de 1 en 1 : </p>
        <Incrementer start={10}/>      
        <p>Sinon voilà la nouvelle valeur quand nous voulons changé de chiffres. Avec le même code on peut changé les valeurs juste en ajoutant une nouvelle propriété : </p>
        <Incrementer start={10} step={5}/>
        
    </div> 
}

ReactDOM.render(<Home/>, document.querySelector('#app') )