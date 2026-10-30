function Footer({ company }) {
  return (
    <footer>
      <p>
        © {new Date().getFullYear()} {company}
      </p>
    </footer>
  )
}

export default Footer
