# Extism.js Token Market Data Plugin

This is an Extism.js plugin that fetches token market data from the [OKLink API](https://www.oklink.com/api/v5/explorer/tokenprice/market-data). It supports querying market data information for over 200 public chain tokens, including details such as price, supply, trading volume, and market cap.

## Usage

To use this plugin, you'll need to have the Extism CLI installed. You can install it by following the instructions in the [Extism CLI repository](https://github.com/extism/cli).

Once you have the Extism CLI installed, you can run the plugin like this:

```bash
extism call tokenmarketdata.wasm run --input='{"chainId":0,"tokenContractAddress":"b61b0172d95e266c18aea0c624db987e971a5d6d4ebc2aaed85da4642d635735i0"}' --wasi --allow-host="www.oklink.com"
```

Replace `0` with the chain ID you want to query, and `b61b0172d95e266c18aea0c624db987e971a5d6d4ebc2aaed85da4642d635735i0` with the token contract address you want to query.
For supported chain, and chain ID refer to this https://www.oklink.com/docs/en/#market-data-supported-chains

## API Key

This plugin requires an API key to access the OKLink API. You can obtain an API key by signing up for an OKLink account and creating a new API key in your account settings.
Once you have an API key, you'll need to update the apiKey value in the headers object in the plugin code:
```javascript
const headers = {
  'Ok-Access-Key': 'your-api-key-here',
};
```
Replace 'your-api-key-here' with your actual API key.

## Plugin Interface
The plugin exports a single function, `run`, which takes an input object with the following properties:

- `chainId` (required): The ID of the chain you want to query.
- `tokenContractAddress` (optional): The contract address of the token you want to query. If not provided, the plugin will return market data for the default token.

The function returns an object with the following properties:

- `lastPrice`: The last price of the token.
- `totalSupply`: The total supply of the token.
- `circulatingSupply`: The circulating supply of the token.
- `volume24h`: The 24-hour trading volume of the token.
- `marketCap`: The market capitalization of the token.
- `high24h`: The highest price of the token in the last 24 hours.
- `low24h`: The lowest price of the token in the last 24 hours.
- `priceAbnormal`: An array of strings indicating any abnormal price conditions, such as low liquidity or abnormal fluctuations.
