"use strict";(self.webpackChunkaetherAI_home_challenge=self.webpackChunkaetherAI_home_challenge||[]).push([[881],{9881:(he,b,c)=>{c.r(b),c.d(b,{TodoListModule:()=>ge});var u=c(6895),C=c(2038),p=c(7596),M=c(6418),d=(()=>{return(t=d||(d={}))[t.FetchTodoList=1]="FetchTodoList",t[t.SubmitTodo=2]="SubmitTodo",t[t.EditTodo=3]="EditTodo",t[t.DeleteTodo=4]="DeleteTodo",d;var t})(),g=(()=>{return(t=g||(g={})).AscendingByCreateTime="\u5efa\u7acb\u6642\u9593\u7531\u820a\u81f3\u65b0",t.DescendingByCreateTime="\u5efa\u7acb\u6642\u9593\u7531\u65b0\u81f3\u820a",g;var t})();class O{constructor(i){Object.assign(this,i)}get status(){return this.completed?p.ob.Closed:p.ob.Active}get statusText(){return this.completed?"\u5df2\u5b8c\u6210":"\u672a\u5b8c\u6210"}getTodoInput(){return{id:this.id,title:this.title,completed:this.completed||!1,createDate:this.createDate||M.k.currentDateTime,description:this.description||""}}}var h=c(8249),a=c(4006);class x extends h.H{constructor(i,n){super(),this.$overlay=i,this.dialog=n}get id(){return this.dialog.id}get params(){return this.dialog.params}get callbacks(){return this.params.callbacks}get config(){return this.params.config}get options(){return this.params.options}get size(){return p.vQ}cancel(i){this.params?.callbacks?.cancel&&this.params?.callbacks?.cancel(i),this.$overlay.closeDialog(this.dialog)}confirm(i){this.params?.callbacks?.confirm&&this.params?.callbacks?.confirm(i),this.$overlay.closeDialog(this.dialog)}close(){this.$overlay.closeDialog(this.dialog)}}var e=c(4650),m=c(8832),w=c(6630),S=c(5043),B=c(7031);let _=(()=>{class t extends class v{constructor(i){this.$logger=i}fireEvent(i){return this.$logger.debugMessage(`${this.featureName} event ${i.action} has been triggered.`),this.resolveAction(i).then(n=>n)}}{constructor(n,o){super(n),this.$userCenter=o,this.featureName="TodoList"}resolveAction({action:n,input:o,uid:r}){return new Promise(s=>{switch(n){case d.FetchTodoList:this.$userCenter.fetchUser(r).then(({todoList:l})=>s(l));break;case d.SubmitTodo:this.$userCenter.fetchUser(r).then(l=>{l.todoList.push(o),s(this.$userCenter.updateUserProfile(l,l.uid))});break;case d.EditTodo:this.$userCenter.fetchUser(r).then(l=>{l.todoList=l.todoList.map(f=>f.id===o.id?o:f),s(this.$userCenter.updateUserProfile(l,l.uid))});break;case d.DeleteTodo:this.$userCenter.fetchUser(r).then(l=>{l.todoList=l.todoList.filter(({id:f})=>f!==o.id),s(this.$userCenter.updateUserProfile(l,l.uid))})}})}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(S.m),e.LFG(B.q))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const I=["*"];let P=(()=>{class t{constructor(){this.OnClick=new e.vpe,this.size=p.vQ.Middle,this.type="button"}onClick(n){n.stopPropagation(),this.OnClick.emit()}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-button"]],inputs:{size:"size",white:"white",gray:"gray",disabled:"disabled",fullWidth:"fullWidth",type:"type"},outputs:{OnClick:"OnClick"},ngContentSelectors:I,decls:2,vars:11,consts:[[3,"type","disabled","click"]],template:function(n,o){1&n&&(e.F$t(),e.TgZ(0,"button",0),e.NdJ("click",function(s){return o.onClick(s)}),e.Hsn(1),e.qZA()),2&n&&(e.Gre("Button Button--",o.size,""),e.ekj("w-100",void 0!==o.fullWidth)("Button--white",void 0!==o.white)("Button--gray",void 0!==o.gray),e.Q6J("type",o.type)("disabled",void 0!==o.disabled&&!1!==o.disabled))},styles:['[upload][_nghost-%COMP%]   button[_ngcontent-%COMP%]:before{content:"\\e929";font-family:icomoon!important;display:inline-block;color:#fff}[download][_nghost-%COMP%]   button[_ngcontent-%COMP%]:before{content:"\\e937";font-family:icomoon!important;display:inline-block;color:#fff}[import][_nghost-%COMP%]   button[_ngcontent-%COMP%]:before{content:"\\e955";font-family:icomoon!important;display:inline-block;color:#fff}[add][_nghost-%COMP%]   button[_ngcontent-%COMP%]:before{content:"\\e906";font-family:icomoon!important;display:inline-block;color:#fff}[sent][_nghost-%COMP%]   button[_ngcontent-%COMP%]:before{content:"\\e904";font-family:icomoon!important;display:inline-block;color:#fff}[agree][_nghost-%COMP%]   button[_ngcontent-%COMP%]:before{content:"\\e94c";font-family:icomoon!important;display:inline-block;color:#fff}[reject][_nghost-%COMP%]   button[_ngcontent-%COMP%]:before{content:"\\e94b";font-family:icomoon!important;display:inline-block;color:#fff}[reload][_nghost-%COMP%]   button[_ngcontent-%COMP%]:before{content:"\\e901";font-family:icomoon!important;display:inline-block;color:#fff}[copy][_nghost-%COMP%]   button[_ngcontent-%COMP%]:before{content:"\\e936";font-family:icomoon!important;display:inline-block;color:#fff}[buyback][_nghost-%COMP%]   button[_ngcontent-%COMP%]:before{content:"\\e843";font-family:icomoon!important;display:inline-block;color:#fff}[file][_nghost-%COMP%]   button[_ngcontent-%COMP%]:before{content:"\\e95e";font-family:icomoon!important;display:inline-block;color:#fff}[delete_cut][_nghost-%COMP%]   button[_ngcontent-%COMP%]:before{content:"\\e921";font-family:icomoon!important;display:inline-block;color:#fff}[edit][_nghost-%COMP%]   button[_ngcontent-%COMP%]:before{content:"\\e935";font-family:icomoon!important;display:inline-block;color:#fff}[_nghost-%COMP%]{display:inline-block}.Button[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center;background-color:#00a3b4;color:#fff;border:none;border-radius:3px;white-space:nowrap}.Button[_ngcontent-%COMP%]:empty{display:none}.Button[_ngcontent-%COMP%]:hover{background-color:#037f8c}.Button[_ngcontent-%COMP%]:focus{outline:none}.Button[_ngcontent-%COMP%]:disabled{background-color:#c4cdd5;cursor:not-allowed}.Button[_ngcontent-%COMP%]:before{margin-right:.5rem}.Button--lg[_ngcontent-%COMP%]{padding:0 3.5rem;font-size:1rem;height:3rem}.Button--md[_ngcontent-%COMP%]{font-size:.875rem;height:2.5rem;padding:0 1rem}.Button--sm[_ngcontent-%COMP%]{font-size:.875rem;height:2rem;padding:0 1rem}.Button--white[_ngcontent-%COMP%]{border:1px solid #00a3b4;color:#00a3b4;background-color:#fff}.Button--white[_ngcontent-%COMP%]:hover{background-color:#fff;border-color:#037f8c;color:#037f8c}.Button--white[_ngcontent-%COMP%]:disabled{background-color:#fff;border-color:#c4cdd5;color:#c4cdd5;cursor:not-allowed}.Button--white[_ngcontent-%COMP%]:before{color:#00a3b4!important}.Button--gray[_ngcontent-%COMP%]{border:1px solid #c4cdd5;background-color:#fff;color:#637381}.Button--gray[_ngcontent-%COMP%]:hover{background-color:#fff;border-color:#c4cdd5;color:#637381}.Button--gray[_ngcontent-%COMP%]:disabled{background-color:#fff;border-color:#c4cdd5;color:#c4cdd5;cursor:not-allowed}.Button--gray[_ngcontent-%COMP%]:before{color:#637381!important}']}),t})();function Z(t){return{provide:a.JU,useExisting:(0,e.Gpc)(()=>t),multi:!0}}let A=(()=>{class t extends h.H{constructor(){super(),this.disabled=!1,this.firstChange=!0}writeValue(n){this.model=n,this.onModelChanged({value:n,isFirstChange:this.firstChange}),this.firstChange=!1}registerOnChange(n){this.onChange=n}registerOnTouched(){}setDisabledState(n){this.disabled=n}notifyValueChange(n){this.onChange&&this.onChange("boolean"==typeof n?n:n||this.model)}onModelChanged({}){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),t})();const D=["*"];let F=(()=>{class t extends A{constructor(){super()}get id(){return this.name?`switch-btn-${this.name}`:"switch-btn"}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-switch-button"]],inputs:{name:"name"},features:[e._Bn([Z(t)]),e.qOj],ngContentSelectors:D,decls:5,vars:4,consts:[[1,"SwitchButton"],["type","checkbox",3,"disabled","ngModel","id","ngModelChange"],[3,"for"]],template:function(n,o){1&n&&(e.F$t(),e.TgZ(0,"section",0)(1,"input",1),e.NdJ("ngModelChange",function(s){return o.model=s})("ngModelChange",function(){return o.notifyValueChange()}),e.qZA(),e._UZ(2,"label",2),e.TgZ(3,"p"),e.Hsn(4),e.qZA()()),2&n&&(e.xp6(1),e.Q6J("disabled",o.disabled)("ngModel",o.model)("id",o.id),e.xp6(1),e.Q6J("for",o.id))},dependencies:[a.Wl,a.JJ,a.On],styles:['.SwitchButton[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}.SwitchButton[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:none}.SwitchButton[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{background-color:#00a3b4}.SwitchButton[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:before{transform:translateY(-50%) translate(20px)}.SwitchButton[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:after{content:"\\e94c";right:auto;left:3px;line-height:12px;transform:translateY(-50%)}.SwitchButton[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled + label[_ngcontent-%COMP%]{background-color:#c4cdd5;cursor:not-allowed}.SwitchButton[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{height:20px;width:40px;background-color:#919eab;border-radius:14.5px;cursor:pointer;position:relative;transition:.3s}.SwitchButton[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:before{content:"";display:block;position:absolute;background-color:#fff;border-radius:100%;width:14px;height:14px;top:50%;left:3px;transform:translateY(-50%);transition:.3s}.SwitchButton[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:after{content:"\\e94b";font-family:icomoon!important;display:inline-block;color:#fff;font-size:10px;display:block;position:absolute;line-height:10px;top:50%;right:3px;transform:translateY(-50%) scale(.8)}.SwitchButton[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:empty){margin-left:1rem;font-size:.875rem;line-height:20px}']}),t})();function z(t,i){1&t&&e._UZ(0,"app-switch-button",9)}let y=(()=>{class t extends x{constructor(n,o,r,s){super(n,o),this.fb=r,this.$feature=s,this.form=this.fb.group({id:`${this.uid}${M.k.currentDateTime}`,title:[null,a.kI.required],description:[null],completed:!1})}get uid(){return this.params.config.user.uid}get todo(){return this.params.config.todo}onInit(){this.todo?this.initialForm(this.todo):this.form.controls.completed.disable()}submit(){console.log(this.form.value),this.$feature.fireEvent({action:this.todo?d.EditTodo:d.SubmitTodo,input:this.todo?{...this.todo.getTodoInput(),...this.form.getRawValue()}:new O(this.form.getRawValue()).getTodoInput(),uid:this.uid}).then(()=>this.confirm())}autoResized(n){const o=n;o.style.height="80px",o.style.height=`${o.scrollHeight>140?140:o.scrollHeight}px`,o.scrollHeight>80&&o.classList.add("scroll-bar")}initialForm({id:n,title:o,description:r,completed:s}){this.form.setValue({id:n,title:o,description:r,completed:s}),this.form.markAllAsTouched()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(m.F),e.Y36(w.a),e.Y36(a.qu),e.Y36(_))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-add-todo-dialog"]],features:[e.qOj],decls:15,vars:6,consts:[[3,"close"],["title","",1,"d-flex","flex-row","align-items-center",3,"formGroup"],["formControlName","completed","class","d-block ms-4",4,"ngIf"],[3,"formGroup"],["formControlName","title","type","text",1,"form-control"],[1,"mt-4"],["formControlName","description",1,"form-control",3,"input"],["footer","",1,"d-flex","flex-row-reverse","align-items-center","px-4","bg-light"],[3,"disabled","size","OnClick"],["formControlName","completed",1,"d-block","ms-4"]],template:function(n,o){1&n&&(e.TgZ(0,"app-dialog",0),e.NdJ("close",function(){return o.close()}),e.TgZ(1,"nav",1)(2,"h2"),e._uU(3),e.qZA(),e.YNc(4,z,1,0,"app-switch-button",2),e.qZA(),e.TgZ(5,"form",3)(6,"h3"),e._uU(7,"\u6a19\u984c"),e.qZA(),e._UZ(8,"input",4),e.TgZ(9,"h3",5),e._uU(10,"\u6558\u8ff0"),e.qZA(),e.TgZ(11,"textarea",6),e.NdJ("input",function(s){return o.autoResized(s.target)}),e.qZA()(),e.TgZ(12,"footer",7)(13,"app-button",8),e.NdJ("OnClick",function(){return o.submit()}),e._uU(14,"\u9001\u51fa"),e.qZA()()()),2&n&&(e.xp6(1),e.Q6J("formGroup",o.form),e.xp6(2),e.Oqu(o.todo?"\u7de8\u8f2f\u4ee3\u8fa6\u4e8b\u9805":"\u65b0\u589e\u4ee3\u8fa6\u4e8b\u9805"),e.xp6(1),e.Q6J("ngIf",o.form.controls.completed.enabled),e.xp6(1),e.Q6J("formGroup",o.form),e.xp6(8),e.Q6J("disabled",o.form.invalid)("size",o.sizes.Small))},dependencies:[u.O5,w.a,P,F,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u],styles:["textarea[_ngcontent-%COMP%]{display:block;width:100%;min-height:80px;max-height:140px;font-size:.75rem}textarea[_ngcontent-%COMP%]::placeholder{color:#0003;font-size:.75rem}footer[_ngcontent-%COMP%]{height:4rem}"]}),t})();var k=c(9065),E=c(294);class T extends h.H{constructor(i){super(i),this.isOpen=!1,this.e=this.detectBlurEvent.bind(this)}detectBlurEvent(i){this.menu.contains(i.target)||this.collapse()}expand(i,n){n&&n.stopPropagation(),this.menu=i,this.isOpen=!0,addEventListener("click",this.e),this.onExpand()}collapse(i){removeEventListener("click",this.e),i&&i.blur(),this.isOpen=!1,this.menu&&this.onClose()}onClose(){}onExpand(){}}const J=["tmenu"],$=function(t){return{right:t}};function L(t,i){if(1&t&&(e.TgZ(0,"div",3,4),e.Hsn(2,1),e.qZA()),2&t){const n=e.oxw();e.Q6J("ngStyle",e.VKq(1,$,n.isRight?"0px":""))}}const N=[[["","placeholder",""]],[["","menu",""]]],U=["[placeholder]","[menu]"];let H=(()=>{class t extends T{constructor(){super(),this.OnClose=new e.vpe,this.size=p.vQ.Middle,this.isRight=!1}close(n){n.blur(),this.collapse()}onClose(){this.OnClose.emit()}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-dropdown"]],viewQuery:function(n,o){if(1&n&&e.Gf(J,5),2&n){let r;e.iGM(r=e.CRH())&&(o.tmenu=r.first)}},inputs:{fullWidth:"fullWidth",disabled:"disabled",autoHeight:"autoHeight",alert:"alert",size:"size"},outputs:{OnClose:"OnClose"},features:[e.qOj],ngContentSelectors:U,decls:5,vars:11,consts:[[3,"disabled","click"],["tDropdown",""],["class","Dropdown__Menu scroll-bar",3,"ngStyle",4,"ngIf"],[1,"Dropdown__Menu","scroll-bar",3,"ngStyle"],["tmenu",""]],template:function(n,o){if(1&n){const r=e.EpF();e.F$t(N),e.TgZ(0,"div")(1,"button",0,1),e.NdJ("click",function(){e.CHM(r);const l=e.MAs(2);return e.KtG(o.isOpen?o.close(l):o.expand(l))}),e.Hsn(3),e.qZA(),e.YNc(4,L,3,3,"div",2),e.qZA()}2&n&&(e.Gre("Dropdown ",o.size,""),e.ekj("w-100",void 0!==o.fullWidth)("Dropdown--alert",o.alert),e.xp6(1),e.ekj("h-auto",void 0!==o.autoHeight),e.Q6J("disabled",void 0!==o.disabled&&!1!==o.disabled),e.xp6(3),e.Q6J("ngIf",o.isOpen))},dependencies:[u.O5,u.PC],styles:['.Dropdown[_ngcontent-%COMP%]{display:inline-flex;position:relative;flex-direction:column}.Dropdown[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{height:2.5rem;display:flex;justify-content:center;align-items:center;justify-content:space-between;outline:none;border:0;background-color:inherit;font-size:.875rem;border:1px solid #c4cdd5;border-radius:3px;color:#212b36;background-color:#fff;padding:.5rem 1rem;width:100%}.Dropdown[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:after{line-height:100%;content:"\\e917";font-family:icomoon!important;display:inline-block;color:#212b36;margin-left:.25rem;transition:.25s;font-size:.875rem}.Dropdown[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:focus:after{transform:rotate(-180deg);transition:.25s}.Dropdown[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:focus{border-color:#00a3b4}.Dropdown[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:disabled{color:#637381;border:1px solid #dfe3e8;border-radius:3px;background-color:#f4f6f8;cursor:not-allowed}.Dropdown[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]  p{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:1;-webkit-box-orient:vertical}.Dropdown[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:after{margin-left:.5rem}.Dropdown--alert[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{border-color:#d80238}.Dropdown__Menu[_ngcontent-%COMP%]{box-shadow:0 2px 5px #63738133,0 6px 14px #6373811a,0 24px 24px #6373810a;border:1px solid rgba(99,115,129,.1);z-index:5;position:absolute;top:calc(100% + .25rem);min-width:100%;max-height:220px;width:auto;background-color:#fff;padding:.25rem 0}.Dropdown__Menu[_ngcontent-%COMP%] >button{display:flex;flex-direction:row;align-items:center;padding:0 1rem;height:2.5rem;text-align:left;width:100%;outline:none;border:none;background-color:inherit}.Dropdown__Menu[_ngcontent-%COMP%] >button:hover{background-color:#f4f6f8}.Dropdown__Menu[_ngcontent-%COMP%] >button:disabled{color:#637381;border:1px solid #dfe3e8;border-radius:3px;background-color:#f4f6f8}.sm[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{padding:0 1rem;height:2rem}.lg[_ngcontent-%COMP%] > .Dropdown__Menu[_ngcontent-%COMP%]{padding:0}.lg[_ngcontent-%COMP%] > .Dropdown__Menu[_ngcontent-%COMP%] >button{height:auto;padding:1rem 1.5rem}']}),t})(),Y=(()=>{class t{constructor(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-empty"]],decls:4,vars:0,consts:[[1,"Empty"],["src","assets/images/empty.png","alt",""]],template:function(n,o){1&n&&(e.TgZ(0,"div",0),e._UZ(1,"img",1),e.TgZ(2,"p"),e._uU(3,"\u67e5\u7121\u8cc7\u6599"),e.qZA()())},styles:[".Empty[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:column;padding:3rem}.Empty[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:8.54rem;width:8.54rem}"]}),t})();var j=c(8372),q=c(2722),Q=c(7579);function G(t,i){if(1&t&&(e.TgZ(0,"h3"),e._uU(1),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Oqu(n.title)}}function R(t,i){1&t&&e._UZ(0,"em",8)}function W(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"em",9),e.NdJ("click",function(r){e.CHM(n);const s=e.oxw();return e.KtG(s.clear(r))}),e.qZA()}}function X(t,i){1&t&&(e.TgZ(0,"div",10),e.Hsn(1,1),e.qZA())}function V(t,i){1&t&&e.Hsn(0,2,["*ngIf","this.alert"])}const K=[[["","hint",""]],[["","dropdown-menu",""]],[["","alert",""]]],ee=["[hint]","[dropdown-menu]","[alert]"];let te=(()=>{class t extends T{constructor(){super(),this.OnChange=new e.vpe,this.OnBlur=new e.vpe,this.OnClear=new e.vpe,this.id="",this.value="",this.debounceTime=0,this.isShowClear=!1,this.input=new Q.x,this.keyword$=this.input.asObservable()}get keyword(){return this.value}set keyword(n){this.input.next(n)}get filterMode(){return void 0!==this.filter&&!1!==this.filter}get showClearButton(){return void 0!==this.clearButton&&!1!==this.clearButton}get isShowSearch(){return(!this.value||this.filterMode&&!this.selected)&&!this.isShowClear}onChanges(n){"selected"in n&&(this.value=n.selected.currentValue,this.collapse())}onInit(){this.keyword$.pipe((0,j.b)(this.debounceTime),(0,q.R)(this.onDestroy$)).subscribe(n=>{this.value=n,this.OnChange.emit(this.value)})}clear(n){n.stopPropagation(),this.filterMode&&(this.selected=null),this.showClearButton&&this.collapse(),this.value="",this.OnClear.emit(),this.OnChange.emit(this.value)}onBlur(){this.selected&&this.filterMode||this.OnBlur.next(this.value)}onExpand(){this.showClearButton&&(this.isShowClear=!0)}onClose(){this.showClearButton&&(this.isShowClear=!1)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-search-input"]],inputs:{id:"id",placeholder:"placeholder",title:"title",value:"value",debounceTime:"debounceTime",selected:"selected",clearButton:"clearButton",filter:"filter",alert:"alert"},outputs:{OnChange:"OnChange",OnBlur:"OnBlur",OnClear:"OnClear"},features:[e.qOj],ngContentSelectors:ee,decls:11,vars:11,consts:[[1,"SearchInput"],[4,"ngIf"],[1,"SearchInput__Input"],["tDropdown",""],["type","text",1,"form-control",3,"id","disabled","ngModel","placeholder","blur","click","ngModelChange"],["class","icon-search1",4,"ngIf","ngIfElse"],["tSelectItem",""],["class","SearchInput__Menu",4,"ngIf"],[1,"icon-search1"],[1,"icon-delete","gray-blue",3,"click"],[1,"SearchInput__Menu"]],template:function(n,o){if(1&n){const r=e.EpF();e.F$t(K),e.TgZ(0,"div",0),e.YNc(1,G,2,1,"h3",1),e.TgZ(2,"div",2,3)(4,"input",4),e.NdJ("blur",function(){return o.onBlur()})("click",function(){e.CHM(r);const l=e.MAs(3);return e.KtG(o.expand(l))})("ngModelChange",function(l){return o.keyword=l}),e.qZA(),e.YNc(5,R,1,0,"em",5),e.YNc(6,W,1,0,"ng-template",null,6,e.W1O),e.YNc(8,X,2,0,"div",7),e.YNc(9,V,1,0,"ng-content",1),e.Hsn(10),e.qZA()()}if(2&n){const r=e.MAs(7);e.xp6(1),e.Q6J("ngIf",o.title),e.xp6(1),e.ekj("SearchInput__Input--alert",o.alert),e.xp6(2),e.Q6J("id",o.id)("disabled",!!o.selected)("ngModel",o.keyword)("placeholder",o.placeholder),e.xp6(1),e.Q6J("ngIf",o.isShowSearch)("ngIfElse",r),e.xp6(3),e.Q6J("ngIf",o.isOpen&&o.filterMode),e.xp6(1),e.Q6J("ngIf",o.alert)}},dependencies:[a.Fj,a.JJ,a.On,u.O5],styles:["[hide-search][_nghost-%COMP%]   em.icon-search1[_ngcontent-%COMP%]{display:none}.gray-blue[_ngcontent-%COMP%]{color:#919eab!important}.SearchInput[_ngcontent-%COMP%]{width:100%;-webkit-user-select:none;user-select:none}.SearchInput__Input[_ngcontent-%COMP%]{position:relative;width:100%}.SearchInput__Input[_ngcontent-%COMP%] > em[_ngcontent-%COMP%]{position:absolute;right:1rem;top:.625rem;font-size:1.25rem;z-index:2;cursor:pointer;color:#212b36}.SearchInput__Input[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{width:100%;padding-right:2.25rem}.SearchInput__Input--alert[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{border-color:#d80238}.SearchInput__Input--alert[_ngcontent-%COMP%] > input[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:focus{border-color:#d80238}.SearchInput__Menu[_ngcontent-%COMP%]{position:absolute;top:calc(100% + .25rem);box-shadow:0 2px 5px #63738133,0 6px 14px #6373811a,0 24px 24px #6373810a;border:1px solid rgba(99,115,129,.1);background-color:#fff;width:100%;z-index:3}.SearchInput__Menu[_ngcontent-%COMP%]  ul{max-height:10rem;width:100%;overflow:auto}.SearchInput__Menu[_ngcontent-%COMP%]  ul::-webkit-scrollbar{width:.375rem;height:.375rem;margin-left:6px}.SearchInput__Menu[_ngcontent-%COMP%]  ul::-webkit-scrollbar-thumb{background:#dfe3e8;border-radius:10px}.SearchInput__Menu[_ngcontent-%COMP%]  ul li{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:1;-webkit-box-orient:vertical;cursor:pointer;padding:0 1rem;height:2.5rem;font-size:.875rem;line-height:2.5rem}.SearchInput__Menu[_ngcontent-%COMP%]  ul li:hover{color:#00a3b4;background-color:#f4f6f8}.SearchInput__Menu[_ngcontent-%COMP%]  ul:not(:last-child){border-bottom:1px solid #dfe3e8}.SearchInput__Menu[_ngcontent-%COMP%]  .group{max-height:15rem;overflow:auto}.SearchInput__Menu[_ngcontent-%COMP%]  .group::-webkit-scrollbar{width:.375rem;height:.375rem;margin-left:6px}.SearchInput__Menu[_ngcontent-%COMP%]  .group::-webkit-scrollbar-thumb{background:#dfe3e8;border-radius:10px}.SearchInput__Menu[_ngcontent-%COMP%]  .group h2{color:#00a3b4;font-size:.875rem;padding:.8rem 1rem;margin-bottom:0}.SearchInput__Menu[_ngcontent-%COMP%]  .group>ul{max-height:none}.SearchInput__Menu[_ngcontent-%COMP%]  .group>ul li{height:auto;display:flex;flex-direction:column;padding:.5rem 1rem}.SearchInput__Menu[_ngcontent-%COMP%]  .group>ul li p{color:#212b36;font-size:.875rem;line-height:1.5rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:1;-webkit-box-orient:vertical;margin-bottom:0}.SearchInput__Menu[_ngcontent-%COMP%]  .no-result:hover{color:#212b36!important;background-color:#fff!important;cursor:auto}"]}),t})();const ne=["*"];let oe=(()=>{class t{constructor(){this.status=p.ob.Active,this.theme="light"}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-status"]],inputs:{status:"status",theme:"theme"},ngContentSelectors:ne,decls:2,vars:4,template:function(n,o){1&n&&(e.F$t(),e.TgZ(0,"span"),e.Hsn(1),e.qZA()),2&n&&e.MT6("",o.theme," ",o.status,"")},styles:["span[_ngcontent-%COMP%]{white-space:nowrap}.dark.active[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;display:inline-block;line-height:1.5rem;font-size:.875rem;color:#fff;background-color:#3ea603;padding:0 .5rem;border-radius:3px}.dark.closed[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;display:inline-block;line-height:1.5rem;font-size:.875rem;color:#fff;background-color:#e79a1a;padding:0 .5rem;border-radius:3px}.dark.canceled[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;display:inline-block;line-height:1.5rem;font-size:.875rem;color:#fff;background-color:#637381;padding:0 .5rem;border-radius:3px}.dark.wait[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;display:inline-block;line-height:1.5rem;font-size:.875rem;color:#fff;background-color:#9e3206;padding:0 .5rem;border-radius:3px}.light.active[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;display:inline-block;line-height:1.5rem;font-size:.875rem;color:#3ea603;background-color:#edf7e4;padding:0 .5rem;border-radius:3px}.light.closed[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;display:inline-block;line-height:1.5rem;font-size:.875rem;color:#e79a1a;background-color:#fef4e7;padding:0 .5rem;border-radius:3px}.light.canceled[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;display:inline-block;line-height:1.5rem;font-size:.875rem;color:#637381;background-color:#f4f6f8;padding:0 .5rem;border-radius:3px}.light.wait[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;display:inline-block;line-height:1.5rem;font-size:.875rem;color:#9e3206;background-color:#f2eae0;padding:0 .5rem;border-radius:3px}"]}),t})();var ie=c(1481);let re=(()=>{class t{constructor(n){this.sanitized=n}transform(n){return this.sanitized.bypassSecurityTrustHtml(n)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(ie.H7,16))},t.\u0275pipe=e.Yjl({name:"sanitize",type:t,pure:!0}),t})(),se=(()=>{class t extends h.H{constructor(n,o,r){super(n),this.$feature=o,this.$overlay=r,this.refresh=new e.vpe}formatDescriptionHtml(n){return n?n.replace(/\n/g,"<br>").replace(/\s/g,"&nbsp"):"-"}edit(){this.$overlay.toggleDialog(y,{size:this.sizes.Large,config:{user:this.user,todo:this.todo},callbacks:{confirm:()=>this.refresh.emit()}})}delete(){this.$feature.fireEvent({action:d.DeleteTodo,uid:this.user.uid,input:{id:this.todo.id}}).then(()=>this.refresh.emit())}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(k.K),e.Y36(_),e.Y36(m.F))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-todo-card"]],inputs:{todo:"todo"},outputs:{refresh:"refresh"},features:[e.qOj],decls:14,vars:6,consts:[[1,"d-flex","flex-row","align-items-top","justify-content-between","p-4"],[1,"d-flex","flex-row","align-items-top"],[1,"me-4"],[3,"status"],[1,"d-flex","flex-row","align-items-center"],["href","javascript:void(0)",3,"click"],[1,"p-4"],[3,"innerHtml"]],template:function(n,o){1&n&&(e.TgZ(0,"header",0)(1,"nav",1)(2,"h2",2),e._uU(3),e.qZA(),e.TgZ(4,"app-status",3),e._uU(5),e.qZA()(),e.TgZ(6,"nav",4)(7,"a",5),e.NdJ("click",function(){return o.edit()}),e._uU(8,"\u7de8\u8f2f"),e.qZA(),e.TgZ(9,"a",5),e.NdJ("click",function(){return o.delete()}),e._uU(10,"\u522a\u9664"),e.qZA()()(),e.TgZ(11,"section",6),e._UZ(12,"p",7),e.ALo(13,"sanitize"),e.qZA()),2&n&&(e.xp6(3),e.Oqu(o.todo.title),e.xp6(1),e.Q6J("status",o.todo.status),e.xp6(1),e.hij(" ",o.todo.statusText," "),e.xp6(7),e.Q6J("innerHtml",e.lcZ(13,4,o.formatDescriptionHtml(o.todo.description)),e.oJD))},dependencies:[oe,re],styles:["[_nghost-%COMP%]{display:block;box-shadow:0 1px 2px #eceef199;border:1px solid #eceef1;border-radius:3px;background-color:#fff}header[_ngcontent-%COMP%]{box-shadow:inset 0 -1px #dfe3e8}h2[_ngcontent-%COMP%]{word-break:break-all;max-width:200px}a[_ngcontent-%COMP%]{text-decoration:none}a[_ngcontent-%COMP%]:not(:last-of-type){margin-right:1.5rem}p[_ngcontent-%COMP%]{overflow:auto;max-height:20rem;word-break:break-all}p[_ngcontent-%COMP%]::-webkit-scrollbar{width:.375rem;height:.375rem;margin-left:6px}p[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#dfe3e8;border-radius:10px}@media screen and (max-width: 767px){h2[_ngcontent-%COMP%]{max-width:60px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:1;-webkit-box-orient:vertical}}"]}),t})();function le(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"li")(1,"app-todo-card",14),e.NdJ("refresh",function(){e.CHM(n);const r=e.oxw(2);return e.KtG(r.refetch())}),e.qZA()()}if(2&t){const n=i.$implicit;e.xp6(1),e.Q6J("todo",n)}}function ce(t,i){if(1&t&&(e.TgZ(0,"ul",12),e.YNc(1,le,2,1,"li",13),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngForOf",n.todos)}}function ae(t,i){1&t&&e._UZ(0,"app-empty")}const de=[{path:"",component:(()=>{class t extends h.H{constructor(n,o,r,s){super(n),this.$overlay=o,this.$feature=r,this.$window=s,this.datas=[]}get sortingType(){return g}get todos(){const n=this.filter?this.datas.filter(({title:o})=>o.includes(this.filter)):this.datas;return this.sorting?n.sort((o,r)=>this.sorting===g.AscendingByCreateTime?o.createDate>r.createDate?1:-1:o.createDate>r.createDate?-1:1):n}onInit(){this.refetch()}setFilter(n){this.filter=n,this.$window.scrollTo(0)}setSorting(n){this.sorting=n,this.$window.scrollTo(0)}toggleAddTodoDialog(){this.$overlay.toggleDialog(y,{config:{user:this.user},size:this.sizes.Large,callbacks:{confirm:()=>this.refetch()}})}refetch(){this.$feature.fireEvent({action:d.FetchTodoList,uid:this.user.uid}).then(n=>{this.datas=n.map(o=>new O(o)),this.$window.scrollTo(0)})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(k.K),e.Y36(m.F),e.Y36(_),e.Y36(E.u))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-todo-list-page"]],features:[e.qOj],decls:19,vars:8,consts:[["page-title",""],["page-container",""],[1,"p-4","pt-0"],[1,"d-flex","flex-md-row","flex-column","align-items-top","justify-content-between"],[1,"d-flex","flex-md-row","flex-column","align-items-center","flex-wrap"],[1,"d-block","me-md-4","me-0","mt-4",3,"debounceTime","placeholder","OnChange"],[1,"d-block","mt-4",3,"fullWidth"],["placeholder",""],["menu","",1,"text-nowrap",3,"click"],["add","",1,"d-block","mt-4",3,"OnClick"],["class","mt-3",4,"ngIf","ngIfElse"],["tEmpty",""],[1,"mt-3"],[4,"ngFor","ngForOf"],[3,"todo","refresh"]],template:function(n,o){if(1&n&&(e.TgZ(0,"header",0),e._uU(1,"\u4ee3\u8fa6\u4e8b\u9805"),e.qZA(),e.TgZ(2,"section",1)(3,"div",2)(4,"nav",3)(5,"nav",4)(6,"app-search-input",5),e.NdJ("OnChange",function(s){return o.setFilter(s)}),e.qZA(),e.TgZ(7,"app-dropdown",6)(8,"p",7),e._uU(9),e.qZA(),e.TgZ(10,"button",8),e.NdJ("click",function(){return o.setSorting(o.sortingType.DescendingByCreateTime)}),e._uU(11),e.qZA(),e.TgZ(12,"button",8),e.NdJ("click",function(){return o.setSorting(o.sortingType.AscendingByCreateTime)}),e._uU(13),e.qZA()()(),e.TgZ(14,"app-button",9),e.NdJ("OnClick",function(){return o.toggleAddTodoDialog()}),e._uU(15,"\u65b0\u589e"),e.qZA()(),e.YNc(16,ce,2,1,"ul",10),e.qZA()(),e.YNc(17,ae,1,0,"ng-template",null,11,e.W1O)),2&n){const r=e.MAs(18);e.xp6(6),e.Q6J("debounceTime",300)("placeholder","\u8acb\u8f38\u5165\u6a19\u984c"),e.xp6(1),e.Q6J("fullWidth",!0),e.xp6(2),e.hij(" ",o.sorting||"\u6392\u5e8f\u65b9\u5f0f"," "),e.xp6(2),e.hij(" ",o.sortingType.DescendingByCreateTime," "),e.xp6(2),e.hij(" ",o.sortingType.AscendingByCreateTime," "),e.xp6(3),e.Q6J("ngIf",o.todos.length>0)("ngIfElse",r)}},dependencies:[u.sg,u.O5,H,P,Y,te,se],styles:["section[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-shadow:0 1px 2px #eceef199;border:1px solid #eceef1;border-radius:3px;background-color:#fff}li[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:1.5rem}@media screen and (max-width: 767px){app-search-input[_ngcontent-%COMP%]{width:100%}app-dropdown[_ngcontent-%COMP%]{width:100%}}"]}),t})()}];let ue=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[C.Bz.forChild(de),C.Bz]}),t})();var pe=c(6939);let ge=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.ez,ue,pe.m]}),t})()}}]);