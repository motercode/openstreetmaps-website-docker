I18n.translations || (I18n.translations = {});
I18n.translations["lv"] = I18n.extend((I18n.translations["lv"] || {}), {
  "browse": {
    "start_rjs": {
      "feature_warning": "Ielādē %{num_features} objektus, kas var padarīt tavu pārlūku lēnu vai nereaģējošu. Vai esi drošs, ka vēlies parādīt šos datus?",
      "load_data": "Ielādēt datus",
      "loading": "Ielādē…"
    }
  },
  "date": {
    "abbr_day_names": [
      "Sv.",
      "P.",
      "O.",
      "T.",
      "C.",
      "Pk.",
      "S."
    ],
    "abbr_month_names": [
      null,
      "Janv",
      "Febr",
      "Marts",
      "Apr",
      "Maijs",
      "Jūn",
      "Jūl",
      "Aug",
      "Sept",
      "Okt",
      "Nov",
      "Dec"
    ],
    "day_names": [
      "svētdiena",
      "pirmdiena",
      "otrdiena",
      "trešdiena",
      "ceturtdiena",
      "piektdiena",
      "sestdiena"
    ],
    "formats": {
      "default": "%d.%m.%Y.",
      "long": "%Y. gada %e. %B",
      "short": "%e. %B"
    },
    "month_names": [
      null,
      "janvārī",
      "februārī",
      "martā",
      "aprīlī",
      "maijā",
      "jūnijā",
      "jūlijā",
      "augustā",
      "septembrī",
      "oktobrī",
      "novembrī",
      "decembrī"
    ],
    "order": [
      "year",
      "month",
      "day"
    ]
  },
  "diary_entries": {
    "edit": {
      "marker_text": "Dienasgrāmatas ieraksta atrašanās vieta"
    }
  },
  "geocoder": {
    "search_osm_nominatim": {
      "admin_levels": {
        "level10": "Priekšpilsētas robeža",
        "level2": "Valsts robeža",
        "level4": "Štata robeža",
        "level5": "Rajona robeža",
        "level6": "Pagasta robeža",
        "level8": "Pilsētas robeža",
        "level9": "Ciema robeža"
      },
      "prefix": {
        "aerialway": {
          "cable_car": "Kabeļu Mašīna",
          "chair_lift": "Krēslu Pacēlājs",
          "drag_lift": "Vilkšanas Pacēlājs",
          "gondola": "Gondola Lifts",
          "platter": "Platter Lift",
          "pylon": "Pylon",
          "station": "Pacēlāja Stacija",
          "t-bar": "T-Bar Lift"
        },
        "aeroway": {
          "aerodrome": "Lidlauks",
          "airstrip": "Airstrip",
          "apron": "Perons",
          "gate": "Vārti",
          "hangar": "Angārs",
          "helipad": "Helikopteru nolaišanās laukums",
          "holding_position": "Holding Position",
          "parking_position": "Parking Position",
          "runway": "Skrejceļš",
          "taxiway": "Manevrēšanas ceļš",
          "terminal": "Terminālis"
        },
        "amenity": {
          "animal_shelter": "Dzīvnieku patversme",
          "arts_centre": "Mākslas centrs",
          "atm": "Bankomāts",
          "bank": "Banka",
          "bar": "Bārs",
          "bbq": "BBQ",
          "bench": "Soliņš",
          "bicycle_parking": "Velosipēdu novietne",
          "bicycle_rental": "Velosipēdu noma",
          "biergarten": "Alus dārzs",
          "boat_rental": "Laivu noma",
          "brothel": "Bordelis",
          "bureau_de_change": "Valūtas maiņas punkts",
          "bus_station": "Autoosta",
          "cafe": "Kafejnīca",
          "car_rental": "Autonoma",
          "car_sharing": "Auto koplietošana",
          "car_wash": "Automazgātava",
          "casino": "Kazino",
          "charging_station": "Uzlādēšanas stacija",
          "childcare": "Bērnu aprūpe",
          "cinema": "Kino",
          "clinic": "Klīnika",
          "clock": "Pulkstenis",
          "college": "Koledža",
          "community_centre": "Sabiedriskais centrs",
          "courthouse": "Tiesa",
          "crematorium": "Krematorija",
          "dentist": "Zobārsts",
          "doctors": "Ārsti",
          "drinking_water": "Dzeramais ūdens",
          "driving_school": "Braukšanas skola",
          "embassy": "Vēstniecība",
          "fast_food": "Bistro",
          "ferry_terminal": "Prāmju termināls",
          "fire_station": "Ugunsdzēsēju depo",
          "food_court": "Ēstuves",
          "fountain": "Strūklaka",
          "fuel": "Degviela",
          "gambling": "Azartspēles",
          "grave_yard": "Kapsēta",
          "grit_bin": "Grit Bin",
          "hospital": "Slimnīca",
          "hunting_stand": "Medību tornis",
          "ice_cream": "Saldējums",
          "kindergarten": "Bērnudārzs",
          "library": "Bibliotēka",
          "marketplace": "Tirgus",
          "monastery": "Klosteris",
          "motorcycle_parking": "Motociklu stāvvieta",
          "nightclub": "Naktsklubs",
          "nursing_home": "Pansionāts",
          "office": "Birojs",
          "parking": "Autostāvvieta",
          "parking_entrance": "Autostāvvietas iebrauktuve",
          "parking_space": "Parking Space",
          "pharmacy": "Aptieka",
          "place_of_worship": "Dievnams",
          "police": "Policija",
          "post_box": "Pastkaste",
          "post_office": "Pasts",
          "preschool": "Pirmsskolas apmācība",
          "prison": "Cietums",
          "pub": "Krogs",
          "public_building": "Sabiedriskā ēka",
          "recycling": "Pārstrādes punkts",
          "restaurant": "Restorāns",
          "retirement_home": "Pansionāts",
          "sauna": "Sauna",
          "school": "Skola",
          "shelter": "Pajumte",
          "shop": "Veikals",
          "shower": "Dušas",
          "social_centre": "Sociālais centrs",
          "social_club": "Sociālais klubs",
          "social_facility": "Sociālā ēka",
          "studio": "Studija",
          "swimming_pool": "Peldbaseins",
          "taxi": "Taksometrs",
          "telephone": "Publisks telefons",
          "theatre": "Teātris",
          "toilets": "Tualetes",
          "townhall": "Rātsnams",
          "university": "Universitāte",
          "vending_machine": "Tirdzniecības automāts",
          "veterinary": "Veterinārā ķirurģija",
          "village_hall": "Pagastmāja",
          "waste_basket": "Atkritumu grozs",
          "waste_disposal": "Atkritumu izgāztuve",
          "water_point": "Water Point",
          "youth_centre": "Jauniešu centrs"
        },
        "boundary": {
          "administrative": "Administratīvā robeža",
          "census": "Skaitīšanas robeža",
          "national_park": "Nacionālais parks",
          "protected_area": "Aizsargājamās teritorijas"
        },
        "bridge": {
          "aqueduct": "Akvedukts",
          "boardwalk": "Boardwalk",
          "suspension": "Piekartitls",
          "swing": "Grozāmais Tilts",
          "viaduct": "Viadukts",
          "yes": "Tilts"
        },
        "building": {
          "yes": "Ēka"
        },
        "craft": {
          "brewery": "Alus darītava",
          "carpenter": "Galdnieks",
          "electrician": "Elektriķis",
          "gardener": "Dārznieks",
          "painter": "Krāsotājs",
          "photographer": "Fotogrāfs",
          "plumber": "Santehniķis",
          "shoemaker": "Kurpnieks",
          "tailor": "Drēbnieks",
          "yes": "Amatnieks"
        },
        "emergency": {
          "ambulance_station": "Ātrās Palīdzības staciija",
          "assembly_point": "Assembly Point",
          "defibrillator": "Defibrilators",
          "landing_site": "Avārijas nosēšanās vieta",
          "phone": "Telefons ārkārtas situācijai",
          "water_tank": "Emergency Water Tank",
          "yes": "Emergency"
        },
        "highway": {
          "abandoned": "Pamests lielceļš",
          "bridleway": "Izjādes taka",
          "bus_guideway": "Vadāmais Autobuss",
          "bus_stop": "Autobusa pietura",
          "construction": "Automaģistrāle būvniecības stadijā",
          "corridor": "Koridors",
          "cycleway": "Veloceliņš",
          "elevator": "Lifts",
          "emergency_access_point": "Ārkārtas piekļuves punkts",
          "footway": "Taka",
          "ford": "Fjords",
          "give_way": "Dodiet ceļu zīme",
          "living_street": "Dzīvojamā zona",
          "milestone": "Ceļa stabs",
          "motorway": "Automaģistrāle",
          "motorway_junction": "Automaģistrāles krustojums",
          "motorway_link": "Automaģistrāles pievedceļš",
          "passing_place": "Passing Place",
          "path": "Taka",
          "pedestrian": "Gājēju ceļš",
          "platform": "Platforma",
          "primary": "Galvenais valsts ceļš",
          "primary_link": "Galvenais valsts ceļš",
          "proposed": "Ieplānots Ceļš",
          "raceway": "Sacensību trase",
          "residential": "Dzīvojamais ceļš",
          "rest_area": "Atpūtas zona",
          "road": "Ceļš",
          "secondary": "Sekundāras nozīmes ceļš",
          "secondary_link": "Sekundāras nozīmes ceļš",
          "service": "Servisa Ceļš",
          "services": "Ceļa Atpūtas Vieta",
          "speed_camera": "Ātruma kamera",
          "steps": "Pakāpieni",
          "stop": "Stop Sign",
          "street_lamp": "Ielas Laterna",
          "tertiary": "Pašvaldību autoceļi",
          "tertiary_link": "Pašvaldību autoceļš",
          "track": "Zemesceļš",
          "traffic_signals": "Satiksmes regulators",
          "trail": "Taka",
          "trunk": "Maģistrālais ceļš",
          "trunk_link": "Maģistrālais ceļš",
          "turning_loop": "Turning Loop",
          "unclassified": "Neklasificēts ceļš",
          "yes": "Ceļš"
        },
        "historic": {
          "archaeological_site": "Arheoloģisku izrakumu vieta",
          "battlefield": "Kaujas lauks",
          "boundary_stone": "Robežstabs",
          "building": "Vēsturiska ēka",
          "bunker": "Bunkurs",
          "castle": "Pils",
          "church": "Baznīca",
          "city_gate": "Pilsētas vārti",
          "citywalls": "Pilsētas Sienas",
          "fort": "Forts",
          "heritage": "Kultūras mantojums",
          "house": "Māja",
          "icon": "Ikona",
          "manor": "Muiža",
          "memorial": "Memoriāls",
          "mine": "Raktuves",
          "mine_shaft": "Mine Shaft",
          "monument": "Piemineklis",
          "roman_road": "Romiešu ceļš",
          "ruins": "Drupas",
          "stone": "Akmens",
          "tomb": "Kaps",
          "tower": "Tornis",
          "wayside_cross": "Krusts ceļmalā",
          "wayside_shrine": "Ceļmalas svētnīca",
          "wreck": "Vraks",
          "yes": "Historic Site"
        },
        "junction": {
          "yes": "Krustojums"
        },
        "landuse": {
          "allotments": "Mazdārziņi",
          "basin": "Rezervuārs",
          "brownfield": "Attīrīts būvlaukums",
          "cemetery": "Kapsēta",
          "commercial": "Tirdzniecības zona",
          "conservation": "Saglabāšanas zona",
          "construction": "Būvlaukums",
          "farm": "Saimniecība",
          "farmland": "Saimniecības zeme",
          "farmyard": "Saimniecības pagalms",
          "forest": "Mežs",
          "garages": "Garāžas",
          "grass": "Zāle",
          "greenfield": "Zaļā zona",
          "industrial": "Rūpniecības zona",
          "landfill": "Atkritumu izgāztuve",
          "meadow": "Pļava",
          "military": "Militārā zona",
          "mine": "Raktuves",
          "orchard": "Dārza zona",
          "quarry": "Karjers",
          "railway": "Dzelzceļš",
          "recreation_ground": "Atpūtas Zona",
          "reservoir": "Ūdenskrātuve",
          "reservoir_watershed": "Rezervuāru ūdensšķirtne",
          "residential": "Dzīvojamā zona",
          "retail": "Mazumtirdzniecība",
          "road": "Ceļa Apgabals",
          "village_green": "Ciema Centrālais Parks",
          "vineyard": "Vīna dārzs",
          "yes": "Zemes izmantojums"
        },
        "leisure": {
          "beach_resort": "Pludmales kūrorts",
          "bird_hide": "Putnu Slēptuve",
          "common": "Koplietošanas zeme",
          "dog_park": "Suņu laukums",
          "firepit": "Fire Pit",
          "fishing": "Zvejas apgabals",
          "fitness_centre": "Fitnesa centrs",
          "fitness_station": "Fitnesa Stacija",
          "garden": "Dārzs",
          "golf_course": "Golfa laukums",
          "horse_riding": "Zirgu izjādes",
          "ice_rink": "Ledus halle",
          "marina": "Osta",
          "miniature_golf": "Minigolfs",
          "nature_reserve": "Dabas rezervāts",
          "park": "Parks",
          "pitch": "Sporta laukums",
          "playground": "Spēļu laukums",
          "recreation_ground": "Atpūtas Zona",
          "resort": "Kūrorts",
          "sauna": "Pirts",
          "slipway": "Stāpelis",
          "sports_centre": "Sporta centrs",
          "stadium": "Stadions",
          "swimming_pool": "Peldbaseins",
          "track": "Skrejceļš",
          "water_park": "Ūdens atrakciju parks",
          "yes": "Atpūtas vieta"
        },
        "man_made": {
          "adit": "Adit",
          "beacon": "Beacon",
          "beehive": "Bišu strops",
          "breakwater": "Breakwater",
          "bridge": "Tilts",
          "bunker_silo": "Bunkurs",
          "chimney": "Skurstenis",
          "crane": "Crane",
          "dolphin": "Mooring Post",
          "dyke": "Dyke",
          "embankment": "Embankment",
          "flagpole": "Karoga masts",
          "gasometer": "Gasometer",
          "groyne": "Groyne",
          "kiln": "Kiln",
          "lighthouse": "Bāka",
          "mast": "Mast",
          "mine": "Raktuves",
          "mineshaft": "Mine Shaft",
          "monitoring_station": "Monitoring Station",
          "petroleum_well": "Petroleum Well",
          "pier": "Pier",
          "pipeline": "Cauruļvads",
          "silo": "Silo",
          "storage_tank": "Storage Tank",
          "surveillance": "Novērošana",
          "tower": "Tornis",
          "wastewater_plant": "Wastewater Plant",
          "water_tower": "Ūdens tornis",
          "water_well": "Aka",
          "water_works": "Water Works",
          "watermill": "Ūdens dzirnavas",
          "windmill": "Vēja dzirnavas",
          "works": "Rūpnīca",
          "yes": "Cilvēku radīts"
        },
        "military": {
          "airfield": "Militārais lidlauks",
          "barracks": "Barakas",
          "bunker": "Bunkurs",
          "yes": "Military"
        },
        "mountain_pass": {
          "yes": "Kalnu ieleja"
        },
        "natural": {
          "bay": "Līcis",
          "beach": "Pludmale",
          "cape": "Zemesrags",
          "cave_entrance": "Ieeja alā",
          "cliff": "Klints",
          "crater": "Krāteris",
          "dune": "Kāpa",
          "fell": "Skandināvisks Kalns",
          "fjord": "Fjords",
          "forest": "Mežs",
          "geyser": "Geizers",
          "glacier": "Ledājs",
          "grassland": "Pļava",
          "heath": "Tīrelis",
          "hill": "Kalns",
          "island": "Sala",
          "land": "Zeme",
          "marsh": "Purvs",
          "moor": "Tīrelis",
          "mud": "Dubļi",
          "peak": "Smaile",
          "point": "Punkts",
          "reef": "Rifs",
          "ridge": "Grēda",
          "rock": "Klints",
          "saddle": "Segli",
          "sand": "Smiltis",
          "scree": "Nogāze",
          "scrub": "Krūmājs",
          "spring": "Avots",
          "stone": "Akmens",
          "strait": "Jūras šaurums",
          "tree": "Koks",
          "valley": "Ieleja",
          "volcano": "Vulkāns",
          "water": "Ūdens",
          "wetland": "Mitrājs",
          "wood": "Mežs"
        },
        "office": {
          "accountant": "Grāmatvedis",
          "administrative": "Administrācija",
          "architect": "Arhitekts",
          "association": "Association",
          "company": "Uzņēmums",
          "educational_institution": "Educational Institution",
          "employment_agency": "Nodarbinātības aģentūra",
          "estate_agent": "Nekustamā īpašuma aģents",
          "government": "Valsts birojs",
          "insurance": "Apdrošināšanas birojs",
          "it": "IT Office",
          "lawyer": "Jurists",
          "ngo": "NGO Ofiss",
          "telecommunication": "Telekomunikāciju Ofiss",
          "travel_agent": "Tūrisma aģentūra",
          "yes": "Birojs"
        },
        "place": {
          "allotments": "Mazdārziņi",
          "city": "Pilsēta",
          "city_block": "Pilsētas kvartāls",
          "country": "Valsts",
          "county": "Apgabals",
          "farm": "Saimniecība",
          "hamlet": "Ciems",
          "house": "Māja",
          "houses": "Mājas",
          "island": "Sala",
          "islet": "Saliņa",
          "isolated_dwelling": "Izolēta Mājvieta",
          "locality": "Vieta",
          "municipality": "Pašvaldība",
          "neighbourhood": "Pilsētas rajons",
          "postcode": "Pasta indekss",
          "quarter": "Quarter",
          "region": "Reģions",
          "sea": "Jūra",
          "square": "Square",
          "state": "Štats",
          "subdivision": "Subdivīzija",
          "suburb": "Piepilsēta",
          "town": "Pilsēta",
          "unincorporated_area": "Neiekļauts apgabals",
          "village": "Ciems",
          "yes": "Vieta"
        },
        "railway": {
          "abandoned": "Pamests dzelzceļš",
          "construction": "Dzelzceļš būvniecības stadijā",
          "disused": "Nelietots dzelzceļš",
          "funicular": "Trošu dzelzceļš",
          "halt": "Vilciena pietura",
          "junction": "Dzelzceļa mezgls",
          "level_crossing": "Vienlīmeņa kurstojums",
          "light_rail": "Tramvaja sliedes",
          "miniature": "Miniatūrais dzelzceļš",
          "monorail": "Monosliede",
          "narrow_gauge": "Šaursliežu dzelzceļš",
          "platform": "Dzelzceļa perons",
          "preserved": "Iekonservēts Dzelzceļš",
          "proposed": "Ieplānots Dzelzceļš",
          "spur": "Dzelzceļa Atradze",
          "station": "Dzelzceļa stacija",
          "stop": "Dzelzceļa Pietura",
          "subway": "Metro",
          "subway_entrance": "Metro ieeja",
          "switch": "Dzelzceļa punkti",
          "tram": "Tramvajs",
          "tram_stop": "Tramvaja pietura"
        },
        "shop": {
          "alcohol": "Alkohola Veikals",
          "antiques": "Senlietas",
          "art": "Mākslas salons",
          "bakery": "Maiznīca",
          "beauty": "Kosmētiskais salons",
          "beverages": "Dzērienu veikals",
          "bicycle": "Velosipēdu veikals",
          "bookmaker": "Bookmaker",
          "books": "Grāmatu veikals",
          "boutique": "Mazs elitārs veikals",
          "butcher": "Miesnieks",
          "car": "Auto veikals",
          "car_parts": "Automašīnu rezerves daļas",
          "car_repair": "Auto remonts",
          "carpet": "Paklāju veikals",
          "charity": "Labdarības veikals",
          "chemist": "Ķīmiķis",
          "clothes": "Apģērbu veikals",
          "computer": "Datorveikals",
          "confectionery": "Konditorejas veikals",
          "convenience": "Stūra Veikals",
          "copyshop": "Kopētava",
          "cosmetics": "Kosmētikas veikals",
          "deli": "Delikatešu veikals",
          "department_store": "Universālveikals",
          "discount": "Atlaižu Veikals",
          "doityourself": "Dari-pats",
          "dry_cleaning": "Ķīmiskā tīrīšana",
          "electronics": "Elektronikas veikals",
          "estate_agent": "Nekustamā īpašuma aģents",
          "farm": "Saimniecības Veikals",
          "fashion": "Modes veikals",
          "fish": "Zivju veikals",
          "florist": "Florists",
          "food": "Pārtikas veikals",
          "funeral_directors": "Apbedīšanas birojs",
          "furniture": "Mēbeles",
          "gallery": "Galerija",
          "garden_centre": "Dārza centrs",
          "general": "Veikals",
          "gift": "Dāvanu veikals",
          "greengrocer": "Dārzeņu tirgotājs",
          "grocery": "Pārtikas preču veikals",
          "hairdresser": "Frizētava",
          "hardware": "Saimniecības veikals",
          "hifi": "Hi-Fi",
          "houseware": "Houseware Shop",
          "interior_decoration": "Interior Decoration",
          "jewelry": "Juvelierizstrādājumu veikals",
          "kiosk": "Kiosks",
          "kitchen": "Kitchen Shop",
          "laundry": "Veļas mazgātava",
          "lottery": "Loterija",
          "mall": "Tirdzniecības centrs",
          "market": "Tirgus",
          "massage": "Masāža",
          "mobile_phone": "Mobilo telefonu veikals",
          "motorcycle": "Motociklu veikals",
          "music": "Mūzikas veikals",
          "newsagent": "Laikrakstu Pārdevējs",
          "optician": "Optikas veikals",
          "organic": "Bioloģiskās pārtikas veikals",
          "outdoor": "Ārtelpu Veikals",
          "paint": "Krāsas veikals",
          "pawnbroker": "Pawnbroker",
          "pet": "Zooveikals",
          "pharmacy": "Aptieka",
          "photo": "Fotoveikals",
          "seafood": "Jūras veltes",
          "second_hand": "Lietoto preču veikals",
          "shoes": "Apavu veikals",
          "sports": "Sporta veikals",
          "stationery": "Kancelejas preču veikals",
          "supermarket": "Lielveikals",
          "tailor": "Drēbnieks",
          "ticket": "Ticket Shop",
          "tobacco": "Tabakas veikals",
          "toys": "Rotaļlietu veikals",
          "travel_agency": "Tūrisma aģentūra",
          "tyres": "Riepu veikals",
          "vacant": "Vacant Shop",
          "variety_store": "Variety Store",
          "video": "Video veikals",
          "wine": "Vīna veikals",
          "yes": "Veikals"
        },
        "tourism": {
          "alpine_hut": "Kalnu būda",
          "apartment": "Dzīvokļi",
          "artwork": "Mākslas darbs",
          "attraction": "Atrakcija",
          "bed_and_breakfast": "Guļamvieta un brokastis",
          "cabin": "Kabīne",
          "camp_site": "Nometnes vieta",
          "caravan_site": "Kempings",
          "chalet": "Kotedža",
          "gallery": "Galerija",
          "guest_house": "Viesu nams",
          "hostel": "Hostelis",
          "hotel": "Viesnīca",
          "information": "Informācija",
          "motel": "Motelis",
          "museum": "Muzejs",
          "picnic_site": "Piknika vieta",
          "theme_park": "Atrakciju parks",
          "viewpoint": "Skatu punkts",
          "zoo": "Zooloģiskais dārzs"
        },
        "tunnel": {
          "building_passage": "Building Passage",
          "culvert": "Drenāžas caurule",
          "yes": "Tunelis"
        },
        "waterway": {
          "artificial": "Mākslīgais ūdensceļš",
          "boatyard": "Jahtu piestātne",
          "canal": "Kanāls",
          "dam": "Aizsprosts",
          "derelict_canal": "Pamests Kanāls",
          "ditch": "Grāvis",
          "dock": "Doks",
          "drain": "Grāvis",
          "lock": "Slūžas",
          "lock_gate": "Slūžu vārti",
          "mooring": "Piestātne",
          "rapids": "Krāces",
          "river": "Upe",
          "stream": "Strauts",
          "wadi": "Izkaltusi upes gultne",
          "waterfall": "Ūdenskritums",
          "weir": "Dambis",
          "yes": "Ūdensceļš"
        }
      },
      "prefix_format": "%{name}"
    }
  },
  "javascripts": {
    "changesets": {
      "show": {
        "comment": "Komentēt",
        "hide_comment": "paslēpt",
        "subscribe": "Abonēt",
        "unhide_comment": "parādīt",
        "unsubscribe": "Atteikties no abonējuma"
      }
    },
    "close": "Aizvērt",
    "context": {
      "add_note": "Pievienot piezīmi šeit",
      "centre_map": "Centre map here",
      "directions_from": "Norādes no šejienes",
      "directions_to": "Norādes uz šejieni",
      "query_features": "Query features",
      "show_address": "Rādīt adresi"
    },
    "directions": {
      "ascend": "Ascend",
      "descend": "Descend",
      "directions": "Norādes",
      "distance": "Attālums",
      "engines": {
        "fossgis_osrm_bike": "Bicycle (OSRM)",
        "fossgis_osrm_car": "Ar mašīnu (OSRM)",
        "fossgis_osrm_foot": "Foot (OSRM)",
        "graphhopper_bicycle": "Ar velosipēdu (GraphHopper)",
        "graphhopper_car": "Car (GraphHopper)",
        "graphhopper_foot": "Ar kājām (GraphHopper)"
      },
      "errors": {
        "no_place": "Atvainojiet - nevarēja atrast šo vietu.",
        "no_route": "Nevarēja atrast maršrutu starp šīm divām vietām."
      },
      "instructions": {
        "against_oneway_without_exit": "Brauciet pret vienvirziena ceļu pie %{name}",
        "continue_without_exit": "Turpināt uz %{name}",
        "courtesy": "Virzienos, pieklājīgi no %{link}",
        "destination_without_exit": "Sasniedziet galamērķi",
        "end_oneway_without_exit": "Vienvirziena ceļa beigas pie %{name}",
        "endofroad_left_without_exit": "Ceļa beigās nogriezieties pa kreisi uz %{name}",
        "endofroad_right_without_exit": "Ceļa beigās nogriezieties pa labi uz %{name}",
        "exit_counts": {
          "eighth": "8th",
          "fifth": "5th",
          "first": "1st",
          "fourth": "4th",
          "ninth": "9th",
          "second": "2nd",
          "seventh": "7th",
          "sixth": "6th",
          "tenth": "10th",
          "third": "3rd"
        },
        "exit_roundabout": "Exit roundabout onto %{name}",
        "follow_without_exit": "Sekot %{name}",
        "fork_left_without_exit": "Krustojumā pagriezieties pa kreisi uz %{name}",
        "fork_right_without_exit": "Krustojumā pagriezieties pa labi uz %{name}",
        "leave_roundabout_without_exit": "Atstājiet apkārtceļu - %{name}",
        "merge_left_without_exit": "Izgriezieties pa kreisi uz %{name}",
        "merge_right_without_exit": "Izgriezieties uz %{name}",
        "offramp_left": "Take the ramp on the left",
        "offramp_left_with_directions": "Take the ramp on the left towards %{directions}",
        "offramp_left_with_exit": "Take exit %{exit} on the left",
        "offramp_left_with_exit_directions": "Take exit %{exit} on the left towards %{directions}",
        "offramp_left_with_exit_name": "Take exit %{exit} on the left onto %{name}",
        "offramp_left_with_exit_name_directions": "Take exit %{exit} on the left onto %{name}, towards %{directions}",
        "offramp_left_with_name": "Izmantojiet slīpumu pa kreisi uz %{name}",
        "offramp_left_with_name_directions": "Take the ramp on the left onto %{name}, towards %{directions}",
        "offramp_right": "Take the ramp on the right",
        "offramp_right_with_directions": "Take the ramp on the right towards %{directions}",
        "offramp_right_with_exit": "Take exit %{exit} on the right",
        "offramp_right_with_exit_directions": "Take exit %{exit} on the right towards %{directions}",
        "offramp_right_with_exit_name": "Take exit %{exit} on the right onto %{name}",
        "offramp_right_with_exit_name_directions": "Take exit %{exit} on the right onto %{name}, towards %{directions}",
        "offramp_right_with_name": "Izmantojiet slīpumu pa labi uz %{name}",
        "offramp_right_with_name_directions": "Take the ramp on the right onto %{name}, towards %{directions}",
        "onramp_left": "Turn left onto the ramp",
        "onramp_left_with_directions": "Turn left onto the ramp towards %{directions}",
        "onramp_left_with_name_directions": "Turn left on the ramp onto %{name}, towards %{directions}",
        "onramp_left_without_directions": "Turn left onto the ramp",
        "onramp_left_without_exit": "Pagriezieties pa kreisi uz slīpuma pie %{name}",
        "onramp_right": "Turn right onto the ramp",
        "onramp_right_with_directions": "Turn right onto the ramp towards %{directions}",
        "onramp_right_with_name_directions": "Turn right on the ramp onto %{name}, towards %{directions}",
        "onramp_right_without_directions": "Turn right onto the ramp",
        "onramp_right_without_exit": "Pagriezieties pa labi uz slīpuma pie %{name}",
        "roundabout_with_exit": "Pēc apkārtceļa nogriezieties uz izejas %{exit} pie %{name}",
        "roundabout_with_exit_ordinal": "At roundabout take %{exit} exit onto %{name}",
        "roundabout_without_exit": "Pie apkārtceļa griezieties pie %{name}",
        "sharp_left_without_exit": "Nogriezieties strauji pa kreisi uz %{name}",
        "sharp_right_without_exit": "Pagriezieties strauji pa labi uz %{name}",
        "slight_left_without_exit": "Iegriezieties nedaudz pa kreisi uz %{name}",
        "slight_right_without_exit": "Nedaudz pa labi uz %{name}",
        "start_without_exit": "Startēt beigās pie %{name}",
        "stay_roundabout_without_exit": "Palieciet apkārtceļā - %{name}",
        "turn_left_without_exit": "Nogriezieties pa kreisi uz %{name}",
        "turn_right_without_exit": "Pagriezieties pa labi uz %{name}",
        "unnamed": "nenosaukts ceļš",
        "uturn_without_exit": "Griezieties atpakaļgaitā garām %{name}",
        "via_point_without_exit": "(caur punktu)"
      },
      "time": "Laiks"
    },
    "edit_help": "Pārvieto karti un pietuvini vietai, kuru vēlies labot, tad spied šeit.",
    "embed": {
      "report_problem": "Ziņot par problēmu"
    },
    "key": {
      "title": "Apzīmējumi",
      "tooltip": "Apzīmējumi",
      "tooltip_disabled": "Kartes leģenda šim slānim nav pieejama"
    },
    "map": {
      "base": {
        "cycle_map": "Velokarte",
        "hot": "Humanitārās",
        "standard": "Standarta",
        "transport_map": "Transporta karte"
      },
      "copyright": "© <a href='%{copyright_url}'>OpenStreetMap ieguldītāji</a>",
      "donate_link_text": "<a class='donate-attr' href='%{donate_url}'>Ziedo</a>",
      "hotosm": "Tiles style by <a href='%{hotosm_url}' target='_blank'>Humanitarian OpenStreetMap Team</a> hosted by <a href='%{osmfrance_url}' target='_blank'>OpenStreetMap France</a>",
      "layers": {
        "data": "Kartes dati",
        "gps": "Public GPS Traces",
        "header": "Kartes slāņi",
        "notes": "Kartes piezīmes",
        "overlays": "Iespējot pārklājumus, lai novērstu trūkumus kartei",
        "title": "Slāņi"
      },
      "locate": {
        "feetPopup": {
          "one": "You are within one foot of this point",
          "other": "You are within %{count} feet of this point"
        },
        "metersPopup": {
          "one": "You are within one meter of this point",
          "other": "You are within %{count} meters of this point"
        },
        "title": "Rādīt manu atrašanās vietu"
      },
      "terms": "<a href='%{terms_url}' target='_blank'>Website and API terms</a>",
      "thunderforest": "Tiles courtesy of <a href='%{thunderforest_url}' target='_blank'>Andy Allan</a>",
      "zoom": {
        "in": "Palielināt",
        "out": "Samazināt"
      }
    },
    "notes": {
      "new": {
        "add": "Pievienot piezīmi",
        "advice": "Your note is public and may be used to update the map, so don't enter personal information, or information from copyrighted maps or directory listings.",
        "intro": "Piezīmes domātas, lai norādītu uz kartes kļūdām. Ja vēlies pamēģināt pats ievietot informāciju, zīmēt vai izlabot kļūdu, izmanto pogu \"Labot\" lapas augšpusē. Piezīmes parādās citiem kartētājiem, tādēļ lūdzu, cik vien iespējams precīzāk un detalizētāk visu izklāsti, kā arī marķieri novieto pēc iespējas pareizākajā pozīcijā. (Lūdzu neizmantojiet personīgo informāciju vai arī informāciju no citām ar autortiesībām aizsargātām kartēm.)"
      },
      "show": {
        "anonymous_warning": "Šī piezīme ietver komentārus no anonīmiem lietotājiem, kurus nepieciešams pārbaudīt neatkarīgi.",
        "comment": "Komentēt",
        "comment_and_resolve": "Komentēt un Atrisināt",
        "hide": "Slēpt",
        "reactivate": "Atkal aktivizēt",
        "resolve": "Atrisināt"
      }
    },
    "query": {
      "error": "Kļūda sazinoties ar %{server}: %{error}",
      "node": "Punkts",
      "nothing_found": "Nav atrastas iespējas",
      "relation": "Relācija",
      "timeout": "Saskares laiks pārsniedza %{server}",
      "way": "Ceļš"
    },
    "share": {
      "cancel": "Atcelt",
      "center_marker": "Centrēt karti uz marķieri",
      "custom_dimensions": "Uzstādīt pielāgotus izmērus",
      "download": "Lejupielādēt",
      "embed": "HTML",
      "format": "Formāts:",
      "geo_uri": "Ģeo saite",
      "image": "Bilde",
      "image_size": "Bilde tiks rādīta pamata slānī pie",
      "include_marker": "Iekļaut marķieri",
      "link": "Saite vai HTML",
      "long_link": "Saite",
      "only_standard_layer": "Tikai standarta slāni var eksportēt kā attēlu",
      "paste_html": "Ielīmē HTML, lai ievietotu mājaslapā",
      "scale": "Mērogs:",
      "short_link": "Īsā saite",
      "short_url": "Īsais URL",
      "title": "Dalīties",
      "view_larger_map": "Skatīt lielāku karti"
    },
    "site": {
      "createnote_disabled_tooltip": "Pietuvini karti, lai pievienotu piezīmi",
      "createnote_tooltip": "Pievienot piezīmi kartei",
      "edit_disabled_tooltip": "Pietuvini, lai rediģētu karti",
      "edit_tooltip": "Rediģēt karti",
      "map_data_zoom_in_tooltip": "Pietuvināt, lai redzētu kartes datus",
      "map_notes_zoom_in_tooltip": "Pietuvināt, lai redzētu piezīmes",
      "queryfeature_disabled_tooltip": "Tuvināt pie kārtas funkcijām",
      "queryfeature_tooltip": "Vaicājuma funkcijas"
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
      "anon_edits_link_text": "Uzzini, kāpēc tā notiek.",
      "flash_player_required_html": "Jums nepieciešams Flash playeris lai izmantotu Potlatch - OpenStreetMap Flash redaktoru. Jūs varat <a href=\"https://get.adobe.com/flashplayer/\">Lejupielādēt Flash Player no Adobe.com</a>.  OpenStreetMap rediģēšanai ir pieejamas arī<a href=\"https://wiki.openstreetmap.org/wiki/Editing\">vairākas citas iespējas</a> .",
      "id_not_configured": "iD nav konfigurēts",
      "no_iframe_support": "Tavs pārlūks neatbalsta HTML rāmjus, kas ir nepieciešami šai iezīmei.",
      "not_public": "Tu neesi iestādījis, lai tavi labojumi būtu publiski.",
      "not_public_description_html": "Tu vairs nevari rediģēt karti, ja vien tā neizdari. Tu vari uzstādīt savus labojumus kā publiskus no savas %{user_page}s.",
      "potlatch2_not_configured": "Potlatch 2 nav konfigurēts - lūdzu apskati http://wiki.openstreetmap.org/wiki/The_Rails_Port",
      "potlatch2_unsaved_changes": "Tev ir nesaglabātas izmaiņas. (Lai saglabātu iekš Potlach 2, tev ir jāspiež saglabāt.)",
      "potlatch_unsaved_changes": "Tev ir nesaglabātas izmaiņas. (Lai saglabātu iekš Potlatch, tev ir jānoņem atlase no esošā ceļa vai punkta, ja labojiet tiešraides režīmā, vai spiediet saglabāt, ja Jums ir Saglabāt poga.)",
      "user_page_link": "dalībnieka lapa"
    },
    "index": {
      "remote_failed": "Rediģēšana neizdevās - pārbaudi, ka JOSM vai Merkaartor ir ieslēgts un attālinātās vadības iespēja ir aktivizēta"
    },
    "sidebar": {
      "search_results": "Meklēšanas rezultāti"
    }
  },
  "time": {
    "am": "priekšpusdiena",
    "formats": {
      "blog": "%e %B %Y",
      "default": "%Y. gada %e. %B, %H:%M",
      "friendly": "%e %B %Y @ %H:%M",
      "long": "%Y. gada %e. %B, %H:%M:%S",
      "short": "%d.%m.%Y., %H:%M"
    },
    "pm": "pēcpusdiena"
  }
});
