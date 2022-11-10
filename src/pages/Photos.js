// importing the Context Hook so I can access context
import {useContext} from "react"

// importing the context itself, and the Image component
import {Context} from "../Context"
import Image from "../components/Image"


// composing the Photos page
function Photos() {

    // pulling the photos state from context with the useContext Hook
    const {photos} = useContext(Context)
   
    // mapping each photo into separate instances of the Image component
    const photoGrid = photos.map((photo, i) => (
        <Image key={photo.id} img={photo} className={i} />
    ))

    // composing the jsx 
    return (
        <main className="photos">
            {photoGrid}
        </main>
    )
}

// exporting the Photos page to be routed in the App
export default Photos