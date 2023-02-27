import { postData } from '@helpers/CRUD'

const sendTelegramMassage = async (text) =>
  postData(
    `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`,
    {
      chat_id: 261102161,
      text,
      parse_mode: 'html',
    },
    (data) => console.log('data', data),
    (data) => console.log('error', data),
    true
  )

// `Заявка на cigam.ru\n\n<b>Аудитория:</b> ${audienceName}\n<b>Тип:</b> ${typeName}${
//   customType ? ' - ' + customType + ' ' : ''
// }\n<b>Дата:</b> ${
//   !!date ? formatDate(date, false, true) : '-'
// }\n<b>Кол-во зрителей:</b> ${
//   !!spectators ? spectators : '-'
// }\n<b>Город:</b> ${!!town ? town : '-'}\n<b>Адрес:</b> ${
//   !!address ? address : '-'
// }\n<b>Телефон:</b> +${phone}\n<b>Комментарий:</b> ${
//   !!comment ? comment : '-'
// }`,
// `tel:+${phone}`

export default async function handler(req, res) {
  const { query, method, body } = req

  if (method === 'POST') {
    try {
      const { ct_phone } = JSON.parse(body)
      if (ct_phone) {
        const data = await sendTelegramMassage(
          `Заявка по звонку с номера ${ct_phone}`
        )

        // fetch(
        //   `https://api.telegram.org/bot${telegramToken}/sendMessage?chat_id=261102161&text=Заявка%20по%20звонку%20с%20${ct_phone}`,
        //   { method: 'GET' }
        // ).then((response) => response.json())
        // const data = await SiteSettings.findOneAndUpdate({}, body, {
        //   new: true,
        //   upsert: true, // Make this update into an upsert
        // })
        // if (!data) {
        //   return res?.status(400).json({
        //     success: false,
        //     data: { error: `Can't update settings` },
        //   })
        // }

        return res?.status(201).json({ success: true, data })
      } else {
        return res?.status(400).json({ success: false })
      }
    } catch (error) {
      console.log(error)
      return res?.status(400).json({ success: false, error })
    }
  }
  if (method === 'GET') {
    try {
      // const data = await SiteSettings.find()
      // if (!data) {
      //   return res?.status(400).json({ success: false })
      // }
      return res
        ?.status(200)
        .json({ success: true, data: data.length > 0 ? data[0] : {} })
    } catch (error) {
      console.log(error)
      return res?.status(400).json({ success: false, error })
    }
  }
  return res?.status(400).json({ success: false, error: 'Wrong method' })
  // return await CRUD(Reviews, req, res)
}
