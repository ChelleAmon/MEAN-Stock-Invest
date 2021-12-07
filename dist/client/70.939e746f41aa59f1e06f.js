"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[70],{2070:(Q,d,i)=>{i.r(d),i.d(d,{UserModule:()=>Y});var p=i(8583),c=i(6983),t=i(7716),T=i(5873);const h=function(){return["/Let's-get-started/login-account"]};let q=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-user-login"]],decls:20,vars:2,consts:[[1,"navbar","navbar-expand-lg","navbar-dark","bg-dark"],[1,"navbar-brand"],[1,"custom-h5-grub"],["type","button","data-toggle","collapse","data-target","#navbarNav","aria-controls","navbarNav","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarNav",1,"collapse","navbar-collapse"],[1,"navbar-nav"],[1,"nav-item"],["routerLink","/",1,"nav-link"],[1,"nav-link",3,"routerLink"],["routerLink","./create-account",1,"nav-link"]],template:function(o,r){1&o&&(t.TgZ(0,"nav",0),t.TgZ(1,"a",1),t.TgZ(2,"h4"),t.TgZ(3,"b"),t.TgZ(4,"span",2),t._uU(5,"CRYPTO INVEST"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(6,"button",3),t._UZ(7,"span",4),t.qZA(),t.TgZ(8,"div",5),t.TgZ(9,"ul",6),t.TgZ(10,"li",7),t.TgZ(11,"a",8),t._uU(12,"Home"),t.qZA(),t.qZA(),t.TgZ(13,"li",7),t.TgZ(14,"a",9),t._uU(15,"Sign In"),t.qZA(),t.qZA(),t.TgZ(16,"li",7),t.TgZ(17,"a",10),t._uU(18,"Create Account"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t._UZ(19,"router-outlet")),2&o&&(t.xp6(14),t.Q6J("routerLink",t.DdM(1,h)))},directives:[T.M2,c.yS,c.lC],styles:["body[_ngcontent-%COMP%]{background-color:#1c6e8c}"]}),e})();var n=i(3679),g=i(3604),f=i(3065),b=i(7001),m=i(3738),s=i(8295),Z=i(9983),A=i(6627),_=i(1095);function v(e,a){1&e&&(t.TgZ(0,"span"),t._uU(1,"Field cannot be empty"),t.qZA())}function x(e,a){1&e&&(t.TgZ(0,"span"),t._uU(1," First Name should be at least 3 characters"),t.qZA())}function C(e,a){if(1&e&&(t.TgZ(0,"mat-error"),t.YNc(1,v,2,0,"span",10),t.YNc(2,x,2,0,"span",10),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",o.userForm.controls.firstName.errors.required),t.xp6(1),t.Q6J("ngIf",o.userForm.controls.firstName.errors&&!o.userForm.controls.firstName.errors.required)}}function y(e,a){1&e&&(t.TgZ(0,"span"),t._uU(1,"Field cannot be empty"),t.qZA())}function U(e,a){1&e&&(t.TgZ(0,"span"),t._uU(1," Last Name should be at least 3 characters"),t.qZA())}function N(e,a){if(1&e&&(t.TgZ(0,"mat-error"),t.YNc(1,y,2,0,"span",10),t.YNc(2,U,2,0,"span",10),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",o.userForm.controls.lastName.errors.required),t.xp6(1),t.Q6J("ngIf",o.userForm.controls.lastName.errors&&!o.userForm.controls.lastName.errors.required)}}function I(e,a){1&e&&(t.TgZ(0,"span"),t._uU(1,"Field cannot be empty"),t.qZA())}function k(e,a){if(1&e&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&e){const o=t.oxw(2);t.xp6(1),t.hij(" ",o.userForm.controls.email.errors.emailError,"")}}function F(e,a){if(1&e&&(t.TgZ(0,"mat-error"),t.YNc(1,I,2,0,"span",10),t.YNc(2,k,2,1,"span",10),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",o.userForm.controls.email.errors.required),t.xp6(1),t.Q6J("ngIf",o.userForm.controls.email.errors&&!o.userForm.controls.email.errors.required)}}function w(e,a){1&e&&(t.TgZ(0,"span"),t._uU(1,"Field cannot be empty"),t.qZA())}function M(e,a){1&e&&(t.TgZ(0,"span"),t._uU(1," Password should have at least 5 characters, including at least 1 number"),t.qZA())}function J(e,a){if(1&e&&(t.TgZ(0,"mat-error"),t.YNc(1,w,2,0,"span",10),t.YNc(2,M,2,0,"span",10),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",o.userForm.controls.password.errors.required),t.xp6(1),t.Q6J("ngIf",o.userForm.controls.password.errors&&!o.userForm.controls.password.errors.required)}}function O(e,a){if(1&e&&(t.TgZ(0,"p",19),t._uU(1),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Oqu(o.errorMessage)}}const P=[{path:"",component:q,children:[{path:"create-account",component:(()=>{class e{constructor(o,r,l,u){this.fb=o,this.store=r,this.router=l,this._snackBar=u,this.hide=!0,this.userForm=this.fb.group({firstName:["",[n.kI.required,n.kI.minLength(3)]],lastName:["",[n.kI.required,n.kI.minLength(3)]],email:["",[n.kI.required,n.kI.email,this.validateEmail]],password:["",n.kI.compose([n.kI.required,n.kI.minLength(5),this.validatePwd])]})}validateEmail(o){return/^\S+@\S+$/.test(o.value)?null:{emailError:"Email is invalid"}}validatePwd(o){return/[a-zA-Z]*[0-9]{1}/.test(o.value)?null:{pwdError:"Password should have at least 1 number"}}createAccount(){this.userObj={firstName:this.userForm.value.firstName,email:this.userForm.value.email},this.userForm.valid?(this.store.dispatch((0,g.r4)({data:this.userForm.value})),this._snackBar.open("Registration successful! ","\u274e",{duration:2e3}),sessionStorage.setItem("loggedIn","true"),sessionStorage.setItem("firstName",this.userDetails.firstName),sessionStorage.setItem("email",this.userDetails.email)):this._snackBar.open("One or more fields are invalid. Try again ","\u274e",{duration:2e3})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(n.qu),t.Y36(f.yh),t.Y36(c.F0),t.Y36(b.ux))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-add-account"]],decls:52,vars:10,consts:[[1,"container"],[1,"row"],[1,"col-md-6","col-s-6","offset-3"],[1,"example-card","register"],[1,"text-center","head","mt-4"],[3,"formGroup"],[1,"row","d-flex","justify-content-center"],[1,"col-lg-12","d-flex","justify-content-center","align-items-center"],["appearance","standard"],["type","text","matInput","","formControlName","firstName","required","","minlength","3",1,"form-control"],[4,"ngIf"],["matSuffix",""],[1,"col-lg-12","d-flex","justify-content-center","align-item-center"],["type","text","formControlName","lastName","matInput","","required","","minlength","3",1,"form-control"],["type","text","formControlName","email","matInput","","required","",1,"form-control"],["formControlName","password","matInput","","required","",1,"form-control",3,"type"],["mat-icon-button","","matSuffix","",3,"click"],["mat-raised-button","",1,"login-btn","btn","btn-block","mt-4","mb-3",3,"click"],["class","text-danger",4,"ngIf"],[1,"text-danger"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"mat-card",3),t.TgZ(4,"mat-card-content"),t.TgZ(5,"div",4),t.TgZ(6,"mat-card-title"),t._uU(7,"Create your Account "),t.qZA(),t.qZA(),t.TgZ(8,"form",5),t.TgZ(9,"div",6),t.TgZ(10,"p",7),t.TgZ(11,"mat-form-field",8),t.TgZ(12,"mat-label"),t._uU(13,"First Name"),t.qZA(),t._UZ(14,"input",9),t.YNc(15,C,3,2,"mat-error",10),t.TgZ(16,"mat-icon",11),t._uU(17,"account_box"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(18,"p",12),t.TgZ(19,"mat-form-field",8),t.TgZ(20,"mat-label"),t._uU(21,"Last Name"),t.qZA(),t._UZ(22,"input",13),t.TgZ(23,"mat-icon",11),t._uU(24,"account_box"),t.qZA(),t.YNc(25,N,3,2,"mat-error",10),t.qZA(),t.qZA(),t.qZA(),t.TgZ(26,"div",6),t.TgZ(27,"p",7),t.TgZ(28,"mat-form-field",8),t.TgZ(29,"mat-label"),t._uU(30,"Email Address"),t.qZA(),t._UZ(31,"input",14),t.TgZ(32,"mat-icon",11),t._uU(33,"email"),t.qZA(),t.YNc(34,F,3,2,"mat-error",10),t.TgZ(35,"mat-hint"),t._uU(36,"Example: jane@doe.com"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(37,"div",6),t.TgZ(38,"p",7),t.TgZ(39,"mat-form-field",8),t.TgZ(40,"mat-label"),t._uU(41,"Password"),t.qZA(),t._UZ(42,"input",15),t.TgZ(43,"button",16),t.NdJ("click",function(){return r.hide=!r.hide}),t.TgZ(44,"mat-icon",11),t._uU(45),t.qZA(),t.qZA(),t.TgZ(46,"mat-hint"),t._uU(47,"Password should be at least 5 characters"),t.qZA(),t.YNc(48,J,3,2,"mat-error",10),t.qZA(),t.qZA(),t.qZA(),t.TgZ(49,"button",17),t.NdJ("click",function(){return r.createAccount()}),t._uU(50,"Register"),t.qZA(),t.YNc(51,O,2,1,"p",18),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(8),t.Q6J("formGroup",r.userForm),t.xp6(7),t.Q6J("ngIf",r.userForm.controls.firstName.errors),t.xp6(10),t.Q6J("ngIf",r.userForm.controls.lastName.errors),t.xp6(9),t.Q6J("ngIf",r.userForm.controls.email.errors),t.xp6(8),t.Q6J("type",r.hide?"password":"text"),t.xp6(1),t.uIk("aria-label","Hide password")("aria-pressed",r.hide),t.xp6(2),t.Oqu(r.hide?"visibility_off":"visibility"),t.xp6(3),t.Q6J("ngIf",r.userForm.controls.password.errors),t.xp6(3),t.Q6J("ngIf",r.errorMessage))},directives:[m.a8,m.dn,m.n5,n._Y,n.JL,n.sg,s.KE,s.hX,Z.Nt,n.Fj,n.JJ,n.u,n.Q7,n.wO,p.O5,A.Hw,s.R9,s.bx,_.lW,s.TO],styles:['.login[_ngcontent-%COMP%]{width:100%;text-align:center;color:#fff;background-color:#242526}mat-form-field[_ngcontent-%COMP%]{width:100%}.login-btn[_ngcontent-%COMP%]{background-color:#1da1f2;color:#fff}.head[_ngcontent-%COMP%]{font-family:"Arial";font-size:50px;font-weight:bolder}form[_ngcontent-%COMP%]{margin:5%;padding:5%}.btn-link[_ngcontent-%COMP%]{color:#aab8c2;font-family:"Arial"}']}),e})()},{path:"login-account",component:(()=>{class e{constructor(o,r,l,u){this.store=o,this.router=r,this.route=l,this.formBuilder=u,this.hide=!0,this.form=this.formBuilder.group({email:["",[n.kI.required,n.kI.email]],password:["",[n.kI.required,n.kI.minLength(5)]]})}submit(){this.store.dispatch((0,g.pH)({data:this.form.value})),this.form.reset()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(f.yh),t.Y36(c.F0),t.Y36(c.gz),t.Y36(n.qu))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-login-account"]],decls:26,vars:5,consts:[[1,"background-div"],[3,"formGroup"],["appearance","standard"],["type","text","matInput","","placeholder","Email","formControlName","email",1,"form-control"],["email",""],["matSuffix",""],["matInput","","placeholder","Password","formControlName","password",1,"form-control",3,"type"],["password",""],["mat-icon-button","","matSuffix","",3,"click"],[1,"button"],["type","submit","mat-raised-button","",1,"login-btn",3,"click"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"mat-card"),t.TgZ(2,"mat-card-title"),t._uU(3,"Sign in with your Account"),t.qZA(),t.TgZ(4,"mat-card-content"),t.TgZ(5,"form",1),t.TgZ(6,"p"),t.TgZ(7,"mat-form-field",2),t.TgZ(8,"mat-label"),t._uU(9,"Enter your email: "),t.qZA(),t._UZ(10,"input",3,4),t.TgZ(12,"mat-icon",5),t._uU(13,"email"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(14,"p"),t.TgZ(15,"mat-form-field",2),t.TgZ(16,"mat-label"),t._uU(17,"Enter your password: "),t.qZA(),t._UZ(18,"input",6,7),t.TgZ(20,"button",8),t.NdJ("click",function(){return r.hide=!r.hide}),t.TgZ(21,"mat-icon",5),t._uU(22),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(23,"div",9),t.TgZ(24,"button",10),t.NdJ("click",function(){return r.submit()}),t._uU(25," Login "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(5),t.Q6J("formGroup",r.form),t.xp6(13),t.Q6J("type",r.hide?"password":"text"),t.xp6(2),t.uIk("aria-label","Hide password")("aria-pressed",r.hide),t.xp6(2),t.Oqu(r.hide?"visibility_off":"visibility"))},directives:[m.a8,m.n5,m.dn,n._Y,n.JL,n.sg,s.KE,s.hX,Z.Nt,n.Fj,n.JJ,n.u,A.Hw,s.R9,_.lW],styles:['[_nghost-%COMP%]{display:flex;justify-content:center;margin:100px 0}.mat-form-field[_ngcontent-%COMP%]{width:100%;min-width:300px}mat-card-title[_ngcontent-%COMP%], mat-card-content[_ngcontent-%COMP%]{display:flex;justify-content:center}.error[_ngcontent-%COMP%]{padding:16px;width:300px;color:#fff;background-color:red}.button[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.login[_ngcontent-%COMP%]{width:100%;text-align:center;color:#fff;background-color:#242526}mat-form-field[_ngcontent-%COMP%]{width:100%}.login-btn[_ngcontent-%COMP%]{background-color:#1da1f2;color:#fff}.head[_ngcontent-%COMP%]{font-family:"Suede";font-size:50px;font-weight:bolder}form[_ngcontent-%COMP%]{margin:5%;padding:5%}.btn-link[_ngcontent-%COMP%]{color:#aab8c2;font-family:"Suede"}mat-card-title[_ngcontent-%COMP%]{font-family:"Arial";font-size:20px}']}),e})()},{path:"",redirectTo:"login-account",pathMatch:"full"}]}];let L=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[c.Bz.forChild(P)],c.Bz]}),e})(),Y=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[p.ez,L]]}),e})()}}]);