import Image from 'next/image'

const TitleBlock = () => {
  return (
    <div className="w-full relative h-[1024px] pl-[126px] bg-[#1E1E1E]">
      {/* <Image
        src="/Circle_big.svg"
        // layout="fill"
        width="713"
        height="713"
        className="absolute -top-[356px] right-[400px]"
      /> */}
      <svg
        className="absolute top-0 right-0"
        width="427"
        height="358"
        viewBox="0 0 427 358"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M357.448 356.896C554.309 356.896 713.896 197.309 713.896 0.447968C713.896 -196.413 554.309 -356 357.448 -356C160.587 -356 1 -196.413 1 0.447968C1 197.309 160.587 356.896 357.448 356.896Z"
          stroke="#F8F0E4"
          strokeMiterlimit="10"
        />
      </svg>
    </div>
  )
}

export default TitleBlock
