import Navigation from "./navigation"
import Footer from "./footer"
import Example from "./card"
import Jumbo from "./jumbotron"
import { Jumbotron } from "reactstrap"


const Layout = (props) => (
    <div>
        <Navigation />
        <Jumbo />

        {props.children}
        
        <br></br> <br></br>
        <h3><center>Cegah Covid-19 dengan melakukan: </center></h3>
        <Example />

        <Footer />

        <style jsx global  >{`
            h3, h4{
                font-family: sans-serif;
            }
            h4{
                text-align: center;
            }

            #conf {
                color: crimson;
            }

            #sembuh{
                color: green;

            }

            #active{
                color: yellow;
            }

            #meninggal{
               color: firebrick; 
            }

            #sumber{
                font-size: 11px;
              
            }

        `}
        </style>

    </div>
)



export default Layout