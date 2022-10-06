import {useContext} from "react"

import {Context} from "../Context"
import Image from "../components/Image"


function Photos() {

    const photosArray = useContext(Context).photos
   
    const photoGrid = photosArray.map(photo => (
        <Image key={photo.id} img={photo} className={photo.id - 1} />
    ))

    return (
        <main className="photos">
            {photoGrid}
        </main>
    )
}

export default Photos