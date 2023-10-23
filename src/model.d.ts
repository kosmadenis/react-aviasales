declare namespace Model {
  interface Segment {
    origin: string
    destination: string
    date: Date
    duration: number
    stops: string[]
  }

  interface Ticket {
    price: number
    carrier: string
    segments: Segment[]
  }

  interface Response {
    tickets: Ticket[]
    stop: boolean
  }
}
