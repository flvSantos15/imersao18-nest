import { PartialType } from '@nestjs/mapped-types'
import { CriarLugarRequest } from './criar-lugar.request'

export class AtualizatLugarRequest extends PartialType(CriarLugarRequest) {}
