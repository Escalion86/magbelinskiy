import cn from 'classnames'
import { motion } from 'framer-motion'

export const LoadingSpinner = ({ className, size = 'md', text = null }) => {
  const widthHeight =
    size === 'xxs'
      ? 24
      : size === 'xs'
      ? 30
      : size === 'sm'
      ? 40
      : size === 'md'
      ? 50
      : size === 'lg'
      ? 100
      : 60
  return (
    <div
      className={cn(
        'relative flex flex-col items-center justify-center h-full max-h-full',
        className
      )}
    >
      <div
        style={{ maxHeight: widthHeight * 1.25, maxWidth: widthHeight * 1.25 }}
        className="absolute top-auto bottom-auto left-auto right-auto h-[95%] border-l-2 rounded-full aspect-1 border-general animate-spin"
      ></div>
      <div className="flex items-center justify-center h-[100%]">
        <img
          className="object-contain max-h-[90%] aspect-1 h-[80%] w-[80%]"
          style={{ maxHeight: widthHeight, maxWidth: widthHeight }}
          src="/logo.svg"
          alt="logo"
          // width={widthHeight}
          // height={widthHeight}
        />
      </div>
      {text && <div className="text-lg font-bold animate-pulse">{text}</div>}
    </div>
  )
}

export default LoadingSpinner
