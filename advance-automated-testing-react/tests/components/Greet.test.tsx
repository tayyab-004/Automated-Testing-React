import { render, screen } from '@testing-library/react'
import Greet from "../../src/components/Greet"

describe('Greet', () => {
    it(' should render Hello with the name when name is provided. ', () => {
        render(<Greet name="Tayyab" />)

        const heading = screen.getByRole('heading')
        //assertion
        expect(heading).toBeInTheDocument()
        expect(heading).toHaveTextContent(/hello tayyab/i)     //i mean insensitive 
    })

    it(' should render login button when name is not provided. ', () => {
        render(<Greet />)

        const button = screen.getByRole('button')
        //assertion
        expect(button).toBeInTheDocument()
        expect(button).toHaveTextContent(/login/i)     //i mean insensitive 
    })
})