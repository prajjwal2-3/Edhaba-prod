import Restcard from "./Rescard";


const Body = ()=>{
    return(
       <div className="body">
        <div className="search">Search</div>
        <div className="restcontainer">
        {resdata.restaurants.map((restaurant, index) => (
                <Restcard key={index} resdata1={restaurant} />
            ))}
         </div>
       </div> 
    )
}
const resdata = {
    "restaurants": [
                  {
                    "info": {
                      "id": "15680",
                      "name": "Wow! Momo",
                      "cloudinaryImageId": "0984acc0ed7b914206dbbcb90297becc",
                      "locality": "Prashant Vihar",
                      "areaName": "Prashant Vihar",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Tibetan",
                        "Healthy Food",
                        "Asian",
                        "Chinese",
                        "Snacks",
                        "Continental",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4,
                      "parentId": "1776",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "5K+",
                      "sla": {
                        "deliveryTime": 32,
                        "lastMileTravel": 5.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "32 mins",
                        "lastMileTravelString": "5.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-01-19 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹120 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      "context": "seo-data-a81b0d04-ab81-46f3-a067-c5c680e841da"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/wow-momo-prashant-vihar-delhi-15680",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "info": {
                      "id": "733714",
                      "name": "Chicago Pizza",
                      "cloudinaryImageId": "80f040545552605e33eba09f8fa30be9",
                      "locality": "Sector 8",
                      "areaName": "Rohini",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "Fast Food",
                        "Pizzas"
                      ],
                      "avgRating": 3.6,
                      "parentId": "60277",
                      "avgRatingString": "3.6",
                      "totalRatingsString": "50+",
                      "sla": {
                        "deliveryTime": 30,
                        "lastMileTravel": 2.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30 mins",
                        "lastMileTravelString": "2.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-01-19 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      "context": "seo-data-a81b0d04-ab81-46f3-a067-c5c680e841da"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/chicago-pizza-sector-8-rohini-delhi-733714",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "info": {
                      "id": "26723",
                      "name": "KFC",
                      "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
                      "locality": "Sector 3",
                      "areaName": "Rohini",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Biryani",
                        "American",
                        "Snacks",
                        "Fast Food"
                      ],
                      "avgRating": 4.2,
                      "parentId": "547",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "5K+",
                      "sla": {
                        "deliveryTime": 19,
                        "lastMileTravel": 2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "19 mins",
                        "lastMileTravelString": "2.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-01-20 05:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹120 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      "context": "seo-data-a81b0d04-ab81-46f3-a067-c5c680e841da"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/kfc-sector-3-rohini-delhi-26723",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "info": {
                      "id": "498382",
                      "name": "Burger King",
                      "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
                      "locality": "M2K Mall",
                      "areaName": "Rohini",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Burgers",
                        "American"
                      ],
                      "avgRating": 4.4,
                      "parentId": "166",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 21,
                        "lastMileTravel": 2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "21 mins",
                        "lastMileTravelString": "2.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-01-20 03:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹129"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      "context": "seo-data-a81b0d04-ab81-46f3-a067-c5c680e841da"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/burger-king-m2k-mall-rohini-delhi-498382",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "info": {
                      "id": "253731",
                      "name": "McDonald's",
                      "cloudinaryImageId": "ecd32b841549ce6bfd993260a2086c1f",
                      "locality": "Sector 3",
                      "areaName": "Rohini",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "American"
                      ],
                      "avgRating": 4.4,
                      "parentId": "630",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "5K+",
                      "sla": {
                        "deliveryTime": 21,
                        "lastMileTravel": 2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "21 mins",
                        "lastMileTravelString": "2.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-01-19 23:45:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹120 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      "context": "seo-data-a81b0d04-ab81-46f3-a067-c5c680e841da"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/mcdonalds-sector-3-rohini-delhi-253731",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "info": {
                      "id": "622616",
                      "name": "Domino's Pizza",
                      "cloudinaryImageId": "hsb5yt3qhechxockrbut",
                      "locality": "3rd Sector",
                      "areaName": "Rohini",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Pizzas",
                        "Italian",
                        "Pastas",
                        "Desserts"
                      ],
                      "avgRating": 4.4,
                      "parentId": "2456",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "500+",
                      "sla": {
                        "deliveryTime": 25,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25 mins",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-01-20 00:59:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹150 OFF",
                        "subHeader": "ABOVE ₹299",
                        "discountTag": "FLAT DEAL"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      "context": "seo-data-a81b0d04-ab81-46f3-a067-c5c680e841da"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/dominos-pizza-3rd-sector-rohini-delhi-622616",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "info": {
                      "id": "326440",
                      "name": "Punjabi Angithi (Vegorama Group)",
                      "cloudinaryImageId": "g2pklvjnapzfoc4ackou",
                      "locality": "Paschim Vihar",
                      "areaName": "Paschim Vihar",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "North Indian",
                        "Chinese",
                        "Punjabi",
                        "Kebabs",
                        "Tandoor"
                      ],
                      "avgRating": 4.2,
                      "veg": true,
                      "parentId": "465050",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "34 mins",
                        "lastMileTravelString": "5.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-01-19 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ],
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹120 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      "context": "seo-data-a81b0d04-ab81-46f3-a067-c5c680e841da"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/punjabi-angithi-vegorama-group-paschim-vihar-delhi-326440",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "info": {
                      "id": "341033",
                      "name": "Bakingo",
                      "cloudinaryImageId": "05994df0e49725bd230146c320b8f7aa",
                      "locality": "Rithala",
                      "areaName": "Rohini",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Bakery",
                        "Desserts",
                        "Beverages",
                        "Snacks"
                      ],
                      "avgRating": 4.4,
                      "parentId": "3818",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 22,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "22 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-01-20 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹120 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      "context": "seo-data-a81b0d04-ab81-46f3-a067-c5c680e841da"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/bakingo-rithala-rohini-delhi-341033",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  
                  {
                    "info": {
                      "id": "390153",
                      "name": "NH1 Bowls - Highway To North",
                      "cloudinaryImageId": "94654fdf308764cd0faf83dba35bcdc3",
                      "locality": "Sector 7",
                      "areaName": "Prashant Vihar",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "North Indian",
                        "Punjabi",
                        "Home Food"
                      ],
                      "avgRating": 4.3,
                      "parentId": "22452",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "100+",
                      "sla": {
                        "deliveryTime": 21,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "16-26 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-01-20 02:00:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹120 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      "context": "seo-data-a81b0d04-ab81-46f3-a067-c5c680e841da"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/nh1-bowls-highway-to-north-sector-7-prashant-vihar-delhi-390153",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {"info": {
                    "id": "55473",
                    "name": "Pizza Hut",
                    "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                    "locality": "Sector 10",
                    "areaName": "Rohini",
                    "costForTwo": "₹350 for two",
                    "cuisines": [
                      "Pizzas"
                    ],
                    "avgRating": 3.9,
                    "parentId": "721",
                    "avgRatingString": "3.9",
                    "totalRatingsString": "5K+",
                    "sla": {
                      "deliveryTime": 27,
                      "lastMileTravel": 2.3,
                      "serviceability": "SERVICEABLE",
                      "slaString": "27 mins",
                      "lastMileTravelString": "2.3 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2024-01-24 04:00:00",
                      "opened": true
                    },
                    "badges": {
                      
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "ITEMS",
                      "subHeader": "AT ₹179"
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    }
                  },
                  "analytics": {
                    
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/restaurants/pizza-hut-sector-10-rohini-delhi-55473",
                    "type": "WEBLINK"
                  }
                },
                {
                  "info": {
                    "id": "10208",
                    "name": "Burger King",
                    "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
                    "locality": "Sector 10",
                    "areaName": "Rohini",
                    "costForTwo": "₹350 for two",
                    "cuisines": [
                      "Burgers",
                      "American"
                    ],
                    "avgRating": 4.3,
                    "parentId": "166",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "10K+",
                    "sla": {
                      "deliveryTime": 20,
                      "lastMileTravel": 2.3,
                      "serviceability": "SERVICEABLE",
                      "slaString": "20 mins",
                      "lastMileTravelString": "2.3 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2024-01-24 06:00:00",
                      "opened": true
                    },
                    "badges": {
                      
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "ITEMS",
                      "subHeader": "AT ₹129"
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    }
                  },
                  "analytics": {
                    
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/restaurants/burger-king-sector-10-rohini-delhi-10208",
                    "type": "WEBLINK"
                  }
                },
                {
                  "info": {
                    "id": "58215",
                    "name": "Theobroma",
                    "cloudinaryImageId": "b033728dcb0101ceb19bff0e1e1f6474",
                    "locality": "Punjabi Bagh",
                    "areaName": "Punjabi Bagh",
                    "costForTwo": "₹400 for two",
                    "cuisines": [
                      "Bakery",
                      "Desserts"
                    ],
                    "avgRating": 4.6,
                    "parentId": "1040",
                    "avgRatingString": "4.6",
                    "totalRatingsString": "5K+",
                    "sla": {
                      "deliveryTime": 39,
                      "lastMileTravel": 7.4,
                      "serviceability": "SERVICEABLE",
                      "slaString": "39 mins",
                      "lastMileTravelString": "7.4 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2024-01-23 23:59:00",
                      "opened": true
                    },
                    "badges": {
                      "imageBadges": [
                        {
                          "imageId": "newg.png",
                          "description": "Gourmet"
                        }
                      ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          "badgeObject": [
                            {
                              "attributes": {
                                "description": "Gourmet",
                                "imageId": "newg.png"
                              }
                            }
                          ]
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "₹120 OFF",
                      "subHeader": "ABOVE ₹199",
                      "discountTag": "FLAT DEAL"
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    }
                  },
                  "analytics": {
                    
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/restaurants/theobroma-punjabi-bagh-delhi-58215",
                    "type": "WEBLINK"
                  }
                },
                {
                  "info": {
                    "id": "69465",
                    "name": "Starbucks Coffee",
                    "cloudinaryImageId": "182191ab163770437b62861a6f987709",
                    "locality": "Pearls Business Park",
                    "areaName": "Netaji Subhash Place",
                    "costForTwo": "₹400 for two",
                    "cuisines": [
                      "Beverages",
                      "Cafe",
                      "Snacks",
                      "Desserts",
                      "Bakery",
                      "Ice Cream"
                    ],
                    "avgRating": 4.3,
                    "parentId": "195515",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "5K+",
                    "sla": {
                      "deliveryTime": 34,
                      "lastMileTravel": 6.4,
                      "serviceability": "SERVICEABLE",
                      "slaString": "34 mins",
                      "lastMileTravelString": "6.4 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2024-01-23 23:30:00",
                      "opened": true
                    },
                    "badges": {
                      "textExtendedBadges": [
                        {
                          "iconId": "guiltfree/GF_Logo_android_3x",
                          "shortDescription": "options available",
                          "fontColor": "#7E808C"
                        }
                      ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          "badgeObject": [
                            {
                              "attributes": {
                                "description": "",
                                "fontColor": "#7E808C",
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "options available"
                              }
                            }
                          ]
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "₹120 OFF",
                      "subHeader": "ABOVE ₹199",
                      "discountTag": "FLAT DEAL"
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    }
                  },
                  "analytics": {
                    
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/restaurants/starbucks-coffee-pearls-business-park-netaji-subhash-place-delhi-69465",
                    "type": "WEBLINK"
                  }
                },
                {
                  "info": {
                    "id": "26723",
                    "name": "KFC",
                    "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
                    "locality": "Sector 3",
                    "areaName": "Rohini",
                    "costForTwo": "₹400 for two",
                    "cuisines": [
                      "Burgers",
                      "Biryani",
                      "American",
                      "Snacks",
                      "Fast Food"
                    ],
                    "avgRating": 4.2,
                    "parentId": "547",
                    "avgRatingString": "4.2",
                    "totalRatingsString": "5K+",
                    "sla": {
                      "deliveryTime": 19,
                      "lastMileTravel": 2,
                      "serviceability": "SERVICEABLE",
                      "slaString": "19 mins",
                      "lastMileTravelString": "2.0 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2024-01-24 05:00:00",
                      "opened": true
                    },
                    "badges": {
                      
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "₹120 OFF",
                      "subHeader": "ABOVE ₹199",
                      "discountTag": "FLAT DEAL"
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    }
                  },
                  "analytics": {
                    
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/restaurants/kfc-sector-3-rohini-delhi-26723",
                    "type": "WEBLINK"
                  }
                },
                {
                  "info": {
                    "id": "253731",
                    "name": "McDonald's",
                    "cloudinaryImageId": "ecd32b841549ce6bfd993260a2086c1f",
                    "locality": "Sector 3",
                    "areaName": "Rohini",
                    "costForTwo": "₹400 for two",
                    "cuisines": [
                      "American"
                    ],
                    "avgRating": 4.4,
                    "parentId": "630",
                    "avgRatingString": "4.4",
                    "totalRatingsString": "5K+",
                    "sla": {
                      "deliveryTime": 23,
                      "lastMileTravel": 2.2,
                      "serviceability": "SERVICEABLE",
                      "slaString": "23 mins",
                      "lastMileTravelString": "2.2 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2024-01-23 23:45:00",
                      "opened": true
                    },
                    "badges": {
                      
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "₹120 OFF",
                      "subHeader": "ABOVE ₹199",
                      "discountTag": "FLAT DEAL"
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    }
                  },
                  "analytics": {
                    
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/restaurants/mcdonalds-sector-3-rohini-delhi-253731",
                    "type": "WEBLINK"
                  }
                },
                {
                  "info": {
                    "id": "24162",
                    "name": "Domino's Pizza",
                    "cloudinaryImageId": "oiw7cx0apvp7as1oxufg",
                    "locality": "Rohini",
                    "areaName": "Rohini",
                    "costForTwo": "₹400 for two",
                    "cuisines": [
                      "Pizzas",
                      "Italian",
                      "Pastas",
                      "Desserts"
                    ],
                    "avgRating": 4.5,
                    "parentId": "2456",
                    "avgRatingString": "4.5",
                    "totalRatingsString": "10K+",
                    "sla": {
                      "deliveryTime": 27,
                      "lastMileTravel": 2,
                      "serviceability": "SERVICEABLE",
                      "slaString": "27 mins",
                      "lastMileTravelString": "2.0 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2024-01-24 03:00:00",
                      "opened": true
                    },
                    "badges": {
                      
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "₹120 OFF",
                      "subHeader": "ABOVE ₹199",
                      "discountTag": "FLAT DEAL"
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    }
                  },
                  "analytics": {
                    
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/restaurants/dominos-pizza-rohini-delhi-24162",
                    "type": "WEBLINK"
                  }
                },
                {
                  "info": {
                    "id": "239435",
                    "name": "La Pino'z Pizza",
                    "cloudinaryImageId": "tolejbnae10pq0udbavn",
                    "locality": "New delhi",
                    "areaName": "Paschim Vihar",
                    "costForTwo": "₹350 for two",
                    "cuisines": [
                      "Pizzas",
                      "Pastas",
                      "Italian",
                      "Desserts",
                      "Beverages"
                    ],
                    "avgRating": 4.1,
                    "parentId": "4961",
                    "avgRatingString": "4.1",
                    "totalRatingsString": "5K+",
                    "sla": {
                      "deliveryTime": 32,
                      "lastMileTravel": 5,
                      "serviceability": "SERVICEABLE",
                      "slaString": "32 mins",
                      "lastMileTravelString": "5.0 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2024-01-24 05:00:00",
                      "opened": true
                    },
                    "badges": {
                      
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "₹120 OFF",
                      "subHeader": "ABOVE ₹199",
                      "discountTag": "FLAT DEAL"
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    }
                  },
                  "analytics": {
                    
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-new-paschim-vihar-delhi-239435",
                    "type": "WEBLINK"
                  }
                },
                {
                  "info": {
                    "id": "341033",
                    "name": "Bakingo",
                    "cloudinaryImageId": "05994df0e49725bd230146c320b8f7aa",
                    "locality": "Rithala",
                    "areaName": "Rohini",
                    "costForTwo": "₹300 for two",
                    "cuisines": [
                      "Bakery",
                      "Desserts",
                      "Beverages",
                      "Snacks"
                    ],
                    "avgRating": 4.4,
                    "parentId": "3818",
                    "avgRatingString": "4.4",
                    "totalRatingsString": "1K+",
                    "sla": {
                      "deliveryTime": 23,
                      "lastMileTravel": 3,
                      "serviceability": "SERVICEABLE",
                      "slaString": "23 mins",
                      "lastMileTravelString": "3.0 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2024-01-24 00:00:00",
                      "opened": true
                    },
                    "badges": {
                      
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "₹120 OFF",
                      "subHeader": "ABOVE ₹199",
                      "discountTag": "FLAT DEAL"
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    }
                  },
                  "analytics": {
                    
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/restaurants/bakingo-rithala-rohini-delhi-341033",
                    "type": "WEBLINK"
                  }
                },
                {
                  "info": {
                    "id": "10392",
                    "name": "Subway",
                    "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
                    "locality": "Sector 3",
                    "areaName": "Rohini",
                    "costForTwo": "₹350 for two",
                    "cuisines": [
                      "Salads",
                      "Snacks",
                      "Desserts",
                      "Beverages"
                    ],
                    "avgRating": 4.1,
                    "parentId": "2",
                    "avgRatingString": "4.1",
                    "totalRatingsString": "10K+",
                    "sla": {
                      "deliveryTime": 25,
                      "lastMileTravel": 2,
                      "serviceability": "SERVICEABLE",
                      "slaString": "25 mins",
                      "lastMileTravelString": "2.0 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2024-01-24 04:00:00",
                      "opened": true
                    },
                    "badges": {
                      "textExtendedBadges": [
                        {
                          "iconId": "guiltfree/GF_Logo_android_3x",
                          "shortDescription": "options available",
                          "fontColor": "#7E808C"
                        }
                      ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          "badgeObject": [
                            {
                              "attributes": {
                                "description": "",
                                "fontColor": "#7E808C",
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "options available"
                              }
                            }
                          ]
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "₹120 OFF",
                      "subHeader": "ABOVE ₹199",
                      "discountTag": "FLAT DEAL"
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    }
                  },
                  "analytics": {
                    
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/restaurants/subway-sector-3-rohini-delhi-10392",
                    "type": "WEBLINK"
                  }
                },
                {
                  "info": {
                    "id": "355895",
                    "name": "Chaayos Chai+Snacks=Relax",
                    "cloudinaryImageId": "cace805a6ba74137571d0f7ac92302b1",
                    "locality": "ARSS Mall",
                    "areaName": "Paschim Vihar",
                    "costForTwo": "₹250 for two",
                    "cuisines": [
                      "Bakery",
                      "Beverages",
                      "Chaat",
                      "Desserts",
                      "Home Food",
                      "Italian",
                      "Maharashtrian",
                      "Snacks",
                      "Street Food",
                      "Sweets"
                    ],
                    "avgRating": 4.4,
                    "parentId": "281782",
                    "avgRatingString": "4.4",
                    "totalRatingsString": "1K+",
                    "sla": {
                      "deliveryTime": 33,
                      "lastMileTravel": 5.5,
                      "serviceability": "SERVICEABLE",
                      "slaString": "33 mins",
                      "lastMileTravelString": "5.5 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2024-01-24 01:00:00",
                      "opened": true
                    },
                    "badges": {
                      "textExtendedBadges": [
                        {
                          "iconId": "guiltfree/GF_Logo_android_3x",
                          "shortDescription": "options available",
                          "fontColor": "#7E808C"
                        }
                      ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          "badgeObject": [
                            {
                              "attributes": {
                                "description": "",
                                "fontColor": "#7E808C",
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "options available"
                              }
                            }
                          ]
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "₹120 OFF",
                      "subHeader": "ABOVE ₹199",
                      "discountTag": "FLAT DEAL"
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    }
                  },
                  "analytics": {
                    
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-arss-mall-paschim-vihar-delhi-355895",
                    "type": "WEBLINK"
                  }
                },
                {
                  "info": {
                    "id": "15846",
                    "name": "Faasos - Wraps, Rolls & Shawarma",
                    "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
                    "locality": "Sector 8",
                    "areaName": "Rohini",
                    "costForTwo": "₹200 for two",
                    "cuisines": [
                      "Kebabs",
                      "Fast Food",
                      "Snacks",
                      "American",
                      "Healthy Food",
                      "Desserts",
                      "Beverages"
                    ],
                    "avgRating": 4.2,
                    "parentId": "21809",
                    "avgRatingString": "4.2",
                    "totalRatingsString": "10K+",
                    "sla": {
                      "deliveryTime": 26,
                      "lastMileTravel": 2.7,
                      "serviceability": "SERVICEABLE",
                      "slaString": "26 mins",
                      "lastMileTravelString": "2.7 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2024-01-23 23:59:00",
                      "opened": true
                    },
                    "badges": {
                      "textExtendedBadges": [
                        {
                          "iconId": "guiltfree/GF_Logo_android_3x",
                          "shortDescription": "options available",
                          "fontColor": "#7E808C"
                        }
                      ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          "badgeObject": [
                            {
                              "attributes": {
                                "description": "",
                                "fontColor": "#7E808C",
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "options available"
                              }
                            }
                          ]
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "₹120 OFF",
                      "subHeader": "ABOVE ₹199",
                      "discountTag": "FLAT DEAL"
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    }
                  },
                  "analytics": {
                    
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/restaurants/faasos-wraps-rolls-and-shawarma-sector-8-rohini-delhi-15846",
                    "type": "WEBLINK"
                  }
                },
                {
                  "info": {
                    "id": "13103",
                    "name": "Berco's -If You Love Chinese",
                    "cloudinaryImageId": "3344b8e498281fdcd461dc1b5f3b44d5",
                    "locality": "Rohini",
                    "areaName": "Rohini",
                    "costForTwo": "₹600 for two",
                    "cuisines": [
                      "Asian",
                      "Thai",
                      "Chinese",
                      "Seafood",
                      "Desserts",
                      "Beverages"
                    ],
                    "avgRating": 4.3,
                    "parentId": "471817",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "5K+",
                    "sla": {
                      "deliveryTime": 27,
                      "lastMileTravel": 2.8,
                      "serviceability": "SERVICEABLE",
                      "slaString": "27 mins",
                      "lastMileTravelString": "2.8 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2024-01-23 23:59:00",
                      "opened": true
                    },
                    "badges": {
                      "imageBadges": [
                        {
                          "imageId": "newg.png",
                          "description": "Gourmet"
                        }
                      ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          "badgeObject": [
                            {
                              "attributes": {
                                "description": "Gourmet",
                                "imageId": "newg.png"
                              }
                            }
                          ]
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "₹120 OFF",
                      "subHeader": "ABOVE ₹199",
                      "discountTag": "FLAT DEAL"
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    }
                  },
                  "analytics": {
                    
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/restaurants/bercos-if-you-love-chinese-rohini-delhi-13103",
                    "type": "WEBLINK"
                  }
                },
              
                ],
}

export default Body;