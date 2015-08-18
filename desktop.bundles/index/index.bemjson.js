({
    block: 'page',
    title: 'Home',
    head: [
        { elem: 'meta', attrs: { charset: 'utf-8' } },
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: '_index.css' }
    ],
    scripts: [
        { elem: 'js', url: '_index.js' }
    ],
    content: [
        {
            block: 'header',
            content: [
                {
                    block: 'menu-main',
                    content: [
                        {
                            url: '#',
                            content: 'Карта штата',

                        },
                        {
                            url: '#',
                            content: 'Информация',
                        },
                        {
                            url: '#',
                            content: 'Фото и видео',
                        },
                        {
                            url: '#',
                            content: 'Гостиницы',
                        },
                        {
                            url : './index.html',
                            content : [
                                {
                                    tag : 'img',
                                    attrs : { src : '../../img/logo-sedona@1x.png' }
                                }
                            ],
                            bem : false
                        }
                    ].map(function (item, idx) {
                            if (idx === 4) {
                                return {
                                    elem : 'item',
                                    elemMods : { logo : true},
                                    content : {
                                        block : 'menu-main',
                                        elem : 'link',
                                        elemMods : { logo : true},
                                        attrs : { href : item.url },
                                        content : item.content
                                    }
                                }
                            }
                            return {
                                elem : 'item',
                                elemMods : { active : idx === 0, order_4 : idx === 0, shadow : idx === 3, order_5 : idx === 3, logo : idx === 4 },
                                content : {
                                    block : 'link',
                                    mix : [{block: 'menu-main', elem: 'link'}],
                                    url : item.url,
                                    content : item.content,
                                    bem : item.bem

                                }

                            }
                        })
                },
                {
                    block : 'menu-main',
                    elem : 'hamburger',
                    content : 'open mobile menu'
                },

            ]
        },

        {
            block: 'intro',
            content: [
                {
                    elem: 'welcome',
                    content: {
                        tag : 'img',
                        attrs : { src : '../../img/text-welcome.svg' }
                    }
                },
                {
                    elem: 'welcome-to',
                    content: {
                        tag : 'img',
                        attrs : { src : '../../img/text-tothegorgeous.svg' }
                    }
                },
                {
                    elem: 'title',
                    content: {
                        tag : 'img',
                        attrs : { src : '../../img/text-sedona.svg' }
                    }
                },
                {
                    elem: 'because',
                    content: {
                        tag : 'img',
                        attrs : { src : '../../img/text-becausecanyon.svg' }
                    }
                }
            ]
        },

        {
            block: 'page-description',
            mix: { block: 'row', mods: {sac:true, mac:true} },
            content: [
                {
                    elem: 'title',
                    mix: [ { block: 'row', elem: 'col', mods: { sw: 12} } ],
                    content: 'Седона — небольшой городок в Аризоне, заслуживающий большего!'
                },
                {
                    elem: 'text',
                    mix: [ { block: 'row', elem: 'col', mods: { sw: 12} } ],
                    content: 'Рассмотрим 5 причин, по которым Седона круче чем гранд каньон!'
                }
            ]
        },

        {
            block: 'features',
            content: [
                {
                    block: 'row',
                    content: [
                        {
                            block: 'features-item',
                            mods: { type: 'bg' },
                            mix: [ { block: 'row', elem: 'col', mods: { sw: 12, mw: 4} } ],
                            content: [
                                {
                                    elem: 'title',
                                    content: 'Настоящий городок'
                                },
                                {
                                    elem: 'number',
                                    number : '1'
                                },
                                {
                                    elem: 'text',
                                    content: 'Седона не аттракцион для туристов, там течет своя жизнь'
                                }
                            ]
                        },
                        {
                            block: 'features-item',
                            mix: [ { block: 'row', elem: 'col', mods: { sw: 12, mw: 8} } ],
                            mods: { type: 'img' },
                            type : 'img',
                            content: {
                                elem: 'img',
                                tag: 'picture',
                                content: [
                                    {
                                        tag: 'source',
                                        attrs: { media: '(min-width: 1200px)', srcset: '../../img/photo-city@1x.jpg, img/feature-1-x2.jpg' }
                                    },
                                    {
                                        tag: 'source',
                                        attrs: { media: '(min-width: 768px)', srcset: '../../img/feature-1-tablet.png, img/feature-1-x2.jpg' }
                                    },
                                    {
                                        tag: 'img',
                                        attrs: { src:'img/feature-1.png' }
                                    }

                                ]
                            }
                        }
                    ]
                },

                {
                    block: 'row',
                    content: [
                        {
                            block: 'features-item',
                            mods: { type: 'icon' },
                            mix: [ { block: 'row', elem: 'col', mods: { sw: 12, mw: 4} } ],
                            content: [
                                {
                                    elem: 'title',
                                    content: 'Жилье'
                                },
                                {
                                    elem: 'text',
                                    content: 'Рекомендуем пожить в настоящем мотеле, все как в кино!'
                                }
                            ]
                        },
                        {
                            block: 'features-item',
                            mods: { type: 'icon' },
                            mix: [ { block: 'row', elem: 'col', mods: { sw: 12, mw: 4} } ],
                            content: [
                                {
                                    elem: 'title',
                                    content: 'Еда'
                                },
                                {
                                    elem: 'text',
                                    content: 'Всегда заказывай фирменный бургер, вы не разочаруетесь!'
                                }
                            ]
                        },
                        {
                            block: 'features-item',
                            mods: { type: 'icon' },
                            mix: [ { block: 'row', elem: 'col', mods: { sw: 12, mw: 4} } ],
                            content: [
                                {
                                    elem: 'title',
                                    content: 'Сувениры'
                                },
                                {
                                    elem: 'text',
                                    content: 'Не только китайского, но и местного производства!'
                                }
                            ]
                        }
                    ]
                },

                {
                    block: 'row',
                    content: [
                        {
                            block: 'features-item',
                            mix: [ { block: 'row', elem: 'col', mods: { sw: 12, mw: 8} } ],
                            mods: { type: 'img' },
                            type : 'img',
                            content: {
                                elem: 'img',
                                tag: 'img',
                                attrs: { src: '../../img/photo-bridge@1x.jpg', width: '100%', height: '253' }
                            }
                        },
                        {
                            block: 'features-item',
                            mods: { type: 'bg' },
                            mix: [ { block: 'row', elem: 'col', mods: { sw: 12, mw: 4} } ],
                            content: [
                                {
                                    elem: 'title',
                                    content: 'Там есть мост дьявола'
                                },
                                {
                                    elem: 'number',
                                    number : '2'
                                },
                                {
                                    elem: 'text',
                                    content: 'Да, по нему можно пройти! Если вы, конечно, осмелитесь'
                                }
                            ]
                        }
                    ]
                },

                {
                    block: 'row',
                    content: [
                        {
                            block: 'features-item',
                            //mods: { number: true },
                            mix: [ { block: 'row', elem: 'col', mods: { sw: 12, mw: 4} } ],
                            content: [
                                {
                                    elem: 'title',
                                    content: 'Небольшая площадь'
                                },
                                {
                                    elem: 'number',
                                    number : '3'
                                },
                                {
                                    elem: 'text',
                                    content: 'Все достопримеча&shy;тельности находятся очень близко'
                                }
                            ]
                        },
                        {
                            block: 'features-item',
                            //mods: { number: true },
                            mix: [ { block: 'row', elem: 'col', mods: { sw: 12, mw: 4} } ],
                            content: [
                                {
                                    elem: 'title',
                                    content: 'Красивая дорога'
                                },
                                {
                                    elem: 'number',
                                    number : '4'
                                },
                                {
                                    elem: 'text',
                                    content: 'Ехать в Седону из Лас-Вегаса совсем не скучно!'
                                }
                            ]
                        },
                        {
                            block: 'features-item',
                            mods: { number: true },
                            mix: [ { block: 'row', elem: 'col', mods: { sw: 12, mw: 4} } ],
                            content: [
                                {
                                    elem: 'title',
                                    content: 'Мало туристов'
                                },
                                {
                                    elem: 'number',
                                    number : '5'
                                },
                                {
                                    elem: 'text',
                                    content: 'Большинство едет в Гранд Каньон и толпится там'
                                }
                            ]
                        }
                    ]
                }
            ]
        },

        {
            block: 'search-block',
            mix: { block: 'row' },
            content: [
                {
                    elem: 'title',
                    mix: [ { block: 'row', elem: 'col', mods: { sw: 12} } ],
                    content: 'Заинтересовались?'
                },
                {
                    elem: 'text',
                    content: 'Укажите предполагаемые даты поездки и мы покажем вам лучшие предложения гостиниц в Седоне'
                },
                {
                    elem: 'btn',
                    mix: { block: 'button'},
                    content: 'Найти'
                }
            ]
        },

        {
            block: 'map',
            content: [
                {
                }
            ]
        },

        {
            block: 'footer',
            mix: { block: 'row' },
            content: [
                {
                    elem: 'logo',
                    mix: [ { block: 'row', elem: 'col', mods: { sw: 12, mw: 4} } ],
                    content: '#visitsedona'
                },
                {
                    block: 'menu-footer',
                    mix: [ { block: 'row', elem: 'col', mods: { sw: 12, mw: 4} } ],
                    content: [
                        {
                            url: '#',
                            content: 'Twitter',
                        },
                        {
                            url: '#',
                            content: 'Facebook',
                        },
                        {
                            url: '#',
                            content: 'Youtube',
                        }
                    ].map(function (item) {
                            return {
                                block: 'link',
                                mix: [{block: 'menu-footer', elem: 'link'}],
                                url: item.url,
                                content: item.content
                            }

                        })
                },
                {
                    block: 'copywrite',
                    mix: [ { block: 'row', elem: 'col', mods: { sw: 12, mw: 4} } ],
                    content: [
                        {
                            elem: 'text',
                            content: 'Разработано'
                        },
                        {
                            elem: 'logo'
                        }
                    ]
                }
            ]
        }
    ]
});
