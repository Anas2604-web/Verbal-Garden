export default function AudioPlayer({audioSrc}) {
    return(
        <div>
            <h2 className="text-xl font-semibold">
                Listen
            </h2>
            <audio src={audioSrc} controls className="w-full"></audio>
        </div>
    );
}