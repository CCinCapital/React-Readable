export function uuid () {
  return Date.now()+((Math.random()*0x10000000)|0).toString(16)
}

export function sortByTimestamp (m, n) {
  if (m.timestamp < n.timestamp) {
    return 1;
  }
  else if (m.timestamp > n.timestamp) {
    return -1;
  }
  else {
    return 0;
  }
}

export function sortByVoteScore (m, n) {
  if (m.voteScore < n.voteScore) {
    return 1;
  }
  else if (m.voteScore > n.voteScore) {
    return -1;
  }
  else {
    return 0;
  }
}