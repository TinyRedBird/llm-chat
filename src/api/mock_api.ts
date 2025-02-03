import axios from 'axios'
let apifoxToken = 'lEsBy8UV1QRHptTK7_40c'
let base_url = `https://apifoxmock.com/m1/4082568-3720417-default`

let config = {
  method: 'get',
  baseURL: base_url,
  headers: {
    'User-Agent': 'Apifox/1.0.0 (https://apifox.com)',
    'Content-Type': 'application/json',
    Accept: '*/*',
    Host: 'apifoxmock.com',
    Connection: 'keep-alive',
  },
}
let HttpInstance = axios.create(config)

export const mock_api = {
  async generateSelectedSummaries({
    keyword,
    current_page,
  }: {
    keyword: string
    current_page: number
  }) {
    let searchParams = new URLSearchParams()
    searchParams.set('keyword', keyword)
    searchParams.set('current_page', current_page.toString())
    console.log(`/generateSelectedSummaries?apifoxToken=${apifoxToken}&${searchParams.toString()}`)

    return await HttpInstance.get(
      `/generateSelectedSummaries?apifoxToken=${apifoxToken}&${searchParams.toString()}`,
    )
  },
}
