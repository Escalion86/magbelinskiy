// import { getSession } from 'next-auth/react'
// import fetchProps from './fetchProps'

const getServerSidePropsFunc = async (context, getSession, fetchProps) => {
  try {
    const session = await getSession({ req: context.req })

    const fetchedProps = await fetchProps(session?.user)

    return {
      props: {
        ...fetchedProps,
        loggedUser: session?.user ?? null,
      },
    }
  } catch (error) {
    return {
      props: {
        // users: null,
        // events: null,
        // directions: null,
        // reviews: null,
        // additionalBlocks: null,
        // eventsUsers: null,
        // payments: null,
        // siteSettings: null,
        // histories: null,
        // questionnaires: null,
        // questionnairesUsers: null,
        loggedUser: session?.user ?? null,
        error: JSON.parse(JSON.stringify(error)),
      },
    }
  }
}

export default getServerSidePropsFunc
