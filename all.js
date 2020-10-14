const bitcache = require('bitcache');

const query = {
  "v": 3,
  "q": {
    "find": {
      
    },
    "project": { "out.f3": 1, "tx.h": 1 },
    "limit": 200
  }
}
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