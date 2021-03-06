I18n.translations || (I18n.translations = {});
I18n.translations["uk"] = I18n.extend((I18n.translations["uk"] || {}), {
  "browse": {
    "start_rjs": {
      "feature_warning": "Завантаження %{num_features} об’єктів, яке може призвести до уповільнення або неможливості роботи вашого оглядача. Ви справді бажаєте переглянути ці дані?",
      "load_data": "Завантажити дані",
      "loading": "Завантаження…"
    }
  },
  "date": {
    "abbr_day_names": [
      "нд.",
      "пн.",
      "вт.",
      "ср.",
      "чт.",
      "пт.",
      "сб."
    ],
    "abbr_month_names": [
      null,
      "січ.",
      "лют.",
      "бер.",
      "квіт.",
      "трав.",
      "черв.",
      "лип.",
      "серп.",
      "вер.",
      "жовт.",
      "лист.",
      "груд."
    ],
    "day_names": [
      "неділя",
      "понеділок",
      "вівторок",
      "середа",
      "четвер",
      "п'ятниця",
      "субота"
    ],
    "formats": {
      "default": "%d.%m.%Y",
      "long": "%-d %B %Y",
      "short": "%-d %b"
    },
    "month_names": [
      null,
      "Січня",
      "Лютого",
      "Березня",
      "Квітня",
      "Травня",
      "Червня",
      "Липня",
      "Серпня",
      "Вересня",
      "Жовтня",
      "Листопада",
      "Грудня"
    ],
    "order": [
      "day",
      "month",
      "year"
    ]
  },
  "diary_entries": {
    "edit": {
      "marker_text": "Місце написання нотатки"
    }
  },
  "geocoder": {
    "search_osm_nominatim": {
      "admin_levels": {
        "level10": "Межа передмістя",
        "level2": "Державний кордон",
        "level4": "Межа краю, штату, республіки",
        "level5": "Межа області",
        "level6": "Межа району, графства",
        "level8": "Межа міста",
        "level9": "Межа села"
      },
      "prefix": {
        "aerialway": {
          "cable_car": "Канатна дорога",
          "chair_lift": "Крісельний підйомник",
          "drag_lift": "Бугельний підйомник",
          "gondola": "З підвісними кабінами",
          "platter": "Бугельний підіймач",
          "pylon": "Пілон",
          "station": "Канатна станція",
          "t-bar": "T-образний підйомник"
        },
        "aeroway": {
          "aerodrome": "Аеродром",
          "airstrip": "Злітно-посадкова смуга",
          "apron": "Перон",
          "gate": "Вихід на посадку",
          "hangar": "Ангар",
          "helipad": "Вертолітний майданчик",
          "holding_position": "Місце зупинки",
          "parking_position": "Місце паркування",
          "runway": "Злітна смуга",
          "taxiway": "Руліжна доріжка",
          "terminal": "Термінал"
        },
        "amenity": {
          "animal_shelter": "Притулок для тварин",
          "arts_centre": "Мистецький центр",
          "atm": "Банкомат",
          "bank": "Банк",
          "bar": "Бар",
          "bbq": "Барбекю",
          "bench": "Лавка",
          "bicycle_parking": "Велопарковка",
          "bicycle_rental": "Велопрокат",
          "biergarten": "Пивний сад",
          "boat_rental": "Прокат човнів",
          "brothel": "Бордель",
          "bureau_de_change": "Обмін валют",
          "bus_station": "Автовокзал",
          "cafe": "Кафе",
          "car_rental": "Прокат автомобілів",
          "car_sharing": "Короткочасний автопрокат",
          "car_wash": "Автомийка",
          "casino": "Казино",
          "charging_station": "Станція для зарядки електромобілів",
          "childcare": "Догляд за дітьми",
          "cinema": "Кінотеатр",
          "clinic": "Клініка",
          "clock": "Годинник",
          "college": "Коледж",
          "community_centre": "Громадський центр",
          "courthouse": "Суд",
          "crematorium": "Крематорій",
          "dentist": "Стоматологія",
          "doctors": "Лікарі",
          "drinking_water": "Питна вода",
          "driving_school": "Автошкола",
          "embassy": "Амбасада",
          "fast_food": "Швидке харчування",
          "ferry_terminal": "Поромна станція",
          "fire_station": "Пожежна станція",
          "food_court": "Фуд-корт",
          "fountain": "Фонтан",
          "fuel": "Пальне",
          "gambling": "Азартні ігри",
          "grave_yard": "Цвинтар",
          "grit_bin": "Контейнер з гравієм",
          "hospital": "Шпиталь",
          "hunting_stand": "Мисливська вежа",
          "ice_cream": "Морозиво",
          "kindergarten": "Дитячий садок",
          "library": "Бібліотека",
          "marketplace": "Ринок",
          "monastery": "Монастир",
          "motorcycle_parking": "Стоянка мотоциклів",
          "nightclub": "Нічний клуб",
          "nursing_home": "Будинок престарілих",
          "office": "Офіс",
          "parking": "Стоянка",
          "parking_entrance": "В’їзд на стоянку",
          "parking_space": "Стоянка",
          "pharmacy": "Аптека",
          "place_of_worship": "Культова споруда",
          "police": "Поліція (міліція)",
          "post_box": "Поштова скринька",
          "post_office": "Пошта",
          "preschool": "Дошкільний заклад",
          "prison": "В’язниця",
          "pub": "Паб",
          "public_building": "Громадський заклад",
          "recycling": "Місце переробки відходів",
          "restaurant": "Ресторан",
          "retirement_home": "Будинок для людей похилого віку",
          "sauna": "Сауна",
          "school": "Школа",
          "shelter": "Притулок",
          "shop": "Магазин",
          "shower": "Душ",
          "social_centre": "Суспільний центр",
          "social_club": "Клуб за інтересами",
          "social_facility": "Соціальна установа",
          "studio": "Студія",
          "swimming_pool": "Басейн",
          "taxi": "Таксі",
          "telephone": "Телефон",
          "theatre": "Театр",
          "toilets": "Туалет",
          "townhall": "Управління населеного пункту",
          "university": "Університет",
          "vending_machine": "Торговий автомат",
          "veterinary": "Ветлікарня",
          "village_hall": "Сільська управа",
          "waste_basket": "Контейнер для сміття",
          "waste_disposal": "Утилізація відходів",
          "water_point": "Питна вода",
          "youth_centre": "Молодіжний центр"
        },
        "boundary": {
          "administrative": "Адміністративна межа",
          "census": "Межа переписної ділянки",
          "national_park": "Національний парк",
          "protected_area": "Заповідна ділянка"
        },
        "bridge": {
          "aqueduct": "Акведук",
          "boardwalk": "Тротуар",
          "suspension": "Підвісний міст",
          "swing": "Поворотний міст",
          "viaduct": "Віадук",
          "yes": "Міст"
        },
        "building": {
          "yes": "Будівля"
        },
        "craft": {
          "brewery": "Пивоварня",
          "carpenter": "Столяр",
          "electrician": "Електрик",
          "gardener": "Садівник",
          "painter": "Художник",
          "photographer": "Фотограф",
          "plumber": "Сантехнік",
          "shoemaker": "Швець",
          "tailor": "Кравець",
          "yes": "Товари для рукоділля"
        },
        "emergency": {
          "ambulance_station": "Станція швидкої медичної допомоги",
          "assembly_point": "Місце збору",
          "defibrillator": "Дефібрилятор",
          "landing_site": "Місце аварійної посадки",
          "phone": "Телефон для екстрених викликів",
          "water_tank": "Пожежний резервуар",
          "yes": "Аварійні служби"
        },
        "highway": {
          "abandoned": "Покинута дорога",
          "bridleway": "Дорога для їзди верхи",
          "bus_guideway": "Рейковий автобус",
          "bus_stop": "Автобусна зупинка",
          "construction": "Будівництво автомагістралі",
          "corridor": "Коридор",
          "cycleway": "Велодоріжка",
          "elevator": "Ліфт",
          "emergency_access_point": "Пункт швидкої допомоги",
          "footway": "Пішохідна доріжка",
          "ford": "Брід",
          "give_way": "Знак Дати путь",
          "living_street": "Житлова зона",
          "milestone": "Кілометровий стовпчик",
          "motorway": "Автомагістраль",
          "motorway_junction": "В’їзд на автомагістраль",
          "motorway_link": "З’єднання з автомагістраллю",
          "passing_place": "Роз'їзд",
          "path": "Стежка",
          "pedestrian": "Пішохідна дорога",
          "platform": "Платформа",
          "primary": "Головна дорога",
          "primary_link": "З’єднання з головною дорогою",
          "proposed": "Пропонована дорога",
          "raceway": "Гоночна траса",
          "residential": "Дорога місцевого значення",
          "rest_area": "Зона відпочинку",
          "road": "Дорога",
          "secondary": "Другорядна дорога",
          "secondary_link": "З’єднання з другорядною дорогою",
          "service": "Службова дорога",
          "services": "Придорожній сервіс",
          "speed_camera": "Камера контролю швидкості",
          "steps": "Сходи",
          "stop": "Знак СТОП",
          "street_lamp": "Вуличний ліхтар",
          "tertiary": "Третьорядна дорога",
          "tertiary_link": "Виїзд на третьорядну дорогу",
          "track": "Путівець",
          "traffic_signals": "Світлофор",
          "trail": "Стежка",
          "trunk": "Шосе",
          "trunk_link": "З’їзд з/на шосе",
          "turning_loop": "Місце для розвороту",
          "unclassified": "Дорога без класифікації",
          "yes": "Дорога"
        },
        "historic": {
          "archaeological_site": "Археологічні дослідження",
          "battlefield": "Поле битви",
          "boundary_stone": "Межовий камінь",
          "building": "Історична будівля",
          "bunker": "Бункер",
          "castle": "За́мок",
          "church": "Храм",
          "city_gate": "Міські ворота",
          "citywalls": "Міський мур",
          "fort": "Форт",
          "heritage": "Об’єкт культурної спадщини",
          "house": "Дім",
          "icon": "Ікона",
          "manor": "Маєток",
          "memorial": "Меморіал",
          "mine": "Копальня",
          "mine_shaft": "Шахтний вал",
          "monument": "Пам’ятник",
          "roman_road": "Римська дорога",
          "ruins": "Руїни",
          "stone": "Камінь",
          "tomb": "Гробниця",
          "tower": "Вежа",
          "wayside_cross": "Придорожній хрест",
          "wayside_shrine": "Придорожній храм",
          "wreck": "Місце катастрофи",
          "yes": "Історичне місце"
        },
        "junction": {
          "yes": "Перехресття"
        },
        "landuse": {
          "allotments": "Сади-городи",
          "basin": "Резервуар",
          "brownfield": "Територія очищена під нову забудову",
          "cemetery": "Кладовище",
          "commercial": "Торгівельно-офісна територія",
          "conservation": "Заповідник",
          "construction": "Будівництво",
          "farm": "Ферма",
          "farmland": "Рілля",
          "farmyard": "Територія ферми",
          "forest": "Ліс",
          "garages": "Гаражі",
          "grass": "Трава",
          "greenfield": "Територія виділена під забудову",
          "industrial": "Промзона",
          "landfill": "Звалище",
          "meadow": "Левада",
          "military": "Військова зона",
          "mine": "Копальня",
          "orchard": "Сад",
          "quarry": "Кар’єр",
          "railway": "Залізниця",
          "recreation_ground": "Зона відпочинку",
          "reservoir": "Водосховище",
          "reservoir_watershed": "Водозбірна площа водосховища",
          "residential": "Житловий квартал",
          "retail": "Роздрібна торгівля",
          "road": "Зона дорожньої мережі",
          "village_green": "Сільський майдан",
          "vineyard": "Виноградник",
          "yes": "Землекористування"
        },
        "leisure": {
          "beach_resort": "Пляжний курорт",
          "bird_hide": "Засідка (пункт спостереження за птахами)",
          "common": "Громадська земля",
          "dog_park": "Майданчик для собак",
          "firepit": "Місце для вогнища",
          "fishing": "Район риболовлі",
          "fitness_centre": "Фітнес-центр",
          "fitness_station": "Тренажери",
          "garden": "Сад",
          "golf_course": "Поле для гольфу",
          "horse_riding": "Верхова їзда",
          "ice_rink": "Ковзанка",
          "marina": "Гавань для екскурсійних суден",
          "miniature_golf": "Міні-гольф",
          "nature_reserve": "Заповідник",
          "park": "Парк",
          "pitch": "Спортмайданчик",
          "playground": "Дитячий майданчик",
          "recreation_ground": "База відпочинку",
          "resort": "Курорт",
          "sauna": "Сауна",
          "slipway": "Сліп (спуск на воду)",
          "sports_centre": "Спортивний центр",
          "stadium": "Стадіон",
          "swimming_pool": "Басейн",
          "track": "Бігова доріжка",
          "water_park": "Аквапарк",
          "yes": "Дозвілля"
        },
        "man_made": {
          "adit": "Штольня",
          "beacon": "Маяк",
          "beehive": "Вулик",
          "breakwater": "Хвилеріз",
          "bridge": "Міст",
          "bunker_silo": "Бункер",
          "chimney": "Труба",
          "crane": "Кран",
          "dolphin": "Причальна тумба",
          "dyke": "Прибережний насип",
          "embankment": "Насип",
          "flagpole": "Флагшток",
          "gasometer": "Газгольдер",
          "groyne": "Хвилеріз",
          "kiln": "Піч",
          "lighthouse": "Маяк",
          "mast": "Мачта",
          "mine": "Копальня",
          "mineshaft": "Шахтний вал",
          "monitoring_station": "Станція моніторингу",
          "petroleum_well": "Нафтова скважина",
          "pier": "Пірс",
          "pipeline": "Трубопровід",
          "silo": "Силосна яма",
          "storage_tank": "Резервуар для зберігання",
          "surveillance": "Відеоспостереження",
          "tower": "Вежа",
          "wastewater_plant": "Очисні споруди",
          "water_tower": "Водонапірна вежа",
          "water_well": "Криниця",
          "water_works": "Водопостачання",
          "watermill": "Водяний млин",
          "windmill": "Вітряк",
          "works": "Фабрика",
          "yes": "Штучні споруди"
        },
        "military": {
          "airfield": "Військовий аеродром",
          "barracks": "Казарма",
          "bunker": "Бункер",
          "yes": "Військовий"
        },
        "mountain_pass": {
          "yes": "Гірський перевал"
        },
        "natural": {
          "bay": "Затока",
          "beach": "Пляж",
          "cape": "Мис",
          "cave_entrance": "Вхід до печери",
          "cliff": "Скеля",
          "crater": "Кратер",
          "dune": "Дюна",
          "fell": "Вирубка",
          "fjord": "Фіорд",
          "forest": "Ліс",
          "geyser": "Гейзер",
          "glacier": "Льодовик",
          "grassland": "Пасовище",
          "heath": "Степ",
          "hill": "Пагорб",
          "island": "Острів",
          "land": "Суша",
          "marsh": "Болото",
          "moor": "Якірна стоянка",
          "mud": "Грязюка",
          "peak": "Пік",
          "point": "Точка",
          "reef": "Риф",
          "ridge": "Хребет",
          "rock": "Скеля",
          "saddle": "Перевал",
          "sand": "Пісок",
          "scree": "Щебінь",
          "scrub": "Чагарник",
          "spring": "Джерело",
          "stone": "Камінь",
          "strait": "Протока",
          "tree": "Дерево",
          "valley": "Долина",
          "volcano": "Вулкан",
          "water": "Вода",
          "wetland": "Заболочені землі",
          "wood": "Дерева"
        },
        "office": {
          "accountant": "Бухгалтер",
          "administrative": "Адміністрація",
          "architect": "Архітектор",
          "association": "Асоціація",
          "company": "Компанія",
          "educational_institution": "Навчальний заклад",
          "employment_agency": "Агентство зайнятості",
          "estate_agent": "Агент з нерухомості",
          "government": "Державна установа",
          "insurance": "Страхова компанія",
          "it": "ІТ-офіс",
          "lawyer": "Юрист",
          "ngo": "Недержавна установа",
          "telecommunication": "Офіс телекомунікаційної компанії",
          "travel_agent": "Туристична агенція",
          "yes": "Офіси"
        },
        "place": {
          "allotments": "Сади-городи, дачні ділянки",
          "city": "Місто",
          "city_block": "Міський квартал",
          "country": "Країна",
          "county": "Район",
          "farm": "Ферма",
          "hamlet": "Хутір",
          "house": "Будинок",
          "houses": "Будинки",
          "island": "Острів",
          "islet": "Острівець",
          "isolated_dwelling": "Окреме господарство",
          "locality": "Місцевість",
          "municipality": "Муніципалітет",
          "neighbourhood": "Мікрорайон",
          "postcode": "Індекс",
          "quarter": "Квартал",
          "region": "Район",
          "sea": "Море",
          "square": "Площа",
          "state": "Штат",
          "subdivision": "Підрозділ",
          "suburb": "Передмістя",
          "town": "Місто",
          "unincorporated_area": "Неприєднанні території",
          "village": "Село",
          "yes": "Місцевість"
        },
        "railway": {
          "abandoned": "Занедбані колії",
          "construction": "Будівництво колії",
          "disused": "Покинута колія",
          "funicular": "Фунікулер",
          "halt": "Зупинка поїзда",
          "junction": "Переїзд",
          "level_crossing": "Залізничний переїзд",
          "light_rail": "Швидкісний трамвай",
          "miniature": "Мінізалізниця",
          "monorail": "Монорейка",
          "narrow_gauge": "Вузькоколійка",
          "platform": "Залізнична платформа",
          "preserved": "Законсервовані колії",
          "proposed": "Запроектовані залізничні колії",
          "spur": "Залізнична гілка",
          "station": "Залізнична станція",
          "stop": "Залізнична зупинка",
          "subway": "Метро",
          "subway_entrance": "Вхід в метро",
          "switch": "Стрілка",
          "tram": "Трамвайні колії",
          "tram_stop": "Трамвайна зупинка"
        },
        "shop": {
          "alcohol": "Спиртні напої на винос",
          "antiques": "Антикваріат",
          "art": "Художній салон",
          "bakery": "Пекарня",
          "beauty": "Салон краси",
          "beverages": "Напої",
          "bicycle": "Веломагазин",
          "bookmaker": "Букмекер",
          "books": "Книгарня",
          "boutique": "Бутік",
          "butcher": "М’ясо",
          "car": "Автомагазин",
          "car_parts": "Автозапчастини",
          "car_repair": "Автомайстерня",
          "carpet": "Килими",
          "charity": "Соціальний магазин",
          "chemist": "Побутова хімія",
          "clothes": "Одяг",
          "computer": "Комп’ютерна крамниця",
          "confectionery": "Кондитерська",
          "convenience": "Міні-маркет",
          "copyshop": "Послуги копіювання",
          "cosmetics": "Магазин косметики",
          "deli": "Делікатеси",
          "department_store": "Універмаг",
          "discount": "Уцінені товари",
          "doityourself": "Зроби сам",
          "dry_cleaning": "Хімчистка",
          "electronics": "Магазин електроніки",
          "estate_agent": "Агентство нерухомості",
          "farm": "Фермерський магазин",
          "fashion": "Модний одяг",
          "fish": "Риба",
          "florist": "Квіти",
          "food": "Продовольчі товари",
          "funeral_directors": "Ритуальні послуги",
          "furniture": "Меблі",
          "gallery": "Галерея",
          "garden_centre": "Сад та город",
          "general": "Універсам",
          "gift": "Подарунки",
          "greengrocer": "Овочі, фрукти",
          "grocery": "Бакалія",
          "hairdresser": "Перукарня",
          "hardware": "Господарські товари",
          "hifi": "Аудіо-техніка",
          "houseware": "Магазин посуду",
          "interior_decoration": "Внутрішнє оздоблення",
          "jewelry": "Ювелірний магазин",
          "kiosk": "Кіоск",
          "kitchen": "Магазин кухонних меблів",
          "laundry": "Пральня",
          "lottery": "Лотерея",
          "mall": "Торгівельно-розважальний центр",
          "market": "Магазин",
          "massage": "Массаж",
          "mobile_phone": "Магазин мобільних телефонів",
          "motorcycle": "Мотоцикли",
          "music": "Музика",
          "newsagent": "Газетний кіоск",
          "optician": "Оптика",
          "organic": "Органічні Продукти",
          "outdoor": "Виносна торгівля",
          "paint": "Магазин фарб",
          "pawnbroker": "Ломбард",
          "pet": "Зоомагазин",
          "pharmacy": "Аптека",
          "photo": "Фотомагазин",
          "seafood": "Морепродукти",
          "second_hand": "Комісійний магазин",
          "shoes": "Взуття",
          "sports": "Спортивні товари",
          "stationery": "Канцтовари",
          "supermarket": "Супермаркет",
          "tailor": "Кравець",
          "ticket": "Квитки",
          "tobacco": "Тютюн",
          "toys": "Іграшки",
          "travel_agency": "Туристична агенція",
          "tyres": "Магазин автошин",
          "vacant": "Порожній магазин",
          "variety_store": "Магазин однієї ціни",
          "video": "Відео",
          "wine": "Спиртні напої на винос",
          "yes": "Крамниця"
        },
        "tourism": {
          "alpine_hut": "Гірський притулок",
          "apartment": "Апартаменти",
          "artwork": "Мистецтво",
          "attraction": "Цікаві місця",
          "bed_and_breakfast": "Ліжко та сніданок",
          "cabin": "Хатинка",
          "camp_site": "Турбаза",
          "caravan_site": "Майданчик для трейлерів",
          "chalet": "Шале",
          "gallery": "Галерея",
          "guest_house": "Гостьовий будинок",
          "hostel": "Гостел",
          "hotel": "Готель",
          "information": "Інформація",
          "motel": "Мотель",
          "museum": "Музей",
          "picnic_site": "Місце для пікніків",
          "theme_park": "Тематичний парк",
          "viewpoint": "Оглядовий майданчик",
          "zoo": "Зоопарк"
        },
        "tunnel": {
          "building_passage": "Проїзд через будівлю",
          "culvert": "Дренажна труба",
          "yes": "Тунель"
        },
        "waterway": {
          "artificial": "Штучні водний шлях",
          "boatyard": "Верф",
          "canal": "Канал",
          "dam": "Дамба",
          "derelict_canal": "Покинутий канал",
          "ditch": "Рів",
          "dock": "Док",
          "drain": "Стічна канава",
          "lock": "Шлюз",
          "lock_gate": "Шлюзові ворота",
          "mooring": "Якірна стоянка",
          "rapids": "Пороги",
          "river": "Річка",
          "stream": "Струмок",
          "wadi": "Ваді (Сухе русло)",
          "waterfall": "Водоспад",
          "weir": "Гребля",
          "yes": "Водний маршрут"
        }
      },
      "prefix_format": "%{name}"
    }
  },
  "javascripts": {
    "changesets": {
      "show": {
        "comment": "Коментар",
        "hide_comment": "приховати",
        "subscribe": "Підписатися",
        "unhide_comment": "показати",
        "unsubscribe": "Відписатись"
      }
    },
    "close": "Закрити",
    "context": {
      "add_note": "Додати тут нотатку",
      "centre_map": "Центрувати мапу тут",
      "directions_from": "Маршрут звідси",
      "directions_to": "Маршрут сюди",
      "query_features": "Отримати об’єкти",
      "show_address": "Показати адресу"
    },
    "directions": {
      "ascend": "Вгору",
      "descend": "Вниз",
      "directions": "Маршрут",
      "distance": "Відстань",
      "engines": {
        "fossgis_osrm_bike": "Велосипед (OSRM)",
        "fossgis_osrm_car": "Машина (OSRM)",
        "fossgis_osrm_foot": "Пішки (OSRM)",
        "graphhopper_bicycle": "Велосипед (GraphHopper)",
        "graphhopper_car": "Автівкою (GraphHopper)",
        "graphhopper_foot": "Пішки (GraphHopper)"
      },
      "errors": {
        "no_place": "На жаль неможливо знайти '%{place}'.",
        "no_route": "Не вдалося знайти маршрут між цими двома точками."
      },
      "instructions": {
        "against_oneway_without_exit": "Рухайтесь проти одностороннього руху по %{name}",
        "continue_without_exit": "Рухайтесь далі по %{name}",
        "courtesy": "Маршрут наданий %{link}",
        "destination_without_exit": "Ви на місці",
        "end_oneway_without_exit": "Кінець одностороннього руху по %{name}",
        "endofroad_left_without_exit": "В кінці дороги поверніть ліворуч на %{name}",
        "endofroad_right_without_exit": "В кінці дороги поверніть праворуч на %{name}",
        "exit_counts": {
          "eighth": "8й",
          "fifth": "5й",
          "first": "1й",
          "fourth": "4й",
          "ninth": "9й",
          "second": "2й",
          "seventh": "7й",
          "sixth": "6й",
          "tenth": "10й",
          "third": "3й"
        },
        "exit_roundabout": "Поверніть з кільця %{name}",
        "follow_without_exit": "Рухайтесь далі по %{name}",
        "fork_left_without_exit": "На розвилці поверніть ліворуч на %{name}",
        "fork_right_without_exit": "На розвилці поверніть праворуч на %{name}",
        "leave_roundabout_without_exit": "Виїзд з кільця - %{name}",
        "merge_left_without_exit": "Приєднайтесь до руху ліворуч на %{name}",
        "merge_right_without_exit": "Приєднайтесь до руху праворуч на %{name}",
        "offramp_left": "Поверніть на з'їзд ліворуч",
        "offramp_left_with_directions": "Поверніть на з'їзд ліворуч в напрямку %{directions}",
        "offramp_left_with_exit": "Поверніть на з'їзд %{exit} ліворуч",
        "offramp_left_with_exit_directions": "Поверніть на з'їзд %{exit} ліворуч в напрямку %{directions}",
        "offramp_left_with_exit_name": "Поверніть на з'їзд %{exit} ліворуч до %{name}",
        "offramp_left_with_exit_name_directions": "Поверніть на з'їзд %{exit} ліворуч до %{name}, в напрямку %{directions}",
        "offramp_left_with_name": "Прямуйте ліворуч на зʼїзд в напрямку %{name}",
        "offramp_left_with_name_directions": "Поверніть на з'їзд ліворуч до %{name}, в напрямку %{directions}",
        "offramp_right": "Поверніть на з'їзд праворуч",
        "offramp_right_with_directions": "Поверніть на з'їзд праворуч в напрямку %{directions}",
        "offramp_right_with_exit": "Поверніть на з'їзд %{exit} праворуч",
        "offramp_right_with_exit_directions": "Поверніть на з'їзд %{exit} праворуч в напрямку %{directions}",
        "offramp_right_with_exit_name": "Поверніть на з'їзд %{exit} праворуч до %{name}",
        "offramp_right_with_exit_name_directions": "Поверніть на з'їзд %{exit} праворуч до %{name}, в напрямку %{directions}",
        "offramp_right_with_name": "Прямуйте праворуч на зʼїзд в напрямку %{name}",
        "offramp_right_with_name_directions": "Поверніть на з'їзд праворуч до %{name}, в напрямку %{directions}",
        "onramp_left": "Поверніть ліворуч на з'їзд",
        "onramp_left_with_directions": "Поверніть на з'їзд ліворуч в напрямку %{directions}",
        "onramp_left_with_name_directions": "Поверніть ліворуч на з'їзд до %{name}, в напрямку %{directions}",
        "onramp_left_without_directions": "Поверніть ліворуч на з'їзд",
        "onramp_left_without_exit": "Поверніть ліворуч на зʼїзд в напрямку %{name}",
        "onramp_right": "Поверніть праворуч на з'їзд",
        "onramp_right_with_directions": "Поверніть на з'їзд праворуч в напрямку %{directions}",
        "onramp_right_with_name_directions": "Поверніть праворуч на з'їзд до %{name}, в напрямку %{directions}",
        "onramp_right_without_directions": "Поверніть праворуч на з'їзд",
        "onramp_right_without_exit": "Поверніть праворуч на зʼїзд в напрямку %{name}",
        "roundabout_with_exit": "На кільці поверніть на %{exit} виїзд на %{name}",
        "roundabout_with_exit_ordinal": "На кільці поверніть у %{exit} виїзд до %{name}",
        "roundabout_without_exit": "На кільці поверніть на %{name}",
        "sharp_left_without_exit": "Різко поверніть ліворуч на %{name}",
        "sharp_right_without_exit": "Різко поверніть праворуч на %{name}",
        "slight_left_without_exit": "Плавно поверніть ліворуч на %{name}",
        "slight_right_without_exit": "Плавно поверніть праворуч на %{name}",
        "start_without_exit": "Почніть з %{name}",
        "stay_roundabout_without_exit": "Залишайтесь на кільці - %{name}",
        "turn_left_without_exit": "Поверніть ліворуч на %{name}",
        "turn_right_without_exit": "Поверніть праворуч на %{name}",
        "unnamed": "без імені",
        "uturn_without_exit": "Розверніться на %{name}",
        "via_point_without_exit": "(проміжний пункт)"
      },
      "time": "Час"
    },
    "edit_help": "Перемістіть мапу і наблизьтесь до місця, яке ви бажаєте змінити, потім клацніть тут.",
    "embed": {
      "report_problem": "Повідомити про проблему"
    },
    "key": {
      "title": "Умовні знаки",
      "tooltip": "Умовні знаки",
      "tooltip_disabled": "Легенда мапи недоступна для цього шару"
    },
    "map": {
      "base": {
        "cycle_map": "ВелоМапа",
        "hot": "Humanitarian‎",
        "standard": "Стандартний",
        "transport_map": "Мапа Транспорту"
      },
      "copyright": "© <a href='%{copyright_url}'>Учасники OpenStreetMap</a>",
      "donate_link_text": "<a class='donate-attr' href='%{donate_url}'>Зробити внесок</a>",
      "hotosm": "Стиль тайлів — від <a href='%{hotosm_url}' target='_blank'>Гуманітарної команди OpenStreetMap</a>, хостинг — від <a href='%{osmfrance_url}' target='_blank'>OpenStreetMap Франція</a>",
      "layers": {
        "data": "Дані",
        "gps": "Публічні GPS-треки",
        "header": "Шари мапи",
        "notes": "Нотатки",
        "overlays": "Увімкніть наступні шари для пошуку і усунення помилок на мапі",
        "title": "Шари"
      },
      "locate": {
        "feetPopup": {
          "few": "Ви перебуваєте за %{count} фути від цієї точки",
          "many": "Ви перебуваєте за %{count} футів від цієї точки",
          "one": "Ви перебуваєте за %{count} фут від цієї точки",
          "other": "Ви перебуваєте за %{count} футів від цієї точки"
        },
        "metersPopup": {
          "few": "Ви перебуваєте за %{count} метри від цієї точки",
          "many": "Ви перебуваєте за %{count} метрів від цієї точки",
          "one": "Ви перебуваєте за один метр від цієї точки",
          "other": "Ви перебуваєте за %{count} метрів від цієї точки"
        },
        "title": "Показати моє місцезнаходження"
      },
      "terms": "<a href='%{terms_url}' target='_blank'>Умови використання Вебсайту та API</a>",
      "thunderforest": "Тайли надав <a href='%{thunderforest_url}' target='_blank'>Andy Allan</a>",
      "zoom": {
        "in": "Збільшити",
        "out": "Зменшити"
      }
    },
    "notes": {
      "new": {
        "add": "Додати нотатку",
        "advice": "Ваша нотатка є публічною та може бути використана для оновлення мапи. Будь ласка, не додавайте персональні дані або інформацію, яка міститься на захищених авторським правом мапах чи каталогах.",
        "intro": "Помітили помилку або чогось не вистачає? Дайте знати іншим маперам, щоб можна було це виправити. Перемістіть позначку в потрібне місце та додайте пояснення проблеми."
      },
      "show": {
        "anonymous_warning": "Ця нотатка містить коментарі від анонімних користувачів. Потрібна незалежна перевірка відомостей.",
        "comment": "Коментар",
        "comment_and_resolve": "Прокоментувати та Опрацювати",
        "hide": "Приховати",
        "reactivate": "Поновити",
        "resolve": "Опрацьовано"
      }
    },
    "query": {
      "error": "Помилка зв’язку %{server}: %{error}",
      "node": "Точка",
      "nothing_found": "Об’єкти не знайдені",
      "relation": "Зв’язок",
      "timeout": "Сервер не відповідає %{server}",
      "way": "Лінія"
    },
    "share": {
      "cancel": "Скасувати",
      "center_marker": "Центрувати мапу на маркері",
      "custom_dimensions": "Встановити власні розміри",
      "download": "Завантажити",
      "embed": "HTML",
      "format": "Формат:",
      "geo_uri": "Geo URI",
      "image": "Зображення",
      "image_size": "Зображення буде містити стандартний шар",
      "include_marker": "Додати маркер",
      "link": "Посилання або HTML",
      "long_link": "Посилання",
      "only_standard_layer": "Тільки стандартний шар може бути експортований у вигляді зображення",
      "paste_html": "HTML-код для вбудування у сайт",
      "scale": "Масштаб:",
      "short_link": "Кор.посил.",
      "short_url": "Скорочене URL-посилання",
      "title": "Поділитись",
      "view_larger_map": "Переглянути більшу мапу"
    },
    "site": {
      "createnote_disabled_tooltip": "Треба наблизитись для додання нотатки",
      "createnote_tooltip": "Додати нотатку на мапу",
      "edit_disabled_tooltip": "Збільшить масштаб для редагування мапи",
      "edit_tooltip": "Редагування мапи",
      "map_data_zoom_in_tooltip": "Збільшить, щоб побачити дані мапи",
      "map_notes_zoom_in_tooltip": "Збільшить масштаб, щоб побачити більше нотаток",
      "queryfeature_disabled_tooltip": "Наблизитись для отримання об’єктів",
      "queryfeature_tooltip": "Отримати об’єкти"
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
      "anon_edits_link_text": "З’ясувати в чому справа.",
      "flash_player_required_html": "Для використання редактора Potlatch потрібний Flash-плеєр. Ви можете <a href=\"https://get.adobe.com/flashplayer/\">завантажити Flash-плеєр з Adobe.com</a>. Існують також <a href=\"http://wiki.openstreetmap.org/wiki/Uk:Editing\">інші можливості</a> редагування даних в OpenStreetMap.",
      "id_not_configured": "iD не був налаштований",
      "no_iframe_support": "Ваш оглядач не підтримує фрейми HTML, які необхідні для цієї функції.",
      "not_public": "Ви не зробили свої редагування загальнодоступними.",
      "not_public_description_html": "Ви не можете більше анонімно редагувати мапу. Ви можете зробити ваші редагування загальнодоступними тут: %{user_page}.",
      "potlatch2_not_configured": "Потлатч 2 не був налаштований — див https://wiki.openstreetmap.org/wiki/The_Rails_Port#Potlatch_2",
      "potlatch2_unsaved_changes": "Ви маєте незбережені зміни. (Для збереження в Потлач 2, ви повинні натиснути Зберегти.)",
      "potlatch_unsaved_changes": "Є незбережені зміни. (Для збереження в Potlatch зніміть виділення з колії або точки, якщо редагуєте «вживу», або натисніть кнопку «зберегти», якщо ви в режимі відкладеного збереження.)",
      "user_page_link": "сторінка користувача"
    },
    "index": {
      "remote_failed": "Редагування не вдалося — переконайтеся, що JOSM або Merkaartor завантажений та втулок дистанційного керування увімкнений."
    },
    "sidebar": {
      "search_results": "Результати пошуку"
    }
  },
  "time": {
    "am": "до полудня",
    "formats": {
      "blog": "%e %B %Y",
      "default": "%a, %d %b %Y, %H:%M:%S %z",
      "friendly": "%e %B %Y в %H:%M",
      "long": "%d %B %Y, %H:%M",
      "short": "%d %b, %H:%M"
    },
    "pm": "по полудні"
  }
});
