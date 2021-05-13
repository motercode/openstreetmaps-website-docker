I18n.translations || (I18n.translations = {});
I18n.translations["ne"] = I18n.extend((I18n.translations["ne"] || {}), {
  "browse": {
    "start_rjs": {
      "feature_warning": "%{num_features}वटा सुविधाहरु लोड हुँदै छन्, जसले गर्दा तपाईंको ब्राउजर सुस्त वा अनुत्तरदायी बनाउन सक्छ । तपाईं साँच्चै यो जानकारी हेर्न चाहनुहुन्छ ?",
      "load_data": "डेटा लोडगर्ने",
      "loading": "खुल्दै छ…"
    }
  },
  "date": {
    "abbr_day_names": [
      "आईत",
      "सोम",
      "मंगल",
      "बुध",
      "बिही",
      "शुक्र",
      "शनि"
    ],
    "abbr_month_names": [
      null,
      "जन.",
      "फेब्रु.",
      "मार्च",
      "अप्रिल",
      "मई",
      "जुन",
      "जुलाई",
      "अगष्ट",
      "सेप्ट.",
      "अक्टो.",
      "नोभ.",
      "डिसे."
    ],
    "day_names": [
      "आईतबार",
      "सोमबार",
      "मंगलबार",
      "बुधबार",
      "बिहीबार",
      "शुक्रबार",
      "शनिबार"
    ],
    "formats": {
      "default": "%Y-%m-%d",
      "long": "%B %d, %Y",
      "short": "%b %d"
    },
    "month_names": [
      null,
      "जनवरी",
      "फेब्रुवरी",
      "मार्च",
      "अप्रिल",
      "मई",
      "जुन",
      "जुलाई",
      "अगष्ट",
      "सेप्टेम्बार",
      "अक्टोबर",
      "नोभेम्बर",
      "डिसेम्बर"
    ],
    "order": [
      "year",
      "month",
      "day"
    ]
  },
  "diary_entries": {
    "edit": {
      "marker_text": "दैनिकी प्रविष्ठी स्थान"
    }
  },
  "geocoder": {
    "search_osm_nominatim": {
      "admin_levels": {
        "level10": "उपनगर सीमा",
        "level2": "राष्ट्रिय सीमा",
        "level4": "राज्य सीमा",
        "level5": "क्षेत्र सीमा",
        "level6": "इलाका सीमा",
        "level8": "सहर सीमा",
        "level9": "गाउँ सीमा"
      },
      "prefix": {
        "aerialway": {
          "cable_car": "केबल कार",
          "chair_lift": "कुर्सी लिफ्ट",
          "drag_lift": "तान्ने लिफ्ट",
          "gondola": "गोन्डोला लिफ्ट",
          "platter": "Platter Lift",
          "pylon": "Pylon",
          "station": "हवाई मार्ग स्टेशन",
          "t-bar": "T-Bar Lift"
        },
        "aeroway": {
          "aerodrome": "हवाईड्रोम",
          "airstrip": "Airstrip",
          "apron": "तटबन्द",
          "gate": "ढोका",
          "hangar": "ह्याङ्गर",
          "helipad": "हेलिकप्टर बस्ने ठाउँ",
          "holding_position": "Holding Position",
          "parking_position": "Parking Position",
          "runway": "रनवे",
          "taxiway": "ट्याक्सीको बाटो",
          "terminal": "टर्मिनल"
        },
        "amenity": {
          "animal_shelter": "पशु आश्रय",
          "arts_centre": "कला केन्द्र",
          "atm": "एटिएम् मेसिन",
          "bank": "बैँक",
          "bar": "बार",
          "bbq": "बारबिक्यू",
          "bench": "मेच",
          "bicycle_parking": "साइकिल पार्किङ्",
          "bicycle_rental": "साइकिल भाडामा",
          "biergarten": "बियर पिउने ठाउँ",
          "boat_rental": "ढुङ्गा भाडा सेवा",
          "brothel": "वेश्यालय",
          "bureau_de_change": "परिवर्तन व्यूरो",
          "bus_station": "बस स्टेसन्",
          "cafe": "चमेना गृह",
          "car_rental": "कार भाडामा",
          "car_sharing": "कार साटासाट",
          "car_wash": "कार धुने ठाउँ",
          "casino": "क्यासिनो",
          "charging_station": "चार्ज गर्ने स्टेसन",
          "childcare": "बालबालिका हेरचाह",
          "cinema": "सिनेमा घर",
          "clinic": "क्लिनिक",
          "clock": "घन्टाघर",
          "college": "कलेज",
          "community_centre": "सामुदायिक केन्द्र",
          "courthouse": "अदालत",
          "crematorium": "श्मशान",
          "dentist": "दाँतको डाक्टर",
          "doctors": "डाक्टर",
          "drinking_water": "पिउने पानी",
          "driving_school": "ड्राइभिङ स्कूल",
          "embassy": "दूतावास",
          "fast_food": "चमेना गृह",
          "ferry_terminal": "फेरी टर्मिनल",
          "fire_station": "अग्नि नियन्त्रण स्टेसन्",
          "food_court": "खाजा घर",
          "fountain": "पानीको फोहोरा",
          "fuel": "इन्धन",
          "gambling": "जुवाघर",
          "grave_yard": "श्मशान घाट",
          "grit_bin": "Grit Bin",
          "hospital": "अस्पताल",
          "hunting_stand": "शिकार क्षेत्र",
          "ice_cream": "बरफ",
          "kindergarten": "बाल आश्रम",
          "library": "पुस्तकालय",
          "marketplace": "बजार क्षेत्र",
          "monastery": "चैत्य",
          "motorcycle_parking": "मोटर साइकल पार्किङ",
          "nightclub": "रात्री क्लब",
          "nursing_home": "नर्सिङ होम",
          "office": "कार्यलय",
          "parking": "पार्किङ",
          "parking_entrance": "पार्किङ प्रवेश",
          "parking_space": "Parking Space",
          "pharmacy": "औषधी पसल",
          "place_of_worship": "पूजा गर्ने स्थान",
          "police": "प्रहरी",
          "post_box": "हुलाक बाक्सा",
          "post_office": "हुलाक",
          "preschool": "पूर्व-स्कुल",
          "prison": "कारागार",
          "pub": "पब",
          "public_building": "सार्वजनिक भवन",
          "recycling": "पुनः प्रयोग विन्दु",
          "restaurant": "रेस्टुरेन्ट",
          "retirement_home": "बृद्ध आश्रम",
          "sauna": "सौना",
          "school": "विद्यालय",
          "shelter": "आश्रय",
          "shop": "पसल",
          "shower": "स्नानघर",
          "social_centre": "सामाजिक केन्द्र",
          "social_club": "सामाजिक क्लब",
          "social_facility": "सामाजिक सेवा",
          "studio": "स्टुडियो",
          "swimming_pool": "पौली पोखरी",
          "taxi": "ट्याक्सी",
          "telephone": "सार्वजनिक टेलिफोन",
          "theatre": "हल",
          "toilets": "शौचालय",
          "townhall": "सभा गृह",
          "university": "विश्वविद्यालय",
          "vending_machine": "भेन्डिङ मेसिन",
          "veterinary": "भेटेरिनरी शल्यक्रिया",
          "village_hall": "सभा गृह",
          "waste_basket": "फोहर टोकरी",
          "waste_disposal": "फोहर फाल्ने ठाउँ",
          "water_point": "Water Point",
          "youth_centre": "युवा केन्द्र"
        },
        "boundary": {
          "administrative": "प्रशासनिक सिमाना",
          "census": "जनगणना सिमाना",
          "national_park": "राष्ट्रिय निकुञ्ज",
          "protected_area": "संरक्षित क्षेत्र"
        },
        "bridge": {
          "aqueduct": "नहर",
          "boardwalk": "Boardwalk",
          "suspension": "झोलुङ्गे पुल",
          "swing": "झोलुङ्गे पुल",
          "viaduct": "भियाडक्ट",
          "yes": "पुल"
        },
        "building": {
          "yes": "भवन"
        },
        "craft": {
          "brewery": "ब्रुएरी",
          "carpenter": "सिकर्मी",
          "electrician": "विद्युतकर्मी",
          "gardener": "माली",
          "painter": "पेन्टर",
          "photographer": "फोटोग्रा",
          "plumber": "प्लमर",
          "shoemaker": "जुत्ताबनाउने",
          "tailor": "सुचीकार",
          "yes": "कला पसल"
        },
        "emergency": {
          "ambulance_station": "एम्बुलेन्स पार्क",
          "assembly_point": "Assembly Point",
          "defibrillator": "डिफिब्रिलेटर",
          "landing_site": "आकस्मिक अवतरण क्षेत्र",
          "phone": "आकस्मिक फोन",
          "water_tank": "Emergency Water Tank",
          "yes": "आकस्मिक"
        },
        "highway": {
          "abandoned": "छोडिएको राजमार्ग",
          "bridleway": "Bridleway",
          "bus_guideway": "Guided Bus Lane",
          "bus_stop": "बस बिसौनी",
          "construction": "निर्माणाधिन राजमार्ग",
          "corridor": "Corridor",
          "cycleway": "साइकल मार्ग",
          "elevator": "भर्‍याङ",
          "emergency_access_point": "Emergency Access Point",
          "footway": "पदमार्ग",
          "ford": "Ford",
          "give_way": "Give Way Sign",
          "living_street": "आवासिय गल्ली",
          "milestone": "कोसेढुङ्गा",
          "motorway": "मोटरमार्ग",
          "motorway_junction": "मोटरमार्ग मिलन बिन्दु",
          "motorway_link": "मोटरमार्ग सडक",
          "passing_place": "Passing Place",
          "path": "पथ",
          "pedestrian": "पैदल मार्ग",
          "platform": "मञ्च",
          "primary": "प्राथमिक सडक",
          "primary_link": "प्राथमिक सडक",
          "proposed": "प्रस्तावित सडक",
          "raceway": "रेसवे",
          "residential": "आवासीय सडक",
          "rest_area": "विश्राम क्षेत्र",
          "road": "सडक",
          "secondary": "माध्यमिक सडक",
          "secondary_link": "माध्यमिक सडक",
          "service": "सर्भिस सडक",
          "services": "Motorway Services",
          "speed_camera": "गति क्यामेरा",
          "steps": "खुट्किलाहरू",
          "stop": "रोक्ने चिह्न",
          "street_lamp": "सडक बत्ती",
          "tertiary": "Tertiary Road",
          "tertiary_link": "Tertiary Road",
          "track": "ट्रयाक",
          "traffic_signals": "ट्राफिक चिह्नहरू",
          "trail": "गोरेटो बाटो",
          "trunk": "Trunk Road",
          "trunk_link": "Trunk Road",
          "turning_loop": "Turning Loop",
          "unclassified": "Unclassified Road",
          "yes": "सडक"
        },
        "historic": {
          "archaeological_site": "Archaeological Site",
          "battlefield": "Battlefield",
          "boundary_stone": "Boundary Stone",
          "building": "Historic Building",
          "bunker": "बङ्कर",
          "castle": "गढी",
          "church": "गिर्जाघर",
          "city_gate": "सहर प्रवेशद्वार",
          "citywalls": "सहरी पर्खाल",
          "fort": "किल्ला",
          "heritage": "सम्पादा क्षेत्र",
          "house": "घर",
          "icon": "प्रतिमा",
          "manor": "Manor",
          "memorial": "स्मारक",
          "mine": "खानी",
          "mine_shaft": "Mine Shaft",
          "monument": "सम्पदा",
          "roman_road": "Roman Road",
          "ruins": "भग्नावशेषहरू",
          "stone": "पत्थर",
          "tomb": "चिहान",
          "tower": "टावर",
          "wayside_cross": "Wayside Cross",
          "wayside_shrine": "Wayside Shrine",
          "wreck": "Wreck",
          "yes": "ऐतिहासिक स्थल"
        },
        "junction": {
          "yes": "Junction"
        },
        "landuse": {
          "allotments": "Allotments",
          "basin": "बेसिन",
          "brownfield": "Brownfield Land",
          "cemetery": "Cemetery",
          "commercial": "व्यवसायिक क्षेत्र",
          "conservation": "संरक्षण",
          "construction": "निर्माण",
          "farm": "खेती",
          "farmland": "खेतीयोग्य जमिन",
          "farmyard": "खेत",
          "forest": "वन",
          "garages": "ग्यारेजहरू",
          "grass": "घाँस",
          "greenfield": "Greenfield Land",
          "industrial": "औद्योगिक क्षेत्र",
          "landfill": "ल्यान्डफिल",
          "meadow": "घाँसेमैदान",
          "military": "सैनिक इलाका",
          "mine": "खानी",
          "orchard": "Orchard",
          "quarry": "Quarry",
          "railway": "रेलमार्ग",
          "recreation_ground": "Recreation Ground",
          "reservoir": "जलाशय",
          "reservoir_watershed": "Reservoir Watershed",
          "residential": "आवासीय क्षेत्र",
          "retail": "खुद्रा",
          "road": "सडक क्षेत्र",
          "village_green": "Village Green",
          "vineyard": "अङ्गुर-बगैँचा",
          "yes": "भू-उपयोग"
        },
        "leisure": {
          "beach_resort": "Beach Resort",
          "bird_hide": "Bird Hide",
          "common": "Common Land",
          "dog_park": "Dog Park",
          "firepit": "Fire Pit",
          "fishing": "Fishing Area",
          "fitness_centre": "Fitness Centre",
          "fitness_station": "Fitness Station",
          "garden": "बगैँचा",
          "golf_course": "Golf Course",
          "horse_riding": "Horse Riding",
          "ice_rink": "Ice Rink",
          "marina": "Marina",
          "miniature_golf": "Miniature Golf",
          "nature_reserve": "Nature Reserve",
          "park": "उद्यान",
          "pitch": "Sports Pitch",
          "playground": "खेलमैदान",
          "recreation_ground": "Recreation Ground",
          "resort": "रिसोर्ट",
          "sauna": "सौना",
          "slipway": "Slipway",
          "sports_centre": "Sports Centre",
          "stadium": "रङ्गाशाला",
          "swimming_pool": "पौली पोखरी",
          "track": "Running Track",
          "water_park": "Water Park",
          "yes": "फुर्सद"
        },
        "man_made": {
          "adit": "Adit",
          "beacon": "Beacon",
          "beehive": "Bee Hive",
          "breakwater": "Breakwater",
          "bridge": "पुल",
          "bunker_silo": "बङ्कर",
          "chimney": "चिम्नी",
          "crane": "क्रेन",
          "dolphin": "Mooring Post",
          "dyke": "Dyke",
          "embankment": "तटबन्ध",
          "flagpole": "Flagpole",
          "gasometer": "Gasometer",
          "groyne": "Groyne",
          "kiln": "Kiln",
          "lighthouse": "प्रकाश घर",
          "mast": "Mast",
          "mine": "खानी",
          "mineshaft": "Mine Shaft",
          "monitoring_station": "Monitoring Station",
          "petroleum_well": "Petroleum Well",
          "pier": "Pier",
          "pipeline": "पाइपरेखा",
          "silo": "Silo",
          "storage_tank": "Storage Tank",
          "surveillance": "Surveillance",
          "tower": "टावर",
          "wastewater_plant": "Wastewater Plant",
          "water_tower": "Water Tower",
          "water_well": "Well",
          "water_works": "Water Works",
          "watermill": "Water Mill",
          "windmill": "Wind Mill",
          "works": "कारखाना",
          "yes": "Man-made"
        },
        "military": {
          "airfield": "Military Airfield",
          "barracks": "सैनिक घर",
          "bunker": "बङ्कर",
          "yes": "सेना"
        },
        "mountain_pass": {
          "yes": "पर्वतीय भञ्ज्याङ"
        },
        "natural": {
          "bay": "खाडी",
          "beach": "समुद्र किनारा",
          "cape": "Cape",
          "cave_entrance": "Cave Entrance",
          "cliff": "Cliff",
          "crater": "क्रेटर",
          "dune": "Dune",
          "fell": "Fell",
          "fjord": "Fjord",
          "forest": "वन",
          "geyser": "Geyser",
          "glacier": "हिमनदी",
          "grassland": "घाँसेमैदान",
          "heath": "स्वास्थ्य",
          "hill": "डाँडा",
          "island": "द्विप",
          "land": "जमिन",
          "marsh": "धाप",
          "moor": "Moor",
          "mud": "हिलो मााटो",
          "peak": "शिखर",
          "point": "बिन्दु",
          "reef": "Reef",
          "ridge": "Ridge",
          "rock": "रक",
          "saddle": "Saddle",
          "sand": "बालुवा",
          "scree": "Scree",
          "scrub": "Scrub",
          "spring": "स्प्रिङ",
          "stone": "पत्थर",
          "strait": "Strait",
          "tree": "रूख",
          "valley": "उपत्यका",
          "volcano": "ज्वालामुखी",
          "water": "पानी",
          "wetland": "सिमसार",
          "wood": "कुञ्ज"
        },
        "office": {
          "accountant": "लेखापाल",
          "administrative": "प्रबन्धकीय स्थल",
          "architect": "आर्किटेक्ट",
          "association": "Association",
          "company": "कम्पनी",
          "educational_institution": "Educational Institution",
          "employment_agency": "Employment Agency",
          "estate_agent": "Estate Agent",
          "government": "सरकारी कार्यालय",
          "insurance": "बीमा कार्यालय",
          "it": "आइटी कार्यालय",
          "lawyer": "वकिल",
          "ngo": "एनजिओ कार्यलय",
          "telecommunication": "दूरसञ्चार कार्यलय",
          "travel_agent": "ट्राभल एजेन्सी",
          "yes": "कार्यलय"
        },
        "place": {
          "allotments": "Allotments",
          "city": "शहर",
          "city_block": "City Block",
          "country": "देश",
          "county": "ईलाका",
          "farm": "खेती",
          "hamlet": "ह्याम्लेट",
          "house": "घर",
          "houses": "घरहरू",
          "island": "द्विप",
          "islet": "Islet",
          "isolated_dwelling": "एक्लो बसस्थान",
          "locality": "वसोबास",
          "municipality": "नगरपालिका",
          "neighbourhood": "छिमेक",
          "postcode": "पोस्ट कोड",
          "quarter": "Quarter",
          "region": "क्षेत्र",
          "sea": "समुद्र",
          "square": "Square",
          "state": "राज्य",
          "subdivision": "Subdivision",
          "suburb": "Suburb",
          "town": "नगर",
          "unincorporated_area": "Unincorporated Area",
          "village": "गाउँ",
          "yes": "स्थानहरू"
        },
        "railway": {
          "abandoned": "परित्यक्त रेलमार्ग",
          "construction": "Railway under Construction",
          "disused": "Disused Railway",
          "funicular": "Funicular Railway",
          "halt": "Train Stop",
          "junction": "रेलमार्ग जङ्सन",
          "level_crossing": "Level Crossing",
          "light_rail": "Light Rail",
          "miniature": "Miniature Rail",
          "monorail": "Monorail",
          "narrow_gauge": "Narrow Gauge Railway",
          "platform": "Railway Platform",
          "preserved": "Preserved Railway",
          "proposed": "Proposed Railway",
          "spur": "Railway Spur",
          "station": "Railway Station",
          "stop": "Railway Stop",
          "subway": "Subway",
          "subway_entrance": "Subway Entrance",
          "switch": "Railway Points",
          "tram": "Tramway",
          "tram_stop": "Tram Stop"
        },
        "shop": {
          "alcohol": "Off License",
          "antiques": "Antiques",
          "art": "Art Shop",
          "bakery": "बेकरी",
          "beauty": "सौन्दर्य पसल",
          "beverages": "पेय पसल",
          "bicycle": "साइकल पसल",
          "bookmaker": "Bookmaker",
          "books": "पुस्तक पसल",
          "boutique": "बुटिक",
          "butcher": "मासु पसल",
          "car": "कार पसल",
          "car_parts": "कार पाटपुर्जा",
          "car_repair": "कार मर्मत",
          "carpet": "कार्पेट पसल",
          "charity": "दान पसल",
          "chemist": "औषधि पसल",
          "clothes": "कपडा पसल",
          "computer": "कम्प्युटर पसल",
          "confectionery": "चकलेट पसल",
          "convenience": "Convenience Store",
          "copyshop": "कापी पसल",
          "cosmetics": "शृङ्गार पसल",
          "deli": "Deli",
          "department_store": "डिपार्टमेन्ट स्टोर",
          "discount": "Discount Items Shop",
          "doityourself": "Do-It-Yourself",
          "dry_cleaning": "ड्राइ क्लिनिङ",
          "electronics": "इलेक्ट्रोनिक्स पसल",
          "estate_agent": "घरजग्गा एजेन्ट",
          "farm": "किसान पसल",
          "fashion": "फेसन पसल",
          "fish": "माछा पसल",
          "florist": "पुष्प व्यवसायी",
          "food": "भोजनालय",
          "funeral_directors": "Funeral Directors",
          "furniture": "फर्निचर",
          "gallery": "सङ्ग्रहालय",
          "garden_centre": "Garden Centre",
          "general": "किराना पसल",
          "gift": "उपहार पसल",
          "greengrocer": "तरकारी पसल",
          "grocery": "किराना पसल",
          "hairdresser": "नाइ पसल",
          "hardware": "हार्डवेयर पसल",
          "hifi": "हाइ-फाइ",
          "houseware": "Houseware Shop",
          "interior_decoration": "Interior Decoration",
          "jewelry": "गहना पसल",
          "kiosk": "Kiosk Shop",
          "kitchen": "Kitchen Shop",
          "laundry": "Laundry",
          "lottery": "Lottery",
          "mall": "सपिङ मल",
          "market": "बजार",
          "massage": "Massage",
          "mobile_phone": "मोबाइल फोन पसल",
          "motorcycle": "मोटरसाइकल पसल",
          "music": "संगीत पसल",
          "newsagent": "सम्वाददाता",
          "optician": "अप्टिसियन",
          "organic": "Organic Food Shop",
          "outdoor": "Outdoor Shop",
          "paint": "Paint Shop",
          "pawnbroker": "Pawnbroker",
          "pet": "पाल्तु पसल",
          "pharmacy": "औषधी पसल",
          "photo": "Photo Shop",
          "seafood": "Sea Food",
          "second_hand": "Second-hand Shop",
          "shoes": "जुत्ता पसल",
          "sports": "खेलकुद सामग्री पसल",
          "stationery": "Stationery Shop",
          "supermarket": "Supermarket",
          "tailor": "सुचीकार",
          "ticket": "Ticket Shop",
          "tobacco": "Tobacco Shop",
          "toys": "खेलौना पसल",
          "travel_agency": "Travel Agency",
          "tyres": "Tyre Shop",
          "vacant": "Vacant Shop",
          "variety_store": "Variety Store",
          "video": "भिडियो पसल",
          "wine": "Wine Store",
          "yes": "पसल"
        },
        "tourism": {
          "alpine_hut": "Alpine Hut",
          "apartment": "Holiday Apartment",
          "artwork": "Artwork",
          "attraction": "आकर्षण",
          "bed_and_breakfast": "बेड र ब्रेकफास्ट",
          "cabin": "क्याबिन",
          "camp_site": "Camp Site",
          "caravan_site": "Caravan Site",
          "chalet": "Chalet",
          "gallery": "सङ्ग्रहालय",
          "guest_house": "अतिथी घर",
          "hostel": "होस्टल",
          "hotel": "होटल",
          "information": "सूचना",
          "motel": "Motel",
          "museum": "सङ्ग्रहालय",
          "picnic_site": "वनभोज स्थल",
          "theme_park": "Theme Park",
          "viewpoint": "अवलोकन केन्द्र",
          "zoo": "चिडियाखाना"
        },
        "tunnel": {
          "building_passage": "Building Passage",
          "culvert": "Culvert",
          "yes": "सुरुङ"
        },
        "waterway": {
          "artificial": "Artificial Waterway",
          "boatyard": "Boatyard",
          "canal": "नहर",
          "dam": "ड्याम",
          "derelict_canal": "Derelict Canal",
          "ditch": "खाल्डो",
          "dock": "डक गर्नुहोस्",
          "drain": "ढल",
          "lock": "Lock",
          "lock_gate": "Lock Gate",
          "mooring": "Mooring",
          "rapids": "भङ्गालो",
          "river": "नदी",
          "stream": "प्रवाह",
          "wadi": "Wadi",
          "waterfall": "झरना",
          "weir": "Weir",
          "yes": "जलमार्ग"
        }
      },
      "prefix_format": "%{name}"
    }
  },
  "javascripts": {
    "changesets": {
      "show": {
        "comment": "टिप्पणी",
        "hide_comment": "लुकाउ",
        "subscribe": "सवस्क्रिप्ट",
        "unhide_comment": "unhide",
        "unsubscribe": "सदस्यता खारेज गर्नुहोस्"
      }
    },
    "close": "बन्द गर्नुहोस्",
    "context": {
      "add_note": "यहाँ एउटा टिपोट थप्नुहोस्",
      "centre_map": "Centre map here",
      "directions_from": "यहाँबाट दिशा सुरु",
      "directions_to": "Directions to here",
      "query_features": "Query features",
      "show_address": "ठेगाना देखाउनुहोस्"
    },
    "directions": {
      "ascend": "Ascend",
      "descend": "Descend",
      "directions": "Directions",
      "distance": "Distance",
      "engines": {
        "fossgis_osrm_bike": "Bicycle (OSRM)",
        "fossgis_osrm_car": "Car (OSRM)",
        "fossgis_osrm_foot": "Foot (OSRM)",
        "graphhopper_bicycle": "Bicycle (GraphHopper)",
        "graphhopper_car": "Car (GraphHopper)",
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
        "destination_without_exit": "Reach destination",
        "end_oneway_without_exit": "End of one-way on %{name}",
        "endofroad_left_without_exit": "At the end of the road turn left onto %{name}",
        "endofroad_right_without_exit": "At the end of the road turn right onto %{name}",
        "exit_counts": {
          "eighth": "८अौँ",
          "fifth": "५अौँ",
          "first": "प्रथम",
          "fourth": "चौँथो",
          "ninth": "९अौँ",
          "second": "द्वितीय",
          "seventh": "७अौँ",
          "sixth": "छैटौँ",
          "tenth": "१०अौँ",
          "third": "तेस्रो"
        },
        "exit_roundabout": "Exit roundabout onto %{name}",
        "follow_without_exit": "Follow %{name}",
        "fork_left_without_exit": "At the fork turn left onto %{name}",
        "fork_right_without_exit": "At the fork turn right onto %{name}",
        "leave_roundabout_without_exit": "Leave roundabout - %{name}",
        "merge_left_without_exit": "Merge left onto %{name}",
        "merge_right_without_exit": "Merge right onto %{name}",
        "offramp_left": "Take the ramp on the left",
        "offramp_left_with_directions": "Take the ramp on the left towards %{directions}",
        "offramp_left_with_exit": "Take exit %{exit} on the left",
        "offramp_left_with_exit_directions": "Take exit %{exit} on the left towards %{directions}",
        "offramp_left_with_exit_name": "Take exit %{exit} on the left onto %{name}",
        "offramp_left_with_exit_name_directions": "Take exit %{exit} on the left onto %{name}, towards %{directions}",
        "offramp_left_with_name": "Take the ramp on the left onto %{name}",
        "offramp_left_with_name_directions": "Take the ramp on the left onto %{name}, towards %{directions}",
        "offramp_right": "Take the ramp on the right",
        "offramp_right_with_directions": "Take the ramp on the right towards %{directions}",
        "offramp_right_with_exit": "Take exit %{exit} on the right",
        "offramp_right_with_exit_directions": "Take exit %{exit} on the right towards %{directions}",
        "offramp_right_with_exit_name": "Take exit %{exit} on the right onto %{name}",
        "offramp_right_with_exit_name_directions": "Take exit %{exit} on the right onto %{name}, towards %{directions}",
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
        "roundabout_with_exit_ordinal": "At roundabout take %{exit} exit onto %{name}",
        "roundabout_without_exit": "At roundabout take exit onto %{name}",
        "sharp_left_without_exit": "Sharp left onto %{name}",
        "sharp_right_without_exit": "Sharp right onto %{name}",
        "slight_left_without_exit": "Slight left onto %{name}",
        "slight_right_without_exit": "Slight right onto %{name}",
        "start_without_exit": "Start on %{name}",
        "stay_roundabout_without_exit": "Stay on roundabout - %{name}",
        "turn_left_without_exit": "Turn left onto %{name}",
        "turn_right_without_exit": "Turn right onto %{name}",
        "unnamed": "unnamed road",
        "uturn_without_exit": "U-turn along %{name}",
        "via_point_without_exit": "(via point)"
      },
      "time": "समय"
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
        "cycle_map": "Cycle Map",
        "hot": "Humanitarian",
        "standard": "मानक",
        "transport_map": "Transport Map"
      },
      "copyright": "© <a href='%{copyright_url}'>OpenStreetMap contributors</a>",
      "donate_link_text": "<a class='donate-attr' href='%{donate_url}'>Make a Donation</a>",
      "hotosm": "Tiles style by <a href='%{hotosm_url}' target='_blank'>Humanitarian OpenStreetMap Team</a> hosted by <a href='%{osmfrance_url}' target='_blank'>OpenStreetMap France</a>",
      "layers": {
        "data": "Map Data",
        "gps": "Public GPS Traces",
        "header": "म्याप लेयरहरू",
        "notes": "म्याप टिप्पणीहरू",
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
        "title": "Show My Location"
      },
      "terms": "<a href='%{terms_url}' target='_blank'>Website and API terms</a>",
      "thunderforest": "Tiles courtesy of <a href='%{thunderforest_url}' target='_blank'>Andy Allan</a>",
      "zoom": {
        "in": "ठुलो पार्नुहोस",
        "out": "सानो पार्नुहोस"
      }
    },
    "notes": {
      "new": {
        "add": "Add Note",
        "advice": "Your note is public and may be used to update the map, so don't enter personal information, or information from copyrighted maps or directory listings.",
        "intro": "Spotted a mistake or something missing? Let other mappers know so we can fix it. Move the marker to the correct position and type a note to explain the problem."
      },
      "show": {
        "anonymous_warning": "This note includes comments from anonymous users which should be independently verified.",
        "comment": "टिप्पणी",
        "comment_and_resolve": "Comment & Resolve",
        "hide": "लुकाउनुहोस्",
        "reactivate": "Reactivate",
        "resolve": "Resolve"
      }
    },
    "query": {
      "error": "Error contacting %{server}: %{error}",
      "node": "नोड",
      "nothing_found": "No features found",
      "relation": "रिलेशन",
      "timeout": "Timeout contacting %{server}",
      "way": "बाटो"
    },
    "share": {
      "cancel": "रद्द गर्नुहोस्",
      "center_marker": "Center map on marker",
      "custom_dimensions": "Set custom dimensions",
      "download": "डाउनलोड",
      "embed": "एचटीएमएल",
      "format": "ढाँचा:",
      "geo_uri": "Geo URI",
      "image": "छवि",
      "image_size": "Image will show standard layer at ",
      "include_marker": "Include marker",
      "link": "Link or HTML",
      "long_link": "लिङ्क",
      "only_standard_layer": "Only the standard layer can be exported as an image",
      "paste_html": "वेबसाइट इम्बेड गर्न HTML पेस्ट गर्नुहोस्",
      "scale": "Scale:",
      "short_link": "Short Link",
      "short_url": "Short URL",
      "title": "आदान-प्रदान गर्नुहोस्",
      "view_larger_map": "View Larger Map"
    },
    "site": {
      "createnote_disabled_tooltip": "Zoom in to add a note to the map",
      "createnote_tooltip": "Add a note to the map",
      "edit_disabled_tooltip": "Zoom in to edit the map",
      "edit_tooltip": "Edit the map",
      "map_data_zoom_in_tooltip": "Zoom in to see map data",
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
      "anon_edits_link_text": "Find out why this is the case.",
      "flash_player_required_html": "You need a Flash player to use Potlatch, the OpenStreetMap Flash editor. You can <a href=\"https://get.adobe.com/flashplayer/\">download Flash Player from Adobe.com</a>. <a href=\"https://wiki.openstreetmap.org/wiki/Editing\">Several other options</a> are also available for editing OpenStreetMap.",
      "id_not_configured": "iD has not been configured",
      "no_iframe_support": "Your browser doesn't support HTML iframes, which are necessary for this feature.",
      "not_public": "You have not set your edits to be public.",
      "not_public_description_html": "You can no longer edit the map unless you do so. You can set your edits as public from your %{user_page}.",
      "potlatch2_not_configured": "Potlatch 2 has not been configured - please see https://wiki.openstreetmap.org/wiki/The_Rails_Port#Potlatch_2 for more information",
      "potlatch2_unsaved_changes": "You have unsaved changes. (To save in Potlatch 2, you should click save.)",
      "potlatch_unsaved_changes": "You have unsaved changes. (To save in Potlatch, you should deselect the current way or point, if editing in live mode, or click save if you have a save button.)",
      "user_page_link": "प्रयोगकर्ता पृष्ठ"
    },
    "index": {
      "remote_failed": "Editing failed - make sure JOSM or Merkaartor is loaded and the remote control option is enabled"
    },
    "sidebar": {
      "search_results": "Search Results"
    }
  },
  "time": {
    "am": "बिहान",
    "formats": {
      "blog": "%e %B %Y",
      "default": "%a, %d %b %Y %H:%M:%S %z",
      "friendly": "%e %B %Y मा %H:%M",
      "long": "%B %d, %Y %H:%M",
      "short": "%d %b %H:%M"
    },
    "pm": "बेलुका"
  }
});
