import _ from 'lodash'

export function maskLegend(item) {

  let variations = ''
  if (item.variations.length > 0) {
    variations = `- ${item.variations.join(' - ')}`
  }

  return `${item.origin} / ${item.destin} ${variations}`
}
