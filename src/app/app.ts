import { Component, signal } from '@angular/core';
// import { Calculator } from './Components/calculator/calculator';
// import { ForLoop } from './Components/for-loop/for-loop';
// import { Parent } from './Components/parent/parent';
// import { Profile } from './Components/profile/profile';
// import { User } from './Components/user/user';
// import { ThemeToggler } from './Components/theme-toggler/theme-toggler';
// import { Events } from './Components/events/events';
// import { VideoPlayer } from './Components/video-player/video-player';
// import { Outer } from './Components/input-property/outer/outer';
// import { Navbar } from './portfolio-Components/navbar/navbar';
// import { Main } from './portfolio-Components/main/main';
// import { Signals } from './Components/signals/signals';
// import { IfElse } from './Components/if-else/if-else';
// import { SwitchCase } from './Components/switch-case/switch-case';
// import { TwoWayDataBinding } from './Components/two-way-data-binding/two-way-data-binding';
// import { SignalSetterGetter } from './Components/signal-setter-getter/signal-setter-getter';
// import { Outer } from './Components/input-property/outer/outer';
// import { ToDoList } from './To-Do-List/to-do-list';
// import { Directive } from './Components/directive/directive';
// import { UserDashboard } from './Dashboard/user-dashboard/user-dashboard';
// import { GreetingUser } from './ChildToParent/greeting-user/greeting-user';
import { ParentComp } from './Components/child-to-parent/parent-comp/parent-comp';

@Component({
  selector: 'app-root',
  // imports: [Outer, VideoPlayer, Calculator, ForLoop, Parent, Profile, ThemeToggler, User, Events],
  // imports: [Navbar, Main],
  // imports: [Signals],
  // imports: [Events],
  // imports: [IfElse],
  // imports: [ForLoop],
  // imports: [SwitchCase],
  // imports: [TwoWayDataBinding],
  // imports: [SignalSetterGetter],
  // imports: [Outer],
  // imports: [ToDoList],
  // imports: [Directive],
  // imports: [UserDashboard],
  // imports: [GreetingUser],
  imports: [ParentComp],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = signal('App');
}
