import { Row, Col, Button } from "react-bootstrap"
import { Facebook, Twitter, Instagram, Youtube } from "react-bootstrap-icons"

const MyFooter = () => {
    return (
        <Row className="justify-content-center pt-5 bg-black mx-0">
            <Col xs={6}>
                <Row>
                    <Col className="mb-2">
                        <Facebook color='#838383' className='me-2' />
                        <Instagram color='#838383' className='me-2' />
                        <Twitter color='#838383' className='me-2' />
                        <Youtube color='#838383' />
                    </Col>
                </Row>
                <Row xs={1} sm={2} md={4}>
                    <Col>
                        <Row>
                            <Col className="text-secondary">
                                <p>
                                    Audio and Subtitles
                                </p>
                                <p>
                                    Media Center
                                </p>
                                <p>
                                    Privacy
                                </p>
                                <p>
                                    Contact us
                                </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col className="text-secondary">
                                <p>
                                    Audio Description
                                </p>
                                <p>
                                    Investor Relations
                                </p>
                                <p>
                                    Legal Notices
                                </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col className="text-secondary">
                                <p>
                                    Help Center
                                </p>
                                <p>
                                    Jobs
                                </p>
                                <p>
                                    Cookie Preferences
                                </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col className="text-secondary">
                                <p>
                                    Gift Cards
                                </p>
                                <p>
                                    Terms of Use
                                </p>
                                <p>
                                    Corporate Information
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col className="mb-2">
                        <Button
                            variant="black"
                            className="mt-3 text-secondary "
                        >
                            Service Code
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col className="mb-2 mt-2 text-secondary">
                        © 1997-2023 Netflix, Inc.
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default MyFooter