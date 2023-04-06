const { uniV3Export } = require('../helper/uniswapV3')

module.exports = uniV3Export({
  ethereum: { factory: '0xbACEB8eC6b9355Dfc0269C18bac9d6E2Bdc29C4F', fromBlock: 16955547, },
  arbitrum: { factory: '0x1af415a1EbA07a4986a52B6f2e7dE7003D82231e', fromBlock: 75998697, },
})

