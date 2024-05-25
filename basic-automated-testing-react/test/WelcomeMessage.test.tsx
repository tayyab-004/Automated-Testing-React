import React from 'react'
import { it, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import WelcomeMessage from '../src/components/WelcomeMessage'
import '@testing-library/jest-dom/vitest'

describe('WelcomeMessage', () => {
    it('should render the welcome message if name is provided.', () => {
        render(<WelcomeMessage name="tayyab" />);

        const element = screen.getByText(/tayyab/)
        expect(element).toBeInTheDocument();
    })

    it('should render the login button if name is not provided.', () => {
        
    })
})