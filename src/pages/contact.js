import React from "react"
import Layout from "../components/layout/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <p>You can always reach me via email at hyerhandmade@gmail.com</p>
      <br />
      <p>
        Please check out even more of my work on{" "}
        <a href="https://github.com/elizabethhyer" target="__blank">
          Github
        </a>
      </p>
      <br />
      <p>
        You can also connect with me on{" "}
        <a href="https://www.linkedin.com/in/elizabeth-hyer/" target="__blank">
          LinkedIn
        </a>
      </p>
      <br />
      <p>
        Although I rarely post, I am also available on
        <a
          href="https://www.instagram.com/hyerhandmade/?hl=en"
          target="__blank"
        >
          {` Instagram`}
        </a>
        , where I sometimes post politically charged memes and photos of the
        things I make.
      </p>
      <br />
    </Layout>
  )
}

export default ContactPage
