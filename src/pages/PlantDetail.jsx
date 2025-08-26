import { useParams } from "react-router-dom";
import ThreeDViewer from "../components/ThreeDViewer";
import plants from "../data/plants.json";
import Reactplayer from "react-player";
import AudioPlayer from "../Components/AudioPlayer";

const PlantDetails = () => {

    //Extracting the plant id from the URL parameters
    const {id} = useParams();
    //finding the plant data based on the id from the URL 
    const plant = plants.find(plantinfo =>  plantinfo.id === parseInt(id));


    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-2">{plant.name}</h1>
            <p className="italic">{plant.scientificName}</p>
            <p className="mt-4">{plant.description}</p>
            <p><strong>Uses:</strong>{plant.uses}</p>
            <p><strong>Region:</strong>{plant.region}</p>

            <div className="my-6">
                <ThreeDViewer modelPath={plant.model}/>
            </div>

            <div className="my-4">
                <h2 className="text-xl font-semibold">Watch video</h2>
                <Reactplayer url={plant.video} controls width="100%" />
            </div>


            <AudioPlayer audioScr={plant.audio} />

        </div>
    )
}

export default PlantDetails;
// This component uses the useParams hook from react-router-dom to extract the plant ID from the URL. It then finds the corresponding plant data from a JSON file and displays its details, including a 3D model viewer, a video player, and an audio player for additional information about the plant.