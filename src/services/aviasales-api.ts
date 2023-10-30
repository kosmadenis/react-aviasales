const DEFAULT_BASE_URL = 'https://aviasales-test-api.kata.academy/'

export default class AviasalesApi {
  #baseUrl: string

  #ticketId = 0

  #segmentId = 0

  constructor(baseUrl?: string) {
    this.#baseUrl = baseUrl ?? DEFAULT_BASE_URL
  }

  #url(path: string, params?: { [name: string]: string }) {
    const url = new URL(this.#baseUrl)

    url.pathname += path

    //
    ;(params ? Object.entries(params) : []).forEach(([name, value]) =>
      url.searchParams.append(name, value)
    )

    return url
  }

  async search(): Promise<{ searchId: string }> {
    const response = await fetch(this.#url('search'))
    const data = await response.json()

    return data
  }

  async tickets(
    searchId: string
  ): Promise<{ tickets: Model.Ticket[]; stop: boolean }> {
    const response = await fetch(this.#url('tickets', { searchId }))
    const data = await response.json()

    data.tickets = data.tickets.map((ticket: any) => {
      const segments = ticket.segments.map((segment: any) => {
        const mapped = { ...segment, id: this.#segmentId }
        this.#segmentId += 1
        return mapped
      })

      const mapped = { ...ticket, segments, id: this.#ticketId }
      this.#ticketId += 1
      return mapped
    })

    return data
  }
}
