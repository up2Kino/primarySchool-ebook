
$(function () {
    var book_data = [];
    var book_data = [
        {
            text: [
                "【融   知】非遗传承（桃花坞木刻年画校本教材）"
            ],
            type: 0,
            page: 1
        },
        {
            text: [
                '<div><h1 class="title">目录</h1></div>'
            ],
            type: 2,
            page: 2
        },
        {
            text: [
                "第qwasdasd231212edad章内容@asdasdasd1231", "asdasdasd", "d2q1ed213eqe"
            ],
            type: 1,
            page: 3
        },
        {
            text: [
                '<div class="page_d"><img class="fullimg" src="img/firstChapter/1-A.JPG">'
            ],
            title: "",
            type: 3,
            page: 4
        },
        {
            text: [
                '<div><h1 class="title">名迹寻踪</h1></div>' +
                '<div><img class="circleImg" src="img/firstChapter/1-B.jpg"></div>' +
                '<div><h2 class="subtitle">单元导语</h2></div>' +
                '<div><p class="text_pl">苏州桃花坞，是个区域地名，这里“活态”文化遗存很多，特别是民间手工技艺盛极一时。</p></div>' +
                '<div><p class="text_pl">本单元简要介绍桃花坞地域文化以及“桃花坞木版年画”的前世今生，让大家在追寻桃花坞文化的踪迹时，把姑苏民间文化遗产传承下去。</p></div>' +
                '<div><h2 class="subtitle">阅读指南</h2></div>' +
                '<div><p class="text_pl">同学们，你能说说“桃花坞”地区的范围吗？“桃花坞木版年画”的历史吗？</p></div>'
            ],
            title: "",
            type: 1,
            page: 5
        },
        {
            text: [
                '<div><h1 class="title">桃花坞（wu）</h1></div>' +
                '<div><h2 class="subtitle">我了解</h2></div>' +
                '<div><img class="img" src="img/firstChapter/img/1.png"></div>' +
                '<div><p class="text_pl">桃花坞，指苏州市桃花坞大街和周边地区。也有说桃花坞是包括东起报恩寺，西至阊门横街，南至下塘街神仙庙，北至唐寅坟双荷花池一带的总称。</p></div>' +
                '<div><p class="text_pl">宋范成大《阊门泛槎（chá）》诗有“桃坞论今昔”句，明唐寅《桃花庵歌》中有“桃花坞里桃花庵，桃花庵里桃花仙”句，可见“桃花坞”名称由来已久。</p></div>'
            ],
            type: 2,
            page: 6
        },
        {
            text: [
                '<div><p class="text_pl">桃花坞又简称为桃坞。谢家福有本专门记载桃花坞一带人文历史的书就叫《桃坞名胜记》。在人民路接驾桥西面的东中市曾经有过一家电影院叫桃坞影剧院。</p></div>' +
                '<div><img class="img" src="img/firstChapter/img/2.png"></div>' +
                '<div><p class="text_pl">历史上的桃花坞几经兴废。近年来，苏州倾力打造桃花坞历史文化片区。目前，唐寅故居文化区已基本建成，主要包括唐寅故居遗址、唐寅祠、文昌阁等。' +
                '阊门西街也已改造完成，主要呈现姑苏民俗文化。桃花坞历史文化片区的升级改造是对物质文化遗存、非物质文化遗存的一种特别保护。</p></div>'
            ],
            type: 1,
            page: 7
        },
        {
            //need work with imgs
            text: [
                '<div><img class="img" src="img/firstChapter/img/3.png" ><div class="imgTitle">唐寅故居</div></div>' +
                '<div><img class="flexImg" src="img/firstChapter/img/3.png"></div>'
            ],
            type: 2,
            page: 8
        },
        {
            text: [
                '<div><h2 class="subtitle">我标记</h2></div>' +
                '<div><p class="text_pl">在地图上找一找“苏州市桃坞中心小学校”在哪里？唐寅故居在哪里？阊门西街在哪里？用彩色笔标记出来。</p></div>' +
                '<div><img class="img" src="img/firstChapter/img/6.png"></div>'
            ],
            type: 1,
            page: 9
        },
        {
            text: [
                '<div><h1 class="title">苏州桃花坞木版年画</h1></div>' +
                '<div><h2 class="subtitle">我了解</h2></div>' +
                '<div><p class="text_pl">桃花坞木版年画是我国南方流传最广、影响最大的一种民间木刻画。因为曾经集中在苏州城内桃花坞一带生产而得名。</p></div>' +
                '<div><p class="text_pl">桃花坞木版年画和河南朱仙镇、天津杨柳青、山东潍坊杨家埠、四川绵竹的木版年画，并称为中国五大民间木版年画。</p></div>' +
                '<div><p class="text_pl">桃花坞年画源于宋代的雕版印刷工艺，由绣像图演变而来，到明代发展成为民间艺术流派，清代雍正、乾隆年间为鼎盛时期，每年出产的桃花坞木版年画达百万张以上。</p></div>' +
                '<div><p class="text_pl">桃花坞木版年画构图对称、丰满，色彩绚丽，常以紫红色为主调表现欢乐气氛，基本全用套色制作，刻工、色彩和造型具有精细秀雅的江南地区民间艺术风格，主要表现吉祥喜庆、民俗生活、戏文故事、花鸟蔬果和驱鬼避邪等中国民间传统审美内容，民间画坛称为“姑苏版”。2006年5月20日，该遗产经国务院批准列入第一批国家级非物质文化遗产名录。</p></div>'

            ],
            type: 2,
            page: 10
        },
        {
            text: [
                '<div><h2 class="subtitle">我欣赏</h2></div>' +
                '<div><img class="imgleft" src="img/firstChapter/img/7.png"><div class="imgTitle">唐寅故居</div></div>' +
                '<div><img class="imgright" src="img/firstChapter/img/8.png"><div class="imgTitle">唐寅故居</div></div>' +
                '<div><img class="imgleft" src="img/firstChapter/img/7.png"><div class="imgTitle">唐寅故居</div></div>' +
                '<div><img class="imgright" src="img/firstChapter/img/8.png"></div>'
            ],
            type: 1,
            page: 11
        },
        {
            text: [
                '<div><h1 class="title">读后评价</h1></div>' +
                '<div><p class="text_pl">1.我知道“桃花坞”地区在哪里，能在地图上准确地标注。</p></div>' +
                '<div><p class="text_pl">在互评和自评后打星：☆☆☆☆</p></div>' +
                '<div><p class="text_pl">2.我能简单说说“桃花坞木版年画”的历史。</p></div>' +
                '<div><p class="text_pl">在互评和自评后打星：☆☆☆☆</p></div>'

            ],
            type: 2,
            page: 12
        },
        {
            text: [
            ],
            type: 1,
            page: 13
        },
        {
            text: [
                '<div class="page_d"><img class="fullimg" src="img/secondChapter/2-A.png">'
            ],
            type: 3,
            page: 13
        },
        {
            text: [
                '<div><h1 class="title">名胜游历</h1></div>' +
                '<div><img class="circleImg" src="img/firstChapter/1-B.jpg"></div>' +
                '<div><h2 class="subtitle">单元导语</h2></div>' +
                '<div><p class="text_pl">桃花坞历经沧桑，许多人文景观逐渐淹没在历史尘埃中。</p></div>' +
                '<div><p class="text_pl">本单元主要介绍了桃花坞区域内的历史人文古迹，如 “唐寅文化故居”、“泰伯庙”、“文山寺”等，旨在让学生通过寻访、调查、收集、整理等实践活动，明白我们脚下的这片土地处处是名胜，蕴含着深厚的文化，继承它、保护它是我们的责任和义务。</p></div>' +
                '<div><h2 class="subtitle">阅读指南</h2></div>' +
                '<div><p class="text_pl">绘制一张桃花坞地区名胜游历的打卡地图吧！</p></div>'
            ],
            title: "",
            type: 1,
            page: 14
        },
        {
            text: [
                '<div><h1 class="title">唐寅故居</h1></div>' +
                '<div><h2 class="subtitle">我了解</h2></div>' +
                '<div><p class="text_pl">在明弘治年间，画家唐伯虎在桃花坞买下一块废墟，在园址西南处筑室，广植桃花，取名“桃花庵”。桃花庵内筑有“学圃堂”、“梦墨亭”、“蛱蝶斋”等，并将屋前池塘沿用宋时五亩园内“双荷花池”的名字，与文徵明、祝枝山等常聚此处，吟诗作画。唐寅逝后，园渐荒废。</p></div>' +
                '<div><p class="text_pl">现经复原后故居内所有的堂、斋、室名称都出自唐寅书画作品，具有鲜明的主题色彩。故居牌匾上写“唐寅故居”四字由原中国书法协会副主席言恭达所题写。穿过大门，站在青莲桥上，东西双荷花池映入眼帘，美不胜收。</p></div>'+
                '<div><img class="imgleft" src="img/firstChapter/img/7.png"></div>' +
                '<div><img class="imgright" src="img/firstChapter/img/7.png"></div>' 
            ],
            type: 2,
            page: 15
        },
        {
            text: [
                '<div><h2 class="subtitle">我实践</h2></div>' +
                '<div><p class="text_pl">1.在休息日，邀请家长一起到唐寅故居走一走，拍下美景。</p></div>' +
                '<div><img class="img" src="img/firstChapter/img/1.png"></div>' +
                '<div><p class="text_pl">2.搜集和唐寅有关的民间故事，讲给小伙伴听。</p></div>'
            ],
            title: "",
            type: 1,
            page: 16
        },
        {
            text: [
                '<div><h1 class="title">朴    园</h1></div>' +
                '<div><h2 class="subtitle">我了解</h2></div>' +
                '<div><p class="text_pl">朴园位于平门内校场路8号，1991年被列为苏州市文物保护单位，现为桃花坞木版年画博物馆。朴园四周围以花岗石墙，采用传统造园布局，以山水为主景，峰峦起伏，池架曲桥，聚分兼得。园内花木茂盛，有白皮松、罗汉松、广玉兰、樱花、杜鹃等，最为珍贵的是两株地栽五针松，高约2米，生长健旺。</p></div>' +
                '<div><img class="imgleft" src="img/firstChapter/img/7.png"></div>' +
                '<div><img class="imgright" src="img/firstChapter/img/7.png"></div>' 
            ],
            type: 2,
            page: 17
        },
        {
            text: [
                '<div><img class="img" src="img/firstChapter/img/1.png"></div>'+
                '<div><h2 class="subtitle">我实践</h2></div>' +
                '<div><p class="text_pl">1.在家长的带领下，和小伙伴参观朴园的“桃花坞木版年画博物馆”。</p></div>' +
                '<div><p class="text_pl">2.挑出最满意的照片发在微信上，并写一两句自己的体会。</p></div>' +
                '<div><p class="text_pl">3.为伙伴发的照片点赞。</p></div>'
            ],
            title: "",
            type: 1,
            page: 18
        },
        {
            text: [
                '<div><h1 class="title">泰伯庙</h1></div>' +
                '<div><h2 class="subtitle">我了解</h2></div>' +
                '<div><p class="text_pl">泰伯庙位于苏州市阊门内下塘街250号桃花坞历史街区之中，为纪念古公父（周太王）长子泰伯而建，历史可追溯至东汉， 为江南地区第一座奉祀吴地始祖泰伯的庙宇。1982年，泰伯庙被列为第二批苏州市文物保护单位。</p></div>' +
                '<div><img class="img" src="img/firstChapter/img/1.png"></div>'
            ],
            type: 2,
            page: 19
        },
        {
            text: [
                '<div><img class="img" src="img/firstChapter/img/1.png"></div>'+
                '<div><h2 class="subtitle">我实践</h2></div>' +
                '<div><p class="text_pl">1.在家长的带领下参观泰伯庙。</p></div>' +
                '<div><p class="text_pl">2.听老师讲泰伯的故事，学着说一说。</p></div>'
            ],
            title: "",
            type: 1,
            page: 20
        },
        {
            text: [
                '<div><h2 class="subtitle">【泰伯三让天下】</h2></div>' +
                '<div><p class="text_pl">泰伯，姬姓，他并非吴地土著，而是中原地区的岐山周原（今陕西岐山县）人，生于殷高宗武丁40年（前1285年）。泰伯父亲古公亶父（gǔ gōng dǎn fù）是周国的国君周太王。泰伯是古公亶父的长子，泰伯以下还有其次子仲雍和三子季历。</p></div>' +
                '<div><p class="text_pl">泰伯勤奋好学，为人宽厚，孝敬父母，与兄弟相处和睦。但周太王古公亶父并不看好泰伯继承王业，他曾说：“我世当有兴者，其在昌乎！”他这里所说的“昌”是指其三子季历的儿子姬昌，也就是说他是寄希望于三子季历一系来继承并开拓其王业的。泰伯是个孝子，也是个深知进退的贤者。他为了遵从父亲的意愿，避免手足相争，便将原本应属长子的王位继承权禅让给了三弟季历。他说服二弟仲雍备了行李和干粮，趁父亲生病之时，托言往衡山采药而离开了故国。此为泰伯三让天下中之一让。不久，周太王病逝，泰伯与仲雍回去奔丧。季历与众臣要求泰伯留下继位，泰伯坚不肯受，丧毕乃去，此为二让。后泰伯为了让季历安心于周国王业的经营，索性和仲雍举族南迁，跋涉3000多里，来到苏南太湖之滨的梅里（今无锡市梅里村一带）避居，此为三让。</p></div>'            ],
            title: "",
            type: 2,
            page: 21
        },
        {
            text: [
                '<div><p class="text_pl">泰伯在当时还是“刀耕火种”、“一年一收”的江南，和土著居民友好相处，帮助他们发展当地的生产、文化，建立了江南第一个雏形国家，世称“句吴（gōu wú）”。泰伯的的优秀品格和不朽功绩，受到后世称颂。</p></div>'
            ],
            title: "",
            type: 1,
            page: 22
        },
        {
            text: [
                '<div><h1 class="title">五峰园</h1></div>' +
                '<div><h2 class="subtitle">我了解</h2></div>' +
                '<div><p class="text_pl">五峰园位于桃花坞五峰园弄内。五峰园建于明代嘉靖年间，是长州尚书杨成所筑，所以又称为“杨家园”。还有一个说法是文徵明侄子画家文伯仁所筑。文伯仁号五峰老人，园中耸立五座太湖石峰，高二丈，颇有皱瘦玲珑之致，形似五位老丈，名五老峰。 五峰园以五老峰为造景中心，水池、石桥、古树、旱船、园亭、岩洞相映成趣，景色秀丽多姿。</p></div>' +
                '<div><img class="img" src="img/firstChapter/img/1.png"></div>'
            ],
            type: 2,
            page: 23
        },
        {
            text: [
                '<div><h2 class="subtitle">我实践</h2></div>' +
                '<div><p class="text_pl">1.在家长的带领下，游览五峰园，画一画五峰园的五座假山石。</p></div>' +
                '<div><p class="text_pl">2.五峰园以五座假山石闻名，还有留园的冠云峰、第十中学的瑞云峰和狮子林的太湖石假山群也值得去看一看，拍些照片留做纪念。</p></div>'+
                '<div><img class="img" src="img/firstChapter/img/1.png"></div>'
            ],
            type: 1,
            page: 24
        },
        {
            text: [
                '<div><h1 class="title">文山寺</h1></div>' +
                '<div><h2 class="subtitle">我了解</h2></div>' +
                '<div><p class="text_pl">文山寺，位于姑苏城西北的文丞相弄内，是苏州市唯一的一座尼众丛林（俗称尼姑庵）。文山寺东抵中街路，南临东中市，西邻阊门西街，北枕桃花河，与桃花坞大街隔河相望，是南宋的古寺，已有八百多年历史。文山寺与历史人物文天祥有关，所以文山寺前的这条小弄就叫“文丞相弄”。</p></div>' +
                '<div><img class="img" src="img/firstChapter/img/1.png"></div>'
            ],
            type: 2,
            page: 25
        },
        {
            text: [
            ],
            type: 1,
            page: 26
        },
        {
            text: [
                '<div><h2 class="subtitle">我实践</h2></div>' +
                '<div><p class="text_pl">1.在家长的带领下，参观文山寺，了解文天祥抗元故事，学着讲一讲。</p></div>' +
                '<div><h2 class="subtitle">【文天祥抗元】</h2></div>' +
                '<div><p class="text_pl">文天祥是南宋的民族英雄。他本来是个文官，可为了保卫国家，他勇敢地走上了战场。那时候，元朝派出大军，要消灭南宋，文天祥听到消息，拿出自己的家产，召募起3万壮士，组成义军，抗元救国。有人说：“元军人那么多，你这么点人怎么抵挡？不是虎羊相拼吗？”文天祥说：“国家有难却无人解救，是我最心疼的事。我力量虽然单薄，也要为国尽力呀！”</p></div>' +
                '<div><p class="text_pl">后来，南宋统治者投降了元军，文天祥仍然坚持抗争。他对大家说：“救国如救父母。父母有病，即使难以医治，儿子还是要全力抢救啊！”不久，他兵败被俘，坚决不肯投降，还写下了有名的诗句：“人生自古谁无死，留取丹心照汗青。”表明自己坚持民族气节至死不变的决心。多少年来，文天祥的救国精神，代代相传，已经成为中华民族共同的精神财富。</p></div>' +
                '<div><p class="text_pl">2.诵读文天祥的《过零丁洋》。</p></div>' 
            ],
            type: 2,
            page: 27
        },
        {
            text: [
                '<div><h2 class="subtitle">【《过零丁洋》】</h2></div>' +
                '<div><p class="text_pl">辛苦遭逢起一经，干戈寥落四周星。山河破碎风飘絮，身世浮沉雨打萍。</p></div>' +
                '<div><p class="text_pl">惶恐滩头说惶恐，零丁洋里叹零丁。人生自古谁无死？留取丹心照汗青。</p></div>' +
                '<div><p class="text_pl">这首诗见于文天祥《指南录》，是文天祥的代表作。公元1278年（宋祥兴元年），文天祥在广东海丰北五坡岭兵败被俘，押到船上，祥兴二年（1279）过零丁洋时写下此诗。当时元军元帅张弘范逼他写信招降南宋在海上坚持抵抗的张世杰、陆秀夫等人，文天祥不从，他以此诗明志节。</p></div>' +
                '<div><h2 class="subtitle">译文</h2></div>' +
                '<div><p class="text_pl">我艰苦的生活经历是从读书做官开始的，以微薄的兵力与元军苦战了四年。大宋的江山像被风吹散的飘絮一样支离破碎，我的身世像雨中被雨打的浮萍一样时起时沉。</p></div>' +
                '<div><p class="text_pl">去年在惶恐滩头述说自己的惶恐，而今在零丁洋里叹息自己的零丁。自古以来人活在世上哪能不死呢？我愿留下这颗赤诚的心来光照史册。</p></div>'
            ],
            type: 1,
            page: 28
        },
        {
            text: [
                '<div><h1 class="title">平门</h1></div>' +
                '<div><h2 class="subtitle">我了解</h2></div>' +
                '<div><p class="text_pl">平门，位于苏州城北，当年伍子胥平齐大军从此门出，打败齐国，班师回朝，又由此门入，所以叫“平门”。平门经过修整，重现古时候风貌。在平门城楼上可以远眺平门桥，看小船穿越而过，能引起人无限遐思。</p></div>' +
                '<div><img class="img" src="img/firstChapter/img/1.png"></div>'
            ],
            type: 2,
            page: 29
        },
        {
            text: [
                '<div><img class="img" src="img/firstChapter/img/1.png"></div>'+
                '<div><h2 class="subtitle">我实践</h2></div>' +
                '<div><p class="text_pl">1.走在平门城墙上，遥看对岸的火车站，把你心中所想和小伙伴交流交流。</p></div>' +
                '<div><p class="text_pl">2.让家长带着到苏州的盘门、阊门、相门、娄门、胥门、金门游览，拍下照片记录下来，发在微信上。</p></div>' +
                '<div><p class="text_pl">3.你也可以赞一下小伙伴的微信。</p></div>'
            ],
            type: 1,
            page: 30
        },
        {
            text: [
                '<div><h1 class="title">阊门</h1></div>' +
                '<div><h2 class="subtitle">我了解</h2></div>' +
                '<div><p class="text_pl">阊门，是苏州古城的西门，在金门的北边，穿过阊门，沿七里山塘可以到达虎丘。从清代乾隆年间的《姑苏繁华图》中可以看出，阊门内城门临阊门大街（今西中市），上面有城楼，外城门靠吊桥，瓮城内另有套城，并还有南、北两个童梓门。南童梓门通今南新路，北童梓门通北码头。</p></div>' +
                '<div><img class="img" src="img/firstChapter/img/1.png"></div>'
            ],
            type: 2,
            page: 31
        },
        {
            text: [
                '<div><img class="img" src="img/firstChapter/img/1.png"></div>'+
                '<div><h2 class="subtitle">我实践</h2></div>' +
                '<div><p class="text_pl">1.和家长一起，从阊门出发，沿七里山塘走到虎丘，试一试哦。</p></div>' +
                '<div><p class="text_pl">2.苏州的蛇门只有一段城墙了，在环古城步道的东南方向，去找一找吧。</p></div>'
            ],
            type: 1,
            page: 32
        },
        {
            text: [
                '<div><h1 class="title">读后评价</h1></div>' +
                '<div><p class="text_pl">1.你游历了哪些桃花坞地区的名胜呢？填一填，简单写一写自己的感受。</p></div>' +
                '<div><img class="img" src="img/firstChapter/img/1.png"></div>'
            ],
            type: 2,
            page: 33
        },
        {
            text: [
                '<div><img class="img" src="img/firstChapter/img/1.png"></div>'+
                '<div><p class="text_pl">2.画一张名胜游历的打卡地图。</p></div>'+
                '<div><p class="text_pl">在互评和自评后打星：☆☆☆☆</p></div>'
                // '<div><table class="text_pl"><tr><th>游历地点</th><th>感  受</th></tr><tr></tr></table></div>'
            ],
            type: 1,
            page: 34
        },
        {
            text: [
                '<div class="page_d"><img class="fullimg" src="img/firstChapter/1-A.JPG">'
            ],
            title: "",
            type: 3,
            page: 35
        },
        {
            text: [
                '<div><h1 class="title">名篇诵读</h1></div>' +
                '<div><img class="circleImg" src="img/firstChapter/1-B.jpg"></div>' +
                '<div><h2 class="subtitle">单元导语</h2></div>' +
                '<div><p class="text_pl" style="font-size:14px">花坞是苏州文化沉淀颇为丰厚的地区之一，自西晋到民国有二百四十多位作者的七百余首诗词，均与桃花坞地区相关。这些咏唱跨越时空的隧道，记载了桃花坞地区的历史和社会变迁，成为我们了解往昔桃花坞的桥梁。</p></div>' +
                '<div><p class="text_pl" style="font-size:14px">唐伯虎的《桃花庵诗》、陆龟蒙的《奉和袭美太湖诗二十首·桃花坞》等诗，或写桃花坞的优美景色，或抒归隐山林的情怀，都是不可多得的古诗佳作。“名篇诵读”单元搜集了部分吟诵桃花坞胜景的诗词，学生诵读诗词，练习硬笔书法，品味美文佳句，在经典传统文化的熏陶中涵养正气，不断提高人文素养和思想境界。</p></div>' +
                '<div><h2 class="subtitle">阅读指南</h2></div>' +
                '<div><p class="text_pl" style="font-size:14px">你能熟读、背诵哪几首描写桃花坞美景的诗呢？</p></div>'
            ],
            title: "",
            type: 1,
            page: 36
        },
        {
            text: [
                '<div><h1 class="title">桃花庵歌</h1></div>' +
                '<div><p class="text_pl">【明】 唐寅</p></div>' +
                '<div><p class="text_pl">桃花坞里桃花庵，桃花庵里桃花仙；'+
                '桃花仙人种桃树，又摘桃花换酒钱。 '+
                '酒醒只在花前坐，酒醉还来花下眠； '+
                '半醒半醉日复日，花落花开年复年。 '+
                '但愿老死花酒间，不愿鞠躬车马前； '+
                '车尘马足贵者趣，酒盏花枝贫者缘。 '+
                '若将富贵比贫贱，一在平地一在天； '+
                '若将贫贱比车马，他得驱驰我得闲。 '+
                '别人笑我太疯癫，我笑他人看不穿； '+
                '不见五陵豪杰墓，无花无酒锄作田。'+
                '</p></div>'+
                '<div><img class="img" src="img/firstChapter/img/1.png"></div>' 
            ],
            type: 2,
            page: 37
        },
        {
            text: [
                '<div><h2 class="subtitle">作者简介</h2></div>' +
                '<div><p class="text_pl" style="font-size:14px">《桃花庵歌》是明代著名画家、文学家、诗人唐寅的经典诗作。</p></div>' +
                '<div><p class="text_pl" style="font-size:14px"><img class="flexsmallimg" src="img/firstChapter/img/7.png" align="right">唐寅（1470—1523），字伯虎，一字子畏，号六如居士、桃花庵主等。据说是明宪宗成化六年庚寅年寅月寅日寅时生，故名唐寅。汉族，吴县（今江苏苏州）人。他玩世不恭而又才气横溢，以诗文擅名，与祝允明、文徵明、徐祯卿并称“江南四大才子”。唐寅最为有名的是他的画作，与沈周、文徵明、仇英并称“吴门四家”。民间有很多关于唐伯虎的传说，最为人熟悉的《唐伯虎点秋香》曾多次被改编成戏剧，拍成电视剧及电影。</p></div>' +
                '<div><p class="text_pl" style="font-size:14px">《桃花庵歌》是唐寅诗词中最著名的一首，诗人自喻“桃花仙人”以“老死花酒间”与“鞠躬车马前”分别代指两种截然不同的生活方式，又以富贵与贫贱的各有所失，形成鲜明强烈的对比，表现了自己平凡真实中带有庸俗消极一面的真实内心，带有愤世嫉俗之意气。全诗层次清晰，语言浅近，蕴涵无限的艺术张力，给人以绵延的审美享受和强烈的认同感。</p></div>'+
                '<div><h2 class="subtitle">诗情画意</h2></div>' +
                '<div><p class="text_pl" style="font-size:14px">1.品读《桃花庵诗》，有滋有味地背诵。</p></div>' +
                '<div><p class="text_pl" style="font-size:14px">2.了解唐寅的生平。</p></div>'
            ],
            type: 1,
            page: 38
        },
        {
            text: [
                '<div><h1 class="title">题画廿四首（其一）</h1></div>' +
                '<div><p class="text_pl">【明】 唐寅</p></div>' +
                '<div><p class="text_pl">草屋柴门无点尘，门前溪水绿粼粼。'+
                '中间有甚堪图画，满坞桃花一醉人。</p></div>'+
                '<div><p class="text_pl">1.搜集《题画廿四首》的其他诗句，挑感兴趣的诵读，与小伙伴分享。</p></div>' +
                '<div><p class="text_pl">2.读诗，想象画面，给诗配上一幅画。</p></div>' 
            ],
            type: 2,
            page: 39
        },
        {
            text: [
                '<div><img class="img" src="img/firstChapter/img/1.png"></div>' 
            ],
            type: 1,
            page: 40
        },
        {
            text: [
                '<div><h1 class="title">期顾德甫兄弟看花不至</h1></div>' +
                '<div><p class="text_pl">【明】 归子慕</p></div>' +
                '<div><p class="text_pl">脉脉春欲深，迟迟日方午。'+
                '闲闲溪桥边，寂寂桃花坞。'+
                '浅水潮初生，渔舟倒出浦。'+
                '无奈东风狂，花落不可数。'+
                '</p></div>'+
                '<div><h2 class="subtitle">作者简介</h2></div>' +
                '<div><p class="text_pl" style="font-size:14px"><img class="flexsmallimg" src="img/firstChapter/img/7.png" align="right">归子幕，明朝昆山人。字季思，归有光的小儿子。生于明世宗嘉靖四十二年，卒于神宗万历三十四年，享年四十四岁。万历十九年（公元一五九一年）举人。再试礼部不第，屏居江村，与无锡高攀龙、嘉善吴志远最友善。他居住的陶庵，槿墙茅屋，诗歌以为乐。学者称清远先生。子慕著有《陶园集》四卷，《明史艺文志》传于世。</p></div>' +
                '<div><p class="text_pl">《期顾德甫兄弟看花不至》描写的是桃花坞唐寅故居附近的恬静的景色和捕鱼的生活场景。</p></div>' 
            ],
            type: 2,
            page: 41
        },
        {
            text: [
                '<div><h2 class="subtitle">诗情画意</h2></div>' +
                '<div><p class="text_pl">二选其一</p></div>' +
                '<div><p class="text_pl">1.想象《期顾德甫兄弟看花不至》诗中描绘的的情景，画下来。</p></div>' +
                '<div><p class="text_pl">2.手绘一张你喜欢的桃花或者小桥流水简图。</p></div>'+
                '<div><img class="img" src="img/firstChapter/img/1.png"></div>' 
            ],
            type: 1,
            page: 42
        },
        {
            text: [
                '<div><h1 class="title">独有桃花坞</h1></div>' +
                '<div><p class="text_pl">【宋】 张嵲（niè）</p></div>' +
                '<div><p class="text_pl">三吴皆白水，处处只横舟。'+
                '独有桃花坞，光风尽日留。'+
                '一朝山雨过，忽见夏阴稠。'+
                '讵惜繁华晚，徒嗟岁月遒。'+
                '</p></div>'+
                '<div><img class="img" src="img/firstChapter/img/1.png"></div>'  
            ],
            type: 2,
            page: 42
        },
        {
            text: [
                '<div><h2 class="subtitle">作者简介</h2></div>' +
                '<div><p class="text_pl" style="font-size:14px"><img class="flexsmallimg" src="img/firstChapter/img/7.png" align="left">张嵲（1094—1146），字巨山，宋朝官员，官至员外郎，擅长作诗，著有《紫微集》三十卷。</p></div>' +
                '<div><h2 class="subtitle">诗情画意</h2></div>' +
                '<div><p class="text_pl">1.想象《独有桃花坞》诗中描绘的的美景，用自己的话说一说。</p></div>' +
                '<div><p class="text_pl">2.找找诗人张嵲其他的诗诵读诵读。</p></div>' 
            ],
            type: 1,
            page: 43
        },
        {
            text: [
                '<div><h1 class="title">桃花坞抒情</h1></div>' +
                '<div><p class="text_pl">毕东民</p></div>' +
                '<div><p class="text_pl"></br>留在春泥里的记忆</br>'+
                '在多年后盛开出一片桃花</br>'+
                '每当风儿轻轻吹过</br>'+
                ' 缤纷的花枝开满枝桠</br>'+
                '</br>'+
                '粉红的涟漪层层荡起</br>'+
                '似你的脸如染飞霞</br>'+
                '</br>'+
                '你醉了吗</br>'+
                '怎会有他的气息</br>'+
                '酣睡在花枝下</br>'+
                '</br>'+
                '桃花坞里桃花庵</br>'+
                '桃花庵里桃花仙</br>'+
                '他是这样写诗的　他爱桃花</br>'+
                '</br>'+
                '被你围绕是一种幸福</br>'+
                '如果我是那一枝春梢</br>'+
                ' 从来没有被你青睐　我也愿意</br>'+
                '</br>'+
                '</p></div>'
            ],
            type: 2,
            page: 44
        },
        {
            text: [
                '<div><h2 class="subtitle">作者简介</h2></div>' +
                '<div><p class="text_pl">毕东民，1974年12月生，河北省文安县人，毕业于廊坊师范学院中文系。从小酷爱写作，创作有诗集《明月松间照》、散文集《清泉石上流》、小说《救赎》《嫦娥》《红尘梦》等。</p></div>' +
                '<div><h2 class="subtitle">诗情画意</h2></div>' +
                '<div><p class="text_pl">这是一首现代诗，美美地诵读，感受诗中抒发的情感。</p></div>' +
                '<div><img class="img" src="img/firstChapter/img/1.png"></div>'  
            ],
            type: 1,
            page: 45
        },
        {
            text: [
                '<div><h1 class="title">十里桃花坞</h1></div>' +
                '<div><p class="text_pl">金鹁鸪（bó gū）</p></div>' +
                '<div><p class="text_pl"></br>十里桃花坞，游人若姑苏。</br>'+
                '群山皆染色，峰峦映彩湖。</br>'+
                '春莺林中闹，粉蝶花间舞。</br>'+
                '丽人留倩影，芳菲入画图。</br>'+
                '日暮炊烟起，依依踏归途。</br>'+
                '车龙笛声急，无奈路太堵。</br>'+
                '</p></div>'+
                '<div><img class="img" src="img/firstChapter/img/1.png"></div>'  
            ],
            type: 2,
            page: 46
        },
        {
            text: [
                '<div><h2 class="subtitle">作者简介</h2></div>' +
                '<div><p class="text_pl">金鹁鸪，是一名公务员，闲暇时常常背着照相机走街串巷，寻找精彩的瞬间。有时还给自己的照片配上小诗。</p></div>' +
                '<div><h2 class="subtitle">诗情画意</h2></div>' +
                '<div><p class="text_pl">1.诗中有云“芳菲入画图”，那请你想象诗中画面，用彩笔画下来。</p></div>' +
                '<div><p class="text_pl">2.你是否也会像作者金鹁鸪一样，背着相机走街串巷，寻找精彩的瞬间再配上一首小诗呢？</p></div>' +
                '<div><img class="img" src="img/firstChapter/img/1.png"></div>'  
            ],
            type: 1,
            page: 47
        },
        {
            text: [
                '<div><h1 class="title">读后评价</h1></div>' +
                '<div><p class="text_pl">我会诵读的描写桃花坞美景的诗：</p></div>' +
                '<div><img class="img" src="img/firstChapter/img/1.png"></div>'  
            ],
            type: 2,
            page: 48
        },
        {
            text: [

            ],
            type: 1,
            page: 49
        },
        {
            text: [
                '<div class="page_d"><img class="fullimg" src="img/secondChapter/2-A.png">'
            ],
            type: 3,
            page: 50
        },
        {
            text: [
                '<div><h1 class="title">名作欣赏</h1></div>' +
                '<div><img class="circleImg" src="img/firstChapter/1-B.jpg"></div>' +
                '<div><h2 class="subtitle">单元导语</h2></div>' +
                '<div><p class="text_pl" style="font-size:14px">年画是中国老百姓喜闻乐见的传统艺术形式。随着印刷技术的进步，手工木版年画逐渐成为非物质文化遗产。“北有杨柳青，南有桃花坞”，苏州桃花坞木版年画色彩饱满、 明快活泼，是我国南方年画的代表。 </p></div>' +
                '<div><p class="text_pl" style="font-size:14px">本章节收录了《一团和气》《百子婴戏图》《湖畔教子图》《门神画》《龙凤呈祥》五幅极具代表性的桃花坞木版年画作品供学生欣赏。这五福年画同时呈现在学校门厅的上方，通过本单元的名作欣赏，希冀能引导学生细细品味、耐心观摩桃花坞木版年画，主动探索其中处处隐藏的民俗风景。</p></div>' +
                '<div><h2 class="subtitle">阅读指南</h2></div>' +
                '<div><p class="text_pl" style="font-size:14px">找一找桃花坞木版年画中的吉祥寓意和民俗风景。</p></div>'
            ],
            title: "",
            type: 1,
            page: 51
        },
        {
            text: [
                '<div><h1 class="title">一团和气</h1></div>' +
                '<div><h2 class="subtitle">我了解</h2></div>' +
                '<div><img class="circleImg" src="img/firstChapter/1-B.jpg"></div>'+
                '<div><p class="text_pl">独幅年画在桃花坞年画中内容最广，形式最多。人们根据时令、民俗等不同需求，张贴内容各异的独幅年画：逢年过节张贴《和气吉祥》《端阳喜庆》；商市开业挂《开市大吉》《招财进宝》；不误农时帖《春牛图》。还有民间传说、戏曲故事年画，更是内容丰富、形式多样，深受群众喜爱。</p></div>'
            ],
            type: 2,
            page: 50
        },
        {
            text: [
                '<div><p class="text_pl">《一团和气》又名《和气致祥》《和气吉祥》，是桃花坞年画中一幅影响极深，流传很广的独幅年画。</p></div>' +
                '<div><p class="text_pl">宋代理学家程颢（hào），他的弟子形容他“终日坐，如泥塑人，然接人浑是一团和气”是说他和蔼可亲。明成化皇帝朱见深为强调皇室团结，以免萧墙之祸，特绘《一团和气》图作为号召。在“和气可亲”之外又添进了团结一致、和融相处的含义。</p></div>' +
                '<div><p class="text_pl">整幅画面呈圆形，中央是头戴红花，扎羊角发髻，活泼天真，憨态可掬的稚童笑脸，身穿锦团服饰，颈佩“日月同春”银锁，手捧“一团和气”卷轴，给人喜气洋洋、富足堂皇的感觉。在构图的形象塑造上特意呈圆形，寓意“团圆”、“圆满”，表达了人们在新春佳节中盼望家庭和睦、生活幸福、诸事顺遂的良好愿望。</p></div>' +
                '<div><p class="text_pl">习近平总书记于2023年7月6日上午在苏州考察期间，来到平江路，亲手印制了《一团和气》。</p></div>' +
                '<div><h2 class="subtitle">我实践</h2></div>' +
                '<div><p class="text_pl">1.收集、欣赏桃花坞独幅年画，想一想，独幅年画涵盖哪些内容？</p></div>'+
                '<div><p class="text_pl">2.为什么说桃花坞木版年画传统佳作中，《一团和气》是最受老百姓欢迎的一幅画？</p></div>'
            ],
            title: "",
            type: 1,
            page: 51
        },
        {
            text: [
                '<div><h1 class="title">门神画</h1></div>' +
                '<div><h2 class="subtitle">我了解</h2></div>' +
                '<div><p class="text_pl">装饰于门的年画,是木版年画最早的艺术形式。其内容广泛、造型别致、设色大胆、装饰性强,其有独特的民族艺术风格。在新的一年开始,张贴岁朝吉庆的门画,寄托护宅吉祥之意,祈祝岁岁平安，幸福美满。</p></div>'+
                '<div><p class="text_pl" ><img class="flexsmallimg" src="img/firstChapter/img/7.png" align="left">传统年画中以门神画起源最早，这两幅门神是秦琼和尉迟恭。秦琼字叔宝。尉迟恭字敬德（即胡敬德）均是唐初开国功臣。民间传说：“唐太宗不豫，寝门外抛砖弄瓦，鬼魅呼号，太宗惧之,以告群臣。秦叔宝奏曰：‘愿同胡敬德戎装立门外以伺。’太宗准奏，夜果无事。因命画工图二人之形象全装,悬于宫掖之左右门,邪崇已息,后世沿袭,逐演为门神。”左曰“门丞”,右曰“户尉”。</p><p class="text_pl">图中二将头戴武冠,身穿盔甲,足蹬战靴,腰佩弓箭；一将执锏,一将持剑,双目怒睁,威风凛凛,使鬼魅望而却步。</p></div>'
            ],
            type: 2,
            page: 50
        },
        {
            text: [
                '<div><h2 class="subtitle">我实践</h2></div>' +
                '<div><p class="text_pl">过年时学着贴门神。</p></div>'
            ],
            title: "",
            type: 1,
            page: 51
        },
        {
            text: [
                '<div><h1 class="title">百子婴戏图</h1></div>' +
                '<div><h2 class="subtitle">我了解</h2></div>' +
                '<div><p class="text_pl">《婴戏图》又称《婴戏纹》，以众多儿童游戏为题材，描绘了儿童嬉戏、玩耍的场面。</p></div>'+
                '<div><h2 class="subtitle">我实践</h2></div>' +
                '<div><p class="text_pl">1.仔细观察，画面中你能找到哪些古时儿童游戏项目？</p></div>'+
                '<div><p class="text_pl">2.你最感兴趣的游戏项目是什么？和伙伴一起游戏吧。</p></div>'
            ],
            type: 2,
            page: 52
        },
        {
            text: [
                '<div class="page_d"><img class="fullimg" src="img/secondChapter/2-A.png">'
            ],
            title: "",
            type: 1,
            page: 53
        },
        {
            text: [
                '<div><h1 class="title">湖畔教子图</h1></div>' +
                '<div><h2 class="subtitle">我了解</h2></div>' +
                '<div><p class="text_pl">《湖畔教子》，顾名思义是母亲在湖畔教育自己的孩子。整幅画面主要人物是手执书卷的母亲和练习箭术的儿童，母亲仿佛温柔地在指点孩子，孩子回首，专注聆听。窗外湖水粼粼，杨柳依依，构成了淡雅融洽的画卷。</p></div>'+
                '<div><h2 class="subtitle">我实践</h2></div>' +
                '<div><p class="text_pl">1.中国历史上有名的“教子”故事有《孟母三迁》和诸葛亮的《诫子书》。听老师讲讲这两个故事。</p></div>'+
                '<div><p class="text_pl">2.回忆和父母相处的温馨场面，说说当时的情景。</p></div>'
            ],
            type: 2,
            page: 54
        },
        {
            text: [
                '<div class="page_d"><img class="fullimg" src="img/secondChapter/2-A.png">'
            ],
            title: "",
            type: 1,
            page: 55
        },
        {
            text: [
                '<div><h1 class="title">龙凤呈祥图</h1></div>' +
                '<div><h2 class="subtitle">我了解</h2></div>' +
                '<div><p class="text_pl">龙和凤都是古代传说中的瑞兽祥禽，旧时民间举办婚礼时，亦将新郎比喻为龙，新娘象征作凤。身穿官服的新郎跨坐龙身，凤冠霞帔的新娘依托彩凤，一对新人脉脉传情，双双翱翔于仙山环阁之间。整幅画面用象征荣华的花草和寓意洪福的蝙蝠组成一个圆形边框，着意烘染喜庆欢快、福寿绵延的气氛。</p></div>'+
                '<div><p class="text_pl">龙凤呈祥一类的年画，都张帖在新婚夫妇的洞房，以寓家庭团圆、婚姻和美之意。</p></div>'+
                '<div><h2 class="subtitle">我实践</h2></div>' +
                '<div><p class="text_pl">1.“龙凤呈祥”在民间风俗中表示什么？</p></div>'+
                '<div><p class="text_pl">2.寻找一幅包含龙凤呈祥寓意的桃花坞木版年画作品。试着说一说，“龙凤呈祥”由哪些事物组成，各表示什么意义？</p></div>'
            ],
            type: 2,
            page: 56
        },
        {
            text: [
                '<div class="page_d"><img class="fullimg" src="img/secondChapter/2-A.png">'
            ],
            title: "",
            type: 1,
            page: 57
        },
        {
            text: [
                '<div><h1 class="title">读后评价</h1></div>' +
                '<div><p class="text_pl">我会诵读的描写桃花坞美景的诗：</p></div>' +
                '<div><img class="img" src="img/firstChapter/img/1.png"></div>'  
            ],
            type: 2,
            page: 58
        },
        {
            text: [

            ],
            type: 1,
            page: 59
        },
        {
            text: [

            ],
            type: 2,
            page: 60
        },
    ];
    creat_html(book_data)

    function creat_html(data, num) {

        $('.flipbook').html('');
        var b_ok = true,
            b_num = 0;
        var html = '';

        for (var i = 0; i < data.length; i++) {
            if (b_ok) {
                var type = data[i].type,
                    p_text = data[i].text,
                    page_html = '',
                    isImg = data[i].isImg;

                var isshow = 'block';



                if (i == data.length - 1) {
                    isshow = 'none';

                }

                if (type == 0) {
                    page_html += '<div class="cover">' +
                        '<div class="book_text">' +
                        p_text +
                        '</div>' +
                        '</div>'
                }

                if (type == 1) {

                    if (isImg) {
                        pImg = '<img style="margin-bottom:25px;" src="' + isImg + '"/>'
                    }

                    page_html += '<div class="page_b">' +
                        '<div class="book_text">' +
                        p_text +
                        '</div>' +
                        '<p class="next_page" style="display:' + isshow + '">' + data[i].page + '  下一页</p>' +
                        '</div>'
                }

                if (type == 2) {

                    page_html += '<div class="page_d">' +
                        '<div class="book_text">' +
                        p_text +
                        '</div>' +
                        '<p class="pre_page" style="display:' + isshow + '">上一页  ' + data[i].page + '</p> ' +
                        '</div>'
                }

                if (type == 3) {

                    page_html += p_text +
                        '<div class="book_text">' +
                        '</div>' +
                        '<p class="pre_page">上一页  ' + data[i].page + '</p> ' +
                        '</div>'
                }

                html += page_html;
            }
        }
        if (b_ok) {
            $('.flipbook').append(html);
            var turnWidth = $('#cover').outerWidth(),
                turnHeight = $('#cover').outerHeight();

            $('.flipbook').turn({
                width: turnWidth * 2 + 20,
                height: turnHeight,
                elevation: 50,
                gradients: true,
                autoCenter: true,
                // display: 'double',
                when: {
                    turning: function (event, page, pageObject) {

                    }
                }
            });

            $('.book' + 'mark').on('click', 'li', function () {
                // alert("The current page is: " + $('.flipbook').turn('page'));
                var self = $(this),
                    id = self.attr('data-id');
                $('.flipbook').turn('page', id);
            })

            // $('.back_catalog').click(function () {
            //     $('.flipbook').turn('page', 1);
            // })
        }

    }
})