
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
            page: 14
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
            page: 15
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
            page: 16
        },
        {
            text: [
                '<div><h1 class="title">泰伯庙</h1></div>' +
                '<div><h2 class="subtitle">我了解</h2></div>' +
                '<div><p class="text_pl">泰伯庙位于苏州市阊门内下塘街250号桃花坞历史街区之中，为纪念古公父（周太王）长子泰伯而建，历史可追溯至东汉， 为江南地区第一座奉祀吴地始祖泰伯的庙宇。1982年，泰伯庙被列为第二批苏州市文物保护单位。</p></div>' +
                '<div><img class="img" src="img/firstChapter/img/1.png"></div>'
            ],
            type: 2,
            page: 15
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
            page: 16
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