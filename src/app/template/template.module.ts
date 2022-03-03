import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features/features.component';
import { FooterComponent } from './footer/footer.component';
import { KhonetextTeamComponent } from './khonetext-team/khonetext-team.component';
import { LeadingComment } from '@angular/compiler';
import { ModernPlatformComponent } from './modern-platform/modern-platform.component';
import { OurpartnersComponent } from './ourpartners/ourpartners.component';



@NgModule({
  declarations: [
    FeaturesComponent,
    // FooterComponent,
    KhonetextTeamComponent,
   
    ModernPlatformComponent,
    // OurpartnersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TemplateModule { }
