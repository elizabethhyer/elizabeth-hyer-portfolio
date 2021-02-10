import React from "react"
import Layout from "../components/layout/layout"
import { Link } from "gatsby"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>Elizabeth is a full stack developer living in Atlanta, Georgia.</p>
      <p>
        While Elizabeth COULD make her own website, she decided not to in this
        case and left that task up to her team of code elves.
      </p>
      <p>
        We are frustrated with Elizabeth because she NEVER leaves us with a good
        bio! And we are not good at writing them either, so instead, we're going
        to just leave a list of facts about Elizabeth. Read on if you're
        interested.
      </p>
      <br />
      <h4>Likes</h4>
      <ul>
        <li>Sewing</li>
        <li>Painting</li>
        <li>Knitting</li>
        <li>Shoemaking</li>
        <li>Rowing</li>
        <li>Furry critters</li>
        <li>Eating good food</li>
        <li>Specifically brownies</li>
      </ul>
      <h4>Dislikes</h4>
      <ul>
        <li>Cooking</li>
        <li>Running</li>
        <li>Untoasted bread</li>
        <li>Bugs!</li>
      </ul>
      <br />
      Did any of this make you want to contact Elizabeth? Find a way to reach
      her <Link to="/contact">here!</Link>
    </Layout>
  )
}

export default AboutPage
