import { TicketKind } from '@prisma/client'

export class ReservarLugarRequest {
  lugares: string[]
  tipo_ingresso: TicketKind
  email: string
}
