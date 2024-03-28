const data = [
    {
        "name": "MOUNT MARCY",
        "elevation": 5344,
        "ascent": 3166,
        "route": 14.8,
        "difficulty": 5,
        "picture": "images/marcy.jpg",
        "topo": "images/marcytopo.jpg",
        "link": "https://www.google.com/maps/place/Mt+Marcy/@44.110544,-74.0230628,11.52z/data=!4m14!1m7!3m6!1s0x4ccadce685a92c9b:0xdf101f7317c5fa20!2sMt+Marcy!8m2!3d44.1125536!4d-73.9234763!16zL20vMDJydHFz!3m5!1s0x4ccadce685a92c9b:0xdf101f7317c5fa20!8m2!3d44.1125536!4d-73.9234763!16zL20vMDJydHFz?entry=ttu"
    },
        {
        "name": "ALGONQUIN PEAK",
        "elevation": 5114,
        "ascent": 2936,
        "route": 9.6,
        "difficulty": 5,
        "picture": "images/algonquin.jpg",
        "topo": "images/algonquintopo.jpg",
        "link": "https://www.google.com/maps/place/Algonquin+Peak/@44.1436625,-73.9968354,15z/data=!3m1!4b1!4m6!3m5!1s0x4ccade724ba74b1d:0x9b8dffcc393ac641!8m2!3d44.1436635!4d-73.9865357!16zL20vMDZkZ21s?entry=ttu"

    },
    {
        "name": "MOUNT HAYSTACK",
        "elevation": 4960,
        "ascent": 3570,
        "route": 17.8,
        "difficulty": 7,
        "picture": "images/haystack.jpg",
        "topo": "images/haystacktopo.png",
        "link": "https://www.google.com/maps/place/Mt+Haystack/@44.1056083,-73.9107193,15z/data=!3m1!4b1!4m6!3m5!1s0x4ccadccd914e1ed5:0x7c2a2f40fa585eae!8m2!3d44.1056093!4d-73.9004196!16zL20vMDZnN3E5?entry=ttu"

    },
    {
        "name": "MOUNT SKYLIGHT",
        "elevation": 4926,
        "ascent": 4265,
        "route": 17.9,
        "difficulty": 7,
        "picture": "images/skylight.jpg",
        "topo": "images/skylighttopo.png",
        "link": "https://www.google.com/maps/place/Mt+Skylight/@44.0994977,-73.9409983,15z/data=!3m1!4b1!4m6!3m5!1s0x4ccadc948f172cf1:0x8f7b062982ea38bd!8m2!3d44.0994987!4d-73.9306986!16zL20vMDZqel9s?entry=ttu"

    },
    {
        "name": "WHITEFACE MOUNTAIN",
        "elevation": 4867,
        "ascent": 2535,
        "route": 10.4,
        "difficulty": 4,
        "picture": "images/whiteface.jpg",
        "topo": "images/whitefacetopo.png",
        "link": "https://www.google.com/maps/place/Whiteface+Mountain/@44.3658794,-73.9129453,15z/data=!3m1!4b1!4m6!3m5!1s0x4ccafdcc8557d667:0x81d6ea6aeba0376b!8m2!3d44.3658804!4d-73.9026456!16zL20vMDZxdndn?entry=ttu"

    },
    {
        "name": "DIX MOUNTAIN",
        "elevation": 4857,
        "ascent": 2800,
        "route": 13.2,
        "difficulty": 7,
        "picture": "images/dix.jpg",
        "topo": "images/dixtopo.png",
        "link": "https://www.google.com/maps/place/Dix+Mountain/@44.0822746,-73.7965468,15z/data=!3m1!4b1!4m6!3m5!1s0x4ccac16a3832e1d5:0xa3a11ee2c6cf3682!8m2!3d44.0822756!4d-73.7862471!16zL20vMDZ6Zzkx?entry=ttu"

    },
    {
        "name": "GRAY PEAK",
        "elevation": 4840,
        "ascent": 4178,
        "route": 16,
        "difficulty": 7,
        "picture": "images/gray.jpg",
        "topo": "images/graytopo.png",
        "link": "https://www.google.com/maps/place/Gray+Peak/@44.1114417,-73.9451655,15z/data=!3m1!4b1!4m6!3m5!1s0x4ccadcfa78a1e813:0xcd15168ae0b7afdc!8m2!3d44.1114427!4d-73.9348658!16s%2Fm%2F0279_sg?entry=ttu"

    },
    {
        "name": "IROQUOIS PEAK",
        "elevation": 4840,
        "ascent": 3250,
        "route": 11.6,
        "difficulty": 6,
        "picture": "images/iroquois.jpg",
        "topo": "images/iroquoistopo.jpg",
        "link": "https://www.google.com/maps/place/Iroquois+Peak/@44.1369963,-74.0085023,15z/data=!3m1!4b1!4m6!3m5!1s0x4ccade65caa25859:0xbd07a9fe575ab987!8m2!3d44.1369973!4d-73.9982026!16zL20vMDd3NWNk?entry=ttu"

    },
    {
        "name": "BASIN MOUNTAIN",
        "elevation": 4827,
        "ascent": 3650,
        "route": 16.5,
        "difficulty": 6,
        "picture": "images/basin.jpg",
        "topo": "images/basintopo.png",
        "link": "https://www.google.com/maps/place/Basin+Mountain/@44.1211629,-73.8965524,15z/data=!3m1!4b1!4m6!3m5!1s0x4ccac2d2da08de71:0x9f0f50da9031c364!8m2!3d44.1211639!4d-73.8862527!16s%2Fm%2F02vzr9f?entry=ttu"

    },
    {
        "name": "GOTHICS",
        "elevation": 4736,
        "ascent": 4070,
        "route": 10,
        "difficulty": 5,
        "picture": "images/gothics.jpg",
        "topo": "images/gothicstopo.png",
        "link": "https://www.google.com/maps/place/Gothics/@44.1281069,-73.8673846,15z/data=!3m1!4b1!4m6!3m5!1s0x4ccac2eaabc03fdb:0x5dbd6ea3b5bafe2c!8m2!3d44.1281079!4d-73.8570849!16s%2Fm%2F0287y1z?entry=ttu"

    },
    {
        "name": "MOUNT COLDEN",
        "elevation": 4714,
        "ascent": 2850,
        "route": 15.2,
        "difficulty": 5,
        "picture": "images/colden.jpg",
        "topo": "images/coldentopo.png",
        "link": "https://www.google.com/maps/place/Mt+Colden/@44.1269966,-73.970167,15z/data=!3m1!4b1!4m6!3m5!1s0x4ccaddb5834d601d:0x81753dbbd14bfefb!8m2!3d44.1269976!4d-73.9598673!16zL20vMGNkbXNj?entry=ttu"
        
    },
    {
        "name": "GIANT MOUNTAIN",
        "elevation": 4627,
        "ascent": 3050,
        "route": 6,
        "difficulty": 4,
        "picture": "images/giant.jpg",
        "topo": "images/gianttopo.jpg",
        "link": "https://www.google.com/maps/place/Giant+Mountain/@44.1612871,-73.7307716,15z/data=!3m1!4b1!4m6!3m5!1s0x4ccaea52324d6a7d:0xea029ee5b162091c!8m2!3d44.1612881!4d-73.7204719!16s%2Fm%2F02872n8?entry=ttu"
        
    },
    {
        "name": "NIPPLETOP",
        "elevation": 4620,
        "ascent": 4050,
        "route": 12.6,
        "difficulty": 5,
        "picture": "images/nippletop.jpg",
        "topo": "images/nippletoptopo.png",
        "link": "https://www.google.com/maps/place/Nippletop/@44.0894023,-73.854744,14z/data=!3m1!4b1!4m6!3m5!1s0x4ccac3c355049c11:0x6263ab54cdb09597!8m2!3d44.0894095!4d-73.8157755!16s%2Fm%2F03cqv72?entry=ttu"
    
    },
    {
        "name": "SANTANONI PEAK",
        "elevation": 4607,
        "ascent": 2860,
        "route": 11.4,
        "difficulty": 5,
        "picture": "images/santanoni.jpg",
        "topo": "images/santanonitopo.png",
        "link": "https://www.google.com/maps/place/Santanoni+Peak/@44.0822801,-74.1412852,15z/data=!3m1!4b1!4m6!3m5!1s0x4ccb2771c630bf21:0xefebaa85b56c853a!8m2!3d44.0822811!4d-74.1309855!16s%2Fm%2F03cvcsq?entry=ttu"

    },
    {
        "name": "MOUNT REDFIELD",
        "elevation": 4606,
        "ascent": 3225,
        "route": 17.5,
        "difficulty": 6,
        "picture": "images/redfield.jpg",
        "topo": "images/redfieldtopo.png",
        "link": "https://www.google.com/maps/place/Mt+Redfield/@44.094776,-73.9601657,15z/data=!3m1!4b1!4m6!3m5!1s0x4ccadc8629c041e9:0x7ea09c50823d122c!8m2!3d44.094777!4d-73.949866!16s%2Fm%2F03csd_f?entry=ttu"

    },
    {
        "name": "WRIGHT PEAK",
        "elevation": 4580,
        "ascent": 2400,
        "route": 7,
        "difficulty": 4,
        "picture": "images/wright.jpg",
        "topo": "images/wrighttopo.png",
        "link": "https://www.google.com/maps/place/Wright+Peak/@44.1517177,-73.9904465,15z/data=!3m1!4b1!4m6!3m5!1s0x4ccade0e958deccd:0xf53d4cf46f6d2eff!8m2!3d44.1517187!4d-73.9801468!16zL20vMGQxajZt?entry=ttu"

    },
    {
        "name": "SADDLEBACK MOUNTAIN",
        "elevation": 4515,
        "ascent": 2990,
        "route": 13.4, 
        "difficulty": 5,
        "picture": "images/saddleback.jpg",
        "topo": "images/saddlebacktopo.png",
        "link": "https://www.google.com/maps/place/Saddleback+Mountain/@44.1264342,-73.9138319,14z/data=!3m1!4b1!4m6!3m5!1s0x4ccac2c92c130ed1:0xc9c81d8466fe62d7!8m2!3d44.1264414!4d-73.8748634!16s%2Fm%2F03csn6p?entry=ttu"
    
    },
    {
        "name": "PANTHER PEAK",
        "elevation": 4442,
        "ascent": 3762,
        "route": 12,
        "difficulty": 6,
        "picture": "images/panther.jpg",
        "topo": "images/panthertopo.png",
        "link": "https://www.google.com/maps/place/Panther+Peak/@44.0983843,-74.1710654,14z/data=!3m1!4b1!4m6!3m5!1s0x4ccb2738bf5a1e07:0x73c9aa4023cc8ae7!8m2!3d44.0983915!4d-74.1320969!16s%2Fm%2F03ctyq2?entry=ttu"

    },
    {
        "name": "TABLE TOP MOUNTAIN",
        "elevation": 4427,
        "ascent": 3660,
        "route": 10,
        "difficulty": 5,
        "picture": "images/tabletop.jpg",
        "topo": "images/tabletoptopo.png",
        "link": "https://www.google.com/maps/place/Table+Top+Mountain/@44.1402708,-73.9263832,15z/data=!3m1!4b1!4m6!3m5!1s0x4ccadd726a90c2cf:0xc93f6464b2b69e08!8m2!3d44.1402718!4d-73.9160835!16s%2Fm%2F03crsp6?entry=ttu"

    },
    {
        "name": "ROCKY PEAK RIDGE",
        "elevation": 4420,
        "ascent": 4500,
        "route": 13.4,
        "difficulty": 5,
        "picture": "images/rockypeakridge.jpg",
        "topo": "images/rockypeakridgetopo.png",
        "link": "https://www.google.com/maps/place/Rocky+Peak+Ridge/@44.154443,-73.7158557,15z/data=!3m1!4b1!4m6!3m5!1s0x4ccaeafa3e333821:0x3fedd94c1f4d9b6d!8m2!3d44.154444!4d-73.705556!16s%2Fm%2F028788k?entry=ttu"

    },
    {
        "name": "MACOMB MOUNTAIN",
        "elevation": 4405,
        "ascent": 2344,
        "route": 8.4,
        "difficulty": 5,
        "picture": "images/macomb.jpg",
        "topo": "images/macombtopo.png",
        "link": "https://www.google.com/maps/place/Macomb+Mountain/@44.0517201,-73.7904345,15z/data=!3m1!4b1!4m6!3m5!1s0x4ccac6d0abd35261:0x4079676260fb7208!8m2!3d44.0517211!4d-73.7801348!16s%2Fm%2F03cr6zd?entry=ttu"

    },
    {
        "name": "ARMSTRONG MOUNTAIN",
        "elevation": 4400,
        "ascent": 3734,
        "route": 12.7,
        "difficulty": 5,
        "picture": "images/armstrong.jpg",
        "topo": "images/armstrongtopo.png",
        "link": "https://www.google.com/maps/place/Armstrong+Mountain/@44.1347731,-73.8593288,15z/data=!3m1!4b1!4m6!3m5!1s0x4ccac29719e3de71:0x4a7bc4b0ba1fe322!8m2!3d44.1347741!4d-73.8490291!16s%2Fm%2F03cshm1?entry=ttu"

    },
    {
        "name": "HOUGH PEAK",
        "elevation": 4400,
        "ascent": 3200,
        "route": 13.7,
        "difficulty": 6,
        "picture": "images/hough.jpg",
        "topo": "images/houghtopo.png",
        "link": "https://www.google.com/maps/place/Hough+Peak/@44.069497,-73.7879349,15z/data=!3m1!4b1!4m6!3m5!1s0x4ccac13072ff8ec3:0xd717162d4ac0d90d!8m2!3d44.069498!4d-73.7776352!16s%2Fm%2F03crjfz?entry=ttu"

    },
    {
        "name": "SEWARD MOUNTAIN",
        "elevation": 4361,
        "ascent": 3490,
        "route": 16,
        "difficulty": 7,
        "picture": "images/seward.jpg",
        "topo": "images/sewardtopo.png",
        "link": "https://www.google.com/maps/place/Seward+Mountain/@44.1597726,-74.2382924,14z/data=!3m1!4b1!4m6!3m5!1s0x4ccb224a95154a6b:0x845fa535c97d7b6e!8m2!3d44.1597798!4d-74.1993239!16s%2Fm%2F03cvr66?entry=ttu"
    
    },
    {
        "name": "MOUNT MARSHALL",
        "elevation": 4360,
        "ascent": 2575,
        "route": 14,
        "difficulty": 6,
        "picture": "images/marshall.jpg",
        "topo": "images/marshalltopo.png",
        "link": "https://www.google.com/maps/place/Mt+Marshall/@44.1275528,-74.0221139,15z/data=!3m1!4b1!4m6!3m5!1s0x4ccadef4ac5bd13b:0xb117d605ddbb823c!8m2!3d44.1275538!4d-74.0118142!16s%2Fm%2F03ctmmw?entry=ttu"


    },
    {
        "name": "ALLEN MOUNTAIN",
        "elevation": 4340,
        "ascent": 2540,
        "route": 16.2,
        "difficulty": 7,
        "picture": "images/allen.jpg",
        "topo": "images/allentopo.png",
        "link": "https://www.google.com/maps/place/Allen+Mountain/@44.070882,-73.9785556,14z/data=!3m1!4b1!4m6!3m5!1s0x4ccadb42396c3fe9:0x97a05fa105d2a3e1!8m2!3d44.0708892!4d-73.9395871!16s%2Fm%2F03cs916?entry=ttu"

    },
    {
        "name": "BIG SLIDE MOUNTAIN",
        "elevation": 4240,
        "ascent": 2800,
        "route": 9.4,
        "difficulty": 4,
        "picture": "images/bigslide.jpg",
        "topo": "images/bigslidetopo.png",
        "link": "https://www.google.com/maps/place/Big+Slide+Mountain/@44.1822711,-73.8807199,15z/data=!3m1!4b1!4m6!3m5!1s0x4ccae7cc0459eb77:0xff98c707b1d2ad4a!8m2!3d44.1822721!4d-73.8704202!16s%2Fm%2F02vzrfx?entry=ttu"

    },
    {
        "name": "ESTHER MOUNTAIN",
        "elevation": 4240,
        "ascent": 3020,
        "route": 9.4,
        "difficulty": 4,
        "picture": "images/esther.jpg",
        "topo": "images/esthertopo.png",
        "link": "https://www.google.com/maps/place/Esther+Mountain/@44.3869906,-73.900167,15z/data=!3m1!4b1!4m6!3m5!1s0x4ccafe7d34cfbd33:0xf95fe567474e0c60!8m2!3d44.3869916!4d-73.8898673!16s%2Fm%2F03clhx3?entry=ttu"

    },
    {
        "name": "UPPER WOLFJAW",
        "elevation": 4185,
        "ascent": 3619,
        "route": 12.7,
        "difficulty": 5,
        "picture": "images/upper.jpg",
        "topo": "images/uppertopo.png",
        "link": "https://www.google.com/maps/place/Upper+Wolfjaw+Mountain/@44.1406062,-73.8554398,15z/data=!3m1!4b1!4m6!3m5!1s0x4ccac2994ade6899:0xb95afe88488f4798!8m2!3d44.1406072!4d-73.8451401!16s%2Fm%2F03ctglm?entry=ttu"
    
    },
    {
        "name": "LOWER WOLFJAW",
        "elevation": 4175,
        "ascent": 2825,
        "route": 8.7,
        "difficulty": 4,
        "picture": "images/lower.jpg",
        "topo": "images/lowertopo.png",
        "link": "https://www.google.com/maps/place/Lower+Wolfjaw+Mountain/@44.1483835,-73.8429396,15z/data=!3m1!4b1!4m6!3m5!1s0x4ccae82f5508535d:0x2d87afc4cd94f1a9!8m2!3d44.1483845!4d-73.8326399!16s%2Fm%2F03ctg34?entry=ttu"

    },
    {
        "name": "STREET MOUNTAIN",
        "elevation": 4166,
        "ascent": 2115,
        "route": 8.8,
        "difficulty": 6,
        "picture": "images/streetandnye.jpg",
        "topo": "images/streettopo.png",
        "link": "https://www.google.com/maps/place/Street+Mountain/@44.1709151,-74.0334462,13.95z/data=!4m6!3m5!1s0x4ccae1f1a163f1e1:0xbc01064026259264!8m2!3d44.1796954!4d-74.0277122!16s%2Fg%2F11ghbkf9kv?entry=ttu"

    },
    {
        "name": "PHELPS MOUNTAIN",
        "elevation": 4161,
        "ascent": 1982,
        "route": 8.8,
        "difficulty": 5,
        "picture": "images/phelps.jpg",
        "topo": "images/phelpstopo.png",
        "link": "https://www.google.com/maps/place/Phelps+Mountain/@44.1497977,-73.9301521,13.71z/data=!4m6!3m5!1s0x4ccae77e32cf33eb:0xa784cf2af4ce6afa!8m2!3d44.1569957!4d-73.9209775!16s%2Fm%2F03crs62?entry=ttu"
    
    },
    {
        "name": "DONALDSON MOUNTAIN",
        "elevation": 4140,
        "ascent": 3490,
        "route": 17,
        "difficulty": 7,
        "picture": "images/donaldson.jpg",
        "topo": "images/donaldsontopo.png",
        "link": "https://www.google.com/maps/place/Donaldson+Mountain/@44.1539461,-74.2212907,15z/data=!3m1!4b1!4m6!3m5!1s0x4ccb23b1a6ebc841:0x16aff708e95c910!8m2!3d44.1539471!4d-74.210991!16s%2Fm%2F03cvdn5?entry=ttu"
    
    },
    {
        "name": "SEYMOUR MOUNTAIN",
        "elevation": 4120,
        "ascent": 2370,
        "route": 14,
        "difficulty": 6,
        "picture": "images/seymour.jpg",
        "topo": "images/seymourtopo.png",
        "link": "https://www.google.com/maps/place/Seymour+Mountain/@44.1578337,-74.1824,15z/data=!3m1!4b1!4m6!3m5!1s0x4ccb218093eaf281:0xa313d29bc8c0c4eb!8m2!3d44.1578347!4d-74.1721003!16s%2Fm%2F03cvwxr?entry=ttu"

    },
    {
        "name": "SAWTEETH",
        "elevation": 4100,
        "ascent": 2975,
        "route": 11.8,
        "difficulty": 4,
        "picture": "images/sawteeth.jpg",
        "topo": "images/sawteethtopo.png",
        "link": "https://www.google.com/maps/place/Sawteeth/@44.113332,-73.8609667,15z/data=!3m1!4b1!4m6!3m5!1s0x4ccac2fc82aa2231:0x7ec712682abd8925!8m2!3d44.113333!4d-73.850667!16s%2Fm%2F03csqf1?entry=ttu"

    },
    {
        "name": "CASCADE MOUNTAIN",
        "elevation": 4098,
        "ascent": 1940,
        "route": 4.8,
        "difficulty": 2,
        "picture": "images/cascade.jpg",
        "topo": "images/cascadetopo.png",
        "link": "https://www.google.com/maps/place/Cascade+Mountain/@44.2186584,-73.8704426,15z/data=!3m1!4b1!4m6!3m5!1s0x4ccae67464f00141:0x24444f8724613725!8m2!3d44.2186594!4d-73.8601429!16zL20vMDM1aHM0?entry=ttu"

    },
    {
        "name": "SOUTH DIX",
        "elevation": 4060,
        "ascent": 3050,
        "route": 11.5,
        "difficulty": 6,
        "picture": "images/southdix.jpg",
        "topo": "images/southdixtopo.png",
        "link": "https://www.google.com/maps/place/South+Dix/@44.060053,-73.7846011,15z/data=!3m1!4b1!4m6!3m5!1s0x4ccac6d4ad27de37:0x86083c540fa802e6!8m2!3d44.060054!4d-73.7743014!16s%2Fm%2F03cr5xt?entry=ttu"

    },
    {
        "name": "PORTER MOUNTAIN",
        "elevation": 4059,
        "ascent": 2700,
        "route": 7.6,
        "difficulty": 3,
        "picture": "images/porter.jpg",
        "topo": "images/portertopo.png",
        "link": "https://www.google.com/maps/place/Porter+Mountain/@44.2153191,-73.8824439,14z/data=!3m1!4b1!4m6!3m5!1s0x4ccae605deb86e33:0x18f9712a70d4f64c!8m2!3d44.2153262!4d-73.8434754!16zL20vMDU3MGZm?entry=ttu"

    },
    {
        "name": "MOUNT COLVIN",
        "elevation": 4057,
        "ascent": 2130,
        "route": 10.8,
        "difficulty": 4,
        "picture": "images/colvin.jpg",
        "topo": "images/colvintopo.png",
        "link": "https://www.google.com/maps/place/Mt+Colvin/@44.0939414,-73.8448826,15z/data=!3m1!4b1!4m6!3m5!1s0x4ccac3bbbac76b45:0x76cb054b54d3b1bf!8m2!3d44.0939424!4d-73.8345829!16zL20vMGNkbXRy?entry=ttu"

    },
    {
        "name": "MOUNT EMMONS",
        "elevation": 4040,
        "ascent": 3490,
        "route": 18,
        "difficulty": 7,
        "picture": "images/emmons.jpg",
        "topo": "images/emmonstopo.png",
        "link": "https://www.google.com/maps/place/Mt+Emmons/@44.1436626,-74.2530149,14z/data=!3m1!4b1!4m6!3m5!1s0x4ccb23bdd0125a07:0xa7f2b56324992866!8m2!3d44.1436698!4d-74.2140464!16s%2Fm%2F03cvh94?entry=ttu"

    },
    {
        "name": "DIAL MOUNTAIN",
        "elevation": 4020,
        "ascent": 3450,
        "route": 10,
        "difficulty": 5,
        "picture": "images/dial.jpg",
        "topo": "images/dialtopo.png",
        "link": "https://www.google.com/maps/place/Dial+Mountain/@44.1058848,-73.8062699,15z/data=!3m1!4b1!4m6!3m5!1s0x4ccac229849b2a4b:0x42286537d6ce2e28!8m2!3d44.1058858!4d-73.7959702!16s%2Fm%2F03cql5k?entry=ttu"

    },
    {
        "name": "GRACE PEAK",
        "elevation": 4012,
        "ascent": 3002,
        "route": 12.5,
        "difficulty": 6,
        "picture": "images/grace.jpg",
        "topo": "images/gracetopo.png",
        "link": "https://www.google.com/maps/place/Grace+Peak/@44.06533,-73.7676557,15z/data=!3m1!4b1!4m6!3m5!1s0x4ccac0d0e824134d:0x75b124c097ea1308!8m2!3d44.065331!4d-73.757356!16s%2Fm%2F03cr50w?entry=ttu"

    },
    {
        "name": "BLAKE PEAK",
        "elevation": 3960,
        "ascent": 3270,
        "route": 13.6,
        "difficulty": 4,
        "picture": "images/blake.jpg",
        "topo": "images/blaketopo.png",
        "link": "https://www.google.com/maps/place/Blake+Peak/@44.081442,-73.8548827,15z/data=!3m1!4b1!4m6!3m5!1s0x4ccac39066236573:0x30f45539871a3039!8m2!3d44.081443!4d-73.844583!16s%2Fm%2F03cq7y9?entry=ttu"
    
    },
    {
        "name": "CLIFF MOUNTAIN",
        "elevation": 3960,
        "ascent": 2160,
        "route": 17.2,
        "difficulty": 7,
        "picture": "images/cliff.jpg",
        "topo": "images/clifftopo.png",
        "link": "https://www.google.com/maps/place/Cliff+Mountain/@44.103324,-73.9800656,17z/data=!3m1!4b1!4m6!3m5!1s0x4ccadc14a64b75ff:0xe1007d57e4ba675c!8m2!3d44.1033241!4d-73.9751947!16s%2Fg%2F11gd393_vr?entry=ttu"
        
    },
    {
        "name": "NYE MOUNTAIN",
        "elevation": 3895,
        "ascent": 1844,
        "route": 7.5,
        "difficulty": 6,
        "picture": "images/streetandnye.jpg",
        "topo": "images/nyetopo.png",
        "link": "https://www.google.com/maps/place/Nye+Mountain/@44.1872021,-74.0266368,17z/data=!3m1!4b1!4m6!3m5!1s0x4ccae06bb6884833:0xb8d0a6a459e4cbb9!8m2!3d44.1872021!4d-74.0240619!16s%2Fg%2F11hd9h84c5?entry=ttu"
        
    },
    {
        "name": "COUCHSACHRAGA PEAK",
        "elevation": 3820,
        "ascent": 3140,
        "route": 15,
        "difficulty": 6,
        "picture": "images/couch.jpg",
        "topo": "images/couchtopo.png",
        "link": "https://www.google.com/maps/place/Couchsachraga+Peak/@44.0956136,-74.1704536,15z/data=!3m1!4b1!4m6!3m5!1s0x4ccb26e067890e77:0x2a27e858eda41646!8m2!3d44.0956146!4d-74.1601539!16s%2Fm%2F03ctxb_?entry=ttu"
    
    }
    
];

window.addEventListener('load', () => {
    init();
})

const init = function() {
    const dataShelf = document.getElementById("datashelf")
    data.map(function(kristen) {
        const dataItem = buildDataItem(kristen);
        dataShelf.appendChild(dataItem);
    })
}

const buildDataItem = function (kristen) {
    const dataItem = document.createElement('div');
    dataItem.classList.add('data-item');
    dataItem.innerHTML = `
        <div class="text-content">
        <a href="${kristen.link}">
            <p class="name">${kristen.name}</p></a>
            <div class="picture-container">
                <img src="${kristen.picture}" alt="${kristen.name}" class="version-one" />
                <div class="topo-map">
                    <img src="${kristen.topo}" class="version-two" />
                </div>
            </div>
            <div class="detail-text">
                <p>elevation: ${kristen.elevation} ft</p>
                <p>ascent: ${kristen.ascent} ft</p>
                <p>route: ${kristen.route} mi</p>
                <p>difficulty: ${kristen.difficulty}/7</p>
            </div>
        </div>`;
    return dataItem;
};

