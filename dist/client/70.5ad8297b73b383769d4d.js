"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[70],{2070:(O,d,i)=>{i.r(d),i.d(d,{UserModule:()=>w});var g=i(8583),c=i(6983),t=i(7716),h=i(5873);const q=function(){return["/Let's-get-started/login-account"]};let v=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-user-login"]],decls:23,vars:2,consts:[[1,"navbar","navbar-expand-lg","navbar-dark","bg-dark"],["href","#",1,"navbar-brand"],[1,"custom-h5-grub"],["type","button","data-toggle","collapse","data-target","#navbarNav","aria-controls","navbarNav","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarNav",1,"collapse","navbar-collapse"],[1,"navbar-nav"],[1,"nav-item"],["href","#",1,"nav-link"],[1,"sr-only"],[1,"nav-link",3,"routerLink"],["routerLink","./create-account",1,"nav-link"]],template:function(o,a){1&o&&(t.TgZ(0,"nav",0),t.TgZ(1,"a",1),t.TgZ(2,"h5"),t.TgZ(3,"b"),t.TgZ(4,"span",2),t._uU(5,"VEST"),t.qZA(),t._uU(6,"-IN"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"button",3),t._UZ(8,"span",4),t.qZA(),t.TgZ(9,"div",5),t.TgZ(10,"ul",6),t.TgZ(11,"li",7),t.TgZ(12,"a",8),t._uU(13,"Home "),t.TgZ(14,"span",9),t._uU(15,"(current)"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"li",7),t.TgZ(17,"a",10),t._uU(18,"Sign In"),t.qZA(),t.qZA(),t.TgZ(19,"li",7),t.TgZ(20,"a",11),t._uU(21,"Create Account"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t._UZ(22,"router-outlet")),2&o&&(t.xp6(17),t.Q6J("routerLink",t.DdM(1,q)))},directives:[h.M2,c.yS,c.lC],styles:[""]}),n})();var e=i(3679),f=i(3604),p=i(3065),_=i(7001),l=i(3738),s=i(8295),Z=i(9983),A=i(6627),T=i(1095);function x(n,r){1&n&&(t.TgZ(0,"span"),t._uU(1,"Field cannot be empty"),t.qZA())}function b(n,r){1&n&&(t.TgZ(0,"span"),t._uU(1," First Name should be at least 3 characters"),t.qZA())}function C(n,r){if(1&n&&(t.TgZ(0,"mat-error"),t.YNc(1,x,2,0,"span",10),t.YNc(2,b,2,0,"span",10),t.qZA()),2&n){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",o.userForm.controls.firstName.errors.required),t.xp6(1),t.Q6J("ngIf",o.userForm.controls.firstName.errors&&!o.userForm.controls.firstName.errors.required)}}function U(n,r){1&n&&(t.TgZ(0,"span"),t._uU(1,"Field cannot be empty"),t.qZA())}function y(n,r){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const o=t.oxw(2);t.xp6(1),t.hij(" ",o.userForm.controls.email.errors.emailError,"")}}function N(n,r){if(1&n&&(t.TgZ(0,"mat-error"),t.YNc(1,U,2,0,"span",10),t.YNc(2,y,2,1,"span",10),t.qZA()),2&n){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",o.userForm.controls.email.errors.required),t.xp6(1),t.Q6J("ngIf",o.userForm.controls.email.errors&&!o.userForm.controls.email.errors.required)}}function I(n,r){1&n&&t._UZ(0,"mat-error")}function M(n,r){if(1&n&&(t.TgZ(0,"p",18),t._uU(1),t.qZA()),2&n){const o=t.oxw();t.xp6(1),t.Oqu(o.errorMessage)}}const k=[{path:"",component:v,children:[{path:"create-account",component:(()=>{class n{constructor(o,a,m,u){this.fb=o,this.store=a,this.router=m,this._snackBar=u,this.hide=!0,this.userForm=this.fb.group({firstName:["",[e.kI.required,e.kI.minLength(3)]],lastName:["",[e.kI.required,e.kI.minLength(3)]],email:["",[e.kI.required,e.kI.email,this.validateEmail]],password:["",e.kI.compose([e.kI.required,e.kI.minLength(5),this.validatePwd])]})}validateEmail(o){return/^\S+@\S+$/.test(o.value)?null:{emailError:"Email is invalid"}}validatePwd(o){return/[a-zA-Z]*[0-9]{1}/.test(o.value)?null:{pwdError:"Password should have at least 1 number"}}createAccount(){this.userObj={firstName:this.userForm.value.firstName,email:this.userForm.value.email},this.userForm.valid?(this.store.dispatch((0,f.r4)({data:this.userForm.value})),this._snackBar.open("Registration successful! ","\u274e",{duration:2e3}),sessionStorage.setItem("loggedIn","true"),sessionStorage.setItem("firstName",this.userDetails.firstName),sessionStorage.setItem("email",this.userDetails.email)):this._snackBar.open("One or more fields are invalid. Try again ","\u274e",{duration:2e3})}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(e.qu),t.Y36(p.yh),t.Y36(c.F0),t.Y36(_.ux))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-add-account"]],decls:50,vars:5,consts:[[1,"container"],[1,"row"],[1,"col-md-6","col-s-6","offset-3"],[1,"example-card","register"],[1,"text-center","head","mt-4"],[3,"formGroup"],[1,"row","d-flex","justify-content-center"],[1,"col-lg-12","d-flex","justify-content-center","align-items-center"],["appearance","standard"],["type","text","matInput","","formControlName","firstName","required","","minlength","3",1,"form-control"],[4,"ngIf"],["matSuffix",""],[1,"col-lg-12","d-flex","justify-content-center","align-item-center"],["type","text","formControlName","lastName","matInput","","required","","minlength","3",1,"form-control"],["type","text","formControlName","email","matInput","","required","",1,"form-control"],["type","password","formControlName","password","matInput","","required","",1,"form-control"],["mat-raised-button","",1,"login-btn","btn","btn-block","mt-4","mb-3",3,"click"],["class","text-danger",4,"ngIf"],[1,"text-danger"]],template:function(o,a){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"mat-card",3),t.TgZ(4,"mat-card-content"),t.TgZ(5,"div",4),t.TgZ(6,"mat-card-title"),t._uU(7,"Create your Account "),t.qZA(),t.qZA(),t.TgZ(8,"form",5),t.TgZ(9,"div",6),t.TgZ(10,"p",7),t.TgZ(11,"mat-form-field",8),t.TgZ(12,"mat-label"),t._uU(13,"First Name"),t.qZA(),t._UZ(14,"input",9),t.YNc(15,C,3,2,"mat-error",10),t.TgZ(16,"mat-icon",11),t._uU(17,"account_box"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(18,"p",12),t.TgZ(19,"mat-form-field",8),t.TgZ(20,"mat-label"),t._uU(21,"Last Name"),t.qZA(),t._UZ(22,"input",13),t.TgZ(23,"mat-icon",11),t._uU(24,"account_box"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(25,"div",6),t.TgZ(26,"p",7),t.TgZ(27,"mat-form-field",8),t.TgZ(28,"mat-label"),t._uU(29,"Email Address"),t.qZA(),t._UZ(30,"input",14),t.TgZ(31,"mat-icon",11),t._uU(32,"email"),t.qZA(),t.YNc(33,N,3,2,"mat-error",10),t.TgZ(34,"mat-hint"),t._uU(35,"Example: jane@doe.com"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(36,"div",6),t.TgZ(37,"p",7),t.TgZ(38,"mat-form-field",8),t.TgZ(39,"mat-label"),t._uU(40,"Password"),t.qZA(),t._UZ(41,"input",15),t.TgZ(42,"mat-icon",11),t._uU(43,"visibility_off"),t.qZA(),t.TgZ(44,"mat-hint"),t._uU(45,"Password should be at least 5 characters"),t.qZA(),t.YNc(46,I,1,0,"mat-error",10),t.qZA(),t.qZA(),t.qZA(),t.TgZ(47,"button",16),t.NdJ("click",function(){return a.createAccount()}),t._uU(48,"Register"),t.qZA(),t.YNc(49,M,2,1,"p",17),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(8),t.Q6J("formGroup",a.userForm),t.xp6(7),t.Q6J("ngIf",a.userForm.controls.firstName.errors),t.xp6(18),t.Q6J("ngIf",a.userForm.controls.email.errors),t.xp6(13),t.Q6J("ngIf",a.userForm.controls.password.errors),t.xp6(3),t.Q6J("ngIf",a.errorMessage))},directives:[l.a8,l.dn,l.n5,e._Y,e.JL,e.sg,s.KE,s.hX,Z.Nt,e.Fj,e.JJ,e.u,e.Q7,e.wO,g.O5,A.Hw,s.R9,s.bx,T.lW,s.TO],styles:['.login[_ngcontent-%COMP%]{width:100%;text-align:center;color:#fff;background-color:#242526}mat-form-field[_ngcontent-%COMP%]{width:100%}.login-btn[_ngcontent-%COMP%]{background-color:#1da1f2;color:#fff}.head[_ngcontent-%COMP%]{font-family:"Arial";font-size:50px;font-weight:bolder}form[_ngcontent-%COMP%]{margin:5%;padding:5%}.btn-link[_ngcontent-%COMP%]{color:#aab8c2;font-family:"Arial"}']}),n})()},{path:"login-account",component:(()=>{class n{constructor(o,a,m,u){this.store=o,this.router=a,this.route=m,this.formBuilder=u,this.form=this.formBuilder.group({email:["",[e.kI.required,e.kI.email]],password:["",[e.kI.required,e.kI.minLength(5)]]})}submit(){this.store.dispatch((0,f.pH)({data:this.form.value})),this.form.reset()}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(p.yh),t.Y36(c.F0),t.Y36(c.gz),t.Y36(e.qu))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-login-account"]],decls:20,vars:1,consts:[[3,"formGroup"],["type","text","matInput","","placeholder","Email","formControlName","email",1,"form-control"],["email",""],["matSuffix",""],["type","password","matInput","","placeholder","Password","formControlName","password",1,"form-control"],["password",""],[1,"button"],["type","submit","mat-raised-button","",1,"login-btn",3,"click"]],template:function(o,a){1&o&&(t.TgZ(0,"mat-card"),t.TgZ(1,"mat-card-title"),t._uU(2,"Sign in with your Account"),t.qZA(),t.TgZ(3,"mat-card-content"),t.TgZ(4,"form",0),t.TgZ(5,"p"),t.TgZ(6,"mat-form-field"),t._UZ(7,"input",1,2),t.TgZ(9,"mat-icon",3),t._uU(10,"email"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(11,"p"),t.TgZ(12,"mat-form-field"),t._UZ(13,"input",4,5),t.TgZ(15,"mat-icon",3),t._uU(16,"visibility_off"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(17,"div",6),t.TgZ(18,"button",7),t.NdJ("click",function(){return a.submit()}),t._uU(19," Login "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(4),t.Q6J("formGroup",a.form))},directives:[l.a8,l.n5,l.dn,e._Y,e.JL,e.sg,s.KE,Z.Nt,e.Fj,e.JJ,e.u,A.Hw,s.R9,T.lW],styles:['[_nghost-%COMP%]{display:flex;justify-content:center;margin:100px 0}.mat-form-field[_ngcontent-%COMP%]{width:100%;min-width:300px}mat-card-title[_ngcontent-%COMP%], mat-card-content[_ngcontent-%COMP%]{display:flex;justify-content:center}.error[_ngcontent-%COMP%]{padding:16px;width:300px;color:#fff;background-color:red}.button[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.login[_ngcontent-%COMP%]{width:100%;text-align:center;color:#fff;background-color:#242526}mat-form-field[_ngcontent-%COMP%]{width:100%}.login-btn[_ngcontent-%COMP%]{background-color:#1da1f2;color:#fff}.head[_ngcontent-%COMP%]{font-family:"Suede";font-size:50px;font-weight:bolder}form[_ngcontent-%COMP%]{margin:5%;padding:5%}.btn-link[_ngcontent-%COMP%]{color:#aab8c2;font-family:"Suede"}mat-card-title[_ngcontent-%COMP%]{font-family:"Arial";font-size:20px}']}),n})()},{path:"",redirectTo:"login-account",pathMatch:"full"}]}];let F=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[c.Bz.forChild(k)],c.Bz]}),n})(),w=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[g.ez,F]]}),n})()}}]);