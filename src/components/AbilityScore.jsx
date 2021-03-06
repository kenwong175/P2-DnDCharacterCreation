import React from 'react'
import Score from './Score';
import { resetScore, selScore } from '../util/functions';
import { Button, Container, Row } from 'react-bootstrap';

function AbilityScore({score, setScore}) {
    return (
        <Container>
            <Row>
                <Score setScore={setScore} selScore={selScore} score={score} id="STR" name="Strength" arr={score.arr} />
                <Score setScore={setScore} selScore={selScore} score={score} id="DEX" name="Dexterity" arr={score.arr} />
                <Score setScore={setScore} selScore={selScore} score={score} id="CON" name="Constitution" arr={score.arr} />
                <Score setScore={setScore} selScore={selScore} score={score} id="INT" name="Intelligence" arr={score.arr} />
                <Score setScore={setScore} selScore={selScore} score={score} id="WIS" name="Wisdom" arr={score.arr} />
                <Score setScore={setScore} selScore={selScore} score={score} id="CHA" name="Charisma" arr={score.arr} />
                <Button className="btn btn-block" onClick={() => resetScore(setScore)} variant="primary">Reset</Button>{' '}
            </Row>
        </Container>
    )
}

export default AbilityScore
