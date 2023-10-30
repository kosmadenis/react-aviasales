declare namespace Model {
  interface Segment {
    id: number
    origin: string
    destination: string
    date: string
    duration: number
    stops: string[]
  }

  interface Ticket {
    id: number
    price: number
    carrier: string
    segments: Segment[]
  }
}
