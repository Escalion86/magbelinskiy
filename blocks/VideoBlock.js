import BlockContainer from '@components/BlockContainer'

const VideoBlock = () => (
  <BlockContainer
    small
    // id="about"
    // title="Об иллюзионисте Алексее Белинском"
  >
    <div className="aspect-h-9 aspect-w-16">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/CuoufduSlXQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      />
    </div>
  </BlockContainer>
)

export default VideoBlock
