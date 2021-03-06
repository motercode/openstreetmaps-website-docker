I18n.translations || (I18n.translations = {});
I18n.translations["diq"] = I18n.extend((I18n.translations["diq"] || {}), {
  "browse": {
    "start_rjs": {
      "feature_warning": "Loading %{num_features} features, which may make your browser slow or unresponsive. Are sure you want to display this data?",
      "load_data": "Malumat Barke",
      "loading": "Bar beno..."
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
      "marker_text": "Lokasyonê rocekê cıkewtışi"
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
        "level8": "City Boundary",
        "level9": "Village Boundary"
      },
      "prefix": {
        "aerialway": {
          "cable_car": "Kabloy ereber",
          "chair_lift": "Chair Lift",
          "drag_lift": "Drag Lift",
          "gondola": "Telesiyej",
          "platter": "Platter Lift",
          "pylon": "Pylon",
          "station": "İstasyona teleferiki",
          "t-bar": "T-Bar Lift"
        },
        "aeroway": {
          "aerodrome": "Hewaherun",
          "airstrip": "Airstrip",
          "apron": "Apron",
          "gate": "Keyber",
          "hangar": "Hangar",
          "helipad": "Hruna Helikopteri",
          "holding_position": "Holding Position",
          "parking_position": "Parking Position",
          "runway": "Pista teyera",
          "taxiway": "Raya Texsiyan",
          "terminal": "Terminal"
        },
        "amenity": {
          "animal_shelter": "Kozıkê heywanan",
          "arts_centre": "Merkeze Zagoni",
          "atm": "ATM",
          "bank": "Banka",
          "bar": "Bar",
          "bbq": "BBQ",
          "bench": "Bank",
          "bicycle_parking": "Perka Bisiklet",
          "bicycle_rental": "Bisiklet İcar kerden",
          "biergarten": "Hegay Bira",
          "boat_rental": "Bot icar",
          "brothel": "Kerxane",
          "bureau_de_change": "Buroye Dovizan",
          "bus_station": "Otogar",
          "cafe": "Cafe",
          "car_rental": "Wesayıt İcar kerden",
          "car_sharing": "Wesayıt Heserekerden",
          "car_wash": "Wesayıt Şuwayış",
          "casino": "Kasino",
          "charging_station": "İstasyona Pırkerden",
          "childcare": "Qeç weynayış",
          "cinema": "Sinema",
          "clinic": "Klinik",
          "clock": "Saete",
          "college": "Lise",
          "community_centre": "Merkezê Cemeati",
          "courthouse": "Adliye",
          "crematorium": "Krematoryum",
          "dentist": "Dındandar",
          "doctors": "Dıxtori",
          "drinking_water": "Awa Şımıtışi",
          "driving_school": "Kursa Ramenan",
          "embassy": "Sefirey",
          "fast_food": "Fast Food",
          "ferry_terminal": "Terminala Feriboter",
          "fire_station": "Itfaiye",
          "food_court": "Kerwanseray",
          "fountain": "Fıskiye",
          "fuel": "Petrol",
          "gambling": "Kumarxane",
          "grave_yard": "Mezla ser",
          "grit_bin": "Grit Bin",
          "hospital": "Nêweşxane",
          "hunting_stand": "Standê Seydwanan",
          "ice_cream": "Dondırme",
          "kindergarten": "Kreş",
          "library": "Kıtıbxane",
          "marketplace": "Heruna bazari",
          "monastery": "Manastır",
          "motorcycle_parking": "Motorpiskilet park kerdış",
          "nightclub": "Kluba Şewer",
          "nursing_home": "Rehatxane",
          "office": "Ofis",
          "parking": "Otopark",
          "parking_entrance": "Keyberê par kerdışi",
          "parking_space": "Parking Space",
          "pharmacy": "Eczaxane",
          "place_of_worship": "Bawerxane",
          "police": "Pulis",
          "post_box": "Dora Postay",
          "post_office": "Postexane",
          "preschool": "Ver-Wendxane",
          "prison": "Hepısxane",
          "pub": "Biraxane",
          "public_building": "Binaya Şaran",
          "recycling": "Heruna peyd amayışi",
          "restaurant": "Restaurant",
          "retirement_home": "Weynexane",
          "sauna": "Hemam",
          "school": "Wendxane",
          "shelter": "Starek",
          "shop": "Dukan",
          "shower": "Çımecek",
          "social_centre": "Merkezo Sosyal",
          "social_club": "Kluba Sosyal",
          "social_facility": "Tesiso sosyal",
          "studio": "Studyo",
          "swimming_pool": "Dola Asnawkerdışi",
          "taxi": "Taksi",
          "telephone": "Telafun",
          "theatre": "Tiyatro",
          "toilets": "Tuwalet",
          "townhall": "Binay Beledi",
          "university": "Uniwersita",
          "vending_machine": "Makineya Roten",
          "veterinary": "Veteriner",
          "village_hall": "Wedaya Dewe",
          "waste_basket": "Tenkey Sıloy",
          "waste_disposal": "Cay sıloy",
          "water_point": "Water Point",
          "youth_centre": "Merkezê Gencan"
        },
        "boundary": {
          "administrative": "Sinorê İdari",
          "census": "Sinora amora nıfusi",
          "national_park": "Perka Milli",
          "protected_area": "Star biyaye erd"
        },
        "bridge": {
          "aqueduct": "Kemerê awer",
          "boardwalk": "Boardwalk",
          "suspension": "Pırdo layın",
          "swing": "Pırde Asnawi",
          "viaduct": "Viyaduk",
          "yes": "Pırd"
        },
        "building": {
          "yes": "Bina"
        },
        "craft": {
          "brewery": "Fabriqay bira",
          "carpenter": "Merengoz",
          "electrician": "Ceyranwan",
          "gardener": "Bahçıvan",
          "painter": "Dawtewan",
          "photographer": "Fotrafkar",
          "plumber": "Tesisatwan",
          "shoemaker": "Postalwan",
          "tailor": "Deştoğ",
          "yes": "Dukanê çiy"
        },
        "emergency": {
          "ambulance_station": "İstasyona ambulans",
          "assembly_point": "Assembly Point",
          "defibrillator": "Defibrillator ( makinay qelbi)",
          "landing_site": "Cay war amyayışi",
          "phone": "Vistren Telefon",
          "water_tank": "Emergency Water Tank",
          "yes": "Emergency"
        },
        "highway": {
          "abandoned": "Raya kehan",
          "bridleway": "Raya Estoran",
          "bus_guideway": "İsleg raya otobosan",
          "bus_stop": "İstasyonê Otobozan",
          "construction": "Vıraziyê weziyet de ray",
          "corridor": "Corridor",
          "cycleway": "Raya Bisikleter",
          "elevator": "Esansor",
          "emergency_access_point": "Cayê vistra resnayışi",
          "footway": "Raya geyrayışi",
          "ford": "Balan",
          "give_way": "Give Way Sign",
          "living_street": "Kuçey Cıwiyayışi",
          "milestone": "Siyê kilometri",
          "motorway": "Otoray",
          "motorway_junction": "Kewşaxa Otorayer",
          "motorway_link": "Raya Otoray",
          "passing_place": "Passing Place",
          "path": "Raye",
          "pedestrian": "Raya ke wesayıti rê racnayiya",
          "platform": "Platform",
          "primary": "Raya Dewlet",
          "primary_link": "Raya Dewlet",
          "proposed": "Plan bıyayi ray",
          "raceway": "Raya Vestışi",
          "residential": "Are Ray",
          "rest_area": "Cay solıxgrotışi",
          "road": "Ray",
          "secondary": "Raya wılayeti",
          "secondary_link": "Grey raya wılayeti",
          "service": "Raya serwisi",
          "services": "Tesisê mêli",
          "speed_camera": "Kemeraya Vıstrın",
          "steps": "Merwani",
          "stop": "Stop Sign",
          "street_lamp": "Lumbay kuçi",
          "tertiary": "Raya Dewan",
          "tertiary_link": "Raya Dewan",
          "track": "Raya Herın",
          "traffic_signals": "Signalê trafiki",
          "trail": "Şop",
          "trunk": "Letebıyayi ser ray",
          "trunk_link": "Lwtebıyayi ser ray",
          "turning_loop": "Turning Loop",
          "unclassified": "Nêrêzbıyayi ray",
          "yes": "Ray"
        },
        "historic": {
          "archaeological_site": "Arkeolojik Ca",
          "battlefield": "Cay herbi",
          "boundary_stone": "Kemera Sinori",
          "building": "Binaya verên",
          "bunker": "Stare",
          "castle": "Qela",
          "church": "Kılise",
          "city_gate": "Keyberê Sûker",
          "citywalls": "Dêsê Sûker",
          "fort": "Qula",
          "heritage": "Cayo Miras",
          "house": "Keye",
          "icon": "Ikon",
          "manor": "Kosk",
          "memorial": "Qub",
          "mine": "Mahden",
          "mine_shaft": "Mine Shaft",
          "monument": "Ziyarık",
          "roman_road": "Raya Roma",
          "ruins": "Pagi",
          "stone": "Kemere",
          "tomb": "Mezel",
          "tower": "Kule",
          "wayside_cross": "Wayside Cross",
          "wayside_shrine": "Wayside Shrine",
          "wreck": "Gemiya Gumbiyayi",
          "yes": "Historic Site"
        },
        "junction": {
          "yes": "Çatray"
        },
        "landuse": {
          "allotments": "Bostan",
          "basin": "Dol",
          "brownfield": "Erdo bece",
          "cemetery": "Mezlaser",
          "commercial": "Cayê Ticareti u Xızmeti",
          "conservation": "Qısekerdış",
          "construction": "İnşaat",
          "farm": "Cıtinin",
          "farmland": "Erdê Ziraati",
          "farmyard": "İsiga çıfligi",
          "forest": "Mêşe",
          "garages": "Garac",
          "grass": "Çim",
          "greenfield": "Cayo Awi u khoyi",
          "industrial": "Endustri",
          "landfill": "Pag",
          "meadow": "Çayır",
          "military": "Eskeri Mıntıqa",
          "mine": "Mahden",
          "orchard": "Hêga",
          "quarry": "Adırgan",
          "railway": "Rayatiran",
          "recreation_ground": "Parka hewin",
          "reservoir": "Dola Beraci",
          "reservoir_watershed": "Merga awer",
          "residential": "Heruna Cıwiyayışi",
          "retail": "Esnaf",
          "road": "Cay ray",
          "village_green": "Cayo kıho",
          "vineyard": "Rez",
          "yes": "Karıyayışa erdi"
        },
        "leisure": {
          "beach_resort": "Dewa plajın",
          "bird_hide": "Cay mıriçık weynayışi",
          "common": "Umumi erd",
          "dog_park": "Parka kutıkan",
          "firepit": "Fire Pit",
          "fishing": "Heruna masan",
          "fitness_centre": "Fitness Merkezi",
          "fitness_station": "Spor Merkezi",
          "garden": "Hega",
          "golf_course": "Sağay golfi",
          "horse_riding": "Bergir cınayış",
          "ice_rink": "Patena cemedi",
          "marina": "Marina",
          "miniature_golf": "Minyatür Golf",
          "nature_reserve": "Cay gem starnayışi",
          "park": "Perk",
          "pitch": "Seğay spori",
          "playground": "Parka qeçkan",
          "recreation_ground": "Parka hewin",
          "resort": "Resort",
          "sauna": "Sauna",
          "slipway": "Raya xızxızoki",
          "sports_centre": "Merkezê Spori",
          "stadium": "Stadyum",
          "swimming_pool": "Dola Asnawkerdışi",
          "track": "Raya remayışi",
          "water_park": "Aquapark",
          "yes": "Xoser zeman"
        },
        "man_made": {
          "adit": "Adit",
          "beacon": "Beacon",
          "beehive": "Bee Hive",
          "breakwater": "Breakwater",
          "bridge": "Pırd",
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
          "lighthouse": "Parka awer",
          "mast": "Mast",
          "mine": "Mine",
          "mineshaft": "Mine Shaft",
          "monitoring_station": "Monitoring Station",
          "petroleum_well": "Petroleum Well",
          "pier": "Pier",
          "pipeline": "Xeta boriyer",
          "silo": "Silo",
          "storage_tank": "Storage Tank",
          "surveillance": "Surveillance",
          "tower": "Kule",
          "wastewater_plant": "Wastewater Plant",
          "water_tower": "Water Tower",
          "water_well": "Well",
          "water_works": "Water Works",
          "watermill": "Water Mill",
          "windmill": "Wind Mill",
          "works": "Fabırqe",
          "yes": "Vıraştena insanan"
        },
        "military": {
          "airfield": "Hewaraya Aspariye",
          "barracks": "Kışla",
          "bunker": "Stare",
          "yes": "Eskeri"
        },
        "mountain_pass": {
          "yes": "Ravêreka Koy"
        },
        "natural": {
          "bay": "Delhiz",
          "beach": "Plac",
          "cape": "Pırnık",
          "cave_entrance": "Dekewtena Laner",
          "cliff": "Pereten",
          "crater": "Krater",
          "dune": "Kımıl",
          "fell": "Gedugo wışk",
          "fjord": "Fiord",
          "forest": "Mêşe",
          "geyser": "Gayzer",
          "glacier": "Cemeden",
          "grassland": "Çere",
          "heath": "Merä",
          "hill": "Gedug",
          "island": "Ade",
          "land": "Wer",
          "marsh": "Lınce",
          "moor": "Lıncane",
          "mud": "Dawte",
          "peak": "Gıl /sersıq",
          "point": "Pırn",
          "reef": "Resif",
          "ridge": "Sud",
          "rock": "Qere",
          "saddle": "Cıl",
          "sand": "Qum",
          "scree": "Heyelan",
          "scrub": "Bırık",
          "spring": "Ênêk",
          "stone": "Kemere",
          "strait": "Balan",
          "tree": "Dar",
          "valley": "Dere",
          "volcano": "Wolkan",
          "water": "Aw",
          "wetland": "awe",
          "wood": "Meşe"
        },
        "office": {
          "accountant": "Muhasebedar",
          "administrative": "İdare",
          "architect": "Mimar",
          "association": "Association",
          "company": "Şirket",
          "educational_institution": "Educational Institution",
          "employment_agency": "İdareya kar vinayışi",
          "estate_agent": "Emlakwan",
          "government": "Dairey Dewlet",
          "insurance": "Ofisê sigorta",
          "it": "IT Office",
          "lawyer": "Abuqat",
          "ngo": "Ofisa Sivil cemaati",
          "telecommunication": "Ofisa Telekomunikasyoni",
          "travel_agent": "Acentaya Seyahati",
          "yes": "Ofis"
        },
        "place": {
          "allotments": "Bostan",
          "city": "Sûke",
          "city_block": "City Block",
          "country": "Dewlete",
          "county": "Welat",
          "farm": "Erdo Bec",
          "hamlet": "Mezra",
          "house": "Keye",
          "houses": "Keyey",
          "island": "Ada",
          "islet": "Adeqeq",
          "isolated_dwelling": "Isolated Dwelling",
          "locality": "Wereyin",
          "municipality": "Belediya",
          "neighbourhood": "Mehla",
          "postcode": "Kodê posteyi",
          "quarter": "Quarter",
          "region": "Mıntıqa",
          "sea": "Derya",
          "square": "Square",
          "state": "wılayet",
          "subdivision": "Qısımo bınên",
          "suburb": "Mahle / Banliyö",
          "town": "bacar",
          "unincorporated_area": "Wareyo Yewnêbiyaye",
          "village": "Dewe",
          "yes": "Ca"
        },
        "railway": {
          "abandoned": "Asınraya Terkkerdiye",
          "construction": "Railway under Construction",
          "disused": "Disused Railway",
          "funicular": "Funicular Railway",
          "halt": "İstasyonaTiran",
          "junction": "Railway Junction",
          "level_crossing": "Level Crossing",
          "light_rail": "Light Rail",
          "miniature": "Miniature Rail",
          "monorail": "Tekasınxete",
          "narrow_gauge": "Teng xet asınray",
          "platform": "Peron",
          "preserved": "Staryaye asınray",
          "proposed": "Planbıyayi asınray",
          "spur": "Railway Spur",
          "station": "İstasyona Tiran",
          "stop": "Vındeneka Tiran",
          "subway": "Metro",
          "subway_entrance": "Dekewtena metro",
          "switch": "Meqesê asınray",
          "tram": "Tramvay",
          "tram_stop": "Vınderdeka Tramvay"
        },
        "shop": {
          "alcohol": "Cay Cığara u Alkoler",
          "antiques": "Kehanwan",
          "art": "Dukanê zagoni",
          "bakery": "Fırun",
          "beauty": "Beauty Shop",
          "beverages": "Beverages Shop",
          "bicycle": "Bicycle Shop",
          "bookmaker": "Bookmaker",
          "books": "Book Shop",
          "boutique": "Butik",
          "butcher": "Kesab",
          "car": "Dukanê Ereban",
          "car_parts": "Letey Ereben",
          "car_repair": "Oto tamir",
          "carpet": "Dukanê Xaliya",
          "charity": "Charity Shop",
          "chemist": "Eczanewan",
          "clothes": "Clothes Shop",
          "computer": "Computer Shop",
          "confectionery": "Confectionery Shop",
          "convenience": "Convenience Store",
          "copyshop": "Copy Shop",
          "cosmetics": "Cosmetics Shop",
          "deli": "Şarkuteri",
          "department_store": "Meğaza",
          "discount": "Discount Items Shop",
          "doityourself": "Do-It-Yourself",
          "dry_cleaning": "Dry Cleaning",
          "electronics": "Electronics Shop",
          "estate_agent": "Estate Agent",
          "farm": "Farm Shop",
          "fashion": "Fashion Shop",
          "fish": "Fish Shop",
          "florist": "Çiçekdar",
          "food": "Food Shop",
          "funeral_directors": "Funeral Directors",
          "furniture": "Mobilya",
          "gallery": "Galeri",
          "garden_centre": "Merkeza Hêgay",
          "general": "General Store",
          "gift": "Çiyo Hediye",
          "greengrocer": "Greengrocer",
          "grocery": "Grocery Shop",
          "hairdresser": "Hairdresser",
          "hardware": "Hardware Store",
          "hifi": "Hi-Fi",
          "houseware": "Houseware Shop",
          "interior_decoration": "Interior Decoration",
          "jewelry": "Jewelry Shop",
          "kiosk": "Kiosk Shop",
          "kitchen": "Kitchen Shop",
          "laundry": "Laundry",
          "lottery": "Lottery",
          "mall": "Mall",
          "market": "Market",
          "massage": "Massage",
          "mobile_phone": "Mobile Phone Shop",
          "motorcycle": "Motorcycle Shop",
          "music": "Music Shop",
          "newsagent": "Newsagent",
          "optician": "Optician",
          "organic": "Organic Food Shop",
          "outdoor": "Outdoor Shop",
          "paint": "Paint Shop",
          "pawnbroker": "Pawnbroker",
          "pet": "Pet Shop",
          "pharmacy": "Pharmacy",
          "photo": "Photo Shop",
          "seafood": "Sea Food",
          "second_hand": "Second-hand Shop",
          "shoes": "Shoe Shop",
          "sports": "Sports Shop",
          "stationery": "Stationery Shop",
          "supermarket": "Supermarket",
          "tailor": "Tailor",
          "ticket": "Ticket Shop",
          "tobacco": "Tobacco Shop",
          "toys": "Toy Shop",
          "travel_agency": "Travel Agency",
          "tyres": "Tyre Shop",
          "vacant": "Vacant Shop",
          "variety_store": "Variety Store",
          "video": "Video Shop",
          "wine": "Wine Store",
          "yes": "Dukan"
        },
        "tourism": {
          "alpine_hut": "Alpine Hut",
          "apartment": "Holiday Apartment",
          "artwork": "Artwork",
          "attraction": "Attraction",
          "bed_and_breakfast": "Bed and Breakfast",
          "cabin": "Cabin",
          "camp_site": "Camp Site",
          "caravan_site": "Caravan Site",
          "chalet": "Chalet",
          "gallery": "Galeriye",
          "guest_house": "Guest House",
          "hostel": "Hostel",
          "hotel": "Hotel",
          "information": "Melumat",
          "motel": "Motel",
          "museum": "Museum",
          "picnic_site": "Picnic Site",
          "theme_park": "Theme Park",
          "viewpoint": "Viewpoint",
          "zoo": "Zoo"
        },
        "tunnel": {
          "building_passage": "Building Passage",
          "culvert": "Culvert",
          "yes": "Tûnêl"
        },
        "waterway": {
          "artificial": "Artificial Waterway",
          "boatyard": "Boatyard",
          "canal": "Kenal",
          "dam": "Berac",
          "derelict_canal": "Derelict Canal",
          "ditch": "Ditch",
          "dock": "Dock",
          "drain": "Drain",
          "lock": "İskele",
          "lock_gate": "Lock Gate",
          "mooring": "Mooring",
          "rapids": "Rapids",
          "river": "Ro",
          "stream": "Stream",
          "wadi": "Wadi",
          "waterfall": "Waterfall",
          "weir": "Weir",
          "yes": "Waterway"
        }
      },
      "prefix_format": "%{name}"
    }
  },
  "javascripts": {
    "changesets": {
      "show": {
        "comment": "Mışewre",
        "hide_comment": "bınımne",
        "subscribe": "Subscribe",
        "unhide_comment": "menımne",
        "unsubscribe": "Unsubscribe"
      }
    },
    "close": "Kip ke",
    "context": {
      "add_note": "Add a note here",
      "centre_map": "Centre map here",
      "directions_from": "Directions from here",
      "directions_to": "Directions to here",
      "query_features": "Query features",
      "show_address": "Show address"
    },
    "directions": {
      "ascend": "Ascend",
      "descend": "Descend",
      "directions": "Directions",
      "distance": "Distance",
      "engines": {
        "fossgis_osrm_bike": "Bisiklet (OSRM)",
        "fossgis_osrm_car": "Car (OSRM)",
        "fossgis_osrm_foot": "Lınge (OSRM)",
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
      "time": "Zeman"
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
        "cycle_map": "Xeritay Topoğrafiki",
        "hot": "Humanitarian",
        "standard": "Standard",
        "transport_map": "Xeritay Resnayışi"
      },
      "copyright": "© <a href='%{copyright_url}'>OpenStreetMap contributors</a>",
      "donate_link_text": "<a class='donate-attr' href='%{donate_url}'>Make a Donation</a>",
      "hotosm": "Tiles style by <a href='%{hotosm_url}' target='_blank'>Humanitarian OpenStreetMap Team</a> hosted by <a href='%{osmfrance_url}' target='_blank'>OpenStreetMap France</a>",
      "layers": {
        "data": "Map Data",
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
        "title": "Show My Location"
      },
      "terms": "<a href='%{terms_url}' target='_blank'>Website and API terms</a>",
      "thunderforest": "Tiles courtesy of <a href='%{thunderforest_url}' target='_blank'>Andy Allan</a>",
      "zoom": {
        "in": "Nêzdi ke",
        "out": "Dûri fiye"
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
        "comment": "Mışewre",
        "comment_and_resolve": "Comment & Resolve",
        "hide": "Bınımne",
        "reactivate": "Reactivate",
        "resolve": "Resolve"
      }
    },
    "query": {
      "error": "Error contacting %{server}: %{error}",
      "node": "Node",
      "nothing_found": "No features found",
      "relation": "Elaqe",
      "timeout": "Timeout contacting %{server}",
      "way": "Raye"
    },
    "share": {
      "cancel": "Bıtexelne",
      "center_marker": "Center map on marker",
      "custom_dimensions": "Set custom dimensions",
      "download": "Biya war",
      "embed": "HTML",
      "format": "Format:",
      "geo_uri": "Geo URI",
      "image": "Resım",
      "image_size": "Image will show standard layer at ",
      "include_marker": "Include marker",
      "link": "Link or HTML",
      "long_link": "Link",
      "only_standard_layer": "Only the standard layer can be exported as an image",
      "paste_html": "Paste HTML to embed in website",
      "scale": "Scale:",
      "short_link": "Short Link",
      "short_url": "Short URL",
      "title": "Vıla ke",
      "view_larger_map": "View Larger Map"
    },
    "site": {
      "createnote_disabled_tooltip": "Zoom in to add a note to the map",
      "createnote_tooltip": "Add a note to the map",
      "edit_disabled_tooltip": "Zoom in to edit the map",
      "edit_tooltip": "Xeriti timar ke",
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
      "user_page_link": "pela karberi"
    },
    "index": {
      "remote_failed": "Editing failed - make sure JOSM or Merkaartor is loaded and the remote control option is enabled"
    },
    "sidebar": {
      "search_results": "Peyniya cıgeyrayışi"
    }
  },
  "time": {
    "am": "am",
    "formats": {
      "blog": "%e %B %Y",
      "default": "%a, %d %b %Y %H:%M:%S %z",
      "friendly": "%e %B %Y seate %H:%M",
      "long": "%B %d, %Y %H:%M",
      "short": "%d %b %H:%M"
    },
    "pm": "pm"
  }
});
