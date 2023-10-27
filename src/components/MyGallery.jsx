import { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';

class MyGallery extends Component {
    state = {
        movies: [],
        isLoading: false,
        isError: false,
    }
    getMovies = () => {
        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=9f993ebe&s=${this.props.saga}`)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('Errore nel recupero dei film')
                }
            })
            .then((data) => {
                this.setState({
                    movies: data.Search.slice(0, 6),
                    isLoading: false,
                })
            })
            .catch((err) => {
                console.log('errore', err)
                this.setState({
                    isLoading: false,
                    isError: true,
                })
            })
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        })
        this.getMovies()
    }

    render() {
        return (
            <div className="bg-dark">
                <h2 className="text-white ms-3 mb-3">{this.props.saga}</h2>
                {this.state.isLoading && <div className="text-center">
                    <Spinner animation="border" variant="primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>}
                <Container className="pb-4">
                    <Row xs={1} sm={2} lg={4} xl={6}>
                        {this.state.isError && <Alert variant='danger'>
                            ERRORE NEL CARICAMENTO DEI FILM
                        </Alert>}
                        {this.state.movies.map((movie) => {
                            return (
                                <Col className="mb-2 text-center px-1" key={movie.imdbID}>
                                    <img src={movie.Poster} alt="movie poster" width="140px" />
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default MyGallery