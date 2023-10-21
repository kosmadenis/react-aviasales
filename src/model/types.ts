export interface SegmentData {
  origin: string
  destination: string
  date: Date
  duration: number
  stops: string[]
}

export interface TicketData {
  price: number
  carrier: string
  segments: SegmentData[]
}

export interface SearchResult {
  tickets: TicketData[]
  stop: boolean
}
