import shortid from "shortid";

// export const categories = {
//   internal: {
//     internal: [
//       {
//         id: shortid.generate(),

//         title: "RL-102",
//         type: "internal",
//         src: img102,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DE-102",
//         type: "internal",
//         src: img1022,
//         category: "internal",
//         price: "€ 60.00",
//         description: {
//           title: "description",
//           size: "/37×37/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RL-103",
//         type: "internal",
//         src: img103,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DE-103A",
//         type: "internal",
//         src: img103a,
//         category: "internal",
//         price: "€ 45.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RL-104",
//         type: "internal",
//         src: img104,
//         category: "internal",
//         price: "€ 35.00",
//         description: {
//           title: "description",
//           size: "/4×2/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RL-106",
//         type: "internal",
//         src: img106,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RL-107",
//         type: "internal",
//         src: img107,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RL-115",
//         type: "internal",
//         src: img115,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RL-116",
//         type: "internal",
//         src: img116,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RL-117",
//         type: "internal",
//         src: img117,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RL-119",
//         type: "internal",
//         src: img119,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RL-120",
//         type: "internal",
//         src: img120,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RL-121",
//         type: "internal",
//         src: img121,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DE-207",
//         type: "internal",
//         src: img207a,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DE-224",
//         type: "internal",
//         src: img224,
//         category: "internal",
//         price: "€ 65.00",
//         description: {
//           title: "description",
//           size: "/40×40/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RL-4002",
//         type: "internal",
//         src: img4002,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RL-113",
//         type: "internal",
//         src: img113,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RL-4025",
//         type: "internal",
//         src: img4025,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DE-233",
//         type: "internal",
//         src: img233a,
//         category: "internal",
//         price: "€ 65.00",
//         description: {
//           title: "description",
//           size: "/37×37/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RL-1008",
//         type: "internal",
//         src: img1008X,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RL-20123",
//         type: "internal",
//         src: img20123,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RL-20132",
//         type: "internal",
//         src: img20132,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RL-3019",
//         type: "internal",
//         src: img3019c,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RL-40221",
//         type: "internal",
//         src: img40221,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "B-2B",
//         type: "internal",
//         src: B2B,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DS-103",
//         type: "internal",
//         src: DS103,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DS-104",
//         type: "internal",
//         src: DS104,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "GS-26",
//         type: "internal",
//         src: GS26,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "I-51",
//         type: "internal",
//         src: I0051,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "I-161",
//         type: "internal",
//         src: I0161,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "K-006",
//         type: "internal",
//         src: K006,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "K-007",
//         type: "internal",
//         src: K007,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "K-10",
//         type: "internal",
//         src: K010,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "K-12",
//         type: "internal",
//         src: K012,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "K-4",
//         type: "internal",
//         src: K004,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "KO-12",
//         type: "internal",
//         src: KO012,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "KO-14",
//         type: "internal",
//         src: KO014,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "KO-17",
//         type: "internal",
//         src: KO017,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "KO-181",
//         type: "internal",
//         src: KO0181,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "KO-18",
//         type: "internal",
//         src: KO018,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "KS-26",
//         type: "internal",
//         src: KS26,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "LA-02",
//         type: "internal",
//         src: LA002,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-23",
//         type: "internal",
//         src: OR023,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-25",
//         type: "internal",
//         src: OR025,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-72",
//         type: "internal",
//         src: OR072,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-76",
//         type: "internal",
//         src: OR076,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-27",
//         type: "internal",
//         src: OR027,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-82",
//         type: "internal",
//         src: OR082,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-87",
//         type: "internal",
//         src: OR087,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-92",
//         type: "internal",
//         src: OR092,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-99",
//         type: "internal",
//         src: OR099,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-101",
//         type: "internal",
//         src: OR101,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-108",
//         type: "internal",
//         src: OR108,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-109",
//         type: "internal",
//         src: OR109,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "P-30",
//         type: "internal",
//         src: P30,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RC-3",
//         type: "internal",
//         src: RC003,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RC-4",
//         type: "internal",
//         src: RC004,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RC-14",
//         type: "internal",
//         src: RC014,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RC-17",
//         type: "internal",
//         src: RC017,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RD-3",
//         type: "internal",
//         src: RD003,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RD-12",
//         type: "internal",
//         src: RD012,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RE-5",
//         type: "internal",
//         src: RE005,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RE-12",
//         type: "internal",
//         src: RE012,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RE-14",
//         type: "internal",
//         src: RE014,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RE-15",
//         type: "internal",
//         src: RE015,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RE-21",
//         type: "internal",
//         src: RE021,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RE-22",
//         type: "internal",
//         src: RE022,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RE-24",
//         type: "internal",
//         src: RE024,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RF-1",
//         type: "internal",
//         src: RF001,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RF-3",
//         type: "internal",
//         src: RF003,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RF-7",
//         type: "internal",
//         src: RF007,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RF-6",
//         type: "internal",
//         src: RF006,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RF-10",
//         type: "internal",
//         src: RF010,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RF-13",
//         type: "internal",
//         src: RF013,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RF-14",
//         type: "internal",
//         src: RF014,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RF-16",
//         type: "internal",
//         src: RF016,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RH-4",
//         type: "internal",
//         src: RH04,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RG-6",
//         type: "internal",
//         src: RG006,
//         category: "internal",
//         price: "€ 260.00",
//         description: {
//           title: "description",
//           size: "/100 ⌀/кг: 31.7",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RG-8",
//         type: "internal",
//         src: RG008,
//         category: "internal",
//         price: "€ 75.00",
//         description: {
//           title: "description",
//           size: "/60 ⌀/кг: 4,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RG-9",
//         type: "internal",
//         src: RG009,
//         category: "internal",
//         price: "€ 95.00",
//         description: {
//           title: "description",
//           size: "/65 ⌀/кг: 7,4",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RG-12",
//         type: "internal",
//         src: RG012,
//         category: "internal",
//         price: "€ 105.00",
//         description: {
//           title: "description",
//           size: "/70 ⌀/кг: 6.7",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "SP-2",
//         type: "internal",
//         src: SP02,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RH-14",
//         type: "internal",
//         src: RH014,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//     ],
//     // pictures: [
//     //   {
//     //     id: shortid.generate(),

//     //     title: "B-2",
//     //     type: "pictures",
//     //     src: B02,
//     //     category: "internal",
//     //     price: "€ 0.00",
//     //     description: {
//     //       title: "description",
//     //       size: "/28×28/kg: 0,5",
//     //       connect: " RL 103",
//     //       price: "Цена за единицу:",
//     //     },
//     //   },
//     //   {
//     //     id: shortid.generate(),

//     //     title: "B-4",
//     //     type: "pictures",
//     //     src: B04,
//     //     category: "internal",
//     //     price: "€ 0.00",
//     //     description: {
//     //       title: "description",
//     //       size: "/28×28/kg: 0,5",
//     //       connect: " RL 103",
//     //       price: "Цена за единицу:",
//     //     },
//     //   },
//     //   {
//     //     id: shortid.generate(),

//     //     title: "B-5",
//     //     type: "pictures",
//     //     src: B05,
//     //     category: "internal",
//     //     price: "€ 0.00",
//     //     description: {
//     //       title: "description",
//     //       size: "/28×28/kg: 0,5",
//     //       connect: " RL 103",
//     //       price: "Цена за единицу:",
//     //     },
//     //   },
//     //   {
//     //     id: shortid.generate(),

//     //     title: "B-11",
//     //     type: "pictures",
//     //     src: B11,
//     //     category: "internal",
//     //     price: "€ 0.00",
//     //     description: {
//     //       title: "description",
//     //       size: "/28×28/kg: 0,5",
//     //       connect: " RL 103",
//     //       price: "Цена за единицу:",
//     //     },
//     //   },
//     //   {
//     //     id: shortid.generate(),

//     //     title: "B-20",
//     //     type: "pictures",
//     //     src: B20,
//     //     category: "internal",
//     //     price: "€ 0.00",
//     //     description: {
//     //       title: "description",
//     //       size: "/28×28/kg: 0,5",
//     //       connect: " RL 103",
//     //       price: "Цена за единицу:",
//     //     },
//     //   },
//     //   {
//     //     id: shortid.generate(),

//     //     title: "B-23",
//     //     type: "pictures",
//     //     src: B23,
//     //     category: "internal",
//     //     price: "€ 0.00",
//     //     description: {
//     //       title: "description",
//     //       size: "/28×28/kg: 0,5",
//     //       connect: " RL 103",
//     //       price: "Цена за единицу:",
//     //     },
//     //   },
//     //   {
//     //     id: shortid.generate(),

//     //     title: "B-25",
//     //     type: "pictures",
//     //     src: B25,
//     //     category: "internal",
//     //     price: "€ 0.00",
//     //     description: {
//     //       title: "description",
//     //       size: "/28×28/kg: 0,5",
//     //       connect: " RL 103",
//     //       price: "Цена за единицу:",
//     //     },
//     //   },
//     //   {
//     //     id: shortid.generate(),

//     //     title: "B-27",
//     //     type: "pictures",
//     //     src: B27,
//     //     category: "internal",
//     //     price: "€ 0.00",
//     //     description: {
//     //       title: "description",
//     //       size: "/28×28/kg: 0,5",
//     //       connect: " RL 103",
//     //       price: "Цена за единицу:",
//     //     },
//     //   },
//     //   {
//     //     id: shortid.generate(),

//     //     title: "B-28",
//     //     type: "pictures",
//     //     src: B28,
//     //     category: "internal",
//     //     price: "€ 0.00",
//     //     description: {
//     //       title: "description",
//     //       size: "/28×28/kg: 0,5",
//     //       connect: " RL 103",
//     //       price: "Цена за единицу:",
//     //     },
//     //   },
//     //   {
//     //     id: shortid.generate(),

//     //     title: "B-29",
//     //     type: "pictures",
//     //     src: B29,
//     //     category: "internal",
//     //     price: "€ 0.00",
//     //     description: {
//     //       title: "description",
//     //       size: "/28×28/kg: 0,5",
//     //       connect: " RL 103",
//     //       price: "Цена за единицу:",
//     //     },
//     //   },
//     // ],
//     ceilingAndWallMoldings: [
//       // {
//       //   id: shortid.generate(),

//       //   title: "DWL-4025",
//       //   type: "ceiling and wall moldings",
//       //   src: img4025,
//       //   category: "internal",
//       //   price: "€ 0.00",
//       //   description: {
//       //     title: "description",
//       //     size: "/28×28/kg: 0,5",
//       //     connect: " RL 103",
//       //     price: "Цена за единицу:",
//       //   },
//       // },
//       // {
//       //   id: shortid.generate(),

//       //   title: "DWL-4002",
//       //   type: "ceiling and wall moldings",
//       //   src: img4002,
//       //   category: "internal",
//       //   price: "€ 0.00",
//       //   description: {
//       //     title: "description",
//       //     size: "/28×28/kg: 0,5",
//       //     connect: " RL 103",
//       //     price: "Цена за единицу:",
//       //   },
//       // },
//       {
//         id: shortid.generate(),

//         title: "DWL-3019",
//         type: "ceiling and wall moldings",
//         src: img3019c,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-3018",
//         type: "ceiling and wall moldings",
//         src: img3018,
//         category: "internal",
//         price: "€ 70.00 / Meter",
//         description: {
//           title: "description",
//           size: "/18×18/кг: 8,1",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-3017",
//         type: "ceiling and wall moldings",
//         src: img3017,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-3015",
//         type: "ceiling and wall moldings",
//         src: img3015b,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-3014",
//         type: "ceiling and wall moldings",
//         src: img3014h,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-1008",
//         type: "ceiling and wall moldings",
//         src: img1008X,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },

//       {
//         id: shortid.generate(),

//         title: "DWL-1001",
//         type: "ceiling and wall moldings",
//         src: img1001,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-1002",
//         type: "ceiling and wall moldings",
//         src: img1002,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-1004",
//         type: "ceiling and wall moldings",
//         src: img1004,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-1004а",
//         type: "ceiling and wall moldings",
//         src: img1004a,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-1005",
//         type: "ceiling and wall moldings",
//         src: img1005,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       // {
//       //   id: shortid.generate(),

//       //   title: "DWL-1006",
//       //   type: "ceiling and wall moldings",
//       //   src: img1006,
//       //   category: "internal",
//       //   price: "€ 0.00",
//       //   description: {
//       //     title: "description",
//       //     size: "/28×28/kg: 0,5",
//       //     connect: " RL 103",
//       //     price: "Цена за единицу:",
//       //   },
//       // },
//       {
//         id: shortid.generate(),

//         title: "DWL-1006а",
//         type: "ceiling and wall moldings",
//         src: img1006a,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-1007",
//         type: "ceiling and wall moldings",
//         src: img1007,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-1008",
//         type: "ceiling and wall moldings",
//         src: img1008,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-3013",
//         type: "ceiling and wall moldings",
//         src: img3013b,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-1008",
//         type: "ceiling and wall moldings",
//         src: img1008xa,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-1011",
//         type: "ceiling and wall moldings",
//         src: img1011,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-2002",
//         type: "ceiling and wall moldings",
//         src: img2002,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-2008",
//         type: "ceiling and wall moldings",
//         src: img2008,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-2014",
//         type: "ceiling and wall moldings",
//         src: img2014,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-2015",
//         type: "ceiling and wall moldings",
//         src: img2015,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-2016",
//         type: "ceiling and wall moldings",
//         src: img2016,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-2017",
//         type: "ceiling and wall moldings",
//         src: img2017,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-2019",
//         type: "ceiling and wall moldings",
//         src: img2019,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-2020",
//         type: "ceiling and wall moldings",
//         src: img2020,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-2021",
//         type: "ceiling and wall moldings",
//         src: img2021,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-2022",
//         type: "ceiling and wall moldings",
//         src: img2022,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-2023",
//         type: "ceiling and wall moldings",
//         src: img2023,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-2024",
//         type: "ceiling and wall moldings",
//         src: img2024,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-2026",
//         type: "ceiling and wall moldings",
//         src: img2026,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-2027",
//         type: "ceiling and wall moldings",
//         src: img2027,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-2028",
//         type: "ceiling and wall moldings",
//         src: img2028,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-2029",
//         type: "ceiling and wall moldings",
//         src: img2029,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-2030",
//         type: "ceiling and wall moldings",
//         src: img2030,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-2031",
//         type: "ceiling and wall moldings",
//         src: img2031,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-3001А",
//         type: "ceiling and wall moldings",
//         src: img3001a,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-3002",
//         type: "ceiling and wall moldings",
//         src: img3002,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-3002А",
//         type: "ceiling and wall moldings",
//         src: img3002a,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-3004",
//         type: "ceiling and wall moldings",
//         src: img3004,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-3005",
//         type: "ceiling and wall moldings",
//         src: img3005,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-3006",
//         type: "ceiling and wall moldings",
//         src: img3006,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-3007",
//         type: "ceiling and wall moldings",
//         src: img3007,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },

//       {
//         id: shortid.generate(),

//         title: "DWL-3010",
//         type: "ceiling and wall moldings",
//         src: img3010,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-3011",
//         type: "ceiling and wall moldings",
//         src: img3011,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-3012А",
//         type: "ceiling and wall moldings",
//         src: img3012a,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-4001",
//         type: "ceiling and wall moldings",
//         src: img4001,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-4004А",
//         type: "ceiling and wall moldings",
//         src: img4004a,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-4005",
//         type: "ceiling and wall moldings",
//         src: img4005,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-4006А",
//         type: "ceiling and wall moldings",
//         src: img4006a,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-4007",
//         type: "ceiling and wall moldings",
//         src: img4007,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-4008",
//         type: "ceiling and wall moldings",
//         src: img4008,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-4012А",
//         type: "ceiling and wall moldings",
//         src: img4012a,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-4014",
//         type: "ceiling and wall moldings",
//         src: img4014,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-4015",
//         type: "ceiling and wall moldings",
//         src: img4015,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-4016",
//         type: "ceiling and wall moldings",
//         src: img4016,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-4017",
//         type: "ceiling and wall moldings",
//         src: img4017,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-4018",
//         type: "ceiling and wall moldings",
//         src: img4018,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-4020",
//         type: "ceiling and wall moldings",
//         src: img4020,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-4021",
//         type: "ceiling and wall moldings",
//         src: img4021,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DWL-4024",
//         type: "ceiling and wall moldings",
//         src: img4024,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//     ],
//     ceilingMirror: [
//       {
//         id: shortid.generate(),

//         title: "DS-104",
//         type: "ceiling mirror",
//         src: DS104,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DS-103",
//         type: "ceiling mirror",
//         src: DS103,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DS-101",
//         type: "ceiling mirror",
//         src: DS101,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DS-101a",
//         type: "ceiling mirror",
//         src: DS101a,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DS-102",
//         type: "ceiling mirror",
//         src: DS102,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DS-102A",
//         type: "ceiling mirror",
//         src: DS102a,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DS-102A",
//         type: "ceiling mirror",
//         src: DS102b,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DS-102C",
//         type: "ceiling mirror",
//         src: DS102c,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DS-102B",
//         type: "ceiling mirror",
//         src: DS102d,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DS-103A",
//         type: "ceiling mirror",
//         src: DS103a,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//     ],
//     decorativeCorners: [
//       {
//         id: shortid.generate(),

//         title: "DE-224",
//         type: "decorative corners",
//         src: img224,
//         category: "internal",
//         price: "€ 65.00",
//         description: {
//           title: "description",
//           size: "/40×40/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DE-207A",
//         type: "decorative corners",
//         src: img207a,
//         category: "internal",
//         price: "€ 60.00",
//         description: {
//           title: "description",
//           size: "/40×33/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },

//       {
//         id: shortid.generate(),

//         title: "DE-103A",
//         type: "decorative corners",
//         src: img103a,
//         category: "internal",
//         price: "€ 45.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DE-102",
//         type: "decorative corners",
//         src: img1022,
//         category: "internal",
//         price: "€ 60.00",
//         description: {
//           title: "description",
//           size: "/37×37/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DE-233A",
//         type: "decorative corners",
//         src: img233a,
//         category: "internal",
//         price: "€ 65.00",
//         description: {
//           title: "description",
//           size: "/37×37/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DE-233",
//         type: "decorative corners",
//         src: img233,
//         category: "internal",
//         price: "€ 75.00",
//         description: {
//           title: "description",
//           size: "/45×45/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DE-227A",
//         type: "decorative corners",
//         src: img227a,
//         category: "internal",
//         price: "€ 65.00",
//         description: {
//           title: "description",
//           size: "/32×38/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DE-227",
//         type: "decorative corners",
//         src: img227,
//         category: "internal",
//         price: "€ 75.00",
//         description: {
//           title: "description",
//           size: "/41.5×41.5/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DE-205A",
//         type: "decorative corners",
//         src: img205a,
//         category: "internal",
//         price: "€ 45.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DE-205",
//         type: "decorative corners",
//         src: img205,
//         category: "internal",
//         price: "€ 45.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DE-204",
//         type: "decorative corners",
//         src: img204,
//         category: "internal",
//         price: "€ 65.00",
//         description: {
//           title: "description",
//           size: "/38×38/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DE-101",
//         type: "decorative corners",
//         src: img101,
//         category: "internal",
//         price: "€ 65.00",
//         description: {
//           title: "description",
//           size: "/37×37/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DE-101A",
//         type: "decorative corners",
//         src: img101a,
//         category: "internal",
//         price: "€ 55.00",
//         description: {
//           title: "description",
//           size: "/32×32/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DE-104A",
//         type: "decorative corners",
//         src: img104a,
//         category: "internal",
//         price: "€ 45.00",
//         description: {
//           title: "description",
//           size: "/23×23/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DE-105",
//         type: "decorative corners",
//         src: img105,
//         category: "internal",
//         price: "€ 45.00",
//         description: {
//           title: "description",
//           size: "/21×21/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DE-108",
//         type: "decorative corners",
//         src: img108,
//         category: "internal",
//         price: "€ 65.00",
//         description: {
//           title: "description",
//           size: "/37×37/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DE-110",
//         type: "decorative corners",
//         src: img110,
//         category: "internal",
//         price: "€ 65.00",
//         description: {
//           title: "description",
//           size: "/34×34/кг: 0,9",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DE-112",
//         type: "decorative corners",
//         src: img112,
//         category: "internal",
//         price: "€ 65.00",
//         description: {
//           title: "description",
//           size: "/36×36/кг: 1",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DE-116A",
//         type: "decorative corners",
//         src: img116a,
//         category: "internal",
//         price: "€ 65.00",
//         description: {
//           title: "description",
//           size: "/34×34/кг: 0,9",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DE-201",
//         type: "decorative corners",
//         src: img201,
//         category: "internal",
//         price: "€ 65.00",
//         description: {
//           title: "description",
//           size: "/37×37/кг: 0,2",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "DE-203",
//         type: "decorative corners",
//         src: img203,
//         category: "internal",
//         price: "€ 65.00",
//         description: {
//           title: "description",
//           size: "/37×37/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//     ],
//     indirectLightStrips: [
//       {
//         id: shortid.generate(),

//         title: "IO-161",
//         type: "Indirect light strips",
//         src: I0161,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "IO-51",
//         type: "Indirect light strips",
//         src: I0051,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "IO-1A",
//         type: "Indirect light strips",
//         src: I001A,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "IO-1AB",
//         type: "Indirect light strips",
//         src: I001AB,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "IO-1B",
//         type: "Indirect light strips",
//         src: I001B,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "IO-2",
//         type: "Indirect light strips",
//         src: I002,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "IO-3A",
//         type: "Indirect light strips",
//         src: I003A,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "IO-3AB",
//         type: "Indirect light strips",
//         src: I003AB,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "IO-3B",
//         type: "Indirect light strips",
//         src: I003B,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "IO-4",
//         type: "Indirect light strips",
//         src: I004,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "IO-6",
//         type: "Indirect light strips",
//         src: I006,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "IO-7",
//         type: "Indirect light strips",
//         src: I007,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "IO-8",
//         type: "Indirect light strips",
//         src: I008,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "IO-9",
//         type: "Indirect light strips",
//         src: I009,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "IO-10",
//         type: "Indirect light strips",
//         src: I010,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "IO-11A",
//         type: "Indirect light strips",
//         src: I011A,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "IO-11AB",
//         type: "Indirect light strips",
//         src: I011AB,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "IO-12A",
//         type: "Indirect light strips",
//         src: I012A,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "IO-12AB",
//         type: "Indirect light strips",
//         src: I012AB,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "IO-12B",
//         type: "Indirect light strips",
//         src: I012B,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "IO-13A",
//         type: "Indirect light strips",
//         src: I013A,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "IO-13AB",
//         type: "Indirect light strips",
//         src: I013AB,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "IO-13B",
//         type: "Indirect light strips",
//         src: I013B,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "IO-14A",
//         type: "Indirect light strips",
//         src: I014A,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "IO-14AB",
//         type: "Indirect light strips",
//         src: I014AB,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "IO-14B",
//         type: "Indirect light strips",
//         src: I014B,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "IO-15A",
//         type: "Indirect light strips",
//         src: I015A,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "IO-15AB",
//         type: "Indirect light strips",
//         src: I015AB,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "IO-15B",
//         type: "Indirect light strips",
//         src: I015B,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//     ],
//     cassettes: [
//       {
//         id: shortid.generate(),

//         title: "K-006",
//         type: "cassettes",
//         src: K006,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "K-007",
//         type: "cassettes",
//         src: K007,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "K-10",
//         type: "internal",
//         src: K010,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "K-12",
//         type: "cassettes",
//         src: K012,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "K-1",
//         type: "cassettes",
//         src: K01,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "K-4",
//         type: "cassettes",
//         src: K04,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "K-5",
//         type: "cassettes",
//         src: K05,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "K-8",
//         type: "cassettes",
//         src: K08,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "K-13",
//         type: "cassettes",
//         src: K013,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//     ],
//     consoles: [
//       {
//         id: shortid.generate(),

//         title: "K-4",
//         type: "consoles",
//         src: K004,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "KO-12",
//         type: "consoles",
//         src: KO012,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "KO-14",
//         type: "consoles",
//         src: KO014,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "KO-17",
//         type: "consoles",
//         src: KO017,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "KO-181",
//         type: "consoles",
//         src: KO0181,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "KO-18",
//         type: "consoles",
//         src: KO018,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "KO-19",
//         type: "consoles",
//         src: KO019,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "KO-20",
//         type: "consoles",
//         src: KO020,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "KO-3",
//         type: "consoles",
//         src: KO03,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "KO-2",
//         type: "consoles",
//         src: KO02,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "KO-5",
//         type: "consoles",
//         src: KO05,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "KO-6",
//         type: "consoles",
//         src: KO06,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "KO-7",
//         type: "consoles",
//         src: KO07,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "KO-8",
//         type: "consoles",
//         src: KO08,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "KO-9",
//         type: "consoles",
//         src: KO09,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "KO-10",
//         type: "consoles",
//         src: KO010,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "KO-11",
//         type: "consoles",
//         src: KO011,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "KO-13",
//         type: "consoles",
//         src: KO013,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//     ],
//     lamps: [
//       {
//         id: shortid.generate(),

//         title: "LA-2",
//         type: "lamps",
//         src: LA002,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "LA-1",
//         type: "lamps",
//         src: LA001,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "LA-4",
//         type: "lamps",
//         src: LA004,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "LA-5",
//         type: "lamps",
//         src: LA005,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "LA-6",
//         type: "lamps",
//         src: LA006,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "LA-7",
//         type: "lamps",
//         src: LA007,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "LA-8",
//         type: "lamps",
//         src: LA008,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//     ],
//     ornaments: [
//       {
//         id: shortid.generate(),

//         title: "LA-7",
//         type: "ornaments",
//         src: LA007,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-23",
//         type: "ornaments",
//         src: OR023,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-25",
//         type: "ornaments",
//         src: OR025,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-72",
//         type: "ornaments",
//         src: OR072,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-76",
//         type: "ornaments",
//         src: OR076,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-27",
//         type: "ornaments",
//         src: OR027,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-82",
//         type: "ornaments",
//         src: OR082,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-87",
//         type: "ornaments",
//         src: OR087,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-92",
//         type: "ornaments",
//         src: OR092,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-99",
//         type: "ornaments",
//         src: OR099,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-101",
//         type: "ornaments",
//         src: OR101,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-108",
//         type: "ornaments",
//         src: OR108,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-109",
//         type: "ornaments",
//         src: OR109,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-29",
//         type: "ornaments",
//         src: OR029,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-34",
//         type: "ornaments",
//         src: OR034,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-41",
//         type: "ornaments",
//         src: OR041,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-48",
//         type: "ornaments",
//         src: OR048,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-50",
//         type: "ornaments",
//         src: OR050,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-53",
//         type: "ornaments",
//         src: OR053,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-54",
//         type: "ornaments",
//         src: OR054,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-55",
//         type: "ornaments",
//         src: OR055,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-59",
//         type: "ornaments",
//         src: OR059,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-60",
//         type: "ornaments",
//         src: OR060,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-64",
//         type: "ornaments",
//         src: OR064,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-70",
//         type: "ornaments",
//         src: OR070,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-81",
//         type: "ornaments",
//         src: OR081,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },

//       {
//         id: shortid.generate(),

//         title: "OR-86",
//         type: "ornaments",
//         src: OR086,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-88",
//         type: "ornaments",
//         src: OR088,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-89",
//         type: "ornaments",
//         src: OR089,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-90",
//         type: "ornaments",
//         src: OR090,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-91",
//         type: "ornaments",
//         src: OR091,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-93",
//         type: "ornaments",
//         src: OR093,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-97",
//         type: "ornaments",
//         src: OR097,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-98",
//         type: "ornaments",
//         src: OR098,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-100",
//         type: "ornaments",
//         src: OR100,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-104",
//         type: "ornaments",
//         src: OR104,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-105",
//         type: "ornaments",
//         src: OR105,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-107",
//         type: "ornaments",
//         src: OR107,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-110",
//         type: "ornaments",
//         src: OR110,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-111",
//         type: "ornaments",
//         src: OR111,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-112",
//         type: "ornaments",
//         src: OR112,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-114",
//         type: "ornaments",
//         src: OR114,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "OR-115",
//         type: "ornaments",
//         src: OR115,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//     ],
//     pilaster: [
//       {
//         id: shortid.generate(),

//         title: "PB-8",
//         type: "pilaster",
//         src: PB8,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "PB-16",
//         type: "pilaster",
//         src: PB16,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "PB-20",
//         type: "pilaster",
//         src: PB20,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "PB-30",
//         type: "pilaster",
//         src: PB30,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "PK-8",
//         type: "pilaster",
//         src: PK8B,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "PK-12",
//         type: "pilaster",
//         src: PK12,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "PK-16",
//         type: "pilaster",
//         src: PK16,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "PK-20",
//         type: "pilaster",
//         src: PK20,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "PK-30",
//         type: "pilaster",
//         src: PK30A,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "PK-30",
//         type: "pilaster",
//         src: PK30B,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "P-18",
//         type: "pilaster",
//         src: P18,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//     ],
//     frameMoldings: [
//       {
//         id: shortid.generate(),

//         title: "RL-104",
//         type: "frame moldings",
//         src: img104,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RL-120",
//         type: "frame moldings",
//         src: img120,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RL-119",
//         type: "frame moldings",
//         src: img119,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RL-118",
//         type: "frame moldings",
//         src: img118,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RL-116",
//         type: "frame moldings",
//         src: img116A,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RL-113",
//         type: "frame moldings",
//         src: img113,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RL-107",
//         type: "frame moldings",
//         src: img107,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RL-106",
//         type: "frame moldings",
//         src: img106,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RL-102",
//         type: "frame moldings",
//         src: img102,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RL-101",
//         type: "frame moldings",
//         src: img101A,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RL-104",
//         type: "frame moldings",
//         src: img104A,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RL-109",
//         type: "frame moldings",
//         src: img109A,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RL-111",
//         type: "frame moldings",
//         src: img111A,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RL-112",
//         type: "frame moldings",
//         src: img112A,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RL-114",
//         type: "frame moldings",
//         src: img114A,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RL-116",
//         type: "frame moldings",
//         src: img1161,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RL-118",
//         type: "frame moldings",
//         src: img118A,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RL-121",
//         type: "frame moldings",
//         src: img121A,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RL-141",
//         type: "frame moldings",
//         src: img1141,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//     ],
//     rosettes: [
//       {
//         id: shortid.generate(),

//         title: "RL-104",
//         type: "rosettes",
//         src: img104,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RH-4",
//         type: "rosettes",
//         src: RH04,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RG-6",
//         type: "rosettes",
//         src: RG006,
//         category: "internal",
//         price: "€ 260.00",
//         description: {
//           title: "description",
//           size: "/100 ⌀/кг: 31.7",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RG-14",
//         type: "rosettes",
//         src: RG006,
//         category: "internal",
//         price: "€ 40.00",
//         description: {
//           title: "description",
//           size: "/35  ⌀/кг: 2.5 - 4.0 ",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RG-8",
//         type: "rosettes",
//         src: RG008,
//         category: "internal",
//         price: "€ 75.00",
//         description: {
//           title: "description",
//           size: "/60 ⌀/кг: 4,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RG-9",
//         type: "rosettes",
//         src: RG009,
//         category: "internal",
//         price: "€ 95.00",
//         description: {
//           title: "description",
//           size: "/65 ⌀/кг: 7,4",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RG-12",
//         type: "rosettes",
//         src: RG012,
//         category: "internal",
//         price: "€ 105.00",
//         description: {
//           title: "description",
//           size: "/70 ⌀/кг: 6.7",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RG-13",
//         type: "rosettes",
//         src: RG012,
//         category: "internal",
//         price: "€ 55.00",
//         description: {
//           title: "description",
//           size: "/50 ⌀/кг: 4.0",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RC-3",
//         type: "rosettes",
//         src: RC003,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RC-4",
//         type: "rosettes",
//         src: RC004,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RC-14",
//         type: "rosettes",
//         src: RC014,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RC-17",
//         type: "rosettes",
//         src: RC017,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RE-5",
//         type: "rosettes",
//         src: RE005,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RE-12",
//         type: "rosettes",
//         src: RE012,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RE-14",
//         type: "rosettes",
//         src: RE014,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RE-15",
//         type: "rosettes",
//         src: RE015,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RE-21",
//         type: "rosettes",
//         src: RE021,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RE-22",
//         type: "rosettes",
//         src: RE022,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RE-24",
//         type: "rosettes",
//         src: RE024,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RD-3",
//         type: "rosettes",
//         src: RD003,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RD-12",
//         type: "rosettes",
//         src: RD012,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RF-1",
//         type: "rosettes",
//         src: RF001,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RF-3",
//         type: "rosettes",
//         src: RF003,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RF-7",
//         type: "rosettes",
//         src: RF007,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RF-6",
//         type: "rosettes",
//         src: RF006,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RF-10",
//         type: "rosettes",
//         src: RF010,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RF-13",
//         type: "rosettes",
//         src: RF013,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RF-14",
//         type: "rosettes",
//         src: RF014,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RF-16",
//         type: "rosettes",
//         src: RF016,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RF-17",
//         type: "rosettes",
//         src: RF017,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RF-5",
//         type: "rosettes",
//         src: RF005,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RF-11",
//         type: "rosettes",
//         src: RF011,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RF-7",
//         type: "rosettes",
//         src: RH07,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RF-9",
//         type: "rosettes",
//         src: RH09,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RF-10",
//         type: "rosettes",
//         src: RH10,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RF-16",
//         type: "rosettes",
//         src: RH016,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RH-17",
//         type: "rosettes",
//         src: RH017,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RH-18",
//         type: "rosettes",
//         src: RH018,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RH-19",
//         type: "rosettes",
//         src: RH019,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RH-20",
//         type: "rosettes",
//         src: RH020,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RG-4",
//         type: "rosettes",
//         src: RG004,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RG-7",
//         type: "rosettes",
//         src: RG007,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "RG-10",
//         type: "rosettes",
//         src: RG010,
//         category: "internal",
//         price: "€ 90.00",
//         description: {
//           title: "description",
//           size: "/65 ⌀/кг: 5,3",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//     ],
//     supraport: [
//       {
//         id: shortid.generate(),

//         title: "SP-1",
//         type: "supraport",
//         src: SP01,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "SP-3",
//         type: "supraport",
//         src: SP03,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "SP-4",
//         type: "supraport",
//         src: SP04,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "SP-5",
//         type: "supraport",
//         src: SP05,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "SP-6",
//         type: "supraport",
//         src: SP06,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "SP-7",
//         type: "supraport",
//         src: SP07,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//       {
//         id: shortid.generate(),

//         title: "SP-2",
//         type: "supraport",
//         src: SP02,
//         category: "internal",
//         price: "€ 0.00",
//         description: {
//           title: "description",
//           size: "/28×28/kg: 0,5",
//           connect: " RL 103",
//           price: "Цена за единицу:",
//         },
//       },
//     ],
//   },
// };
