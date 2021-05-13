I18n.translations || (I18n.translations = {});
I18n.translations["el"] = I18n.extend((I18n.translations["el"] || {}), {
  "browse": {
    "start_rjs": {
      "feature_warning": "Η φόρτωση %{num_features} χαρακτηριστικών ενδέχεται να καταστήσει τον περιηγητή σας αργό ή να μην αντιδρά. Σίγουρα θέλετε να εμφανίσετε αυτά τα δεδομένα;",
      "load_data": "Φόρτωση δεδομένων",
      "loading": "Φόρτωση..."
    }
  },
  "date": {
    "abbr_day_names": [
      "Κυρ",
      "Δευ",
      "Τρί",
      "Τετ",
      "Πέμ",
      "Παρ",
      "Σάβ"
    ],
    "abbr_month_names": [
      null,
      "Ιαν",
      "Φεβ",
      "Μαρ",
      "Απρ",
      "Μαϊ",
      "Ιουν",
      "Ιουλ",
      "Αυγ",
      "Σεπ",
      "Οκτ",
      "Νοε",
      "Δεκ"
    ],
    "day_names": [
      "Κυριακή",
      "Δευτέρα",
      "Τρίτη",
      "Τετάρτη",
      "Πέμπτη",
      "Παρασκευή",
      "Σάββατο"
    ],
    "formats": {
      "default": "%d/%m/%Y",
      "long": "%e %B %Y",
      "short": "%d %b"
    },
    "month_names": [
      null,
      "Ιανουάριος",
      "Φεβρουάριος",
      "Μάρτιος",
      "Απρίλιος",
      "Μάιος",
      "Ιούνιος",
      "Ιούλιος",
      "Αύγουστος",
      "Σεπτέμβριος",
      "Οκτώβριος",
      "Νοέμβριος",
      "Δεκέμβριος"
    ],
    "order": [
      "day",
      "month",
      "year"
    ]
  },
  "diary_entries": {
    "edit": {
      "marker_text": "Τοποθεσία καταχώρησης ημερολογίου"
    }
  },
  "geocoder": {
    "search_osm_nominatim": {
      "admin_levels": {
        "level10": "Σύνορο προαστίου",
        "level2": "Σύνορα χώρας",
        "level4": "Σύνορο πολιτείας",
        "level5": "Σύνορο περιοχής",
        "level6": "Σύνορο κομητείας",
        "level8": "Σύνορο πόλης",
        "level9": "Σύνορο χωριού"
      },
      "prefix": {
        "aerialway": {
          "cable_car": "Τελεφερίκ",
          "chair_lift": "Αναβατήρας με κάθισμα",
          "drag_lift": "Συρόμενος αναβατήρας",
          "gondola": "Τελεφερίκ-Γόνδολα",
          "platter": "Πιατέλα ανύψωσης",
          "pylon": "Πυλώνας",
          "station": "Σταθμός εναέριου δρόμου",
          "t-bar": "T-Bar Ασανσέρ"
        },
        "aeroway": {
          "aerodrome": "Αεροδρόμιο",
          "airstrip": "Διάδρομος προσγειώσεως",
          "apron": "Χώρος ελιγμών",
          "gate": "Πύλη",
          "hangar": "Υπόστεγο για αεροπλάνα",
          "helipad": "Ελικοδρόμιο",
          "holding_position": "κράτηση θέσης",
          "parking_position": "Θέση στάθμευσης",
          "runway": "Διάδρομος",
          "taxiway": "Τροχιόδρομος",
          "terminal": "Τερματικός σταθμός"
        },
        "amenity": {
          "animal_shelter": "Καταφύγιο ζώων",
          "arts_centre": "Κέντρο τεχνών",
          "atm": "ΑΤΜ",
          "bank": "Τράπεζα",
          "bar": "Μπαρ",
          "bbq": "Ψησταριά",
          "bench": "Πάγκος",
          "bicycle_parking": "Στάθμευση ποδηλάτων",
          "bicycle_rental": "Ενοικίαση ποδηλάτων",
          "biergarten": "Υπαίθρια μπυραρία",
          "boat_rental": "Ενοικίαση σκαφών",
          "brothel": "Οίκος ανοχής",
          "bureau_de_change": "Ανταλλακτήριο συναλλάγματος",
          "bus_station": "Σταθμός λεωφορείου",
          "cafe": "Καφετέρια",
          "car_rental": "Ενοικίαση αυτοκινήτων",
          "car_sharing": "Συνεπιβατισμός",
          "car_wash": "Πλυντήριο αυτοκινήτων",
          "casino": "Καζίνο",
          "charging_station": "Σταθμός Φόρτισης",
          "childcare": "Φροντίδα παιδιών",
          "cinema": "Κινηματογράφος",
          "clinic": "Κλινική",
          "clock": "Ρολόι",
          "college": "Κολέγιο",
          "community_centre": "Κοινοτικό κέντρο",
          "courthouse": "Δικαστήριο",
          "crematorium": "Κρεματόριο",
          "dentist": "Οδοντίατρος",
          "doctors": "Ιατροί",
          "drinking_water": "Πόσιμο νερό",
          "driving_school": "Σχολή οδηγών",
          "embassy": "Πρεσβεία",
          "fast_food": "Ταχυφαγείο",
          "ferry_terminal": "Σταθμός πορθμείων",
          "fire_station": "Πυροσβεστικός σταθμός",
          "food_court": "Προαύλιο φαγητού",
          "fountain": "Συντριβάνι",
          "fuel": "Καύσιμα",
          "gambling": "Τυχερά παιχνίδια",
          "grave_yard": "Νεκροταφείο",
          "grit_bin": "Κάδος Χαλικιού",
          "hospital": "Νοσοκομείο",
          "hunting_stand": "Κυνηγητικό κιόσκι",
          "ice_cream": "Παγωτό",
          "kindergarten": "Νηπιαγωγείο",
          "library": "Βιβλιοθήκη",
          "marketplace": "Αγορά",
          "monastery": "Μοναστήρι",
          "motorcycle_parking": "Χώρος στάθμευσης μοτοσικλετών",
          "nightclub": "Νυχτερινό κέντρο",
          "nursing_home": "Οίκος ευγηρίας",
          "office": "Γραφείο",
          "parking": "Χώρος στάθμευσης",
          "parking_entrance": "Είσοδος χώρου στάθμευσης",
          "parking_space": "Χώρος στάθμευσης",
          "pharmacy": "Φαρμακείο",
          "place_of_worship": "Τόπος λατρείας",
          "police": "Αστυνομία",
          "post_box": "Ταχυδρομική θυρίδα",
          "post_office": "Ταχυδρομείο",
          "preschool": "Προσχολική εκπαίδευση",
          "prison": "Φυλακή",
          "pub": "Παμπ",
          "public_building": "Δημόσιο κτίριο",
          "recycling": "Σημείο ανακύκλωσης",
          "restaurant": "Εστιατόριο",
          "retirement_home": "Γηροκομείο",
          "sauna": "Σάουνα",
          "school": "Σχολείο",
          "shelter": "Καταφύγιο",
          "shop": "Κατάστημα",
          "shower": "Ντους",
          "social_centre": "Κοινωνικό κέντρο",
          "social_club": "Κοινωνική λέσχη",
          "social_facility": "Κοινωνική εγκατάσταση",
          "studio": "Στούντιο",
          "swimming_pool": "Πισίνα",
          "taxi": "Ταξί",
          "telephone": "Δημόσιο τηλέφωνο",
          "theatre": "Θέατρο",
          "toilets": "Τουαλέτες",
          "townhall": "Δημαρχείο",
          "university": "Πανεπιστήμιο",
          "vending_machine": "Μηχάνημα αυτόματης πώλησης",
          "veterinary": "Κτηνιατρική Χειρουργική",
          "village_hall": "Αίθουσα χωριού",
          "waste_basket": "Καλάθι απορριμμάτων",
          "waste_disposal": "Διάθεση αποβλήτων",
          "water_point": "Σημείο ανεφοδιασμού νερού",
          "youth_centre": "Κέντρο νεολαίας"
        },
        "boundary": {
          "administrative": "Διοικητικό όριο",
          "census": "Όριο απογραφής",
          "national_park": "Εθνικό πάρκο",
          "protected_area": "Προστατευόμενη περιοχή"
        },
        "bridge": {
          "aqueduct": "Υδραγωγείο",
          "boardwalk": "Πεζοδρόμιο",
          "suspension": "Κρεμαστή γέφυρα",
          "swing": "Αιωρούμενη γέφυρα",
          "viaduct": "Κοιλαδογέφυρα",
          "yes": "Γέφυρα"
        },
        "building": {
          "yes": "Κτίριο"
        },
        "craft": {
          "brewery": "Ζυθοποιείο",
          "carpenter": "Ξυλουργός",
          "electrician": "Ηλεκτρολόγος",
          "gardener": "Κηπουρός",
          "painter": "Ζωγράφος",
          "photographer": "Φωτογράφος",
          "plumber": "Υδραυλικός",
          "shoemaker": "Τσαγκάρης",
          "tailor": "Ράφτης",
          "yes": "Κατάστημα τεχνών"
        },
        "emergency": {
          "ambulance_station": "Σταθμός ασθενοφόρων",
          "assembly_point": "Σημείο συγκέντρωσης",
          "defibrillator": "Απινιδωτής",
          "landing_site": "Τοποθεσία έκτακτης προσγείωσης",
          "phone": "Τηλέφωνο έκτακτης ανάγκης",
          "water_tank": "Δεξαμενή νερού έκτακτης ανάγκης",
          "yes": "Επείγοντα"
        },
        "highway": {
          "abandoned": "Εγκαταλελειμμένος αυτοκινητόδρομος",
          "bridleway": "Μονοπάτι για άλογα",
          "bus_guideway": "Καθορισμένη λωρίδα λεωφορείου",
          "bus_stop": "Στάση λεωφορείου",
          "construction": "Δρόμος υπό κατασκευή",
          "corridor": "Διάδρομος",
          "cycleway": "Ποδηλατόδρομος",
          "elevator": "Ανελκυστήρας",
          "emergency_access_point": "Σημείο πρόσβασης έκτακτης ανάγκης",
          "footway": "Μονοπάτι",
          "ford": "Κοιτόστρωση",
          "give_way": "Δώστε το σήμα",
          "living_street": "Μεικτός δρόμος",
          "milestone": "Ορόσημο",
          "motorway": "Αυτοκινητόδρομος",
          "motorway_junction": "Διασταύρωση αυτοκινητόδρομου",
          "motorway_link": "Αυτοκινητόδρομος",
          "passing_place": "Πέρασμα",
          "path": "Διαδρομή",
          "pedestrian": "Πεζόδρομος",
          "platform": "Πλατφόρμα",
          "primary": "Κύρια οδός",
          "primary_link": "Κύρια οδός",
          "proposed": "Προτεινόμενος δρόμος",
          "raceway": "Αυτοκινητοδρόμιο",
          "residential": "Δρόμος σε κατοικημένη περιοχή",
          "rest_area": "Περιοχή ανάπαυσης",
          "road": "Δρόμος",
          "secondary": "Δευτερεύουσα οδός",
          "secondary_link": "Δευτερεύουσα οδός",
          "service": "Δρόμος εξυπηρέτησης",
          "services": "Υπηρεσίες αυτοκινητοδρόμου",
          "speed_camera": "Κάμερα ταχύτητας",
          "steps": "Σκαλοπάτια",
          "stop": "Σήμα στάσης",
          "street_lamp": "Λάμπα δρόμου",
          "tertiary": "Τριτεύων δρόμος",
          "tertiary_link": "Τριτεύων δρόμος",
          "track": "Χωματόδρομος",
          "traffic_signals": "Σήματα κυκλοφορίας",
          "trail": "Μονοπάτι",
          "trunk": "Εθνική οδός",
          "trunk_link": "Εθνική οδός",
          "turning_loop": "Κυκλικός Κόμβος",
          "unclassified": "Αταξινόμητη οδός",
          "yes": "Δρόμος"
        },
        "historic": {
          "archaeological_site": "Αρχαιολογικός χώρος",
          "battlefield": "Πεδίο μάχης",
          "boundary_stone": "Συνοριακή στήλη",
          "building": "Ιστορικό κτίριο",
          "bunker": "Οχυρό",
          "castle": "Κάστρο",
          "church": "Εκκλησία",
          "city_gate": "Είσοδος της πόλης",
          "citywalls": "Τείχη της πόλης",
          "fort": "Οχυρό",
          "heritage": "Μνημείο πολιτιστικής κληρονομιάς",
          "house": "Σπίτι",
          "icon": "Εικονίδιο",
          "manor": "Έπαυλη",
          "memorial": "Μνημείο",
          "mine": "Ορυχείο",
          "mine_shaft": "Φρεάτιο ορυχείου",
          "monument": "Μνημείο",
          "roman_road": "Ρωμαϊκός δρόμος",
          "ruins": "Ερείπιο",
          "stone": "Πέτρα",
          "tomb": "Τάφος",
          "tower": "Πύργος",
          "wayside_cross": "Σταυρός στην άκρη του δρόμου",
          "wayside_shrine": "Εικονοστάσιο στην άκρη του δρόμου",
          "wreck": "Ναυάγιο",
          "yes": "Ιστορικός Χώρος"
        },
        "junction": {
          "yes": "Διασταύρωση"
        },
        "landuse": {
          "allotments": "Λαχανόκηποι",
          "basin": "Λεκανοπέδιο",
          "brownfield": "Πρώην βιομηχανική περιοχή",
          "cemetery": "Κοιμητήριο",
          "commercial": "Εμπορική περιοχή",
          "conservation": "Διατήρηση",
          "construction": "Κατασκευή",
          "farm": "Αγρόκτημα",
          "farmland": "Γεωργική γη",
          "farmyard": "Αγρόκτημα",
          "forest": "Δάσος",
          "garages": "Κλειστοί χώροι στάθμευσης",
          "grass": "Γρασίδι",
          "greenfield": "Παρθένα περιοχή",
          "industrial": "Βιομηχανική περιοχή",
          "landfill": "Χωματερή",
          "meadow": "Λιβάδι",
          "military": "Στρατιωτική περιοχή",
          "mine": "Ορυχείο",
          "orchard": "Περιβόλι",
          "quarry": "Λατομείο",
          "railway": "Σιδηρόδρομος",
          "recreation_ground": "Χώρος αναψυχής",
          "reservoir": "Ταμιευτήρας",
          "reservoir_watershed": "Δεξαμενή απορροής υδάτων",
          "residential": "Κατοικημένη περιοχή",
          "retail": "Κατάστημα λιανικής",
          "road": "Περιοχή δρόμων",
          "village_green": "Πράσινο χωριό",
          "vineyard": "Αμπελώνας",
          "yes": "Χρήση γης"
        },
        "leisure": {
          "beach_resort": "Παραθαλάσσιο θέρετρο",
          "bird_hide": "Καταφύγιο πουλιών",
          "common": "Κοινόχρηστη γη",
          "dog_park": "Πάρκο σκύλων",
          "firepit": "Λάκκος Φωτιάς",
          "fishing": "Αλιευτική περιοχή",
          "fitness_centre": "Κέντρο αδυνατίσματος",
          "fitness_station": "Γυμναστήριο",
          "garden": "Κήπος",
          "golf_course": "Γήπεδο γκολφ",
          "horse_riding": "Ιππασία",
          "ice_rink": "Παγοδρόμιο",
          "marina": "Μαρίνα",
          "miniature_golf": "Μίνι γκολφ",
          "nature_reserve": "Καταφύγιο της φύσης",
          "park": "Πάρκο",
          "pitch": "Γήπεδο αθλητισμού",
          "playground": "Παιδική χαρά",
          "recreation_ground": "Χώρος αναψυχής",
          "resort": "Θέρετρο",
          "sauna": "Σάουνα",
          "slipway": "Γλίστρα",
          "sports_centre": "Αθλητικό κέντρο",
          "stadium": "Στάδιο",
          "swimming_pool": "Πισίνα",
          "track": "Στίβος",
          "water_park": "Υδάτινο πάρκο",
          "yes": "Ψυχαγωγία"
        },
        "man_made": {
          "adit": "Οριζόντια είσοδος σε ορυχείο",
          "beacon": "φάρος",
          "beehive": "Κυψέλη",
          "breakwater": "Κυματοθραύστης",
          "bridge": "Γέφυρα",
          "bunker_silo": "Οχυρό",
          "chimney": "Καμινάδα",
          "crane": "Γερανός",
          "dolphin": "Δέστρα",
          "dyke": "Ανάχωμα",
          "embankment": "Ανάχωμα",
          "flagpole": "Ιστός σημαίας",
          "gasometer": "Αεριόμετρο",
          "groyne": "Φράγμα",
          "kiln": "Καμίνι",
          "lighthouse": "Φάρος",
          "mast": "Κατάρτι",
          "mine": "Ορυχείο",
          "mineshaft": "Φρεάτιο ορυχείου",
          "monitoring_station": "Σταθμός παρακολούθησης",
          "petroleum_well": "Γεώτρηση Πετρελαίου",
          "pier": "Αποβάθρα",
          "pipeline": "Αγωγός",
          "silo": "Σιλό",
          "storage_tank": "Δεξαμενή αποθήκευσης",
          "surveillance": "Επιτήρηση",
          "tower": "Πύργος",
          "wastewater_plant": "Μονάδα επεξεργασίας λυμάτων",
          "water_tower": "Πύργος νερού",
          "water_well": "Πηγάδι",
          "water_works": "Έργα Υδάτων",
          "watermill": "Νερόμυλος",
          "windmill": "Αερόμυλος",
          "works": "Εργοστάσιο",
          "yes": "Τεχνητό"
        },
        "military": {
          "airfield": "Στρατιωτικό αεροδρόμιο",
          "barracks": "Στρατώνας",
          "bunker": "Οχυρό",
          "yes": "Στρατός"
        },
        "mountain_pass": {
          "yes": "Ορεινό πέρασμα"
        },
        "natural": {
          "bay": "Κόλπος",
          "beach": "Παραλία",
          "cape": "Ακρωτήριο",
          "cave_entrance": "Είσοδος σπηλιάς",
          "cliff": "Γκρεμός",
          "crater": "Κρατήρας",
          "dune": "Αμμόλοφος",
          "fell": "Λόφος",
          "fjord": "Φιόρδ",
          "forest": "Δάσος",
          "geyser": "Θερμοπίδακας",
          "glacier": "Παγετώνας",
          "grassland": "Λιβάδι",
          "heath": "Ακαλλιέργητη γη",
          "hill": "Λόφος",
          "island": "Νησί",
          "land": "Ξηρά",
          "marsh": "Βάλτος",
          "moor": "Δέστρα",
          "mud": "Λάσπη",
          "peak": "Κορυφή",
          "point": "Σημείο",
          "reef": "Ύφαλος",
          "ridge": "Σκόπελος",
          "rock": "Βράχος",
          "saddle": "Σέλα",
          "sand": "Άμμος",
          "scree": "Σάρα",
          "scrub": "Θαμνότοπος",
          "spring": "Πηγή",
          "stone": "Πέτρα",
          "strait": "Πορθμός",
          "tree": "Δέντρο",
          "valley": "Κοιλάδα",
          "volcano": "Ηφαίστειο",
          "water": "Νερό",
          "wetland": "Υγρότοπος",
          "wood": "Δάσος"
        },
        "office": {
          "accountant": "Λογιστής",
          "administrative": "Διαχείριση",
          "architect": "Αρχιτέκτονας",
          "association": "Σύλλογος",
          "company": "Εταιρεία",
          "educational_institution": "Εκπαιδευτικό ίδρυμα",
          "employment_agency": "Οργανισμός απασχόλησης",
          "estate_agent": "Κτηματομεσιτικό γραφείο",
          "government": "Κυβερνητικό γραφείο",
          "insurance": "Ασφαλιστικό γραφείο",
          "it": "Γραφείο πληροφορικής",
          "lawyer": "Δικηγόρος",
          "ngo": "Γραφείο ΜΚΟ",
          "telecommunication": "Γραφείο τηλεπικοινωνιών",
          "travel_agent": "Ταξιδιωτικό πρακτορείο",
          "yes": "Γραφείο"
        },
        "place": {
          "allotments": "Λαχανόκηποι",
          "city": "Πόλη",
          "city_block": "Οικοδομικό τετράγωνο πόλης",
          "country": "Χώρα",
          "county": "Κομητεία",
          "farm": "Αγρόκτημα",
          "hamlet": "Οικισμός",
          "house": "Σπίτι",
          "houses": "Σπίτια",
          "island": "Νησί",
          "islet": "Νησίδα",
          "isolated_dwelling": "Απομονωμένη κατοικία",
          "locality": "Τοποθεσία",
          "municipality": "Δήμος",
          "neighbourhood": "Γειτονιά",
          "postcode": "Ταχυδρομικός κώδικας",
          "quarter": "Συνοικία",
          "region": "Περιοχή",
          "sea": "Θάλασσα",
          "square": "Πλατεία",
          "state": "Πολιτεία",
          "subdivision": "Υποδιαίρεση",
          "suburb": "Προάστιο",
          "town": "Κωμόπολη",
          "unincorporated_area": "Μη-ενσωματωμένη περιοχή",
          "village": "Χωριό",
          "yes": "Μέρος"
        },
        "railway": {
          "abandoned": "Εγκαταλελειμμένος σιδηρόδρομος",
          "construction": "Σιδηρόδρομος υπό κατασκευή",
          "disused": "Σιδηρόδρομος εκτός χρήσης",
          "funicular": "Τελεφερίκ σε ράγες",
          "halt": "Σταθμός τραίνου",
          "junction": "Σιδηροδρομικός κόμβος",
          "level_crossing": "Ισόπεδη διάβαση",
          "light_rail": "Ελαφρύς σιδηρόδρομος",
          "miniature": "Σιδηρόδρομος μινιατούρα",
          "monorail": "Μονοτρόχιος σιδηρόδρομος",
          "narrow_gauge": "Σιδηρόδρομος στενής τροχιάς",
          "platform": "Πλατφόρμα σιδηροδρόμου",
          "preserved": "Διατηρητέος σιδηρόδρομος",
          "proposed": "Προτεινόμενος σιδηρόδρομος",
          "spur": "Παρακλάδι σιδηροδρόμου",
          "station": "Σιδηροδρομικός σταθμός",
          "stop": "Σιδηροδρομική στάση",
          "subway": "Mετρό",
          "subway_entrance": "Είσοδος μετρό",
          "switch": "Σιδηροδρομικά σημεία",
          "tram": "Γραμμή τραμ",
          "tram_stop": "Στάση τραμ"
        },
        "shop": {
          "alcohol": "Εκτός άδειας",
          "antiques": "Αντίκες",
          "art": "Κατάστημα τέχνης",
          "bakery": "Φούρνος",
          "beauty": "Σαλόνι ομορφιάς",
          "beverages": "Κατάστημα ποτών",
          "bicycle": "Κατάστημα ποδηλάτων",
          "bookmaker": "Πράκτορας στοιχημάτων",
          "books": "Βιβλιοπωλείο",
          "boutique": "Μπουτίκ",
          "butcher": "Κρεοπωλείο",
          "car": "Κατάστημα αυτοκινήτων",
          "car_parts": "Εξαρτήματα αυτοκινήτων",
          "car_repair": "Συνεργείο αυτοκινήτων",
          "carpet": "Κατάστημα χαλιών",
          "charity": "Φιλανθρωπικό κατάστημα",
          "chemist": "Χημικός",
          "clothes": "Κατάστημα ρούχων",
          "computer": "Κατάστημα υπολογιστών",
          "confectionery": "Ζαχαροπλαστική",
          "convenience": "Παντοπωλείο",
          "copyshop": "Κατάστημα φωτοαντιγράφων",
          "cosmetics": "Κατάστημα καλλυντικών",
          "deli": "Ντελικατέσεν",
          "department_store": "Πολυκατάστημα",
          "discount": "Εκπτωτικό κατάστημα",
          "doityourself": "Ιδιοκατασκευές",
          "dry_cleaning": "Στεγνό καθάρισμα",
          "electronics": "Κατάστημα ηλεκτρονικών",
          "estate_agent": "Κτηματομεσίτης",
          "farm": "Γεωργικά εφόδια",
          "fashion": "Κατάστημα μόδας",
          "fish": "Ιχθυοπωλείο",
          "florist": "Ανθοπώλης",
          "food": "Κατάστημα τροφίμων",
          "funeral_directors": "Γραφείο κηδειών",
          "furniture": "Έπιπλα",
          "gallery": "Γκαλερί",
          "garden_centre": "Κέντρο κήπου",
          "general": "Παντοπωλείο",
          "gift": "Κατάστημα δώρων",
          "greengrocer": "Μανάβης",
          "grocery": "Οπωροπωλείο",
          "hairdresser": "Κομμωτήριο",
          "hardware": "Κατάστημα με χρώματα-σιδηρικά",
          "hifi": "Hi-Fi",
          "houseware": "Μαγαζί με οικιακά είδη",
          "interior_decoration": "Διακόσμηση εσωτερικού χώρου",
          "jewelry": "Κοσμηματοπωλείο",
          "kiosk": "Περίπτερο",
          "kitchen": "Μαγαζί κουζινών",
          "laundry": "Πλυντήριο",
          "lottery": "Λοταρία",
          "mall": "Εμπορικό κέντρο",
          "market": "Αγορά",
          "massage": "Μασάζ",
          "mobile_phone": "Κατάστημα κινητής τηλεφωνίας",
          "motorcycle": "Κατάστημα μοτοσικλετών",
          "music": "Κατάστημα μουσικής",
          "newsagent": "Πρακτορείο εφημερίδων",
          "optician": "Οπτικός",
          "organic": "Κατάστημα οργανικών τροφίμων",
          "outdoor": "Υπαίθριο κατάστημα",
          "paint": "Χρωματοπωλείο",
          "pawnbroker": "Ενεχυροδανειστής",
          "pet": "Κατάστημα κατοικίδιων",
          "pharmacy": "Φαρμακείο",
          "photo": "Φωτογραφείο",
          "seafood": "Θαλασσινό φαγητό",
          "second_hand": "Κατάστημα μεταχειρισμένων",
          "shoes": "Κατάστημα υποδημάτων",
          "sports": "Κατάστημα αθλητικών",
          "stationery": "Κατάστημα χαρτικών/ειδών γραφείου",
          "supermarket": "Σουπερμάρκετ",
          "tailor": "Ράφτης",
          "ticket": "Μαγαζί εισιτηρίων",
          "tobacco": "Μαγαζί προϊόντων καπνού",
          "toys": "Κατάστημα παιχνιδιών",
          "travel_agency": "Ταξιδιωτικό πρακτορείο",
          "tyres": "Κατάστημα ελαστικών",
          "vacant": "Κενό κατάστημα",
          "variety_store": "Κατάστημα ποικιλιών",
          "video": "Κατάστημα βίντεο",
          "wine": "Κατάστημα κρασιών",
          "yes": "Κατάστημα"
        },
        "tourism": {
          "alpine_hut": "Αλπικό καταφύγιο",
          "apartment": "Εξοχικό διαμέρισμα",
          "artwork": "Έργο τέχνης",
          "attraction": "Αξιοθέατο",
          "bed_and_breakfast": "Ενοικιαζόμενα δωμάτια",
          "cabin": "Καμπίνα",
          "camp_site": "Χώρος κατασκήνωσης",
          "caravan_site": "Χώρος τροχόσπιτων",
          "chalet": "Σαλέ",
          "gallery": "Γκαλερί",
          "guest_house": "Ξενώνας",
          "hostel": "Ξενώνας",
          "hotel": "Ξενοδοχείο",
          "information": "Πληροφορίες",
          "motel": "Μοτέλ",
          "museum": "Μουσείο",
          "picnic_site": "Τοποθεσία αναψυχής-φαγητού",
          "theme_park": "Θεματικό πάρκο",
          "viewpoint": "Παρατηρητήριο",
          "zoo": "Ζωολογικός κήπος"
        },
        "tunnel": {
          "building_passage": "Πέρασμα κτιρίου",
          "culvert": "Οχετός",
          "yes": "Σήραγγα"
        },
        "waterway": {
          "artificial": "Τεχνητή υδατοδιαδρομή",
          "boatyard": "Ναυπηγείο",
          "canal": "Κανάλι",
          "dam": "Φράγμα",
          "derelict_canal": "Εγκαταλελειμμένο κανάλι",
          "ditch": "Χαντάκι",
          "dock": "Αποβάθρα",
          "drain": "Υπόνομος",
          "lock": "Κλειδαριά",
          "lock_gate": "Πύλη καναλιού",
          "mooring": "Αγκυροβόλι",
          "rapids": "Χείμαρροι",
          "river": "Ποτάμι",
          "stream": "Ρέμα",
          "wadi": "Ρέμα",
          "waterfall": "Καταρράκτης",
          "weir": "Υδατοφράκτης",
          "yes": "Κανάλι"
        }
      },
      "prefix_format": "%{name}"
    }
  },
  "javascripts": {
    "changesets": {
      "show": {
        "comment": "Σχόλιο",
        "hide_comment": "απόκρυψη",
        "subscribe": "Εγγραφείτε ως συνδρομητής",
        "unhide_comment": "επανεμφάνιση",
        "unsubscribe": "Κατάργηση εγγραφής"
      }
    },
    "close": "Κλείσιμο",
    "context": {
      "add_note": "Προσθέστε μια σημείωση εδώ",
      "centre_map": "Κεντράρισμα χάρτη εδώ",
      "directions_from": "Οδηγίες από εδώ",
      "directions_to": "Οδηγίες προς τα εδώ",
      "query_features": "Πληροφορίες χαρακτηριστικών",
      "show_address": "Εμφάνιση διεύθυνσης"
    },
    "directions": {
      "ascend": "Ανάβαση",
      "descend": "Κατάβαση",
      "directions": "Οδηγίες",
      "distance": "Απόσταση",
      "engines": {
        "fossgis_osrm_bike": "Με ποδήλατο (OSRM)",
        "fossgis_osrm_car": "Αυτοκίνητο (OSRM)",
        "fossgis_osrm_foot": "Με τα πόδια (OSRM)",
        "graphhopper_bicycle": "Ποδήλατο (GraphHopper)",
        "graphhopper_car": "Με τα πόδια (GraphHopper)",
        "graphhopper_foot": "Με τα πόδια (GraphHopper)"
      },
      "errors": {
        "no_place": "Συγγνώμη, δεν βρέθηκε αυτό το '%{place}'.",
        "no_route": "Δεν βρέθηκε διαδρομή ανάμεσα σε αυτά τα δύο μέρη."
      },
      "instructions": {
        "against_oneway_without_exit": "Πηγαίνετε αντίθετα στον μονόδρομο %{name}",
        "continue_without_exit": "Συνεχίστε στην %{name}",
        "courtesy": "Οι οδηγίες είναι προσφορά του %{link}",
        "destination_without_exit": "Φτάσατε στον προορισμό σας",
        "end_oneway_without_exit": "Τέλος του μονόδρομου %{name}",
        "endofroad_left_without_exit": "Στο τέλος του δρόμου στρίψτε αριστερά στην %{name}",
        "endofroad_right_without_exit": "Στο τέλος του δρόμου στρίψτε δεξιά στην %{name}",
        "exit_counts": {
          "eighth": "8ος",
          "fifth": "5ος",
          "first": "1ος",
          "fourth": "4ος",
          "ninth": "9ος",
          "second": "2ος",
          "seventh": "7ος",
          "sixth": "6ος",
          "tenth": "10ος",
          "third": "3ος"
        },
        "exit_roundabout": "Βγείτε από την κυκλική διασταύρωση προς %{name}",
        "follow_without_exit": "Ακολουθήστε την %{name}",
        "fork_left_without_exit": "Στη διχάλα στρίψτε αριστερά στην %{name}",
        "fork_right_without_exit": "Στην διχάλα στρίψτε δεξιά στην %{name}",
        "leave_roundabout_without_exit": "Βγείτε από τον κυκλικό κόμβο - %{name}",
        "merge_left_without_exit": "Ελαφριά αριστερά προς %{name}",
        "merge_right_without_exit": "Ελαφριά δεξιά προς %{name}",
        "offramp_left": "Πάρτε την ράμπα στα αριστερά",
        "offramp_left_with_directions": "Πάρτε την ράμπα στα αριστερά προς τις %{directions}",
        "offramp_left_with_exit": "Πάρτε την έξοδο %{exit} στα αριστερά",
        "offramp_left_with_exit_directions": "Πάρτε την έξοδο %{exit} στα αριστερά προς τις %{directions}",
        "offramp_left_with_exit_name": "Πάρτε την έξοδο %{exit} στα αριστερά επάνω στο %{name}",
        "offramp_left_with_exit_name_directions": "Πάρτε την έξοδο %{exit} στα αριστερά επάνω στο %{name}, προς τις %{directions}",
        "offramp_left_with_name": "Πάρτε τη λωρίδα αριστερά προς %{name}",
        "offramp_left_with_name_directions": "Πάρτε την ράμπα στα αριστερά επάνω στο %{name}, προς τις %{directions}",
        "offramp_right": "Πάρτε την ράμπα στα δεξιά",
        "offramp_right_with_directions": "Πάρτε την ράμπα στα δεξιά προς τις %{directions}",
        "offramp_right_with_exit": "Πάρτε την έξοδο %{exit} στα δεξιά",
        "offramp_right_with_exit_directions": "Πάρτε την έξοδο %{exit} στα δεξιά προς τις %{directions}",
        "offramp_right_with_exit_name": "Πάρτε την έξοδο %{exit} στα δεξιά επάνω στο %{name}",
        "offramp_right_with_exit_name_directions": "Πάρτε την έξοδο %{exit} στα δεξιά επάνω στο %{name}, προς τις %{directions}",
        "offramp_right_with_name": "Πάρτε τη λωρίδα δεξιά προς %{name}",
        "offramp_right_with_name_directions": "Πάρτε την ράμπα στα δεξιά επάνω στο %{name}, προς τις %{directions}",
        "onramp_left": "Στρίψτε αριστερά επάνω στη ράμπα",
        "onramp_left_with_directions": "Στρίψτε αριστερά επάνω στη ράμπα προς τις %{directions}",
        "onramp_left_with_name_directions": "Στρίψτε αριστερά στην ράμπα επάνω στο %{name}, προς τις %{directions}",
        "onramp_left_without_directions": "Στρίψτε αριστερά επάνω στη ράμπα",
        "onramp_left_without_exit": "Στρίψτε αριστερά στη λωρίδα προς %{name}",
        "onramp_right": "Στρίψτε δεξιά επάνω στη ράμπα",
        "onramp_right_with_directions": "Στρίψτε δεξιά επάνω στη ράμπα προς τις %{directions}",
        "onramp_right_with_name_directions": "Στρίψτε δεξιά στην ράμπα επάνω στο %{name}, προς τις %{directions}",
        "onramp_right_without_directions": "Στρίψτε δεξιά επάνω στη ράμπα",
        "onramp_right_without_exit": "Στρίψτε δεξιά στη λωρίδα προς %{name}",
        "roundabout_with_exit": "Στην κυκλική διασταύρωση, πάρτε την %{exit}η έξοδο προς %{name}",
        "roundabout_with_exit_ordinal": "Στην κυκλική διασταύρωση, πάρτε την έξοδο %{exit} προς %{name}",
        "roundabout_without_exit": "Στον κυκλικό κόμβο βγείτε στο %{name}",
        "sharp_left_without_exit": "Κλειστά αριστερά στην %{name}",
        "sharp_right_without_exit": "Κλειστά δεξιά στην %{name}",
        "slight_left_without_exit": "Ελαφριά αριστερά στην %{name}",
        "slight_right_without_exit": "Ελαφριά δεξιά στην %{name}",
        "start_without_exit": "Ξεκινήστε στο %{name}",
        "stay_roundabout_without_exit": "Μείνετε στον κυκλικό κόμβο - %{name}",
        "turn_left_without_exit": "Στρίψτε αριστερά στην %{name}",
        "turn_right_without_exit": "Στρίψτε δεξιά στην %{name}",
        "unnamed": "ανώνυμος δρόμος",
        "uturn_without_exit": "Αναστροφή στην %{name}",
        "via_point_without_exit": "(μέσω σημείου)"
      },
      "time": "Διάρκεια"
    },
    "edit_help": "Μετακινήστε το χάρτη και να κάνετε ζουμ σε μια τοποθεσία που θέλετε να επεξεργαστείτε, στη συνέχεια, κάντε κλικ εδώ.",
    "embed": {
      "report_problem": "Αναφορά προβλήματος"
    },
    "key": {
      "title": "Υπόμνημα",
      "tooltip": "Υπόμνημα",
      "tooltip_disabled": "Το υπόμνημα δεν είναι διαθέσιμο σε αυτό το στρώμα"
    },
    "map": {
      "base": {
        "cycle_map": "Χάρτης Ποδηλασίας",
        "hot": "Ανθρωπιστικός",
        "standard": "Κανονικός",
        "transport_map": "Συγκοινωνιακός Χάρτης"
      },
      "copyright": "© <a href='%{copyright_url}'>Συνεισφέροντες του OpenStreetMap</a>",
      "donate_link_text": "<a class='donate-attr' href='%{donate_url}'>Κάνετε Δωρεά</a>",
      "hotosm": "Στύλ πλακιδίων από την <a href='%{hotosm_url}' target='_blank'>Ομάδα Humanitarian OpenStreetMap</a> φιλοξενείται από <a href='%{osmfrance_url}' target='_blank'>OpenStreetMap Γαλλίας</a>",
      "layers": {
        "data": "Δεδομένα Χάρτη",
        "gps": "Δημόσια ίχνη GPS",
        "header": "Στρώματα Χάρτη",
        "notes": "Σημειώσεις Χάρτη",
        "overlays": "Ενεργοποίηση επικαλύψεων για την αντιμετώπιση προβλημάτων του χάρτη",
        "title": "Στρώματα"
      },
      "locate": {
        "feetPopup": {
          "one": "Είστε εντός ενός ποδός από το σημείο",
          "other": "Είστε μεταξύ %{count} ποδιών από το σημείο"
        },
        "metersPopup": {
          "one": "Είστε εντός ενός μέτρου από το σημείο",
          "other": "Είστε μεταξύ %{count} μέτρων από το σημείο"
        },
        "title": "Προβολή της Τοποθεσίας μου"
      },
      "terms": "<a href='%{terms_url}' target='_blank'>Όροι ιστότοπου και API</a>",
      "thunderforest": "Ευγενική χορηγεία πλακιδίων από τον <a href='%{thunderforest_url}' target='_blank'>Andy Allan</a>",
      "zoom": {
        "in": "Μεγέθυνση",
        "out": "Σμίκρυνση"
      }
    },
    "notes": {
      "new": {
        "add": "Προσθήκη Σημείωσης",
        "advice": "Η σημείωση σας είναι δημόσια και μπορεί να χρησιμοποιηθεί για την ενημέρωση του χάρτη, γι'αυτό μην προστέθετε προσωπικές πληροφορίες, ή πληροφορίες από χάρτες που καλύπτονται από πνευματικά δικαιώματα ή καταχωρήσεις καταλόγου.",
        "intro": "Εντοπίσατε λάθος ή κάτι που λείπει; Πείτε το στους άλλους χαρτογράφους ώστε να λυθεί το πρόβλημα. Μετακινείστε το δείκτη στη σωστή θέση και γράψτε μια περιγραφή του προβλήματος ως εξήγηση."
      },
      "show": {
        "anonymous_warning": "Αυτό η σημείωση περιλαμβάνει σχόλια από ανώνυμους χρήστες που πρέπει να επαληθεύονται ανεξάρτητα.",
        "comment": "Σχολιάστε",
        "comment_and_resolve": "Σχολιάστε και Επιλύστε",
        "hide": "Απόκρυψη",
        "reactivate": "Επανενεργοποίηση",
        "resolve": "Επιλύστε"
      }
    },
    "query": {
      "error": "Σφάλμα επικοινωνίας με τον %{server}: %{error}",
      "node": "Κόμβος",
      "nothing_found": "Δεν βρέθηκαν χαρακτηριστικά",
      "relation": "Σχέση",
      "timeout": "Έληξε το χρονικό όριο επικοινωνίας με %{server}",
      "way": "Διαδρομή"
    },
    "share": {
      "cancel": "Ακύρωση",
      "center_marker": "Κεντράρισμα χάρτη στο δείκτη",
      "custom_dimensions": "Ορισμός προσαρμοσμένων διαστάσεων",
      "download": "Λήψη",
      "embed": "HTML",
      "format": "Μορφή:",
      "geo_uri": "Geo URI",
      "image": "Εικόνα",
      "image_size": "Η εικόνα θα εμφανίσει το κανονικό στρώμα στις",
      "include_marker": "Συμπερίληψη δείκτη",
      "link": "Σύνδεσμος ή HTML",
      "long_link": "Σύνδεσμος",
      "only_standard_layer": "Μόνο το τυπικό στρώμα μπορεί να εξαχθεί ως εικόνα",
      "paste_html": "Επικόλληση HTML για ενσωμάτωση στην ιστοσελίδα",
      "scale": "Κλίμακα:",
      "short_link": "Σύντομος Σύνδεσμος",
      "short_url": "Σύντομος Σύνδεμος",
      "title": "Διαμοιρασμός",
      "view_larger_map": "Προβολή Μεγαλύτερου Χάρτη"
    },
    "site": {
      "createnote_disabled_tooltip": "Μεγεθύνετε για να προσθέσετε μια σημείωση στο χάρτη",
      "createnote_tooltip": "Προσθέστε μια σημείωση στο χάρτη",
      "edit_disabled_tooltip": "Κάντε μεγέθυνση για να επεξεργαστείτε το χάρτη",
      "edit_tooltip": "Επεξεργασία του χάρτη",
      "map_data_zoom_in_tooltip": "Μεγεθύνετε τον χάρτη για να δείτε τα δεδομένα του χάρτη",
      "map_notes_zoom_in_tooltip": "Μεγεθύνετε τον χάρτη για να δείτε σημειώσεις",
      "queryfeature_disabled_tooltip": "Μεγεθύνετε τον χάρτη για να μάθετε περισσότερα για διάφορα χαρακτηριστικά",
      "queryfeature_tooltip": "Πληροφορίες χαρακτηριστικών"
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
      "anon_edits_link_text": "Μάθετε γιατί συμβαίνει αυτό.",
      "flash_player_required_html": "Χρειάζεστε Flash player για να χρησιμοποιήσετε το Potlatch, το Flash πρόγραμμα επεξεργασίας του OpenStreetMap. Μπορείτε να <a href=https://get.adobe.com/flashplayer/\">κάνετε λήψη του Flash Player από την τοποθεσία Adobe.com</a>. <a href=\"https://wiki.openstreetmap.org/wiki/Editing\">Πολλές άλλες επιλογές</a> είναι επίσης διαθέσιμες για επεξεργασία στο OpenStreetMap.",
      "id_not_configured": "Ο iD δεν έχει ρυθμιστεί",
      "no_iframe_support": "Ο περιηγητής σας δεν υποστηρίζει το στοιχείο iframe του HTML, που είναι απαραίτητο για αυτήν την λειτουργία.",
      "not_public": "Δεν έχετε ορίσει τις επεξεργασίες σας να είναι δημόσιες.",
      "not_public_description_html": "Δεν μπορείτε πλέον να επεξεργαστείτε το χάρτη αν δεν το κάνετε. Μπορείτε να κάνετε τις επεξεργασίες σας δημόσιες από την %{user_page}.",
      "potlatch2_not_configured": "Το Potlatch 2 δεν έχει ρυθμιστεί - παρακαλούμε δείτε https://wiki.openstreetmap.org/wiki/The_Rails_Port",
      "potlatch2_unsaved_changes": "Έχετε μη αποθηκευμένες αλλαγές. (Για να αποθηκεύσετε στο Potlatch 2, πρέπει να κάνετε κλικ στο «Αποθήκευση».)",
      "potlatch_unsaved_changes": "Έχετε μη αποθηκευμένες αλλαγές. (Για να αποθηκεύσετε στο Potlatch, πρέπει να αποεπιλέξτε οποιαδήποτε διαδρομή ή κόμβο, αν επεξεργάζεστε σε ζωντανή λειτουργία, ή απλά πατήστε «Αποθήκευση» εάν έχετε κουμπί αποθήκευσης.)",
      "user_page_link": "σελίδα χρήστη"
    },
    "index": {
      "remote_failed": "Η επεξεργασία απέτυχε - βεβαιωθείτε ότι ο JOSM ή ο Merkaartor έχουν φορτωθεί και η επιλογή τηλεχειρισμού είναι ενεργή"
    },
    "sidebar": {
      "search_results": "Αποτελέσματα Αναζήτησης"
    }
  },
  "time": {
    "am": "π.μ.",
    "formats": {
      "blog": "%e %B %Y",
      "default": "%d %B %Y %H:%M",
      "friendly": "%e %B %Y στις %H:%M",
      "long": "%A %d %B %Y %H:%M:%S %Z",
      "short": "%d %b %H:%M"
    },
    "pm": "μ.μ."
  }
});
