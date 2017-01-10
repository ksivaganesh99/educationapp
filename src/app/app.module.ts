import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegistrationPage } from '../pages/registration/registration';
import { LoginPage } from '../pages/login/login';
import { SubjectsPage } from '../pages/subjects/subjects';
import { TabsPage } from '../pages/tabs/tabs';
import { FindyourselfPage } from '../pages/findyourself/findyourself';
import { MinddiversionPage } from '../pages/minddiversion/minddiversion';
import { SciencePage } from '../pages/science/science';
import { MathschaptersPage } from '../pages/mathschapters/mathschapters';
import { MathsvideostestsPage } from '../pages/mathsvideostests/mathsvideostests';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistrationPage,
    LoginPage,
    SubjectsPage,
    TabsPage,
    FindyourselfPage,
    MinddiversionPage,
    SciencePage,
    MathschaptersPage,
    MathsvideostestsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegistrationPage,
    LoginPage,
    SubjectsPage,
    TabsPage,
    FindyourselfPage,
    MinddiversionPage,
    SciencePage,
    MathschaptersPage,
    MathsvideostestsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
