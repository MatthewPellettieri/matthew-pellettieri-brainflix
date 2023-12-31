import "./videoList.scss";
import Card from "../Card/card";

function VideoList(props) {
  return (
    <>
      <section className="video-list">
        <h5 className="header--mobile-and--tablet">NEXT VIDEOS</h5>
        {props.nextVideos.map((video) => (
            <Card
              title={video.title}
              id={video.id}
              key={video.id}
              channel={video.channel}
              image={video.image}
              activeVideo={props.activeVideo}
              changeCurrentVideo={props.changeCurrentVideo}
            />
          ))}
      </section>
    </>
  );
}

export default VideoList;

// .filter(video => video.id !== props.activeVideo)
