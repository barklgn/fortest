/*CMD
  command: /eska1
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
[{title:"🔼ዋና ገፅ ",command:"/mych"},{title:"⏩ቀጣይ",command:"/eska2"}]
]

Bot.editMessage("❤️ተአምር 1\n\n(በመጀመሪያው የአለም ጦርነት ጊዜ አንድ በፖሎኒያ ወታደር የተሰራ ተአምር)\n\nበድንኳን ውስጥ ተኝተን ሳለን በድንገት የመድፍ ድምፅ ተሰማ አለቃችን በፍጥነት ተነስቶ ሁላችንንም አስነስቶ በየሥፍራችን እንድንገባና እንድንታኮስ አዘዘ በመትርየስ በመድፍ በቦምብ ምድር ትንቀጠቀጥ ጀመር። በዚያን ጊዜ የአይሮፕላን ድምፅ በሰማይ ላይ ተሰማ ወዲያውም የመርዝ ጭስ ጋዝ ሲነሰነስ ታየ አለቃችን ተስፋ በመቁረጥ ጋዝ ጋዝ እያለ ጮኸ ሁላችንም የጋዝ መከላከያችን በድንኳን ውስጥ ትተን ወጥተን ስለነበረ ተመልሶ ለማምጣት ጊዜ አልነበረንም በርግጥ ሞት እንደመጣች አውቀን እርስ በርሳችን ተያየን መርዙ አፈነን እኔ በታፈንኩ ጊዜ የኮቴን ቁልፍ ስፈታ በአንገቴ የነበረ እስካፒለር በእጄ ውስጥ ገባ ወዲያውኑ የደም አረፋ አስታወከኝና ስወድቅ ማርያም ሆይ ብዬ እስካፒለሩን በአፌ አስገባሁ። አእምሮዬም ጠፍቶ መሬት ላይ ተጋደምኩ ወድቄ ምን ያህል ጊዜ እንደቆየሁ አላቅም።  ወደ ሆስፒታል ወስደውኝ እዚያም አእምሮዬ ከተመለሰ በኃላ አንድ አስታማሚ (ወታደሮች ሁሉ ሞተው ይህ ወታደር ብቻ ሳይሞት እንዴት ተረፈ ነገሩ አልገባኝም) ሲል ሰማሁት።\n\nእኔ ወደዘመቻ ለመሄድ ስነሳ እናቴ እያለቀሰች (ልጄ እንካ ይህን እስካፒለር አጥልቅ ካንገትህም አትለይ በአደጋም ጊዜ ማርያምን ለምን ከዚህ ወዲያ ምንም የሚያስፈራ ነገር እንደሌለብህ እመን) ብላ ሰጥታኝ ነበር። የእናቴ ቃል ተፈፀመ ሁሉ ሲሞት እኔ ብቻ ተረፍኩ። ትልቅ ተአምር ተደረገልኝ ያች የእመቤቴ እስካፒለር አዳነችኝ።\n\nምንጭ:- ልብሰ ማርያም(እስካፒለር) ከሚል መፅሀፍ..(በአባ ገብረ ሚካኤል መኮንን የተፃፈ",msg)&Bot.editInlineKeyboard(b,msg)
