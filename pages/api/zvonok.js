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
      const { ct_phone, ct_phone9 } =
        typeof body === 'string' ? JSON.parse(body) : body
      if (ct_phone9) {
        const data = await sendTelegramMassage(
          `Заявка по звонку с номера +7${ct_phone9}`
        )

        return res?.status(201).json({ success: true, data })
      } else if (ct_phone) {
        const data = await sendTelegramMassage(
          `Заявка по звонку с номера +${String(Number(ct_phone))}`
        )

        return res?.status(201).json({ success: true, data })
      } else {
        const data = await sendTelegramMassage(
          `Заявка body: ${JSON.stringify(body)}`
        )
        return res?.status(400).json({ success: false })
      }
    } catch (error) {
      console.log(error)
      return res?.status(400).json({ success: false, error })
    }
  }
  if (method === 'GET') {
    try {
      const { ct_phone9, ct_phone } = query
      if (ct_phone9) {
        const data = await sendTelegramMassage(
          `Заявка по звонку с номера +7${ct_phone9}`
        )

        return res?.status(201).json({ success: true, data })
      } else if (ct_phone) {
        const data = await sendTelegramMassage(
          `Заявка по звонку с номера +${String(Number(ct_phone))}`
        )

        return res?.status(201).json({ success: true, data })
      } else {
        const data = await sendTelegramMassage(
          `Заявка query: ${JSON.stringify(query)}`
        )
        return res?.status(400).json({ success: false })
      }
    } catch (error) {
      console.log(error)
      return res?.status(400).json({ success: false, error })
    }
  }
  return res?.status(400).json({ success: false, error: 'Wrong method' })
  // return await CRUD(Reviews, req, res)
}
