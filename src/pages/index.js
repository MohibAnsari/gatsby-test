import * as React from "react"
import '../assets/css/main.css'
import Layout from "../components/layout/index";
import Hero from "../components/sections/hero";
import NumbersSec from "../components/sections/numbersSec";

// markup
const IndexPage = () => {
  return (
    <React.Fragment>
      <Layout>
        <div>
          <Hero/>
          <NumbersSec/>
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default IndexPage