  function getAcode(countryIndex) {

    var myAreaCodes = new Array(
      ' ',
      '7',
      '380',
      '972',
      '994',
      '374',
      '375',
      '995',
      '7',
      '996',
      '373',
      '992',
      '993',
      '998',
      '371',
      '370',
      '372',
      ' ',
      '93',
      '355',
      '21',
      '684',
      '376',
      '244',
      '1-264',
      '1-268',
      '54',
      '374',
      '297',
      '247',
      '61',
      '672',
      '43',
      '994',
      '351',
      '1-242',
      '973',
      '880',
      '1-246',
      '375',
      '32',
      '501',
      '229',
      '1-441',
      '975',
      '591',
      '387',
      '267',
      '55',
      '1-284  ',
      '673',
      '359',
      '226',
      '257',
      '7',
      '855',
      '237',
      '238',
      '1-345',
      '236',
      '235',
      '56',
      '86',
      '672',
      '672',
      '57',
      '1-670',
      '269',
      '242',
      '243',
      '682',
      '506',
      '385',
      '53',
      '357',
      '420',
      '45',
      '246',
      '253',
      '1-767',
      '1-809',
      '62',
      '593',
      '20',
      '503',
      '240',
      '291',
      '372',
      '251',
      '298',
      '500',
      '679',
      '358',
      '33',
      '590',
      '594',
      '689',
      '241',
      '220',
      '995',
      '49',
      '233',
      '350',
      '30',
      '299',
      '1-473',
      '671',
      '502',
      '224',
      '245',
      '592',
      '509',
      '504',
      '852',
      '36',
      '354',
      '91',
      '62',
      '98',
      '964',
      '353',
      '972',
      '39',
      '225',
      '1-876',
      '81',
      '962',
      '7',
      '254',
      '686',
      '850',
      '82',
      '965',
      '996',
      '856',
      '371',
      '961',
      '266',
      '231',
      '21',
      '41',
      '370',
      '352',
      '853',
      '389',
      '261',
      '265',
      '60',
      '960',
      '223',
      '356',
      '692',
      '596',
      '222',
      '230',
      '52',
      '691',
      '377',
      '976',
      '1-664',
      '373',
      '212',
      '258',
      '95',
      '264',
      '674',
      '977',
      '31',
      '599',
      '687',
      '64',
      '505',
      '227',
      '234',
      '683',
      '672',
      '670',
      '47',
      '968',
      '92',
      '680',
      '507',
      '675',
      '595',
      '51',
      '63',
      '48',
      '351',
      '1-787',
      '974',
      '378',
      '262',
      '40',
      '7',
      '250',
      '247',
      '508',
      '39',
      '239',
      '966',
      '221',
      '248',
      '232',
      '65',
      '421',
      '386',
      '677',
      '252',
      '27',
      '34',
      '94',
      '1-869',
      '1-758',
      '1-784',
      '249',
      '597',
      '47',
      '268',
      '46',
      '41',
      '963',
      '886',
      '992',
      '255',
      '66',
      '228',
      '690',
      '676',
      '1-868',
      '21',
      '90',
      '993',
      '1-649',
      '688',
      '256',
      '380',
      '971',
      '44',
      '598',
      '1-340',
      '1',
      '998',
      '678',
      '39',
      '58',
      '84',
      '681',
      '21',
      '685',
      '967',
      '969',
      '381',
      '243',
      '260',
      '259',
      '263');


    return myAreaCodes[countryIndex];
  }

  function createCountryList() {
    document.write("<option>Выберите страну</option>");

    document.write("<option>Россия</option>");
    document.write("<option>Украина</option>");
    document.write("<option>Израиль</option>");
    document.write("<option>Азербайджан</option>");
    document.write("<option>Армения</option>");
    document.write("<option>Белоруссия</option>");
    document.write("<option>Грузия</option>");
    document.write("<option>Казахстан</option>");
    document.write("<option>Киргизстан</option>");
    document.write("<option>Молдавия</option>");
    document.write("<option>Таджикистан</option>");
    document.write("<option>Туркменистан</option>");
    document.write("<option>Узбекистан</option>");
    document.write("<option>Латвия</option>");
    document.write("<option>Литва</option>");
    document.write("<option>Эстония</option>");

    document.write("<option>--------------------------------------</option>");
    document.write("<option>Афганистан</option>");
    document.write("<option>Албания</option>");
    document.write("<option>Алжир</option>");
    document.write("<option>Американское Самоа</option>");
    document.write("<option>Андорра</option>");
    document.write("<option>Ангола</option>");
    document.write("<option>Ангуилла</option>");
    document.write("<option>Антигуа и Барбуда</option>");
    document.write("<option>Аргентина</option>");
    document.write("<option>Армения</option>");
    document.write("<option>Аруба</option>");
    document.write("<option>Асеньон</option>");
    document.write("<option>Австралия</option>");
    document.write("<option>Австралийские внеш. террит-и</option>");
    document.write("<option>Австрия</option>");
    document.write("<option>Азербайджан</option>");
    document.write("<option>Азорские о-ва</option>");
    document.write("<option>Багамы</option>");
    document.write("<option>Бахрейн</option>");
    document.write("<option>Бангладеш</option>");
    document.write("<option>Барбадос</option>");
    document.write("<option>Белоруссия</option>");
    document.write("<option>Бельгия</option>");
    document.write("<option>Белиз</option>");
    document.write("<option>Бенин</option>");
    document.write("<option>Бермудские о-ва</option>");
    document.write("<option>Бутан</option>");
    document.write("<option>Боливия</option>");
    document.write("<option>Босния и Герцеговина</option>");
    document.write("<option>Ботсвана</option>");
    document.write("<option>Бразилия</option>");
    document.write("<option>Британские Вирджинские о-ва   </option>");
    document.write("<option>Бруней</option>");
    document.write("<option>Болгария</option>");
    document.write("<option>Буркина Фасо</option>");
    document.write("<option>Бурунди</option>");
    document.write("<option>Россия</option>");
    document.write("<option>Камбоджа</option>");
    document.write("<option>Камерун</option>");
    document.write("<option>Капе Верде</option>");
    document.write("<option>Каймановы о-ва</option>");
    document.write("<option>ЦАР</option>");
    document.write("<option>Чад</option>");
    document.write("<option>Чили</option>");
    document.write("<option>Китай</option>");
    document.write("<option>Рождественсткие о-ва</option>");
    document.write("<option>Кокосовые о-ва</option>");
    document.write("<option>Колумбия</option>");
    document.write("<option>Содружество северных Марианских о-вов</option>");
    document.write("<option>Коморские о-ва</option>");
    document.write("<option>Конго</option>");
    document.write("<option>Дем. респ. Конго (бывш. Заир)</option>");
    document.write("<option>О-ва Кука</option>");
    document.write("<option>Коста Рика</option>");
    document.write("<option>Хорватия</option>");
    document.write("<option>Куба</option>");
    document.write("<option>Кипр</option>");
    document.write("<option>Чехия</option>");
    document.write("<option>Дания</option>");
    document.write("<option>Диего Гарсиа</option>");
    document.write("<option>Джибути</option>");
    document.write("<option>Доминика</option>");
    document.write("<option>Доминиканская республика</option>");
    document.write("<option>Восточный Тимор</option>");
    document.write("<option>Эквадор</option>");
    document.write("<option>Египет</option>");
    document.write("<option>Сальвадор</option>");
    document.write("<option>Экваториальная Гвинея</option>");
    document.write("<option>Эритрия</option>");
    document.write("<option>Эстония</option>");
    document.write("<option>Эфиопия</option>");
    document.write("<option>Фарерские о-ва</option>");
    document.write("<option>Фолклендские о-ва</option>");
    document.write("<option>Фиджи</option>");
    document.write("<option>Финляндия</option>");
    document.write("<option>Франция</option>");
    document.write("<option>Французские Антиллы</option>");
    document.write("<option>Французская Гвиана</option>");
    document.write("<option>Французская полинезия</option>");
    document.write("<option>Габон</option>");
    document.write("<option>Гамбия</option>");
    document.write("<option>Грузия</option>");
    document.write("<option>Германия</option>");
    document.write("<option>Гана</option>");
    document.write("<option>Гибралтар</option>");
    document.write("<option>Греция</option>");
    document.write("<option>Гренландия</option>");
    document.write("<option>Гренада</option>");
    document.write("<option>Гуам</option>");
    document.write("<option>Гватемала</option>");
    document.write("<option>Гвинея</option>");
    document.write("<option>Гвинея Биссау</option>");
    document.write("<option>Гайана</option>");
    document.write("<option>Гаити</option>");
    document.write("<option>Гондурас</option>");
    document.write("<option>Гонконг</option>");
    document.write("<option>Венгрия</option>");
    document.write("<option>Исландия</option>");
    document.write("<option>Индия</option>");
    document.write("<option>Индонезия</option>");
    document.write("<option>Иран</option>");
    document.write("<option>Ирак</option>");
    document.write("<option>Ирландия</option>");
    document.write("<option>Израиль</option>");
    document.write("<option>Италия</option>");
    document.write("<option>Берег слоновой кости</option>");
    document.write("<option>Ямайка</option>");
    document.write("<option>Япония</option>");
    document.write("<option>Иордания</option>");
    document.write("<option>Казахстан</option>");
    document.write("<option>Кения</option>");
    document.write("<option>Кирибати</option>");
    document.write("<option>Северная Корея</option>");
    document.write("<option>Южная Корея</option>");
    document.write("<option>Кувейт</option>");
    document.write("<option>Киргизстан</option>");
    document.write("<option>Лаос</option>");
    document.write("<option>Латвия</option>");
    document.write("<option>Ливан</option>");
    document.write("<option>Лессото</option>");
    document.write("<option>Либерия</option>");
    document.write("<option>Ливия</option>");
    document.write("<option>Лихтенштейн</option>");
    document.write("<option>Литва</option>");
    document.write("<option>Люксембург</option>");
    document.write("<option>Макао</option>");
    document.write("<option>Македония</option>");
    document.write("<option>Мадагаскар</option>");
    document.write("<option>Малави</option>");
    document.write("<option>Малайзия</option>");
    document.write("<option>Мальдивские о-ва</option>");
    document.write("<option>Мали</option>");
    document.write("<option>Мальта</option>");
    document.write("<option>Маршалловы о-ва</option>");
    document.write("<option>Мартиника</option>");
    document.write("<option>Мавритания</option>");
    document.write("<option>Маврикий</option>");
    document.write("<option>Мексика</option>");
    document.write("<option>Микронезия</option>");
    document.write("<option>Монако</option>");
    document.write("<option>Монголия</option>");
    document.write("<option>Монсеррат</option>");
    document.write("<option>Молдавия</option>");
    document.write("<option>Марокко</option>");
    document.write("<option>Мозамбик</option>");
    document.write("<option>Мьянма</option>");
    document.write("<option>Намибия</option>");
    document.write("<option>Науру</option>");
    document.write("<option>Непал</option>");
    document.write("<option>Нидерланды</option>");
    document.write("<option>Нидерландские Антиллы</option>");
    document.write("<option>Новая Каледония</option>");
    document.write("<option>Новая Зеландия</option>");
    document.write("<option>Никарагуа</option>");
    document.write("<option>Нигер</option>");
    document.write("<option>Нигерия</option>");
    document.write("<option>Niue Islands</option>");
    document.write("<option>Норфолкские о-ва</option>");
    document.write("<option>Северо-Марианские о-ва</option>");
    document.write("<option>Норвегия</option>");
    document.write("<option>Оман</option>");
    document.write("<option>Пакистан</option>");
    document.write("<option>Палау</option>");
    document.write("<option>Панама</option>");
    document.write("<option>Папуа Новая Гвинея</option>");
    document.write("<option>Парагвай</option>");
    document.write("<option>Перу</option>");
    document.write("<option>Филипины</option>");
    document.write("<option>Польша</option>");
    document.write("<option>Португалия</option>");
    document.write("<option>Пуэрто Рико</option>");
    document.write("<option>Катар</option>");
    document.write("<option>Сан Марино</option>");
    document.write("<option>Реюнион</option>");
    document.write("<option>Румыния</option>");
    document.write("<option>Россия</option>");
    document.write("<option>Руанда</option>");
    document.write("<option>О-ва Святой Елены</option>");
    document.write("<option>Сент Пьер</option>");
    document.write("<option>Сан Марино</option>");
    document.write("<option>Сент Том и Принцип</option>");
    document.write("<option>Саудовская Аравия</option>");
    document.write("<option>Сенегал</option>");
    document.write("<option>Сейшельские о-ва</option>");
    document.write("<option>Сьерра Леоне</option>");
    document.write("<option>Сингапур</option>");
    document.write("<option>Словакия</option>");
    document.write("<option>Словения</option>");
    document.write("<option>Соломоновы о-ва</option>");
    document.write("<option>Сомали</option>");
    document.write("<option>ЮАР</option>");
    document.write("<option>Испания</option>");
    document.write("<option>Шри Ланка</option>");
    document.write("<option>Сент-Китс и Невис</option>");
    document.write("<option>Санта Лючия</option>");
    document.write("<option>Сент Винцент и Гренадины</option>");
    document.write("<option>Судан</option>");
    document.write("<option>Суринам</option>");
    document.write("<option>Свалбард</option>");
    document.write("<option>Свазиленд</option>");
    document.write("<option>Швеция</option>");
    document.write("<option>Швейцария</option>");
    document.write("<option>Сирия</option>");
    document.write("<option>Тайвань</option>");
    document.write("<option>Таджикистан</option>");
    document.write("<option>Танзания</option>");
    document.write("<option>Тайланд</option>");
    document.write("<option>Тоголезе</option>");
    document.write("<option>Токелау</option>");
    document.write("<option>Тонго</option>");
    document.write("<option>Тринидад и Тобаго</option>");
    document.write("<option>Тунис</option>");
    document.write("<option>Турция</option>");
    document.write("<option>Туркменистан</option>");
    document.write("<option>Turks & Caicos Islands</option>");
    document.write("<option>Тувалу</option>");
    document.write("<option>Уганда</option>");
    document.write("<option>Украина</option>");
    document.write("<option>ОАЭ</option>");
    document.write("<option>Великобритания</option>");
    document.write("<option>Уругвай</option>");
    document.write("<option>Вирджинские о-ва</option>");
    document.write("<option>США</option>");
    document.write("<option>Узбекистан</option>");
    document.write("<option>Вануату</option>");
    document.write("<option>Ватикан</option>");
    document.write("<option>Венесуэла</option>");
    document.write("<option>Вьетнам</option>");
    document.write("<option>Wallis and Futuna</option>");
    document.write("<option>Западная Сахара</option>");
    document.write("<option>Западное Самоа</option>");
    document.write("<option>Северный Йемен</option>");
    document.write("<option>Южный Йемен</option>");
    document.write("<option>Югославия</option>");
    document.write("<option>Заир</option>");
    document.write("<option>Замбия</option>");
    document.write("<option>Занзибар</option>");
    document.write("<option>Зимбабве</option>");
  }
