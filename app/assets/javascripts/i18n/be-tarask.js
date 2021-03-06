I18n.translations || (I18n.translations = {});
I18n.translations["be-tarask"] = I18n.extend((I18n.translations["be-tarask"] || {}), {
  "browse": {
    "start_rjs": {
      "feature_warning": "Неабходна загрузіць %{num_features} аб'ектаў, што можа запаволіць ваш браўзэр. Вы ўпэўнены, што жадаеце праглядзець гэтыя дадзеныя?",
      "load_data": "Загрузіць зьвесткі",
      "loading": "Загрузка…"
    }
  },
  "date": {
    "abbr_day_names": [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat"
    ],
    "abbr_month_names": [
      null,
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    "day_names": [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "formats": {
      "default": "%Y-%m-%d",
      "long": "%B %d, %Y",
      "short": "%b %d"
    },
    "month_names": [
      null,
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    "order": [
      "year",
      "month",
      "day"
    ]
  },
  "diary_entries": {
    "edit": {
      "marker_text": "Месцазнаходжаньне запісу дзёньніка"
    }
  },
  "geocoder": {
    "search_osm_nominatim": {
      "admin_levels": {
        "level10": "Мяжа прыгараду",
        "level2": "Мяжа краіны",
        "level4": "Мяжа сталіцы і абласцей",
        "level5": "Мяжа рэгіёна",
        "level6": "Мяжа райцэнтра і раёна",
        "level8": "Мяжа горада",
        "level9": "Мяжа раёну н/п"
      },
      "prefix": {
        "aerialway": {
          "cable_car": "Лінная дарога",
          "chair_lift": "Крэсельны пад'ёмнік",
          "drag_lift": "Бугельны пад'ёмнік",
          "gondola": "Лінная дарога",
          "platter": "Бугельны пад'ёмнік",
          "pylon": "Апора",
          "station": "Станцыя канатнай дарогі",
          "t-bar": "Т-вобразны пад'ёмнік"
        },
        "aeroway": {
          "aerodrome": "Аэрадром",
          "airstrip": "Узлётна-пасадачная паласа",
          "apron": "Перон",
          "gate": "Выхад на пасадку",
          "hangar": "Ангар",
          "helipad": "Верталётная пляцоўка",
          "holding_position": "Месца чакання",
          "parking_position": "Месца паркоўкі",
          "runway": "Узлётна-пасадачная паласа",
          "taxiway": "Рулёжная дарога",
          "terminal": "Тэрмінал"
        },
        "amenity": {
          "animal_shelter": "Прытулак для жывёл",
          "arts_centre": "Мастацкі цэнтар",
          "atm": "Банкамат",
          "bank": "Банк",
          "bar": "Бар",
          "bbq": "Барбекю",
          "bench": "Лаўка",
          "bicycle_parking": "Стаянка для ровараў",
          "bicycle_rental": "Пракат ровараў",
          "biergarten": "Рэстаранны падворак",
          "boat_rental": "Пракат лодак",
          "brothel": "Бардэль",
          "bureau_de_change": "Абмен валюты",
          "bus_station": "Аўтобусны прыпынак",
          "cafe": "Кавярня",
          "car_rental": "Арэнда аўтамабіляў",
          "car_sharing": "Кароткатэрміновая арэнда аўтамабіляў",
          "car_wash": "Аўтамабільная мыйка",
          "casino": "Казіно",
          "charging_station": "Зарадная станцыя",
          "childcare": "Служба дагляду за дзецьмі",
          "cinema": "Кінатэатар",
          "clinic": "Паліклініка",
          "clock": "Гадзіннік",
          "college": "Каледж",
          "community_centre": "Грамадзкі цэнтар",
          "courthouse": "Суд",
          "crematorium": "Крэматорый",
          "dentist": "Стаматалёгія",
          "doctors": "Дактары",
          "drinking_water": "Пітная вада",
          "driving_school": "Аўташкола",
          "embassy": "Амбасада",
          "fast_food": "Забягайлаўка",
          "ferry_terminal": "Паромная станцыя",
          "fire_station": "Пажарны пастарунак",
          "food_court": "Фуд-Корт",
          "fountain": "Фантан",
          "fuel": "Запраўка",
          "gambling": "Азартныя гульні",
          "grave_yard": "Могілкі",
          "grit_bin": "Кантэйнер з дарожным пасыпаннем",
          "hospital": "Шпіталь",
          "hunting_stand": "Паляўнічая вежа",
          "ice_cream": "Марозіва",
          "kindergarten": "Дзіцячы садок",
          "library": "Бібліятэка",
          "marketplace": "Рынкавая плошча",
          "monastery": "Кляштар",
          "motorcycle_parking": "Паркоўка для матацыклаў",
          "nightclub": "Начны клюб",
          "nursing_home": "Дом састарэлых",
          "office": "Офіс",
          "parking": "Стаянка",
          "parking_entrance": "Заезд на паркоўку",
          "parking_space": "Паркоўка",
          "pharmacy": "Аптэка",
          "place_of_worship": "Культавае збудаваньне",
          "police": "Паліцыя (Міліцыя)",
          "post_box": "Паштовая скрыня",
          "post_office": "Паштовае аддзяленьне",
          "preschool": "Дашкольная ўстанова",
          "prison": "Турма",
          "pub": "Шынок",
          "public_building": "Грамадзкі будынак",
          "recycling": "Месца перапрацоўкі адыходаў",
          "restaurant": "Рэстаран",
          "retirement_home": "Дом састарэлых",
          "sauna": "Лазьня",
          "school": "Школа",
          "shelter": "Прытулак",
          "shop": "Крама",
          "shower": "Душ",
          "social_centre": "Сацыяльны цэнтр",
          "social_club": "Клюб па інтарэсах",
          "social_facility": "Сацыяльны аб'ект",
          "studio": "Студыя",
          "swimming_pool": "Плавальны басейн",
          "taxi": "Таксі",
          "telephone": "Тэлефон",
          "theatre": "Тэатар",
          "toilets": "Туалет",
          "townhall": "Ратуша",
          "university": "Унівэрсытэт",
          "vending_machine": "Гандлёвы аўтамат",
          "veterinary": "Вэтэрынарная клініка",
          "village_hall": "Кіраўніцтва вёскі",
          "waste_basket": "Сьметніца",
          "waste_disposal": "Смеццевы бак",
          "water_point": "Вада",
          "youth_centre": "Моладзевы цэнтар"
        },
        "boundary": {
          "administrative": "Адміністрацыйная мяжа",
          "census": "Межы перапісу",
          "national_park": "Нацыянальны парк",
          "protected_area": "Ахоўная зона"
        },
        "bridge": {
          "aqueduct": "Акведук",
          "boardwalk": "Тратуар",
          "suspension": "Падвясны мост",
          "swing": "Развадны мост",
          "viaduct": "Віядук",
          "yes": "Мост"
        },
        "building": {
          "yes": "Будынак"
        },
        "craft": {
          "brewery": "Бровар",
          "carpenter": "Цясляр",
          "electrician": "Электрык",
          "gardener": "Садоўнік",
          "painter": "Мастак",
          "photographer": "Фатограф",
          "plumber": "Сантэхнік",
          "shoemaker": "Шавец",
          "tailor": "Кравец",
          "yes": "Майстэрня"
        },
        "emergency": {
          "ambulance_station": "Станцыя хуткай медыцынскай дапамогі",
          "assembly_point": "Месца збору",
          "defibrillator": "Дэфібрылятар",
          "landing_site": "Месца аварыйнай пасадкі",
          "phone": "Тэлефон экстранай сувязі",
          "water_tank": "Пажарны вадаём/рэзервуар",
          "yes": "Для экстранных службаў"
        },
        "highway": {
          "abandoned": "Занядбаная дарога",
          "bridleway": "Дарога для коней",
          "bus_guideway": "Аўтобусная паласа",
          "bus_stop": "Аўтобусны прыпынак",
          "construction": "Будаўніцтва дарогі",
          "corridor": "Праход цераз будынак",
          "cycleway": "Роварная дарожка",
          "elevator": "Ліфт",
          "emergency_access_point": "Пункт хуткай дапамогі",
          "footway": "Пешаходная сьцежка",
          "ford": "Брод",
          "give_way": "Знак \"Саступі дарогу\"",
          "living_street": "Жыльлёвая зона",
          "milestone": "Веха",
          "motorway": "Аўтастрада",
          "motorway_junction": "Скрыжаваньне аўтастрадаў",
          "motorway_link": "Разьвязка аўтастрады",
          "passing_place": "Раз'язны шлях",
          "path": "Шлях",
          "pedestrian": "Пешаходная дарожка",
          "platform": "Плятформа",
          "primary": "Галоўная дарога",
          "primary_link": "Галоўная дарога",
          "proposed": "Плануемая дарога",
          "raceway": "Гоначная траса",
          "residential": "Жылая вуліца",
          "rest_area": "Зона адпачынку",
          "road": "Дарога",
          "secondary": "Другасная дарога",
          "secondary_link": "Другасная дарога",
          "service": "Службовая дарога",
          "services": "Прыдарожны сэрвіс",
          "speed_camera": "Фотарадар",
          "steps": "Прыступкі",
          "stop": "Знак СТОП",
          "street_lamp": "Вулічны ліхтар",
          "tertiary": "Дарога раённага значэньня",
          "tertiary_link": "Трэцясная дарога",
          "track": "Грунтовая дарога",
          "traffic_signals": "Святлафор",
          "trail": "Сьцежка",
          "trunk": "Шаша",
          "trunk_link": "Шаша",
          "turning_loop": "Разваротнае кальцо",
          "unclassified": "Дарога раённага значэньня",
          "yes": "Дарога"
        },
        "historic": {
          "archaeological_site": "Археалягічныя раскопкі",
          "battlefield": "Поле гістарычнай бойкі",
          "boundary_stone": "Памежны камень",
          "building": "Гістарычны будынак",
          "bunker": "Бункер",
          "castle": "Замак",
          "church": "Царква",
          "city_gate": "Гарадская брама",
          "citywalls": "Мескія муры",
          "fort": "Форт",
          "heritage": "Культурная спадчына",
          "house": "Дом",
          "icon": "Ікона",
          "manor": "Маёнтак",
          "memorial": "Мэмарыял",
          "mine": "Капальня",
          "mine_shaft": "Шахтавы стаўбур",
          "monument": "Помнік",
          "roman_road": "Рымская дарога",
          "ruins": "Руіны",
          "stone": "Камень",
          "tomb": "Магіла",
          "tower": "Вежа",
          "wayside_cross": "Прыдарожны крыж",
          "wayside_shrine": "Прыдарожная капліца",
          "wreck": "Месца катастрофы",
          "yes": "Гістарычнае месца"
        },
        "junction": {
          "yes": "Перакрыжаванне"
        },
        "landuse": {
          "allotments": "Агароды",
          "basin": "Басэйн",
          "brownfield": "Прамысловая забруджаная глеба",
          "cemetery": "Могілкі",
          "commercial": "Камэрцыйная тэрыторыя",
          "conservation": "Запаведнік",
          "construction": "Будаўніцтва",
          "farm": "Фэрма",
          "farmland": "Фэрма",
          "farmyard": "Гаспадарчае падвор’е",
          "forest": "Лес",
          "garages": "Гаражы",
          "grass": "Трава",
          "greenfield": "Незасвоеная тэрыторыя",
          "industrial": "Прамысловая тэрыторыя",
          "landfill": "Сьметнік",
          "meadow": "Луг",
          "military": "Вайсковая тэрыторыя",
          "mine": "Капальня",
          "orchard": "Фруктовы сад",
          "quarry": "Кар’ер",
          "railway": "Чыгунка",
          "recreation_ground": "Зона адпачынку",
          "reservoir": "Вадасховішча",
          "reservoir_watershed": "Водападзел вадасховішча",
          "residential": "Жылы раён",
          "retail": "Тэрыторыя дробнага гандлю",
          "road": "Зона дарожнай сеткі",
          "village_green": "Гарадзкі парк",
          "vineyard": "Вінаграднік",
          "yes": "Землекарыстанне"
        },
        "leisure": {
          "beach_resort": "Пляжны курорт",
          "bird_hide": "Пункт назіраньня за птушкамі",
          "common": "Грамадзкая зямля",
          "dog_park": "Пляцоўка для сабак",
          "firepit": "Кастрышча",
          "fishing": "Месца для рыбнай лоўлі",
          "fitness_centre": "Фітнес-Цэнтр",
          "fitness_station": "Фітнэс-станцыя",
          "garden": "Сад",
          "golf_course": "Поле для гольфу",
          "horse_riding": "Верхавая язда",
          "ice_rink": "Коўзанка",
          "marina": "Прыстань для яхтаў",
          "miniature_golf": "Поле для мінігольфу",
          "nature_reserve": "Запаведнік",
          "park": "Парк",
          "pitch": "Спартовая пляцоўка",
          "playground": "Дзіцячая пляцоўка",
          "recreation_ground": "Зона адпачынку",
          "resort": "Курорт",
          "sauna": "Сауна",
          "slipway": "Элінг",
          "sports_centre": "Спартовы цэнтар",
          "stadium": "Стадыён",
          "swimming_pool": "Басэйн",
          "track": "Бегавая дарожка",
          "water_park": "Аквапарк",
          "yes": "Забавы"
        },
        "man_made": {
          "adit": "Штольня",
          "beacon": "Бакен",
          "beehive": "Борць",
          "breakwater": "Хвалярэз",
          "bridge": "Мост",
          "bunker_silo": "Бункер",
          "chimney": "Комін",
          "crane": "Кран",
          "dolphin": "Прычальная тумба",
          "dyke": "Прыбярэжны насып",
          "embankment": "Насып",
          "flagpole": "Флагшток",
          "gasometer": "Газгольдэр",
          "groyne": "Буна",
          "kiln": "Печ",
          "lighthouse": "Маяк",
          "mast": "Мачта",
          "mine": "Шахта",
          "mineshaft": "Шахтавы стаўбур",
          "monitoring_station": "Станцыя назірання",
          "petroleum_well": "Свідравіна",
          "pier": "Пірс",
          "pipeline": "Трубаправод",
          "silo": "Сілас",
          "storage_tank": "Крыты рэзервуар",
          "surveillance": "Камера назірання",
          "tower": "Вежа",
          "wastewater_plant": "Станцыя ачысткі сцёкавых вод",
          "water_tower": "Ваданапорная вежа",
          "water_well": "Студня",
          "water_works": "Водазабор",
          "watermill": "Вадзяны млын",
          "windmill": "Ветраны млын",
          "works": "Фабрыка",
          "yes": "Штучнае"
        },
        "military": {
          "airfield": "Ваенны аэрадром",
          "barracks": "Казармы",
          "bunker": "Бункер",
          "yes": "Ваенны"
        },
        "mountain_pass": {
          "yes": "Перавал"
        },
        "natural": {
          "bay": "Затока",
          "beach": "Пляж",
          "cape": "Мыс",
          "cave_entrance": "Уваход у пячору",
          "cliff": "Абрыў",
          "crater": "Кратэр",
          "dune": "Дзюна",
          "fell": "Узвышша",
          "fjord": "Фіёрд",
          "forest": "Лес",
          "geyser": "Гейзэр",
          "glacier": "Ледавік",
          "grassland": "Луг",
          "heath": "Пусташ",
          "hill": "Узгорак",
          "island": "Выспа",
          "land": "Зямля",
          "marsh": "Балота",
          "moor": "Тарфянік",
          "mud": "Гразь",
          "peak": "Вяршыня",
          "point": "Пункт",
          "reef": "Рыф",
          "ridge": "Горны хрыбет",
          "rock": "Скала",
          "saddle": "Перавал",
          "sand": "Пясок",
          "scree": "Шчэбень",
          "scrub": "Хмызьняк",
          "spring": "Крыніца",
          "stone": "Камень",
          "strait": "Пратока",
          "tree": "Дрэва",
          "valley": "Даліна",
          "volcano": "Вулькан",
          "water": "Вада",
          "wetland": "Забалочаная зямля",
          "wood": "Лес"
        },
        "office": {
          "accountant": "Бугальтар",
          "administrative": "Aдміністрацыя",
          "architect": "Архітэктар",
          "association": "Асацыяцыя",
          "company": "Кампанія",
          "educational_institution": "Адукацыйная ўстанова",
          "employment_agency": "Служба занятасьці",
          "estate_agent": "Агет па продажу нерухомасьці",
          "government": "Дзяржаўная ўстанова",
          "insurance": "Страхавое бюро",
          "it": "IT-офіс",
          "lawyer": "Юрыст",
          "ngo": "Офіс НДА",
          "telecommunication": "Аддзяленне сувязі",
          "travel_agent": "Турыстычнае агенцтва",
          "yes": "Офіс"
        },
        "place": {
          "allotments": "Сады-агароды",
          "city": "Горад",
          "city_block": "Гарадскі квартал",
          "country": "Краіна",
          "county": "Раён",
          "farm": "Фэрма",
          "hamlet": "Хутар",
          "house": "Дом",
          "houses": "Дамы",
          "island": "Выспа",
          "islet": "Выспачка",
          "isolated_dwelling": "Ізаляванае жытло",
          "locality": "Населены пункт",
          "municipality": "Муніцыпалітэт",
          "neighbourhood": "Наваколле",
          "postcode": "Паштовы індэкс",
          "quarter": "Раён горада",
          "region": "Рэгіён",
          "sea": "Мора",
          "square": "Плошча",
          "state": "Штат",
          "subdivision": "Падразьдзел",
          "suburb": "Прадмесьце",
          "town": "Горад",
          "unincorporated_area": "Загарадная зона",
          "village": "Вёска",
          "yes": "Месца"
        },
        "railway": {
          "abandoned": "Пакінутая чыгуначная лінія",
          "construction": "Будаўніцтва чыгункі",
          "disused": "Пакінутая чыгунка",
          "funicular": "Фунікулёр",
          "halt": "Чыгуначны прыпынак",
          "junction": "Чыгуначны вузел",
          "level_crossing": "Чыгуначны пераезд",
          "light_rail": "Лінія для лёгкага чыгуначнага транспарту",
          "miniature": "Мініятурная чыгунка",
          "monorail": "Манарэльс",
          "narrow_gauge": "Вузкакалейка",
          "platform": "Чыгуначная плятформа",
          "preserved": "Закансэрваваная чыгуначная каляя",
          "proposed": "Праектуемая чыгунка",
          "spur": "Чыгуначнае разгалінаваньне",
          "station": "Чыгуначная станцыя",
          "stop": "Чыгуначны прыпынак",
          "subway": "Мэтро",
          "subway_entrance": "Уваход у мэтро",
          "switch": "Чыгуначная стрэлка",
          "tram": "Трамвайная каляя",
          "tram_stop": "Трамвайны прыпынак"
        },
        "shop": {
          "alcohol": "Алькагольная крама",
          "antiques": "Антыкварыят",
          "art": "Мастацкі салён",
          "bakery": "Пякарня",
          "beauty": "Салён прыгажосьці",
          "beverages": "Крама напояў",
          "bicycle": "Роварная крама",
          "bookmaker": "Букмекер",
          "books": "Кніжная крама",
          "boutique": "Буцік",
          "butcher": "Мясная крама",
          "car": "Аўтамабільны салён",
          "car_parts": "Крама аўтамабільных запчастак",
          "car_repair": "Аўтамабільная майстэрня",
          "carpet": "Дывановая крама",
          "charity": "Сэканд хэнд",
          "chemist": "Крама бытавой хіміі",
          "clothes": "Крама адзеньня",
          "computer": "Кампутарная крама",
          "confectionery": "Кандытарская",
          "convenience": "Крама",
          "copyshop": "Паслугі капіяваньня",
          "cosmetics": "Касмэтычная крама",
          "deli": "Гастраном",
          "department_store": "Унівэрсальная крама",
          "discount": "Крама тавараў са зьніжкамі",
          "doityourself": "Зрабі сам",
          "dry_cleaning": "Хімчыстка",
          "electronics": "Крама электронікі",
          "estate_agent": "Агенцтва нерухомасьці",
          "farm": "Сельская крама",
          "fashion": "Крама моднага адзеньня",
          "fish": "Рыбная крама",
          "florist": "Кветкавая крама",
          "food": "Харчовая крама",
          "funeral_directors": "Паслугі па пахаваньні",
          "furniture": "Мэбля",
          "gallery": "Галерэя",
          "garden_centre": "Сад і агарод",
          "general": "Унівэрсальная крама",
          "gift": "Крама падарункаў",
          "greengrocer": "Садавіна, гародніна",
          "grocery": "Бакалея",
          "hairdresser": "Цырульня",
          "hardware": "Гаспадарчыя тавары",
          "hifi": "Крама аўдыё/відэё тэхнікі",
          "houseware": "Крама посуду",
          "interior_decoration": "Афармленне інтэр'еру",
          "jewelry": "Ювэлірная крама",
          "kiosk": "Шапік",
          "kitchen": "Крама кухань",
          "laundry": "Пральня",
          "lottery": "Латарэя",
          "mall": "Гандлёвы цэнтар",
          "market": "Рынак",
          "massage": "Паведамленне",
          "mobile_phone": "Крама мабільных тэлефонаў",
          "motorcycle": "Крама матацыклаў",
          "music": "Музычная крама",
          "newsagent": "Газэтны шапік",
          "optician": "Оптыка",
          "organic": "Харчовая крама",
          "outdoor": "Выязны гандаль",
          "paint": "Крама мастака",
          "pawnbroker": "Ламбард",
          "pet": "Зоалягічная крама",
          "pharmacy": "Аптэка",
          "photo": "Фотакрама",
          "seafood": "Морапрадукты",
          "second_hand": "Крама патрыманых рэчаў",
          "shoes": "Крама абутку",
          "sports": "Спартовая крама",
          "stationery": "Канцтавары",
          "supermarket": "Супэрмаркет",
          "tailor": "Кравец",
          "ticket": "Каса",
          "tobacco": "Тытунёвая крама",
          "toys": "Крама цацак",
          "travel_agency": "Турыстычнае агенцтва",
          "tyres": "Крама шын",
          "vacant": "Пустуючая крама",
          "variety_store": "Крама адной цаны",
          "video": "Відэакрама",
          "wine": "Алькагольная крама",
          "yes": "Крама"
        },
        "tourism": {
          "alpine_hut": "Горная гасьцініца",
          "apartment": "Кватэра",
          "artwork": "Твор мастацтва",
          "attraction": "Славутасьць",
          "bed_and_breakfast": "Танная гасьцініца",
          "cabin": "Кабіна",
          "camp_site": "Кемпінг",
          "caravan_site": "Пляцоўка для трэйлераў",
          "chalet": "Шале",
          "gallery": "Галерэя",
          "guest_house": "Домік для гасьцей",
          "hostel": "Хостэл",
          "hotel": "Гатэль",
          "information": "Інфармацыя",
          "motel": "Матэль",
          "museum": "Музэй",
          "picnic_site": "Месца для пікніка",
          "theme_park": "Атракцыёны",
          "viewpoint": "Аглядальная пляцоўка",
          "zoo": "Заапарк"
        },
        "tunnel": {
          "building_passage": "Праезд цераз будынак",
          "culvert": "Кульверт",
          "yes": "Тунэль"
        },
        "waterway": {
          "artificial": "Штучны водны шлях",
          "boatyard": "Майстэрня караблёў",
          "canal": "Канал",
          "dam": "Дамба",
          "derelict_canal": "Пакінуты канал",
          "ditch": "Роў",
          "dock": "Док",
          "drain": "Дрэнажны канал",
          "lock": "Шлюз",
          "lock_gate": "Вароты шлюза",
          "mooring": "Якарная стаянка",
          "rapids": "Парогі",
          "river": "Рака",
          "stream": "Струмень",
          "wadi": "Сухое рэчышча",
          "waterfall": "Вадаспад",
          "weir": "Плаціна",
          "yes": "Водны маршрут"
        }
      },
      "prefix_format": "%{name}"
    }
  },
  "javascripts": {
    "changesets": {
      "show": {
        "comment": "Каментаваць",
        "hide_comment": "схаваць",
        "subscribe": "Падпісацца",
        "unhide_comment": "паказаць",
        "unsubscribe": "Адпісацца"
      }
    },
    "close": "Закрыць",
    "context": {
      "add_note": "Дадаць заўвагу тут",
      "centre_map": "Цэнтраваць карту",
      "directions_from": "Маршрут адсюль",
      "directions_to": "Маршрут сюды",
      "query_features": "Пошук аб’ектаў",
      "show_address": "Паказаць адрас"
    },
    "directions": {
      "ascend": "Угору",
      "descend": "Уніз",
      "directions": "Маршрут",
      "distance": "Адлегласць",
      "engines": {
        "fossgis_osrm_bike": "Веласіпед (OSRM)",
        "fossgis_osrm_car": "Аўтамабіль (OSRM)",
        "fossgis_osrm_foot": "Пешаход (OSRM)",
        "graphhopper_bicycle": "Веласіпед (GraphHopper)",
        "graphhopper_car": "Аўтамабіль (GraphHopper)",
        "graphhopper_foot": "Пешшу (GraphHopper)"
      },
      "errors": {
        "no_place": "Прабачце - не магу знайсці гэта месца: %{place}.",
        "no_route": "Не атрымалася знайсці маршрут паміж двума гэтымі месцамі."
      },
      "instructions": {
        "against_oneway_without_exit": "Рухайцеся супраць аднабаковага руху па %{name}",
        "continue_without_exit": "Працягвайце рух па %{name}",
        "courtesy": "Маршрут прадастаўлены %{link}",
        "destination_without_exit": "Вы прыбылі ў месца прызначэння",
        "end_oneway_without_exit": "Канец аднабаковага руху на %{name}",
        "endofroad_left_without_exit": "У канцы дарогі павярніце налева на %{name}",
        "endofroad_right_without_exit": "У канцы дарогі павярніце направа на %{name}",
        "exit_counts": {
          "eighth": "8-ы",
          "fifth": "5-ы",
          "first": "1-ы",
          "fourth": "4-ы",
          "ninth": "9-ы",
          "second": "2-і",
          "seventh": "7-ы",
          "sixth": "6-ы",
          "tenth": "10-ы",
          "third": "3-і"
        },
        "exit_roundabout": "На кругавым руху павярніце на %{name}",
        "follow_without_exit": "Рухайцеся па %{name}",
        "fork_left_without_exit": "На развілцы павярніце налева на %{name}",
        "fork_right_without_exit": "На развілцы павярніце направа на %{name}",
        "leave_roundabout_without_exit": "Выехаць з кальца - %{name}",
        "merge_left_without_exit": "Перастройцеся ўлева на %{name}",
        "merge_right_without_exit": "Перастройцеся ўправа на %{name}",
        "offramp_left": "Павярніце на левы заезд",
        "offramp_left_with_directions": "Павярніце на левы заезд у кірунку %{directions}",
        "offramp_left_with_exit": "Павярніце на з'езд %{exit} злева",
        "offramp_left_with_exit_directions": "Павярніце на з'езд %{exit} злева ў кірунку %{directions}",
        "offramp_left_with_exit_name": "Павярніце на з'езд %{exit} злева на %{name}",
        "offramp_left_with_exit_name_directions": "Павярніце на з'езд %{exit} злева на %{name} у кірунку %{directions}",
        "offramp_left_with_name": "Павярніце налева на з'езд да %{name}",
        "offramp_left_with_name_directions": "Павярніце на левы заезд на %{name} у кірунку %{directions}",
        "offramp_right": "Павярніце на правы заезд",
        "offramp_right_with_directions": "Павярніце на правы заезд у кірунку %{directions}",
        "offramp_right_with_exit": "Павярніце на з'езд %{exit} справа",
        "offramp_right_with_exit_directions": "Павярніце на з'езд %{exit} справа ў кірунку %{directions}",
        "offramp_right_with_exit_name": "Павярніце на з'езд %{exit} справа на %{name}",
        "offramp_right_with_exit_name_directions": "Павярніце на з'езд %{exit} справа на %{name} у кірунку %{directions}",
        "offramp_right_with_name": "Павярніце направа на з'езд да %{name}",
        "offramp_right_with_name_directions": "Павярніце на правы заезд на %{name} у кірунку %{directions}",
        "onramp_left": "Павярніце на левы заезд",
        "onramp_left_with_directions": "Павярніце на левы заезд у кірунку %{directions}",
        "onramp_left_with_name_directions": "Павярніце на левы заезд на %{name} у кірунку %{directions}",
        "onramp_left_without_directions": "Павярніце на левы заезд",
        "onramp_left_without_exit": "Павярніце налева на з'езд да %{name}",
        "onramp_right": "Павярніце направа на заезд",
        "onramp_right_with_directions": "Павярніце на правы заезд у кірунку %{directions}",
        "onramp_right_with_name_directions": "Павярніце на правы заезд на %{name} у кірунку %{directions}",
        "onramp_right_without_directions": "Павярніце направа на заезд",
        "onramp_right_without_exit": "Павярніце направа на з'езд да %{name}",
        "roundabout_with_exit": "Пакіньце кальцавую развязку праз выезд %{exit} на %{name}",
        "roundabout_with_exit_ordinal": "Пакіньце кальцавую развязку праз выезд %{exit} на %{name}",
        "roundabout_without_exit": "На кругавым руху павярніце на %{name}",
        "sharp_left_without_exit": "Рэзка павярніце налева на %{name}",
        "sharp_right_without_exit": "Рэзка павярніце направа на %{name}",
        "slight_left_without_exit": "Плаўна павярніце налева на %{name}",
        "slight_right_without_exit": "Плаўна павярніце направа на %{name}",
        "start_without_exit": "Пачніце на %{name}",
        "stay_roundabout_without_exit": "Заставацца на кальцы - %{name}",
        "turn_left_without_exit": "Павярніце налева на %{name}",
        "turn_right_without_exit": "Павярніце направа на %{name}",
        "unnamed": "без назвы",
        "uturn_without_exit": "Развярніцеся на %{name}",
        "via_point_without_exit": "(праз кропку)"
      },
      "time": "Час"
    },
    "edit_help": "Перамясціце карту і наблізце месца, якое вы хочаце рэдагаваць, затым націсніце тут.",
    "embed": {
      "report_problem": "Паведаміць аб праблеме"
    },
    "key": {
      "title": "Умоўныя абазначэнні",
      "tooltip": "Умоўныя абазначэнні",
      "tooltip_disabled": "Умоўныя абазначэнні даступныя толькі для звычайнай карты"
    },
    "map": {
      "base": {
        "cycle_map": "Роварная мапа",
        "hot": "Гуманітарная карта",
        "standard": "Звычайная карта",
        "transport_map": "Транспартная мапа"
      },
      "copyright": "© <a href='%{copyright_url}'>OpenStreetMap contributors</a>",
      "donate_link_text": "<a class='donate-attr' href='%{donate_url}'>Зрабіць ахвяраванне</a>",
      "hotosm": "Афармленне тайлаў <a href=\"%{hotosm_url}\">Humanitarian OpenStreetMap Team</a>, хостынг ад <a href=\"%{osmfrance_url}\">OpenStreetMap France</a>",
      "layers": {
        "data": "Картаграфічныя дадзеныя",
        "gps": "Агульныя GPS-сляды",
        "header": "Слаі карты",
        "notes": "Заўвагі на карце",
        "overlays": "Уключыць накладкі для ліквідацыі памылак карты",
        "title": "Слаі"
      },
      "locate": {
        "feetPopup": {
          "few": "Вы знаходзіцеся ў %{count} футах ад гэтага пункту",
          "many": "Вы знаходзіцеся ў %{count} футах ад гэтага пункту",
          "one": "Вы знаходзіцеся ў адным фуце ад гэтага пункту",
          "other": "Вы знаходзіцеся ў %{count} футах ад гэтага пункту"
        },
        "metersPopup": {
          "few": "Вы знаходзіцеся ў %{count} метрах ад гэтага пункту",
          "many": "Вы знаходзіцеся ў %{count} метрах ад гэтага пункту",
          "one": "Вы знаходзіцеся ў адным метры ад гэтага пункту",
          "other": "Вы знаходзіцеся ў %{count} метрах ад гэтага пункту"
        },
        "title": "Паказаць маё месцазнаходжанне"
      },
      "terms": "<a href='%{terms_url}' target='_blank'>Умовы выкарыстання сайта і API</a>",
      "thunderforest": "Тайлы прадастаўлены <a href=\"%{thunderforest_url}\">Andy Allan</a>",
      "zoom": {
        "in": "Павялічыць",
        "out": "Паменшыць"
      }
    },
    "notes": {
      "new": {
        "add": "Дадаць заўвагу",
        "advice": "Ваша заўвага агульнадаступная і можа выкарыстоўвацца для абнаўлення карты, таму не ўводзьце асабістую інфармацыю або інфармацыю з абароненых аўтарскім правам карт або рэестраў.",
        "intro": "Заўважылі памылку або чагосьці не стае? Дайце іншым удзельнікам магчымасць даведацца пра памылку і такім чынам мы выправім яе. Перамясціце маркер у патрэбную пазіцыю і напішыце заўвагу з тлумачэннем праблемы."
      },
      "show": {
        "anonymous_warning": "Гэтая нататка змяшчае каментары ад ананімных карыстальнікаў, што павінны быць незалежна правераны.",
        "comment": "Каментаваць",
        "comment_and_resolve": "Каментаваць і вырашыць",
        "hide": "Схаваць",
        "reactivate": "Актываваць паўторна",
        "resolve": "Вырашыць"
      }
    },
    "query": {
      "error": "Памылка сувязі з %{server}: %{error}",
      "node": "Пункт",
      "nothing_found": "Аб’екты не знойдзены",
      "relation": "Дачыненне",
      "timeout": "Тайм-аўт падключэння да %{server}",
      "way": "Лінія"
    },
    "share": {
      "cancel": "Скасаваць",
      "center_marker": "Цэнтраваць карту па маркеры",
      "custom_dimensions": "Абраць памер уручную",
      "download": "Сцягнуць",
      "embed": "HTML",
      "format": "Фармат:",
      "geo_uri": "Геа URI",
      "image": "Выява",
      "image_size": "На выяве будзе звычайная карта памерам",
      "include_marker": "Дадаць маркер",
      "link": "Спасылка ці HTML",
      "long_link": "Спасылка",
      "only_standard_layer": "Толькі стандартны пласт можа быць экспартаваны ў выглядзе выявы",
      "paste_html": "Уставіць HTML для ўбудовы ў вэб-сайт",
      "scale": "Маштаб:",
      "short_link": "Кароткая спасылка",
      "short_url": "Кароткі URL-адрас",
      "title": "Падзяліцца",
      "view_larger_map": "Праглядзець большую карту"
    },
    "site": {
      "createnote_disabled_tooltip": "Наблізце, каб дадаць заўвагу на карту",
      "createnote_tooltip": "Дадаць заўвагу на карту",
      "edit_disabled_tooltip": "Павялічыць маштаб мапы для рэдагаваньня",
      "edit_tooltip": "Рэдагаваць мапу",
      "map_data_zoom_in_tooltip": "Павялічце, каб убачыць картаграфічныя дадзеныя",
      "map_notes_zoom_in_tooltip": "Наблізце, каб убачыць заўвагі на карце",
      "queryfeature_disabled_tooltip": "Наблізіцеся для пошуку аб'ектаў",
      "queryfeature_tooltip": "Пошук аб’ектаў"
    }
  },
  "layouts": {
    "project_name": {
      "title": "OpenStreetMap"
    }
  },
  "site": {
    "edit": {
      "anon_edits_html": "(%{link})",
      "anon_edits_link": "https://wiki.openstreetmap.org/wiki/Disabling_anonymous_edits",
      "anon_edits_link_text": "Даведацца ў чым справа.",
      "flash_player_required_html": "Каб выкарыстоўваць Potlatch, флэш-рэдактар для OpenStreetMap, неабходны Flash-плэер. Вы можаце <a href=\"https://get.adobe.com/flashplayer/\">загрузіць Flash-плэер з Adobe.com</a>. Існуюць і <a href=\"https://wiki.openstreetmap.org/wiki/Editing\">іншыя магчымасьці</a> для рэдагаваньня OpenStreetMap.",
      "id_not_configured": "iD не быў настроены",
      "no_iframe_support": "Ваш браўзэр не падтрымлівае рамкі HTML, якія зьяўляюцца неабходнымі для гэтай магчымасьці.",
      "not_public": "Вы не зрабілі Вашыя рэдагаваньні публічнымі.",
      "not_public_description_html": "Вы больш ня можаце рэдагаваць мапу ў такім рэжыме. Вы можаце зрабіць Вашыя рэдагаваньні публічнымі на Вашай %{user_page}.",
      "potlatch2_not_configured": "Potlatch 2 ня быў наладжаны — калі ласка, паглядзіце https://wiki.openstreetmap.org/wiki/The_Rails_Port#Potlatch_2 дзеля дадатковых зьвестак",
      "potlatch2_unsaved_changes": "Вы маеце незахаваныя зьмены. (Каб захаваць у Potlatch 2, Вам неабходна націснуць кнопку «захаваць».)",
      "potlatch_unsaved_changes": "Вы маеце незахаваныя зьмены. (Для таго каб захаваць зьмены ў Potlatch, Вам неабходна зьняць пазначэньне з цяперашняй дарогі ці пункту, калі рэдагуеце ўжывую, ці націснуць кнопку «захаваць».)",
      "user_page_link": "старонцы карыстальніка"
    },
    "index": {
      "remote_failed": "Памылка рэдагаваньня. Упэўніцеся, што JOSM ці Merkaartor загружаныя і дазволеная магчымасьць аддаленага кіраваньня"
    },
    "sidebar": {
      "search_results": "Вынікі пошуку"
    }
  },
  "time": {
    "am": "am",
    "formats": {
      "blog": "%e %B %Y",
      "default": "%a, %d %b %Y %H:%M:%S %z",
      "friendly": "%e %B %Y у %H:%M",
      "long": "%B %d, %Y %H:%M",
      "short": "%d %b %H:%M"
    },
    "pm": "pm"
  }
});
