import { DashboardComponent } from './dashboard/dashboard.component';
import { LightComponent } from './light/light.component';
import { StaticComponent } from './static/static.component';
import { NuevoComponent } from '../../seguimiento/containers/nuevo/nuevo.component';
import { NuevoSeguimientoComponent } from '@modules/seguimiento/containers/nuevo-seguimiento/nuevo-seguimiento.component';
import { ListaSeguimientoComponent } from '@modules/seguimiento/containers/lista-seguimiento/lista-seguimiento.component';
export const containers = [DashboardComponent, StaticComponent, LightComponent,NuevoComponent,NuevoSeguimientoComponent,ListaSeguimientoComponent];

export * from './dashboard/dashboard.component';
export * from './static/static.component';
export * from './light/light.component';
export * from '../../seguimiento/containers/nuevo/nuevo.component';
export * from '../../seguimiento/containers/nuevo-seguimiento/nuevo-seguimiento.component';
export * from '../../seguimiento/containers/lista-seguimiento/lista-seguimiento.component'