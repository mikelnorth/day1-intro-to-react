function Footer({ company }) {
  return (
    <footer>
      <p>
        © {new Date().getFullYear()} {company}. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
