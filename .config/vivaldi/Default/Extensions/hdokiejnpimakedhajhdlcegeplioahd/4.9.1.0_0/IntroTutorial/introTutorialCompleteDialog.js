var IntroTutorialCompleteDialog=function(o){Dialog.call(this,o,{closeButtonEnabled:!1,maximizeButtonEnabled:!1,dynamicHeight:!0,hideHeader:!0,hideButtons:!0,confirmOnClose:!1})};IntroTutorialCompleteDialog.prototype=Object.create(Dialog.prototype),IntroTutorialCompleteDialog.prototype.constructor=IntroTutorialCompleteDialog,IntroTutorialCompleteDialog.prototype.initialize=function(o,t){Dialog.prototype.initialize.apply(this,arguments),function(e){var n,i,a=bg.get("g_one_minute_signup_enabled"),r=o.find("#noThanks, #btnClose"),l=o.find("#siteName");function s(o){return a?bg.sendLpImprove("onboardingtour::complete",{source:"congratspage",tour:"oms",action:o,version:"sso"}):bg.sendLpImprove("onboardingtour::complete",{source:"congratspage",tour:"singlesite",action:o,version:"sso"})}a?((i=o.find("#welcomeTutoiralSecondAction")).text(Strings.translateString("Add sites from email")),i.show(),i.bind("click",function(o){oneMinuteSignup.show(oneMinuteSignup.modes.normal),s("addsitefromemail"),e.close(!0)})):((n=o.find("#welcomeTutoiralSecondAction")).text(Strings.translateString("Download Importer")),n.show(),n.bind("click",function(o){o.preventDefault(),LPPlatform.showDownloader()?dialogs.introTutorialHelp.open({alignBottom:!0,addHide:!0,textChoice:"downloadImporter",arrow:{orientation:"bottom",position:"left"},postSetup:function(){window.location=LPProxy.getBaseURL()+"installer"}}):window.location=LPProxy.getBaseURL()+"installer",s("importsites"),e.close(!0)})),t&&t.tutorialState&&t.tutorialState.name&&l.text(" "+t.tutorialState.name+" "),r.bind("click",function(o){s("nothanks"),o.preventDefault(),e.close(!0)}),LPProxy.setPreferences("showIntroTutorial",!1),bg.IntroTutorial.setState({enabled:!1})}(this)};
//# sourceMappingURL=sourcemaps/IntroTutorial/introTutorialCompleteDialog.js.map