import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './page/full-screen-page/full-screen-page.component';
import { MarkersPageComponent } from './page/markers-page/markers-page.component';
import { PropertiesPageComponent } from './page/properties-page/properties-page.component';
import { ZoomPageComponent } from './page/zoom-page/zoom-page.component';
import * as mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { CounterAloneComponent } from '../alone/components/counter-alone/counter-alone.component';
import { SideMenuComponent } from '../alone/components/side-menu/side-menu.component';

(mapboxgl as any).accessToken =
  'pk.eyJ1IjoibW9vZmFycmlmIiwiYSI6ImNsbGQxemJycDA2ZTczZ255Y2s0cmdrYW0ifQ.LvwfobEj6A3qLECqnoJ8bg';

@NgModule({
  declarations: [
    FullScreenPageComponent,
    MapsLayoutComponent,
    MarkersPageComponent,
    MiniMapComponent,
    MiniMapComponent,
    PropertiesPageComponent,
    ZoomPageComponent,
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    CounterAloneComponent,
    SideMenuComponent,
  ],
})
export class MapsModule {}
