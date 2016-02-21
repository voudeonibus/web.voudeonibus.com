// JUST A REDUX EXAMPLE!!
// I'LL CHANGE THIS VERY SOON!

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

export function fetchCounter (cb) {
  setTimeout(() => {
    cb(getRandomInt(1, 100))
  }, 500)

  // API.getUser().then(user => cb(user))
}
