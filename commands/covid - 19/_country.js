/*CMD
  command: /country
  help: 
  need_reply: 
  auto_retry_time: 
  folder: covid - 19
  answer: 
  keyboard: 
  aliases: 
CMD*/

HTTP.get({
  url: "https://corona.lmao.ninja/v2/countries/"+params,
  body: {},
  success: "/covo",
})
