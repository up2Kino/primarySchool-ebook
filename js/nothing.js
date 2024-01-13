
$(function () {
    var book_data = [];
    var book_data = [
        {
            img: "",
            num: 1,
            text: [
                "【融   知】非遗传承（桃花坞木刻年画校本教材）"
            ],
            type: 0,
            content: "<p class=\"text_pl\">",
            page: 1
        },
        {
            img: "",
            num: 1,
            text: [
                '<div><h1 class="title">目录</h1></div>'
            ],
            title: "",
            type: 2,
            page: 2
        },
        {
            img: "",
            num: 1,
            text: [
                "第qwasdasd231212edad章内容@asdasdasd1231", "asdasdasd", "d2q1ed213eqe"
            ],
            title: "",
            type: 1,
            page: 3
        },
        {
            img: "",
            num: 1,
            text: [
                '<div><h1 class="title">名迹寻踪</h1></div><div><h2>单元导语</h2></div><div><p class="text_pl">苏州桃花坞，是个区域地名，这里“活态”文化遗存很多，特别是民间手工技艺盛极一时。</p></div><div><p class="text_pl">本单元简要介绍桃花坞地域文化以及“桃花坞木版年画”的前世今生，让大家在追寻桃花坞文化的踪迹时，把姑苏民间文化遗产传承下去。</p></div>'
            ],
            title: "",
            type: 2,
            page: 4
        },
        {
            img: "images/page_L2.jpg",
            num: 0,
            text: ["drhauishdiuasndiuawnudi@asdasmdoiams", "asdasd"],
            title: "第二章 美国高中分类",
            type: 1,
            page: 5
        },
        {
            img: "",
            num: 0,
            text: ["第二章 美国高中分类"
            ],
            title: "",
            type: 2,
            page: 6
        },
        {
            img: "images/page_L3.jpg",
            num: 1,
            title: "第三章",
            text: [],
            type: 2,
            page: 7
        },
        {
            img: "images/page_L4.jpg",
            num: 1,
            title: "",
            text: ["第三章内容"],
            type: 1,
            page: 8
        },
        {
            img: "images/page_L5.jpg",
            num: 2,
            title: "第四章",
            text: [],
            type: 2,
            page: 9
        },
        {
            img: "images/page_L6.jpg",
            num: 2,
            title: "",
            text: ["第四章内容",
            ],
            type: 1,
            page: 10
        },
        {
            img: "images/page_L7.jpg",
            num: 3,
            title: "第五章",
            text: [],
            type: 2,
            page: 11
        },
        {
            img: "images/page_L5.jpg",
            num: 3,
            title: "",
            text: ["第五章内容",
            ],
            type: 1,
            page: 12
        },
        {
            img: "images/page_L4.jpg",
            num: 3,
            title: "第六章",
            text: [],
            type: 2,
            page: 13
        },
        {
            img: "images/page_L5.jpg",
            num: 3,
            title: "",
            text: ["第六章内容",
            ],
            type: 1,
            page: 14
        }
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
                    title = data[i].title,
                    isImg = data[i].isImg;

                var isshow = 'block';



                if (i == data.length - 1) {
                    isshow = 'none';

                }

                if (type == 0) {
                    var pic_html = '',
                        pH = '',
                        pImg = '';

                    if (isImg) {
                        pImg = '<img style="margin-bottom:25px;" src="' + isImg + '"/>'
                    }

                    for (var j = 0; j < p_text.length; j++) {
                        var p_arr = [],
                            arr_html = '';
                        if (p_text[j].indexOf('@') > 0) {
                            p_arr = p_text[j].split('@');
                            for (var k = 0; k < p_arr.length; k++) {
                                arr_html += p_arr[k] + "</br>"
                            }
                            pH += '<p class="text_pl">' + arr_html + '</p>'
                        } else {
                            pH += '<p class="text_pl">' + p_text[j] + '</p>'
                        }
                    }
                    page_html += '<div class="cover">' +
                        '<div class="book_text">' +
                        pic_html +
                        pImg +
                        p_text +
                        '</div>' +
                        '<p class="next_page" style="display:' + isshow + '">下一页</p>' +
                        '</div>'
                }
                if (type == 1) {
                    var pic_html = '<div class="book_pic"><p>世上无难事，只怕有心人</p></div>',
                        pH = '',
                        pImg = '';

                    if (isImg) {
                        pImg = '<img style="margin-bottom:25px;" src="' + isImg + '"/>'
                    }

                    for (var j = 0; j < p_text.length; j++) {
                        var p_arr = [],
                            arr_html = '';
                        if (p_text[j].indexOf('@') > 0) {
                            p_arr = p_text[j].split('@');
                            for (var k = 0; k < p_arr.length; k++) {
                                arr_html += p_arr[k] + "</br>"
                            }
                            pH += '<p class="text_pl">' + arr_html + '</p>'
                        } else {
                            pH += '<p class="text_pl">' + p_text[j] + '</p>'
                        }
                    }

                    page_html += '<div class="page_d">' +
                        '<div class="book_text">' +
                        pic_html +
                        pImg +
                        pH +
                        '</div>' +
                        '<p class="next_page" style="display:' + isshow + '">下一页</p>' +
                        '</div>'
                }

                if (type == 2) {
                    var page_html = '',
                        pic_html = '',
                        pH = '',
                        pImg = '';

                    if (isImg) {
                        pImg = '<img style="margin-bottom:25px;" src="' + isImg + '"/>'
                    }

                    for (var j = 0; j < p_text.length; j++) {
                        var p_arr = [],
                            arr_html = '';
                        if (p_text[j].indexOf('@') > 0) {
                            p_arr = p_text[j].split('@');
                            for (var k = 0; k < p_arr.length; k++) {
                                arr_html += p_arr[k] + "</br>"
                            }
                            pH += '<p class="text_pl">' + arr_html + '</p>'
                        } else {
                            pH += '<p class="text_pl">' + p_text[j] + '</p>'
                        }
                    }
                    page_html += '<div class="page_d">' +
                        '<div class="book_text">' +
                        pic_html +
                        pImg +
                        p_text +
                        '</div>' +
                        '<p class="pre_page">上一页</p> ' +
                        '</div>'
                }

                // if (type == 3) {
                //     var pic_html = '<div class="book_pic"><p>世上无难事，只怕有心人</p></div>',
                //         pH = '',
                //         pImg = '';

                //     if (isImg) {
                //         pImg = '<a target="_blank"><img src="' + isImg + '"/></a>'
                //     }

                //     for (var j = 0; j < p_text.length; j++) {
                //         var p_arr = [],
                //             arr_html = '';
                //         if (p_text[j].indexOf('@') > 0) {
                //             p_arr = p_text[j].split('@');
                //             for (var k = 0; k < p_arr.length; k++) {
                //                 arr_html += p_arr[k] + "</br>"
                //             }
                //             pH += '<p class="text_pl">' + arr_html + '</p>'
                //         } else {
                //             pH += '<p class="text_pl">' + p_text[j] + '</p>'
                //         }
                //     }


                //     page_html += '<div class="page_d">' +
                //         '<div class="book_text">' +
                //         pH +
                //         pImg +
                //         '</div>' +
                //         '<p class="next_page" style="display:' + isshow + '">下一页</p>' +
                //         '</div>'
                // }
                // if (type == 4) {

                // }
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

            $('.bookmark').on('click', 'li', function () {
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