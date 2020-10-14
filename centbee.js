const bitcache = require('bitcache');

const query = {
  "v": 3,
  "q": {
    "find": {
      //"out.s1": "1LqjLcPVMT5nHHsHs6rVFaX3bi1nnzxD8H",
      "out.s2": "16ncN7NF8zXrvhFtW7LXqqLRdzoFDsaH9m",
      "out.f3": { $exists: true }
    },
    "project": { "out.f3": 1, "tx.h": 1 }
    //"limit": 200
  },
  transform: (tx) => {
    let filtered = tx.out.filter((o) => {
      return o.f3
    })
    let f = filtered[0]
    return {
      meta: {}, data: { uri: f.f3 }
    }
  }
};

bitcache.init({
  socket: {
    url: "https://txo.bitsocket.network",
    query: query,
  },
  bus: {
    from: 650000,
    url: "https://txo.bitbus.network",
    token: "eyJhbGciOiJFUzI1NksiLCJ0eXAiOiJKV1QifQ.eyJzdWIiOiIxOExuejRRVllZSEo3dlJraDFydDRIMTZyWE1oc3pZMUg0IiwiaXNzdWVyIjoiZ2VuZXJpYy1iaXRhdXRoIn0.SUphUXJaTWdZTGVOZDFmb1Q2c09xSlozbnlUa2JWbW8zeXNVTnBPYU12djNhNEFFZjUrUVpBQ1Q2MUpZbUk5bW50eUNwQUtaNmcrbkhXOFppenhLd2hzPQ",
    query: query,
  },
  txt: {
    channel: "all",
    url: "http://localhost:3013",
  },
})