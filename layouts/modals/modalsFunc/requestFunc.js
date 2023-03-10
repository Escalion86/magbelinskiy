import React, { useEffect, useState } from 'react'
import 'dayjs/locale/ru'
import useErrors from '@helpers/useErrors'

import { useRecoilValue } from 'recoil'
import directionSelector from '@state/selectors/directionSelector'
import itemsFuncAtom from '@state/atoms/itemsFuncAtom'

import CheckBox from '@components/CheckBox'
import Input from '@components/Input'
import EditableTextarea from '@components/EditableTextarea'
import FormWrapper from '@components/FormWrapper'
import InputImage from '@components/InputImage'
import ErrorsList from '@components/ErrorsList'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepButton from '@mui/material/StepButton'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import ValuePicker from '@components/ValuePicker/ValuePicker'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { TextareaAutosize, TextField } from '@mui/material'
// import DatePicker from '@components/DatePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
// import dayjs from 'dayjs'
import Autocomplete from '@mui/material/Autocomplete'
import MaskedInput from 'react-text-mask'
import { AUDIENCE, EVENT_TYPES } from '@helpers/constants'

const steps = ['', '', '']

const TextMaskCustom = React.forwardRef((props, ref) => {
  const { inputRef, ...other } = props

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      // ref={ref}
      // disabled={disabled}
      // className={cn(
      //   'text-input w-36 px-1 border rounded outline-none focus:shadow-active',
      //   required && (!value || value.toString().length !== 11)
      //     ? 'border-red-700'
      //     : 'border-gray-400',
      //   { 'bg-gray-300  text-disabled': disabled }
      // )}
      // showMask
      // keepCharPositions
      mask={[
        '+',
        '7',
        ' ',
        '(',
        /[1-9]/,
        /\d/,
        /\d/,
        ')',
        ' ',
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]}
    />
  )
})

const requestFunc = (requestId, clone = false) => {
  const RequestModal = ({
    closeModal,
    setOnConfirmFunc,
    setOnDeclineFunc,
    setOnShowOnCloseConfirmDialog,
    setDisableConfirm,
    setDisableDecline,
  }) => {
    // const [activeStep, setActiveStep] = React.useState(0)
    // const [completed, setCompleted] = React.useState({})

    // const [age, setAge] = React.useState('')

    // const handleChange = (event) => {
    //   setAge(event.target.value)
    // }

    // const totalSteps = () => {
    //   return steps.length
    // }

    // const completedSteps = () => {
    //   return Object.keys(completed).length
    // }

    // const isLastStep = () => {
    //   return activeStep === totalSteps() - 1
    // }

    // const allStepsCompleted = () => {
    //   return completedSteps() === totalSteps()
    // }

    // const handleNext = () => {
    //   const newActiveStep =
    //     isLastStep() && !allStepsCompleted()
    //       ? // It's the last step, but not all steps have been completed,
    //         // find the first step that has been completed
    //         steps.findIndex((step, i) => !(i in completed))
    //       : activeStep + 1
    //   setActiveStep(newActiveStep)
    // }

    // const handleBack = () => {
    //   setActiveStep((prevActiveStep) => prevActiveStep - 1)
    // }

    // const handleStep = (step) => () => {
    //   setActiveStep(step)
    // }

    // const handleComplete = () => {
    //   const newCompleted = completed
    //   newCompleted[activeStep] = true
    //   setCompleted(newCompleted)
    //   handleNext()
    // }

    // const handleReset = () => {
    //   setActiveStep(0)
    //   setCompleted({})
    // }

    // const direction = useRecoilValue(directionSelector(directionId))
    const setRequest = useRecoilValue(itemsFuncAtom).request.set

    const [audience, setAudience] = useState('')
    const [type, setType] = useState('')
    const [customType, setCustomType] = useState('')
    const [date, setDate] = useState(null)
    const [spectators, setSpectators] = useState('')
    const [town, setTown] = useState('????????????????????')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState(0)
    const [comment, setComment] = useState('')

    // const [description, setDescription] = useState(
    //   direction?.description ?? DEFAULT_DIRECTION.description
    // )
    // const [image, setImage] = useState(
    //   direction?.image ?? DEFAULT_DIRECTION.image
    // )
    // const [showOnSite, setShowOnSite] = useState(
    //   direction?.showOnSite ?? DEFAULT_DIRECTION.showOnSite
    // )
    const [errors, checkErrors, addError, removeError, clearErrors] =
      useErrors()

    // // const router = useRouter()

    // // const refreshPage = () => {
    // //   router.replace(router.asPath)
    // // }

    const onClickConfirm = async () => {
      if (!checkErrors({ phone })) {
        closeModal()
        setRequest(
          {
            // _id: direction?._id,
            audience,
            type,
            customType,
            date,
            spectators,
            town,
            address,
            phone,
            comment,
          },
          clone
        )
      }
    }

    useEffect(() => {
      // const isFormChanged =
      //   direction?.title !== title ||
      //   direction?.description !== description ||
      //   direction?.showOnSite !== showOnSite ||
      //   direction?.image !== image

      setOnConfirmFunc(onClickConfirm)
      // setOnShowOnCloseConfirmDialog(isFormChanged)
      // setDisableConfirm(!isFormChanged)
    }, [phone])

    console.log('date', date)

    return (
      <div className="flex flex-col items-center">
        {/* <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper> */}
        {/* <ValuePicker
          value={audience}
          valuesArray={[
            {
              value: 'adults',
              name: '???????????????? (18-99 ??????)',
              color: 'blue-400',
            },
            {
              value: 'teenagers',
              name: '?????????????????? (10-18 ??????)',
              color: 'purple-400',
            },
            { value: 'kids', name: '???????? (5-12 ??????)', color: 'green-400' },
            { value: 'other', name: '??????????????????', color: 'yellow-400' },
          ]}
          label="?????????????? ??????????????????"
          onChange={setAudience}
          // name="yes_no"
          required={true}
          vertical
          // error={error}
          // inLine={inLine}
        /> */}
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'ru'}>
          {/* <FormControl sx={{ m: 1, width: 300 }} size="small" margin="none"> */}
          <DatePicker
            // disableFuture
            label="???????? ??????????????????????"
            openTo="year"
            views={['year', 'month', 'day']}
            value={date}
            onChange={setDate}
            renderInput={(params) => (
              <TextField
                sx={{ m: 1 }}
                fullWidth
                size="small"
                margin="none"
                {...params}
              />
            )}
            // maxDate={undefined}
            minDate={new Date()}
          />
          {/* </FormControl> */}
        </LocalizationProvider>
        <FormControl sx={{ m: 1 }} fullWidth size="small" margin="none">
          <InputLabel>{'?????????????? ??????????????????'}</InputLabel>
          <Select
            value={audience}
            label="?????????????? ??????????????????"
            onChange={(e) => setAudience(e.target.value)}
          >
            {AUDIENCE.map(({ value, name }) => (
              <MenuItem key={'AUDIENCE' + value} value={value}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1 }} fullWidth size="small" margin="none">
          <InputLabel>{'?????? ??????????????????????'}</InputLabel>
          <Select
            value={type}
            label="?????? ??????????????????????"
            onChange={(e) => setType(e.target.value)}
          >
            {EVENT_TYPES.map(({ value, name }) => (
              <MenuItem key={'EVENT_TYPES' + value} value={value}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {type === 'other' && (
          <TextField
            sx={{ m: 1 }}
            fullWidth
            label="?????? ???? ???????????????????????"
            variant="outlined"
            margin="none"
            size="small"
            value={customType}
            onChange={(e) => setCustomType(e.target.value)}
          />
        )}
        <FormControl sx={{ m: 1 }} fullWidth size="small" margin="none">
          <InputLabel>{'???????????????????? ????????????????'}</InputLabel>
          <Select
            value={spectators}
            label="???????????????????? ????????????????"
            onChange={(e) => setSpectators(e.target.value)}
          >
            <MenuItem value="1-15">{'1-15 ??????.'}</MenuItem>
            <MenuItem value="15-30">{'15-30 ??????.'}</MenuItem>
            <MenuItem value="30-70">{'30-70 ??????.'}</MenuItem>
            <MenuItem value="70-200">{'70-200 ??????.'}</MenuItem>
            <MenuItem value=">200">{'?????????? 200 ??????.'}</MenuItem>
          </Select>
        </FormControl>
        {/* <FormControl sx={{ m: 1 }} fullWidth size="small" margin="none"> */}
        <Autocomplete
          // disablePortal
          value={town}
          // label="??????????"
          onChange={(e, newValue) => setTown(newValue)}
          options={[
            '????????????????????',
            '????????????',
            '????????????',
            '????????????????????????',
            '??????????????????????',
            '????????????????????????',
          ]}
          sx={{ m: 1 }}
          fullWidth
          freeSolo
          size="small"
          margin="none"
          renderInput={(params) => (
            <TextField
              {...params}
              label="?????????? (?????????????? ???? ???????????? ?????? ????????????????)"
            />
          )}
        />
        {/* <InputLabel>{'??????????'}</InputLabel>
          <Select
            value={town}
            label="??????????"
            onChange={(e) => setTown(e.target.value)}
          >
            <MenuItem value="????????????????????">{'1-15 ??????.'}</MenuItem>
            <MenuItem value="????????????">{'15-30 ??????.'}</MenuItem>
            <MenuItem value="????????????">{'30-70 ??????.'}</MenuItem>
            <MenuItem value="????????????????????????">{'70-200 ??????.'}</MenuItem>
            <MenuItem value="??????????????????????">{'?????????? 200 ??????.'}</MenuItem>
          </Select> */}
        {/* </FormControl> */}
        <TextField
          sx={{ m: 1 }}
          fullWidth
          label="?????????? (??????????, ??????, ????. ?? ???????????? ????????????)"
          variant="outlined"
          margin="none"
          size="small"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <TextField
          error={!!errors.phone}
          sx={{ m: 1 }}
          fullWidth
          size="small"
          margin="none"
          label="?????? ?????????????? ?????? ??????????"
          InputProps={{
            inputComponent: TextMaskCustom,
            // value: this.state.textmask,
            // onChange: this.handleChange('textmask'),
          }}
          onChange={(e) => {
            removeError('phone')
            const value = e.target.value.replace(/[^0-9]/g, '')
            if (phone === 0 && (value == '77' || value == '78')) setPhone(null)
            else setPhone(value === '7' ? null : Number(value))
          }}
          value={
            phone
              ? phone.toString().substring(0, 1) == '7'
                ? phone.toString().substring(1)
                : phone.toString()
              : 0
          }
        />
        <TextField
          sx={{ m: 1 }}
          label="?????????????????????? (???? ??????????????)"
          size="small"
          margin="none"
          multiline
          // rows={3}
          maxRows={4}
          onChange={(e) => setComment(e.target.value)}
          // style={{ width: 200 }}
          fullWidth
          value={comment}
        />
        {/* <FormControl sx={{ m: 1 }} fullWidth size="small" margin="none"> */}
        {/* <InputLabel>{'?????????????????????? (???? ??????????????)'}</InputLabel> */}
        {/* <TextareaAutosize
            label="?????????????????????? (???? ??????????????)"
            maxRows={4}
            // aria-label="maximum height"
            placeholder="?????????????????????? (???? ??????????????)"
            //       defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            // ut labore et dolore magna aliqua."
            onChange={(e) => setComment(e.target.value)}
            // style={{ width: 200 }}
            // fullWidth
            value={comment}
          /> */}
        {/* </FormControl> */}

        {/* <InputLabel>{'??????????'}</InputLabel> */}
        {/* <input /> */}
        {/* <Select
            value={town}
            label="??????????"
            onChange={(e) => setTown(e.target.value)}
          >
            <MenuItem value="????????????????????">{'1-15 ??????.'}</MenuItem>
            <MenuItem value="????????????">{'15-30 ??????.'}</MenuItem>
            <MenuItem value="????????????">{'30-70 ??????.'}</MenuItem>
            <MenuItem value="????????????????????????">{'70-200 ??????.'}</MenuItem>
            <MenuItem value="??????????????????????">{'?????????? 200 ??????.'}</MenuItem>
          </Select> */}
        <ErrorsList errors={errors} />
      </div>
      // <Box sx={{ width: '100%', height: '100%' }} className="flex flex-col">
      //   <Stepper nonLinear activeStep={activeStep}>
      //     {steps.map((label, index) => (
      //       <Step key={label} completed={completed[index]}>
      //         <StepButton color="inherit" onClick={handleStep(index)}>
      //           {label}
      //         </StepButton>
      //       </Step>
      //     ))}
      //   </Stepper>
      //   <div className="flex flex-col flex-1">
      //     {allStepsCompleted() ? (
      //       <>
      //         <Typography sx={{ mt: 2, mb: 1 }}>
      //           All steps completed - you&apos;re finished
      //         </Typography>
      //         <div className="flex pt-0.5">
      //           <Box sx={{ flex: '1 1 auto' }} />
      //           <Button onClick={handleReset}>Reset</Button>
      //         </div>
      //       </>
      //     ) : (
      //       <>
      //         <div className="flex-1">Step {activeStep + 1}</div>
      //         <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
      //           <Button
      //             color="inherit"
      //             disabled={activeStep === 0}
      //             onClick={handleBack}
      //             sx={{ mr: 1 }}
      //           >
      //             Back
      //           </Button>
      //           <Box sx={{ flex: '1 1 auto' }} />
      //           <Button onClick={handleNext} sx={{ mr: 1 }}>
      //             Next
      //           </Button>
      //           {activeStep !== steps.length &&
      //             (completed[activeStep] ? (
      //               <Typography
      //                 variant="caption"
      //                 sx={{ display: 'inline-block' }}
      //               >
      //                 Step {activeStep + 1} already completed
      //               </Typography>
      //             ) : (
      //               <Button onClick={handleComplete}>
      //                 {completedSteps() === totalSteps() - 1
      //                   ? 'Finish'
      //                   : 'Complete Step'}
      //               </Button>
      //             ))}
      //         </Box>
      //       </>
      //     )}
      //   </div>
      // </Box>
    )
  }

  return {
    title: `????????????`,
    text: `???????????????????? ?????????????????? ?????? ???????? ?????? ????????????????, ?????????? ?? ???????? ?????????????????????????? ?????? ?????? ???????????????????? ???????????????? ????????????????`,
    confirmButtonName: '?????????????????? ????????????',
    Children: RequestModal,
    className: 'tablet:max-w-[460px]',
  }
}

export default requestFunc
