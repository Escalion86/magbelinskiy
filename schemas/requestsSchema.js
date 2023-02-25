const requestsSchema = {
  date: {
    type: Date,
    default: null,
  },
  // Возраст аудитории
  audience: {
    type: String,
    default: '',
  },
  // Тип мероприятия
  type: {
    type: String,
    default: '',
  },
  // Особый тип мероприятия
  customType: {
    type: String,
    default: '',
  },
  // Кол-во зрителей
  spectators: {
    type: String,
    default: '',
  },
  // Город
  town: {
    type: String,
    default: '',
  },
  // Адрес
  address: {
    type: String,
    default: '',
  },
  // Телефон
  phone: {
    type: Number,
    required: [true, 'Введите Телефон'],
    default: null,
  },
  // Комментарий
  comment: {
    type: String,
    default: '',
  },
}

export default requestsSchema
