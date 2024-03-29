import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPencilAlt,
  faTimes,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { modalsAtom, modalsFuncAtom } from '@state/atoms'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import ModalButtons from '@layouts/modals/ModalButtons'
import { useRouter } from 'next/router'
import cn from 'classnames'
import Tooltip from '@components/Tooltip'

const Modal = ({
  Children,
  id,
  // onClose = () => {},
  // onDelete = null,
  // twoCols = false,
  // noPropsToChildren = false,
  // editMode = null,
  // setEditMode = null,
  title,
  text,
  subModalText = null,
  // modals = null,
  onClose,
  onConfirm,
  onDecline,
  confirmButtonName,
  declineButtonName,
  showConfirm,
  showDecline,
  closeButtonShow = false,
  TopLeftComponent,
  className,
}) => {
  // const [rendered, setRendered] = useState(false)
  // const [preventCloseFunc, setPreventCloseFunc] = useState(null)
  const modalsFunc = useRecoilValue(modalsFuncAtom)
  const [disableConfirm, setDisableConfirm] = useState(false)
  const [disableDecline, setDisableDecline] = useState(false)
  const [onShowOnCloseConfirmDialog, setOnShowOnCloseConfirmDialog] =
    useState(false)
  const [onConfirmFunc, setOnConfirmFunc] = useState(null)
  const [onDeclineFunc, setOnDeclineFunc] = useState(null)
  const setModals = useSetRecoilState(modalsAtom)
  const [close, setClose] = useState(false)
  const [ComponentInFooter, setComponentInFooter] = useState(null)
  const [onlyCloseButtonShow, setOnlyCloseButtonShow] =
    useState(closeButtonShow)

  const closeModal = () => {
    onClose && typeof onClose === 'function' && onClose()
    setClose(true)
    setTimeout(
      () => setModals((modals) => modals.filter((modal) => modal.id !== id)),
      200
    )
  }

  const router = useRouter()

  const refreshPage = () => {
    router.replace(router.asPath)
  }

  const onConfirmClick = () => {
    if (onConfirmFunc) return onConfirmFunc(refreshPage)
    onConfirm && typeof onConfirm === 'function' && onConfirm(refreshPage)
    closeModal()
  }

  const onDeclineClick = () => {
    const decline = () => {
      if (onDeclineFunc) return onDeclineFunc()
      onDecline && typeof onDecline === 'function' && onDecline()
      closeModal()
    }

    if (onShowOnCloseConfirmDialog) {
      modalsFunc.confirm({
        onConfirm: () => {
          decline()
          setOnShowOnCloseConfirmDialog(false)
        },
      })
    } else {
      decline()
    }
  }

  // const closeFunc = () => {
  //   setRendered(false)
  //   setTimeout(() => {
  //     onClose()
  //   }, 200)
  // }
  // const onCloseWithDelay = () => {
  //   if (formChanged && modals) {
  //     modals.openConfirmModal(
  //       'Отмена изменений',
  //       'Вы уверены что хотите закрыть окно без сохранения изменений?',
  //       closeFunc
  //     )
  //   } else closeFunc()
  // }

  // useEffect(() => {
  //   setTimeout(() => {
  //     setRendered(true)
  //   }, 10)
  // }, [])

  return (
    <motion.div
      className={
        cn(
          'absolute transform duration-200 top-0 left-0 z-50 flex bg-opacity-80 tablet:items-center justify-center w-full h-screen tablet:overflow-y-auto bg-gray-800',
          subModalText ? 'tablet:pt-10 tablet:pb-5' : 'tablet:py-5'
        )
        //  + (rendered ? ' opacity-100' : ' opacity-0')
      }
      initial={{ opacity: 0 }}
      animate={{ opacity: close ? 0 : 1 }}
      transition={{ duration: 0.1 }}
      onMouseDown={onDeclineClick}
    >
      <motion.div
        className={
          cn(
            'flex flex-col real-screen-height tablet:h-auto relative pb-1 tablet:pb-2 w-full tablet:w-[95%] laptop:w-9/12 duration-300 tablet:my-auto bg-white border-l tablet:rounded-lg border-primary',
            title ? 'pt-3' : 'pt-12',
            className
          )
          // + (rendered ? '' : ' scale-50')
        }
        initial={{ scale: 0.5 }}
        animate={{ scale: close ? 0.5 : 1 }}
        transition={{ duration: 0.1 }}
        onClick={(e) => e?.stopPropagation()}
        onMouseDown={(e) => e?.stopPropagation()}
      >
        {subModalText && (
          <div className="absolute left-0 flex justify-center w-full -top-9">
            <div className="px-2 py-0.5 bg-white rounded-md">
              {subModalText}
            </div>
          </div>
        )}
        {TopLeftComponent && (
          <div className="absolute left-2 top-2">
            <TopLeftComponent />
          </div>
        )}
        <Tooltip title="Закрыть">
          <div className="absolute right-2 top-2">
            <FontAwesomeIcon
              className="w-8 h-8 text-black duration-200 transform cursor-pointer hover:scale-110"
              icon={faTimes}
              // size="1x"
              onClick={onDeclineClick}
            />
          </div>
        </Tooltip>
        {title && (
          <div className="mx-10 mb-3 text-lg font-bold leading-6 text-center whitespace-pre-line">
            {title}
          </div>
        )}
        {text && <div className="px-2 tablet:px-3">{text}</div>}
        {/* {editMode && onDelete && (
          <FontAwesomeIcon
            className="absolute w-5 h-5 text-red-700 duration-200 transform cursor-pointer top-4 left-4 hover:scale-110"
            icon={faTrash}
            size="1x"
            onClick={() => {
              onDelete(closeModal)
            }}
          />
        )} */}
        {/* {!editMode && editMode !== null && (
          <FontAwesomeIcon
            className="absolute w-5 h-5 duration-200 transform cursor-pointer text-primary top-4 left-4 hover:scale-110"
            icon={faPencilAlt}
            size="1x"
            onClick={
              setEditMode
                ? () => {
                    setEditMode(true)
                  }
                : null
            }
          />
        )} */}
        {/* {noPropsToChildren
          ? children
          : cloneElement(children, { onClose: closeModal, setBeforeCloseFunc })} */}
        <div className="flex-1 px-2 overflow-y-auto tablet:px-3">
          {Children && (
            <Children
              closeModal={closeModal}
              setOnConfirmFunc={(func) =>
                setOnConfirmFunc(func ? () => func : null)
              }
              setOnDeclineFunc={(func) =>
                setOnDeclineFunc(func ? () => func : null)
              }
              setOnShowOnCloseConfirmDialog={setOnShowOnCloseConfirmDialog}
              setDisableConfirm={setDisableConfirm}
              setDisableDecline={setDisableDecline}
              setComponentInFooter={setComponentInFooter}
              setOnlyCloseButtonShow={setOnlyCloseButtonShow}
            />
          )}
        </div>

        {(onConfirm ||
          onConfirmFunc ||
          showConfirm ||
          showDecline ||
          ComponentInFooter ||
          closeButtonShow ||
          onlyCloseButtonShow) && (
          <ModalButtons
            closeButtonShow={onlyCloseButtonShow}
            confirmName={confirmButtonName}
            declineName={declineButtonName}
            onConfirmClick={onConfirmClick}
            onDeclineClick={onDeclineClick}
            showConfirm={!onlyCloseButtonShow && showConfirm}
            showDecline={!onlyCloseButtonShow && showDecline}
            disableConfirm={disableConfirm}
            disableDecline={disableDecline}
            closeModal={closeModal}
          >
            {ComponentInFooter}
          </ModalButtons>
        )}
      </motion.div>
    </motion.div>
  )
}

export default Modal
