import React, { useState} from 'react'
import { Form, Button, Row,Col } from 'react-bootstrap'
import {Link} from "react-router-dom"

const Signin = ({props,handleShow,isSignUp,setIsSignUp}) => {
    console.log(isSignUp)

    return (
        <div>
            <Form className='my-5 px-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Subodh</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    {/* <Form.Check type="checkbox" label="Check me out" /> */}
                    <Link to=''  onClick={()=>setIsSignUp (!isSignUp) } >New user Click Here</Link>
                </Form.Group>
                <Button variant="primary" type="submit">
                           Submit
                 </Button>    
            </Form>
        </div>
    )
}

export default Signin
