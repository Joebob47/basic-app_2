import { render, screen } from '@testing-library/react'
import Layout from '../components/Layout'
import '@testing-library/jest-dom'

describe('Layout', () => {
    it('heading renders in Layout Comp', () => {
      render(<Layout/>)
  
      const heading = screen.getByRole('heading', {
        name: /Employee Records/i,
      })
  
      expect(heading).toBeInTheDocument()
    })
  })