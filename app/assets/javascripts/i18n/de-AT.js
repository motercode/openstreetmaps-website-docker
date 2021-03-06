I18n.translations || (I18n.translations = {});
I18n.translations["de-AT"] = I18n.extend((I18n.translations["de-AT"] || {}), {
  "browse": {
    "start_rjs": {
      "feature_warning": "Laden von %{num_features} Funktionen kann deinen Browser langsamer machen oder einfrieren. Sollen diese Daten wirklich angezeigt werden?",
      "load_data": "Daten laden",
      "loading": "Lade …"
    }
  },
  "date": {
    "abbr_day_names": [
      "So",
      "Mo",
      "Di",
      "Mi",
      "Do",
      "Fr",
      "Sa"
    ],
    "abbr_month_names": [
      null,
      "Jän",
      "Feb",
      "Mär",
      "Apr",
      "Mai",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Okt",
      "Nov",
      "Dez"
    ],
    "day_names": [
      "Sonntag",
      "Montag",
      "Dienstag",
      "Mittwoch",
      "Donnerstag",
      "Freitag",
      "Samstag"
    ],
    "formats": {
      "default": "%d.%m.%Y",
      "long": "%e. %B %Y",
      "short": "%e. %b"
    },
    "month_names": [
      null,
      "Jänner",
      "Februar",
      "März",
      "April",
      "Mai",
      "Juni",
      "Juli",
      "August",
      "September",
      "Oktober",
      "November",
      "Dezember"
    ],
    "order": [
      "day",
      "month",
      "year"
    ]
  },
  "diary_entries": {
    "edit": {
      "marker_text": "Ort des Blogeintrags"
    }
  },
  "geocoder": {
    "search_osm_nominatim": {
      "admin_levels": {
        "level10": "Nachbarschaftsgrenze",
        "level2": "Staatsgrenze",
        "level4": "Landesgrenze",
        "level5": "Regionsgrenze",
        "level6": "Kreis-/Bezirksgrenze",
        "level8": "Gemeinde-/Stadtgrenze",
        "level9": "Stadtteilgrenze"
      },
      "prefix": {
        "aerialway": {
          "cable_car": "Kabelbahnwagen",
          "chair_lift": "Sessellift",
          "drag_lift": "Schlepplift",
          "gondola": "Gondelbahn",
          "platter": "Skilift",
          "pylon": "Mast",
          "station": "Gondelstation",
          "t-bar": "Schlepplift"
        },
        "aeroway": {
          "aerodrome": "Flugplatz",
          "airstrip": "Startbahn",
          "apron": "Flugvorfeld",
          "gate": "Flugsteig",
          "hangar": "Flugzeughalle",
          "helipad": "Hubschrauberlandeplatz",
          "holding_position": "Haltestelle",
          "parking_position": "Parkplatz",
          "runway": "Start- und Landebahn",
          "taxiway": "Rollbahn",
          "terminal": "Terminal"
        },
        "amenity": {
          "animal_shelter": "Tierheim",
          "arts_centre": "Kunstzentrum",
          "atm": "Geldautomat",
          "bank": "Bank",
          "bar": "Bar",
          "bbq": "Grillplatz",
          "bench": "Bank",
          "bicycle_parking": "Fahrrad-Stellplatz",
          "bicycle_rental": "Fahrradverleih",
          "biergarten": "Biergarten",
          "boat_rental": "Bootsverleih",
          "brothel": "Bordell",
          "bureau_de_change": "Wechselstube",
          "bus_station": "Busbahnhof",
          "cafe": "Café",
          "car_rental": "Autovermietung",
          "car_sharing": "Carsharing",
          "car_wash": "Autowaschanlage",
          "casino": "Casino",
          "charging_station": "Ladestation",
          "childcare": "Kinderbetreuung",
          "cinema": "Kino",
          "clinic": "Krankenhaus",
          "clock": "Uhr",
          "college": "Hochschule",
          "community_centre": "Gemeinschaftszentrum",
          "courthouse": "Gericht",
          "crematorium": "Krematorium",
          "dentist": "Zahnarzt",
          "doctors": "Arzt",
          "drinking_water": "Trinkwasser",
          "driving_school": "Fahrschule",
          "embassy": "Botschaft",
          "fast_food": "Schnellimbiss",
          "ferry_terminal": "Fähren-Anlaufstelle",
          "fire_station": "Feuerwehr",
          "food_court": "Food-Court",
          "fountain": "Springbrunnen",
          "fuel": "Tankstelle",
          "gambling": "Glücksspiel",
          "grave_yard": "Friedhof",
          "grit_bin": "Streugutbehälter",
          "hospital": "Krankenhaus",
          "hunting_stand": "Hochstand",
          "ice_cream": "Eisdiele",
          "kindergarten": "Kindergarten",
          "library": "Bücherei",
          "marketplace": "Marktplatz",
          "monastery": "Kloster",
          "motorcycle_parking": "Motorradparkplatz",
          "nightclub": "Nachtklub",
          "nursing_home": "Altersheim",
          "office": "Büro",
          "parking": "Parkplatz",
          "parking_entrance": "Parkeinfahrt",
          "parking_space": "Stellplatz",
          "pharmacy": "Apotheke",
          "place_of_worship": "Andachtsstätte",
          "police": "Polizei",
          "post_box": "Briefkasten",
          "post_office": "Postamt",
          "preschool": "Vorschule",
          "prison": "Gefängnis",
          "pub": "Kneipe",
          "public_building": "Öffentliches Gebäude",
          "recycling": "Recycling-Center",
          "restaurant": "Restaurant",
          "retirement_home": "Altersheim",
          "sauna": "Sauna",
          "school": "Schule",
          "shelter": "Unterstand",
          "shop": "Geschäft",
          "shower": "Dusche",
          "social_centre": "Sozialzentrum",
          "social_club": "Social Club",
          "social_facility": "Soziale Einrichtung",
          "studio": "Studio",
          "swimming_pool": "Schwimmbecken",
          "taxi": "Taxi",
          "telephone": "Telefonzelle",
          "theatre": "Theater",
          "toilets": "WC",
          "townhall": "Rathaus",
          "university": "Universität",
          "vending_machine": "Selbstbedienungsautomat",
          "veterinary": "Tierarzt",
          "village_hall": "Gemeindezentrum",
          "waste_basket": "Mülleimer",
          "waste_disposal": "Abfallentsorgung",
          "water_point": "Wasseranschluss",
          "youth_centre": "Jugendzentrum"
        },
        "boundary": {
          "administrative": "Verwaltungsgrenze",
          "census": "Grenze des Volkszählungsgebiets",
          "national_park": "Nationalpark",
          "protected_area": "Schutzgebiet"
        },
        "bridge": {
          "aqueduct": "Aquädukt",
          "boardwalk": "Strandpromenade",
          "suspension": "Hängebrücke",
          "swing": "Drehbrücke",
          "viaduct": "Viadukt",
          "yes": "Brücke"
        },
        "building": {
          "yes": "Gebäude"
        },
        "craft": {
          "brewery": "Brauerei",
          "carpenter": "Zimmermann",
          "electrician": "Elektriker",
          "gardener": "Gärtner",
          "painter": "Maler",
          "photographer": "Fotograf",
          "plumber": "Klempner",
          "shoemaker": "Schuhmacher",
          "tailor": "Schneider",
          "yes": "Handwerksgeschäft"
        },
        "emergency": {
          "ambulance_station": "Rettungswache",
          "assembly_point": "Sammelplatz",
          "defibrillator": "Defibrillator",
          "landing_site": "Notlandeplatz",
          "phone": "Notrufsäule",
          "water_tank": "Notwasserbehälter",
          "yes": "Notfall"
        },
        "highway": {
          "abandoned": "Aufgegebene Straße",
          "bridleway": "Reitweg",
          "bus_guideway": "Busspur",
          "bus_stop": "Bushaltestelle",
          "construction": "Straße im Bau",
          "corridor": "Flur",
          "cycleway": "Radweg",
          "elevator": "Lift",
          "emergency_access_point": "Notrufpunkt",
          "footway": "Fußweg",
          "ford": "Furt",
          "give_way": "Vorfahrt-beachten-Schild",
          "living_street": "Spiel-/Wohnstraße",
          "milestone": "Kilometerstein",
          "motorway": "Autobahn",
          "motorway_junction": "Autobahnausfahrt/-kreuz",
          "motorway_link": "Autobahnauffahrt",
          "passing_place": "Ausweichstelle",
          "path": "Pfad",
          "pedestrian": "Fußgängerzone",
          "platform": "Bahnsteig",
          "primary": "Bundesstraße",
          "primary_link": "Bundesstraße-Auffahrt",
          "proposed": "Geplante Straße",
          "raceway": "Rennstrecke",
          "residential": "Wohnstraße",
          "rest_area": "Rastplatz",
          "road": "Straße",
          "secondary": "Landesstraße",
          "secondary_link": "Landesstraße-Auffahrt",
          "service": "Zufahrtsstraße",
          "services": "Autobahnraststätte",
          "speed_camera": "Blitzer",
          "steps": "Treppe",
          "stop": "Stoppschild",
          "street_lamp": "Straßenlaterne",
          "tertiary": "Hauptstraße",
          "tertiary_link": "Hauptstraße-Auffahrt",
          "track": "Feldweg",
          "traffic_signals": "Lichtzeichenanlage",
          "trail": "Pfad",
          "trunk": "Schnellstraße",
          "trunk_link": "Schnellstraßenauffahrt",
          "turning_loop": "Wendeschleife",
          "unclassified": "Straße",
          "yes": "Straße"
        },
        "historic": {
          "archaeological_site": "Ausgrabungsstätte",
          "battlefield": "Schlachtfeld",
          "boundary_stone": "Grenzstein",
          "building": "Historisches Gebäude",
          "bunker": "Bunker",
          "castle": "Schloss",
          "church": "Kirche",
          "city_gate": "Stadttor",
          "citywalls": "Stadtmauern",
          "fort": "Fort",
          "heritage": "Denkmalgeschützt",
          "house": "Historisches Haus",
          "icon": "Symbol",
          "manor": "Gutshaus",
          "memorial": "Denkmal",
          "mine": "Mine",
          "mine_shaft": "Grubenschacht",
          "monument": "Monument",
          "roman_road": "Römerstraße",
          "ruins": "Ruine",
          "stone": "Findling",
          "tomb": "Grabstätte",
          "tower": "Historischer Turm",
          "wayside_cross": "Wegkreuz",
          "wayside_shrine": "Bildstock",
          "wreck": "Schiffswrack",
          "yes": "Historischer Ort"
        },
        "junction": {
          "yes": "Kreuzung"
        },
        "landuse": {
          "allotments": "Kleingärten",
          "basin": "Becken",
          "brownfield": "Brachland",
          "cemetery": "Friedhof",
          "commercial": "Gewerbegebiet",
          "conservation": "Naturschutzgebiet",
          "construction": "Baustelle",
          "farm": "Bauernhof",
          "farmland": "Acker",
          "farmyard": "landwirtschaftliche Betriebsfläche",
          "forest": "Wald",
          "garages": "Garagen",
          "grass": "Gras",
          "greenfield": "unerschlossenes Bauland",
          "industrial": "Industriegebiet",
          "landfill": "Deponie",
          "meadow": "Wiese",
          "military": "Militärgebiet",
          "mine": "Mine",
          "orchard": "Obstplantage",
          "quarry": "Steinbruch",
          "railway": "Bahngelände",
          "recreation_ground": "Erholungsgebiet",
          "reservoir": "Reservoir",
          "reservoir_watershed": "Wassereinzugsgebiet",
          "residential": "Siedlung",
          "retail": "Einzelhandel",
          "road": "Straßenfläche",
          "village_green": "Dorfwiese (brit.)",
          "vineyard": "Weinberg",
          "yes": "Bodennutzung"
        },
        "leisure": {
          "beach_resort": "Strandbad",
          "bird_hide": "Vogelbeobachtungshütte",
          "common": "öffentliche Grünfläche (brit.)",
          "dog_park": "Hundepark",
          "firepit": "Feuerstelle",
          "fishing": "Fischereigrund",
          "fitness_centre": "Fitnessstudio",
          "fitness_station": "Freiluft-Fitnesseinrichtung",
          "garden": "Garten",
          "golf_course": "Golfplatz",
          "horse_riding": "Reitanlage",
          "ice_rink": "Eislaufplatz",
          "marina": "Sporthafen",
          "miniature_golf": "Minigolf",
          "nature_reserve": "Naturschutzgebiet",
          "park": "Park",
          "pitch": "Spielfeld",
          "playground": "Spielplatz",
          "recreation_ground": "Erholungsgebiet",
          "resort": "Ferienort",
          "sauna": "Sauna",
          "slipway": "Slipanlage",
          "sports_centre": "Sportzentrum",
          "stadium": "Stadion",
          "swimming_pool": "Schwimmbecken",
          "track": "Laufbahn",
          "water_park": "Wasserpark",
          "yes": "Freizeit"
        },
        "man_made": {
          "adit": "Stollen",
          "beacon": "Leuchtturm",
          "beehive": "Bienenstock",
          "breakwater": "Hafendamm",
          "bridge": "Brücke",
          "bunker_silo": "Bunker",
          "chimney": "Schornstein",
          "crane": "Kran",
          "dolphin": "Dalben",
          "dyke": "Deich",
          "embankment": "Böschung",
          "flagpole": "Fahnenmast",
          "gasometer": "Gasometer",
          "groyne": "Buhne",
          "kiln": "Brennofen",
          "lighthouse": "Leuchtturm",
          "mast": "Mast",
          "mine": "Bergwerk",
          "mineshaft": "Grubenschacht",
          "monitoring_station": "Beobachtungsstation",
          "petroleum_well": "Erdölquelle",
          "pier": "Pfeiler",
          "pipeline": "Rohrleitung",
          "silo": "Speicher",
          "storage_tank": "Lagertank",
          "surveillance": "Überwachung",
          "tower": "Turm",
          "wastewater_plant": "Kläranlage",
          "water_tower": "Wasserturm",
          "water_well": "Brunnen",
          "water_works": "Wasserwerk",
          "watermill": "Wassermühle",
          "windmill": "Windmühle",
          "works": "Fabrik",
          "yes": "menschgemacht"
        },
        "military": {
          "airfield": "Militärflugplatz",
          "barracks": "Kaserne",
          "bunker": "Bunker",
          "yes": "Militär"
        },
        "mountain_pass": {
          "yes": "Gebirgspass"
        },
        "natural": {
          "bay": "Bucht",
          "beach": "Strand",
          "cape": "Kap",
          "cave_entrance": "Höhleneingang",
          "cliff": "Klippe",
          "crater": "Krater",
          "dune": "Düne",
          "fell": "Fjell",
          "fjord": "Fjord",
          "forest": "Wald",
          "geyser": "Geysir",
          "glacier": "Gletscher",
          "grassland": "Grasland",
          "heath": "Heide",
          "hill": "Hügel",
          "island": "Insel",
          "land": "Land",
          "marsh": "Marsch",
          "moor": "Moor",
          "mud": "Schlick",
          "peak": "Gipfel",
          "point": "Punkt",
          "reef": "Riff",
          "ridge": "Grat",
          "rock": "Steine",
          "saddle": "Pass",
          "sand": "Sand",
          "scree": "Geröll",
          "scrub": "Buschland",
          "spring": "Quelle",
          "stone": "Findling",
          "strait": "Straße",
          "tree": "Baum",
          "valley": "Tal",
          "volcano": "Vulkan",
          "water": "Wasser",
          "wetland": "Feuchtgebiet",
          "wood": "Wald"
        },
        "office": {
          "accountant": "Buchhaltungsbüro",
          "administrative": "Verwaltung",
          "architect": "Architekt",
          "association": "Gesellschaft",
          "company": "Unternehmen",
          "educational_institution": "Bildungseinrichtung",
          "employment_agency": "Arbeitsamt",
          "estate_agent": "Immobilienhändler",
          "government": "Amt",
          "insurance": "Versicherungsbüro",
          "it": "IT-Büro",
          "lawyer": "Rechtsanwalt",
          "ngo": "NGO",
          "telecommunication": "Telekommunikationsbüro",
          "travel_agent": "Reisebüro",
          "yes": "Büro"
        },
        "place": {
          "allotments": "Schrebergärten",
          "city": "Stadt",
          "city_block": "Häuserblock",
          "country": "Staat",
          "county": "Bezirk",
          "farm": "Bauernhof",
          "hamlet": "Weiler",
          "house": "Haus",
          "houses": "Häuser",
          "island": "Insel",
          "islet": "Eiland",
          "isolated_dwelling": "Einzelgehöft",
          "locality": "Flur",
          "municipality": "Gemeinde",
          "neighbourhood": "Wohngegend",
          "postcode": "Postleitzahl",
          "quarter": "Stadtviertel",
          "region": "Region",
          "sea": "Meer",
          "square": "Platz",
          "state": "Bundesland/-staat",
          "subdivision": "Vorort",
          "suburb": "Stadtteil",
          "town": "Stadt",
          "unincorporated_area": "Gemeindefreies Gebiet",
          "village": "Dorf",
          "yes": "Ort"
        },
        "railway": {
          "abandoned": "Aufgegebene Bahnstrecke",
          "construction": "Bahnstrecke im Bau",
          "disused": "Aufgelassene Bahnstrecke",
          "funicular": "Standseilbahn",
          "halt": "Haltestelle",
          "junction": "Bahnknoten",
          "level_crossing": "Eisenbahnkreuzung",
          "light_rail": "Stadtbahn",
          "miniature": "Miniaturbahn",
          "monorail": "Einschienenbahn",
          "narrow_gauge": "Schmalspurbahn",
          "platform": "Bahnsteig",
          "preserved": "Museumsbahn",
          "proposed": "Geplante Bahnstrecke",
          "spur": "Anschlussgleis",
          "station": "Bahnhof",
          "stop": "Haltepunkt",
          "subway": "U-Bahn",
          "subway_entrance": "U-Bahn-Eingang",
          "switch": "Weiche",
          "tram": "Straßenbahn",
          "tram_stop": "Haltestelle"
        },
        "shop": {
          "alcohol": "Spirituosenladen",
          "antiques": "Antiquitätengeschäft",
          "art": "Kunstladen",
          "bakery": "Bäckerei",
          "beauty": "Schönheitssalon",
          "beverages": "Getränkemarkt",
          "bicycle": "Fahrradgeschäft",
          "bookmaker": "Buchmacher",
          "books": "Buchgeschäft",
          "boutique": "Boutique",
          "butcher": "Metzgerei",
          "car": "Autohaus",
          "car_parts": "Autoteilehändler",
          "car_repair": "Autowerkstatt",
          "carpet": "Teppichladen",
          "charity": "Wohltätigkeitsladen",
          "chemist": "Drogerie",
          "clothes": "Bekleidungsgeschäft",
          "computer": "Computergeschäft",
          "confectionery": "Konditorei",
          "convenience": "Nachbarschaftsladen",
          "copyshop": "Copyshop",
          "cosmetics": "Parfümerie",
          "deli": "Feinkostladen",
          "department_store": "Kaufhaus",
          "discount": "Diskontladen",
          "doityourself": "Baumarkt",
          "dry_cleaning": "Textilreinigung",
          "electronics": "Elektronikgeschäft",
          "estate_agent": "Immobilienhändler",
          "farm": "Hofladen",
          "fashion": "Modegeschäft",
          "fish": "Fischereiladen",
          "florist": "Blumengeschäft",
          "food": "Lebensmittelladen",
          "funeral_directors": "Bestattungsunternehmen",
          "furniture": "Möbelgeschäft",
          "gallery": "Galerie",
          "garden_centre": "Gartenzentrum",
          "general": "Gemischtwarenladen",
          "gift": "Geschenkeladen",
          "greengrocer": "Obst- und Gemüsehändler",
          "grocery": "Lebensmittelladen",
          "hairdresser": "Frisör",
          "hardware": "Eisenwarenhändler",
          "hifi": "Elektroshop",
          "houseware": "Hauswarenladen",
          "interior_decoration": "Innenausstattung",
          "jewelry": "Juwelier",
          "kiosk": "Kiosk",
          "kitchen": "Küchengeschäft",
          "laundry": "Wäscherei",
          "lottery": "Lottoannahmestelle",
          "mall": "Einkaufszentrum",
          "market": "Markt",
          "massage": "Masseur",
          "mobile_phone": "Handygeschäft",
          "motorcycle": "Motorradgeschäft",
          "music": "Musikladen",
          "newsagent": "Zeitungsladen",
          "optician": "Optiker",
          "organic": "Bio-Laden",
          "outdoor": "Outdoor-Ausrüster",
          "paint": "Lackiererei",
          "pawnbroker": "Pfandleiher",
          "pet": "Tierhandlung",
          "pharmacy": "Apotheke",
          "photo": "Fotoladen",
          "seafood": "Meeresfrüchte",
          "second_hand": "Second-Hand-Geschäft",
          "shoes": "Schuhgeschäft",
          "sports": "Sportgeschäft",
          "stationery": "Schreibwarenladen",
          "supermarket": "Supermarkt",
          "tailor": "Schneiderei",
          "ticket": "Ticketladen",
          "tobacco": "Tabakladen",
          "toys": "Spielwarengeschäft",
          "travel_agency": "Reisebüro",
          "tyres": "Reifenhändler",
          "vacant": "Leerstehendes Geschäft",
          "variety_store": "Billigladen",
          "video": "Videothek",
          "wine": "Vinothek",
          "yes": "Geschäft"
        },
        "tourism": {
          "alpine_hut": "Berghütte",
          "apartment": "Ferienwohnung",
          "artwork": "Kunstwerk",
          "attraction": "Sehenswürdigkeit",
          "bed_and_breakfast": "Bed and Breakfast",
          "cabin": "Hütte",
          "camp_site": "Campingplatz",
          "caravan_site": "Wohnmobile-Stellplatz",
          "chalet": "Chalet",
          "gallery": "Galerie",
          "guest_house": "Pension",
          "hostel": "Jugendherberge",
          "hotel": "Hotel",
          "information": "Information",
          "motel": "Motel",
          "museum": "Museum",
          "picnic_site": "Picknickplatz",
          "theme_park": "Freizeitpark",
          "viewpoint": "Aussichtspunkt",
          "zoo": "Zoo"
        },
        "tunnel": {
          "building_passage": "Gebäudedurchgang",
          "culvert": "Durchlass",
          "yes": "Tunnel"
        },
        "waterway": {
          "artificial": "Künstliche Wasserstraße",
          "boatyard": "Werft",
          "canal": "Kanal",
          "dam": "Staudamm",
          "derelict_canal": "Aufgelassener Kanal",
          "ditch": "Wassergraben",
          "dock": "Dock",
          "drain": "Abwassergraben",
          "lock": "Schleuse",
          "lock_gate": "Schleusentor",
          "mooring": "Anlegeplatz",
          "rapids": "Stromschnellen",
          "river": "Fluss",
          "stream": "Bach",
          "wadi": "Trockental",
          "waterfall": "Wasserfall",
          "weir": "Wehr",
          "yes": "Wasserstraße"
        }
      },
      "prefix_format": "%{name}"
    }
  },
  "javascripts": {
    "changesets": {
      "show": {
        "comment": "Kommentar",
        "hide_comment": "verstecken",
        "subscribe": "Abonnieren",
        "unhide_comment": "einblenden",
        "unsubscribe": "Abbestellen"
      }
    },
    "close": "Schließen",
    "context": {
      "add_note": "Einen Hinweis/Kartenfehler hier melden",
      "centre_map": "Karte hier zentrieren",
      "directions_from": "Route von hier",
      "directions_to": "Route nach hier",
      "query_features": "Objektabfrage",
      "show_address": "Adresse anzeigen"
    },
    "directions": {
      "ascend": "Aufsteigend",
      "descend": "Absteigend",
      "directions": "Routenanweisungen:",
      "distance": "Distanz",
      "engines": {
        "fossgis_osrm_bike": "Fahrrad (OSRM)",
        "fossgis_osrm_car": "Auto (OSRM)",
        "fossgis_osrm_foot": "Fuß (OSRM)",
        "graphhopper_bicycle": "Fahrrad (GraphHopper)",
        "graphhopper_car": "Auto (GraphHopper)",
        "graphhopper_foot": "Fuß (GraphHopper)"
      },
      "errors": {
        "no_place": "Wir konnten den Ort „%{place}“ leider nicht finden.",
        "no_route": "Wir konnten keine Strecke zwischen diesen beiden Orten berechnen."
      },
      "instructions": {
        "against_oneway_without_exit": "Gegen die Einbahnstraße gehen auf %{name}",
        "continue_without_exit": "Weiter auf %{name}",
        "courtesy": "Routenanweisungen stammen von %{link}",
        "destination_without_exit": "Ziel erreicht",
        "end_oneway_without_exit": "Ende der Einbahnstraße auf %{name}",
        "endofroad_left_without_exit": "Am Straßenende links abbiegen auf %{name}",
        "endofroad_right_without_exit": "Am Straßenende rechts abbiegen auf %{name}",
        "exit_counts": {
          "eighth": "achte",
          "fifth": "fünfte",
          "first": "erste",
          "fourth": "vierte",
          "ninth": "neunte",
          "second": "zweite",
          "seventh": "siebte",
          "sixth": "sechste",
          "tenth": "zehnte",
          "third": "dritte"
        },
        "exit_roundabout": "Kreisverkehr auf %{name} verlassen",
        "follow_without_exit": "%{name} folgen",
        "fork_left_without_exit": "Bei der Gabelung links abbiegen auf %{name}",
        "fork_right_without_exit": "Bei der Gabelung rechts abbiegen auf %{name}",
        "leave_roundabout_without_exit": "Kreisverkehr verlassen – %{name}",
        "merge_left_without_exit": "Links einfädeln in %{name}",
        "merge_right_without_exit": "Rechts einfädeln in %{name}",
        "offramp_left": "Die linke Auffahrt nehmen",
        "offramp_left_with_directions": "Die linke Auffahrt Richtung %{directions} nehmen",
        "offramp_left_with_exit": "Linke Ausfahrt %{exit} nehmen",
        "offramp_left_with_exit_directions": "Linke Ausfahrt %{exit} Richtung %{directions} nehmen",
        "offramp_left_with_exit_name": "Linke Ausfahrt %{exit} auf %{name} nehmen",
        "offramp_left_with_exit_name_directions": "Linke Ausfahrt %{exit} auf %{name} Richtung %{directions} nehmen",
        "offramp_left_with_name": "Die linke Auffahrt auf %{name} nehmen",
        "offramp_left_with_name_directions": "Die linke Auffahrt auf %{name} Richtung %{directions} nehmen",
        "offramp_right": "Die rechte Auffahrt nehmen",
        "offramp_right_with_directions": "Die rechte Auffahrt Richtung %{directions} nehmen",
        "offramp_right_with_exit": "Rechte Ausfahrt %{exit} nehmen",
        "offramp_right_with_exit_directions": "Rechte Ausfahrt %{exit} Richtung %{directions} nehmen",
        "offramp_right_with_exit_name": "Rechte Ausfahrt %{exit} auf %{name} nehmen",
        "offramp_right_with_exit_name_directions": "Rechte Ausfahrt %{exit} auf %{name} Richtung %{directions} nehmen",
        "offramp_right_with_name": "Die rechte Auffahrt auf %{name} nehmen",
        "offramp_right_with_name_directions": "Die rechte Auffahrt auf %{name} Richtung %{directions} nehmen",
        "onramp_left": "Links auf die Auffahrt abbiegen",
        "onramp_left_with_directions": "Links auf die Auffahrt Richtung %{directions} abbiegen",
        "onramp_left_with_name_directions": "Links auf die Auffahrt auf %{name} Richtung %{directions} abbiegen",
        "onramp_left_without_directions": "Links auf die Auffahrt abbiegen",
        "onramp_left_without_exit": "Bei der Auffahrt links abbiegen auf %{name}",
        "onramp_right": "Rechts auf die Auffahrt abbiegen",
        "onramp_right_with_directions": "Rechts auf die Auffahrt Richtung %{directions} abbiegen",
        "onramp_right_with_name_directions": "Rechts auf die Auffahrt auf %{name} Richtung %{directions} abbiegen",
        "onramp_right_without_directions": "Rechts auf die Auffahrt abbiegen",
        "onramp_right_without_exit": "Bei der Auffahrt rechts abbiegen auf %{name}",
        "roundabout_with_exit": "Beim Kreisverkehr nimm die Ausfahrt %{exit} auf %{name}",
        "roundabout_with_exit_ordinal": "Im Kreisverkehr die %{exit} Ausfahrt auf %{name} nehmen",
        "roundabout_without_exit": "Im Kreisverkehr Ausfahrt auf %{name} nehmen",
        "sharp_left_without_exit": "Scharf links auf %{name}",
        "sharp_right_without_exit": "Scharf rechts auf %{name}",
        "slight_left_without_exit": "Leicht links auf %{name}",
        "slight_right_without_exit": "Leicht rechts auf %{name}",
        "start_without_exit": "Starten bei %{name}",
        "stay_roundabout_without_exit": "Auf Kreisverkehr bleiben – %{name}",
        "turn_left_without_exit": "Links abbiegen auf %{name}",
        "turn_right_without_exit": "Rechts abbiegen auf %{name}",
        "unnamed": "unbekannt",
        "uturn_without_exit": "Umkehren entlang %{name}",
        "via_point_without_exit": "(über Punkt)"
      },
      "time": "Zeit"
    },
    "edit_help": "Wähle eine höhere Zoomstufe und verschiebe die Karte an einen Ort, den du bearbeiten möchtest, und klicke hier.",
    "embed": {
      "report_problem": "Ein Problem melden"
    },
    "key": {
      "title": "Legende",
      "tooltip": "Legende",
      "tooltip_disabled": "Die Legende ist nicht für diese Ebene verfügbar"
    },
    "map": {
      "base": {
        "cycle_map": "Radfahrerkarte",
        "hot": "Humanitär",
        "standard": "Standard",
        "transport_map": "Verkehrskarte"
      },
      "copyright": "© <a href='%{copyright_url}'>OpenStreetMap-Mitwirkende</a>",
      "donate_link_text": "<a class='donate-attr' href='%{donate_url}'>Spenden</a>",
      "hotosm": "Kachelstil von <a href='%{hotosm_url}' target='_blank'>Humanitarian OpenStreetMap Team</a> gehostet von <a href='%{osmfrance_url}' target='_blank'>OpenStreetMap Frankreich</a>",
      "layers": {
        "data": "Kartendaten",
        "gps": "Öffentliche GPS-Tracks",
        "header": "Kartenebenen",
        "notes": "Hinweise/Fehlermeldungen",
        "overlays": "Overlays zur Fehlersuche aktivieren",
        "title": "Ebenen"
      },
      "locate": {
        "feetPopup": {
          "one": "Du bist weniger als 1 Fuß von diesem Punkt entfernt",
          "other": "Du bist weniger als %{count} Fuß von diesem Punkt entfernt"
        },
        "metersPopup": {
          "one": "Du bist weniger als 1 Meter von diesem Punkt entfernt",
          "other": "Du bist weniger als %{count} Meter von diesem Punkt entfernt"
        },
        "title": "Aktuellen Standort anzeigen"
      },
      "terms": "<a href='%{terms_url}' target='_blank'>Nutzungsbedingungen der Website und API</a>",
      "thunderforest": "Kacheln mit freundlicher Genehmigung von <a href='%{thunderforest_url}' target='_blank'>Andy Allan</a>",
      "zoom": {
        "in": "Vergrößern",
        "out": "Verkleinern"
      }
    },
    "notes": {
      "new": {
        "add": "Hinweis/Fehler melden",
        "advice": "Deine Meldung ist öffentlich und kann zur Aktualisierung der Karte verwendet werden. Gib deshalb keine persönlichen oder urheberrechtlich geschützten Informationen von anderen Karten oder Verzeichnislisten an.",
        "intro": "Fehlt etwas oder hast du einen Fehler gefunden? Bitte verschiebe den Marker auf die exakte Position und gib genaue Hinweise/Informationen an bzw. beschreibe den Fehler in der Karte möglichst präzise."
      },
      "show": {
        "anonymous_warning": "Dieser Hinweis enthält Kommentare von anonymen Benutzern, die unabhängig geprüft werden sollten.",
        "comment": "Kommentar",
        "comment_and_resolve": "Kommentieren & Erledigen",
        "hide": "Verstecken",
        "reactivate": "Reaktivieren",
        "resolve": "Erledigt"
      }
    },
    "query": {
      "error": "Fehler beim Kontaktieren von %{server}: %{error}",
      "node": "Knoten",
      "nothing_found": "Keine Objekte gefunden",
      "relation": "Relation",
      "timeout": "Zeitüberschreitung beim Kontaktieren von %{server}",
      "way": "Linie"
    },
    "share": {
      "cancel": "Abbrechen",
      "center_marker": "Karte am Marker zentrieren",
      "custom_dimensions": "Ausschnitt festlegen",
      "download": "Herunterladen",
      "embed": "HTML",
      "format": "Format:",
      "geo_uri": "Geo-URI",
      "image": "Bild",
      "image_size": "Bild zeigt Standardebene bei",
      "include_marker": "Kartenmarker setzen",
      "link": "Link oder HTML",
      "long_link": "Link",
      "only_standard_layer": "Nur die Standardebene kann als Bild exportiert werden",
      "paste_html": "HTML zur Einbettung in Webseiten kopieren",
      "scale": "Maßstab:",
      "short_link": "Kurz-URL",
      "short_url": "Kurz-URL",
      "title": "Teilen",
      "view_larger_map": "Größere Karte anzeigen"
    },
    "site": {
      "createnote_disabled_tooltip": "Zum Erstellen von Hinweisen muss eine höhere Zoomstufe gewählt werden",
      "createnote_tooltip": "Einen Hinweis/Fehler zu den Kartendaten melden",
      "edit_disabled_tooltip": "Zum Bearbeiten muss eine höhere Zoomstufe gewählt werden",
      "edit_tooltip": "Karte bearbeiten",
      "map_data_zoom_in_tooltip": "Vergrößere die Karte, um die Daten zu sehen.",
      "map_notes_zoom_in_tooltip": "Vergrößere die Karte, um die Fehler zu sehen.",
      "queryfeature_disabled_tooltip": "Für Objektabfrage vergrößern",
      "queryfeature_tooltip": "Objektabfrage"
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
      "anon_edits_link_text": "Hier findest du mehr Infos dazu.",
      "flash_player_required_html": "Du benötigst den Flash Player um Potlatch, den OpenStreetMap-Flash-Editor, zu benutzen. <a href=\"https://get.adobe.com/flashplayer/\">Lade den Flash Player von Adobe.com herunter</a>. <a href=\"https://wiki.openstreetmap.org/wiki/DE:Editing\">Einige andere Möglichkeiten</a>, um OpenStreetMap zu editieren, sind hier beschrieben.",
      "id_not_configured": "iD wurde nicht konfiguriert",
      "no_iframe_support": "Der Browser unterstützt keine HTML-Inlineframes (iframes), die für diese Funktion notwendig sind.",
      "not_public": "Deine Einstellungen sind auf anonymes Bearbeiten gestellt.",
      "not_public_description_html": "Du musst, um die Karte bearbeiten zu können, deine Einstellungen auf öffentliches Bearbeiten umstellen. Dies kannst du auf deiner %{user_page} tun.",
      "potlatch2_not_configured": "Potlatch 2 wurde nicht konfiguriert - Bitte besuche https://wiki.openstreetmap.org/wiki/The_Rails_Port",
      "potlatch2_unsaved_changes": "Es gibt ungesicherte Änderungen. (Du solltest in Potlatch 2 „speichern“ klicken.)",
      "potlatch_unsaved_changes": "Du hast deine Arbeit noch nicht gespeichert. (Um sie in Potlach zu speichern, klicke auf eine leere Fläche bzw. deselektiere die Linie oder den Knoten, wenn du im Live-Modus editierst oder klicke auf Speichern, wenn ein Speicherbutton vorhanden ist.)",
      "user_page_link": "Einstellungsseite"
    },
    "index": {
      "remote_failed": "Der Aufruf des Editors ist fehlgeschlagen. Stelle sicher, dass JOSM oder Merkaartor gestartet ist und die Remote-Control-Option aktiviert ist."
    },
    "sidebar": {
      "search_results": "Suchergebnisse"
    }
  },
  "time": {
    "am": "vormittags",
    "formats": {
      "blog": "%e %B %Y",
      "default": "%A, %d. %B %Y, %H:%M Uhr",
      "friendly": "%e. %B %Y um %H:%M Uhr",
      "long": "%A, %d. %B %Y, %H:%M Uhr",
      "short": "%d. %B, %H:%M Uhr"
    },
    "pm": "nachmittags"
  }
});
