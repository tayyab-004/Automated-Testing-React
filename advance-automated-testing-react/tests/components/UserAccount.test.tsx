import { render, screen } from '@testing-library/react'
import { User } from '../../src/entities'
import UserAccount from '../../src/components/UserAccount'

describe('UserAccount', () => {
    it('should render username', () => {
        const user: User = {id: 1, name: 'Tayyab Gee'}

        render(<UserAccount user={user} />)
        // assertion
        expect(screen.getByText(user.name)).toBeInTheDocument()
    })

    it('should render edit button if user is admin', () => {
        const user: User = {id: 1, name: 'Tayyab Gee', isAdmin: true}

        render(<UserAccount user={user} />)
        // assertion
        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument()
        expect(button).toHaveTextContent(/edit/i)
    })

    it('should not render edit button if user is not admin', () => {
        const user: User = {id: 1, name: 'Tayyab Gee'}

        render(<UserAccount user={user} />)
        // assertion
        const button = screen.queryByRole('button')

        expect(button).not.toBeInTheDocument()
    })
})