I18n.translations || (I18n.translations = {});
I18n.translations["en"] = I18n.extend((I18n.translations["en"] || {}), {
  "browse": {
    "start_rjs": {
      "feature_warning": "Loading %{num_features} features, which may make your browser slow or unresponsive. Are sure you want to display this data?",
      "load_data": "Load Data",
      "loading": "Loading..."
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
      "marker_text": "Diary entry location"
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
          "aerodrome": "Aerodrome",
          "airstrip": "Airstrip",
          "apron": "Apron",
          "gate": "Gate",
          "hangar": "Hangar",
          "helipad": "Helipad",
          "holding_position": "Holding Position",
          "parking_position": "Parking Position",
          "runway": "Runway",
          "taxiway": "Taxiway",
          "terminal": "Terminal"
        },
        "amenity": {
          "animal_shelter": "Animal Shelter",
          "arts_centre": "Arts Centre",
          "atm": "ATM",
          "bank": "Bank",
          "bar": "Bar",
          "bbq": "BBQ",
          "bench": "Bench",
          "bicycle_parking": "Cycle Parking",
          "bicycle_rental": "Cycle Rental",
          "biergarten": "Beer Garden",
          "boat_rental": "Boat Rental",
          "brothel": "Brothel",
          "bureau_de_change": "Bureau de Change",
          "bus_station": "Bus Station",
          "cafe": "Cafe",
          "car_rental": "Car Rental",
          "car_sharing": "Car Sharing",
          "car_wash": "Car Wash",
          "casino": "Casino",
          "charging_station": "Charging Station",
          "childcare": "Childcare",
          "cinema": "Cinema",
          "clinic": "Clinic",
          "clock": "Clock",
          "college": "College",
          "community_centre": "Community Centre",
          "courthouse": "Courthouse",
          "crematorium": "Crematorium",
          "dentist": "Dentist",
          "doctors": "Doctors",
          "drinking_water": "Drinking Water",
          "driving_school": "Driving School",
          "embassy": "Embassy",
          "fast_food": "Fast Food",
          "ferry_terminal": "Ferry Terminal",
          "fire_station": "Fire Station",
          "food_court": "Food Court",
          "fountain": "Fountain",
          "fuel": "Fuel",
          "gambling": "Gambling",
          "grave_yard": "Grave Yard",
          "grit_bin": "Grit Bin",
          "hospital": "Hospital",
          "hunting_stand": "Hunting Stand",
          "ice_cream": "Ice Cream",
          "kindergarten": "Kindergarten",
          "library": "Library",
          "marketplace": "Marketplace",
          "monastery": "Monastery",
          "motorcycle_parking": "Motorcycle Parking",
          "nightclub": "Night Club",
          "nursing_home": "Nursing Home",
          "office": "Office",
          "parking": "Parking",
          "parking_entrance": "Parking Entrance",
          "parking_space": "Parking Space",
          "pharmacy": "Pharmacy",
          "place_of_worship": "Place of Worship",
          "police": "Police",
          "post_box": "Post Box",
          "post_office": "Post Office",
          "preschool": "Pre-School",
          "prison": "Prison",
          "pub": "Pub",
          "public_building": "Public Building",
          "recycling": "Recycling Point",
          "restaurant": "Restaurant",
          "retirement_home": "Retirement Home",
          "sauna": "Sauna",
          "school": "School",
          "shelter": "Shelter",
          "shop": "Shop",
          "shower": "Shower",
          "social_centre": "Social Centre",
          "social_club": "Social Club",
          "social_facility": "Social Facility",
          "studio": "Studio",
          "swimming_pool": "Swimming Pool",
          "taxi": "Taxi",
          "telephone": "Public Telephone",
          "theatre": "Theatre",
          "toilets": "Toilets",
          "townhall": "Town Hall",
          "university": "University",
          "vending_machine": "Vending Machine",
          "veterinary": "Veterinary Surgery",
          "village_hall": "Village Hall",
          "waste_basket": "Waste Basket",
          "waste_disposal": "Waste Disposal",
          "water_point": "Water Point",
          "youth_centre": "Youth Centre"
        },
        "boundary": {
          "administrative": "Administrative Boundary",
          "census": "Census Boundary",
          "national_park": "National Park",
          "protected_area": "Protected Area"
        },
        "bridge": {
          "aqueduct": "Aqueduct",
          "boardwalk": "Boardwalk",
          "suspension": "Suspension Bridge",
          "swing": "Swing Bridge",
          "viaduct": "Viaduct",
          "yes": "Bridge"
        },
        "building": {
          "yes": "Building"
        },
        "craft": {
          "brewery": "Brewery",
          "carpenter": "Carpenter",
          "electrician": "Electrician",
          "gardener": "Gardener",
          "painter": "Painter",
          "photographer": "Photographer",
          "plumber": "Plumber",
          "shoemaker": "Shoemaker",
          "tailor": "Tailor",
          "yes": "Craft Shop"
        },
        "emergency": {
          "ambulance_station": "Ambulance Station",
          "assembly_point": "Assembly Point",
          "defibrillator": "Defibrillator",
          "landing_site": "Emergency Landing Site",
          "phone": "Emergency Phone",
          "water_tank": "Emergency Water Tank",
          "yes": "Emergency"
        },
        "highway": {
          "abandoned": "Abandoned Highway",
          "bridleway": "Bridleway",
          "bus_guideway": "Guided Bus Lane",
          "bus_stop": "Bus Stop",
          "construction": "Highway under Construction",
          "corridor": "Corridor",
          "cycleway": "Cycle Path",
          "elevator": "Elevator",
          "emergency_access_point": "Emergency Access Point",
          "footway": "Footpath",
          "ford": "Ford",
          "give_way": "Give Way Sign",
          "living_street": "Living Street",
          "milestone": "Milestone",
          "motorway": "Motorway",
          "motorway_junction": "Motorway Junction",
          "motorway_link": "Motorway Road",
          "passing_place": "Passing Place",
          "path": "Path",
          "pedestrian": "Pedestrian Way",
          "platform": "Platform",
          "primary": "Primary Road",
          "primary_link": "Primary Road",
          "proposed": "Proposed Road",
          "raceway": "Raceway",
          "residential": "Residential Road",
          "rest_area": "Rest Area",
          "road": "Road",
          "secondary": "Secondary Road",
          "secondary_link": "Secondary Road",
          "service": "Service Road",
          "services": "Motorway Services",
          "speed_camera": "Speed Camera",
          "steps": "Steps",
          "stop": "Stop Sign",
          "street_lamp": "Street Lamp",
          "tertiary": "Tertiary Road",
          "tertiary_link": "Tertiary Road",
          "track": "Track",
          "traffic_signals": "Traffic Signals",
          "trail": "Trail",
          "trunk": "Trunk Road",
          "trunk_link": "Trunk Road",
          "turning_loop": "Turning Loop",
          "unclassified": "Unclassified Road",
          "yes": "Road"
        },
        "historic": {
          "archaeological_site": "Archaeological Site",
          "battlefield": "Battlefield",
          "boundary_stone": "Boundary Stone",
          "building": "Historic Building",
          "bunker": "Bunker",
          "castle": "Castle",
          "church": "Church",
          "city_gate": "City Gate",
          "citywalls": "City Walls",
          "fort": "Fort",
          "heritage": "Heritage Site",
          "house": "House",
          "icon": "Icon",
          "manor": "Manor",
          "memorial": "Memorial",
          "mine": "Mine",
          "mine_shaft": "Mine Shaft",
          "monument": "Monument",
          "roman_road": "Roman Road",
          "ruins": "Ruins",
          "stone": "Stone",
          "tomb": "Tomb",
          "tower": "Tower",
          "wayside_cross": "Wayside Cross",
          "wayside_shrine": "Wayside Shrine",
          "wreck": "Wreck",
          "yes": "Historic Site"
        },
        "junction": {
          "yes": "Junction"
        },
        "landuse": {
          "allotments": "Allotments",
          "basin": "Basin",
          "brownfield": "Brownfield Land",
          "cemetery": "Cemetery",
          "commercial": "Commercial Area",
          "conservation": "Conservation",
          "construction": "Construction",
          "farm": "Farm",
          "farmland": "Farmland",
          "farmyard": "Farmyard",
          "forest": "Forest",
          "garages": "Garages",
          "grass": "Grass",
          "greenfield": "Greenfield Land",
          "industrial": "Industrial Area",
          "landfill": "Landfill",
          "meadow": "Meadow",
          "military": "Military Area",
          "mine": "Mine",
          "orchard": "Orchard",
          "quarry": "Quarry",
          "railway": "Railway",
          "recreation_ground": "Recreation Ground",
          "reservoir": "Reservoir",
          "reservoir_watershed": "Reservoir Watershed",
          "residential": "Residential Area",
          "retail": "Retail",
          "road": "Road Area",
          "village_green": "Village Green",
          "vineyard": "Vineyard",
          "yes": "Landuse"
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
          "garden": "Garden",
          "golf_course": "Golf Course",
          "horse_riding": "Horse Riding",
          "ice_rink": "Ice Rink",
          "marina": "Marina",
          "miniature_golf": "Miniature Golf",
          "nature_reserve": "Nature Reserve",
          "park": "Park",
          "pitch": "Sports Pitch",
          "playground": "Playground",
          "recreation_ground": "Recreation Ground",
          "resort": "Resort",
          "sauna": "Sauna",
          "slipway": "Slipway",
          "sports_centre": "Sports Centre",
          "stadium": "Stadium",
          "swimming_pool": "Swimming Pool",
          "track": "Running Track",
          "water_park": "Water Park",
          "yes": "Leisure"
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
          "lighthouse": "Lighthouse",
          "mast": "Mast",
          "mine": "Mine",
          "mineshaft": "Mine Shaft",
          "monitoring_station": "Monitoring Station",
          "petroleum_well": "Petroleum Well",
          "pier": "Pier",
          "pipeline": "Pipeline",
          "silo": "Silo",
          "storage_tank": "Storage Tank",
          "surveillance": "Surveillance",
          "tower": "Tower",
          "wastewater_plant": "Wastewater Plant",
          "water_tower": "Water Tower",
          "water_well": "Well",
          "water_works": "Water Works",
          "watermill": "Water Mill",
          "windmill": "Wind Mill",
          "works": "Factory",
          "yes": "Man-made"
        },
        "military": {
          "airfield": "Military Airfield",
          "barracks": "Barracks",
          "bunker": "Bunker",
          "yes": "Military"
        },
        "mountain_pass": {
          "yes": "Mountain Pass"
        },
        "natural": {
          "bay": "Bay",
          "beach": "Beach",
          "cape": "Cape",
          "cave_entrance": "Cave Entrance",
          "cliff": "Cliff",
          "crater": "Crater",
          "dune": "Dune",
          "fell": "Fell",
          "fjord": "Fjord",
          "forest": "Forest",
          "geyser": "Geyser",
          "glacier": "Glacier",
          "grassland": "Grassland",
          "heath": "Heath",
          "hill": "Hill",
          "island": "Island",
          "land": "Land",
          "marsh": "Marsh",
          "moor": "Moor",
          "mud": "Mud",
          "peak": "Peak",
          "point": "Point",
          "reef": "Reef",
          "ridge": "Ridge",
          "rock": "Rock",
          "saddle": "Saddle",
          "sand": "Sand",
          "scree": "Scree",
          "scrub": "Scrub",
          "spring": "Spring",
          "stone": "Stone",
          "strait": "Strait",
          "tree": "Tree",
          "valley": "Valley",
          "volcano": "Volcano",
          "water": "Water",
          "wetland": "Wetland",
          "wood": "Wood"
        },
        "office": {
          "accountant": "Accountant",
          "administrative": "Administration",
          "architect": "Architect",
          "association": "Association",
          "company": "Company",
          "educational_institution": "Educational Institution",
          "employment_agency": "Employment Agency",
          "estate_agent": "Estate Agent",
          "government": "Governmental Office",
          "insurance": "Insurance Office",
          "it": "IT Office",
          "lawyer": "Lawyer",
          "ngo": "NGO Office",
          "telecommunication": "Telecommunication Office",
          "travel_agent": "Travel Agency",
          "yes": "Office"
        },
        "place": {
          "allotments": "Allotments",
          "city": "City",
          "city_block": "City Block",
          "country": "Country",
          "county": "County",
          "farm": "Farm",
          "hamlet": "Hamlet",
          "house": "House",
          "houses": "Houses",
          "island": "Island",
          "islet": "Islet",
          "isolated_dwelling": "Isolated Dwelling",
          "locality": "Locality",
          "municipality": "Municipality",
          "neighbourhood": "Neighbourhood",
          "postcode": "Postcode",
          "quarter": "Quarter",
          "region": "Region",
          "sea": "Sea",
          "square": "Square",
          "state": "State",
          "subdivision": "Subdivision",
          "suburb": "Suburb",
          "town": "Town",
          "unincorporated_area": "Unincorporated Area",
          "village": "Village",
          "yes": "Place"
        },
        "railway": {
          "abandoned": "Abandoned Railway",
          "construction": "Railway under Construction",
          "disused": "Disused Railway",
          "funicular": "Funicular Railway",
          "halt": "Train Stop",
          "junction": "Railway Junction",
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
          "bakery": "Bakery",
          "beauty": "Beauty Shop",
          "beverages": "Beverages Shop",
          "bicycle": "Bicycle Shop",
          "bookmaker": "Bookmaker",
          "books": "Book Shop",
          "boutique": "Boutique",
          "butcher": "Butcher",
          "car": "Car Shop",
          "car_parts": "Car Parts",
          "car_repair": "Car Repair",
          "carpet": "Carpet Shop",
          "charity": "Charity Shop",
          "chemist": "Chemist",
          "clothes": "Clothes Shop",
          "computer": "Computer Shop",
          "confectionery": "Confectionery Shop",
          "convenience": "Convenience Store",
          "copyshop": "Copy Shop",
          "cosmetics": "Cosmetics Shop",
          "deli": "Deli",
          "department_store": "Department Store",
          "discount": "Discount Items Shop",
          "doityourself": "Do-It-Yourself",
          "dry_cleaning": "Dry Cleaning",
          "electronics": "Electronics Shop",
          "estate_agent": "Estate Agent",
          "farm": "Farm Shop",
          "fashion": "Fashion Shop",
          "fish": "Fish Shop",
          "florist": "Florist",
          "food": "Food Shop",
          "funeral_directors": "Funeral Directors",
          "furniture": "Furniture",
          "gallery": "Gallery",
          "garden_centre": "Garden Centre",
          "general": "General Store",
          "gift": "Gift Shop",
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
          "yes": "Shop"
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
          "gallery": "Gallery",
          "guest_house": "Guest House",
          "hostel": "Hostel",
          "hotel": "Hotel",
          "information": "Information",
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
          "yes": "Tunnel"
        },
        "waterway": {
          "artificial": "Artificial Waterway",
          "boatyard": "Boatyard",
          "canal": "Canal",
          "dam": "Dam",
          "derelict_canal": "Derelict Canal",
          "ditch": "Ditch",
          "dock": "Dock",
          "drain": "Drain",
          "lock": "Lock",
          "lock_gate": "Lock Gate",
          "mooring": "Mooring",
          "rapids": "Rapids",
          "river": "River",
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
        "comment": "Comment",
        "hide_comment": "hide",
        "subscribe": "Subscribe",
        "unhide_comment": "unhide",
        "unsubscribe": "Unsubscribe"
      }
    },
    "close": "Close",
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
      "time": "Time"
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
        "standard": "Standard",
        "transport_map": "Transport Map"
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
        "in": "Zoom In",
        "out": "Zoom Out"
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
        "comment": "Comment",
        "comment_and_resolve": "Comment & Resolve",
        "hide": "Hide",
        "reactivate": "Reactivate",
        "resolve": "Resolve"
      }
    },
    "query": {
      "error": "Error contacting %{server}: %{error}",
      "node": "Node",
      "nothing_found": "No features found",
      "relation": "Relation",
      "timeout": "Timeout contacting %{server}",
      "way": "Way"
    },
    "share": {
      "cancel": "Cancel",
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
      "paste_html": "Paste HTML to embed in website",
      "scale": "Scale:",
      "short_link": "Short Link",
      "short_url": "Short URL",
      "title": "Share",
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
      "user_page_link": "user page"
    },
    "index": {
      "remote_failed": "Editing failed - make sure JOSM or Merkaartor is loaded and the remote control option is enabled"
    },
    "sidebar": {
      "search_results": "Search Results"
    }
  },
  "time": {
    "am": "am",
    "formats": {
      "blog": "%e %B %Y",
      "default": "%a, %d %b %Y %H:%M:%S %z",
      "friendly": "%e %B %Y at %H:%M",
      "long": "%B %d, %Y %H:%M",
      "short": "%d %b %H:%M"
    },
    "pm": "pm"
  }
});
