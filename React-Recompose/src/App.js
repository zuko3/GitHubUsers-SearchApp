import React, { Component } from 'react';
import './App.css';
import Header from "./Header"
import Card from "./Card";
import { branch, renderComponent } from 'recompose';

class App extends Component {
  render() {
    const {foods} = this.props;
    return (
      <div>
        <Header />
        <div>
          {foods.map((food, i) =>
            <Card
              name={food.name}
              picture={food.picture}
              description={food.description}
              key={i} />)}
        </div>
      </div>
    );
  }
}

const Spinner = () => <h3>Loading ......</h3>;

const enhance = branch(
  (props) => props.foods.length === 0,
  renderComponent(Spinner)
)

export default enhance(App);
