import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './../../../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  exports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
})
export class SharedmoduleModule {}
