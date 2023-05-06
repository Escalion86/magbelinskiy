import BlockContainer from '@components/BlockContainer'

const VideoBlock = () => (
  <BlockContainer
    small
    // id="about"
    // title="Об иллюзионисте Алексее Белинском"
  >
    <div className="flex items-center justify-center">
      <iframe
        className="w-full aspect-[16/9] max-h-[calc(100vh-200px)] max-w-[calc(126vh)]"
        // width="100%"
        // height="100%"
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
