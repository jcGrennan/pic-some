import {useContext} from "react"

import {Context} from "../Context"
import Image from "../components/Image"


function Photos() {

    const {photos} = useContext(Context)
   
    const photoGrid = photos.map((photo, i) => (
        <Image key={photo.id} img={photo} className={i} />
    ))

    return (
        <main className="photos">
            {photoGrid}
        </main>
    )
}

export default Photos