import { render, screen } from '@testing-library/react'
import Layout from '../components/Layout'
import '@testing-library/jest-dom'

describe('Link', () => {
    it('link routes to correct page', () => {
      render(<Layout/>)
  
      const link = screen.getByRole('link', {
        name: /Back to home/i,
      })
  
      expect(link).toHaveAttribute('href', '/');
    })
  })