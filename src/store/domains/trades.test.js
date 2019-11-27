import getTradesDomain, * as eventCreators from './trades'

function getDomain(events) {
  const state = events.reduce((state, event) => event(state), undefined)
  return getTradesDomain(state)
}

const trades = [
  {
    amount: 3606.63,
    price: 53983.52,
    type: 'MO',
    side: 'SELL',
    hash: '0x239c611ce10346eba1fe08dbc5542499a1e6bf5675070fa7ef809dc85d75f7c9',
    taker: '0x8fc47d2c6c3ba1ad9b337707a2e3a6a1a81c9c42',
    maker: '0x4c45ac66b0d30a2eced64f403b0931f4b2cfff04',
    pair: 'OMG_WETH',
    time: 1504567900560,
  },
  {
    amount: 5765.64,
    price: 98517.23,
    type: 'MO',
    side: 'SELL',
    hash: '0x8c3122d67b7836f641a39e694b3b61f817ced9a9131d4287db30e1f05494f46a',
    taker: '0x15bbb591ee81d2a6030e1a7d9378548ff93a9d16',
    maker: '0xef4d26128669e0c30746b50ce1d23647a3464063',
    pair: 'TOMO_WETH',
    time: 1506911142876,
  },
  {
    amount: 2885.5,
    price: 23798.09,
    type: 'LO',
    side: 'SELL',
    hash: '0x5960fda2d7d3451272bca059a09e6d92b796bb9f8b5cc9d2a7d39f93e0c17346',
    taker: '0x1639cb6b1d885c94fd6b0766b098195dda300044',
    maker: '0x56d386341ad7f6d65df44595617921cb72ad3082',
    pair: 'ZRX_DAI',
    time: 1511091286778,
  },
]

describe('Trades Domain', () => {
  it('handles initialized event properly', () => {
    const tradesDomain = getDomain([eventCreators.initialized()])
    const expected = {}

    expect(tradesDomain.byHash()).toEqual(expected)
  })

  it('handles the trades updated event', () => {
    const expected = {
      '0x239c611ce10346eba1fe08dbc5542499a1e6bf5675070fa7ef809dc85d75f7c9': {
        amount: 3606.63,
        price: 53983.52,
        type: 'MO',
        side: 'SELL',
        hash: '0x239c611ce10346eba1fe08dbc5542499a1e6bf5675070fa7ef809dc85d75f7c9',
        taker: '0x8fc47d2c6c3ba1ad9b337707a2e3a6a1a81c9c42',
        maker: '0x4c45ac66b0d30a2eced64f403b0931f4b2cfff04',
        pair: 'OMG_WETH',
        time: 1504567900560,
      },
      '0x8c3122d67b7836f641a39e694b3b61f817ced9a9131d4287db30e1f05494f46a': {
        amount: 5765.64,
        price: 98517.23,
        type: 'MO',
        side: 'SELL',
        hash: '0x8c3122d67b7836f641a39e694b3b61f817ced9a9131d4287db30e1f05494f46a',
        taker: '0x15bbb591ee81d2a6030e1a7d9378548ff93a9d16',
        maker: '0xef4d26128669e0c30746b50ce1d23647a3464063',
        pair: 'TOMO_WETH',
        time: 1506911142876,
      },
      '0x5960fda2d7d3451272bca059a09e6d92b796bb9f8b5cc9d2a7d39f93e0c17346': {
        amount: 2885.5,
        price: 23798.09,
        type: 'LO',
        side: 'SELL',
        hash: '0x5960fda2d7d3451272bca059a09e6d92b796bb9f8b5cc9d2a7d39f93e0c17346',
        taker: '0x1639cb6b1d885c94fd6b0766b098195dda300044',
        maker: '0x56d386341ad7f6d65df44595617921cb72ad3082',
        pair: 'ZRX_DAI',
        time: 1511091286778,
      },
    }

    const tradesDomain = getDomain([eventCreators.initialized(), eventCreators.tradesUpdated(trades)])

    expect(tradesDomain.byHash()).toEqual(expected)
  })
})

it('handles trades removed event', () => {
  const expected = {
    '0x8c3122d67b7836f641a39e694b3b61f817ced9a9131d4287db30e1f05494f46a': {
      amount: 5765.64,
      price: 98517.23,
      type: 'MO',
      side: 'SELL',
      hash: '0x8c3122d67b7836f641a39e694b3b61f817ced9a9131d4287db30e1f05494f46a',
      taker: '0x15bbb591ee81d2a6030e1a7d9378548ff93a9d16',
      maker: '0xef4d26128669e0c30746b50ce1d23647a3464063',
      pair: 'TOMO_WETH',
      time: 1506911142876,
    },
  }

  const tradesDomain = getDomain([
    eventCreators.initialized(),
    eventCreators.tradesUpdated(trades),
    eventCreators.tradesDeleted(['0x239c611ce10346eba1fe08dbc5542499a1e6bf5675070fa7ef809dc85d75f7c9', '0x5960fda2d7d3451272bca059a09e6d92b796bb9f8b5cc9d2a7d39f93e0c17346']),
  ])

  expect(tradesDomain.byHash()).toEqual(expected)
})
