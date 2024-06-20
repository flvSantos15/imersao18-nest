import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from '@nestjs/common'
import { SpotsService } from '@app/core/spots/spots.service'
import { CriarLugarRequest } from './request/criar-lugar.request'
import { AtualizatLugarRequest } from './request/atualizar-lugar.request'

@Controller('eventos/:eventoId/lugares')
export class SpotsController {
  constructor(private readonly spotsService: SpotsService) {}

  @Post()
  create(
    @Body() criarLugarRequest: CriarLugarRequest,
    @Param('eventoId') eventoId: string
  ) {
    return this.spotsService.create({
      eventId: eventoId,
      name: criarLugarRequest.nome
    })
  }

  @Get()
  findAll(@Param('eventId') eventId: string) {
    return this.spotsService.findAll(eventId)
  }

  @Get(':spotId')
  findOne(@Param('id') spotId: string, @Param('eventId') eventId: string) {
    return this.spotsService.findOne(eventId, spotId)
  }

  @Patch(':spotId')
  update(
    @Param('id') spotId: string,
    @Param('eventId') eventId: string,
    @Body() atualizarLugarRequest: AtualizatLugarRequest
  ) {
    return this.spotsService.update(eventId, spotId, {
      name: atualizarLugarRequest.nome
    })
  }

  @Delete(':spotId')
  remove(@Param('id') spotId: string, @Param('eventId') eventId: string) {
    return this.spotsService.remove(eventId, spotId)
  }
}
