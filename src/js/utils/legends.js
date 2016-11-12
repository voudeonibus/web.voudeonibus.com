import _ from 'lodash'

export function maskLegend(item) {
  return `${item.origin} / ${item.destin} - ${item.variations.join(' - ')}`
}
