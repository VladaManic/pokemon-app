import { render, screen } from '@testing-library/react'
import Page404 from './index'
import { BrowserRouter as Router } from 'react-router-dom'

it('Displays the correct text', () => {
    render(
        <Router>
            <Page404 />
        </Router>
    )
    const currentElement = screen.getByText(/Go to Home/i)
    expect(currentElement).toBeVisible()
})
