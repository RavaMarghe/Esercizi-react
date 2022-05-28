import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
    render() {
        return(
            <div>
                <p>Welcome, <strong>{this.props.name}</strong>!</p>
                 {this.props.age > 18 && this.props.age < 65 && <Age age={this.props.age}/>}
            </div>
            // perchè questo no?
            //{(65 > this.props.age > 18) && <Age age={this.props.age}/>}
            // perchè non posso scrivere commenti dentro al div?
        )
    }
}

// if no name prop is passed to the Welcome component, it will be rendered whitout the name (Welcome, !)
Welcome.defaultProps = {
    name: 'Margherita',
    age: 23
}