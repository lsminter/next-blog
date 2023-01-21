const sanityClient = require('@sanity/client')

export const sanityClient = sanityClient({
  projectId: '0zxiq0ro', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data
  ignoreBrowserTokenWarning: true
})