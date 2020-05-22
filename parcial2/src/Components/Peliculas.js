import React, { Component } from 'react'
import { FormattedMessage } from "react-intl";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap/'



export default class Peliculas extends Component {

    state = {
        peliculas: []
    }

    componentDidMount() {

        if ((navigator.language || navigator.userLanguage).includes("es")) {
            fetch("https://gist.githubusercontent.com/josejbocanegra/f784b189117d214578ac2358eb0a01d7/raw/2b22960c3f203bdf4fac44cc7e3849689218b8c0/data-es.json")
                .then(res => {
                    return res.json();
                }).then(res => {
                    console.log(res);
                    this.setState({ peliculas: res })
                    localStorage.setItem('peliculas', res);
                });
        } else if ((navigator.language || navigator.userLanguage).includes("en")) {
            fetch("https://gist.githubusercontent.com/josejbocanegra/8b436480129d2cb8d81196050d485c56/raw/48cc65480675bf8b144d89ecb8bcd663b05e1db0/data-en.json")
                .then(res => {
                    return res.json();
                }).then(res => {
                    console.log(res);
                    this.setState({ peliculas: res })
                    localStorage.setItem('peliculas', res);
                });
        }


        if (!navigator.onLine) {
            if (localStorage.getItem('peliculas') === null)
                this.setState({ peliculas: "loading..." })
            else
                this.setState({ peliculas: localStorage.getItem('peliculas') })
        }


    }

    renderPeliculas = (p, i) => {
        return (
            <tr key={i}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.directedBy}</td>
                <td>{p.country}</td>
                <td>{p.budget}</td>
            </tr>
        )
    }

    render() {
        return (
            <div>
                <h1>Peliculas</h1>
                <Table striped hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th><FormattedMessage id="Name" /></th>
                            <th><FormattedMessage id="Directed By" /></th>
                            <th><FormattedMessage id="Country" /></th>
                            <th><FormattedMessage id="Budget" /></th>
                            <th><FormattedMessage id="Release" /></th>
                            <th><FormattedMessage id="Views" /></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.peliculas.map((p, i) => this.renderPeliculas(p, i))}
                    </tbody>
                </Table>
            </div>
        )
    }
}
