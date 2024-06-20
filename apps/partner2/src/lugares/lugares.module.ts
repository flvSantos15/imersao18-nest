import { Module } from '@nestjs/common'
import { SpotsCoreModule } from '@app/core/spots/spots-core.module'
import { SpotsController } from './lugares.controller'

@Module({
  imports: [SpotsCoreModule],
  controllers: [SpotsController]
})
export class LugaresModule {}
