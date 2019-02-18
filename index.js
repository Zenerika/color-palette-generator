// Write your app here! (HINT: First thing should be a call to ReactDOM.render()... )

class MyComponent extends React.Component {
    constructor(props) {
        console.log('This is the constructor', props)
        super(props)
        this.state = {
            colors: [
                {hex: "#54c06c", isLocked: false},
                {hex: "#e4d623", isLocked: false},
                {hex: "#b5453f", isLocked: false},
                {hex: "#e8630c", isLocked: false},
                {hex: "#5d1170", isLocked: false}
            ]
        }
    }
    componentDidMount() {
        console.log('My component has landed!')
    }
    componentDidUpdate() {
        console.log('This component has changed in props or state')
    }
    componentWillUnmount() {
        console.log('Component is being removed from the DOM')
    }
    handleClick = () => {
        console.log('Hi Im being clicked.')
        this.setState({
            value: this.state.value + 1,
        })
    }  
    render () {
        console.log('This is the render being called', this.props)
        let style0 = {
            height: '100vh',
        };
        let style1 = {
            backgroundColor: 'blue',
        };
        let style2 = {
            backgroundColor: 'orange'
        };
        let style3 = {
            backgroundColor: 'lightgreen'
        };
        let style4 = {
            backgroundColor: 'aqua'
        };
        let style5 = {
            backgroundColor: 'maroon'
        };
        return (
            <div>
                <button onClick={this.handleClick}>Randomize Colors</button>
                <div className="w-100 d-flex" style={style0}>
                    <div style={style1} className="w-100 d-flex flex-column align-items-center justify-content-center">
                        <h1>#FF00FF</h1>
                        <button className="btn btn-dark">UNLOCK</button>
                    </div>
                    <div style={style2} className="w-100 d-flex flex-column align-items-center justify-content-center">
                        <h1>#FF00FF</h1>  
                        <button className="btn btn-outline-dark">LOCK</button>
                    </div>
                    <div style={style3} className="w-100 d-flex flex-column align-items-center justify-content-center">
                        <h1>#FF00FF</h1>  
                        <button className="btn btn-outline-dark">LOCK</button>
                    </div>
                    <div style={style4} className="w-100 d-flex flex-column align-items-center justify-content-center">
                        <h1>#FF00FF</h1>  
                        <button className="btn btn-outline-dark">LOCK</button>
                    </div>
                    <div style={style5} className="w-100 d-flex flex-column align-items-center justify-content-center">
                        <h1>#FF00FF</h1>  
                        <button className="btn btn-outline-dark">LOCK</button>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<MyComponent name ="Bob" />, document.getElementById('root'))