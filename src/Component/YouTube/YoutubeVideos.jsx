import React, { useEffect, useState } from "react";
import "./YoutubeVideos.css";

function YoutubeVideos() {
  const [youTubeVideos, setVideo] = useState([]);
  useEffect(() => {
    fetch(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDMlx7Xd1FbvhZv-6PI1Eu6cobtXjmeDaA&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=8"
    )
      .then((res) => res.json())
      .then((data) => {
        setVideo(data.items);
      });
  }, []);
  //   console.log(youTubeVideos);

  return (
    <>
      <div className="allVideosWrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold video-title-wrapper">
                Latest Videos
              </div>
            </div>
            {youTubeVideos?.map((singleVideo) => {
              const vidId = singleVideo.id.videoId; 
              let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
              let videoWrapper = (
                <div key={vidId} className="col-sm-12 col-md-4">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a href={vidLink} target="_blank">
                        <img src={singleVideo.snippet.thumbnails.high.url} />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a href={vidLink} target="_blank">
                          {singleVideo.snippet.title}
                        </a>
                      </div>
                      <div className="videoDesc">
                        {singleVideo.snippet.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
              return videoWrapper;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default YoutubeVideos;
