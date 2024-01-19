!function(){function e(e){return e&&e.__esModule?e.default:e}var t=e(((e,t={},n)=>{if("string"!=typeof e)throw new TypeError("expected a string");"function"==typeof t&&(n=t,t={});let s,i,o=t.separator||".",a={type:"root",nodes:[],stash:[""]},r=[a],l={input:e,separator:o,stack:r},c=e,d=-1;l.bos=()=>0===d,l.eos=()=>d===c.length,l.prev=()=>c[d-1],l.next=()=>c[d+1];let u=t.quotes||[],p=t.brackets||{};!0===t.brackets&&(p={"[":"]","(":")","{":"}","<":">"}),!0===t.quotes&&(u=['"',"'","`"]);let h=function(e){let t={};for(const n of Object.keys(e))t[e[n]]=n;return t}(p),m=t.keep||(e=>"\\"!==e);const g=()=>l.block=r[r.length-1],f=()=>c[++d],y=e=>{l.value=e,e&&!1!==m(e,l)&&(l.block.stash[l.block.stash.length-1]+=e)},w=(e,t)=>{let n=c.indexOf(e,t);return n>-1&&"\\"===c[n-1]&&(n=w(e,n+1)),n};for(;d<c.length-1;)if(l.value=s=f(),l.index=d,g(),"\\"!==s)if(u.includes(s)){let e=d+1,t=w(s,e);if(t>-1){y(s),y(c.slice(e,t)),y(c[t]),d=t;continue}y(s)}else if(!1!==t.brackets&&p[s])i={type:"bracket",nodes:[]},i.stash=!1!==m(s)?[s]:[""],i.parent=l.block,l.block.nodes.push(i),r.push(i);else if(!1!==t.brackets&&h[s]){if(1===r.length){y(s);continue}y(s),i=r.pop(),g(),y(i.stash.join(""))}else if(s!==o||"root"!==l.block.type)y(s);else{if("function"==typeof n&&!1===n(l)){y(s);continue}l.block.stash.push("")}else"\\"===c[d+1]?y(s+f()):(y(s),y(f()));for(i=r.pop();i!==a;){if(!0===t.strict){let e=d-i.stash.length+1;throw new SyntaxError(`Unmatched: "${i.stash[0]}", at column ${e}`)}s=i.parent.stash.pop()+i.stash.join("."),i.parent.stash=i.parent.stash.concat(s.split(".")),i=r.pop()}return i.stash}));class n{commands=[];constructor(...e){this.commands.push(...e)}add(...e){this.commands.push(...e)}set(...e){this.commands=e}removeCommands(...e){const t=[];for(const n of e){const e=this.remove(n);e&&t.push(e)}return t}removeIdentifiers(...e){const t=[];for(const n of e){const e=this.commands.find((e=>e.getIdentifier()===n));if(!e)continue;const s=this.remove(e);s&&t.push(s)}return t}removeDescriptions(...e){const t=[];for(const n of e){const e=this.commands.find((e=>e.getDescriptionText()===n.getDescription()));if(!e)continue;const s=this.remove(e);s&&t.push(s)}return t}removeAliases(...e){const t=[];for(const n of e){const e=this.commands.find((e=>e.hasAlias(n)));if(!e)continue;const s=this.remove(e);s&&t.push(s)}return t}find(e){return e=e.toLowerCase(),this.commands.find((t=>{if(t.getIdentifier().toLowerCase()===e)return!0;for(const n of t.getAliases())if(n.toLowerCase()===e)return!0}))}remove(e){const t=this.commands.indexOf(e);return-1===t?void 0:this.commands.splice(t,1)[0]}getCommands(){return this.commands}}let s;var i;(i=s||(s={}))[i.PREPEND=0]="PREPEND",i[i.APPEND=1]="APPEND";class o{constructor(){this.internalElement=this.onRequestElement()}render(e,t=s.APPEND){this.shouldElementRender()&&(this.internalElement=this.onRequestElement(),t===s.APPEND?e.append(this.internalElement):e.prepend(this.internalElement),this.onElementRender())}remove(){this.internalElement.remove()}onElementRender(){}shouldElementRender(){return!0}getElement(){return this.internalElement}}let a;var r;(r=a||(a={})).RAW="RAW",r.SOLO="SOLO",r.START="START",r.END="END",r.INDENT="INDENT";class l extends o{static ANIMATION_SETTINGS={animate:!0,caretClass:"caret",speed:20,humanSpeed:!0,delayBefore:0,delayAfter:250,renderAfter:!0};constructor(e="",t=a.SOLO,n=0,s=l.ANIMATION_SETTINGS){super(),this.content=e,this.type=t,this.indentLevel=n,this.animationSettings=Object.assign({},l.ANIMATION_SETTINGS,s)}onRequestElement(){const e=document.createElement("div");return e.classList.add("line"),e}onElementRender(){this.applyAttributes()}static of(e){return new l(e)}applyAttributes(){this.internalElement.setAttribute("data-linetype",this.type.toLowerCase()),this.internalElement.setAttribute("data-indentlevel",`${this.indentLevel}`)}getContent(){return this.content}getType(){return this.type}getIndentLevel(){return this.indentLevel}getAnimationSettings(){return this.animationSettings}setContent(e){return this.content=e,this}setType(e){return this.type=e,this.applyAttributes(),this}setIndentLevel(e){return this.indentLevel=e,this.applyAttributes(),this}setAnimationSettings(e){return this.animationSettings=Object.assign({},l.ANIMATION_SETTINGS,this.animationSettings,e),this}}const c=new Map;c.set(a.RAW,""),c.set(a.SOLO,"$"),c.set(a.START,c.get(a.SOLO)),c.set(a.END,c.get(a.SOLO)),c.set(a.INDENT,"%");var d,u,p,h,m={};Object.defineProperty(m,"__esModule",{value:!0}),(u=d||(d={},m.Key=d)).Unidentified="Unidentified",u.Alt="Alt",u.AltGraph="AltGraph",u.CapsLock="CapsLock",u.Control="Control",u.Fn="Fn",u.FnLock="FnLock",u.Hyper="Hyper",u.Meta="Meta",u.NumLock="NumLock",u.ScrollLock="ScrollLock",u.Shift="Shift",u.Super="Super",u.Symbol="Symbol",u.SymbolLock="SymbolLock",u.Enter="Enter",u.Tab="Tab",u.ArrowDown="ArrowDown",u.ArrowLeft="ArrowLeft",u.ArrowRight="ArrowRight",u.ArrowUp="ArrowUp",u.End="End",u.Home="Home",u.PageDown="PageDown",u.PageUp="PageUp",u.Backspace="Backspace",u.Clear="Clear",u.Copy="Copy",u.CrSel="CrSel",u.Cut="Cut",u.Delete="Delete",u.EraseEof="EraseEof",u.ExSel="ExSel",u.Insert="Insert",u.Paste="Paste",u.Redo="Redo",u.Undo="Undo",u.Accept="Accept",u.Again="Again",u.Attn="Attn",u.Cancel="Cancel",u.ContextMenu="ContextMenu",u.Escape="Escape",u.Execute="Execute",u.Find="Find",u.Finish="Finish",u.Help="Help",u.Pause="Pause",u.Play="Play",u.Props="Props",u.Select="Select",u.ZoomIn="ZoomIn",u.ZoomOut="ZoomOut",u.BrightnessDown="BrightnessDown",u.BrightnessUp="BrightnessUp",u.Eject="Eject",u.LogOff="LogOff",u.Power="Power",u.PowerOff="PowerOff",u.PrintScreen="PrintScreen",u.Hibernate="Hibernate",u.Standby="Standby",u.WakeUp="WakeUp",u.AllCandidates="AllCandidates",u.Alphanumeric="Alphanumeric",u.CodeInput="CodeInput",u.Compose="Compose",u.Convert="Convert",u.Dead="Dead",u.FinalMode="FinalMode",u.GroupFirst="GroupFirst",u.GroupLast="GroupLast",u.GroupNext="GroupNext",u.GroupPrevious="GroupPrevious",u.ModeChange="ModeChange",u.NextCandidate="NextCandidate",u.NonConvert="NonConvert",u.PreviousCandidate="PreviousCandidate",u.Process="Process",u.SingleCandidate="SingleCandidate",u.HangulMode="HangulMode",u.HanjaMode="HanjaMode",u.JunjaMode="JunjaMode",u.Eisu="Eisu",u.Hankaku="Hankaku",u.Hiragana="Hiragana",u.HiraganaKatakana="HiraganaKatakana",u.KanaMode="KanaMode",u.KanjiMode="KanjiMode",u.Katakana="Katakana",u.Romaji="Romaji",u.Zenkaku="Zenkaku",u.ZenkakuHanaku="ZenkakuHanaku",u.F1="F1",u.F2="F2",u.F3="F3",u.F4="F4",u.F5="F5",u.F6="F6",u.F7="F7",u.F8="F8",u.F9="F9",u.F10="F10",u.F11="F11",u.F12="F12",u.F13="F13",u.F14="F14",u.F15="F15",u.F16="F16",u.F17="F17",u.F18="F18",u.F19="F19",u.F20="F20",u.Soft1="Soft1",u.Soft2="Soft2",u.Soft3="Soft3",u.Soft4="Soft4",u.AppSwitch="AppSwitch",u.Call="Call",u.Camera="Camera",u.CameraFocus="CameraFocus",u.EndCall="EndCall",u.GoBack="GoBack",u.GoHome="GoHome",u.HeadsetHook="HeadsetHook",u.LastNumberRedial="LastNumberRedial",u.Notification="Notification",u.MannerMode="MannerMode",u.VoiceDial="VoiceDial",u.ChannelDown="ChannelDown",u.ChannelUp="ChannelUp",u.MediaFastForward="MediaFastForward",u.MediaPause="MediaPause",u.MediaPlay="MediaPlay",u.MediaPlayPause="MediaPlayPause",u.MediaRecord="MediaRecord",u.MediaRewind="MediaRewind",u.MediaStop="MediaStop",u.MediaTrackNext="MediaTrackNext",u.MediaTrackPrevious="MediaTrackPrevious",u.AudioBalanceLeft="AudioBalanceLeft",u.AudioBalanceRight="AudioBalanceRight",u.AudioBassDown="AudioBassDown",u.AudioBassBoostDown="AudioBassBoostDown",u.AudioBassBoostToggle="AudioBassBoostToggle",u.AudioBassBoostUp="AudioBassBoostUp",u.AudioBassUp="AudioBassUp",u.AudioFaderFront="AudioFaderFront",u.AudioFaderRear="AudioFaderRear",u.AudioSurroundModeNext="AudioSurroundModeNext",u.AudioTrebleDown="AudioTrebleDown",u.AudioTrebleUp="AudioTrebleUp",u.AudioVolumeDown="AudioVolumeDown",u.AudioVolumeMute="AudioVolumeMute",u.AudioVolumeUp="AudioVolumeUp",u.MicrophoneToggle="MicrophoneToggle",u.MicrophoneVolumeDown="MicrophoneVolumeDown",u.MicrophoneVolumeMute="MicrophoneVolumeMute",u.MicrophoneVolumeUp="MicrophoneVolumeUp",u.TV="TV",u.TV3DMode="TV3DMode",u.TVAntennaCable="TVAntennaCable",u.TVAudioDescription="TVAudioDescription",u.TVAudioDescriptionMixDown="TVAudioDescriptionMixDown",u.TVAudioDescriptionMixUp="TVAudioDescriptionMixUp",u.TVContentsMenu="TVContentsMenu",u.TVDataService="TVDataService",u.TVInput="TVInput",u.TVInputComponent1="TVInputComponent1",u.TVInputComponent2="TVInputComponent2",u.TVInputComposite1="TVInputComposite1",u.TVInputComposite2="TVInputComposite2",u.TVInputHDMI1="TVInputHDMI1",u.TVInputHDMI2="TVInputHDMI2",u.TVInputHDMI3="TVInputHDMI3",u.TVInputHDMI4="TVInputHDMI4",u.TVInputVGA1="TVInputVGA1",u.TVMediaContext="TVMediaContext",u.TVNetwork="TVNetwork",u.TVNumberEntry="TVNumberEntry",u.TVPower="TVPower",u.TVRadioService="TVRadioService",u.TVSatellite="TVSatellite",u.TVSatelliteBS="TVSatelliteBS",u.TVSatelliteCS="TVSatelliteCS",u.TVSatelliteToggle="TVSatelliteToggle",u.TVTerrestrialAnalog="TVTerrestrialAnalog",u.TVTerrestrialDigital="TVTerrestrialDigital",u.TVTimer="TVTimer",u.AVRInput="AVRInput",u.AVRPower="AVRPower",u.ColorF0Red="ColorF0Red",u.ColorF1Green="ColorF1Green",u.ColorF2Yellow="ColorF2Yellow",u.ColorF3Blue="ColorF3Blue",u.ColorF4Grey="ColorF4Grey",u.ColorF5Brown="ColorF5Brown",u.ClosedCaptionToggle="ClosedCaptionToggle",u.Dimmer="Dimmer",u.DisplaySwap="DisplaySwap",u.DVR="DVR",u.Exit="Exit",u.FavoriteClear0="FavoriteClear0",u.FavoriteClear1="FavoriteClear1",u.FavoriteClear2="FavoriteClear2",u.FavoriteClear3="FavoriteClear3",u.FavoriteRecall0="FavoriteRecall0",u.FavoriteRecall1="FavoriteRecall1",u.FavoriteRecall2="FavoriteRecall2",u.FavoriteRecall3="FavoriteRecall3",u.FavoriteStore0="FavoriteStore0",u.FavoriteStore1="FavoriteStore1",u.FavoriteStore2="FavoriteStore2",u.FavoriteStore3="FavoriteStore3",u.Guide="Guide",u.GuideNextDay="GuideNextDay",u.GuidePreviousDay="GuidePreviousDay",u.Info="Info",u.InstantReplay="InstantReplay",u.Link="Link",u.ListProgram="ListProgram",u.LiveContent="LiveContent",u.Lock="Lock",u.MediaApps="MediaApps",u.MediaAudioTrack="MediaAudioTrack",u.MediaLast="MediaLast",u.MediaSkipBackward="MediaSkipBackward",u.MediaSkipForward="MediaSkipForward",u.MediaStepBackward="MediaStepBackward",u.MediaStepForward="MediaStepForward",u.MediaTopMenu="MediaTopMenu",u.NavigateIn="NavigateIn",u.NavigateNext="NavigateNext",u.NavigateOut="NavigateOut",u.NavigatePrevious="NavigatePrevious",u.NextFavoriteChannel="NextFavoriteChannel",u.NextUserProfile="NextUserProfile",u.OnDemand="OnDemand",u.Pairing="Pairing",u.PinPDown="PinPDown",u.PinPMove="PinPMove",u.PinPToggle="PinPToggle",u.PinPUp="PinPUp",u.PlaySpeedDown="PlaySpeedDown",u.PlaySpeedReset="PlaySpeedReset",u.PlaySpeedUp="PlaySpeedUp",u.RandomToggle="RandomToggle",u.RcLowBattery="RcLowBattery",u.RecordSpeedNext="RecordSpeedNext",u.RfBypass="RfBypass",u.ScanChannelsToggle="ScanChannelsToggle",u.ScreenModeNext="ScreenModeNext",u.Settings="Settings",u.SplitScreenToggle="SplitScreenToggle",u.STBInput="STBInput",u.STBPower="STBPower",u.Subtitle="Subtitle",u.Teletext="Teletext",u.VideoModeNext="VideoModeNext",u.Wink="Wink",u.ZoomToggle="ZoomToggle",u.SpeechCorrectionList="SpeechCorrectionList",u.SpeechInputToggle="SpeechInputToggle",u.Close="Close",u.New="New",u.Open="Open",u.Print="Print",u.Save="Save",u.SpellCheck="SpellCheck",u.MailForward="MailForward",u.MailReply="MailReply",u.MailSend="MailSend",u.LaunchCalculator="LaunchCalculator",u.LaunchCalendar="LaunchCalendar",u.LaunchContacts="LaunchContacts",u.LaunchMail="LaunchMail",u.LaunchMediaPlayer="LaunchMediaPlayer",u.LaunchMusicPlayer="LaunchMusicPlayer",u.LaunchMyComputer="LaunchMyComputer",u.LaunchPhone="LaunchPhone",u.LaunchScreenSaver="LaunchScreenSaver",u.LaunchSpreadsheet="LaunchSpreadsheet",u.LaunchWebBrowser="LaunchWebBrowser",u.LaunchWebCam="LaunchWebCam",u.LaunchWordProcessor="LaunchWordProcessor",u.LaunchApplication1="LaunchApplication1",u.LaunchApplication2="LaunchApplication2",u.LaunchApplication3="LaunchApplication3",u.LaunchApplication4="LaunchApplication4",u.LaunchApplication5="LaunchApplication5",u.LaunchApplication6="LaunchApplication6",u.LaunchApplication7="LaunchApplication7",u.LaunchApplication8="LaunchApplication8",u.LaunchApplication9="LaunchApplication9",u.LaunchApplication10="LaunchApplication10",u.LaunchApplication11="LaunchApplication11",u.LaunchApplication12="LaunchApplication12",u.LaunchApplication13="LaunchApplication13",u.LaunchApplication14="LaunchApplication14",u.LaunchApplication15="LaunchApplication15",u.LaunchApplication16="LaunchApplication16",u.BrowserBack="BrowserBack",u.BrowserFavorites="BrowserFavorites",u.BrowserForward="BrowserForward",u.BrowserHome="BrowserHome",u.BrowserRefresh="BrowserRefresh",u.BrowserSearch="BrowserSearch",u.BrowserStop="BrowserStop",u.Decimal="Decimal",u.Key11="Key11",u.Key12="Key12",u.Multiply="Multiply",u.Add="Add",u.Divide="Divide",u.Subtract="Subtract",u.Separator="Separator";class g extends o{constructor(e){super(),this.listeners=e}onRequestElement(){const e=document.createElement("span");return e.classList.add("command_input"),e.contentEditable="true",e.spellcheck=!1,e.addEventListener("blur",this.lockFocus),e.addEventListener("keydown",(e=>this.handleKeyDown(e))),e.addEventListener("keyup",(()=>this.onRequestSuggestion())),e}onElementRender(){this.internalElement.focus(),this.internalElement.scrollIntoView()}lockFocus(){this.focus()}handleKeyDown(e){e.key===m.Key.Enter?(e.preventDefault(),this.onSubmit()):e.key===m.Key.Tab?(e.preventDefault(),this.onFillSuggestion()):e.key===m.Key.ArrowUp?this.onBrowseHistory("up"):e.key===m.Key.ArrowDown&&this.onBrowseHistory("down")}onSubmit(){if(!this.listeners.onSubmit)return;const e=this.internalElement.innerText.trim();e&&(this.internalElement.innerText="",this.listeners.onSubmit(e))}onRequestSuggestion(){this.listeners.onRequestSuggestion}onFillSuggestion(){}onBrowseHistory(e){}}function f(e,t,...n){return new Promise((s=>{const i=()=>s(n?t(...n):t());e?window.setTimeout(i,e):i()}))}(h=p||(p={})).IDLE="idle",h.PAUSED="paused",h.STOPPED="stopped",h.WORKING="working";class y{static DEFAULT_OPTIONS={typeDelay:50,human:!0,autoStart:!1,logSteps:!1,renderAfter:!0};state=p.STOPPED;eventQueue=[];readyForNextLoop=!0;constructor(e,t={}){this.element=e,this.options=t,this.options=Object.assign({},y.DEFAULT_OPTIONS,t),this.log("Initialized..."),this.options.autoStart&&this.startLoop()}startLoop(){this.timeoutHandle||(this.state=p.WORKING,this.timeoutHandle=window.setInterval((()=>{this.readyForNextLoop&&this.loop()}),50),this.log("Started loop..."))}stopLoop(){this.timeoutHandle&&window.clearInterval(this.timeoutHandle),this.timeoutHandle=void 0,this.log("Stopped loop...")}loop(){if(this.readyForNextLoop=!1,this.log(`Current state is ${this.state}`),this.state===p.PAUSED||this.state===p.STOPPED){const e=this.getNextEventSafe();return e&&"start"===e[0]&&(this.state=p.WORKING),void(this.readyForNextLoop=!0)}const e=this.getNextEvent();if(!e)return this.state=p.STOPPED,this.log("No more events, stopping..."),void this.stopLoop();const t=e[0],n=e[1];switch(this.log(`Starting event of type ${t}`),t){case"stop":this.state=p.STOPPED,this.stopLoop();break;case"pause":this.state=p.PAUSED,this.log("Pausing loop...");break;case"pauseFor":this.state=p.PAUSED,this.log("Starting loop pause..."),f(n,(()=>{this.state=p.WORKING,this.log("Finished loop pause...")}));break;case"typeText":this.state=p.PAUSED,this.log(`Starting to type text '${n}'...`),this.type(n,!1).then((()=>{this.state=p.WORKING,this.log("Finished typing text...")}));break;case"pasteText":this.state=p.PAUSED,this.log(`Pasting text '${n}'...`),this.paste(n,!1),this.state=p.WORKING;break;case"typeHTML":this.state=p.PAUSED,this.log(`Starting to type HTML '${n}'...`),this.type(n,!0).then((()=>{this.state=p.WORKING,this.log("Finished typing HTML...")}));break;case"pasteHTML":this.state=p.PAUSED,this.log(`Pasting HTML '${n}'...`),this.paste(n,!0),this.state=p.WORKING;break;case"execute":this.state=p.PAUSED,this.log(`Executing function ${n}`);const e=n();e instanceof Promise?e.then((()=>{this.state=p.WORKING,this.log(`Finished executing ${n}`)})):(this.state=p.WORKING,this.log(`Finished executing ${n}`))}this.readyForNextLoop=!0}async type(e,t){return new Promise((n=>{let s=0;const{typeDelay:i,human:o}=this.options,a=()=>{if(s<e.length){f(o?Math.random()*i:i,(()=>{t?this.element.innerHTML+=e.charAt(s):this.element.textContent+=e.charAt(s),this.element.scrollIntoView(),s++,a()}))}else n(),this.options.renderAfter&&(this.element.innerHTML=e)};a()}))}paste(e,t){t?this.element.innerHTML+=e:this.element.textContent+=e,this.element.scrollIntoView()}start(){return this.state===p.STOPPED?this.startLoop():this.queueEvent(["start",void 0]),this}pause(){return this.queueEvent(["pause",void 0]),this}pauseFor(e){return this.queueEvent(["pauseFor",e]),this}stop(){return this.queueEvent(["stop",void 0]),this}typeText(e){return this.queueEvent(["typeText",e]),this}pasteText(e){return this.queueEvent(["pasteText",e]),this}typeHTML(e){return this.queueEvent(["typeHTML",e]),this}pasteHTML(e){return this.queueEvent(["pasteHTML",e]),this}execute(e){return this.queueEvent(["execute",e]),this}queueEvent(e){return this.eventQueue.push(e),this}getNextEvent(){const e=this.eventQueue.splice(0,1);if(e&&e.length)return e[0]}getNextEventSafe(){const e=this.eventQueue.slice(0,1);if(e&&e.length)return e[0]}log(e){this.options.logSteps&&console.log("Typewriter: "+e)}}class w extends o{constructor(e){super(),this.parentElement=e}onRequestElement(){return document.createElement("div")}async write(e){const t=e.getAnimationSettings();e.render(this.internalElement);const n=new y(e.getElement(),{typeDelay:t.speed,human:t.humanSpeed,renderAfter:t.renderAfter});return new Promise((s=>{let i;i=e.getContent()?e.getContent():"&nbsp;",n.pauseFor(t.delayBefore),t.animate?n.typeHTML(i):n.pasteHTML(i),n.pauseFor(t.delayAfter).execute((()=>s())).start()}))}clear(){this.internalElement.innerHTML="",this.lines=[]}getLines(){return this.lines}}class T extends o{stdin=new g({onSubmit:e=>this.onSTDIN(e)});stdout=new w(this.internalElement);constructor(e){super(),this.commander=e}onRequestElement(){const e=document.createElement("div");return e.classList.add("terminal"),e.tabIndex=0,e}onElementRender(){this.stdout.render(this.internalElement),this.stdin.render(this.internalElement),this.closeSTDIN(),this.sayDefaults().then((()=>{this.openSTDIN()}))}async sendMessage(e){await this.stdout.write(e)}async onSTDIN(e){this.closeSTDIN(),await this.commander.execute(e,this),this.openSTDIN()}openSTDIN(){this.stdin.render(this.internalElement)}closeSTDIN(){this.stdin.remove()}clear(){this.stdout.clear()}async sayDefaults(){await this.sendMessage(l.of("(I know this isn't the most orthodox website, but hopefully it's acceptable, sorry!)").setAnimationSettings({animate:!1}).setType(a.RAW)),await this.sendMessage(l.of("").setType(a.RAW)),await this.sendMessage(l.of("Welcome to my portfolio.")),await this.sendMessage(l.of("Type 'help' and press ENTER to see a list of available commands."))}export(){}getCommander(){return this.commander}}class A{static EMPTY=new A("");constructor(e){this.description=e}static of(e){return new A(e)}getDescription(){return this.description}setDescription(e){this.description=e}}class S{enabled=!0;hidden=!1;constructor(e,t=A.EMPTY,n,s){this.identifier=e,this.description=t,this.aliases=n,this.args=s}async run(e,t,n){await this.executor.run(this,e,t,n)}static new(e,t=A.EMPTY,n=[],s=[]){return new S(e,t,n,s)}getIdentifier(){return this.identifier}setIdentifier(e){return this.identifier=e,this}getDescription(){return this.description}getDescriptionText(){return this.description.getDescription()}setDescription(e){return this.description=e,this}getAliases(){return this.aliases}setAliases(e){return this.aliases=e,this}addAliases(...e){return this.aliases.push(...e),this}hasAlias(e){return this.aliases.includes(e)}getArgs(){return this.args}setArgs(e){return this.args=e,this}addArgs(...e){return this.args.push(...e),this}getEnabled(){return this.enabled}setEnabled(e){return this.enabled=e,this}getHidden(){return this.hidden}setHidden(e){return this.hidden=e,this}getExecutor(){return this.executor}setExecutor(e){return this.executor=e,this}}const E=S.new("about",A.of("View a short description about myself and this website.")).setExecutor(new class{async run(e,t,n,s){if(!(n instanceof T))return;const i=[];i.push(new l("About Ole:",a.START)),i.push(new l("Ole was born in Germany and moved to Canada in 2013.",a.INDENT,1,{delayAfter:0,speed:1})),i.push(new l("Since then he has found his passion in computer programming, specifically web development.",a.INDENT,1,{delayAfter:0,speed:1})),i.push(new l("He plans to seek out a post-secondary education in the field.",a.INDENT,1,{delayAfter:0,speed:1})),i.push(new l("Ole has a keen interest in retro technology and linguistics.",a.INDENT,1,{delayAfter:0,speed:1})),i.push(new l("",a.RAW,1)),i.push(new l("About This Website",a.START)),i.push(new l("This portfolio was inspired by retro terminals.",a.INDENT,1,{delayAfter:0,speed:1})),i.push(new l("My choice of font is Roboto Mono, and the colour is green.",a.INDENT,1,{delayAfter:0,speed:1})),i.push(new l("Since old computers mostly only support green, it's perfect for this.",a.INDENT,1,{delayAfter:0,speed:1})),i.push(new l("It isn't the most traditional or useful website, but I've always wanted to make it.",a.INDENT,1,{delayAfter:0,speed:1}));for(const e of i)await n.sendMessage(e)}});const M=S.new("clear",A.of("Clear the terminal screen."),["cls"]).setExecutor(new class{run(e,t,n,s){n instanceof T&&n.clear()}});const L=S.new("contact",A.of("See where you can contact me.")).setExecutor(new class{async run(e,t,n,s){if(!(n instanceof T))return;const i=[];i.push(new l("My socials:",a.START)),i.push(new l('GitHub: <a target="_blank" href="https://www.github.com/zyrakia">@Zyrakia</a>',a.INDENT,1).setAnimationSettings({animate:!1})),i.push(new l('Twitter: <a target="_blank" href="https://www.twitter.com/zyrakia">@Zyrakia</a>',a.INDENT,1).setAnimationSettings({animate:!1})),i.push(new l('Email: <a target="_blank" href="mailto:ole.lammers@pm.me">ole.lammers@pm.me</a>',a.INDENT,1).setAnimationSettings({animate:!1})),i.push(new l("But why contact me?!",a.END));for(const e of i)await n.sendMessage(e)}});const v=S.new("copyright",A.of("View credit and copyright information.")).setExecutor(new class{async run(e,t,n,s){n instanceof T&&(await n.sendMessage(l.of("External content used: ").setType(a.START)),await n.sendMessage(l.of('<a target="_blank" href="https://fonts.google.com/specimen/Roboto+Mono">Robot Mono - Google Fonts</a>').setType(a.INDENT).setIndentLevel(1)),await n.sendMessage(l.of("Almost everything is made in house :)").setType(a.END)))}});const b=S.new("echo",A.of("Echo anything you write to the terminal.")).setExecutor(new class{async run(e,t,n,s){if(!(n instanceof T))return;const i=t.join(" ");i?await n.sendMessage(new l(`${i}`,a.RAW)):await n.sendMessage(new l("Well at least give me something to echo..."))}});S.new("export",A.of("Export the terminal contents to your clipboard.")).setExecutor(new class{async run(e,t,n,s){n instanceof T&&(n.export(),await n.sendMessage(new l("Saved terminal contents to clipboard.")))}});const N=S.new("goto",A.of("Go to a specified URL.")).setExecutor(new class{async run(e,t,n,s){if(!(n instanceof T))return;let i=t[0];i&&i.trim()?(i=i.trim(),i=i.includes("https://")?i:"https://"+i,window.location.replace(i)):await n.sendMessage(l.of("Well at least give me somewhere to go..."))}});const I=S.new("help",A.of("List and describe available commands."),["?"]).setExecutor(new class{PER_PAGE=5;async run(e,t,n,s){if(!(n instanceof T))return;const i=[],o=[...n.getCommander().getCommandRegistry().getCommands()].filter((e=>!e.getHidden())),r=Math.ceil(o.length/this.PER_PAGE);let c,d;c=t[0]&&!isNaN(+t[0])?+t[0]:1,c=this.contain(c,r,1),d=o.splice((c-1)*this.PER_PAGE,this.PER_PAGE),i.push(new l(`Available commands: (${c}/${r})`,a.START).setAnimationSettings({speed:1,delayAfter:0})),d.forEach((e=>{const t=e.getIdentifier(),n=e.getDescriptionText();i.push(new l(`'${t}' - ${n}`,a.INDENT,1).setAnimationSettings({speed:1,delayAfter:0}))})),i.push(l.of("Use 'help [page number]' to see more!").setType(a.END));for(const e of i)await n.sendMessage(e)}contain(e,t,n){return(e=Math.round(e))>t&&(e=t),e<n&&(e=n),e}});const D=S.new("pi",A.of("Display the digits of pi!"),["3.14"]).setHidden(!0).setExecutor(new class{PI1000="3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989";async run(e,t,n,s){n instanceof T&&await n.sendMessage(l.of(this.PI1000).setAnimationSettings({speed:1}))}});const P=S.new("project",A.of("View my different projects.")).setExecutor(new class{projects=[{key:"portfolio-website",name:"This Portfolio Website",description:"A virtual terminal with custom command interpreter and typewriter.",imageURL:"https://i.ibb.co/WsvFFnz/image.png"},{key:"portfolio-brochure",name:"Portfolio Brochure",description:"A small portfolio brochure made in InDesign in the style of a terminal.",imageURL:"https://i.ibb.co/zmGhsbj/image.png"},{key:"spy-talk",name:"Spy Talk Skit",description:"A short scripted video shot and edited in Premiere Pro.",imageURL:"https://i.ibb.co/vdP9yV1/image.png"},{key:"trailer-remix",name:"Trailer Remix",description:"A trailer genre mix-up project made in Premiere Pro.",imageURL:"https://i.ibb.co/6Rtc8V4/image.png"},{key:"character-creation",name:"Ferb As Myself",description:"Ferb from Phineas and Ferb recreated as myself in Illustrator.",imageURL:"https://i.ibb.co/bN2sZmK/image.png"},{key:"animate-gif-project",name:"Animate GIF Project",description:"A terminal themed typing animation GIF created in Animate.",imageURL:"https://i.ibb.co/3pkHyqH/image.png"},{key:"animate-unit-project",name:"Animate Unit Project",description:"A technology themed GIF animation created in Animate.",imageURL:"https://i.ibb.co/FJ3Cyw9/image.png"},{key:"mini-webpage",name:"Mini Reading Website",description:"A mini website about my reading experiences created in Spark.",imageURL:"https://i.ibb.co/PhR5Y8Z/image.png"},{key:"album-cover",name:"In Rainbows Album Cover",description:"An album cover remake based on 'In Rainbows by Radiohead'.",imageURL:"https://i.ibb.co/hY7vHhZ/image.png"},{key:"logo-creation",name:"Ovie Logo",description:"A custom logo for a different project created in Illustrator.",imageURL:"https://i.ibb.co/F8CCk8c/image.png"},{key:"podcast-creation",name:"Tutorial Hell Podcast",description:"A six minute podcast talking about how to get out of tutorial hell.",imageURL:"https://i.ibb.co/HKMtwbb/image.png"}];async run(e,t,n,s){if(!(n instanceof T))return;let i=t[0];if(!i)return void await n.sendMessage(l.of("You must specify a project you want to look at, try 'project list'."));if(i=i.toLowerCase(),"list"===i){const e=[];e.push(l.of("Projects I have worked on:").setType(a.START)),this.projects.forEach((t=>{e.push(l.of(`'${t.key}'`).setType(a.INDENT).setIndentLevel(1).setAnimationSettings({delayAfter:0,speed:1}))})),e.push(l.of("Now try 'project [name]' to get the details!").setType(a.END));for(const t of e)await n.sendMessage(t);return}const o=this.projects.find((e=>e.key===i));if(!o)return void await n.sendMessage(l.of(`'${i}' is not a valid project name!`));const r=[];r.push(l.of(`${o.name}:`).setType(a.START)),r.push(l.of(o.description).setType(a.RAW)),r.push(l.of(`<img src="${o.imageURL}" alt="${o.key} Image">`).setType(a.RAW)),r.push(l.of("To view other projects, use 'project list'.").setType(a.END));for(const e of r)await n.sendMessage(e)}});const F=S.new("reset",A.of("Clear the terminal and display the starting message.")).setExecutor(new class{async run(e,t,n,s){n instanceof T&&(n.clear(),await n.sayDefaults())}}).setHidden(!0);const k=S.new("reflection",A.of("View my reflection after completing this project.")).setExecutor(new class{async run(e,t,n,s){n instanceof T&&(await n.sendMessage(l.of("Course reflection:").setType(a.START)),await n.sendMessage(l.of("Overall, I really enjoyed finally creating this website.").setType(a.INDENT).setIndentLevel(1).setAnimationSettings({speed:1,delayAfter:0})),await n.sendMessage(l.of("In this course, the biggest thing I will take away is the Adobe experience.").setType(a.INDENT).setIndentLevel(1).setAnimationSettings({speed:1,delayAfter:0})),await n.sendMessage(l.of("That might seem like a anticlimatic takeaway, but with how big Adobe is, that experience is invaluable.").setType(a.INDENT).setIndentLevel(1).setAnimationSettings({speed:1,delayAfter:0})),await n.sendMessage(l.of("Learning about Adobe products, and how to use them for graphic design has been incredibly useful.").setType(a.INDENT).setIndentLevel(1).setAnimationSettings({speed:1,delayAfter:0})),await n.sendMessage(l.of("Website reflection:").setType(a.START)),await n.sendMessage(l.of("Terminals are confusing and ugly for the every day person.").setType(a.INDENT).setIndentLevel(1).setAnimationSettings({speed:1,delayAfter:0})),await n.sendMessage(l.of("So, I wanted to create an emulation that is more user friendly and interesting to look at.").setType(a.INDENT).setIndentLevel(1).setAnimationSettings({speed:1,delayAfter:0})),await n.sendMessage(l.of("While this website is still more difficult to use than others, it is doable.").setType(a.INDENT).setIndentLevel(1).setAnimationSettings({speed:1,delayAfter:0})),await n.sendMessage(l.of("I want people to feel like they are actually using a retro terminal.").setType(a.INDENT).setIndentLevel(1).setAnimationSettings({speed:1,delayAfter:0})),await n.sendMessage(l.of("I used a monospace font to emulate hard edges, and three colours, green and black and blue, for simplicity.").setType(a.INDENT).setIndentLevel(1).setAnimationSettings({speed:1,delayAfter:0})),await n.sendMessage(l.of("Now unfortunately I know the only layout scheme is that everything is on the left of the screen.").setType(a.INDENT).setIndentLevel(1).setAnimationSettings({speed:1,delayAfter:0})),await n.sendMessage(l.of("Also some of the sections are spaced out and coloured differently.").setType(a.INDENT).setIndentLevel(1).setAnimationSettings({speed:1,delayAfter:0})),await n.sendMessage(l.of("But because I really wanted to create a website like this I hoped that it would be okay...").setType(a.INDENT).setIndentLevel(1).setAnimationSettings({speed:1,delayAfter:0})),await n.sendMessage(l.of("It still looks nice though, and everything is easy to read and find.").setType(a.INDENT).setIndentLevel(1).setAnimationSettings({speed:1,delayAfter:0})),await n.sendMessage(l.of("Also the limited initial content given to the user is an instant eye guide.").setType(a.INDENT).setIndentLevel(1).setAnimationSettings({speed:1,delayAfter:0})))}});S.new("suggest",A.of("Suggest a feature to me (Zyrakia)!")).setExecutor(new class{async run(e,t,n,s){if(!(n instanceof T))return;const i=new l("Enter your suggestion, or 'cancel':");await n.sendMessage(i),await n.sendMessage(new l("I have yet to connect my API :("))}});S.new("techexport",A.of("Export the technical terminal contents to your clipboard.")).setHidden(!0).setExecutor(new class{async run(e,t,n,s){}});const C=new class{commandRegistry=new n;async execute(e,n){const s=class{constructor(){}static parse(e){const n=t(e,{quotes:!0,brackets:!0,separator:" "});if(!n||!n.length)return;const s=n[0],i=[];return n.length>1&&i.push(...n.slice(1)),{identifier:s,args:i}}}.parse(e);if(!s||s.identifier.includes(" "))return;const i=this.commandRegistry.find(s.identifier);i&&await i.run(s.args,n,s.identifier)}setCommands(...e){return this.commandRegistry.set(...e),this}addCommands(...e){return this.commandRegistry.add(...e),this}getCommandRegistry(){return this.commandRegistry}};C.addCommands(E,P,v,L,k,M,b,N,I,D,F);new T(C).render(document.querySelector("body"),s.PREPEND)}();
//# sourceMappingURL=index.61a34b02.js.map