({
    block: 'page',
    title: 'Home',
    head: [
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
                            content: 'Информация',
                            mods: {active: true}
                            //mix: [ { block: 'row', elem: 'col', mods: {l: true} } ],
                        },
                        {
                            url: '#',
                            content: 'Фото и видео',
                            //mix: [ { block: 'row', elem: 'col', mods: {l: true} } ],
                        },
                        {
                            url: '#',
                            content: 'Главная',
                            mods : { logo : true },
                            //mix: [ { block: 'row', elem: 'col', mods: { sw: 0, l: true} } ],
                        },
                        {
                            url: '#',
                            content: 'Карта штата',
                            //mix: [ { block: 'row', elem: 'col', mods: {l: true, sof: true } } ],

                        },
                        {
                            url: '#',
                            content: 'Гостиницы',
                            //mix: [ { block: 'row', elem: 'col', mods: {l: true} } ],
                        }
                    ].map(function (item, idl) {
                            return {
                                block: 'menu-main',
                                elem: 'item',
                                elemMods: item.mods,
                                content: {
                                    block: 'link',
                                    mix: [{block: 'menu-main', elem: 'link'}],
                                    url: item.url,
                                    content: item.content
                                }
                            }
                        })
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
                            mods: { color: 'blue', number: true },
                            mix: [ { block: 'row', elem: 'col', mods: { sw: 12, mw: 4} } ],
                            content: [
                                {
                                    elem: 'title',
                                    content: 'Настоящий городок'
                                },
                                {
                                    elem: 'number',
                                    content: '№1'
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
                            mods: { img: true },
                            content: {
                                elem: 'img',
                                tag: 'img',
                                attrs: { src: "../../img/photo-city@1x.jpg", width: "100%" }
                            }
                        }
                    ]
                },

                {
                    block: 'row',
                    content: [
                        {
                            block: 'features-item',
                            mods: { color: 'white', icon: true },
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
                            mods: { color: 'white', icon: true },
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
                            mods: { color: 'white', icon: true },
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
                            mods: { img: true },
                            content: {
                                elem: 'img',
                                tag: 'img',
                                attrs: { src: "../../img/photo-bridge@1x.jpg", width: "100%" }
                            }
                        },
                        {
                            block: 'features-item',
                            mods: { color: 'blue', number: true },
                            mix: [ { block: 'row', elem: 'col', mods: { sw: 12, mw: 4} } ],
                            content: [
                                {
                                    elem: 'title',
                                    content: 'Там есть мост дьявола'
                                },
                                {
                                    elem: 'number',
                                    content: '№2'
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
                            mods: { color: 'gray', number: true },
                            mix: [ { block: 'row', elem: 'col', mods: { sw: 12, mw: 4} } ],
                            content: [
                                {
                                    elem: 'title',
                                    content: 'Небольшая площадь'
                                },
                                {
                                    elem: 'number',
                                    content: '№3'
                                },
                                {
                                    elem: 'text',
                                    content: 'Все достопримечательности находятся очень близко'
                                }
                            ]
                        },
                        {
                            block: 'features-item',
                            mods: { color: 'gray', number: true },
                            mix: [ { block: 'row', elem: 'col', mods: { sw: 12, mw: 4} } ],
                            content: [
                                {
                                    elem: 'title',
                                    content: 'Красивая дорога'
                                },
                                {
                                    elem: 'number',
                                    content: '№4'
                                },
                                {
                                    elem: 'text',
                                    content: 'Ехать в Седону из Лас-Вегаса совсем не скучно!'
                                }
                            ]
                        },
                        {
                            block: 'features-item',
                            mods: { color: 'gray', number: true },
                            mix: [ { block: 'row', elem: 'col', mods: { sw: 12, mw: 4} } ],
                            content: [
                                {
                                    elem: 'title',
                                    content: 'Мало туристов'
                                },
                                {
                                    elem: 'number',
                                    content: '№5'
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
                            mods: { logo: true },
                        }
                    ].map(function (item) {
                            return {
                                block: 'menu-footer',
                                elem: 'item',
                                mix: item.mix,
                                content: {
                                    block: 'link',
                                    mods: item.mods,
                                    mix: [{block: 'menu-footer', elem: 'link'}],
                                    url: item.url,
                                    content: item.content
                                }
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
