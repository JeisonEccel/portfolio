export type VideoExperience = {
  src: string
  title: string
}

export function VideoFrame({ video }: { video: VideoExperience }) {
  const { src, title } = video

  return (
    <div className="py-10 md:p-10">
      <div className="aspect-video w-full max-w-3xl mx-auto">
        <iframe
          width="100%"
          height="100%"
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  )
}

export function Videos({ videos }: { videos?: VideoExperience[] }) {
  if (!videos) return <></>

  return (
    <div className="border-t-1 border-light py-4">
      <p className="font-bold">Videos:</p>
      {videos.map((video, index) => (
        <VideoFrame key={index} video={video} />
      ))}
    </div>
  )
}
