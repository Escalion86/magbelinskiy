import BlockContainer from '@components/BlockContainer'
import PulseButton from '@components/PulseButton'
import { H2, H3, H4, P } from '@components/tags'
import { modalsFuncAtom } from '@state/atoms'
import { useRecoilValue } from 'recoil'

const ProductionBlock = () => {
  const modalsFunc = useRecoilValue(modalsFuncAtom)

  return (
    <BlockContainer id="program">
      <div className="flex flex-col items-center justify-center">
        <div className="text-xl laptop:text-2xl">
          Сайт находится в разработке, поэтому на нем не так много содержимого,
          однако вы легко можете оставить заявку, и Алексей свяжется с Вами в
          ближайшее время
        </div>
        <PulseButton
          className="mt-4"
          title="Оставить заявку"
          onClick={() => modalsFunc.request.add()}
        />
      </div>
    </BlockContainer>
  )
}

export default ProductionBlock
