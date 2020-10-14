const bitcache = require('bitcache');

const query = {
  "q": {
    "find": {
      //"out.s2": "19HxigV4QyBv3tHpQVcUEQyq1pzZVdoAut",
      //"out.tape.cell.s": "18pAqbYqhzErT6Zk3a5dwxHtB9icv8jH2p",
      //"out.s1": "1PZmJTy3ZkUGfHJxLczHnKwimRGnPXKNWH",
      //"out.s2": "12iTkC6ksHo3P4CLYLjc9VXpFasrNPwfND",
      //"out.s2": "16ncN7NF8zXrvhFtW7LXqqLRdzoFDsaH9m",
      //"out.f3": { $exists: true }
    },
    "project": { "out.f3": 1, "tx.h": 1 },
    "r": {
        "f": "[.[] | .out[0].s3 | fromjson ]"
    }
    //"limit": 200
  },
  transform: (tx) => {
    //console.log("transform", tx);
    let filtered = tx.out.filter((o) => {
      return o.f3
    })
    let f = filtered[0];
    return {
      meta: {}, data: { uri: f.f3 }
    }
  }
}
bitcache.init({
  socket: {
    url: "https://txo.bitsocket.network",
    query: query,
  },
  bus: {
    // from: 656000,
    url: "https://txo.bitbus.network",
    token: "eyJhbGciOiJFUzI1NksiLCJ0eXAiOiJKV1QifQ.eyJzdWIiOiIxOExuejRRVllZSEo3dlJraDFydDRIMTZyWE1oc3pZMUg0IiwiaXNzdWVyIjoiZ2VuZXJpYy1iaXRhdXRoIn0.SUphUXJaTWdZTGVOZDFmb1Q2c09xSlozbnlUa2JWbW8zeXNVTnBPYU12djNhNEFFZjUrUVpBQ1Q2MUpZbUk5bW50eUNwQUtaNmcrbkhXOFppenhLd2hzPQ",
    query: query,
  },
  txt: {
    channel: "b",
    url: "http://localhost:3013",
  },
})