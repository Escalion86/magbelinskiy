// const { default: AdditionalBlocks } = require('@models/AdditionalBlocks')
// const { default: Directions } = require('@models/Directions')
// const { default: Events } = require('@models/Events')
// const { default: EventsUsers } = require('@models/EventsUsers')
// const { default: Payments } = require('@models/Payments')
// const { default: Reviews } = require('@models/Reviews')
// const { default: SiteSettings } = require('@models/SiteSettings')
// const { default: Users } = require('@models/Users')
// const { default: dbConnect } = require('@utils/dbConnect')

// import {
//   fetchingAdditionalBlocks,
//   fetchingDirections,
//   fetchingEvents,
//   fetchingEventsUsers,
//   fetchingPayments,
//   fetchingReviews,
//   fetchingSiteSettings,
//   fetchingUsers,
// } from '@helpers/fetchers'
import { fetchingLog } from '@helpers/fetchers'
import isUserAdmin from '@helpers/isUserAdmin'
import AdditionalBlocks from '@models/AdditionalBlocks'
import Directions from '@models/Directions'
import Events from '@models/Events'
import EventsUsers from '@models/EventsUsers'
import Histories from '@models/Histories'
import Payments from '@models/Payments'
import Questionnaires from '@models/Questionnaires'
import QuestionnairesUsers from '@models/QuestionnairesUsers'
import Reviews from '@models/Reviews'
import SiteSettings from '@models/SiteSettings'
import Users from '@models/Users'
import dbConnect from '@utils/dbConnect'

const fetchProps = async (user) => {
  try {
    // console.log(`start fetchProps`)
    // console.time('Loading time')
    // console.time('dbConnect')
    const db = await dbConnect()
    // console.timeEnd(`dbConnect`)
    // await fetchingLog({ from: 'fetchProps', db }, process.env.NEXTAUTH_SITE)
    // console.log('db', db)
    // const users = await Users.find({})
    // const events = await Events.find({})
    // const directions = await Directions.find({})
    // const reviews = await Reviews.find({})
    // const additionalBlocks = await AdditionalBlocksModel.find({})
    // const eventsUsers = await EventsUsers.find({})
    // const payments = await Payments.find({})
    // const siteSettings = await SiteSettings.find({})

    // console.time('users')
    // const users = await Users.find({})
    // const events = await Events.find({})
    // const directions = await Directions.find({})
    // const reviews = await Reviews.find({})
    // const additionalBlocks = await AdditionalBlocks.find({})
    // const eventsUsers = await EventsUsers.find({})
    // const payments = await Payments.find({})
    const siteSettings = await SiteSettings.find({})
    // const questionnaires = await Questionnaires.find({})
    // const questionnairesUsers = await QuestionnairesUsers.find({})
    // const histories = isUserAdmin(user)
    //   ? await Histories.find({
    //       // createdAt: { $gt: user.prevActivityAt },
    //     })
    //   : []

    const fetchResult = {
      // users: JSON.parse(JSON.stringify(users)),
      // events: JSON.parse(JSON.stringify(events)),
      // directions: JSON.parse(JSON.stringify(directions)),
      // reviews: JSON.parse(JSON.stringify(reviews)),
      // additionalBlocks: JSON.parse(JSON.stringify(additionalBlocks)),
      // eventsUsers: JSON.parse(JSON.stringify(eventsUsers)),
      // payments: JSON.parse(JSON.stringify(payments)),
      siteSettings: JSON.parse(JSON.stringify(siteSettings[0])),
      // histories: JSON.parse(JSON.stringify(histories)),
      // questionnaires: JSON.parse(JSON.stringify(questionnaires)),
      // questionnairesUsers: JSON.parse(JSON.stringify(questionnairesUsers)),
    }

    // console.log('fetchResult', fetchResult)

    return fetchResult
  } catch (error) {
    return {
      // users: [],
      // events: [],
      // directions: [],
      // reviews: [],
      // additionalBlocks: [],
      // eventsUsers: [],
      // payments: [],
      siteSettings: {},
      // histories: [],
      // questionnaires: [],
      // questionnairesUsers: [],
      error: JSON.parse(JSON.stringify(error)),
    }
  }
}

export default fetchProps
