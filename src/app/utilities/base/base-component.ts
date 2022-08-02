import {
  AfterContentInit,
  AfterViewInit,
  Directive,
  OnChanges,
  OnInit,
  Input,
  SimpleChanges
} from "@angular/core";
import { User } from "@user/shared/models/user.model";
import { UserService } from "@user/shared/services/user.service";
import { UnSubOnDestroy } from "@utilities/abstract/unsubondestroy.abstract";
import { takeUntil } from "rxjs";

@Directive()
export class BaseComponent extends UnSubOnDestroy
  implements OnChanges, OnInit, AfterContentInit, AfterViewInit {

  constructor(...args: any[]) {
    super();
    args.forEach(arg => this.initial(arg));
  }

  protected user?: User;
  private $user?: UserService;

  ngOnChanges(changes: SimpleChanges): void {
    this.onChanges(changes);
  }

  ngOnInit(): void {
    if (this.$user) {
      this.$user.user$.pipe(takeUntil(this.onDestroy$)).subscribe(user => {
        this.user = user as User;
        this.onInit();
      });
    } else {
      this.onInit();
    }
  }
  ngAfterContentInit(): void {
    this.afterContentInit();
  }
  ngAfterViewInit(): void {
    this.afterViewInit();
  }

  protected onChanges(changes: SimpleChanges): void { }
  protected onInit(): void { }
  protected afterContentInit(): void { }
  protected afterViewInit(): void { }

  /**
   * @description 依照當前注入服務初始元件
   */
  private initial(arg: any): void {
    if (arg instanceof UserService) {
      this.$user = arg;
    }
  }

}
