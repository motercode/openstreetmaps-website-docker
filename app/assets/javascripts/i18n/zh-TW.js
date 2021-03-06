I18n.translations || (I18n.translations = {});
I18n.translations["zh-TW"] = I18n.extend((I18n.translations["zh-TW"] || {}), {
  "browse": {
    "start_rjs": {
      "feature_warning": "載入 %{num_features} 項物件的資料，可能使您的瀏覽器延遲或無法回應。您是否想要顯示這些資料嗎？",
      "load_data": "載入資料",
      "loading": "正在載入…"
    }
  },
  "date": {
    "abbr_day_names": [
      "日",
      "一",
      "二",
      "三",
      "四",
      "五",
      "六"
    ],
    "abbr_month_names": [
      null,
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月"
    ],
    "day_names": [
      "星期日",
      "星期一",
      "星期二",
      "星期三",
      "星期四",
      "星期五",
      "星期六"
    ],
    "formats": {
      "default": "%Y-%m-%d",
      "long": "%Y年%b%d日",
      "short": "%b%d日"
    },
    "month_names": [
      null,
      "一月",
      "二月",
      "三月",
      "四月",
      "五月",
      "六月",
      "七月",
      "八月",
      "九月",
      "十月",
      "十一月",
      "十二月"
    ],
    "order": [
      "year",
      "month",
      "day"
    ]
  },
  "diary_entries": {
    "edit": {
      "marker_text": "日記項目位置"
    }
  },
  "geocoder": {
    "search_osm_nominatim": {
      "admin_levels": {
        "level10": "郊區邊界",
        "level2": "國界",
        "level4": "省界",
        "level5": "區界",
        "level6": "縣界",
        "level8": "市界",
        "level9": "村里界"
      },
      "prefix": {
        "aerialway": {
          "cable_car": "大型纜車",
          "chair_lift": "升降吊椅",
          "drag_lift": "上山牽引梯",
          "gondola": "小型纜車",
          "platter": "纜椅",
          "pylon": "高壓電塔",
          "station": "空中纜車車站",
          "t-bar": "T 字纜椅"
        },
        "aeroway": {
          "aerodrome": "機場",
          "airstrip": "飛機跑道",
          "apron": "停機坪",
          "gate": "登機口",
          "hangar": "機棚",
          "helipad": "直升機停機坪",
          "holding_position": "等待位置",
          "parking_position": "停車位置",
          "runway": "跑道",
          "taxiway": "滑行道",
          "terminal": "航廈"
        },
        "amenity": {
          "animal_shelter": "動物收容所",
          "arts_centre": "藝術中心",
          "atm": "提款機",
          "bank": "銀行",
          "bar": "酒吧",
          "bbq": "烤肉場",
          "bench": "長椅",
          "bicycle_parking": "自行車停車場",
          "bicycle_rental": "自行車出租",
          "biergarten": "啤酒庭園",
          "boat_rental": "船艇出租",
          "brothel": "妓院",
          "bureau_de_change": "外匯兌換店",
          "bus_station": "公車站",
          "cafe": "咖啡廳",
          "car_rental": "汽車出租",
          "car_sharing": "汽車共乘",
          "car_wash": "洗車",
          "casino": "賭場",
          "charging_station": "充電站",
          "childcare": "幼兒園",
          "cinema": "電影院",
          "clinic": "診所",
          "clock": "時鐘",
          "college": "學院",
          "community_centre": "社區中心",
          "courthouse": "法院",
          "crematorium": "火葬場",
          "dentist": "牙醫",
          "doctors": "醫師",
          "drinking_water": "飲用水",
          "driving_school": "駕訓班",
          "embassy": "大使館",
          "fast_food": "速食",
          "ferry_terminal": "渡輪碼頭",
          "fire_station": "消防隊",
          "food_court": "美食廣場",
          "fountain": "噴泉",
          "fuel": "燃料",
          "gambling": "博弈店",
          "grave_yard": "墓園",
          "grit_bin": "砂箱",
          "hospital": "醫院",
          "hunting_stand": "狩獵站",
          "ice_cream": "冰淇淋",
          "kindergarten": "幼兒園",
          "library": "圖書館",
          "marketplace": "市場",
          "monastery": "修道院",
          "motorcycle_parking": "機車停車場",
          "nightclub": "夜總會",
          "nursing_home": "療養院",
          "office": "辦公室",
          "parking": "停車場",
          "parking_entrance": "停車場入口",
          "parking_space": "停車位",
          "pharmacy": "藥房",
          "place_of_worship": "宗教場所",
          "police": "警察",
          "post_box": "郵筒",
          "post_office": "郵局",
          "preschool": "學前教育",
          "prison": "監獄",
          "pub": "酒館",
          "public_building": "公共建築",
          "recycling": "回收點",
          "restaurant": "餐廳",
          "retirement_home": "養老院",
          "sauna": "三溫暖",
          "school": "學校",
          "shelter": "涼亭",
          "shop": "商店",
          "shower": "淋浴",
          "social_centre": "聚會所",
          "social_club": "社交俱樂部",
          "social_facility": "社會福利設施",
          "studio": "錄音室",
          "swimming_pool": "游泳池",
          "taxi": "計程車",
          "telephone": "公共電話",
          "theatre": "劇院",
          "toilets": "廁所",
          "townhall": "市政廳",
          "university": "大學",
          "vending_machine": "自動販賣機",
          "veterinary": "獸醫",
          "village_hall": "村政廳",
          "waste_basket": "垃圾桶",
          "waste_disposal": "垃圾子車",
          "water_point": "取水點",
          "youth_centre": "青年中心"
        },
        "boundary": {
          "administrative": "行政區邊界",
          "census": "人口普查邊界",
          "national_park": "國家公園",
          "protected_area": "保護區"
        },
        "bridge": {
          "aqueduct": "高架水道",
          "boardwalk": "木板走道",
          "suspension": "吊橋",
          "swing": "平旋橋",
          "viaduct": "高架橋",
          "yes": "橋"
        },
        "building": {
          "yes": "建築物"
        },
        "craft": {
          "brewery": "釀酒廠",
          "carpenter": "木匠",
          "electrician": "電工",
          "gardener": "園丁",
          "painter": "畫家",
          "photographer": "攝影師",
          "plumber": "管道工",
          "shoemaker": "鞋匠",
          "tailor": "裁縫師",
          "yes": "工藝品店"
        },
        "emergency": {
          "ambulance_station": "急救站",
          "assembly_point": "集合處",
          "defibrillator": "除顫器",
          "landing_site": "緊急降落點",
          "phone": "緊急電話",
          "water_tank": "緊急水箱",
          "yes": "緊急"
        },
        "highway": {
          "abandoned": "廢棄道路",
          "bridleway": "馬車道",
          "bus_guideway": "導向公車道",
          "bus_stop": "公車站",
          "construction": "建造中道路",
          "corridor": "走廊",
          "cycleway": "自行車道",
          "elevator": "電梯",
          "emergency_access_point": "緊急聯絡點",
          "footway": "步道",
          "ford": "河床便道",
          "give_way": "讓路標誌",
          "living_street": "生活街道",
          "milestone": "里程標",
          "motorway": "高速公路",
          "motorway_junction": "高速公路出口",
          "motorway_link": "高速公路聯絡道",
          "passing_place": "避車彎",
          "path": "小徑",
          "pedestrian": "人行道",
          "platform": "月台",
          "primary": "一級道路",
          "primary_link": "一級道路聯絡道",
          "proposed": "計畫中道路",
          "raceway": "賽道",
          "residential": "住宅區道路",
          "rest_area": "休息區",
          "road": "道路",
          "secondary": "二級道路",
          "secondary_link": "二級道路聯絡道",
          "service": "服務道路",
          "services": "高速公路服務區",
          "speed_camera": "測速照相機",
          "steps": "階梯",
          "stop": "停止標誌",
          "street_lamp": "路燈",
          "tertiary": "三級道路",
          "tertiary_link": "地區道路聯絡道",
          "track": "產業道路",
          "traffic_signals": "交通號誌",
          "trail": "山徑",
          "trunk": "快速道路",
          "trunk_link": "快速道路聯絡道",
          "turning_loop": "環形迴車道",
          "unclassified": "無編制道路",
          "yes": "道路"
        },
        "historic": {
          "archaeological_site": "考古遺址",
          "battlefield": "古戰場",
          "boundary_stone": "界石",
          "building": "歷史建築",
          "bunker": "掩體",
          "castle": "城堡",
          "church": "教堂",
          "city_gate": "城門",
          "citywalls": "城牆",
          "fort": "堡壘",
          "heritage": "遺蹟",
          "house": "房屋",
          "icon": "聖像",
          "manor": "莊園",
          "memorial": "紀念館",
          "mine": "礦場",
          "mine_shaft": "礦井",
          "monument": "古蹟",
          "roman_road": "羅馬道路",
          "ruins": "廢墟",
          "stone": "石造史蹟",
          "tomb": "墳墓",
          "tower": "塔",
          "wayside_cross": "路邊十字架",
          "wayside_shrine": "路邊神龕",
          "wreck": "殘骸",
          "yes": "古蹟"
        },
        "junction": {
          "yes": "路口"
        },
        "landuse": {
          "allotments": "社區農園",
          "basin": "盆地",
          "brownfield": "低污染再利用地",
          "cemetery": "墓地",
          "commercial": "商業區",
          "conservation": "保留區",
          "construction": "建造中區域",
          "farm": "農業用地",
          "farmland": "農地",
          "farmyard": "農舍",
          "forest": "人工林",
          "garages": "倉庫",
          "grass": "草坪",
          "greenfield": "空地",
          "industrial": "工業區",
          "landfill": "垃圾掩埋場",
          "meadow": "牧草地",
          "military": "軍事區",
          "mine": "礦場",
          "orchard": "果園",
          "quarry": "露天礦場",
          "railway": "鐵路",
          "recreation_ground": "遊樂場",
          "reservoir": "蓄水設施",
          "reservoir_watershed": "蓄水設施集水區",
          "residential": "住宅區",
          "retail": "零售店",
          "road": "道路用地",
          "village_green": "社區綠地",
          "vineyard": "葡萄園",
          "yes": "土地利用"
        },
        "leisure": {
          "beach_resort": "海灘遊樂區",
          "bird_hide": "賞鳥亭",
          "common": "公共用地",
          "dog_park": "遛狗公園",
          "firepit": "火坑",
          "fishing": "垂釣區",
          "fitness_centre": "健身中心",
          "fitness_station": "健身設施",
          "garden": "花園",
          "golf_course": "高爾夫球道",
          "horse_riding": "馬場",
          "ice_rink": "溜冰場",
          "marina": "小船塢",
          "miniature_golf": "小型高爾夫球場",
          "nature_reserve": "自然保護區",
          "park": "公園",
          "pitch": "運動場",
          "playground": "遊樂區",
          "recreation_ground": "遊樂場",
          "resort": "度假村",
          "sauna": "三溫暖",
          "slipway": "船臺",
          "sports_centre": "運動中心",
          "stadium": "體育館",
          "swimming_pool": "游泳池",
          "track": "跑道",
          "water_park": "水上樂園",
          "yes": "休閒"
        },
        "man_made": {
          "adit": "坑道",
          "beacon": "信標台",
          "beehive": "蜂巢",
          "breakwater": "防波堤",
          "bridge": "橋",
          "bunker_silo": "掩體",
          "chimney": "煙囪",
          "crane": "起重機",
          "dolphin": "繫船柱",
          "dyke": "堤",
          "embankment": "堤",
          "flagpole": "旗竿",
          "gasometer": "儲氣槽",
          "groyne": "丁壩",
          "kiln": "窯",
          "lighthouse": "燈塔",
          "mast": "柱杆",
          "mine": "礦場",
          "mineshaft": "礦井",
          "monitoring_station": "監控站台",
          "petroleum_well": "油井",
          "pier": "碼頭",
          "pipeline": "管線",
          "silo": "筒倉",
          "storage_tank": "儲油罐",
          "surveillance": "監視攝影機",
          "tower": "塔",
          "wastewater_plant": "污水處理處",
          "water_tower": "水塔",
          "water_well": "牆",
          "water_works": "供水設施",
          "watermill": "水車",
          "windmill": "風車",
          "works": "工廠",
          "yes": "人工設施"
        },
        "military": {
          "airfield": "軍用機場",
          "barracks": "軍營",
          "bunker": "掩體",
          "yes": "軍事"
        },
        "mountain_pass": {
          "yes": "埡口"
        },
        "natural": {
          "bay": "灣",
          "beach": "海灘",
          "cape": "海角",
          "cave_entrance": "洞穴入口",
          "cliff": "懸崖",
          "crater": "火山口",
          "dune": "沙丘",
          "fell": "高原荒地",
          "fjord": "峽灣",
          "forest": "管理林",
          "geyser": "間歇泉",
          "glacier": "冰河",
          "grassland": "雜草地",
          "heath": "石楠荒地",
          "hill": "小山",
          "island": "島嶼",
          "land": "陸地",
          "marsh": "河川濕地",
          "moor": "停泊處",
          "mud": "泥地",
          "peak": "山峰",
          "point": "點",
          "reef": "礁",
          "ridge": "山脊",
          "rock": "獨立岩",
          "saddle": "鞍部",
          "sand": "沙地",
          "scree": "碎石堆",
          "scrub": "灌木",
          "spring": "泉",
          "stone": "巨石",
          "strait": "海峡",
          "tree": "樹木",
          "valley": "谷地",
          "volcano": "火山",
          "water": "水",
          "wetland": "濕地",
          "wood": "自然林"
        },
        "office": {
          "accountant": "會計師事務所",
          "administrative": "管理局",
          "architect": "建築師事務所",
          "association": "協會",
          "company": "公司",
          "educational_institution": "教育機構",
          "employment_agency": "人力仲介",
          "estate_agent": "房地產仲介",
          "government": "政府辦事處",
          "insurance": "保險公司辦公室",
          "it": "IT 辦公室",
          "lawyer": "律師",
          "ngo": "非政府組織辦公室",
          "telecommunication": "電信業辦事處",
          "travel_agent": "旅行社",
          "yes": "辦公室"
        },
        "place": {
          "allotments": "社區農園",
          "city": "城市",
          "city_block": "街區",
          "country": "國家",
          "county": "縣",
          "farm": "農田",
          "hamlet": "村莊",
          "house": "房屋",
          "houses": "房屋",
          "island": "島嶼",
          "islet": "礁岩",
          "isolated_dwelling": "獨立住宅",
          "locality": "地區",
          "municipality": "自治市",
          "neighbourhood": "社區",
          "postcode": "郵遞區號",
          "quarter": "住處",
          "region": "區域",
          "sea": "海",
          "square": "廣場",
          "state": "省",
          "subdivision": "次分區",
          "suburb": "郊區",
          "town": "鄉鎮",
          "unincorporated_area": "非建制地區",
          "village": "村里",
          "yes": "地點"
        },
        "railway": {
          "abandoned": "已拆除鐵路",
          "construction": "建造中鐵路",
          "disused": "廢棄鐵路",
          "funicular": "纜索鐵路",
          "halt": "鐵路招呼站",
          "junction": "鐵路交匯處",
          "level_crossing": "平交道",
          "light_rail": "輕軌",
          "miniature": "微型鐵路",
          "monorail": "單軌鐵路",
          "narrow_gauge": "窄軌鐵路",
          "platform": "鐵路月臺",
          "preserved": "保留鐵路",
          "proposed": "規劃中鐵路",
          "spur": "鐵路支線",
          "station": "鐵路車站",
          "stop": "鐵路招呼站",
          "subway": "地下鐵",
          "subway_entrance": "地下鐵出入口",
          "switch": "道岔",
          "tram": "路面電車軌道",
          "tram_stop": "路面電車停靠站"
        },
        "shop": {
          "alcohol": "酒館",
          "antiques": "古董店",
          "art": "藝品店",
          "bakery": "麵包店",
          "beauty": "美容店",
          "beverages": "飲料店",
          "bicycle": "自行車店",
          "bookmaker": "投注處",
          "books": "書店",
          "boutique": "精品店",
          "butcher": "肉品店",
          "car": "汽車店",
          "car_parts": "汽車零件",
          "car_repair": "汽車維修",
          "carpet": "地毯店",
          "charity": "慈善商店",
          "chemist": "化學材料行",
          "clothes": "服飾店",
          "computer": "電腦商店",
          "confectionery": "甜點店",
          "convenience": "便利商店",
          "copyshop": "複印店",
          "cosmetics": "化妝品店",
          "deli": "高級食品店",
          "department_store": "百貨商店",
          "discount": "特價商品店",
          "doityourself": "DIY 用品店",
          "dry_cleaning": "乾洗",
          "electronics": "電子材料行",
          "estate_agent": "房地產仲介",
          "farm": "農場商店",
          "fashion": "時裝店",
          "fish": "魚貨店",
          "florist": "花店",
          "food": "食品店",
          "funeral_directors": "葬儀社",
          "furniture": "傢俱行",
          "gallery": "畫廊",
          "garden_centre": "園藝中心",
          "general": "一般商店",
          "gift": "禮品店",
          "greengrocer": "生鮮食品店",
          "grocery": "雜貨店",
          "hairdresser": "理髮店",
          "hardware": "五金行",
          "hifi": "音響店",
          "houseware": "生活用品店",
          "interior_decoration": "室內裝潢",
          "jewelry": "珠寶店",
          "kiosk": "販售亭",
          "kitchen": "廚房用品店",
          "laundry": "洗衣店",
          "lottery": "樂透",
          "mall": "購物商場",
          "market": "市場",
          "massage": "按摩店",
          "mobile_phone": "行動通訊行",
          "motorcycle": "機車行",
          "music": "唱片行",
          "newsagent": "新聞代理商",
          "optician": "驗光師",
          "organic": "有機食品店",
          "outdoor": "戶外用品店",
          "paint": "油漆店",
          "pawnbroker": "當鋪",
          "pet": "寵物店",
          "pharmacy": "藥房",
          "photo": "照相館",
          "seafood": "海產",
          "second_hand": "二手商品店",
          "shoes": "鞋店",
          "sports": "體育用品店",
          "stationery": "文具店",
          "supermarket": "超級市場",
          "tailor": "裁縫店",
          "ticket": "售票處",
          "tobacco": "菸草販賣",
          "toys": "玩具店",
          "travel_agency": "旅行社",
          "tyres": "輪胎販售",
          "vacant": "空置店舖",
          "variety_store": "雜貨店",
          "video": "影音店",
          "wine": "葡萄酒館",
          "yes": "商店"
        },
        "tourism": {
          "alpine_hut": "山屋",
          "apartment": "假日公寓",
          "artwork": "美工",
          "attraction": "景點",
          "bed_and_breakfast": "家庭旅館",
          "cabin": "小木屋",
          "camp_site": "營地",
          "caravan_site": "RV 宿營區",
          "chalet": "小木屋",
          "gallery": "藝廏",
          "guest_house": "賓館",
          "hostel": "旅舍",
          "hotel": "酒店",
          "information": "旅遊中心",
          "motel": "汽車旅館",
          "museum": "博物館",
          "picnic_site": "野餐地",
          "theme_park": "主題公園",
          "viewpoint": "觀景點",
          "zoo": "動物園"
        },
        "tunnel": {
          "building_passage": "建築物通道",
          "culvert": "涵管",
          "yes": "隧道"
        },
        "waterway": {
          "artificial": "人工水道",
          "boatyard": "船塢",
          "canal": "運河",
          "dam": "水壩",
          "derelict_canal": "廢棄運河",
          "ditch": "小溝渠",
          "dock": "碼頭",
          "drain": "溝渠",
          "lock": "水門",
          "lock_gate": "船閘",
          "mooring": "停泊處",
          "rapids": "急流",
          "river": "河流",
          "stream": "小溪",
          "wadi": "乾河",
          "waterfall": "瀑布",
          "weir": "堰",
          "yes": "水道"
        }
      },
      "prefix_format": "%{name}"
    }
  },
  "javascripts": {
    "changesets": {
      "show": {
        "comment": "評論",
        "hide_comment": "隱藏",
        "subscribe": "訂閱",
        "unhide_comment": "取消隱藏",
        "unsubscribe": "取消訂閱"
      }
    },
    "close": "關閉",
    "context": {
      "add_note": "在此新增註記",
      "centre_map": "中央地圖在此",
      "directions_from": "從這裡的路線",
      "directions_to": "到這裡的路線",
      "query_features": "查詢圖徵",
      "show_address": "顯示地址"
    },
    "directions": {
      "ascend": "上升",
      "descend": "下降",
      "directions": "路線",
      "distance": "距離",
      "engines": {
        "fossgis_osrm_bike": "自行車（OSRM）",
        "fossgis_osrm_car": "開車 (OSRM)",
        "fossgis_osrm_foot": "步行（OSRM）",
        "graphhopper_bicycle": "自行車（GraphHopper）",
        "graphhopper_car": "汽車(GraphHopper)",
        "graphhopper_foot": "徒步 (GraphHopper)"
      },
      "errors": {
        "no_place": "抱歉 - 查無地點「%{place}」。",
        "no_route": "查無兩個地點間的路徑。"
      },
      "instructions": {
        "against_oneway_without_exit": "沿著單行道 %{name} 行駛",
        "continue_without_exit": "繼續行駛 %{name}",
        "courtesy": "感謝 %{link} 提供路線資訊",
        "destination_without_exit": "到達目地",
        "end_oneway_without_exit": "單行道終點於 %{name}",
        "endofroad_left_without_exit": "在道路盡頭左轉至%{name}",
        "endofroad_right_without_exit": "在道路盡頭右轉至%{name}",
        "exit_counts": {
          "eighth": "第 8",
          "fifth": "第 5",
          "first": "第 1",
          "fourth": "第 4",
          "ninth": "第 9",
          "second": "第 2",
          "seventh": "第 7",
          "sixth": "第 6",
          "tenth": "第 10",
          "third": "第 3"
        },
        "exit_roundabout": "離開圓環進入 %{name}",
        "follow_without_exit": "延著 %{name}",
        "fork_left_without_exit": "在叉路口左轉至%{name}",
        "fork_right_without_exit": "在叉路口右轉至%{name}",
        "leave_roundabout_without_exit": "離開圓環 - %{name}",
        "merge_left_without_exit": "向左併線至%{name}",
        "merge_right_without_exit": "向右併線至%{name}",
        "offramp_left": "往左側上坡",
        "offramp_left_with_directions": "在左側上坡朝%{directions}",
        "offramp_left_with_exit": "在左側往出口 %{exit}",
        "offramp_left_with_exit_directions": "在左側沿著出口 %{exit} 朝 %{directions}",
        "offramp_left_with_exit_name": "在左側沿著出口 %{exit} 前往 %{name}",
        "offramp_left_with_exit_name_directions": "在左側沿著出口 %{exit} 前往 %{name} 朝 %{directions}",
        "offramp_left_with_name": "在左側上坡前往%{name}",
        "offramp_left_with_name_directions": "在左側往%{name}的上坡朝%{directions}",
        "offramp_right": "往右側上坡",
        "offramp_right_with_directions": "在右側上坡朝%{directions}",
        "offramp_right_with_exit": "在右側往出口 %{exit}",
        "offramp_right_with_exit_directions": "在右側沿著出口 %{exit} 朝 %{directions}",
        "offramp_right_with_exit_name": "在右側沿著出口 %{exit} 前往 %{name}",
        "offramp_right_with_exit_name_directions": "在右側沿著出口 %{exit} 前往 %{name} 朝 %{directions}",
        "offramp_right_with_name": "在右側上坡前往%{name}",
        "offramp_right_with_name_directions": "在右側往%{name}的上坡朝%{directions}",
        "onramp_left": "左轉前往上坡",
        "onramp_left_with_directions": "左轉前往上坡朝%{directions}",
        "onramp_left_with_name_directions": "在往%{name}的上坡左轉朝%{directions}",
        "onramp_left_without_directions": "左轉前往上坡",
        "onramp_left_without_exit": "左轉上坡至%{name}",
        "onramp_right": "右轉前往上坡",
        "onramp_right_with_directions": "右轉前往上坡朝%{directions}",
        "onramp_right_with_name_directions": "在往%{name}的上坡右轉朝%{directions}",
        "onramp_right_without_directions": "右轉前往上坡",
        "onramp_right_without_exit": "右轉上坡至%{name}",
        "roundabout_with_exit": "從圓環出口 %{exit} 離開至 %{name}",
        "roundabout_with_exit_ordinal": "於圓環的 %{exit} 出口離開進入 %{name}",
        "roundabout_without_exit": "於圓環離開進入 %{name}",
        "sharp_left_without_exit": "左急轉至 %{name}",
        "sharp_right_without_exit": "右急轉至 %{name}",
        "slight_left_without_exit": "靠左至 %{name}",
        "slight_right_without_exit": "靠右至 %{name}",
        "start_without_exit": "在 %{name} 開始",
        "stay_roundabout_without_exit": "繼續在圓環 - %{name}",
        "turn_left_without_exit": "左轉至 %{name}",
        "turn_right_without_exit": "右轉至 %{name}",
        "unnamed": "未命名道路",
        "uturn_without_exit": "迴轉沿著 %{name}",
        "via_point_without_exit": "(通過點)"
      },
      "time": "時間"
    },
    "edit_help": "將地圖移至你想編輯的位置並放大，然後按這裡。",
    "embed": {
      "report_problem": "回報問題"
    },
    "key": {
      "title": "圖例",
      "tooltip": "圖例",
      "tooltip_disabled": "圖例不適用這個圖層"
    },
    "map": {
      "base": {
        "cycle_map": "自行車地圖",
        "hot": "人道救援",
        "standard": "標準",
        "transport_map": "交通運輸地圖"
      },
      "copyright": "© <a href='%{copyright_url}'>OpenStreetMap 貢獻者</a>",
      "donate_link_text": "<a class='donate-attr' href='%{donate_url}'>來捐款吧</a>",
      "hotosm": "由 <a href='%{osmfrance_url}' target='_blank'>OpenStreetMap 法國</a>主持的<a href='%{hotosm_url}' target='_blank'>人道 OpenStreetMap 團隊</a>提供的影像塊樣式",
      "layers": {
        "data": "地圖資料",
        "gps": "公開GPS軌跡",
        "header": "地圖圖層",
        "notes": "地圖註記",
        "overlays": "開啟覆蓋層，以為地圖解決問題",
        "title": "圖層"
      },
      "locate": {
        "feetPopup": {
          "one": "您距離此地點在 1 英尺內",
          "other": "您距離此地點在 %{count} 英尺內"
        },
        "metersPopup": {
          "one": "您距離此地點在 1 公尺內",
          "other": "您距離此地點在 %{count} 公尺內"
        },
        "title": "顯示我的位置"
      },
      "terms": "<a href='%{terms_url}' target='_blank'>網站與 API 項目</a>",
      "thunderforest": "由 <a href='%{thunderforest_url}' target='_blank'>Andy Allan</a> 提供的影像塊",
      "zoom": {
        "in": "放大",
        "out": "縮小"
      }
    },
    "notes": {
      "new": {
        "add": "送出註記",
        "advice": "您的註記已公開並可用於更新地圖，因此請不要輸入個人訊息，或是來自於具版權保護地圖的訊息以及目錄清單。",
        "intro": "發現錯誤或缺少些什麼東西嗎？請告訴其他地圖製作者以便於我們處理。將標記移動到正確的位置並輸入註記，以解釋問題。"
      },
      "show": {
        "anonymous_warning": "此項註記包含來自匿名使用者的評論，應作獨立核實。",
        "comment": "評論",
        "comment_and_resolve": "評論並解決",
        "hide": "隱藏",
        "reactivate": "重新開啟",
        "resolve": "解決"
      }
    },
    "query": {
      "error": "%{server} 連線錯誤：%{error}",
      "node": "節點",
      "nothing_found": "找不到圖徵",
      "relation": "關聯",
      "timeout": "%{server} 連線逾時",
      "way": "路徑"
    },
    "share": {
      "cancel": "取消",
      "center_marker": "將標記設為地圖中心點",
      "custom_dimensions": "設定自訂的尺寸",
      "download": "下載",
      "embed": "HTML",
      "format": "格式：",
      "geo_uri": "Geo URL",
      "image": "圖片",
      "image_size": "標準圖層圖片顯示尺寸為",
      "include_marker": "包括標記",
      "link": "連結或 HTML",
      "long_link": "連結",
      "only_standard_layer": "只有標準圖層能匯出成圖片",
      "paste_html": "貼上 HTML 以嵌入網站",
      "scale": "比例：",
      "short_link": "簡短連結",
      "short_url": "簡短 URL",
      "title": "分享",
      "view_larger_map": "查看更大的地圖"
    },
    "site": {
      "createnote_disabled_tooltip": "放大以在地圖加入註記",
      "createnote_tooltip": "在地圖加入註記",
      "edit_disabled_tooltip": "放大以編輯地圖",
      "edit_tooltip": "編輯地圖",
      "map_data_zoom_in_tooltip": "放大以查看地圖圖資",
      "map_notes_zoom_in_tooltip": "放大以查看註記",
      "queryfeature_disabled_tooltip": "放大地圖以查询圖徵",
      "queryfeature_tooltip": "查詢圖徵"
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
      "anon_edits_link_text": "瞭解為什麼這很重要。",
      "flash_player_required_html": "您需要 Flash player 才能使用 Potlatch，OpenStreetMap Flash 編輯器。您可以<a href=\"https://get.adobe.com/flashplayer/\">在 Adobe.com 下載 Flash Player</a>。<a href=\"https://wiki.openstreetmap.org/wiki/Editing\">還有其他許多選擇</a>也可以編輯 OpenStreetMap。",
      "id_not_configured": "iD 尚未設定",
      "no_iframe_support": "您的瀏覽器不支援 HTML 嵌入式框架，這是這項功能所必要的。",
      "not_public": "您尚未將您的編輯設為公開。",
      "not_public_description_html": "在您這麼做之前將無法再編輯地圖。您可以在您的 %{user_page} 將自己的編輯設定為公開。",
      "potlatch2_not_configured": "Potlatch 2 尚未設定 - 請參閱 https://wiki.openstreetmap.org/wiki/The_Rails_Port#Potlatch_2 以取得更多資訊",
      "potlatch2_unsaved_changes": "您有未儲存的更改。 (要在 Potlatch 2 中儲存，您應按一下儲存。)",
      "potlatch_unsaved_changes": "您還有未儲存的變更。 (要在 Potlatch 中儲存，您應該取消選擇目前的路徑或節點 (如果是在清單模式編輯)，或是點選儲存 (如果有儲存按鈕)。)",
      "user_page_link": "使用者頁面"
    },
    "index": {
      "remote_failed": "編輯失敗 - 請確定已載入 JOSM 或 Merkaartor 並開啟遠端控制選項"
    },
    "sidebar": {
      "search_results": "搜尋結果"
    }
  },
  "time": {
    "am": "上午",
    "formats": {
      "blog": "%Y年%B%e日",
      "default": "%Y年%b%d日 %A %H:%M:%S %Z",
      "friendly": "%Y 年 %B %e 日 %H 時 %M 分",
      "long": "%Y年%b%d日 %H:%M",
      "short": "%b%d日 %H:%M"
    },
    "pm": "下午"
  }
});
