/*CMD
  command: /bt53
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg = User.getProperty("msgid");

var b =[
[{title:"⏩ለመመለስ⏪",command:"/tigmez"},{title:"🔼ዋና ገፅ🔽",command:"/mytig"}]]

Bot.editMessage("🌷🌷 ሕሩይ እግዚኣብሔር 🌷🌷\n\n1,መንፈሳዊ ሓኪም ፈውሲ ንሕማመይ\nዝተሰብረ መንፈሰይ ንስኻ ትፅግነለይ\nኣማላድነትካ ትድግፋ ነፍሰይ\nለዋህ ደንጋፂ ኣቦ ሕይወተይ\n\n      ተደ:\nኣማላድነት ናትካ ይደሊ ኣለኹ\nንድሕነተይሲ ሓገዝካ ይደሊ ኣለኹ\nቅ.ኣንጠንዮስ ዓቢ መምህር ወንጌል\nሕሩይ ብእግዚኣብሔር ንፍቕርን\nንሓልዮትን ብግብሪ ትምህር\n\n2,ኦ ለዋህ ደንጋፂ ርሕሩሕ ሕልና\nረዳኢ ብዱላት ሓጋዚ ጭኑቓት\nኣድሕነኒ ካብቲ ናይ መንፈስ ትኽስታ\nነቒሐ ከገልግል ብንፁሕ ሕልና\n\n3,ንዓኻ ዝምሕፀን ዝሓፈረ የለን\nሓገዝካ ዝልምን ከቶ ኣይስእንን\nንስኻ ፀግዕና ክትከውን ዝገብር\nንዘልዓለም ይንገስ ይመስገን እግ/ር\n\n4,ክበር ኩሉ ጊዜ ኦ ቅ.ኣንጠንዮስ\nወትሩ ምስ ፀለኻ ሓጥያትና ክትድምስስ\nብፅኑዕ ዝተነድቀ ዘይፈርስ ድልድል\nብቐሊል ዘይንቕነቕ ብናይ ሰይጣን ተንኮል\n\n             🌷🙏🙏🙏🌷\n\nብመዘምራን ደብረ ቅ.ኣንጠንዮስ ጎዳይፍ ኣስመራ Vol#2",msg)&Bot.editInlineKeyboard(b,msg)
