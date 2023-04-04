import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const Board = (board) => {

    return (
        <Container>
            {board.map((row, index) => {
                return <Row key={index}>
                    {
                        row.map((cell, ind) => {
                            return (
                                <Col key={ind} onClick={() => console.log(`you clicked ${cell}`)}>
                                </Col>
                            )
                        }
                        )
                    }
                </Row>
            }
            )}
        </Container>
    )
}

export default Board;