import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
    UilUsdSquare,
    UilMoneyWithdrawal

  } from "@iconscout/react-unicons";


  import img1 from "../img/img1.png"
  import img2 from "../img/img2.png"
  import img3 from "../img/img3.png"
  export const SidebarData=[
    {
        icon: UilEstate,
        heading: "Dashbaord"
    },
    {
        icon: UilClipboardAlt,
        heading: "Orders"
    },
    {
        icon: UilUsersAlt,
        heading: "Customers"
    },
    {
        icon: UilPackage,
        heading: "Products"
    },
    {
        icon: UilChart,
        heading: "Analytics"
    },
  ]



  export const CardsData=[
    {
        title: "Sales",
        color: {
            boxShadow: "0 10px 20px 0 #e0c6f5",
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        },
        barValue: 70,
        value: '25,970',
        png: UilUsdSquare,
        series: [
            {
                name: 'Sales',
                data: [31, 40, 28, 51, 42, 109, 100],
            },
        ],
    },
    {
        title: "Revenue",
        color: {
            boxShadow: "0 10px 20px 0 #e0c6f5",
            backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        },
        barValue: 80,
        value: '14,270',
        png: UilMoneyWithdrawal,
        series: [
            {
                name: "Revenue",
                data: [10, 100, 50, 70, 80, 30, 40],
            },
        ],
    },
    {
        title: "Expenses",
        color: {
            boxShadow: "0 10px 20px 0 #e0c6f5",
            backGround: "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
        },
        barValue: 60,
        value: '4,270',
        png: UilMoneyWithdrawal,
        series: [
            {
                name: "Expenses",
                data: [10, 25, 15, 30, 12, 15, 20],
            },
        ],
    },
]


// Recent updates aand card data

export const UpdatesData = [
    {
        img : img1,
        name : "Andre Thomas",
        noti: "has orders apple smart watch 2500mh battery",
        time: '25 seconds ago',
    },
    {
        img : img2,
        name : "jackie chain",
        noti: "has recieved samsung gadget for carging battery",
        time: '30 minutes ago',
    },
    {
        img : img3,
        name : "iron man",
        noti: "has orders apple smart watch, samsung gear 2500mh battery.",
        time: '2 hours ago',
    },
]