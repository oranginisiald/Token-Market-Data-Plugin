function run() {
  const input = JSON.parse(Host.inputString());
  const chainId = input.chainId;
  const tokenContractAddress = input.tokenContractAddress || '';

  const url = new URL('https://www.oklink.com/api/v5/explorer/tokenprice/market-data');
  const params = new URLSearchParams({
    chainId: chainId.toString(),
    tokenContractAddress: tokenContractAddress,
  });
  url.search = params.toString();

  const headers = {
    'Ok-Access-Key': 'your-api-key-here', // Add your API key here
  };

  const request = {
    method: 'GET',
    url: url.toString(),
    headers: headers,
  };

  const response = Http.request(request);

  if (response.status !== 200) {
    throw new Error(`HTTP request failed with status ${response.status}`);
  }

  const data = JSON.parse(response.body).data[0];
  Host.outputString(JSON.stringify(data));
}

module.exports = { run };