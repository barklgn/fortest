/*CMD
  command: /covo
  help: 
  need_reply: 
  auto_retry_time: 
  folder: covid - 19
  answer: 
  keyboard: 
  aliases: 
CMD*/

var b = [[{ text: "⬅️GO BACK", callback_data: "/coval"}]]

let msg = User.getProperty("msgid");
let r = JSON.parse(content)
let err =r.message
let re8=r.active
let re1=r.cases
let re4=r.deaths
let re2=r.recovered
let re7=r.todayrecovered
let re6=r.todayDeaths
let re5=r.todayCases
let re9=r.countryInfo.iso2
let re10 =r.country
var photo =  r.countryInfo.flag

if(!err){
  Api.sendPhoto({
    photo: photo,
    caption:
     "*STATISTICS\n\n✈️COUNTRY : " + re10 +
      "\n\n🤧Total Infected : *" +
      re1 +
      "\n*💪Total Recovered : *" +
      re2 +
      "\n*☠️Total Death : *" +
      re4 +
      "\n*🤕Total Active Cases  : *" +
      re8 +
      "\n\n*⛔️Today Info :*\n\n*😷 Today Infected : * " +
      re5 +
      "\n*👽 Today Death : *" +
      re6 +
      "",
    parse_mode: "Markdown", on_result:"/msgid",reply_markup: { inline_keyboard: b} })

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
}else{
Bot.sendMessage("not enter country")
}
