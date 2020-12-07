import React, { Component } from 'react';

class CalculatorPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: ['sem saída', 
                    'olhar dos inocentes', 
                    'ao fechar a porta', 
                    'ave de mau agoiro', 
                    'os diários secretos', 
                    'a rapariga fatal',
                    'um do li ta',
                    'a menina silenciosa',
                    'a rapariga no gelo',
                    'teia de cinzas',
                    'alguem esta a mentir',
                    'sem saida hunter',
                    'o morcego',
                    'baratas',
                    'mal me quer',
                    ],
            bookName: ''
        };
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
      }

    getRandomBook() {
        let randomIndex = this.getRandomInt(0, this.state.books.length);
        let bookName = this.state.books[randomIndex];

        this.setState({
            ...this.state,
            bookName
        })
    }

    render() {
        // let allBooks = this.state.books.map((bookName) => (
        //     <h3>{bookName}</h3>
        // ));
        return (
            <div>
                {/* {allBooks} */}
                <button onClick={this.getRandomBook.bind(this)}>Descobrir novo livro</button>
                <h1>{this.state.bookName}</h1>
            </div>
        );
    }
}

export default CalculatorPanel;