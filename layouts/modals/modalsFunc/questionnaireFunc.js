import React, { useEffect, useState } from 'react'
import useErrors from '@helpers/useErrors'

import { useRecoilState, useRecoilValue } from 'recoil'
import userSelector from '@state/selectors/userSelector'
import itemsFuncAtom from '@state/atoms/itemsFuncAtom'

import Input from '@components/Input'
import FormWrapper from '@components/FormWrapper'
// import InputImage from '@components/InputImage'
import DatePicker from '@components/DatePicker'
import PhoneInput from '@components/PhoneInput'
// import OrientationPicker from '@components/ValuePicker/OrientationPicker'
import GenderPicker from '@components/ValuePicker/GenderPicker'
import ErrorsList from '@components/ErrorsList'
import UserStatusPicker from '@components/ValuePicker/UserStatusPicker'
// import validateEmail from '@helpers/validateEmail'
import InputImages from '@components/InputImages'
// import CheckBox from '@components/CheckBox'
import loggedUserAtom from '@state/atoms/loggedUserAtom'
import compareArrays from '@helpers/compareArrays'
import {
  DEFAULT_QUESTIONNAIRE_ITEM,
  DEFAULT_QUESTIONNAIRE,
} from '@helpers/constants'
// import ValuePicker from '@components/ValuePicker/ValuePicker'
import HaveKidsPicker from '@components/ValuePicker/HaveKidsPicker'
import isLoggedUserDevSelector from '@state/selectors/isLoggedUserDevSelector'
import UserRolePicker from '@components/ValuePicker/UserRolePicker'
import usersAtom from '@state/atoms/usersAtom'
import { text } from '@fortawesome/fontawesome-svg-core'
import ValuePicker from '@components/ValuePicker/ValuePicker'
import {
  faMars,
  faPlus,
  faTrash,
  faVenus,
} from '@fortawesome/free-solid-svg-icons'
import NativeSelectInput from '@mui/material/NativeSelect/NativeSelectInput'
import { FormControl, InputLabel, NativeSelect } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import ComboBox from '@components/ComboBox'
import IconButtonMenu from '@components/ButtonMenu'
import Divider from '@components/Divider'
import InputWrapper from '@components/InputWrapper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Label from '@components/Label'
import questionnaireSelector from '@state/selectors/questionnaireSelector'

const typesNames = {
  text: '?????????? (????????????)',
  textarea: '?????????? (??????????)',
  number: '??????????',
  comboList: '???????? ???? ????????????',
  checkList: '?????????????????? ???? ????????????',
  menu: '???????????????????????????? ????????????',
  date: '????????',
  time: '??????????',
  dateTime: '???????? ?? ??????????',
}

const QuestionnaireItem = ({
  question,
  onChange,
  title,
  index,
  onDelete,
  children,
}) => (
  <FormWrapper gapY={1}>
    {index > 0 && <Divider thin light />}
    <div className="flex items-center gap-x-2">
      <Label className="font-bold" text={`???${index + 1}.`} />
      <span className="flex-1 italic font-bold text-gray-600">{title}</span>
      <div className="flex justify-end p-1 duration-200 transform cursor-pointer w-7 h-7 hover:scale-125">
        <FontAwesomeIcon
          className="h-4 text-red-700"
          icon={faTrash}
          size="1x"
          onClick={() => onDelete(index)}
        />
      </div>
    </div>
    <Input
      label="????????????"
      value={question}
      onChange={(newValue) => onChange({ question: newValue }, index)}
    />
    {children}
  </FormWrapper>
)

const questionnaireFunc = (questionnaireId, clone) => {
  const QuestionnaireFuncModal = ({
    closeModal,
    setOnConfirmFunc,
    setOnDeclineFunc,
    setOnShowOnCloseConfirmDialog,
    setDisableConfirm,
    setDisableDecline,
  }) => {
    const questionnaire = useRecoilValue(questionnaireSelector(questionnaireId))
    const [questionnaireName, setQuestionnaireName] = useState(
      questionnaire?.name ?? DEFAULT_QUESTIONNAIRE.name
    )
    const [data, setData] = useState(
      questionnaire?.data ?? DEFAULT_QUESTIONNAIRE.data
    )
    const setQuestionnaire = useRecoilValue(itemsFuncAtom).questionnaire.set

    const [errors, checkErrors, addError, removeError, clearErrors] =
      useErrors()

    const addItem = (type) =>
      setData((state) => [...state, { ...DEFAULT_QUESTIONNAIRE_ITEM, type }])

    const deleteItem = (index) =>
      setData((state) => state.filter((item, i) => i !== index))

    const onChange = (obj, index) => {
      setData((state) =>
        state.map((item, i) => (index === i ? { ...item, ...obj } : item))
      )
    }

    console.log('data', data)

    // const router = useRouter()

    // const refreshPage = () => {
    //   router.replace(router.asPath)
    // }

    const onClickConfirm = async () => {
      closeModal()
      setQuestionnaire(
        {
          _id: questionnaire?._id,
          name: questionnaireName,
          data,
        },
        clone
      )
    }

    useEffect(() => {
      const isErrors =
        questionnaireName === '' ||
        data.length === 0 ||
        data.find((item) => !item.question)
      // const isFormChanged =
      //   user?.firstName !== firstName ||
      //   user?.secondName !== secondName ||
      //   user?.thirdName !== thirdName ||
      //   // user?.about !== about ||
      //   // user?.interests !== interests ||
      //   // user?.profession !== profession ||
      //   // user?.orientation !== orientation ||
      //   user?.gender !== gender ||
      //   user?.email !== email ||
      //   user?.phone !== phone ||
      //   user?.whatsapp !== whatsapp ||
      //   user?.viber !== viber ||
      //   user?.telegram !== telegram ||
      //   user?.instagram !== instagram ||
      //   user?.vk !== vk ||
      //   !compareArrays(user?.images, images) ||
      //   user?.birthday !== birthday ||
      //   user?.haveKids !== haveKids ||
      //   user?.status !== status ||
      //   user?.role !== role
      setOnConfirmFunc(onClickConfirm)
      // setOnShowOnCloseConfirmDialog(isFormChanged)
      setDisableConfirm(isErrors)
    }, [questionnaireName, data])

    return (
      <div className="flex flex-col">
        <Divider thin light />

        <FormWrapper className="pt-2">
          <Input
            label="???????????????? ????????????"
            value={questionnaireName}
            onChange={setQuestionnaireName}
          />
          <div className="flex pl-10">
            <span className="flex-1 text-lg font-bold text-center">
              ??????????????
            </span>
            <div>
              <IconButtonMenu
                // dense
                name="???????????????? ????????????"
                icon={faPlus}
                items={[
                  { name: '?????????? (????????????)', value: 'text' },
                  { name: '?????????? (??????????)', value: 'textarea' },
                  null,
                  { name: '??????????', value: 'number' },
                  // null,
                  // { name: '???????? ???? ????????????', value: 'comboList' },
                  // { name: '?????????????????? ???? ????????????', value: 'checkList' },
                  // { name: '???????????????????????????? ????????????', value: 'menu' },
                  // null,
                  // { name: '????????', value: 'date' },
                  // { name: '??????????', value: 'time' },
                  // { name: '???????? ?? ??????????', value: 'dateTime' },
                ]}
                onChange={addItem}
              />
            </div>
          </div>
          {data && data.length > 0 ? (
            data.map((item, index) => {
              return (
                <QuestionnaireItem
                  key={index}
                  question={item.question}
                  onChange={onChange}
                  title={typesNames[item.type]}
                  index={index}
                  onDelete={deleteItem}
                >
                  {item.type === 'number' && (
                    <>
                      <Input
                        label="??????????????"
                        value={item.min}
                        onChange={(newValue) =>
                          onChange({ min: newValue }, index)
                        }
                        type="number"
                        inputClassName="w-40"
                      />
                      <Input
                        label="????????????????"
                        value={item.max}
                        onChange={(newValue) =>
                          onChange({ max: newValue }, index)
                        }
                        type="number"
                        inputClassName="w-40"
                      />
                    </>
                  )}
                </QuestionnaireItem>
              )
              // if (item.type === 'textarea')
              // return (
              //   <QuestionnaireItem index={index} onDelete={deleteItem}>
              //     <Input
              //       label="????????????"
              //       value={item.value}
              //       onChange={(newValue) =>
              //         onChange({ value: newValue }, index)
              //       }
              //     />
              //   </QuestionnaireItem>
              // )
            })
          ) : (
            <div className="flex justify-center w-full">
              {'?????????????? "+" ?????? ???????????????? ?????????????? ????????????'}
            </div>
          )}
          <ErrorsList errors={errors} />
        </FormWrapper>
      </div>
    )
  }

  return {
    title: `?????????????????????? ????????????`,
    confirmButtonName: '??????????????',
    Children: QuestionnaireFuncModal,
  }
}

export default questionnaireFunc
