export const uuid = (len, radix) => {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
  const uuid = []
  let i

  radix = chars.length

  if (len) {
    for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)]
  } else {
    let r
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
    uuid[14] = '4'

    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | (Math.random() * 16)
        uuid[i] = chars[i === 19 ? (r & 0x3) | 0x8 : r]
      }
    }
  }

  return uuid.join('')
}

export const splicingUA = (options) => {
  const { platform, bundleId, appVersion, accessToken } = options
  const PLATFORM_PRE = [
    "Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X)",
    "Mozilla/5.0 (Linux; Android 9.0.0; MIX 2S Build/OPR1.170623.032; wv)",
  ];
  const PLATFORM_EXT = [
    "iPhone10,2;iOS 13.5;publicbeta;",
    "Xiaomi MIX 2S;Android8.0.0;bx-gw;",
  ];

  return `${PLATFORM_PRE[platform]} AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 bridge/3.0 (${bundleId} ${appVersion};${accessToken};2019081719122136adfc0bba9ce40cd842501738100c2b01570df7fc855eab;wifi;${PLATFORM_EXT[platform]}20 44 414 736) yppenv/2`
}

