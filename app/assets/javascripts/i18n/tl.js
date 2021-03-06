I18n.translations || (I18n.translations = {});
I18n.translations["tl"] = I18n.extend((I18n.translations["tl"] || {}), {
  "browse": {
    "start_rjs": {
      "feature_warning": "Loading %{num_features} features, which may make your browser slow or unresponsive. Are sure you want to display this data?",
      "load_data": "Ikarga ang Dato",
      "loading": "Ikinakarga..."
    }
  },
  "date": {
    "abbr_day_names": [
      "Lin",
      "Lun",
      "Mar",
      "Miy",
      "Huw",
      "Biy",
      "Sab"
    ],
    "abbr_month_names": [
      null,
      "Ene",
      "Peb",
      "Mar",
      "Abr",
      "May",
      "Hun",
      "Hul",
      "Ago",
      "Set",
      "Okt",
      "Nob",
      "Dis"
    ],
    "day_names": [
      "Linggo",
      "Lunes",
      "Martes",
      "Miyerkules",
      "Huwebes",
      "Biyernes",
      "Sabado"
    ],
    "formats": {
      "default": "%d/%m/%Y",
      "long": "ika-%d ng %B, %Y",
      "short": "ika-%d ng %b"
    },
    "month_names": [
      null,
      "Enero",
      "Pebrero",
      "Marso",
      "Abril",
      "Mayo",
      "Hunyo",
      "Hulyo",
      "Agosto",
      "Setyembre",
      "Oktubre",
      "Nobyembre",
      "Disyembre"
    ],
    "order": [
      "year",
      "month",
      "day"
    ]
  },
  "diary_entries": {
    "edit": {
      "marker_text": "Kinalalagay ng ipinasok sa talaarawan"
    }
  },
  "geocoder": {
    "search_osm_nominatim": {
      "admin_levels": {
        "level10": "Suburb Boundary",
        "level2": "Country Boundary",
        "level4": "State Boundary",
        "level5": "Region Boundary",
        "level6": "County Boundary",
        "level8": "Hangganan ng Lungsod",
        "level9": "Village Boundary"
      },
      "prefix": {
        "aerialway": {
          "cable_car": "Cable Car",
          "chair_lift": "Chair Lift",
          "drag_lift": "Drag Lift",
          "gondola": "Gondola Lift",
          "platter": "Platter Lift",
          "pylon": "Pylon",
          "station": "Aerialway Station",
          "t-bar": "T-Bar Lift"
        },
        "aeroway": {
          "aerodrome": "Himpilan ng eroplano",
          "airstrip": "Airstrip",
          "apron": "Tapis pangkusina",
          "gate": "Tarangkahan",
          "hangar": "Hangar",
          "helipad": "Lapagan at Lunsaran ng Helikopter",
          "holding_position": "Holding Position",
          "parking_position": "Parking Position",
          "runway": "Patakbuhan at Daanan",
          "taxiway": "Daanan ng Taksi",
          "terminal": "Terminal"
        },
        "amenity": {
          "animal_shelter": "Kanlungan ng hayop",
          "arts_centre": "Lunduyan ng Sining",
          "atm": "ATM",
          "bank": "Bangko",
          "bar": "Tindahang Inuman ng Alak",
          "bbq": "Barbikyuhan",
          "bench": "Bangko",
          "bicycle_parking": "Paradahan ng Bisikleta",
          "bicycle_rental": "Arkilahan ng Bisikleta",
          "biergarten": "Inuman ng Serbesa",
          "boat_rental": "Arkilahan ng Bangka",
          "brothel": "Bahay-aliwan",
          "bureau_de_change": "Tanggapang Palitan ng Pera",
          "bus_station": "Himpilan ng Bus",
          "cafe": "Kapihan",
          "car_rental": "Arkilahan ng Kotse",
          "car_sharing": "Paghihiraman ng Kotse",
          "car_wash": "Paliguan ng Kotse",
          "casino": "Bahay-pasugalan",
          "charging_station": "Himpilang Kargahan",
          "childcare": "Childcare",
          "cinema": "Sinehan",
          "clinic": "Klinika",
          "clock": "Orasan",
          "college": "Dalubhasaan",
          "community_centre": "Lunduyan ng Pamayanan",
          "courthouse": "Gusali ng Hukuman",
          "crematorium": "Krematoryum",
          "dentist": "Dentista",
          "doctors": "Mga manggagamot",
          "drinking_water": "Naiinom na Tubig",
          "driving_school": "Paaralan ng Pagmamaneho",
          "embassy": "Embahada",
          "fast_food": "Kainang Pangmabilisan",
          "ferry_terminal": "Himpilan ng Barkong Pangtawid",
          "fire_station": "Himpilan ng Bumbero",
          "food_court": "Korte ng Pagkain",
          "fountain": "Bukal",
          "fuel": "Panggatong",
          "gambling": "Pagsusugal",
          "grave_yard": "Sementeryo",
          "grit_bin": "Grit Bin",
          "hospital": "Ospital",
          "hunting_stand": "Pook-tayuan na Pangpangangaso",
          "ice_cream": "Sorbetes",
          "kindergarten": "Kindergarten",
          "library": "Aklatan",
          "marketplace": "Palengke",
          "monastery": "Monasteryo",
          "motorcycle_parking": "Paradahan ng Motorsiklo",
          "nightclub": "Alibangbang",
          "nursing_home": "Alagaan ng mga Matatanda",
          "office": "Tanggapan",
          "parking": "Paradahan",
          "parking_entrance": "Pasukan ng Paradahan",
          "parking_space": "Parking Space",
          "pharmacy": "Botika",
          "place_of_worship": "Sambahan",
          "police": "Pulis",
          "post_box": "Kahon ng Liham",
          "post_office": "Tanggapan ng Sulat",
          "preschool": "Paunang Paghahanda para sa Paaralan",
          "prison": "Bilangguan",
          "pub": "Pangmadlang Bahay",
          "public_building": "Pangmadlang Gusali",
          "recycling": "Pook ng Muling Paggamit",
          "restaurant": "Kainan",
          "retirement_home": "Tahanan ng Pagreretiro",
          "sauna": "Silid-suuban",
          "school": "Paaralan",
          "shelter": "Kanlungan",
          "shop": "Tindahan",
          "shower": "Dutsahan",
          "social_centre": "Lunduyan ng Pakikipagkapuwa",
          "social_club": "Kapisanang Panglipunan",
          "social_facility": "Social Facility",
          "studio": "Istudyo",
          "swimming_pool": "Palanguyan",
          "taxi": "Taksi",
          "telephone": "Teleponong Pangmadla",
          "theatre": "Tanghalan",
          "toilets": "Mga banyo",
          "townhall": "Bulwagan ng Bayan",
          "university": "Pamantasan",
          "vending_machine": "Makinang Nagbebenta",
          "veterinary": "Paninistis na Pangbeterinarya",
          "village_hall": "Bulwagan ng Nayon",
          "waste_basket": "Basurahan",
          "waste_disposal": "Waste Disposal",
          "water_point": "Water Point",
          "youth_centre": "Lunduyan ng Kabataan"
        },
        "boundary": {
          "administrative": "Hangganang Pampangangasiwa",
          "census": "Hangganan ng Sensus",
          "national_park": "Liwasang Pambansa",
          "protected_area": "Napuprutektahang Pook"
        },
        "bridge": {
          "aqueduct": "Tulay na Daanan ng Tubig",
          "boardwalk": "Boardwalk",
          "suspension": "Tulay na Nakabitin",
          "swing": "Tulay na Naikakambiyo",
          "viaduct": "Tulay na Tubo",
          "yes": "Tulay"
        },
        "building": {
          "yes": "Gusali"
        },
        "craft": {
          "brewery": "Serbeserya",
          "carpenter": "Anluwage",
          "electrician": "Electrician",
          "gardener": "Hardinero",
          "painter": "Pintor",
          "photographer": "Litratista",
          "plumber": "Tubero",
          "shoemaker": "Sapatero",
          "tailor": "Mananahi",
          "yes": "Craft Shop"
        },
        "emergency": {
          "ambulance_station": "Istasyon ng Ambulansya",
          "assembly_point": "Assembly Point",
          "defibrillator": "Defibrillator",
          "landing_site": "Emergency Landing Site",
          "phone": "Teleponong Pangsakuna",
          "water_tank": "Emergency Water Tank",
          "yes": "Emergency"
        },
        "highway": {
          "abandoned": "Pinabayaang daang-bayan",
          "bridleway": "Daanan ng Kabayo",
          "bus_guideway": "Daanan ng Ginagabayang Bus",
          "bus_stop": "Hintuan ng Bus",
          "construction": "Ginagawang Punong Lansangan",
          "corridor": "Corridor",
          "cycleway": "Daanan ng Bisikleta",
          "elevator": "Asensor",
          "emergency_access_point": "Tuldok na Puntahan na Pangsakuna",
          "footway": "Makitid na Lakaran ng Tao",
          "ford": "Bagtasan ng Tao",
          "give_way": "Give Way Sign",
          "living_street": "Buhay na Lansangan",
          "milestone": "Poste ng Milya",
          "motorway": "Daanan ng Sasakyang De-motor",
          "motorway_junction": "Sugpungan ng Daanan ng Sasakyang De-motor",
          "motorway_link": "Lansangang Daanan ng Sasakyang De-motor",
          "passing_place": "Passing Place",
          "path": "Landas",
          "pedestrian": "Tawiran ng Taong Naglalakad",
          "platform": "Palapag",
          "primary": "Pangunahing Kalsada",
          "primary_link": "Pangunahing Kalsada",
          "proposed": "Iminungkahing Daan",
          "raceway": "Kanal na Daluyan ng Tubig",
          "residential": "Daang pamahayan",
          "rest_area": "Pook Pahingahan",
          "road": "Lansangan",
          "secondary": "Pampangalawang Lansangan",
          "secondary_link": "Pampangalawang Lansangan",
          "service": "Kalyeng Pampalingkuran",
          "services": "Mga Palingkuran sa Daanan ng Sasakyang De-motor",
          "speed_camera": "Kamera ng Tulin",
          "steps": "Mga hakbang",
          "stop": "Stop Sign",
          "street_lamp": "Street Lamp",
          "tertiary": "Pampangatlong Kalsada",
          "tertiary_link": "Pampangatlong Kalsada",
          "track": "Pinak",
          "traffic_signals": "Mga Senyas sa Trapiko",
          "trail": "Bulaos",
          "trunk": "Pangunahing Ruta",
          "trunk_link": "Pangunahing Ruta",
          "turning_loop": "Turning Loop",
          "unclassified": "Kalsadang Walang Kaurian",
          "yes": "Daan"
        },
        "historic": {
          "archaeological_site": "Pook na Pang-arkeolohiya",
          "battlefield": "Pook ng Labanan",
          "boundary_stone": "Bato ng Hangganan",
          "building": "Gusaling Pangkasaysayan",
          "bunker": "Bunker",
          "castle": "Kastilyo",
          "church": "Simbahan",
          "city_gate": "City Gate",
          "citywalls": "City Walls",
          "fort": "Kuta",
          "heritage": "Heritage Site",
          "house": "Bahay",
          "icon": "Kinatawang Larawan",
          "manor": "Manor",
          "memorial": "Muog na Pang-alaala",
          "mine": "Minahan",
          "mine_shaft": "Mine Shaft",
          "monument": "Bantayog",
          "roman_road": "Roman Road",
          "ruins": "Mga Guho",
          "stone": "Bato",
          "tomb": "Nitso/Puntod",
          "tower": "Tore",
          "wayside_cross": "Krus sa Gilid ng Kalsada",
          "wayside_shrine": "Dambana sa Gilid ng Kalsada",
          "wreck": "Wasak na Sasakyan",
          "yes": "Historic Site"
        },
        "junction": {
          "yes": "Junction"
        },
        "landuse": {
          "allotments": "Mga Laang Bahagi",
          "basin": "Lunas ng Ilog",
          "brownfield": "Lupain ng Kayumangging Bukirin",
          "cemetery": "Libingan",
          "commercial": "Pook na Pangkalakalan",
          "conservation": "Lupaing Iniligtas",
          "construction": "Konstruksyon",
          "farm": "Bukid",
          "farmland": "Lupaing Sakahan",
          "farmyard": "Bakuran ng Bahay sa Bukid",
          "forest": "Gubat",
          "garages": "Mga garahe",
          "grass": "Damo",
          "greenfield": "Lupain ng Lunting Bukirin",
          "industrial": "Pook na Pang-industriya",
          "landfill": "Tabon na Lupain",
          "meadow": "Kaparangan",
          "military": "Pook ng Militar",
          "mine": "Minahan",
          "orchard": "Halamanan ng Bunga",
          "quarry": "Hukay na Tibagan",
          "railway": "Daambakal",
          "recreation_ground": "Lupaing Libangan",
          "reservoir": "Tinggalan ng Tubig",
          "reservoir_watershed": "Lunas na Imbakan ng Tubig",
          "residential": "Pook na Panirahan",
          "retail": "Tingi",
          "road": "Pook na Daanan",
          "village_green": "Nayong Lunti",
          "vineyard": "Ubasan",
          "yes": "Landuse"
        },
        "leisure": {
          "beach_resort": "Liwaliwang Dalampasigan",
          "bird_hide": "Pook-Matyagan ng Ibon",
          "common": "Karaniwang Lupain",
          "dog_park": "Dog Park",
          "firepit": "Fire Pit",
          "fishing": "Pook na Palaisdaan",
          "fitness_centre": "Fitness Centre",
          "fitness_station": "Himpilan na Pangkaangkupan at Kalusugan ng Katawan",
          "garden": "Halamanan",
          "golf_course": "Kurso ng Golp",
          "horse_riding": "Sakayan ng kabayo",
          "ice_rink": "Pook Pang-iskeyting",
          "marina": "Marina",
          "miniature_golf": "Munting Golp",
          "nature_reserve": "Lupaing Laan sa Kalikasan",
          "park": "Liwasan",
          "pitch": "Hagisang Pampalakasan",
          "playground": "Palaruan",
          "recreation_ground": "Lupaing Libangan",
          "resort": "Resort",
          "sauna": "Silid-suuban",
          "slipway": "Andamyong Pagawaan ng Barko",
          "sports_centre": "Lunduyang Pampalakasan",
          "stadium": "Istadyum",
          "swimming_pool": "Palanguyan",
          "track": "Landas na Takbuhan",
          "water_park": "Liwasang Tubigan",
          "yes": "Pampalipas oras"
        },
        "man_made": {
          "adit": "Adit",
          "beacon": "Beacon",
          "beehive": "Bee Hive",
          "breakwater": "Breakwater",
          "bridge": "Bridge",
          "bunker_silo": "Bunker",
          "chimney": "Chimney",
          "crane": "Crane",
          "dolphin": "Mooring Post",
          "dyke": "Dyke",
          "embankment": "Embankment",
          "flagpole": "Flagpole",
          "gasometer": "Gasometer",
          "groyne": "Groyne",
          "kiln": "Kiln",
          "lighthouse": "Parola",
          "mast": "Mast",
          "mine": "Mine",
          "mineshaft": "Mine Shaft",
          "monitoring_station": "Monitoring Station",
          "petroleum_well": "Petroleum Well",
          "pier": "Pier",
          "pipeline": "Linya ng tubo",
          "silo": "Silo",
          "storage_tank": "Storage Tank",
          "surveillance": "Surveillance",
          "tower": "Tore",
          "wastewater_plant": "Wastewater Plant",
          "water_tower": "Water Tower",
          "water_well": "Well",
          "water_works": "Water Works",
          "watermill": "Water Mill",
          "windmill": "Wind Mill",
          "works": "Pabrika",
          "yes": "Gawa ng tao"
        },
        "military": {
          "airfield": "Paliparan at Palapagang Pangmilitar",
          "barracks": "Kuwartel",
          "bunker": "Hukay na Pangsundalo",
          "yes": "Military"
        },
        "mountain_pass": {
          "yes": "Mountain Pass"
        },
        "natural": {
          "bay": "Look",
          "beach": "Dalampasigan",
          "cape": "Tangway",
          "cave_entrance": "Pasukan ng Yungib",
          "cliff": "Bangin",
          "crater": "Uka",
          "dune": "Burol ng Buhangin",
          "fell": "Pulak",
          "fjord": "Tubigang Mabangin",
          "forest": "Gubat",
          "geyser": "Geyser",
          "glacier": "Tipak ng Yelong Bundok",
          "grassland": "Damuhan",
          "heath": "Lupain ng Halamang Erika",
          "hill": "Burol",
          "island": "Pulo",
          "land": "Lupain",
          "marsh": "Latian",
          "moor": "Lupang Pugalan ng Tubig",
          "mud": "Putik",
          "peak": "Tugatog",
          "point": "Tuldok",
          "reef": "Bahura",
          "ridge": "Tagaytay",
          "rock": "Bato",
          "saddle": "Saddle",
          "sand": "Buhangin",
          "scree": "Batuhang Buhaghag",
          "scrub": "Palumpong",
          "spring": "Bukal",
          "stone": "Bato",
          "strait": "Kipot",
          "tree": "Puno",
          "valley": "Lambak",
          "volcano": "Bulkan",
          "water": "Tubig",
          "wetland": "Babad na Lupain",
          "wood": "Kahoy"
        },
        "office": {
          "accountant": "Tagatuos",
          "administrative": "Pangangasiwa",
          "architect": "Arkitekto",
          "association": "Association",
          "company": "Kumpanya",
          "educational_institution": "Educational Institution",
          "employment_agency": "Ahensiya ng Patrabaho",
          "estate_agent": "Ahente ng Lupain",
          "government": "Tanggapang Pampamahalaan",
          "insurance": "Tanggapan ng Seguro",
          "it": "IT Office",
          "lawyer": "Manananggol",
          "ngo": "Tanggapan ng NGO",
          "telecommunication": "Tanggapang Pangtelekomunikasyon",
          "travel_agent": "Ahensiya ng Paglalakbay",
          "yes": "Tanggapan"
        },
        "place": {
          "allotments": "Allotments",
          "city": "Lungsod",
          "city_block": "City Block",
          "country": "Bansa",
          "county": "Kondehan",
          "farm": "Bukid",
          "hamlet": "Maliit na Nayon",
          "house": "Bahay",
          "houses": "Mga Bahay",
          "island": "Pulo",
          "islet": "Munting Pulo",
          "isolated_dwelling": "Ilang na Tirahan",
          "locality": "Lokalidad",
          "municipality": "Munisipalidad",
          "neighbourhood": "Kabahayan",
          "postcode": "Kodigo ng Koreo",
          "quarter": "Quarter",
          "region": "Rehiyon",
          "sea": "Dagat",
          "square": "Square",
          "state": "Estado",
          "subdivision": "Kabahaging kahatian",
          "suburb": "Kanugnog ng lungsod",
          "town": "Bayan",
          "unincorporated_area": "Pook na hindi pa kasanib",
          "village": "Nayon",
          "yes": "Pook"
        },
        "railway": {
          "abandoned": "Pinabayaang daambakal",
          "construction": "Kinukumpuning Daambakal",
          "disused": "Hindi Ginagamit na Daambakal",
          "funicular": "Daambakal sa Matarik na Lupa",
          "halt": "Hintuan ng Tren",
          "junction": "Panulukan ng Daambakal",
          "level_crossing": "Patag na Tawiran",
          "light_rail": "Banayad na Riles",
          "miniature": "Munting Riles",
          "monorail": "Isahang Riles",
          "narrow_gauge": "Daambakal na may Makitid na Luwang",
          "platform": "Plataporma ng Daambakal",
          "preserved": "Pinangangalagaang Daambakal",
          "proposed": "Proposed Railway",
          "spur": "Tahid ng Daambakal",
          "station": "Himpilan ng Daambakal",
          "stop": "Railway Stop",
          "subway": "Pang-ilalim na Daambakal",
          "subway_entrance": "Pasukan sa Pang-ilalim na Daambakal",
          "switch": "Mga Tuldok na Pangdaambakal",
          "tram": "Riles ng Trambya",
          "tram_stop": "Hintuan ng Trambya"
        },
        "shop": {
          "alcohol": "Wala sa Lisensiya",
          "antiques": "Mga Antigo",
          "art": "Tindahan ng Sining",
          "bakery": "Panaderya",
          "beauty": "Tindahan ng Pampaganda",
          "beverages": "Tindahan ng mga Inumin",
          "bicycle": "Tindahan ng Bisikleta",
          "bookmaker": "Bookmaker",
          "books": "Tindahan ng Aklat",
          "boutique": "Boutique",
          "butcher": "Mangangatay",
          "car": "Tindahan ng Kotse",
          "car_parts": "Mga Bahagi ng Kotse",
          "car_repair": "Kumpunihan ng Kotse",
          "carpet": "Tindahan ng Karpet",
          "charity": "Tindahang Pangkawanggawa",
          "chemist": "Kimiko",
          "clothes": "Tindahan ng mga Damit",
          "computer": "Tindahan ng Kompyuter",
          "confectionery": "Tindahan ng Kendi",
          "convenience": "Tindahang Maginhawa",
          "copyshop": "Tindahang Kopyahan",
          "cosmetics": "Tindahan ng mga Pampaganda",
          "deli": "Deli",
          "department_store": "Tindahang Kagawaran",
          "discount": "Tindahan ng mga Bagay na may Bawas-Presyo",
          "doityourself": "Gawin ng Sarili Mo",
          "dry_cleaning": "Paglilinis na Tuyo",
          "electronics": "Tindahan ng Elektroniks",
          "estate_agent": "Ahente ng Lupain",
          "farm": "Tindahang Pambukid",
          "fashion": "Tindahan ng Moda",
          "fish": "Tindahan ng Isda",
          "florist": "Nagtitinda ng Bulaklak",
          "food": "Tindahan ng Pagkain",
          "funeral_directors": "Mga Direktor ng Punerarya",
          "furniture": "Muwebles",
          "gallery": "Galeriya",
          "garden_centre": "Lunduyang Halamanan",
          "general": "Tindahang Panglahat",
          "gift": "Tindahan ng Regalo",
          "greengrocer": "Tagapagtinda ng Prutas at Gulay",
          "grocery": "Tindahan ng Groserya",
          "hairdresser": "Tagapag-ayos ng Buhok",
          "hardware": "Tindahan ng Hardwer",
          "hifi": "Hi-Fi",
          "houseware": "Houseware Shop",
          "interior_decoration": "Interior Decoration",
          "jewelry": "Tindahan ng Alahas",
          "kiosk": "Tindahan ng Kubol",
          "kitchen": "Kitchen Shop",
          "laundry": "Labahan",
          "lottery": "Lottery",
          "mall": "Pasyalang Pangmadla",
          "market": "Pamilihan",
          "massage": "Massage",
          "mobile_phone": "Tindahan ng Teleponong Selular",
          "motorcycle": "Tindahan ng Motorsiklo",
          "music": "Tindahan ng Tugtugin",
          "newsagent": "Ahente ng Balita",
          "optician": "Optiko",
          "organic": "Tindahan ng Pagkaing Organiko",
          "outdoor": "Tindahang Panlabas",
          "paint": "Paint Shop",
          "pawnbroker": "Pawnbroker",
          "pet": "Tindahan ng Alagang Hayop",
          "pharmacy": "Botika",
          "photo": "Tindahan ng Litrato",
          "seafood": "Sea Food",
          "second_hand": "Second-hand Shop",
          "shoes": "Tindahan ng Sapatos",
          "sports": "Tindahang Pampalakasan",
          "stationery": "Tindahan ng Papel",
          "supermarket": "Malaking Pamilihan",
          "tailor": "Mananahi",
          "ticket": "Ticket Shop",
          "tobacco": "Tobacco Shop",
          "toys": "Tindahan ng Laruan",
          "travel_agency": "Ahensiya ng Paglalakbay",
          "tyres": "Tyre Shop",
          "vacant": "Vacant Shop",
          "variety_store": "Variety Store",
          "video": "Tindahan ng Bidyo",
          "wine": "Wala sa Lisensiya",
          "yes": "Tindahan"
        },
        "tourism": {
          "alpine_hut": "Kubong Pambundok",
          "apartment": "Holiday Apartment",
          "artwork": "Likhang Sining",
          "attraction": "Pang-akit",
          "bed_and_breakfast": "Kama at Almusal",
          "cabin": "Dampa",
          "camp_site": "Pook ng Kampo",
          "caravan_site": "Lugar ng Karabana",
          "chalet": "Kubo ng Pastol",
          "gallery": "Gallery",
          "guest_house": "Bahay na Pampanauhin",
          "hostel": "Hostel",
          "hotel": "Otel",
          "information": "Kabatiran",
          "motel": "Motel",
          "museum": "Museo",
          "picnic_site": "Pook na Pampiknik",
          "theme_park": "Liwasang may Tema",
          "viewpoint": "Tuldok ng pananaw",
          "zoo": "Hayupan"
        },
        "tunnel": {
          "building_passage": "Building Passage",
          "culvert": "Culvert",
          "yes": "Lagusan"
        },
        "waterway": {
          "artificial": "Daanan ng Tubig na Gawang-Tao",
          "boatyard": "Bakuran ng bangka",
          "canal": "Paralanan",
          "dam": "Saplad",
          "derelict_canal": "Pinabayaang Paralanan",
          "ditch": "Bambang",
          "dock": "Pantalan",
          "drain": "Limasan",
          "lock": "Kandado",
          "lock_gate": "Tarangkahan ng Kandado",
          "mooring": "Pugalan",
          "rapids": "Mga lagaslasan",
          "river": "Ilog",
          "stream": "Batis",
          "wadi": "Tuyot na Ilog",
          "waterfall": "Talon",
          "weir": "Pilapil",
          "yes": "Waterway"
        }
      },
      "prefix_format": "%{name}"
    }
  },
  "javascripts": {
    "changesets": {
      "show": {
        "comment": "Comment",
        "hide_comment": "itago",
        "subscribe": "Subscribe",
        "unhide_comment": "pawalang-bisa ang pag-tago",
        "unsubscribe": "Unsubscribe"
      }
    },
    "close": "Isara",
    "context": {
      "add_note": "Magdagdag ng tala dito",
      "centre_map": "Igitna ang mapa dito",
      "directions_from": "Mga direksyon mula rito",
      "directions_to": "Mga direksyon papunta rito",
      "query_features": "Query features",
      "show_address": "Show address"
    },
    "directions": {
      "ascend": "Ascend",
      "descend": "Descend",
      "directions": "Mga Direksyon",
      "distance": "Layo",
      "engines": {
        "fossgis_osrm_bike": "Bicycle (OSRM)",
        "fossgis_osrm_car": "Kotse (OSRM)",
        "fossgis_osrm_foot": "Foot (OSRM)",
        "graphhopper_bicycle": "Bisikleta (GraphHopper)",
        "graphhopper_car": "Kotse (GraphHopper)",
        "graphhopper_foot": "Foot (GraphHopper)"
      },
      "errors": {
        "no_place": "Sorry - couldn't locate '%{place}'.",
        "no_route": "Couldn't find a route between those two places."
      },
      "instructions": {
        "against_oneway_without_exit": "Go against one-way on %{name}",
        "continue_without_exit": "Continue on %{name}",
        "courtesy": "Directions courtesy of %{link}",
        "destination_without_exit": "Abutin ang patutunguhan",
        "end_oneway_without_exit": "End of one-way on %{name}",
        "endofroad_left_without_exit": "At the end of the road turn left onto %{name}",
        "endofroad_right_without_exit": "At the end of the road turn right onto %{name}",
        "exit_counts": {
          "eighth": "Ika-8",
          "fifth": "Ika-5",
          "first": "1st",
          "fourth": "4th",
          "ninth": "9th",
          "second": "Ika-2",
          "seventh": "Ika-7",
          "sixth": "6th",
          "tenth": "Ika-10",
          "third": "Ika-3"
        },
        "exit_roundabout": "Exit sa rotondang daan patungong %{name}",
        "follow_without_exit": "Sundan %{name}",
        "fork_left_without_exit": "At the fork turn left onto %{name}",
        "fork_right_without_exit": "At the fork turn right onto %{name}",
        "leave_roundabout_without_exit": "Leave roundabout - %{name}",
        "merge_left_without_exit": "Merge left onto %{name}",
        "merge_right_without_exit": "Merge right onto %{name}",
        "offramp_left": "Take the ramp on the left",
        "offramp_left_with_directions": "Take the ramp on the left towards %{directions}",
        "offramp_left_with_exit": "Kunin ang nakasaad na EXIT %{exit} sa kaliwang bahagi",
        "offramp_left_with_exit_directions": "Kunin ang nakasaad na EXIT %{exit} sa kaliwang bahagi biyaheng %{directions}",
        "offramp_left_with_exit_name": "Kunin ang nakasaad na EXIT %{exit} sa kaliwang bahagi papuntang %{name}",
        "offramp_left_with_exit_name_directions": "Kunin ang nakasaad na EXIT %{exit} sa kaliwang bahagi papuntang %{name}, biyaheng %{directions}",
        "offramp_left_with_name": "Take the ramp on the left onto %{name}",
        "offramp_left_with_name_directions": "Take the ramp on the left onto %{name}, towards %{directions}",
        "offramp_right": "Take the ramp on the right",
        "offramp_right_with_directions": "Take the ramp on the right towards %{directions}",
        "offramp_right_with_exit": "Kunin ang nakasaad na EXIT %{exit} sa kanang bahagi",
        "offramp_right_with_exit_directions": "Kunin ang nakasaad na EXIT %{exit} sa kanang bahagi papuntang biyaheng %{directions}",
        "offramp_right_with_exit_name": "Kunin ang nakasaad na EXIT %{exit} sa kanang bahagi papuntang %{name}",
        "offramp_right_with_exit_name_directions": "Kunin ang nakasaad na EXIT %{exit} sa kanang bahagi papuntang %{name}, padaang %{directions}",
        "offramp_right_with_name": "Take the ramp on the right onto %{name}",
        "offramp_right_with_name_directions": "Take the ramp on the right onto %{name}, towards %{directions}",
        "onramp_left": "Turn left onto the ramp",
        "onramp_left_with_directions": "Turn left onto the ramp towards %{directions}",
        "onramp_left_with_name_directions": "Turn left on the ramp onto %{name}, towards %{directions}",
        "onramp_left_without_directions": "Turn left onto the ramp",
        "onramp_left_without_exit": "Turn left on the ramp onto %{name}",
        "onramp_right": "Turn right onto the ramp",
        "onramp_right_with_directions": "Turn right onto the ramp towards %{directions}",
        "onramp_right_with_name_directions": "Turn right on the ramp onto %{name}, towards %{directions}",
        "onramp_right_without_directions": "Turn right onto the ramp",
        "onramp_right_without_exit": "Turn right on the ramp onto %{name}",
        "roundabout_with_exit": "At roundabout take exit %{exit} onto %{name}",
        "roundabout_with_exit_ordinal": "Sa Rotondang daan gamitin ang %{exit} exit patungong %{name}",
        "roundabout_without_exit": "At roundabout take exit onto %{name}",
        "sharp_left_without_exit": "Sharp left onto %{name}",
        "sharp_right_without_exit": "Sharp right onto %{name}",
        "slight_left_without_exit": "Slight left onto %{name}",
        "slight_right_without_exit": "Slight right onto %{name}",
        "start_without_exit": "Magsimula sa dulo ng %{name}",
        "stay_roundabout_without_exit": "Stay on roundabout - %{name}",
        "turn_left_without_exit": "Turn left onto %{name}",
        "turn_right_without_exit": "Turn right onto %{name}",
        "unnamed": "unnamed road",
        "uturn_without_exit": "U-turn along %{name}",
        "via_point_without_exit": "(via point)"
      },
      "time": "Oras"
    },
    "edit_help": "Move the map and zoom in on a location you want to edit, then click here.",
    "embed": {
      "report_problem": "Report a problem"
    },
    "key": {
      "title": "Map Key",
      "tooltip": "Map Key",
      "tooltip_disabled": "Map Key not available for this layer"
    },
    "map": {
      "base": {
        "cycle_map": "Mapa ng Pagbibisikleta",
        "hot": "Humanitarian",
        "standard": "Pamantayan",
        "transport_map": "Mapa ng Transportasyon"
      },
      "copyright": "?? <a href='%{copyright_url}'>Mga tagapag-ambag ng OpenStreetMap</a>",
      "donate_link_text": "<a class='donate-attr' href='%{donate_url}'>Make a Donation</a>",
      "hotosm": "Tiles style by <a href='%{hotosm_url}' target='_blank'>Humanitarian OpenStreetMap Team</a> hosted by <a href='%{osmfrance_url}' target='_blank'>OpenStreetMap France</a>",
      "layers": {
        "data": "Dato ng Mapa",
        "gps": "Public GPS Traces",
        "header": "Map Layers",
        "notes": "Map Notes",
        "overlays": "Enable overlays for troubleshooting the map",
        "title": "Layers"
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
        "title": "Ipakita ang Aking Lokasyon"
      },
      "terms": "<a href='%{terms_url}' target='_blank'>Website and API terms</a>",
      "thunderforest": "Tiles courtesy of <a href='%{thunderforest_url}' target='_blank'>Andy Allan</a>",
      "zoom": {
        "in": "Lumapit",
        "out": "Zoom Out"
      }
    },
    "notes": {
      "new": {
        "add": "Magdagdag ng Tala",
        "advice": "Your note is public and may be used to update the map, so don't enter personal information, or information from copyrighted maps or directory listings.",
        "intro": "Spotted a mistake or something missing? Let other mappers know so we can fix it. Move the marker to the correct position and type a note to explain the problem."
      },
      "show": {
        "anonymous_warning": "This note includes comments from anonymous users which should be independently verified.",
        "comment": "Comment",
        "comment_and_resolve": "Pumuna at Lutasin",
        "hide": "Itago",
        "reactivate": "Reactivate",
        "resolve": "Lutasin"
      }
    },
    "query": {
      "error": "Error contacting %{server}: %{error}",
      "node": "Buko",
      "nothing_found": "No features found",
      "relation": "Kaugnayan",
      "timeout": "Timeout contacting %{server}",
      "way": "Daan"
    },
    "share": {
      "cancel": "Huwag ituloy",
      "center_marker": "Center map on marker",
      "custom_dimensions": "Set custom dimensions",
      "download": "Download",
      "embed": "HTML",
      "format": "Format:",
      "geo_uri": "Geo URI",
      "image": "Image",
      "image_size": "Image will show standard layer at ",
      "include_marker": "Include marker",
      "link": "Link or HTML",
      "long_link": "Link",
      "only_standard_layer": "Only the standard layer can be exported as an image",
      "paste_html": "Idikit ang HTML na ibabaon sa websayt",
      "scale": "Scale:",
      "short_link": "Short Link",
      "short_url": "Maiksing URL",
      "title": "Ibahagi",
      "view_larger_map": "View Larger Map"
    },
    "site": {
      "createnote_disabled_tooltip": "Lumapit upang ilagay ang tala sa mapa",
      "createnote_tooltip": "Maglagay ng tala sa mapa",
      "edit_disabled_tooltip": "Lumapit upang baguhin ang mapa",
      "edit_tooltip": "Baguhin ang mapa",
      "map_data_zoom_in_tooltip": "Lumapit upang makita ang datos ng mapa",
      "map_notes_zoom_in_tooltip": "Zoom in to see map notes",
      "queryfeature_disabled_tooltip": "Zoom in to query features",
      "queryfeature_tooltip": "Query features"
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
      "anon_edits_link_text": "Alamin kung bakit ganito ang katayuan.",
      "flash_player_required_html": "Kailangan mo ng isang tagapagpaandar na Flash upang magamit ang Potlatch, ang patnugot na Flash ng OpenStreetMap. Maaari mong <a href=\"http://www.adobe.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash\">ikargang paibaba ang Flash Player magmula sa Adobe.com</a>. <a href=\"http://wiki.openstreetmap.org/wiki/Editing\">Ilang pang mga mapagpipilian</a> ang makukuha rin para sa pamamatnugot ng OpenStreetMap.",
      "id_not_configured": "iD has not been configured",
      "no_iframe_support": "Hindi tinatangkilik ng pantingin-tingin mo ang mga iframe ng HTML, na kailangan para sa tampok na ito.",
      "not_public": "Hindi mo pa naitatakda ang mga pamamatnugot mo upang maging pangmadla.",
      "not_public_description_html": "Hindi mo na maaaring baguhin ang mapa maliban na lamang kung gagawin mo. Maitatakda mo ang iyong mga pamamatnugot bilang pangmadla magmula sa iyong %{user_page}.",
      "potlatch2_not_configured": "Hindi pa naisasaayos ang Potlatch 2 - mangyaring tingnan ang http://wiki.openstreetmap.org/wiki/The_Rails_Port",
      "potlatch2_unsaved_changes": "Mayroon kang mga pagbabagong hindi pa nasasagip. (Upang masagip sa Potlatch 2, dapat mong pindutin ang sagipin.)",
      "potlatch_unsaved_changes": "Mayroon kang mga pagbabagong hindi pa nasasagip. (Upang makapagsagip sa Potlatch, dapat mong huwag piliin ang pangkasalukuyang daan o tuldok, kung namamatnugot sa pamamaraang buhay, o pindutin ang sagipin kung mayroon kang isang pindutang sagipin.)",
      "user_page_link": "pahina ng tagagamit"
    },
    "index": {
      "remote_failed": "Nabigo ang pamamatnugot - tiyaking naikarga ang JOSM or Merkaartor at kung gumagana ang pagpipilian ng malayong pantaban"
    },
    "sidebar": {
      "search_results": "Mga Resulta ng Paghahanap"
    }
  },
  "time": {
    "am": "AM",
    "formats": {
      "blog": "%e %B %Y",
      "default": "%A, ika-%d ng %B ng %Y %H:%M:%S %z",
      "friendly": "%e %B %Y sa ganap na %H:%M",
      "long": "ika-%d ng %B ng %Y %H:%M",
      "short": "%d ng %b %H:%M"
    },
    "pm": "PM"
  }
});
