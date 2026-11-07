/**
 * شيكن باشا | Chicken Basha
 * المنيو المتكامل - 78 منتج بجميع الصور والأسعار والأوصاف والأحجام
 * خالٍ تماماً من أي إيموجي
 */

var RESTAURANT_INFO = {
  "name": "شيكن باشا",
  "nameEn": "Chicken Basha",
  "tagline": "أصل القرمشة المصرية والخلطة الملكية",
  "hotline": "19755",
  "whatsapp": "+201023456789",
  "workingHours": "شغالين يومياً من 11:00 صباحاً حتى 4:00 فجراً",
  "deliveryMinOrder": 100,
  "deliveryFee": 25,
  "freeDeliveryThreshold": 350,
  "estimatedDeliveryTime": "30 - 45 دقيقة",
  "estimatedPickupTime": "10 - 15 دقيقة (استلام سريع بدون طوابير)"
};
var PROMO_CODES = [
  {
    "code": "BASHA20",
    "discountPercent": 20,
    "minOrder": 250,
    "description": "خصم 20% لعملاء الباشا"
  },
  {
    "code": "KRANCHY",
    "discountPercent": 15,
    "minOrder": 150,
    "description": "خصم 15% على القرمشة الملكية"
  },
  {
    "code": "ELMAZAG",
    "discountPercent": 10,
    "minOrder": 100,
    "description": "خصم 10% ترويقة المزاج"
  }
];
var BRANCHES = [
  {
    "id": "nasr-city",
    "name": "فرع مدينة نصر (الرئيسي)",
    "address": "شارع عباس العقاد، تقاطع الطيران أمام ماكدونالدز، مدينة نصر، القاهرة",
    "phone": "01023456781",
    "hours": "خدمة 24 ساعة متواصلة",
    "pickupAvailable": true,
    "mapsUrl": "https://maps.google.com/?q=Abbas+El+Akkad+Nasr+City",
    "badge": "الفرع الرئيسي",
    "deliveryCoverage": "مدينة نصر، مصر الجديدة، النزهة، الشيراتون"
  },
  {
    "id": "tagamoa",
    "name": "فرع التجمع الخامس",
    "address": "شارع التسعين الشمالي، داون تاون مول، التجمع الخامس، القاهرة الجديدة",
    "phone": "01023456782",
    "hours": "11:00 ص - 3:30 فجراً",
    "pickupAvailable": true,
    "mapsUrl": "https://maps.google.com/?q=North+90+New+Cairo",
    "badge": "خدمة سيارات سريعة",
    "deliveryCoverage": "التجمع الخامس، التجمع الأول، الرحاب، مدينتي"
  },
  {
    "id": "maadi",
    "name": "فرع المعادي",
    "address": "شارع النصر، أمام جراند مول وبجوار كورت يارد، المعادي، القاهرة",
    "phone": "01023456783",
    "hours": "11:00 ص - 3:00 فجراً",
    "pickupAvailable": true,
    "mapsUrl": "https://maps.google.com/?q=El+Nasr+St+Maadi",
    "badge": "صالة عائلية",
    "deliveryCoverage": "المعادي، دجلة، زهراء المعادي، المقطم"
  },
  {
    "id": "mohandessin",
    "name": "فرع المهندسين والدقي",
    "address": "شارع جامعة الدول العربية، تقاطع شارع شهاب، المهندسين، الجيزة",
    "phone": "01023456784",
    "hours": "خدمة 24 ساعة متواصلة",
    "pickupAvailable": true,
    "mapsUrl": "https://maps.google.com/?q=Gameat+El+Dowal+Mohandessin",
    "badge": "خدمة سريعة",
    "deliveryCoverage": "المهندسين، الدقي، العجوزة، الزمالك"
  },
  {
    "id": "zayed",
    "name": "فرع الشيخ زايد وأكتوبر",
    "address": "وصلة دهشور، أمام مزار مول وممشى زايد السياحي، الشيخ زايد",
    "phone": "01023456785",
    "hours": "11:30 ص - 3:30 فجراً",
    "pickupAvailable": true,
    "mapsUrl": "https://maps.google.com/?q=Sheikh+Zayed+City",
    "badge": "درايف ثرو",
    "deliveryCoverage": "الشيخ زايد، حدائق الأهرام، 6 أكتوبر"
  },
  {
    "id": "alex",
    "name": "فرع الإسكندرية (ستانلي)",
    "address": "طريق الجيش، كورنيش ستانلي، بجوار كوبري ستانلي، الإسكندرية",
    "phone": "01023456786",
    "hours": "11:00 ص - 4:00 فجراً",
    "pickupAvailable": true,
    "mapsUrl": "https://maps.google.com/?q=Stanley+Corniche+Alexandria",
    "badge": "مباشر على البحر",
    "deliveryCoverage": "رشدي، ستانلي، سيدي جابر، لوران، جليم، سموحة"
  }
];
var CATEGORIES = [
  {
    "id": "all",
    "name": "كل المنيو",
    "nameEn": "All Menu"
  },
  {
    "id": "sandwiches",
    "name": "الساندوتشات",
    "nameEn": "Sandwiches"
  },
  {
    "id": "roll-sandwiches",
    "name": "ساندوتشات رول",
    "nameEn": "Roll Sandwiches"
  },
  {
    "id": "chicken-meals",
    "name": "وجبات دجاج",
    "nameEn": "Chicken Meals"
  },
  {
    "id": "tender-meals",
    "name": "وجبات تندر",
    "nameEn": "Tender Meals"
  },
  {
    "id": "family-meals",
    "name": "وجبات عائلية",
    "nameEn": "Family Meals"
  },
  {
    "id": "rizo",
    "name": "ريزو",
    "nameEn": "Rizo"
  },
  {
    "id": "kids-meals",
    "name": "وجبات الأطفال",
    "nameEn": "Kids Meals"
  },
  {
    "id": "side-items",
    "name": "أصناف جانبية",
    "nameEn": "Side Items"
  },
  {
    "id": "drinks",
    "name": "المشروبات",
    "nameEn": "Drinks"
  }
];
var MENU_ITEMS = [
  {
    "id": "basha-87425006",
    "uuid": "87425006-a3a7-11e8-b2ca-0242ac110002",
    "categoryId": "sandwiches",
    "name": "ساندوتش دجاج فيليه",
    "nameEn": "Chicken Fillet Sandwich",
    "description": "شريحة فيليه دجاج، شريحة جبن، خس ومايونيز",
    "descriptionEn": "Chicken fillet piece, cheese slice, lettuce and mayonnaise",
    "price": 176,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/02d1eb83-a5d4-4b64-aa1c-4429c600993a.jpg",
    "badge": "الأكثر طلباً",
    "likesCount": 828,
    "spicyOptions": [
      "عادي مقرمش",
      "سبايسي حار"
    ],
    "sizes": [
      {
        "sizeUUID": "41a76e76-2224-11e8-924e-0242ac110011",
        "sizeName": "كومبو",
        "price": 236
      },
      {
        "sizeUUID": "41b585e1-2224-11e8-924e-0242ac110011",
        "sizeName": "ساندوتش",
        "price": 176
      }
    ],
    "extras": [
      {
        "id": "c0809974-dfcb-4278-8658-242b8e18c33e",
        "name": "مايونيز",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2fe3f24a-1b30-4c7d-881c-cc06a36e73e7",
        "name": "هالبينو",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "84d4c824-8e4f-4ba7-8b89-3a5cc39758b0",
        "name": "شريحة تركي مدخن",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "1005e607-5f33-4403-8388-5e2ad548ecf2",
        "name": "مشروم",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "01860436-7fd6-4e09-adc6-fc2f8bcc885e",
        "name": "شريحة روزبيف",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2c5717d1-7f40-42e4-8415-bc69968aa94e",
        "name": "قطعة حلقات بصل",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "8131085b-cb81-46a0-bbd9-3301009f5e93",
        "name": "قطعة هالبينو شيدر",
        "price": 20,
        "categoryName": "اضافات"
      },
      {
        "id": "19890eb0-cb89-4b3f-9593-bbad115fa5e4",
        "name": "اضف",
        "price": 15,
        "categoryName": "اضافة شريحة جبنة شيدر"
      }
    ],
    "drinkChoices": [
      {
        "id": "7e6b41d8-447f-40af-aa13-9002fdb0e17c",
        "name": "بيبسى",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "43a3f65d-fdca-48b4-b64c-d5a344c6ede4",
        "name": "سفن اب",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "307531e4-56f1-400f-beef-abd11f837888",
        "name": "ميرندا برتقال",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "ea56289d-05bc-48dd-ae4d-b754a16db37c",
        "name": "ميرندا تفاح",
        "price": 0,
        "categoryName": "اختر مشروبك"
      }
    ]
  },
  {
    "id": "basha-87425782",
    "uuid": "87425782-a3a7-11e8-b2ca-0242ac110002",
    "categoryId": "sandwiches",
    "name": "ساندوتش دجاج فيليه دبل",
    "nameEn": "Double Chicken Fillet Sandwich",
    "description": "2 شريحة فيليه دجاج، 2 شريحة جبن، خس ومايونيز",
    "descriptionEn": "2 chicken fillet pieces, 2 cheese slices, lettuce and mayonnaise",
    "price": 280,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/71f1d850-54f1-4614-8df8-a47831f7afca.jpg",
    "badge": "الأكثر طلباً",
    "likesCount": 640,
    "spicyOptions": [
      "عادي مقرمش",
      "سبايسي حار"
    ],
    "sizes": [
      {
        "sizeUUID": "41a76e76-2224-11e8-924e-0242ac110011",
        "sizeName": "كومبو",
        "price": 328
      },
      {
        "sizeUUID": "41b585e1-2224-11e8-924e-0242ac110011",
        "sizeName": "ساندوتش",
        "price": 280
      }
    ],
    "extras": [
      {
        "id": "c0809974-dfcb-4278-8658-242b8e18c33e",
        "name": "مايونيز",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2fe3f24a-1b30-4c7d-881c-cc06a36e73e7",
        "name": "هالبينو",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "84d4c824-8e4f-4ba7-8b89-3a5cc39758b0",
        "name": "شريحة تركي مدخن",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "1005e607-5f33-4403-8388-5e2ad548ecf2",
        "name": "مشروم",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "01860436-7fd6-4e09-adc6-fc2f8bcc885e",
        "name": "شريحة روزبيف",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2c5717d1-7f40-42e4-8415-bc69968aa94e",
        "name": "قطعة حلقات بصل",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "8131085b-cb81-46a0-bbd9-3301009f5e93",
        "name": "قطعة هالبينو شيدر",
        "price": 20,
        "categoryName": "اضافات"
      },
      {
        "id": "19890eb0-cb89-4b3f-9593-bbad115fa5e4",
        "name": "اضف",
        "price": 15,
        "categoryName": "اضافة شريحة جبنة شيدر"
      }
    ],
    "drinkChoices": [
      {
        "id": "7e6b41d8-447f-40af-aa13-9002fdb0e17c",
        "name": "بيبسى",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "43a3f65d-fdca-48b4-b64c-d5a344c6ede4",
        "name": "سفن اب",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "307531e4-56f1-400f-beef-abd11f837888",
        "name": "ميرندا برتقال",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "ea56289d-05bc-48dd-ae4d-b754a16db37c",
        "name": "ميرندا تفاح",
        "price": 0,
        "categoryName": "اختر مشروبك"
      }
    ]
  },
  {
    "id": "basha-0cee961e",
    "uuid": "0cee961e-91a6-456d-81d1-823418ec2b38",
    "categoryId": "sandwiches",
    "name": "ساندوتش دجاج فيليه تريبل",
    "nameEn": "Triple Chicken Fillet Sandwich",
    "description": "3 شريحة فيليه دجاج، 3 شريحة جبن، خس ومايونيز",
    "descriptionEn": "3 chicken fillet pieces, 3 cheese slices, lettuce and mayonnaise",
    "price": 351,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/9e28ef8e-5237-432d-b049-456c95c8727f.jpg",
    "badge": "",
    "likesCount": 37,
    "spicyOptions": [
      "عادي مقرمش",
      "سبايسي حار"
    ],
    "sizes": [
      {
        "sizeUUID": "41a76e76-2224-11e8-924e-0242ac110011",
        "sizeName": "كومبو",
        "price": 391
      },
      {
        "sizeUUID": "41b585e1-2224-11e8-924e-0242ac110011",
        "sizeName": "ساندوتش",
        "price": 351
      }
    ],
    "extras": [
      {
        "id": "c0809974-dfcb-4278-8658-242b8e18c33e",
        "name": "مايونيز",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2fe3f24a-1b30-4c7d-881c-cc06a36e73e7",
        "name": "هالبينو",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "84d4c824-8e4f-4ba7-8b89-3a5cc39758b0",
        "name": "شريحة تركي مدخن",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "1005e607-5f33-4403-8388-5e2ad548ecf2",
        "name": "مشروم",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "01860436-7fd6-4e09-adc6-fc2f8bcc885e",
        "name": "شريحة روزبيف",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2c5717d1-7f40-42e4-8415-bc69968aa94e",
        "name": "قطعة حلقات بصل",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "8131085b-cb81-46a0-bbd9-3301009f5e93",
        "name": "قطعة هالبينو شيدر",
        "price": 20,
        "categoryName": "اضافات"
      },
      {
        "id": "19890eb0-cb89-4b3f-9593-bbad115fa5e4",
        "name": "اضف",
        "price": 15,
        "categoryName": "اضافة شريحة جبنة شيدر"
      }
    ],
    "drinkChoices": [
      {
        "id": "7e6b41d8-447f-40af-aa13-9002fdb0e17c",
        "name": "بيبسى",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "43a3f65d-fdca-48b4-b64c-d5a344c6ede4",
        "name": "سفن اب",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "307531e4-56f1-400f-beef-abd11f837888",
        "name": "ميرندا برتقال",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "ea56289d-05bc-48dd-ae4d-b754a16db37c",
        "name": "ميرندا تفاح",
        "price": 0,
        "categoryName": "اختر مشروبك"
      }
    ]
  },
  {
    "id": "basha-87425186",
    "uuid": "87425186-a3a7-11e8-b2ca-0242ac110002",
    "categoryId": "sandwiches",
    "name": "ساندوتش دجاج فيليه حار",
    "nameEn": "Spicy Chicken Fillet Sandwich",
    "description": "شريحة فيليه دجاج مقرمشة، شريحة جبن، خس، طماطم ومايونيز",
    "descriptionEn": "Chicken fillet crispy piece, cheese slice, lettuce, tomatoes and mayonnaise",
    "price": 176,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/dbb743f2-f1ec-45c3-9645-4bbaf6c834c9.jpg",
    "badge": "مميز جداً",
    "likesCount": 489,
    "spicyOptions": [
      "سبايسي حار",
      "عادي"
    ],
    "sizes": [
      {
        "sizeUUID": "41a76e76-2224-11e8-924e-0242ac110011",
        "sizeName": "كومبو",
        "price": 236
      },
      {
        "sizeUUID": "41b585e1-2224-11e8-924e-0242ac110011",
        "sizeName": "ساندوتش",
        "price": 176
      }
    ],
    "extras": [
      {
        "id": "c0809974-dfcb-4278-8658-242b8e18c33e",
        "name": "مايونيز",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2fe3f24a-1b30-4c7d-881c-cc06a36e73e7",
        "name": "هالبينو",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "84d4c824-8e4f-4ba7-8b89-3a5cc39758b0",
        "name": "شريحة تركي مدخن",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "1005e607-5f33-4403-8388-5e2ad548ecf2",
        "name": "مشروم",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "01860436-7fd6-4e09-adc6-fc2f8bcc885e",
        "name": "شريحة روزبيف",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2c5717d1-7f40-42e4-8415-bc69968aa94e",
        "name": "قطعة حلقات بصل",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "8131085b-cb81-46a0-bbd9-3301009f5e93",
        "name": "قطعة هالبينو شيدر",
        "price": 20,
        "categoryName": "اضافات"
      },
      {
        "id": "19890eb0-cb89-4b3f-9593-bbad115fa5e4",
        "name": "اضف",
        "price": 15,
        "categoryName": "اضافة شريحة جبنة شيدر"
      }
    ],
    "drinkChoices": [
      {
        "id": "7e6b41d8-447f-40af-aa13-9002fdb0e17c",
        "name": "بيبسى",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "43a3f65d-fdca-48b4-b64c-d5a344c6ede4",
        "name": "سفن اب",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "307531e4-56f1-400f-beef-abd11f837888",
        "name": "ميرندا برتقال",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "ea56289d-05bc-48dd-ae4d-b754a16db37c",
        "name": "ميرندا تفاح",
        "price": 0,
        "categoryName": "اختر مشروبك"
      }
    ]
  },
  {
    "id": "basha-8742591d",
    "uuid": "8742591d-a3a7-11e8-b2ca-0242ac110002",
    "categoryId": "sandwiches",
    "name": "ساندوتش دجاج فيليه حار دبل",
    "nameEn": "Double Spicy Chicken Fillet Sandwich",
    "description": "2 شريحة فيليه دجاج مقرمشة، 2 شريحة جبن، خس، طماطم ومايونيز",
    "descriptionEn": "2 chicken fillet crispy pieces, 2 cheese slices, lettuce, tomatoes and mayonnaise",
    "price": 280,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/e50de12b-8b8f-4ea8-ba89-03ba8771d704.jpg",
    "badge": "الأكثر طلباً",
    "likesCount": 803,
    "spicyOptions": [
      "سبايسي حار",
      "عادي"
    ],
    "sizes": [
      {
        "sizeUUID": "41a76e76-2224-11e8-924e-0242ac110011",
        "sizeName": "كومبو",
        "price": 328
      },
      {
        "sizeUUID": "41b585e1-2224-11e8-924e-0242ac110011",
        "sizeName": "ساندوتش",
        "price": 280
      }
    ],
    "extras": [
      {
        "id": "c0809974-dfcb-4278-8658-242b8e18c33e",
        "name": "مايونيز",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2fe3f24a-1b30-4c7d-881c-cc06a36e73e7",
        "name": "هالبينو",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "84d4c824-8e4f-4ba7-8b89-3a5cc39758b0",
        "name": "شريحة تركي مدخن",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "1005e607-5f33-4403-8388-5e2ad548ecf2",
        "name": "مشروم",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "01860436-7fd6-4e09-adc6-fc2f8bcc885e",
        "name": "شريحة روزبيف",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2c5717d1-7f40-42e4-8415-bc69968aa94e",
        "name": "قطعة حلقات بصل",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "8131085b-cb81-46a0-bbd9-3301009f5e93",
        "name": "قطعة هالبينو شيدر",
        "price": 20,
        "categoryName": "اضافات"
      },
      {
        "id": "19890eb0-cb89-4b3f-9593-bbad115fa5e4",
        "name": "اضف",
        "price": 15,
        "categoryName": "اضافة شريحة جبنة شيدر"
      }
    ],
    "drinkChoices": [
      {
        "id": "7e6b41d8-447f-40af-aa13-9002fdb0e17c",
        "name": "بيبسى",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "43a3f65d-fdca-48b4-b64c-d5a344c6ede4",
        "name": "سفن اب",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "307531e4-56f1-400f-beef-abd11f837888",
        "name": "ميرندا برتقال",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "ea56289d-05bc-48dd-ae4d-b754a16db37c",
        "name": "ميرندا تفاح",
        "price": 0,
        "categoryName": "اختر مشروبك"
      }
    ]
  },
  {
    "id": "basha-a832669f",
    "uuid": "a832669f-56d1-4e4b-af0e-2f0fcd7632fd",
    "categoryId": "sandwiches",
    "name": "ساندوتش دجاج فيليه حار تريبل",
    "nameEn": "Triple Spicy Chicken Fillet Sandwich",
    "description": "3 شريحة فيليه دجاج مقرمشة، 3 شريحة جبن، خس، طماطم ومايونيز",
    "descriptionEn": "3 chicken fillet crispy pieces, 3 cheese slices, lettuce, tomatoes and mayonnaise",
    "price": 351,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/4ab3e273-43b8-4e23-a2bc-c81cfb5d514a.jpg",
    "badge": "",
    "likesCount": 30,
    "spicyOptions": [
      "سبايسي حار",
      "عادي"
    ],
    "sizes": [
      {
        "sizeUUID": "41a76e76-2224-11e8-924e-0242ac110011",
        "sizeName": "كومبو",
        "price": 391
      },
      {
        "sizeUUID": "41b585e1-2224-11e8-924e-0242ac110011",
        "sizeName": "ساندوتش",
        "price": 351
      }
    ],
    "extras": [
      {
        "id": "c0809974-dfcb-4278-8658-242b8e18c33e",
        "name": "مايونيز",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2fe3f24a-1b30-4c7d-881c-cc06a36e73e7",
        "name": "هالبينو",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "84d4c824-8e4f-4ba7-8b89-3a5cc39758b0",
        "name": "شريحة تركي مدخن",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "1005e607-5f33-4403-8388-5e2ad548ecf2",
        "name": "مشروم",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "01860436-7fd6-4e09-adc6-fc2f8bcc885e",
        "name": "شريحة روزبيف",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2c5717d1-7f40-42e4-8415-bc69968aa94e",
        "name": "قطعة حلقات بصل",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "8131085b-cb81-46a0-bbd9-3301009f5e93",
        "name": "قطعة هالبينو شيدر",
        "price": 20,
        "categoryName": "اضافات"
      },
      {
        "id": "19890eb0-cb89-4b3f-9593-bbad115fa5e4",
        "name": "اضف",
        "price": 15,
        "categoryName": "اضافة شريحة جبنة شيدر"
      }
    ],
    "drinkChoices": [
      {
        "id": "7e6b41d8-447f-40af-aa13-9002fdb0e17c",
        "name": "بيبسى",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "43a3f65d-fdca-48b4-b64c-d5a344c6ede4",
        "name": "سفن اب",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "307531e4-56f1-400f-beef-abd11f837888",
        "name": "ميرندا برتقال",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "ea56289d-05bc-48dd-ae4d-b754a16db37c",
        "name": "ميرندا تفاح",
        "price": 0,
        "categoryName": "اختر مشروبك"
      }
    ]
  },
  {
    "id": "basha-87425311",
    "uuid": "87425311-a3a7-11e8-b2ca-0242ac110002",
    "categoryId": "sandwiches",
    "name": "ساندوتش دجاج فيليه اكسترا حار",
    "nameEn": "Extra Spicy Chicken Fillet Sandwich",
    "description": "شريحة فيليه دجاج مقرمشة، شريحة جبن، خس، طماطم، هالبينو ومايونيز",
    "descriptionEn": "Chicken fillet crispy piece, cheese slice, lettuce, tomatoes, jalapeno and mayonnaise",
    "price": 176,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/e5bbbf9f-60ad-42f7-8d46-ce7e5ca422d0.jpg",
    "badge": "",
    "likesCount": 192,
    "spicyOptions": [
      "سبايسي حار",
      "عادي"
    ],
    "sizes": [
      {
        "sizeUUID": "41a76e76-2224-11e8-924e-0242ac110011",
        "sizeName": "كومبو",
        "price": 236
      },
      {
        "sizeUUID": "41b585e1-2224-11e8-924e-0242ac110011",
        "sizeName": "ساندوتش",
        "price": 176
      }
    ],
    "extras": [
      {
        "id": "c0809974-dfcb-4278-8658-242b8e18c33e",
        "name": "مايونيز",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2fe3f24a-1b30-4c7d-881c-cc06a36e73e7",
        "name": "هالبينو",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "84d4c824-8e4f-4ba7-8b89-3a5cc39758b0",
        "name": "شريحة تركي مدخن",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "1005e607-5f33-4403-8388-5e2ad548ecf2",
        "name": "مشروم",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "01860436-7fd6-4e09-adc6-fc2f8bcc885e",
        "name": "شريحة روزبيف",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2c5717d1-7f40-42e4-8415-bc69968aa94e",
        "name": "قطعة حلقات بصل",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "8131085b-cb81-46a0-bbd9-3301009f5e93",
        "name": "قطعة هالبينو شيدر",
        "price": 20,
        "categoryName": "اضافات"
      },
      {
        "id": "19890eb0-cb89-4b3f-9593-bbad115fa5e4",
        "name": "اضف",
        "price": 15,
        "categoryName": "اضافة شريحة جبنة شيدر"
      }
    ],
    "drinkChoices": [
      {
        "id": "7e6b41d8-447f-40af-aa13-9002fdb0e17c",
        "name": "بيبسى",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "43a3f65d-fdca-48b4-b64c-d5a344c6ede4",
        "name": "سفن اب",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "307531e4-56f1-400f-beef-abd11f837888",
        "name": "ميرندا برتقال",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "ea56289d-05bc-48dd-ae4d-b754a16db37c",
        "name": "ميرندا تفاح",
        "price": 0,
        "categoryName": "اختر مشروبك"
      }
    ]
  },
  {
    "id": "basha-16bbed70",
    "uuid": "16bbed70-2cab-4b0c-b6b1-ca3f6d57c3e4",
    "categoryId": "sandwiches",
    "name": "ساندوتش دجاج فيليه اكسترا حار دبل",
    "nameEn": "Double Extra Spicy Chicken Fillet Sandwich",
    "description": "2 شريحة فيليه دجاج مقرمشة، 2 شريحة جبن، خس، طماطم، هالبينو ومايونيز",
    "descriptionEn": "2 chicken fillet crispy pieces, 2 cheese slices, lettuce, tomatoes, jalapeno and mayonnaise",
    "price": 280,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/0281c026-37a9-4669-bbd4-45344d8b99c8.jpg",
    "badge": "",
    "likesCount": 53,
    "spicyOptions": [
      "سبايسي حار",
      "عادي"
    ],
    "sizes": [
      {
        "sizeUUID": "41a76e76-2224-11e8-924e-0242ac110011",
        "sizeName": "كومبو",
        "price": 328
      },
      {
        "sizeUUID": "41b585e1-2224-11e8-924e-0242ac110011",
        "sizeName": "ساندوتش",
        "price": 280
      }
    ],
    "extras": [
      {
        "id": "c0809974-dfcb-4278-8658-242b8e18c33e",
        "name": "مايونيز",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2fe3f24a-1b30-4c7d-881c-cc06a36e73e7",
        "name": "هالبينو",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "84d4c824-8e4f-4ba7-8b89-3a5cc39758b0",
        "name": "شريحة تركي مدخن",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "1005e607-5f33-4403-8388-5e2ad548ecf2",
        "name": "مشروم",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "01860436-7fd6-4e09-adc6-fc2f8bcc885e",
        "name": "شريحة روزبيف",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2c5717d1-7f40-42e4-8415-bc69968aa94e",
        "name": "قطعة حلقات بصل",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "8131085b-cb81-46a0-bbd9-3301009f5e93",
        "name": "قطعة هالبينو شيدر",
        "price": 20,
        "categoryName": "اضافات"
      },
      {
        "id": "19890eb0-cb89-4b3f-9593-bbad115fa5e4",
        "name": "اضف",
        "price": 15,
        "categoryName": "اضافة شريحة جبنة شيدر"
      }
    ],
    "drinkChoices": [
      {
        "id": "7e6b41d8-447f-40af-aa13-9002fdb0e17c",
        "name": "بيبسى",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "43a3f65d-fdca-48b4-b64c-d5a344c6ede4",
        "name": "سفن اب",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "307531e4-56f1-400f-beef-abd11f837888",
        "name": "ميرندا برتقال",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "ea56289d-05bc-48dd-ae4d-b754a16db37c",
        "name": "ميرندا تفاح",
        "price": 0,
        "categoryName": "اختر مشروبك"
      }
    ]
  },
  {
    "id": "basha-b7f2161c",
    "uuid": "b7f2161c-72fb-4523-bcb3-78090dc20767",
    "categoryId": "sandwiches",
    "name": "ساندوتش دجاج فيليه اكسترا حار تريبل",
    "nameEn": "Triple Extra Spicy Chicken Fillet Sandwich",
    "description": "3 شريحة فيليه دجاج مقرمشة، 3 شريحة جبن، خس، طماطم، هالبينو ومايونيز",
    "descriptionEn": "3 chicken fillet crispy piece, 3 cheese slices, lettuce, tomatoes, jalapeno and mayonnaise",
    "price": 351,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/8624928a-8263-4862-9522-7fcae1e8f5b6.jpg",
    "badge": "",
    "likesCount": 27,
    "spicyOptions": [
      "سبايسي حار",
      "عادي"
    ],
    "sizes": [
      {
        "sizeUUID": "41a76e76-2224-11e8-924e-0242ac110011",
        "sizeName": "كومبو",
        "price": 391
      },
      {
        "sizeUUID": "41b585e1-2224-11e8-924e-0242ac110011",
        "sizeName": "ساندوتش",
        "price": 351
      }
    ],
    "extras": [
      {
        "id": "c0809974-dfcb-4278-8658-242b8e18c33e",
        "name": "مايونيز",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2fe3f24a-1b30-4c7d-881c-cc06a36e73e7",
        "name": "هالبينو",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "84d4c824-8e4f-4ba7-8b89-3a5cc39758b0",
        "name": "شريحة تركي مدخن",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "1005e607-5f33-4403-8388-5e2ad548ecf2",
        "name": "مشروم",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "01860436-7fd6-4e09-adc6-fc2f8bcc885e",
        "name": "شريحة روزبيف",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2c5717d1-7f40-42e4-8415-bc69968aa94e",
        "name": "قطعة حلقات بصل",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "8131085b-cb81-46a0-bbd9-3301009f5e93",
        "name": "قطعة هالبينو شيدر",
        "price": 20,
        "categoryName": "اضافات"
      },
      {
        "id": "19890eb0-cb89-4b3f-9593-bbad115fa5e4",
        "name": "اضف",
        "price": 15,
        "categoryName": "اضافة شريحة جبنة شيدر"
      }
    ],
    "drinkChoices": [
      {
        "id": "7e6b41d8-447f-40af-aa13-9002fdb0e17c",
        "name": "بيبسى",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "43a3f65d-fdca-48b4-b64c-d5a344c6ede4",
        "name": "سفن اب",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "307531e4-56f1-400f-beef-abd11f837888",
        "name": "ميرندا برتقال",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "ea56289d-05bc-48dd-ae4d-b754a16db37c",
        "name": "ميرندا تفاح",
        "price": 0,
        "categoryName": "اختر مشروبك"
      }
    ]
  },
  {
    "id": "basha-1f800800",
    "uuid": "1f800800-5f5f-455a-9a70-46e9dc3faaa1",
    "categoryId": "sandwiches",
    "name": "ساندوتش دجاج مشوي",
    "nameEn": "Grilled Chicken Sandwich",
    "description": "شريحة فيليه مشوي، شريحة جبنة، بيبر صوص، خس طماطم",
    "descriptionEn": "Grilled fillet piece, cheese slice, pepper sauce, lettuce, tomatoes",
    "price": 189,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/9dc4cf85-e55b-41ef-98a5-6577fd447e80.jpg",
    "badge": "",
    "likesCount": 66,
    "spicyOptions": [
      "عادي مقرمش",
      "سبايسي حار"
    ],
    "sizes": [
      {
        "sizeUUID": "41a76e76-2224-11e8-924e-0242ac110011",
        "sizeName": "كومبو",
        "price": 247
      },
      {
        "sizeUUID": "41b585e1-2224-11e8-924e-0242ac110011",
        "sizeName": "ساندوتش",
        "price": 189
      }
    ],
    "extras": [
      {
        "id": "c0809974-dfcb-4278-8658-242b8e18c33e",
        "name": "مايونيز",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2fe3f24a-1b30-4c7d-881c-cc06a36e73e7",
        "name": "هالبينو",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "84d4c824-8e4f-4ba7-8b89-3a5cc39758b0",
        "name": "شريحة تركي مدخن",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "1005e607-5f33-4403-8388-5e2ad548ecf2",
        "name": "مشروم",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "01860436-7fd6-4e09-adc6-fc2f8bcc885e",
        "name": "شريحة روزبيف",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2c5717d1-7f40-42e4-8415-bc69968aa94e",
        "name": "قطعة حلقات بصل",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "8131085b-cb81-46a0-bbd9-3301009f5e93",
        "name": "قطعة هالبينو شيدر",
        "price": 20,
        "categoryName": "اضافات"
      },
      {
        "id": "19890eb0-cb89-4b3f-9593-bbad115fa5e4",
        "name": "اضف",
        "price": 15,
        "categoryName": "اضافة شريحة جبنة شيدر"
      }
    ],
    "drinkChoices": [
      {
        "id": "7e6b41d8-447f-40af-aa13-9002fdb0e17c",
        "name": "بيبسى",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "43a3f65d-fdca-48b4-b64c-d5a344c6ede4",
        "name": "سفن اب",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "307531e4-56f1-400f-beef-abd11f837888",
        "name": "ميرندا برتقال",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "ea56289d-05bc-48dd-ae4d-b754a16db37c",
        "name": "ميرندا تفاح",
        "price": 0,
        "categoryName": "اختر مشروبك"
      }
    ]
  },
  {
    "id": "basha-7c78d988",
    "uuid": "7c78d988-0d3a-4cae-bc02-f62490f88a4c",
    "categoryId": "sandwiches",
    "name": "ساندوتش دجاج مشوي دبل",
    "nameEn": "Double Grilled Chicken Sandwich",
    "description": "2 شريحة فيليه مشوي، 3 شريحة جبنة، بيبر صوص، خس طماطم",
    "descriptionEn": "2 grilled fillet pieces, 2 cheese slices, pepper sauce, lettuce, tomatoes",
    "price": 306,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/09c9f19e-5675-4d46-b5f2-547542572177.jpg",
    "badge": "",
    "likesCount": 49,
    "spicyOptions": [
      "عادي مقرمش",
      "سبايسي حار"
    ],
    "sizes": [
      {
        "sizeUUID": "41a76e76-2224-11e8-924e-0242ac110011",
        "sizeName": "كومبو",
        "price": 351
      },
      {
        "sizeUUID": "41b585e1-2224-11e8-924e-0242ac110011",
        "sizeName": "ساندوتش",
        "price": 306
      }
    ],
    "extras": [
      {
        "id": "c0809974-dfcb-4278-8658-242b8e18c33e",
        "name": "مايونيز",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2fe3f24a-1b30-4c7d-881c-cc06a36e73e7",
        "name": "هالبينو",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "84d4c824-8e4f-4ba7-8b89-3a5cc39758b0",
        "name": "شريحة تركي مدخن",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "1005e607-5f33-4403-8388-5e2ad548ecf2",
        "name": "مشروم",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "01860436-7fd6-4e09-adc6-fc2f8bcc885e",
        "name": "شريحة روزبيف",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2c5717d1-7f40-42e4-8415-bc69968aa94e",
        "name": "قطعة حلقات بصل",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "8131085b-cb81-46a0-bbd9-3301009f5e93",
        "name": "قطعة هالبينو شيدر",
        "price": 20,
        "categoryName": "اضافات"
      },
      {
        "id": "19890eb0-cb89-4b3f-9593-bbad115fa5e4",
        "name": "اضف",
        "price": 15,
        "categoryName": "اضافة شريحة جبنة شيدر"
      }
    ],
    "drinkChoices": [
      {
        "id": "7e6b41d8-447f-40af-aa13-9002fdb0e17c",
        "name": "بيبسى",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "43a3f65d-fdca-48b4-b64c-d5a344c6ede4",
        "name": "سفن اب",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "307531e4-56f1-400f-beef-abd11f837888",
        "name": "ميرندا برتقال",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "ea56289d-05bc-48dd-ae4d-b754a16db37c",
        "name": "ميرندا تفاح",
        "price": 0,
        "categoryName": "اختر مشروبك"
      }
    ]
  },
  {
    "id": "basha-f263e3fc",
    "uuid": "f263e3fc-7aa1-49ca-8170-489a6e329b16",
    "categoryId": "sandwiches",
    "name": "ساندوتش دجاج مشوي تريبل",
    "nameEn": "Triple Grilled Chicken Sandwich",
    "description": "3 شريحة فيليه مشوي، 3 شريحة جبنة، بيبر صوص، خس طماطم",
    "descriptionEn": "3 grilled fillet pieces, 3 cheese slices, pepper sauce, lettuce, tomatoes",
    "price": 397,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/ce92b5ba-fd41-4df1-bd85-86045b43f636.jpg",
    "badge": "",
    "likesCount": 10,
    "spicyOptions": [
      "عادي مقرمش",
      "سبايسي حار"
    ],
    "sizes": [
      {
        "sizeUUID": "41a76e76-2224-11e8-924e-0242ac110011",
        "sizeName": "كومبو",
        "price": 431
      },
      {
        "sizeUUID": "41b585e1-2224-11e8-924e-0242ac110011",
        "sizeName": "ساندوتش",
        "price": 397
      }
    ],
    "extras": [
      {
        "id": "c0809974-dfcb-4278-8658-242b8e18c33e",
        "name": "مايونيز",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2fe3f24a-1b30-4c7d-881c-cc06a36e73e7",
        "name": "هالبينو",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "84d4c824-8e4f-4ba7-8b89-3a5cc39758b0",
        "name": "شريحة تركي مدخن",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "1005e607-5f33-4403-8388-5e2ad548ecf2",
        "name": "مشروم",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "01860436-7fd6-4e09-adc6-fc2f8bcc885e",
        "name": "شريحة روزبيف",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2c5717d1-7f40-42e4-8415-bc69968aa94e",
        "name": "قطعة حلقات بصل",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "8131085b-cb81-46a0-bbd9-3301009f5e93",
        "name": "قطعة هالبينو شيدر",
        "price": 20,
        "categoryName": "اضافات"
      },
      {
        "id": "19890eb0-cb89-4b3f-9593-bbad115fa5e4",
        "name": "اضف",
        "price": 15,
        "categoryName": "اضافة شريحة جبنة شيدر"
      }
    ],
    "drinkChoices": [
      {
        "id": "7e6b41d8-447f-40af-aa13-9002fdb0e17c",
        "name": "بيبسى",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "43a3f65d-fdca-48b4-b64c-d5a344c6ede4",
        "name": "سفن اب",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "307531e4-56f1-400f-beef-abd11f837888",
        "name": "ميرندا برتقال",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "ea56289d-05bc-48dd-ae4d-b754a16db37c",
        "name": "ميرندا تفاح",
        "price": 0,
        "categoryName": "اختر مشروبك"
      }
    ]
  },
  {
    "id": "basha-99dd3bd5",
    "uuid": "99dd3bd5-2b04-44d9-b133-531884d5ea4e",
    "categoryId": "sandwiches",
    "name": "ساندوتش دجاج تركي",
    "nameEn": "Turkey Chicken Sandwich",
    "description": "شريحة فيليه كرسبي، شريحة جبن، شريحة تركي مدخن، خس و مايونيز",
    "descriptionEn": "Crispy fillet piece, cheese slice, smoked turkey slice, lettuce and mayonnaise",
    "price": 189,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/5777601e-edf8-4c31-ad95-29c54e04013a.jpg",
    "badge": "مميز جداً",
    "likesCount": 483,
    "spicyOptions": [
      "عادي مقرمش",
      "سبايسي حار"
    ],
    "sizes": [
      {
        "sizeUUID": "41a76e76-2224-11e8-924e-0242ac110011",
        "sizeName": "كومبو",
        "price": 247
      },
      {
        "sizeUUID": "41b585e1-2224-11e8-924e-0242ac110011",
        "sizeName": "ساندوتش",
        "price": 189
      }
    ],
    "extras": [
      {
        "id": "c0809974-dfcb-4278-8658-242b8e18c33e",
        "name": "مايونيز",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2fe3f24a-1b30-4c7d-881c-cc06a36e73e7",
        "name": "هالبينو",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "84d4c824-8e4f-4ba7-8b89-3a5cc39758b0",
        "name": "شريحة تركي مدخن",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "1005e607-5f33-4403-8388-5e2ad548ecf2",
        "name": "مشروم",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "01860436-7fd6-4e09-adc6-fc2f8bcc885e",
        "name": "شريحة روزبيف",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2c5717d1-7f40-42e4-8415-bc69968aa94e",
        "name": "قطعة حلقات بصل",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "8131085b-cb81-46a0-bbd9-3301009f5e93",
        "name": "قطعة هالبينو شيدر",
        "price": 20,
        "categoryName": "اضافات"
      },
      {
        "id": "19890eb0-cb89-4b3f-9593-bbad115fa5e4",
        "name": "اضف",
        "price": 15,
        "categoryName": "اضافة شريحة جبنة شيدر"
      }
    ],
    "drinkChoices": [
      {
        "id": "7e6b41d8-447f-40af-aa13-9002fdb0e17c",
        "name": "بيبسى",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "43a3f65d-fdca-48b4-b64c-d5a344c6ede4",
        "name": "سفن اب",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "307531e4-56f1-400f-beef-abd11f837888",
        "name": "ميرندا برتقال",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "ea56289d-05bc-48dd-ae4d-b754a16db37c",
        "name": "ميرندا تفاح",
        "price": 0,
        "categoryName": "اختر مشروبك"
      }
    ]
  },
  {
    "id": "basha-92c59ec2",
    "uuid": "92c59ec2-e23b-4432-926f-2abb00f50627",
    "categoryId": "sandwiches",
    "name": "ساندوتش دجاج تركي دبل",
    "nameEn": "Double Turkey Chicken Sandwich",
    "description": "2 شريحة فيليه كرسبي، 2 شريحة جبن، 2 شريحة تركي مدخن، خس و مايونيز",
    "descriptionEn": "2 crispy fillet pieces, 2 cheese slices, 2 smoked turkey slices, lettuce and mayonnaise",
    "price": 306,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/9cd28ea9-1b8a-4605-a187-3c3c04ad365f.jpg",
    "badge": "مميز جداً",
    "likesCount": 245,
    "spicyOptions": [
      "عادي مقرمش",
      "سبايسي حار"
    ],
    "sizes": [
      {
        "sizeUUID": "41a76e76-2224-11e8-924e-0242ac110011",
        "sizeName": "كومبو",
        "price": 351
      },
      {
        "sizeUUID": "41b585e1-2224-11e8-924e-0242ac110011",
        "sizeName": "ساندوتش",
        "price": 306
      }
    ],
    "extras": [
      {
        "id": "c0809974-dfcb-4278-8658-242b8e18c33e",
        "name": "مايونيز",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2fe3f24a-1b30-4c7d-881c-cc06a36e73e7",
        "name": "هالبينو",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "84d4c824-8e4f-4ba7-8b89-3a5cc39758b0",
        "name": "شريحة تركي مدخن",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "1005e607-5f33-4403-8388-5e2ad548ecf2",
        "name": "مشروم",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "01860436-7fd6-4e09-adc6-fc2f8bcc885e",
        "name": "شريحة روزبيف",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2c5717d1-7f40-42e4-8415-bc69968aa94e",
        "name": "قطعة حلقات بصل",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "8131085b-cb81-46a0-bbd9-3301009f5e93",
        "name": "قطعة هالبينو شيدر",
        "price": 20,
        "categoryName": "اضافات"
      },
      {
        "id": "19890eb0-cb89-4b3f-9593-bbad115fa5e4",
        "name": "اضف",
        "price": 15,
        "categoryName": "اضافة شريحة جبنة شيدر"
      }
    ],
    "drinkChoices": [
      {
        "id": "7e6b41d8-447f-40af-aa13-9002fdb0e17c",
        "name": "بيبسى",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "43a3f65d-fdca-48b4-b64c-d5a344c6ede4",
        "name": "سفن اب",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "307531e4-56f1-400f-beef-abd11f837888",
        "name": "ميرندا برتقال",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "ea56289d-05bc-48dd-ae4d-b754a16db37c",
        "name": "ميرندا تفاح",
        "price": 0,
        "categoryName": "اختر مشروبك"
      }
    ]
  },
  {
    "id": "basha-393e5783",
    "uuid": "393e5783-bbed-4664-9a73-83fd3953e8bd",
    "categoryId": "sandwiches",
    "name": "ساندوتش دجاج تركي تريبل",
    "nameEn": "Triple Turkey Chicken Sandwich",
    "description": "3 شريحة فيليه كرسبي، 3 شريحة جبن، 3 شريحة تركي مدخن، خس و مايونيز",
    "descriptionEn": "3 crispy fillet pieces, 3 cheese slices, 3 smoked turkey slices, lettuce and mayonnaise",
    "price": 397,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/3448a837-fa9a-433d-b5cb-4b4d8e1c25cb.jpg",
    "badge": "",
    "likesCount": 80,
    "spicyOptions": [
      "عادي مقرمش",
      "سبايسي حار"
    ],
    "sizes": [
      {
        "sizeUUID": "41a76e76-2224-11e8-924e-0242ac110011",
        "sizeName": "كومبو",
        "price": 431
      },
      {
        "sizeUUID": "41b585e1-2224-11e8-924e-0242ac110011",
        "sizeName": "ساندوتش",
        "price": 397
      }
    ],
    "extras": [
      {
        "id": "c0809974-dfcb-4278-8658-242b8e18c33e",
        "name": "مايونيز",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2fe3f24a-1b30-4c7d-881c-cc06a36e73e7",
        "name": "هالبينو",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "84d4c824-8e4f-4ba7-8b89-3a5cc39758b0",
        "name": "شريحة تركي مدخن",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "1005e607-5f33-4403-8388-5e2ad548ecf2",
        "name": "مشروم",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "01860436-7fd6-4e09-adc6-fc2f8bcc885e",
        "name": "شريحة روزبيف",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2c5717d1-7f40-42e4-8415-bc69968aa94e",
        "name": "قطعة حلقات بصل",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "8131085b-cb81-46a0-bbd9-3301009f5e93",
        "name": "قطعة هالبينو شيدر",
        "price": 20,
        "categoryName": "اضافات"
      },
      {
        "id": "19890eb0-cb89-4b3f-9593-bbad115fa5e4",
        "name": "اضف",
        "price": 15,
        "categoryName": "اضافة شريحة جبنة شيدر"
      }
    ],
    "drinkChoices": [
      {
        "id": "7e6b41d8-447f-40af-aa13-9002fdb0e17c",
        "name": "بيبسى",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "43a3f65d-fdca-48b4-b64c-d5a344c6ede4",
        "name": "سفن اب",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "307531e4-56f1-400f-beef-abd11f837888",
        "name": "ميرندا برتقال",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "ea56289d-05bc-48dd-ae4d-b754a16db37c",
        "name": "ميرندا تفاح",
        "price": 0,
        "categoryName": "اختر مشروبك"
      }
    ]
  },
  {
    "id": "basha-0bd69478",
    "uuid": "0bd69478-431d-492a-9fca-c05d9584c1a3",
    "categoryId": "sandwiches",
    "name": "ساندوتش دجاج تركي حار",
    "nameEn": "Spicy Turkey Chicken Sandwich",
    "description": "شريحة فيليه كرسبي، شريحة جبن، شريحة تركي مدخن، خس و طماطم",
    "descriptionEn": "Crispy fillet piece, cheese slice, smoked turkey slice, lettuce and tomato",
    "price": 189,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/cb4c11e7-7904-4a99-860e-4df78ca06c6d.jpg",
    "badge": "مميز جداً",
    "likesCount": 227,
    "spicyOptions": [
      "سبايسي حار",
      "عادي"
    ],
    "sizes": [
      {
        "sizeUUID": "41a76e76-2224-11e8-924e-0242ac110011",
        "sizeName": "كومبو",
        "price": 247
      },
      {
        "sizeUUID": "41b585e1-2224-11e8-924e-0242ac110011",
        "sizeName": "ساندوتش",
        "price": 189
      }
    ],
    "extras": [
      {
        "id": "c0809974-dfcb-4278-8658-242b8e18c33e",
        "name": "مايونيز",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2fe3f24a-1b30-4c7d-881c-cc06a36e73e7",
        "name": "هالبينو",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "84d4c824-8e4f-4ba7-8b89-3a5cc39758b0",
        "name": "شريحة تركي مدخن",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "1005e607-5f33-4403-8388-5e2ad548ecf2",
        "name": "مشروم",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "01860436-7fd6-4e09-adc6-fc2f8bcc885e",
        "name": "شريحة روزبيف",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2c5717d1-7f40-42e4-8415-bc69968aa94e",
        "name": "قطعة حلقات بصل",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "8131085b-cb81-46a0-bbd9-3301009f5e93",
        "name": "قطعة هالبينو شيدر",
        "price": 20,
        "categoryName": "اضافات"
      },
      {
        "id": "19890eb0-cb89-4b3f-9593-bbad115fa5e4",
        "name": "اضف",
        "price": 15,
        "categoryName": "اضافة شريحة جبنة شيدر"
      }
    ],
    "drinkChoices": [
      {
        "id": "7e6b41d8-447f-40af-aa13-9002fdb0e17c",
        "name": "بيبسى",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "43a3f65d-fdca-48b4-b64c-d5a344c6ede4",
        "name": "سفن اب",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "307531e4-56f1-400f-beef-abd11f837888",
        "name": "ميرندا برتقال",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "ea56289d-05bc-48dd-ae4d-b754a16db37c",
        "name": "ميرندا تفاح",
        "price": 0,
        "categoryName": "اختر مشروبك"
      }
    ]
  },
  {
    "id": "basha-6c3a9144",
    "uuid": "6c3a9144-813b-45fa-a1e5-19593ff34924",
    "categoryId": "sandwiches",
    "name": "ساندوتش تركي دجاج حار دبل",
    "nameEn": "Double Spicy Turkey Chicken Sandwich",
    "description": "2 شريحة فيليه كرسبي، 2 شريحة جبن، 2 شريحة تركي مدخن، خس و طماطم",
    "descriptionEn": "2 crispy fillet pieces, 2 cheese slices, 2 smoked turkey slices, lettuce and tomato",
    "price": 306,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/34b970fc-b69b-497a-85ba-d0185c41a9fa.jpg",
    "badge": "",
    "likesCount": 171,
    "spicyOptions": [
      "سبايسي حار",
      "عادي"
    ],
    "sizes": [
      {
        "sizeUUID": "41a76e76-2224-11e8-924e-0242ac110011",
        "sizeName": "كومبو",
        "price": 351
      },
      {
        "sizeUUID": "41b585e1-2224-11e8-924e-0242ac110011",
        "sizeName": "ساندوتش",
        "price": 306
      }
    ],
    "extras": [
      {
        "id": "c0809974-dfcb-4278-8658-242b8e18c33e",
        "name": "مايونيز",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2fe3f24a-1b30-4c7d-881c-cc06a36e73e7",
        "name": "هالبينو",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "84d4c824-8e4f-4ba7-8b89-3a5cc39758b0",
        "name": "شريحة تركي مدخن",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "1005e607-5f33-4403-8388-5e2ad548ecf2",
        "name": "مشروم",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "01860436-7fd6-4e09-adc6-fc2f8bcc885e",
        "name": "شريحة روزبيف",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2c5717d1-7f40-42e4-8415-bc69968aa94e",
        "name": "قطعة حلقات بصل",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "8131085b-cb81-46a0-bbd9-3301009f5e93",
        "name": "قطعة هالبينو شيدر",
        "price": 20,
        "categoryName": "اضافات"
      },
      {
        "id": "19890eb0-cb89-4b3f-9593-bbad115fa5e4",
        "name": "اضف",
        "price": 15,
        "categoryName": "اضافة شريحة جبنة شيدر"
      }
    ],
    "drinkChoices": [
      {
        "id": "7e6b41d8-447f-40af-aa13-9002fdb0e17c",
        "name": "بيبسى",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "43a3f65d-fdca-48b4-b64c-d5a344c6ede4",
        "name": "سفن اب",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "307531e4-56f1-400f-beef-abd11f837888",
        "name": "ميرندا برتقال",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "ea56289d-05bc-48dd-ae4d-b754a16db37c",
        "name": "ميرندا تفاح",
        "price": 0,
        "categoryName": "اختر مشروبك"
      }
    ]
  },
  {
    "id": "basha-bf69ab62",
    "uuid": "bf69ab62-6f35-4b8b-a623-e54c33409874",
    "categoryId": "sandwiches",
    "name": "ساندوتش دجاج تركي حار تريبل",
    "nameEn": "Triple Turkey Chicken Spicy Sandwich",
    "description": "3 شريحة فيليه كرسبي، 3 شريحة جبن، 3 شريحة تركي مدخن، خس و طماطم",
    "descriptionEn": "3 crispy fillet pieces, 3 cheese slices, 3 smoked turkey slices, lettuce and tomato",
    "price": 397,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/42694901-ada8-4016-a418-b2fa369befdc.jpg",
    "badge": "",
    "likesCount": 68,
    "spicyOptions": [
      "سبايسي حار",
      "عادي"
    ],
    "sizes": [
      {
        "sizeUUID": "41a76e76-2224-11e8-924e-0242ac110011",
        "sizeName": "كومبو",
        "price": 431
      },
      {
        "sizeUUID": "41b585e1-2224-11e8-924e-0242ac110011",
        "sizeName": "ساندوتش",
        "price": 397
      }
    ],
    "extras": [
      {
        "id": "c0809974-dfcb-4278-8658-242b8e18c33e",
        "name": "مايونيز",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2fe3f24a-1b30-4c7d-881c-cc06a36e73e7",
        "name": "هالبينو",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "84d4c824-8e4f-4ba7-8b89-3a5cc39758b0",
        "name": "شريحة تركي مدخن",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "1005e607-5f33-4403-8388-5e2ad548ecf2",
        "name": "مشروم",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "01860436-7fd6-4e09-adc6-fc2f8bcc885e",
        "name": "شريحة روزبيف",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2c5717d1-7f40-42e4-8415-bc69968aa94e",
        "name": "قطعة حلقات بصل",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "8131085b-cb81-46a0-bbd9-3301009f5e93",
        "name": "قطعة هالبينو شيدر",
        "price": 20,
        "categoryName": "اضافات"
      },
      {
        "id": "19890eb0-cb89-4b3f-9593-bbad115fa5e4",
        "name": "اضف",
        "price": 15,
        "categoryName": "اضافة شريحة جبنة شيدر"
      }
    ],
    "drinkChoices": [
      {
        "id": "7e6b41d8-447f-40af-aa13-9002fdb0e17c",
        "name": "بيبسى",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "43a3f65d-fdca-48b4-b64c-d5a344c6ede4",
        "name": "سفن اب",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "307531e4-56f1-400f-beef-abd11f837888",
        "name": "ميرندا برتقال",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "ea56289d-05bc-48dd-ae4d-b754a16db37c",
        "name": "ميرندا تفاح",
        "price": 0,
        "categoryName": "اختر مشروبك"
      }
    ]
  },
  {
    "id": "basha-e26bd1be",
    "uuid": "e26bd1be-09dc-4765-840f-ddce52cb9cfc",
    "categoryId": "sandwiches",
    "name": "برجر تكساس",
    "nameEn": "Texas Burger",
    "description": "قطعة برجر 170 جم، شريحة جبنة، تكساس صوص، خس، طماطم، بصل و خيار مخلل",
    "descriptionEn": "170 gm burger patty, cheese slice, Texas sauce, lettuce, tomatoes, onions and pickles",
    "price": 195,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/3eaa1551-b6e8-4492-be82-85a6b13a1132.jpg",
    "badge": "",
    "likesCount": 17,
    "spicyOptions": [
      "عادي مقرمش",
      "سبايسي حار"
    ],
    "sizes": [
      {
        "sizeUUID": "41a76e76-2224-11e8-924e-0242ac110011",
        "sizeName": "كومبو",
        "price": 253
      },
      {
        "sizeUUID": "41b585e1-2224-11e8-924e-0242ac110011",
        "sizeName": "ساندوتش",
        "price": 195
      }
    ],
    "extras": [
      {
        "id": "c0809974-dfcb-4278-8658-242b8e18c33e",
        "name": "مايونيز",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2fe3f24a-1b30-4c7d-881c-cc06a36e73e7",
        "name": "هالبينو",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "84d4c824-8e4f-4ba7-8b89-3a5cc39758b0",
        "name": "شريحة تركي مدخن",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "1005e607-5f33-4403-8388-5e2ad548ecf2",
        "name": "مشروم",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "01860436-7fd6-4e09-adc6-fc2f8bcc885e",
        "name": "شريحة روزبيف",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2c5717d1-7f40-42e4-8415-bc69968aa94e",
        "name": "قطعة حلقات بصل",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "8131085b-cb81-46a0-bbd9-3301009f5e93",
        "name": "قطعة هالبينو شيدر",
        "price": 20,
        "categoryName": "اضافات"
      }
    ],
    "drinkChoices": []
  },
  {
    "id": "basha-c2e2f11b",
    "uuid": "c2e2f11b-9066-4104-97a5-5a3b74aa3c49",
    "categoryId": "sandwiches",
    "name": "برجر تكساس دبل",
    "nameEn": "Double Texas Burger",
    "description": "2 قطعة برجر 170 جم، 2 شريحة جبنة، تكساس صوص، خس، طماطم، بصل و خيار مخلل",
    "descriptionEn": "170 gm 2 burger patties, 2 cheese slices, Texas sauce, lettuce, tomatoes, onions and pickles",
    "price": 312,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/c924af94-9418-4c79-a859-3eabc67e2afb.jpg",
    "badge": "",
    "likesCount": 15,
    "spicyOptions": [
      "عادي مقرمش",
      "سبايسي حار"
    ],
    "sizes": [
      {
        "sizeUUID": "41a76e76-2224-11e8-924e-0242ac110011",
        "sizeName": "كومبو",
        "price": 357
      },
      {
        "sizeUUID": "41b585e1-2224-11e8-924e-0242ac110011",
        "sizeName": "ساندوتش",
        "price": 312
      }
    ],
    "extras": [
      {
        "id": "c0809974-dfcb-4278-8658-242b8e18c33e",
        "name": "مايونيز",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2fe3f24a-1b30-4c7d-881c-cc06a36e73e7",
        "name": "هالبينو",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "84d4c824-8e4f-4ba7-8b89-3a5cc39758b0",
        "name": "شريحة تركي مدخن",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "1005e607-5f33-4403-8388-5e2ad548ecf2",
        "name": "مشروم",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "01860436-7fd6-4e09-adc6-fc2f8bcc885e",
        "name": "شريحة روزبيف",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2c5717d1-7f40-42e4-8415-bc69968aa94e",
        "name": "قطعة حلقات بصل",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "8131085b-cb81-46a0-bbd9-3301009f5e93",
        "name": "قطعة هالبينو شيدر",
        "price": 20,
        "categoryName": "اضافات"
      }
    ],
    "drinkChoices": []
  },
  {
    "id": "basha-2c93e73d",
    "uuid": "2c93e73d-05d7-401b-9432-9c53547119ec",
    "categoryId": "sandwiches",
    "name": "برجر تكساس تريبل",
    "nameEn": "Triple Texas Burger",
    "description": "3 قطعة برجر 170 جم، 3 شريحة جبنة، تكساس صوص، خس، طماطم، بصل و خيار مخلل",
    "descriptionEn": "170 gm 3 burger patties, 3 cheese slices, Texas sauce, lettuce, tomatoes, onions and pickles",
    "price": 436,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/8ea059f4-7e51-4c2f-9fff-f807901d8c21.jpg",
    "badge": "",
    "likesCount": 4,
    "spicyOptions": [
      "عادي مقرمش",
      "سبايسي حار"
    ],
    "sizes": [
      {
        "sizeUUID": "41a76e76-2224-11e8-924e-0242ac110011",
        "sizeName": "كومبو",
        "price": 436
      },
      {
        "sizeUUID": "41b585e1-2224-11e8-924e-0242ac110011",
        "sizeName": "ساندوتش",
        "price": 466
      }
    ],
    "extras": [
      {
        "id": "c0809974-dfcb-4278-8658-242b8e18c33e",
        "name": "مايونيز",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2fe3f24a-1b30-4c7d-881c-cc06a36e73e7",
        "name": "هالبينو",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "84d4c824-8e4f-4ba7-8b89-3a5cc39758b0",
        "name": "شريحة تركي مدخن",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "1005e607-5f33-4403-8388-5e2ad548ecf2",
        "name": "مشروم",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "01860436-7fd6-4e09-adc6-fc2f8bcc885e",
        "name": "شريحة روزبيف",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2c5717d1-7f40-42e4-8415-bc69968aa94e",
        "name": "قطعة حلقات بصل",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "8131085b-cb81-46a0-bbd9-3301009f5e93",
        "name": "قطعة هالبينو شيدر",
        "price": 20,
        "categoryName": "اضافات"
      }
    ],
    "drinkChoices": []
  },
  {
    "id": "basha-a1dd5975",
    "uuid": "a1dd5975-0eea-4115-aecc-40ccd21e81c3",
    "categoryId": "sandwiches",
    "name": "برجر ويسترن باربيكيو",
    "nameEn": "Western BBQ Burger",
    "description": "قطعة برجر 170 جم، شريحة جبنة، صوص باربكيو، 3 حلقات بصل",
    "descriptionEn": "170 gm burger patty, cheese slice, BBQ sauce, 3 onion rings",
    "price": 195,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/15160c1d-6bc0-48a0-b6a3-55dd51538930.jpg",
    "badge": "",
    "likesCount": 77,
    "spicyOptions": [
      "عادي مقرمش",
      "سبايسي حار"
    ],
    "sizes": [
      {
        "sizeUUID": "41a76e76-2224-11e8-924e-0242ac110011",
        "sizeName": "كومبو",
        "price": 253
      },
      {
        "sizeUUID": "41b585e1-2224-11e8-924e-0242ac110011",
        "sizeName": "ساندوتش",
        "price": 195
      }
    ],
    "extras": [
      {
        "id": "c0809974-dfcb-4278-8658-242b8e18c33e",
        "name": "مايونيز",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2fe3f24a-1b30-4c7d-881c-cc06a36e73e7",
        "name": "هالبينو",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "84d4c824-8e4f-4ba7-8b89-3a5cc39758b0",
        "name": "شريحة تركي مدخن",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "1005e607-5f33-4403-8388-5e2ad548ecf2",
        "name": "مشروم",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "01860436-7fd6-4e09-adc6-fc2f8bcc885e",
        "name": "شريحة روزبيف",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2c5717d1-7f40-42e4-8415-bc69968aa94e",
        "name": "قطعة حلقات بصل",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "8131085b-cb81-46a0-bbd9-3301009f5e93",
        "name": "قطعة هالبينو شيدر",
        "price": 20,
        "categoryName": "اضافات"
      },
      {
        "id": "19890eb0-cb89-4b3f-9593-bbad115fa5e4",
        "name": "اضف",
        "price": 15,
        "categoryName": "اضافة شريحة جبنة شيدر"
      }
    ],
    "drinkChoices": [
      {
        "id": "7e6b41d8-447f-40af-aa13-9002fdb0e17c",
        "name": "بيبسى",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "43a3f65d-fdca-48b4-b64c-d5a344c6ede4",
        "name": "سفن اب",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "307531e4-56f1-400f-beef-abd11f837888",
        "name": "ميرندا برتقال",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "ea56289d-05bc-48dd-ae4d-b754a16db37c",
        "name": "ميرندا تفاح",
        "price": 0,
        "categoryName": "اختر مشروبك"
      }
    ]
  },
  {
    "id": "basha-348fecec",
    "uuid": "348fecec-fb2b-4554-900b-ca3c00e88712",
    "categoryId": "sandwiches",
    "name": "برجر ويسترن باربيكيو دبل",
    "nameEn": "Double Western BBQ Burger",
    "description": "2 قطعة برجر 170 جم، 2 شريحة جبنة، صوص باربكيو، 5 حلقات بصل",
    "descriptionEn": "170 gm 2 burger patties, 2 cheese slices, BBQ sauce, 5 onion rings",
    "price": 312,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/e5dd9aa1-cb04-41db-b174-0d5cefdb8c5f.jpg",
    "badge": "",
    "likesCount": 38,
    "spicyOptions": [
      "عادي مقرمش",
      "سبايسي حار"
    ],
    "sizes": [
      {
        "sizeUUID": "41a76e76-2224-11e8-924e-0242ac110011",
        "sizeName": "كومبو",
        "price": 357
      },
      {
        "sizeUUID": "41b585e1-2224-11e8-924e-0242ac110011",
        "sizeName": "ساندوتش",
        "price": 312
      }
    ],
    "extras": [
      {
        "id": "c0809974-dfcb-4278-8658-242b8e18c33e",
        "name": "مايونيز",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2fe3f24a-1b30-4c7d-881c-cc06a36e73e7",
        "name": "هالبينو",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "84d4c824-8e4f-4ba7-8b89-3a5cc39758b0",
        "name": "شريحة تركي مدخن",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "1005e607-5f33-4403-8388-5e2ad548ecf2",
        "name": "مشروم",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "01860436-7fd6-4e09-adc6-fc2f8bcc885e",
        "name": "شريحة روزبيف",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2c5717d1-7f40-42e4-8415-bc69968aa94e",
        "name": "قطعة حلقات بصل",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "8131085b-cb81-46a0-bbd9-3301009f5e93",
        "name": "قطعة هالبينو شيدر",
        "price": 20,
        "categoryName": "اضافات"
      },
      {
        "id": "19890eb0-cb89-4b3f-9593-bbad115fa5e4",
        "name": "اضف",
        "price": 15,
        "categoryName": "اضافة شريحة جبنة شيدر"
      }
    ],
    "drinkChoices": [
      {
        "id": "7e6b41d8-447f-40af-aa13-9002fdb0e17c",
        "name": "بيبسى",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "43a3f65d-fdca-48b4-b64c-d5a344c6ede4",
        "name": "سفن اب",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "307531e4-56f1-400f-beef-abd11f837888",
        "name": "ميرندا برتقال",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "ea56289d-05bc-48dd-ae4d-b754a16db37c",
        "name": "ميرندا تفاح",
        "price": 0,
        "categoryName": "اختر مشروبك"
      }
    ]
  },
  {
    "id": "basha-c6b06bd3",
    "uuid": "c6b06bd3-7247-41eb-99ff-f4e99ada2b40",
    "categoryId": "sandwiches",
    "name": "ساندوتش ويسترن باربيكيو برجر تريبل",
    "nameEn": "Triple Western BBQ Burger",
    "description": "3 قطعة برجر 170 جم، 3 شريحة جبنة، صوص باربكيو، 7 حلقات بصل",
    "descriptionEn": "170 gm 3 burger patties, 3 cheese slices, BBQ sauce, 7 onion rings",
    "price": 436,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/525003f8-775a-49bf-940a-310bc0791720.jpg",
    "badge": "",
    "likesCount": 4,
    "spicyOptions": [
      "عادي مقرمش",
      "سبايسي حار"
    ],
    "sizes": [
      {
        "sizeUUID": "41a76e76-2224-11e8-924e-0242ac110011",
        "sizeName": "كومبو",
        "price": 466
      },
      {
        "sizeUUID": "41b585e1-2224-11e8-924e-0242ac110011",
        "sizeName": "ساندوتش",
        "price": 436
      }
    ],
    "extras": [
      {
        "id": "c0809974-dfcb-4278-8658-242b8e18c33e",
        "name": "مايونيز",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2fe3f24a-1b30-4c7d-881c-cc06a36e73e7",
        "name": "هالبينو",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "84d4c824-8e4f-4ba7-8b89-3a5cc39758b0",
        "name": "شريحة تركي مدخن",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "1005e607-5f33-4403-8388-5e2ad548ecf2",
        "name": "مشروم",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "01860436-7fd6-4e09-adc6-fc2f8bcc885e",
        "name": "شريحة روزبيف",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2c5717d1-7f40-42e4-8415-bc69968aa94e",
        "name": "قطعة حلقات بصل",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "8131085b-cb81-46a0-bbd9-3301009f5e93",
        "name": "قطعة هالبينو شيدر",
        "price": 20,
        "categoryName": "اضافات"
      },
      {
        "id": "19890eb0-cb89-4b3f-9593-bbad115fa5e4",
        "name": "اضف",
        "price": 15,
        "categoryName": "اضافة شريحة جبنة شيدر"
      }
    ],
    "drinkChoices": [
      {
        "id": "7e6b41d8-447f-40af-aa13-9002fdb0e17c",
        "name": "بيبسى",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "43a3f65d-fdca-48b4-b64c-d5a344c6ede4",
        "name": "سفن اب",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "307531e4-56f1-400f-beef-abd11f837888",
        "name": "ميرندا برتقال",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "ea56289d-05bc-48dd-ae4d-b754a16db37c",
        "name": "ميرندا تفاح",
        "price": 0,
        "categoryName": "اختر مشروبك"
      }
    ]
  },
  {
    "id": "basha-87424a69",
    "uuid": "87424a69-a3a7-11e8-b2ca-0242ac110002",
    "categoryId": "sandwiches",
    "name": "برجر لحم",
    "nameEn": "Beef Burger",
    "description": "قطعة برجر 170 جم، شريحة جبنة، مايونيز، كاتشب، خس، طماطم، بصل و خيار مخلل",
    "descriptionEn": "170 gm burger patty, cheese slice, mayonnaise, ketchup, lettuce, tomatoes, onions and pickles",
    "price": 195,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/bf7108d9-3c25-4691-b315-5ff878c345c4.jpg",
    "badge": "",
    "likesCount": 157,
    "spicyOptions": [
      "عادي مقرمش",
      "سبايسي حار"
    ],
    "sizes": [
      {
        "sizeUUID": "41a76e76-2224-11e8-924e-0242ac110011",
        "sizeName": "كومبو",
        "price": 253
      },
      {
        "sizeUUID": "41b585e1-2224-11e8-924e-0242ac110011",
        "sizeName": "ساندوتش",
        "price": 195
      }
    ],
    "extras": [
      {
        "id": "c0809974-dfcb-4278-8658-242b8e18c33e",
        "name": "مايونيز",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2fe3f24a-1b30-4c7d-881c-cc06a36e73e7",
        "name": "هالبينو",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "84d4c824-8e4f-4ba7-8b89-3a5cc39758b0",
        "name": "شريحة تركي مدخن",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "1005e607-5f33-4403-8388-5e2ad548ecf2",
        "name": "مشروم",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "01860436-7fd6-4e09-adc6-fc2f8bcc885e",
        "name": "شريحة روزبيف",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2c5717d1-7f40-42e4-8415-bc69968aa94e",
        "name": "قطعة حلقات بصل",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "8131085b-cb81-46a0-bbd9-3301009f5e93",
        "name": "قطعة هالبينو شيدر",
        "price": 20,
        "categoryName": "اضافات"
      },
      {
        "id": "19890eb0-cb89-4b3f-9593-bbad115fa5e4",
        "name": "اضف",
        "price": 15,
        "categoryName": "اضافة شريحة جبنة شيدر"
      }
    ],
    "drinkChoices": [
      {
        "id": "7e6b41d8-447f-40af-aa13-9002fdb0e17c",
        "name": "بيبسى",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "43a3f65d-fdca-48b4-b64c-d5a344c6ede4",
        "name": "سفن اب",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "307531e4-56f1-400f-beef-abd11f837888",
        "name": "ميرندا برتقال",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "ea56289d-05bc-48dd-ae4d-b754a16db37c",
        "name": "ميرندا تفاح",
        "price": 0,
        "categoryName": "اختر مشروبك"
      }
    ]
  },
  {
    "id": "basha-874248ee",
    "uuid": "874248ee-a3a7-11e8-b2ca-0242ac110002",
    "categoryId": "sandwiches",
    "name": "برجر لحم دبل",
    "nameEn": "Double Beef Burger",
    "description": "2 قطعة برجر 170 جم، 2 شريحة جبنة، مايونيز، كاتشب، خس، طماطم، بصل و خيار مخلل",
    "descriptionEn": "170 gm 2 burger patties, 2 cheese slices, mayonnaise, ketchup, lettuce, tomatoes, onions and pickles",
    "price": 312,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/71359917-43fd-41df-a426-291c3146dd45.jpg",
    "badge": "",
    "likesCount": 76,
    "spicyOptions": [
      "عادي مقرمش",
      "سبايسي حار"
    ],
    "sizes": [
      {
        "sizeUUID": "41a76e76-2224-11e8-924e-0242ac110011",
        "sizeName": "كومبو",
        "price": 357
      },
      {
        "sizeUUID": "41b585e1-2224-11e8-924e-0242ac110011",
        "sizeName": "ساندوتش",
        "price": 312
      }
    ],
    "extras": [
      {
        "id": "c0809974-dfcb-4278-8658-242b8e18c33e",
        "name": "مايونيز",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2fe3f24a-1b30-4c7d-881c-cc06a36e73e7",
        "name": "هالبينو",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "84d4c824-8e4f-4ba7-8b89-3a5cc39758b0",
        "name": "شريحة تركي مدخن",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "1005e607-5f33-4403-8388-5e2ad548ecf2",
        "name": "مشروم",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "01860436-7fd6-4e09-adc6-fc2f8bcc885e",
        "name": "شريحة روزبيف",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2c5717d1-7f40-42e4-8415-bc69968aa94e",
        "name": "قطعة حلقات بصل",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "8131085b-cb81-46a0-bbd9-3301009f5e93",
        "name": "قطعة هالبينو شيدر",
        "price": 20,
        "categoryName": "اضافات"
      },
      {
        "id": "19890eb0-cb89-4b3f-9593-bbad115fa5e4",
        "name": "اضف",
        "price": 15,
        "categoryName": "اضافة شريحة جبنة شيدر"
      }
    ],
    "drinkChoices": [
      {
        "id": "7e6b41d8-447f-40af-aa13-9002fdb0e17c",
        "name": "بيبسى",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "43a3f65d-fdca-48b4-b64c-d5a344c6ede4",
        "name": "سفن اب",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "307531e4-56f1-400f-beef-abd11f837888",
        "name": "ميرندا برتقال",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "ea56289d-05bc-48dd-ae4d-b754a16db37c",
        "name": "ميرندا تفاح",
        "price": 0,
        "categoryName": "اختر مشروبك"
      }
    ]
  },
  {
    "id": "basha-0a8520fc",
    "uuid": "0a8520fc-0c9d-4e31-a4ce-2f7737e5f420",
    "categoryId": "sandwiches",
    "name": "برجر لحم تريبل",
    "nameEn": "Triple Beef Burger",
    "description": "3 قطعة برجر 170 جم، 3 شريحة جبنة، مايونيز، كاتشب، خس، طماطم، بصل و خيار مخلل",
    "descriptionEn": "170 gm 3 burger patties, 3 cheese slices, mayonnaise, ketchup, lettuce, tomatoes, onions and pickles",
    "price": 436,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/8d6fdb14-2237-4a5b-a85d-5d5239e20520.jpg",
    "badge": "",
    "likesCount": 8,
    "spicyOptions": [
      "عادي مقرمش",
      "سبايسي حار"
    ],
    "sizes": [
      {
        "sizeUUID": "41a76e76-2224-11e8-924e-0242ac110011",
        "sizeName": "كومبو",
        "price": 466
      },
      {
        "sizeUUID": "41b585e1-2224-11e8-924e-0242ac110011",
        "sizeName": "ساندوتش",
        "price": 436
      }
    ],
    "extras": [
      {
        "id": "c0809974-dfcb-4278-8658-242b8e18c33e",
        "name": "مايونيز",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2fe3f24a-1b30-4c7d-881c-cc06a36e73e7",
        "name": "هالبينو",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "84d4c824-8e4f-4ba7-8b89-3a5cc39758b0",
        "name": "شريحة تركي مدخن",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "1005e607-5f33-4403-8388-5e2ad548ecf2",
        "name": "مشروم",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "01860436-7fd6-4e09-adc6-fc2f8bcc885e",
        "name": "شريحة روزبيف",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2c5717d1-7f40-42e4-8415-bc69968aa94e",
        "name": "قطعة حلقات بصل",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "8131085b-cb81-46a0-bbd9-3301009f5e93",
        "name": "قطعة هالبينو شيدر",
        "price": 20,
        "categoryName": "اضافات"
      },
      {
        "id": "19890eb0-cb89-4b3f-9593-bbad115fa5e4",
        "name": "اضف",
        "price": 15,
        "categoryName": "اضافة شريحة جبنة شيدر"
      }
    ],
    "drinkChoices": [
      {
        "id": "7e6b41d8-447f-40af-aa13-9002fdb0e17c",
        "name": "بيبسى",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "43a3f65d-fdca-48b4-b64c-d5a344c6ede4",
        "name": "سفن اب",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "307531e4-56f1-400f-beef-abd11f837888",
        "name": "ميرندا برتقال",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "ea56289d-05bc-48dd-ae4d-b754a16db37c",
        "name": "ميرندا تفاح",
        "price": 0,
        "categoryName": "اختر مشروبك"
      }
    ]
  },
  {
    "id": "basha-87424cf8",
    "uuid": "87424cf8-a3a7-11e8-b2ca-0242ac110002",
    "categoryId": "sandwiches",
    "name": "برجر لحم مشروم",
    "nameEn": "Mushroom Beef Burger",
    "description": "قطعة برجر 170 جم، شريحة جبنة، صوص مشروم و مايونيز",
    "descriptionEn": "170 gm burger patty, cheese slice, mushroom sauce and mayonnaise",
    "price": 195,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/142bb275-4131-49db-9a03-b598a2c86deb.jpg",
    "badge": "",
    "likesCount": 120,
    "spicyOptions": [
      "عادي مقرمش",
      "سبايسي حار"
    ],
    "sizes": [
      {
        "sizeUUID": "41a76e76-2224-11e8-924e-0242ac110011",
        "sizeName": "كومبو",
        "price": 253
      },
      {
        "sizeUUID": "41b585e1-2224-11e8-924e-0242ac110011",
        "sizeName": "ساندوتش",
        "price": 195
      }
    ],
    "extras": [
      {
        "id": "c0809974-dfcb-4278-8658-242b8e18c33e",
        "name": "مايونيز",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2fe3f24a-1b30-4c7d-881c-cc06a36e73e7",
        "name": "هالبينو",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "84d4c824-8e4f-4ba7-8b89-3a5cc39758b0",
        "name": "شريحة تركي مدخن",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "1005e607-5f33-4403-8388-5e2ad548ecf2",
        "name": "مشروم",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "01860436-7fd6-4e09-adc6-fc2f8bcc885e",
        "name": "شريحة روزبيف",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2c5717d1-7f40-42e4-8415-bc69968aa94e",
        "name": "قطعة حلقات بصل",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "8131085b-cb81-46a0-bbd9-3301009f5e93",
        "name": "قطعة هالبينو شيدر",
        "price": 20,
        "categoryName": "اضافات"
      },
      {
        "id": "19890eb0-cb89-4b3f-9593-bbad115fa5e4",
        "name": "اضف",
        "price": 15,
        "categoryName": "اضافة شريحة جبنة شيدر"
      }
    ],
    "drinkChoices": [
      {
        "id": "7e6b41d8-447f-40af-aa13-9002fdb0e17c",
        "name": "بيبسى",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "43a3f65d-fdca-48b4-b64c-d5a344c6ede4",
        "name": "سفن اب",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "307531e4-56f1-400f-beef-abd11f837888",
        "name": "ميرندا برتقال",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "ea56289d-05bc-48dd-ae4d-b754a16db37c",
        "name": "ميرندا تفاح",
        "price": 0,
        "categoryName": "اختر مشروبك"
      }
    ]
  },
  {
    "id": "basha-87424e8a",
    "uuid": "87424e8a-a3a7-11e8-b2ca-0242ac110002",
    "categoryId": "sandwiches",
    "name": "برجر لحم مشروم دبل",
    "nameEn": "Double Mushroom Beef Burger",
    "description": "2 قطعة برجر 170 جم، 2 شريحة جبنة، صوص مشروم و مايونيز",
    "descriptionEn": "170 gm 2 burger patties, 2 cheese slices, mushroom sauce and mayonnaise",
    "price": 312,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/2ad74b03-cfdc-4cd5-a92c-84dbeb09d92c.jpg",
    "badge": "",
    "likesCount": 88,
    "spicyOptions": [
      "عادي مقرمش",
      "سبايسي حار"
    ],
    "sizes": [
      {
        "sizeUUID": "41a76e76-2224-11e8-924e-0242ac110011",
        "sizeName": "كومبو",
        "price": 357
      },
      {
        "sizeUUID": "41b585e1-2224-11e8-924e-0242ac110011",
        "sizeName": "ساندوتش",
        "price": 312
      }
    ],
    "extras": [
      {
        "id": "c0809974-dfcb-4278-8658-242b8e18c33e",
        "name": "مايونيز",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2fe3f24a-1b30-4c7d-881c-cc06a36e73e7",
        "name": "هالبينو",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "84d4c824-8e4f-4ba7-8b89-3a5cc39758b0",
        "name": "شريحة تركي مدخن",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "1005e607-5f33-4403-8388-5e2ad548ecf2",
        "name": "مشروم",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "01860436-7fd6-4e09-adc6-fc2f8bcc885e",
        "name": "شريحة روزبيف",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2c5717d1-7f40-42e4-8415-bc69968aa94e",
        "name": "قطعة حلقات بصل",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "8131085b-cb81-46a0-bbd9-3301009f5e93",
        "name": "قطعة هالبينو شيدر",
        "price": 20,
        "categoryName": "اضافات"
      },
      {
        "id": "19890eb0-cb89-4b3f-9593-bbad115fa5e4",
        "name": "اضف",
        "price": 15,
        "categoryName": "اضافة شريحة جبنة شيدر"
      }
    ],
    "drinkChoices": [
      {
        "id": "7e6b41d8-447f-40af-aa13-9002fdb0e17c",
        "name": "بيبسى",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "43a3f65d-fdca-48b4-b64c-d5a344c6ede4",
        "name": "سفن اب",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "307531e4-56f1-400f-beef-abd11f837888",
        "name": "ميرندا برتقال",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "ea56289d-05bc-48dd-ae4d-b754a16db37c",
        "name": "ميرندا تفاح",
        "price": 0,
        "categoryName": "اختر مشروبك"
      }
    ]
  },
  {
    "id": "basha-d97242a2",
    "uuid": "d97242a2-f3c7-49a8-83ca-1aeea343aa36",
    "categoryId": "sandwiches",
    "name": "برجر لحم مشروم تريبل",
    "nameEn": "Triple Mushroom Burger",
    "description": "3 قطعة برجر 170 جم، 3 شريحة جبنة، صوص مشروم و مايونيز",
    "descriptionEn": "170 gm 3 burger patties, 3 cheese slices, mushroom sauce and mayonnaise",
    "price": 436,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/e22bd50c-b617-4412-8fd7-f6582e66eb58.jpg",
    "badge": "",
    "likesCount": 9,
    "spicyOptions": [
      "عادي مقرمش",
      "سبايسي حار"
    ],
    "sizes": [
      {
        "sizeUUID": "41a76e76-2224-11e8-924e-0242ac110011",
        "sizeName": "كومبو",
        "price": 466
      },
      {
        "sizeUUID": "41b585e1-2224-11e8-924e-0242ac110011",
        "sizeName": "ساندوتش",
        "price": 436
      }
    ],
    "extras": [
      {
        "id": "c0809974-dfcb-4278-8658-242b8e18c33e",
        "name": "مايونيز",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2fe3f24a-1b30-4c7d-881c-cc06a36e73e7",
        "name": "هالبينو",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "84d4c824-8e4f-4ba7-8b89-3a5cc39758b0",
        "name": "شريحة تركي مدخن",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "1005e607-5f33-4403-8388-5e2ad548ecf2",
        "name": "مشروم",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "01860436-7fd6-4e09-adc6-fc2f8bcc885e",
        "name": "شريحة روزبيف",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2c5717d1-7f40-42e4-8415-bc69968aa94e",
        "name": "قطعة حلقات بصل",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "8131085b-cb81-46a0-bbd9-3301009f5e93",
        "name": "قطعة هالبينو شيدر",
        "price": 20,
        "categoryName": "اضافات"
      },
      {
        "id": "19890eb0-cb89-4b3f-9593-bbad115fa5e4",
        "name": "اضف",
        "price": 15,
        "categoryName": "اضافة شريحة جبنة شيدر"
      }
    ],
    "drinkChoices": [
      {
        "id": "7e6b41d8-447f-40af-aa13-9002fdb0e17c",
        "name": "بيبسى",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "43a3f65d-fdca-48b4-b64c-d5a344c6ede4",
        "name": "سفن اب",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "307531e4-56f1-400f-beef-abd11f837888",
        "name": "ميرندا برتقال",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "ea56289d-05bc-48dd-ae4d-b754a16db37c",
        "name": "ميرندا تفاح",
        "price": 0,
        "categoryName": "اختر مشروبك"
      }
    ]
  },
  {
    "id": "basha-67f94e1f",
    "uuid": "67f94e1f-76d1-404b-b22b-63ed23f40992",
    "categoryId": "sandwiches",
    "name": "برجر فايف ستار",
    "nameEn": "Five Star Burger",
    "description": "قطعة برجر 225 جم من اللحم البقري الصافي",
    "descriptionEn": "225g beef burger patty",
    "price": 241,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/51f5de16-8b92-4ed8-a883-ff8fa5948f46.jpg",
    "badge": "",
    "likesCount": 37,
    "spicyOptions": [
      "عادي مقرمش",
      "سبايسي حار"
    ],
    "sizes": [
      {
        "sizeUUID": "41a76e76-2224-11e8-924e-0242ac110011",
        "sizeName": "كومبو",
        "price": 293
      },
      {
        "sizeUUID": "41b585e1-2224-11e8-924e-0242ac110011",
        "sizeName": "ساندوتش",
        "price": 241
      }
    ],
    "extras": [
      {
        "id": "c0809974-dfcb-4278-8658-242b8e18c33e",
        "name": "مايونيز",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2fe3f24a-1b30-4c7d-881c-cc06a36e73e7",
        "name": "هالبينو",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "84d4c824-8e4f-4ba7-8b89-3a5cc39758b0",
        "name": "شريحة تركي مدخن",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "1005e607-5f33-4403-8388-5e2ad548ecf2",
        "name": "مشروم",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "01860436-7fd6-4e09-adc6-fc2f8bcc885e",
        "name": "شريحة روزبيف",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2c5717d1-7f40-42e4-8415-bc69968aa94e",
        "name": "قطعة حلقات بصل",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "8131085b-cb81-46a0-bbd9-3301009f5e93",
        "name": "قطعة هالبينو شيدر",
        "price": 20,
        "categoryName": "اضافات"
      },
      {
        "id": "19890eb0-cb89-4b3f-9593-bbad115fa5e4",
        "name": "اضف",
        "price": 15,
        "categoryName": "اضافة شريحة جبنة شيدر"
      }
    ],
    "drinkChoices": [
      {
        "id": "7e6b41d8-447f-40af-aa13-9002fdb0e17c",
        "name": "بيبسى",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "43a3f65d-fdca-48b4-b64c-d5a344c6ede4",
        "name": "سفن اب",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "307531e4-56f1-400f-beef-abd11f837888",
        "name": "ميرندا برتقال",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "ea56289d-05bc-48dd-ae4d-b754a16db37c",
        "name": "ميرندا تفاح",
        "price": 0,
        "categoryName": "اختر مشروبك"
      }
    ]
  },
  {
    "id": "basha-8742476e",
    "uuid": "8742476e-a3a7-11e8-b2ca-0242ac110002",
    "categoryId": "sandwiches",
    "name": "ساندوتش جمبرى مودرن",
    "nameEn": "Modern Shrimp Sandwich",
    "description": "",
    "descriptionEn": "",
    "price": 215,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/109156b7-536d-4814-ba53-23ffd2f4d9d6.jpg",
    "badge": "",
    "likesCount": 114,
    "spicyOptions": [
      "عادي مقرمش",
      "سبايسي حار"
    ],
    "sizes": [
      {
        "sizeUUID": "41a76e76-2224-11e8-924e-0242ac110011",
        "sizeName": "كومبو",
        "price": 270
      },
      {
        "sizeUUID": "41b585e1-2224-11e8-924e-0242ac110011",
        "sizeName": "ساندوتش",
        "price": 215
      }
    ],
    "extras": [
      {
        "id": "c0809974-dfcb-4278-8658-242b8e18c33e",
        "name": "مايونيز",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2fe3f24a-1b30-4c7d-881c-cc06a36e73e7",
        "name": "هالبينو",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "84d4c824-8e4f-4ba7-8b89-3a5cc39758b0",
        "name": "شريحة تركي مدخن",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "1005e607-5f33-4403-8388-5e2ad548ecf2",
        "name": "مشروم",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "01860436-7fd6-4e09-adc6-fc2f8bcc885e",
        "name": "شريحة روزبيف",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2c5717d1-7f40-42e4-8415-bc69968aa94e",
        "name": "قطعة حلقات بصل",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "8131085b-cb81-46a0-bbd9-3301009f5e93",
        "name": "قطعة هالبينو شيدر",
        "price": 20,
        "categoryName": "اضافات"
      },
      {
        "id": "9b396541-9c60-44db-a2c6-0f60f93d70e7",
        "name": "اضف",
        "price": 20,
        "categoryName": "اضافة قطعة جمبري"
      },
      {
        "id": "19890eb0-cb89-4b3f-9593-bbad115fa5e4",
        "name": "اضف",
        "price": 15,
        "categoryName": "اضافة شريحة جبنة شيدر"
      }
    ],
    "drinkChoices": [
      {
        "id": "7e6b41d8-447f-40af-aa13-9002fdb0e17c",
        "name": "بيبسى",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "43a3f65d-fdca-48b4-b64c-d5a344c6ede4",
        "name": "سفن اب",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "307531e4-56f1-400f-beef-abd11f837888",
        "name": "ميرندا برتقال",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "ea56289d-05bc-48dd-ae4d-b754a16db37c",
        "name": "ميرندا تفاح",
        "price": 0,
        "categoryName": "اختر مشروبك"
      }
    ]
  },
  {
    "id": "basha-87423fcc",
    "uuid": "87423fcc-a3a7-11e8-b2ca-0242ac110002",
    "categoryId": "roll-sandwiches",
    "name": "ساندوتش رول فيليه دجاج عادي",
    "nameEn": "Regular Chicken Fillet Roll Sandwich",
    "description": "",
    "descriptionEn": "",
    "price": 176,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/f6ca9e9d-daed-4f79-ae57-316c5fafcd3d.jpg",
    "badge": "مميز جداً",
    "likesCount": 271,
    "spicyOptions": [
      "عادي مقرمش",
      "سبايسي حار"
    ],
    "sizes": [
      {
        "sizeUUID": "41a76e76-2224-11e8-924e-0242ac110011",
        "sizeName": "كومبو",
        "price": 236
      },
      {
        "sizeUUID": "41b585e1-2224-11e8-924e-0242ac110011",
        "sizeName": "ساندوتش",
        "price": 176
      }
    ],
    "extras": [
      {
        "id": "c0809974-dfcb-4278-8658-242b8e18c33e",
        "name": "مايونيز",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2fe3f24a-1b30-4c7d-881c-cc06a36e73e7",
        "name": "هالبينو",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "84d4c824-8e4f-4ba7-8b89-3a5cc39758b0",
        "name": "شريحة تركي مدخن",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "1005e607-5f33-4403-8388-5e2ad548ecf2",
        "name": "مشروم",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "01860436-7fd6-4e09-adc6-fc2f8bcc885e",
        "name": "شريحة روزبيف",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2c5717d1-7f40-42e4-8415-bc69968aa94e",
        "name": "قطعة حلقات بصل",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "8131085b-cb81-46a0-bbd9-3301009f5e93",
        "name": "قطعة هالبينو شيدر",
        "price": 20,
        "categoryName": "اضافات"
      }
    ],
    "drinkChoices": [
      {
        "id": "7e6b41d8-447f-40af-aa13-9002fdb0e17c",
        "name": "بيبسى",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "43a3f65d-fdca-48b4-b64c-d5a344c6ede4",
        "name": "سفن اب",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "307531e4-56f1-400f-beef-abd11f837888",
        "name": "ميرندا برتقال",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "ea56289d-05bc-48dd-ae4d-b754a16db37c",
        "name": "ميرندا تفاح",
        "price": 0,
        "categoryName": "اختر مشروبك"
      }
    ]
  },
  {
    "id": "basha-87424154",
    "uuid": "87424154-a3a7-11e8-b2ca-0242ac110002",
    "categoryId": "roll-sandwiches",
    "name": "ساندوتش رول فيليه دجاج حار",
    "nameEn": "Spicy Chicken Fillet Roll Sandwich",
    "description": "",
    "descriptionEn": "",
    "price": 176,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/0919ace0-55e7-4ced-b08e-df8fd3c0d975.jpg",
    "badge": "مميز جداً",
    "likesCount": 442,
    "spicyOptions": [
      "سبايسي حار",
      "عادي"
    ],
    "sizes": [
      {
        "sizeUUID": "41a76e76-2224-11e8-924e-0242ac110011",
        "sizeName": "كومبو",
        "price": 236
      },
      {
        "sizeUUID": "41b585e1-2224-11e8-924e-0242ac110011",
        "sizeName": "ساندوتش",
        "price": 176
      }
    ],
    "extras": [
      {
        "id": "c0809974-dfcb-4278-8658-242b8e18c33e",
        "name": "مايونيز",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2fe3f24a-1b30-4c7d-881c-cc06a36e73e7",
        "name": "هالبينو",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "84d4c824-8e4f-4ba7-8b89-3a5cc39758b0",
        "name": "شريحة تركي مدخن",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "1005e607-5f33-4403-8388-5e2ad548ecf2",
        "name": "مشروم",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "01860436-7fd6-4e09-adc6-fc2f8bcc885e",
        "name": "شريحة روزبيف",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2c5717d1-7f40-42e4-8415-bc69968aa94e",
        "name": "قطعة حلقات بصل",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "8131085b-cb81-46a0-bbd9-3301009f5e93",
        "name": "قطعة هالبينو شيدر",
        "price": 20,
        "categoryName": "اضافات"
      }
    ],
    "drinkChoices": [
      {
        "id": "7e6b41d8-447f-40af-aa13-9002fdb0e17c",
        "name": "بيبسى",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "43a3f65d-fdca-48b4-b64c-d5a344c6ede4",
        "name": "سفن اب",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "307531e4-56f1-400f-beef-abd11f837888",
        "name": "ميرندا برتقال",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "ea56289d-05bc-48dd-ae4d-b754a16db37c",
        "name": "ميرندا تفاح",
        "price": 0,
        "categoryName": "اختر مشروبك"
      }
    ]
  },
  {
    "id": "basha-4ba0d572",
    "uuid": "4ba0d572-a3c4-47dc-a717-9b022f6a25b4",
    "categoryId": "roll-sandwiches",
    "name": "ساندوتش رول دجاج مشوي",
    "nameEn": "Grilled Chicken Roll Sandwich",
    "description": "",
    "descriptionEn": "",
    "price": 176,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/f0a8f8f0-25a5-44a7-aad7-40e4286143cb.jpg",
    "badge": "",
    "likesCount": 72,
    "spicyOptions": [
      "عادي مقرمش",
      "سبايسي حار"
    ],
    "sizes": [
      {
        "sizeUUID": "41a76e76-2224-11e8-924e-0242ac110011",
        "sizeName": "كومبو",
        "price": 236
      },
      {
        "sizeUUID": "41b585e1-2224-11e8-924e-0242ac110011",
        "sizeName": "ساندوتش",
        "price": 176
      }
    ],
    "extras": [
      {
        "id": "c0809974-dfcb-4278-8658-242b8e18c33e",
        "name": "مايونيز",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2fe3f24a-1b30-4c7d-881c-cc06a36e73e7",
        "name": "هالبينو",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "84d4c824-8e4f-4ba7-8b89-3a5cc39758b0",
        "name": "شريحة تركي مدخن",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "1005e607-5f33-4403-8388-5e2ad548ecf2",
        "name": "مشروم",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "01860436-7fd6-4e09-adc6-fc2f8bcc885e",
        "name": "شريحة روزبيف",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2c5717d1-7f40-42e4-8415-bc69968aa94e",
        "name": "قطعة حلقات بصل",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "8131085b-cb81-46a0-bbd9-3301009f5e93",
        "name": "قطعة هالبينو شيدر",
        "price": 20,
        "categoryName": "اضافات"
      }
    ],
    "drinkChoices": [
      {
        "id": "7e6b41d8-447f-40af-aa13-9002fdb0e17c",
        "name": "بيبسى",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "43a3f65d-fdca-48b4-b64c-d5a344c6ede4",
        "name": "سفن اب",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "307531e4-56f1-400f-beef-abd11f837888",
        "name": "ميرندا برتقال",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "ea56289d-05bc-48dd-ae4d-b754a16db37c",
        "name": "ميرندا تفاح",
        "price": 0,
        "categoryName": "اختر مشروبك"
      }
    ]
  },
  {
    "id": "basha-874245c6",
    "uuid": "874245c6-a3a7-11e8-b2ca-0242ac110002",
    "categoryId": "roll-sandwiches",
    "name": "ساندوتش رول بطاطس",
    "nameEn": "Fries Roll Sandwich",
    "description": "",
    "descriptionEn": "",
    "price": 65,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/2d62e8e9-22a5-4c64-ad0e-4bc2c827f76c.jpg",
    "badge": "مميز جداً",
    "likesCount": 232,
    "spicyOptions": [
      "عادي مقرمش",
      "سبايسي حار"
    ],
    "sizes": [
      {
        "sizeUUID": "41b585e1-2224-11e8-924e-0242ac110011",
        "sizeName": "ساندوتش",
        "price": 65
      }
    ],
    "extras": [
      {
        "id": "079e8c22-035a-478f-8184-578340587ec2",
        "name": "صدر",
        "price": 70,
        "categoryName": "اضافات"
      },
      {
        "id": "804f1521-491d-46eb-992f-908f122d0d37",
        "name": "ورك",
        "price": 55,
        "categoryName": "اضافات"
      },
      {
        "id": "4e0d6ddb-7840-4ea1-9ee0-77eafa982657",
        "name": "جناح",
        "price": 65,
        "categoryName": "اضافات"
      },
      {
        "id": "2bbcb0d2-930a-4041-9bc9-5714a7985ec7",
        "name": "دبوس",
        "price": 45,
        "categoryName": "اضافات"
      },
      {
        "id": "c0809974-dfcb-4278-8658-242b8e18c33e",
        "name": "مايونيز",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2fe3f24a-1b30-4c7d-881c-cc06a36e73e7",
        "name": "هالبينو",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "84d4c824-8e4f-4ba7-8b89-3a5cc39758b0",
        "name": "شريحة تركي مدخن",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "1005e607-5f33-4403-8388-5e2ad548ecf2",
        "name": "مشروم",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "01860436-7fd6-4e09-adc6-fc2f8bcc885e",
        "name": "شريحة روزبيف",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2c5717d1-7f40-42e4-8415-bc69968aa94e",
        "name": "قطعة حلقات بصل",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "8131085b-cb81-46a0-bbd9-3301009f5e93",
        "name": "قطعة هالبينو شيدر",
        "price": 20,
        "categoryName": "اضافات"
      }
    ],
    "drinkChoices": []
  },
  {
    "id": "basha-1f9df228",
    "uuid": "1f9df228-5730-4a34-97dc-5dbb322176fe",
    "categoryId": "roll-sandwiches",
    "name": "ساندوتش رول بطاطس بالكاتشب",
    "nameEn": "Fries with Ketchup Roll Sandwich",
    "description": "",
    "descriptionEn": "",
    "price": 65,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/df3e65ee-8765-445d-985e-9bcb0a2af908.jpg",
    "badge": "",
    "likesCount": 1,
    "spicyOptions": [
      "عادي مقرمش",
      "سبايسي حار"
    ],
    "sizes": [
      {
        "sizeUUID": "41b585e1-2224-11e8-924e-0242ac110011",
        "sizeName": "ساندوتش",
        "price": 65
      }
    ],
    "extras": [
      {
        "id": "079e8c22-035a-478f-8184-578340587ec2",
        "name": "صدر",
        "price": 70,
        "categoryName": "اضافات"
      },
      {
        "id": "804f1521-491d-46eb-992f-908f122d0d37",
        "name": "ورك",
        "price": 55,
        "categoryName": "اضافات"
      },
      {
        "id": "4e0d6ddb-7840-4ea1-9ee0-77eafa982657",
        "name": "جناح",
        "price": 65,
        "categoryName": "اضافات"
      },
      {
        "id": "2bbcb0d2-930a-4041-9bc9-5714a7985ec7",
        "name": "دبوس",
        "price": 45,
        "categoryName": "اضافات"
      }
    ],
    "drinkChoices": []
  },
  {
    "id": "basha-7901fb95",
    "uuid": "7901fb95-a6ac-4d08-b70c-6b2df725c538",
    "categoryId": "roll-sandwiches",
    "name": "ساندوتش رول بطاطس مع صوص ثاوزند ايلاند",
    "nameEn": "Fries with Thousand Island Roll Sandwich",
    "description": "",
    "descriptionEn": "",
    "price": 65,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/b1a09c17-d7f4-4028-9206-b9fed2f0d960.jpg",
    "badge": "",
    "likesCount": 4,
    "spicyOptions": [
      "عادي مقرمش",
      "سبايسي حار"
    ],
    "sizes": [
      {
        "sizeUUID": "41b585e1-2224-11e8-924e-0242ac110011",
        "sizeName": "ساندوتش",
        "price": 65
      }
    ],
    "extras": [
      {
        "id": "079e8c22-035a-478f-8184-578340587ec2",
        "name": "صدر",
        "price": 70,
        "categoryName": "اضافات"
      },
      {
        "id": "804f1521-491d-46eb-992f-908f122d0d37",
        "name": "ورك",
        "price": 55,
        "categoryName": "اضافات"
      },
      {
        "id": "4e0d6ddb-7840-4ea1-9ee0-77eafa982657",
        "name": "جناح",
        "price": 65,
        "categoryName": "اضافات"
      },
      {
        "id": "2bbcb0d2-930a-4041-9bc9-5714a7985ec7",
        "name": "دبوس",
        "price": 45,
        "categoryName": "اضافات"
      }
    ],
    "drinkChoices": []
  },
  {
    "id": "basha-0c76ed56",
    "uuid": "0c76ed56-6d95-49b6-9513-2b1296de5196",
    "categoryId": "roll-sandwiches",
    "name": "ساندوتش رول بطاطس مع ثومية",
    "nameEn": "Fries with Garlic Dip Roll Sandwich",
    "description": "",
    "descriptionEn": "",
    "price": 65,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/2bd8ac3f-a4e3-4f94-98c2-d3bdcb583944.jpg",
    "badge": "",
    "likesCount": 6,
    "spicyOptions": [
      "عادي مقرمش",
      "سبايسي حار"
    ],
    "sizes": [
      {
        "sizeUUID": "41b585e1-2224-11e8-924e-0242ac110011",
        "sizeName": "ساندوتش",
        "price": 65
      }
    ],
    "extras": [],
    "drinkChoices": []
  },
  {
    "id": "basha-925de086",
    "uuid": "925de086-6b96-459b-b9a7-1db587c987d5",
    "categoryId": "roll-sandwiches",
    "name": "ساندوتش رول بطاطس مع مايونيز",
    "nameEn": "Fries with Mayonnaise Roll Sandwich",
    "description": "",
    "descriptionEn": "",
    "price": 65,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/aa03a6d5-14db-4237-9154-02597eed6b50.jpg",
    "badge": "",
    "likesCount": 2,
    "spicyOptions": [
      "عادي مقرمش",
      "سبايسي حار"
    ],
    "sizes": [
      {
        "sizeUUID": "41b585e1-2224-11e8-924e-0242ac110011",
        "sizeName": "ساندوتش",
        "price": 65
      }
    ],
    "extras": [
      {
        "id": "079e8c22-035a-478f-8184-578340587ec2",
        "name": "صدر",
        "price": 70,
        "categoryName": "اضافات"
      },
      {
        "id": "804f1521-491d-46eb-992f-908f122d0d37",
        "name": "ورك",
        "price": 55,
        "categoryName": "اضافات"
      },
      {
        "id": "4e0d6ddb-7840-4ea1-9ee0-77eafa982657",
        "name": "جناح",
        "price": 65,
        "categoryName": "اضافات"
      },
      {
        "id": "2bbcb0d2-930a-4041-9bc9-5714a7985ec7",
        "name": "دبوس",
        "price": 45,
        "categoryName": "اضافات"
      }
    ],
    "drinkChoices": []
  },
  {
    "id": "basha-e0540ab7",
    "uuid": "e0540ab7-44dd-4fbf-8fcd-1ab64e72db22",
    "categoryId": "roll-sandwiches",
    "name": "ساندوتش رول ميكس بطاطس",
    "nameEn": "Mix Fries Sandwich",
    "description": "",
    "descriptionEn": "",
    "price": 50,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/a082d704-b52b-488e-82ae-9246f49b12d8.jpg",
    "badge": "",
    "likesCount": 1,
    "spicyOptions": [
      "عادي مقرمش",
      "سبايسي حار"
    ],
    "sizes": [
      {
        "sizeUUID": "41b585e1-2224-11e8-924e-0242ac110011",
        "sizeName": "ساندوتش",
        "price": 50
      }
    ],
    "extras": [
      {
        "id": "079e8c22-035a-478f-8184-578340587ec2",
        "name": "صدر",
        "price": 70,
        "categoryName": "اضافات"
      },
      {
        "id": "804f1521-491d-46eb-992f-908f122d0d37",
        "name": "ورك",
        "price": 55,
        "categoryName": "اضافات"
      },
      {
        "id": "4e0d6ddb-7840-4ea1-9ee0-77eafa982657",
        "name": "جناح",
        "price": 65,
        "categoryName": "اضافات"
      },
      {
        "id": "2bbcb0d2-930a-4041-9bc9-5714a7985ec7",
        "name": "دبوس",
        "price": 45,
        "categoryName": "اضافات"
      }
    ],
    "drinkChoices": []
  },
  {
    "id": "basha-8742444b",
    "uuid": "8742444b-a3a7-11e8-b2ca-0242ac110002",
    "categoryId": "roll-sandwiches",
    "name": "ساندوتش رول جمبرى",
    "nameEn": "Shrimp Roll Sandwich",
    "description": "",
    "descriptionEn": "",
    "price": 215,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/d232ea09-21f8-4f61-9aab-6d272651f8cf.jpg",
    "badge": "",
    "likesCount": 131,
    "spicyOptions": [
      "عادي مقرمش",
      "سبايسي حار"
    ],
    "sizes": [
      {
        "sizeUUID": "41a76e76-2224-11e8-924e-0242ac110011",
        "sizeName": "كومبو",
        "price": 270
      },
      {
        "sizeUUID": "41b585e1-2224-11e8-924e-0242ac110011",
        "sizeName": "ساندوتش",
        "price": 215
      }
    ],
    "extras": [
      {
        "id": "c0809974-dfcb-4278-8658-242b8e18c33e",
        "name": "مايونيز",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2fe3f24a-1b30-4c7d-881c-cc06a36e73e7",
        "name": "هالبينو",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "84d4c824-8e4f-4ba7-8b89-3a5cc39758b0",
        "name": "شريحة تركي مدخن",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "1005e607-5f33-4403-8388-5e2ad548ecf2",
        "name": "مشروم",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "01860436-7fd6-4e09-adc6-fc2f8bcc885e",
        "name": "شريحة روزبيف",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2c5717d1-7f40-42e4-8415-bc69968aa94e",
        "name": "قطعة حلقات بصل",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "8131085b-cb81-46a0-bbd9-3301009f5e93",
        "name": "قطعة هالبينو شيدر",
        "price": 20,
        "categoryName": "اضافات"
      },
      {
        "id": "9b396541-9c60-44db-a2c6-0f60f93d70e7",
        "name": "اضف",
        "price": 20,
        "categoryName": "اضافة قطعة جمبري"
      }
    ],
    "drinkChoices": [
      {
        "id": "7e6b41d8-447f-40af-aa13-9002fdb0e17c",
        "name": "بيبسى",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "43a3f65d-fdca-48b4-b64c-d5a344c6ede4",
        "name": "سفن اب",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "307531e4-56f1-400f-beef-abd11f837888",
        "name": "ميرندا برتقال",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "ea56289d-05bc-48dd-ae4d-b754a16db37c",
        "name": "ميرندا تفاح",
        "price": 0,
        "categoryName": "اختر مشروبك"
      }
    ]
  },
  {
    "id": "basha-874242d2",
    "uuid": "874242d2-a3a7-11e8-b2ca-0242ac110002",
    "categoryId": "roll-sandwiches",
    "name": "ساندوتش رول برجر",
    "nameEn": "Burger Roll Sandwich",
    "description": "",
    "descriptionEn": "",
    "price": 195,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/ceac6e00-0ee4-4027-9be9-5504f8a8bfc7.jpg",
    "badge": "",
    "likesCount": 47,
    "spicyOptions": [
      "عادي مقرمش",
      "سبايسي حار"
    ],
    "sizes": [
      {
        "sizeUUID": "41a76e76-2224-11e8-924e-0242ac110011",
        "sizeName": "كومبو",
        "price": 253
      },
      {
        "sizeUUID": "41b585e1-2224-11e8-924e-0242ac110011",
        "sizeName": "ساندوتش",
        "price": 195
      }
    ],
    "extras": [
      {
        "id": "c0809974-dfcb-4278-8658-242b8e18c33e",
        "name": "مايونيز",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2fe3f24a-1b30-4c7d-881c-cc06a36e73e7",
        "name": "هالبينو",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "84d4c824-8e4f-4ba7-8b89-3a5cc39758b0",
        "name": "شريحة تركي مدخن",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "1005e607-5f33-4403-8388-5e2ad548ecf2",
        "name": "مشروم",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "01860436-7fd6-4e09-adc6-fc2f8bcc885e",
        "name": "شريحة روزبيف",
        "price": 15,
        "categoryName": "اضافات"
      },
      {
        "id": "2c5717d1-7f40-42e4-8415-bc69968aa94e",
        "name": "قطعة حلقات بصل",
        "price": 10,
        "categoryName": "اضافات"
      },
      {
        "id": "8131085b-cb81-46a0-bbd9-3301009f5e93",
        "name": "قطعة هالبينو شيدر",
        "price": 20,
        "categoryName": "اضافات"
      }
    ],
    "drinkChoices": [
      {
        "id": "7e6b41d8-447f-40af-aa13-9002fdb0e17c",
        "name": "بيبسى",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "43a3f65d-fdca-48b4-b64c-d5a344c6ede4",
        "name": "سفن اب",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "307531e4-56f1-400f-beef-abd11f837888",
        "name": "ميرندا برتقال",
        "price": 0,
        "categoryName": "اختر مشروبك"
      },
      {
        "id": "ea56289d-05bc-48dd-ae4d-b754a16db37c",
        "name": "ميرندا تفاح",
        "price": 0,
        "categoryName": "اختر مشروبك"
      }
    ]
  },
  {
    "id": "basha-8742333f",
    "uuid": "8742333f-a3a7-11e8-b2ca-0242ac110002",
    "categoryId": "chicken-meals",
    "name": "وجبة جولدن",
    "nameEn": "Golden Meal",
    "description": "4 قطع، بطاطس، 4 كايزر، كول سلو، كاتشب",
    "descriptionEn": "4 pieces, fries, 4 kaiser, coleslaw and ketchup",
    "price": 377,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/b7b55768-dab3-487e-ab81-d64964c2c758.jpg",
    "badge": "الأكثر طلباً",
    "likesCount": 2165,
    "spicyOptions": [
      "عادي مقرمش",
      "سبايسي حار"
    ],
    "sizes": [
      {
        "sizeUUID": "41b5396c-2224-11e8-924e-0242ac110011",
        "sizeName": "عادي",
        "price": 377
      }
    ],
    "extras": [
      {
        "id": "e5f55fb8-7f3b-46d1-b35c-7fd16892b9a8",
        "name": "عادى",
        "price": 0,
        "categoryName": "المذاق"
      },
      {
        "id": "b04a0d0a-a80d-4395-a027-3c2f28630e38",
        "name": "حار",
        "price": 0,
        "categoryName": "المذاق"
      },
      {
        "id": "079e8c22-035a-478f-8184-578340587ec2",
        "name": "صدر",
        "price": 70,
        "categoryName": "اضافات"
      },
      {
        "id": "804f1521-491d-46eb-992f-908f122d0d37",
        "name": "ورك",
        "price": 55,
        "categoryName": "اضافات"
      },
      {
        "id": "4e0d6ddb-7840-4ea1-9ee0-77eafa982657",
        "name": "جناح",
        "price": 65,
        "categoryName": "اضافات"
      },
      {
        "id": "2bbcb0d2-930a-4041-9bc9-5714a7985ec7",
        "name": "دبوس",
        "price": 45,
        "categoryName": "اضافات"
      }
    ],
    "drinkChoices": []
  },
  {
    "id": "basha-874231bd",
    "uuid": "874231bd-a3a7-11e8-b2ca-0242ac110002",
    "categoryId": "chicken-meals",
    "name": "وجبة كلاسيك",
    "nameEn": "Classic Meal",
    "description": "3 قطع، بطاطس، 2 كايزر، كاتشب",
    "descriptionEn": "3 pieces, fries, 2 kaiser and ketchup",
    "price": 286,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/477fcd64-d881-4b0b-9304-9f2145bc9c39.jpg",
    "badge": "الأكثر طلباً",
    "likesCount": 2506,
    "spicyOptions": [
      "عادي مقرمش",
      "سبايسي حار"
    ],
    "sizes": [
      {
        "sizeUUID": "41b5396c-2224-11e8-924e-0242ac110011",
        "sizeName": "عادي",
        "price": 286
      }
    ],
    "extras": [
      {
        "id": "e5f55fb8-7f3b-46d1-b35c-7fd16892b9a8",
        "name": "عادى",
        "price": 0,
        "categoryName": "المذاق"
      },
      {
        "id": "b04a0d0a-a80d-4395-a027-3c2f28630e38",
        "name": "حار",
        "price": 0,
        "categoryName": "المذاق"
      },
      {
        "id": "079e8c22-035a-478f-8184-578340587ec2",
        "name": "صدر",
        "price": 70,
        "categoryName": "اضافات"
      },
      {
        "id": "804f1521-491d-46eb-992f-908f122d0d37",
        "name": "ورك",
        "price": 55,
        "categoryName": "اضافات"
      },
      {
        "id": "4e0d6ddb-7840-4ea1-9ee0-77eafa982657",
        "name": "جناح",
        "price": 65,
        "categoryName": "اضافات"
      },
      {
        "id": "2bbcb0d2-930a-4041-9bc9-5714a7985ec7",
        "name": "دبوس",
        "price": 45,
        "categoryName": "اضافات"
      }
    ],
    "drinkChoices": []
  },
  {
    "id": "basha-87423039",
    "uuid": "87423039-a3a7-11e8-b2ca-0242ac110002",
    "categoryId": "chicken-meals",
    "name": "وجبة بايت",
    "nameEn": "Bite Meal",
    "description": "قطعتين، بطاطس، 2 كايزر، كاتشب",
    "descriptionEn": "2 pieces, fries, 2 kaiser and ketchup",
    "price": 189,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/855f741b-3b45-4bc3-a53e-efbe2dc59ced.jpg",
    "badge": "الأكثر طلباً",
    "likesCount": 1784,
    "spicyOptions": [
      "عادي مقرمش",
      "سبايسي حار"
    ],
    "sizes": [
      {
        "sizeUUID": "41b5396c-2224-11e8-924e-0242ac110011",
        "sizeName": "عادي",
        "price": 189
      }
    ],
    "extras": [
      {
        "id": "e5f55fb8-7f3b-46d1-b35c-7fd16892b9a8",
        "name": "عادى",
        "price": 0,
        "categoryName": "المذاق"
      },
      {
        "id": "b04a0d0a-a80d-4395-a027-3c2f28630e38",
        "name": "حار",
        "price": 0,
        "categoryName": "المذاق"
      },
      {
        "id": "079e8c22-035a-478f-8184-578340587ec2",
        "name": "صدر",
        "price": 70,
        "categoryName": "اضافات"
      },
      {
        "id": "804f1521-491d-46eb-992f-908f122d0d37",
        "name": "ورك",
        "price": 55,
        "categoryName": "اضافات"
      },
      {
        "id": "4e0d6ddb-7840-4ea1-9ee0-77eafa982657",
        "name": "جناح",
        "price": 65,
        "categoryName": "اضافات"
      },
      {
        "id": "2bbcb0d2-930a-4041-9bc9-5714a7985ec7",
        "name": "دبوس",
        "price": 45,
        "categoryName": "اضافات"
      }
    ],
    "drinkChoices": []
  },
  {
    "id": "basha-874234bf",
    "uuid": "874234bf-a3a7-11e8-b2ca-0242ac110002",
    "categoryId": "chicken-meals",
    "name": "وجبة الباشا",
    "nameEn": "Basha Royal Meal",
    "description": "8 قطع، بطاطس عائلي، 2 كول سلو، 6 كايزر، كاتشب",
    "descriptionEn": "8 pieces, family fries, 2 coleslaw, 6 kaiser and ketchup",
    "price": 754,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/3c22c519-1ce2-49a1-8fb0-085c845121dc.jpg",
    "badge": "الأكثر طلباً",
    "likesCount": 1112,
    "spicyOptions": [
      "عادي مقرمش",
      "سبايسي حار"
    ],
    "sizes": [
      {
        "sizeUUID": "41b5396c-2224-11e8-924e-0242ac110011",
        "sizeName": "عادي",
        "price": 754
      }
    ],
    "extras": [
      {
        "id": "e5f55fb8-7f3b-46d1-b35c-7fd16892b9a8",
        "name": "عادى",
        "price": 0,
        "categoryName": "المذاق"
      },
      {
        "id": "b04a0d0a-a80d-4395-a027-3c2f28630e38",
        "name": "حار",
        "price": 0,
        "categoryName": "المذاق"
      },
      {
        "id": "079e8c22-035a-478f-8184-578340587ec2",
        "name": "صدر",
        "price": 70,
        "categoryName": "اضافات"
      },
      {
        "id": "804f1521-491d-46eb-992f-908f122d0d37",
        "name": "ورك",
        "price": 55,
        "categoryName": "اضافات"
      },
      {
        "id": "4e0d6ddb-7840-4ea1-9ee0-77eafa982657",
        "name": "جناح",
        "price": 65,
        "categoryName": "اضافات"
      },
      {
        "id": "2bbcb0d2-930a-4041-9bc9-5714a7985ec7",
        "name": "دبوس",
        "price": 45,
        "categoryName": "اضافات"
      }
    ],
    "drinkChoices": []
  },
  {
    "id": "basha-c982e87a",
    "uuid": "c982e87a-0580-4a37-97c8-ab441395b8af",
    "categoryId": "chicken-meals",
    "name": "وجبة ميجا",
    "nameEn": "Mega Meal",
    "description": "6 قطع ، 2 بطاطس وسط ، كول سلو ، 6 كايزر ، كاتشب",
    "descriptionEn": "6 pieces , 2 medium fries, coleslaw, 6 kaiser, ketchup",
    "price": 572,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/86d06336-5a5e-40d4-b2d1-524241132290.jpg",
    "badge": "مميز جداً",
    "likesCount": 201,
    "spicyOptions": [
      "عادي مقرمش",
      "سبايسي حار"
    ],
    "sizes": [
      {
        "sizeUUID": "41b5396c-2224-11e8-924e-0242ac110011",
        "sizeName": "عادي",
        "price": 572
      }
    ],
    "extras": [
      {
        "id": "e5f55fb8-7f3b-46d1-b35c-7fd16892b9a8",
        "name": "عادى",
        "price": 0,
        "categoryName": "المذاق"
      },
      {
        "id": "b04a0d0a-a80d-4395-a027-3c2f28630e38",
        "name": "حار",
        "price": 0,
        "categoryName": "المذاق"
      },
      {
        "id": "079e8c22-035a-478f-8184-578340587ec2",
        "name": "صدر",
        "price": 70,
        "categoryName": "اضافات"
      },
      {
        "id": "804f1521-491d-46eb-992f-908f122d0d37",
        "name": "ورك",
        "price": 55,
        "categoryName": "اضافات"
      },
      {
        "id": "4e0d6ddb-7840-4ea1-9ee0-77eafa982657",
        "name": "جناح",
        "price": 65,
        "categoryName": "اضافات"
      },
      {
        "id": "2bbcb0d2-930a-4041-9bc9-5714a7985ec7",
        "name": "دبوس",
        "price": 45,
        "categoryName": "اضافات"
      }
    ],
    "drinkChoices": []
  },
  {
    "id": "basha-87423ca4",
    "uuid": "87423ca4-a3a7-11e8-b2ca-0242ac110002",
    "categoryId": "tender-meals",
    "name": "وجبة 4 تندر",
    "nameEn": "4 Tender Meal",
    "description": "وجبة 4 تندر استربس، بطاطس، كاتشب، 2 كايزر ، صوص باربيكيو",
    "descriptionEn": "4 tender strips meal, fries, ketchup and 2 kaiser, BBQ sauce",
    "price": 254,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/b602bb11-4f27-4974-bad4-212553d9539f.jpg",
    "badge": "الأكثر طلباً",
    "likesCount": 1460,
    "spicyOptions": [
      "عادي مقرمش",
      "سبايسي حار"
    ],
    "sizes": [
      {
        "sizeUUID": "41b5396c-2224-11e8-924e-0242ac110011",
        "sizeName": "عادي",
        "price": 254
      }
    ],
    "extras": [
      {
        "id": "e5f55fb8-7f3b-46d1-b35c-7fd16892b9a8",
        "name": "عادى",
        "price": 0,
        "categoryName": "المذاق"
      },
      {
        "id": "b04a0d0a-a80d-4395-a027-3c2f28630e38",
        "name": "حار",
        "price": 0,
        "categoryName": "المذاق"
      },
      {
        "id": "079e8c22-035a-478f-8184-578340587ec2",
        "name": "صدر",
        "price": 70,
        "categoryName": "اضافات"
      },
      {
        "id": "804f1521-491d-46eb-992f-908f122d0d37",
        "name": "ورك",
        "price": 55,
        "categoryName": "اضافات"
      },
      {
        "id": "4e0d6ddb-7840-4ea1-9ee0-77eafa982657",
        "name": "جناح",
        "price": 65,
        "categoryName": "اضافات"
      },
      {
        "id": "2bbcb0d2-930a-4041-9bc9-5714a7985ec7",
        "name": "دبوس",
        "price": 45,
        "categoryName": "اضافات"
      }
    ],
    "drinkChoices": []
  },
  {
    "id": "basha-06ad6239",
    "uuid": "06ad6239-74b5-4ffc-b0fb-f7b68cbb06e1",
    "categoryId": "tender-meals",
    "name": "وجبة 6 تندر",
    "nameEn": "6 Tender Meal",
    "description": "وجبة 6 تندر استربس، بطاطس وسط، كاتشب، 4 كايزر، كول سلو، صوص باربيكيو",
    "descriptionEn": "6 tender strips meal, medium fries, ketchup, 4 kaiser, coleslaw, BBQ sauce",
    "price": 358,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/6d9c9d72-3829-4fda-8313-8c37103645f5.jpg",
    "badge": "مميز جداً",
    "likesCount": 321,
    "spicyOptions": [
      "عادي مقرمش",
      "سبايسي حار"
    ],
    "sizes": [
      {
        "sizeUUID": "41b5396c-2224-11e8-924e-0242ac110011",
        "sizeName": "عادي",
        "price": 358
      }
    ],
    "extras": [
      {
        "id": "e5f55fb8-7f3b-46d1-b35c-7fd16892b9a8",
        "name": "عادى",
        "price": 0,
        "categoryName": "المذاق"
      },
      {
        "id": "b04a0d0a-a80d-4395-a027-3c2f28630e38",
        "name": "حار",
        "price": 0,
        "categoryName": "المذاق"
      },
      {
        "id": "079e8c22-035a-478f-8184-578340587ec2",
        "name": "صدر",
        "price": 70,
        "categoryName": "اضافات"
      },
      {
        "id": "804f1521-491d-46eb-992f-908f122d0d37",
        "name": "ورك",
        "price": 55,
        "categoryName": "اضافات"
      },
      {
        "id": "4e0d6ddb-7840-4ea1-9ee0-77eafa982657",
        "name": "جناح",
        "price": 65,
        "categoryName": "اضافات"
      },
      {
        "id": "2bbcb0d2-930a-4041-9bc9-5714a7985ec7",
        "name": "دبوس",
        "price": 45,
        "categoryName": "اضافات"
      }
    ],
    "drinkChoices": []
  },
  {
    "id": "basha-87423e24",
    "uuid": "87423e24-a3a7-11e8-b2ca-0242ac110002",
    "categoryId": "tender-meals",
    "name": "وجبة 12 تندر",
    "nameEn": "12 Tender Meal",
    "description": "وجبة 12 تندر استربس، بطاطس عائلي، كاتشب، كول سلو، 6 كايزر، 2 باربيكيو صوص ، لتر بيبسي",
    "descriptionEn": "12 tender strips meal, family fries, ketchup, coleslaw, 6 kaiser, 2 BBQ sauce, pepsi liter",
    "price": 741,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/3b026e5b-c092-4ab2-a0f4-f01a82fc656a.jpg",
    "badge": "",
    "likesCount": 111,
    "spicyOptions": [
      "عادي مقرمش",
      "سبايسي حار"
    ],
    "sizes": [
      {
        "sizeUUID": "41b5396c-2224-11e8-924e-0242ac110011",
        "sizeName": "عادي",
        "price": 741
      }
    ],
    "extras": [
      {
        "id": "e5f55fb8-7f3b-46d1-b35c-7fd16892b9a8",
        "name": "عادى",
        "price": 0,
        "categoryName": "المذاق"
      },
      {
        "id": "b04a0d0a-a80d-4395-a027-3c2f28630e38",
        "name": "حار",
        "price": 0,
        "categoryName": "المذاق"
      },
      {
        "id": "079e8c22-035a-478f-8184-578340587ec2",
        "name": "صدر",
        "price": 70,
        "categoryName": "اضافات"
      },
      {
        "id": "804f1521-491d-46eb-992f-908f122d0d37",
        "name": "ورك",
        "price": 55,
        "categoryName": "اضافات"
      },
      {
        "id": "4e0d6ddb-7840-4ea1-9ee0-77eafa982657",
        "name": "جناح",
        "price": 65,
        "categoryName": "اضافات"
      },
      {
        "id": "2bbcb0d2-930a-4041-9bc9-5714a7985ec7",
        "name": "دبوس",
        "price": 45,
        "categoryName": "اضافات"
      }
    ],
    "drinkChoices": []
  },
  {
    "id": "basha-87422644",
    "uuid": "87422644-a3a7-11e8-b2ca-0242ac110002",
    "categoryId": "family-meals",
    "name": "وجبة 12 قطعة",
    "nameEn": "12 Pieces Meal",
    "description": "بطاطس عائلى، 10 كايزر، كاتشب، 2 كول سلو، لتر بيبسى",
    "descriptionEn": "Family fries, 10 kaiser, ketchup, 2 coleslaw and 1 liter pepsi",
    "price": 1073,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/12ec5d74-efbf-4050-bc2c-08fd7e045a20.jpg",
    "badge": "مميز جداً",
    "likesCount": 398,
    "spicyOptions": [
      "عادي مقرمش",
      "سبايسي حار"
    ],
    "sizes": [
      {
        "sizeUUID": "41b5396c-2224-11e8-924e-0242ac110011",
        "sizeName": "عادي",
        "price": 1073
      }
    ],
    "extras": [
      {
        "id": "e5f55fb8-7f3b-46d1-b35c-7fd16892b9a8",
        "name": "عادى",
        "price": 0,
        "categoryName": "المذاق"
      },
      {
        "id": "b04a0d0a-a80d-4395-a027-3c2f28630e38",
        "name": "حار",
        "price": 0,
        "categoryName": "المذاق"
      },
      {
        "id": "079e8c22-035a-478f-8184-578340587ec2",
        "name": "صدر",
        "price": 70,
        "categoryName": "اضافات"
      },
      {
        "id": "804f1521-491d-46eb-992f-908f122d0d37",
        "name": "ورك",
        "price": 55,
        "categoryName": "اضافات"
      },
      {
        "id": "4e0d6ddb-7840-4ea1-9ee0-77eafa982657",
        "name": "جناح",
        "price": 65,
        "categoryName": "اضافات"
      },
      {
        "id": "2bbcb0d2-930a-4041-9bc9-5714a7985ec7",
        "name": "دبوس",
        "price": 45,
        "categoryName": "اضافات"
      }
    ],
    "drinkChoices": []
  },
  {
    "id": "basha-8742280b",
    "uuid": "8742280b-a3a7-11e8-b2ca-0242ac110002",
    "categoryId": "family-meals",
    "name": "وجبة 16 قطعة",
    "nameEn": "16 Pieces Meal",
    "description": "بطاطس عائلى، 12 كايزر، كاتشب، 2 كول سلو، لتر بيبسى",
    "descriptionEn": "Family fries, 12 kaiser, ketchup, 2 coleslaw and 1 liter pepsi",
    "price": 1385,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/b19278fc-ca30-47d1-a06e-11525bb5ded8.jpg",
    "badge": "توفير العيلة",
    "likesCount": 110,
    "spicyOptions": [
      "عادي مقرمش",
      "سبايسي حار"
    ],
    "sizes": [
      {
        "sizeUUID": "41b5396c-2224-11e8-924e-0242ac110011",
        "sizeName": "عادي",
        "price": 1385
      }
    ],
    "extras": [
      {
        "id": "e5f55fb8-7f3b-46d1-b35c-7fd16892b9a8",
        "name": "عادى",
        "price": 0,
        "categoryName": "المذاق"
      },
      {
        "id": "b04a0d0a-a80d-4395-a027-3c2f28630e38",
        "name": "حار",
        "price": 0,
        "categoryName": "المذاق"
      },
      {
        "id": "079e8c22-035a-478f-8184-578340587ec2",
        "name": "صدر",
        "price": 70,
        "categoryName": "اضافات"
      },
      {
        "id": "804f1521-491d-46eb-992f-908f122d0d37",
        "name": "ورك",
        "price": 55,
        "categoryName": "اضافات"
      },
      {
        "id": "4e0d6ddb-7840-4ea1-9ee0-77eafa982657",
        "name": "جناح",
        "price": 65,
        "categoryName": "اضافات"
      },
      {
        "id": "2bbcb0d2-930a-4041-9bc9-5714a7985ec7",
        "name": "دبوس",
        "price": 45,
        "categoryName": "اضافات"
      }
    ],
    "drinkChoices": []
  },
  {
    "id": "basha-874229a1",
    "uuid": "874229a1-a3a7-11e8-b2ca-0242ac110002",
    "categoryId": "family-meals",
    "name": "وجبة 20 قطعة",
    "nameEn": "20 Pieces Meal",
    "description": "بطاطس عائلى، 14 كايزر، كاتشب، 3 كول سلو، 2 لتر بيبسى",
    "descriptionEn": "Family fries, 14 kaiser, ketchup, 3 coleslaw and 2 liter pepsi",
    "price": 1645,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/3b5c424c-1b9e-4b3f-8a5f-fa5a81d05932.jpg",
    "badge": "توفير العيلة",
    "likesCount": 61,
    "spicyOptions": [
      "عادي مقرمش",
      "سبايسي حار"
    ],
    "sizes": [
      {
        "sizeUUID": "41b5396c-2224-11e8-924e-0242ac110011",
        "sizeName": "عادي",
        "price": 1645
      }
    ],
    "extras": [
      {
        "id": "e5f55fb8-7f3b-46d1-b35c-7fd16892b9a8",
        "name": "عادى",
        "price": 0,
        "categoryName": "المذاق"
      },
      {
        "id": "b04a0d0a-a80d-4395-a027-3c2f28630e38",
        "name": "حار",
        "price": 0,
        "categoryName": "المذاق"
      },
      {
        "id": "079e8c22-035a-478f-8184-578340587ec2",
        "name": "صدر",
        "price": 70,
        "categoryName": "اضافات"
      },
      {
        "id": "804f1521-491d-46eb-992f-908f122d0d37",
        "name": "ورك",
        "price": 55,
        "categoryName": "اضافات"
      },
      {
        "id": "4e0d6ddb-7840-4ea1-9ee0-77eafa982657",
        "name": "جناح",
        "price": 65,
        "categoryName": "اضافات"
      },
      {
        "id": "2bbcb0d2-930a-4041-9bc9-5714a7985ec7",
        "name": "دبوس",
        "price": 45,
        "categoryName": "اضافات"
      }
    ],
    "drinkChoices": []
  },
  {
    "id": "basha-87422e8f",
    "uuid": "87422e8f-a3a7-11e8-b2ca-0242ac110002",
    "categoryId": "rizo",
    "name": "ارز بسمتي سادة",
    "nameEn": "Plain Basmati Rice",
    "description": "",
    "descriptionEn": "",
    "price": 52,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/0b3e69be-12fc-41ad-a1b5-c85872808d33.jpg",
    "badge": "مميز جداً",
    "likesCount": 327,
    "spicyOptions": [
      "عادي مقرمش",
      "سبايسي حار"
    ],
    "sizes": [
      {
        "sizeUUID": "41b5396c-2224-11e8-924e-0242ac110011",
        "sizeName": "عادي",
        "price": 52
      }
    ],
    "extras": [],
    "drinkChoices": []
  },
  {
    "id": "basha-87422cf7",
    "uuid": "87422cf7-a3a7-11e8-b2ca-0242ac110002",
    "categoryId": "rizo",
    "name": "ريزو بالجمبري",
    "nameEn": "Rizo with Shrimp",
    "description": "",
    "descriptionEn": "",
    "price": 195,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/add394e7-71a0-4f8a-b8cc-23f9d284e8ac.jpg",
    "badge": "",
    "likesCount": 104,
    "spicyOptions": [
      "عادي مقرمش",
      "سبايسي حار"
    ],
    "sizes": [
      {
        "sizeUUID": "41b5396c-2224-11e8-924e-0242ac110011",
        "sizeName": "عادي",
        "price": 195
      }
    ],
    "extras": [
      {
        "id": "9b396541-9c60-44db-a2c6-0f60f93d70e7",
        "name": "اضف",
        "price": 20,
        "categoryName": "اضافة قطعة جمبري"
      }
    ],
    "drinkChoices": []
  },
  {
    "id": "basha-3750ab4d",
    "uuid": "3750ab4d-6579-41dc-9d15-2625a33894d9",
    "categoryId": "rizo",
    "name": "ريزو بالدجاج",
    "nameEn": "Rizo with Chicken",
    "description": "",
    "descriptionEn": "",
    "price": 163,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/8477d928-1c4f-4106-b59d-af9724ea3fd0.jpg",
    "badge": "",
    "likesCount": 35,
    "spicyOptions": [
      "عادي مقرمش",
      "سبايسي حار"
    ],
    "sizes": [
      {
        "sizeUUID": "41b5396c-2224-11e8-924e-0242ac110011",
        "sizeName": "عادي",
        "price": 163
      }
    ],
    "extras": [],
    "drinkChoices": []
  },
  {
    "id": "basha-c1c766bc",
    "uuid": "c1c766bc-7dbf-4c20-9976-bfe29c34a62a",
    "categoryId": "rizo",
    "name": "ريزو بالدجاج المشوي",
    "nameEn": "Rizo with Grilled Chicken",
    "description": "",
    "descriptionEn": "",
    "price": 208,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/1dbe50b8-3839-459b-b8c7-d38f6ab1718a.jpg",
    "badge": "",
    "likesCount": 27,
    "spicyOptions": [
      "عادي مقرمش",
      "سبايسي حار"
    ],
    "sizes": [
      {
        "sizeUUID": "41b5396c-2224-11e8-924e-0242ac110011",
        "sizeName": "عادي",
        "price": 208
      }
    ],
    "extras": [],
    "drinkChoices": []
  },
  {
    "id": "basha-8742366b",
    "uuid": "8742366b-a3a7-11e8-b2ca-0242ac110002",
    "categoryId": "kids-meals",
    "name": "وجبة اطفال دجاج ناجتس",
    "nameEn": "Chicken Nuggets Kids Meal",
    "description": "6 قطع، بطاطس، كايزر، عصير، لعبة",
    "descriptionEn": "6 pieces, fries, kaiser, juice, toy",
    "price": 160,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/dad79919-9521-436c-a4d9-67cda5306975.jpg",
    "badge": "",
    "likesCount": 171,
    "spicyOptions": [],
    "sizes": [
      {
        "sizeUUID": "41af9d00-2224-11e8-924e-0242ac110011",
        "sizeName": "وجبة",
        "price": 160
      }
    ],
    "extras": [],
    "drinkChoices": []
  },
  {
    "id": "basha-87423af9",
    "uuid": "87423af9-a3a7-11e8-b2ca-0242ac110002",
    "categoryId": "kids-meals",
    "name": "وجبة اطفال دجاج مقلى",
    "nameEn": "Fried Chicken Kids Meal",
    "description": "قطعة دبوس دجاج، بطاطس، كايزر، عصير، لعبة",
    "descriptionEn": "Chicken drumstick piece, fries, kaiser, juice, toy",
    "price": 150,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/bbd1965a-9bdf-4292-af82-a5e67bb8b285.jpg",
    "badge": "",
    "likesCount": 13,
    "spicyOptions": [],
    "sizes": [
      {
        "sizeUUID": "41af9d00-2224-11e8-924e-0242ac110011",
        "sizeName": "وجبة",
        "price": 150
      }
    ],
    "extras": [],
    "drinkChoices": []
  },
  {
    "id": "basha-87423972",
    "uuid": "87423972-a3a7-11e8-b2ca-0242ac110002",
    "categoryId": "kids-meals",
    "name": "وجبة اطفال بيف برجر",
    "nameEn": "Beef Burger Kids Meal",
    "description": "ساندوتش برجر، بطاطس، عصير، لعبة",
    "descriptionEn": "Burger sandwich, fries, juice, toy",
    "price": 202,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/977563bf-9265-4b4d-b53e-0aa42d45baa3.jpg",
    "badge": "",
    "likesCount": 24,
    "spicyOptions": [],
    "sizes": [
      {
        "sizeUUID": "41af9d00-2224-11e8-924e-0242ac110011",
        "sizeName": "وجبة",
        "price": 202
      }
    ],
    "extras": [],
    "drinkChoices": []
  },
  {
    "id": "basha-874237f3",
    "uuid": "874237f3-a3a7-11e8-b2ca-0242ac110002",
    "categoryId": "kids-meals",
    "name": "وجبة اطفال دجاج فيليه",
    "nameEn": "Chicken Fillet Kids Meal",
    "description": "ساندوتش فيليه، بطاطس، عصير، لعبة",
    "descriptionEn": "Fillet sandwich, fries, juice, toy",
    "price": 182,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/b5cd36d0-41e2-4732-b025-50c2c5a4c81b.jpg",
    "badge": "",
    "likesCount": 118,
    "spicyOptions": [],
    "sizes": [
      {
        "sizeUUID": "41af9d00-2224-11e8-924e-0242ac110011",
        "sizeName": "وجبة",
        "price": 182
      }
    ],
    "extras": [],
    "drinkChoices": []
  },
  {
    "id": "basha-332adc59",
    "uuid": "332adc59-0e96-49b9-9b17-ad4ce89b4eb4",
    "categoryId": "side-items",
    "name": "بطاطس بالجبنة",
    "nameEn": "Cheese Fries",
    "description": "",
    "descriptionEn": "",
    "price": 104,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/71e1ecd0-29da-4249-bb9f-26724a7c8878.jpg",
    "badge": "مميز جداً",
    "likesCount": 469,
    "spicyOptions": [],
    "sizes": [
      {
        "sizeUUID": "41b5396c-2224-11e8-924e-0242ac110011",
        "sizeName": "عادي",
        "price": 104
      }
    ],
    "extras": [
      {
        "id": "e5f55fb8-7f3b-46d1-b35c-7fd16892b9a8",
        "name": "عادى",
        "price": 0,
        "categoryName": "المذاق"
      },
      {
        "id": "b04a0d0a-a80d-4395-a027-3c2f28630e38",
        "name": "حار",
        "price": 0,
        "categoryName": "المذاق"
      }
    ],
    "drinkChoices": []
  },
  {
    "id": "basha-407e97f5",
    "uuid": "407e97f5-c557-4339-b0b9-66f090dfc00c",
    "categoryId": "side-items",
    "name": "4اصابع موتزاريلا",
    "nameEn": "Mozzarella Sticks",
    "description": "",
    "descriptionEn": "",
    "price": 91,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/1463a4b8-cd67-4ba7-8be1-790fe50bad5c.jpg",
    "badge": "",
    "likesCount": 81,
    "spicyOptions": [],
    "sizes": [
      {
        "sizeUUID": "5f4cc1c4-a3a7-11e8-b2ca-0242ac110002",
        "sizeName": "4 قطع",
        "price": 91
      }
    ],
    "extras": [],
    "drinkChoices": []
  },
  {
    "id": "basha-e35cac05",
    "uuid": "e35cac05-442d-496b-a5b6-f46eddbf1ded",
    "categoryId": "side-items",
    "name": "حلقات بصل",
    "nameEn": "Onion Rings",
    "description": "",
    "descriptionEn": "",
    "price": 78,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/0b9055dc-f502-4445-92c4-6adfe93513f0.jpg",
    "badge": "",
    "likesCount": 114,
    "spicyOptions": [],
    "sizes": [
      {
        "sizeUUID": "5f4d8189-a3a7-11e8-b2ca-0242ac110002",
        "sizeName": "7 قطع",
        "price": 78
      }
    ],
    "extras": [],
    "drinkChoices": []
  },
  {
    "id": "basha-d5bd9a81",
    "uuid": "d5bd9a81-d4f5-4cd4-a6b8-d049a0f9a22d",
    "categoryId": "side-items",
    "name": "شيدر هالبينو بايتس",
    "nameEn": "Cheddar Jalapeno Bites",
    "description": "",
    "descriptionEn": "",
    "price": 91,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/3ddf5c9a-7a3f-436d-817d-ad0de720e6c2.jpg",
    "badge": "",
    "likesCount": 138,
    "spicyOptions": [],
    "sizes": [
      {
        "sizeUUID": "5f4cc1c4-a3a7-11e8-b2ca-0242ac110002",
        "sizeName": "4 قطع",
        "price": 91
      }
    ],
    "extras": [],
    "drinkChoices": []
  },
  {
    "id": "basha-527c8262",
    "uuid": "527c8262-5b3d-4b15-893d-3fb9be55a7e9",
    "categoryId": "side-items",
    "name": "كول سلو",
    "nameEn": "Coleslaw",
    "description": "",
    "descriptionEn": "",
    "price": 46,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/fb93ed1b-9ca0-4fe9-8fdc-82da62ed612c.jpg",
    "badge": "الأكثر طلباً",
    "likesCount": 1493,
    "spicyOptions": [],
    "sizes": [
      {
        "sizeUUID": "41b5396c-2224-11e8-924e-0242ac110011",
        "sizeName": "عادي",
        "price": 46
      }
    ],
    "extras": [],
    "drinkChoices": []
  },
  {
    "id": "basha-d8c1de26",
    "uuid": "d8c1de26-23e0-4cfb-8b3a-db39550d2c4b",
    "categoryId": "side-items",
    "name": "صوص جبنة شيدر",
    "nameEn": "Cheddar Cheese Sauce",
    "description": "",
    "descriptionEn": "",
    "price": 33,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/500fa134-f3cc-4811-a0f1-2e22603f05e7.jpg",
    "badge": "",
    "likesCount": 25,
    "spicyOptions": [],
    "sizes": [
      {
        "sizeUUID": "41b5396c-2224-11e8-924e-0242ac110011",
        "sizeName": "عادي",
        "price": 33
      }
    ],
    "extras": [],
    "drinkChoices": []
  },
  {
    "id": "basha-528c88f4",
    "uuid": "528c88f4-8da1-4107-8305-5f2dc2e5e82b",
    "categoryId": "side-items",
    "name": "بطاطس مقلية",
    "nameEn": "French Fries",
    "description": "",
    "descriptionEn": "",
    "price": 59,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/051712e8-7b85-4853-8360-1dd64aa3fb45.jpg",
    "badge": "مميز جداً",
    "likesCount": 441,
    "spicyOptions": [],
    "sizes": [
      {
        "sizeUUID": "41b5396c-2224-11e8-924e-0242ac110011",
        "sizeName": "عادي",
        "price": 59
      }
    ],
    "extras": [],
    "drinkChoices": []
  },
  {
    "id": "basha-2bfafe98",
    "uuid": "2bfafe98-b35c-4c55-8686-b479eb0ae17d",
    "categoryId": "side-items",
    "name": "ثومية",
    "nameEn": "Garlic Dip",
    "description": "",
    "descriptionEn": "",
    "price": 20,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/99cfd5bc-7757-4cfc-8f3b-0b57850fb912.jpg",
    "badge": "مميز جداً",
    "likesCount": 494,
    "spicyOptions": [],
    "sizes": [
      {
        "sizeUUID": "41b5396c-2224-11e8-924e-0242ac110011",
        "sizeName": "عادي",
        "price": 20
      }
    ],
    "extras": [],
    "drinkChoices": []
  },
  {
    "id": "basha-0bc6888b",
    "uuid": "0bc6888b-6100-4ae1-9489-5d291a681d24",
    "categoryId": "side-items",
    "name": "كاتشب",
    "nameEn": "Ketchup",
    "description": "",
    "descriptionEn": "",
    "price": 20,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/d1ef6b40-6710-4627-aa6d-81e276fbf9c3.jpg",
    "badge": "",
    "likesCount": 28,
    "spicyOptions": [],
    "sizes": [
      {
        "sizeUUID": "41b5396c-2224-11e8-924e-0242ac110011",
        "sizeName": "عادي",
        "price": 20
      }
    ],
    "extras": [],
    "drinkChoices": []
  },
  {
    "id": "basha-90266076",
    "uuid": "90266076-5c96-476d-a631-1ac5137d1625",
    "categoryId": "side-items",
    "name": "صوص باربيكيو",
    "nameEn": "BBQ Sauce",
    "description": "",
    "descriptionEn": "",
    "price": 20,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/e4a5acb4-5285-4746-b348-fac26d1dba42.jpg",
    "badge": "",
    "likesCount": 178,
    "spicyOptions": [],
    "sizes": [
      {
        "sizeUUID": "41b5396c-2224-11e8-924e-0242ac110011",
        "sizeName": "عادي",
        "price": 20
      }
    ],
    "extras": [],
    "drinkChoices": []
  },
  {
    "id": "basha-9ba25461",
    "uuid": "9ba25461-f42a-4682-95ae-5016d77b95f9",
    "categoryId": "side-items",
    "name": "مايونيز",
    "nameEn": "Mayonnaise",
    "description": "",
    "descriptionEn": "",
    "price": 20,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/451d095a-a3a1-441b-adb6-2f4a40cbdc22.jpg",
    "badge": "",
    "likesCount": 59,
    "spicyOptions": [],
    "sizes": [
      {
        "sizeUUID": "41b5396c-2224-11e8-924e-0242ac110011",
        "sizeName": "عادي",
        "price": 20
      }
    ],
    "extras": [],
    "drinkChoices": []
  },
  {
    "id": "basha-e2ff090d",
    "uuid": "e2ff090d-458b-495e-a042-01e820f8e541",
    "categoryId": "side-items",
    "name": "هالبينو",
    "nameEn": "Jalapeno",
    "description": "",
    "descriptionEn": "",
    "price": 20,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/0c5dccd8-c7d0-4033-bb1f-4bb9bca02413.jpg",
    "badge": "",
    "likesCount": 44,
    "spicyOptions": [],
    "sizes": [
      {
        "sizeUUID": "41b5396c-2224-11e8-924e-0242ac110011",
        "sizeName": "عادي",
        "price": 20
      }
    ],
    "extras": [],
    "drinkChoices": []
  },
  {
    "id": "basha-087fb192",
    "uuid": "087fb192-0072-4118-94a8-ee2149e7ae89",
    "categoryId": "drinks",
    "name": "بيبسى",
    "nameEn": "Pepsi",
    "description": "",
    "descriptionEn": "",
    "price": 33,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/b433c2a6-91ae-4d92-a278-05ea4bee6f28.jpg",
    "badge": "الأكثر طلباً",
    "likesCount": 541,
    "spicyOptions": [],
    "sizes": [
      {
        "sizeUUID": "41b5396c-2224-11e8-924e-0242ac110011",
        "sizeName": "عادي",
        "price": 33
      }
    ],
    "extras": [],
    "drinkChoices": []
  },
  {
    "id": "basha-fd7aedff",
    "uuid": "fd7aedff-189a-4caa-9c96-50ed27e8c676",
    "categoryId": "drinks",
    "name": "سفن اب",
    "nameEn": "7up",
    "description": "",
    "descriptionEn": "",
    "price": 33,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/00fedbfe-6182-4d0f-8dc0-e42a40461123.jpg",
    "badge": "",
    "likesCount": 66,
    "spicyOptions": [],
    "sizes": [
      {
        "sizeUUID": "41b5396c-2224-11e8-924e-0242ac110011",
        "sizeName": "عادي",
        "price": 33
      }
    ],
    "extras": [],
    "drinkChoices": []
  },
  {
    "id": "basha-0e328a3c",
    "uuid": "0e328a3c-bfcc-40bc-ab6b-346bf87b153f",
    "categoryId": "drinks",
    "name": "ميرندا برتقال",
    "nameEn": "Mirinda Orange",
    "description": "",
    "descriptionEn": "",
    "price": 33,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/8cf7ff15-75c4-4ce4-a210-727a378d6dec.jpg",
    "badge": "",
    "likesCount": 41,
    "spicyOptions": [],
    "sizes": [
      {
        "sizeUUID": "41b5396c-2224-11e8-924e-0242ac110011",
        "sizeName": "عادي",
        "price": 33
      }
    ],
    "extras": [],
    "drinkChoices": []
  },
  {
    "id": "basha-c5056b85",
    "uuid": "c5056b85-1536-4018-a2d4-89da7bdced17",
    "categoryId": "drinks",
    "name": "ميرندا تفاح",
    "nameEn": "Mirinda Apple",
    "description": "",
    "descriptionEn": "",
    "price": 33,
    "image": "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/e76e53e0-8ed8-4132-b435-f34b014c7b8f.jpg",
    "badge": "",
    "likesCount": 53,
    "spicyOptions": [],
    "sizes": [
      {
        "sizeUUID": "41b5396c-2224-11e8-924e-0242ac110011",
        "sizeName": "عادي",
        "price": 33
      }
    ],
    "extras": [],
    "drinkChoices": []
  }
];
var TESTIMONIALS = [
  {
    "name": "أحمد حسام",
    "city": "مدينة نصر، القاهرة",
    "comment": "أقوى فرايد تشيكن في مصر! القرمشة بتفضل مقرمشة لآخر حتة، الفراخ طازجة جداً والخلطة واصلة للعظم. الاستلام المسبق بدون طابور ميزة ممتازة.",
    "rating": 5,
    "date": "أمس",
    "verified": true
  },
  {
    "name": "م. كريم عبد الرحمن",
    "city": "التجمع الخامس",
    "comment": "ميزة حجز الاستلام من الفرع دي عبقرية! طلبت من الموبايل وكتبت هستلم بعد ربع ساعة، وصلت الفرع لقيت الوجبة جاهزة وساخنة بالكود بتاعي بدون ما أقف دقيقة واحدة في الطابور.",
    "rating": 5,
    "date": "منذ 3 أيام",
    "verified": true
  },
  {
    "name": "نورهان فتحي",
    "city": "المعادي",
    "comment": "الساندوتشات طعمها ممتاز والجبنة سايحة وغنية جداً، والوجبات العائلية توفير محترم ونظافة عالية. شكراً شيكن باشا على الجودة دي.",
    "rating": 5,
    "date": "منذ 5 أيام",
    "verified": true
  }
];
var SECRET_RECIPE_POINTS = [
  {
    "title": "دجاج مزارع طازج 100%",
    "desc": "دجاج مزارع معتمد يذبح يومياً، طازج ومغسول بأعلى معايير النظافة والجودة، غير مجمد.",
    "iconSvg": "check"
  },
  {
    "title": "خلطة بهارات الباشا الخاصة",
    "desc": "تتبيلة غنية بالبهارات الشرقية والغربية تنقع فيها الفراخ لساعات طويلة لتتشرب النكهة حتى العظم.",
    "iconSvg": "star"
  },
  {
    "title": "قلي تحت ضغط محسوب",
    "desc": "أحدث أفران القلي البروستد تحت ضغط محسوب بالثانية لقرمشة ذهبية خفيفة دون تشرب أي زيوت زائدة.",
    "iconSvg": "lightning"
  },
  {
    "title": "تغليف حراري ذكي",
    "desc": "علب تهوية حرارية مخصصة للدليفري والاستلام تمنع الرطوبة وتضمن وصول الوجبة ساخنة ومقرمشة.",
    "iconSvg": "box"
  }
];

if (typeof window !== 'undefined') {
  window.RESTAURANT_INFO = RESTAURANT_INFO;
  window.PROMO_CODES = PROMO_CODES;
  window.BRANCHES = BRANCHES;
  window.CATEGORIES = CATEGORIES;
  window.MENU_ITEMS = MENU_ITEMS;
  window.TESTIMONIALS = TESTIMONIALS;
  window.SECRET_RECIPE_POINTS = SECRET_RECIPE_POINTS;
}
