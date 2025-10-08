const plants = [
  // 🌿 Aromatic Plants - Total 10 (Angles 18° apart, starting at 0°)
  {
    id: "chamomile",
    name: "Chamomile",
    category: "Aromatic Plant",
    uses: ["Reduces stress", "Promotes sleep", "Anti-inflammatory", "Soothes skin"],
    image: "/assets/Images/Aromatic/chamomile.jpg",
    model: "/assets/3D models/Aromatic plants/chamomile.glb",
    description: "Chamomile is a fragrant herb used in teas and oils for calming and anti-inflammatory effects.",
    Longdescription: "Chamomile is one of the oldest and most beloved medicinal herbs known to humankind, often referred to as the “doctor of plants.” This gentle yet powerful flowering herb has been used for thousands of years in traditional medicine systems such as Ayurveda and ancient Greek, Roman, and Egyptian practices. Its daisy-like flowers, with their bright yellow centers and delicate white petals, carry a sweet, apple-like fragrance that instantly soothes the senses.",
    scientificName: "Matricaria chamomilla",
    audio: "/audio/chamomile.mp3",
    about: "Chamomile is a gentle, aromatic herb celebrated worldwide for its calming and healing properties. Belonging to the daisy family (Asteraceae), this plant is native to Europe and Western Asia but now grows in many parts of the world. Its small, white, daisy-like flowers with yellow centers are both beautiful and medicinally powerful.",
    commonUses: [
    "Used to make relaxing herbal tea",
    "Popular in skincare and aromatherapy",
    "Helps soothe stress and improve sleep",
    "Used in herbal remedies for digestion and pain relief"
    ],
    position: [10.0, 0, 0.0] // Angle: 0°
  },
  {
    id: "eucalyptus",
    name: "Blue Gum",
scientificName: "Eucalyptus globulus",
    category: "Aromatic Plant",
    Longdescription: "Eucalyptus is a fast-growing evergreen tree native to Australia, recognized for its long, slender leaves and aromatic properties. Its leaves are rich in essential oils that provide respiratory relief, anti-inflammatory and antiseptic benefits, and soothing effects for both internal and external ailments. Traditionally used by Indigenous Australians for healing, Eucalyptus is now incorporated worldwide in natural remedies, aromatherapy, personal care products, and wellness treatments. The tree can grow to impressive heights and is also valued for timber, paper, and oil extraction. Its refreshing, camphor-like scent helps clear the airways, invigorates the senses, and promotes overall well-being. Eucalyptus is considered a versatile plant for both medicinal and everyday uses, making it a vital component of herbal gardens and home remedies.",
  about: "Eucalyptus is cultivated globally for medicinal purposes, personal care products, aromatherapy, and even timber and paper production. Its refreshing, camphor-like aroma not only helps clear the airways and improve breathing but also invigorates the mind and uplifts mood. The tree can reach impressive heights, making it a visually striking addition to gardens and landscapes. Eucalyptus is not only a symbol of healing and wellness but also an essential plant in herbal gardens, combining beauty, utility, and therapeutic value in one.",
  uses: [
    "Relieves respiratory congestion and coughs",
    "Acts as an anti-inflammatory and antiseptic",
    "Reduces muscle and joint pain",
    "Maintains oral hygiene",
    "Supports the immune system"
  ],
  commonUses: [
    "Used in aromatherapy and massage oils",
    "Included in skincare and haircare products",
    "Used in herbal remedies like teas and ointments",
    "Leaves or oil used as natural air fresheners or insect repellents"
  ],
    image: "/assets/Images/Aromatic/eucalyptus.jpg",
    model: "/assets/3D models/Aromatic plants/eucalyptus.glb",
    description: "Eucalyptus is an aromatic tree used for respiratory health and essential oils.",
    audio: "/audio/eucalyptus.mp3",
    position: [9.51, 0, -3.09] // Angle: 18°
  },
  {
    id: "jasmine",
    name: "Jasmine",
    category: "Aromatic Plant",
    uses: ["Reduces stress", "Enhances mood", "Used in perfumes", "Supports skin"],
    image: "/assets/Images/Aromatic/jasmine.webp",
    model: "/assets/3D models/Aromatic plants/jasmine.glb",
    description: "Jasmine is a fragrant flowering plant used in teas, oils, and perfumes.",
    audio: "/audio/jasmine.mp3",
    position: [8.09, 0, -5.88] // Angle: 36°
  },
  {
    id: "lavender",
    name: "Lavender",
    category: "Aromatic Plant",
    uses: ["Promotes sleep", "Soothes skin", "Reduces headaches", "Insect repellent"],
    image: "/assets/Images/Aromatic/lavender.jpg",
    model: "/assets/3D models/Aromatic plants/lavender.glb",
    description: "Lavender is valued for its calming scent and medicinal properties.",
    audio: "/audio/lavender.mp3",
    position: [5.88, 0, -8.09] // Angle: 54°
  },
  {
    id: "lemongrass",
    name: "Lemongrass",
    category: "Aromatic Plant",
    uses: ["Relieves stress", "Supports digestion", "Insect repellent", "Used in cooking"],
    image: "/assets/Images/Aromatic/lemongrass.png",
    model: "/assets/3D models/Aromatic plants/lemongrass.glb",
    description: "Lemongrass is an aromatic plant used for culinary and medicinal purposes.",
    audio: "/audio/lemongrass.mp3",
    position: [3.09, 0, -9.51] // Angle: 72°
  },
  {
    id: "patchouli",
    name: "Patchouli",
    category: "Aromatic Plant",
    uses: ["Used in perfumes", "Reduces stress", "Heals skin", "Aromatherapy"],
    image: "/assets/Images/Aromatic/patchouli.jpg",
    model: "/assets/3D models/Aromatic plants/patchouli.glb",
    description: "Patchouli is an aromatic herb popular in perfumes and oils.",
    audio: "/audio/patchouli.mp3",
    position: [-0.0, 0, -10.0] // Angle: 90°
  },
  {
    id: "rose",
    name: "Rose",
    category: "Aromatic Plant",
    uses: ["Used in perfumes", "Reduces stress", "Promotes skin health", "Supports digestion"],
    image: "/assets/Images/Aromatic/rose.png",
    model: "/assets/3D models/Aromatic plants/rose.glb",
    description: "Rose is a classic aromatic flower known for fragrance and medicinal properties.",
    audio: "/audio/rose.mp3",
    position: [-3.09, 0, -9.51] // Angle: 108°
  },
  {
    id: "sandalwood",
    name: "Sandalwood",
    category: "Aromatic Plant",
    uses: ["Relieves stress", "Used in perfumes", "Supports skin health", "Anti-inflammatory"],
    image: "/assets/Images/Aromatic/Sandalwood.png",
    model: "/assets/3D models/Aromatic plants/sandalwood.glb",
    description: "Sandalwood is a fragrant wood used in rituals, perfumes, and skincare.",
    audio: "/audio/sandalwood.mp3",
    position: [-5.88, 0, -8.09] // Angle: 126°
  },
  {
    id: "vetiver",
    name: "Vetiver",
    category: "Aromatic Plant",
    uses: ["Reduces stress", "Cooling agent", "Used in perfumes", "Skin care"],
    image: "/assets/Images/Aromatic/Vetiver.webp",
    model: "/assets/3D models/Aromatic plants/vitever.glb",
    description: "Vetiver is a grass with aromatic roots used in perfumes and skincare.",
    audio: "/audio/vetiver.mp3",
    position: [-8.09, 0, -5.88] // Angle: 144°
  },
  {
    id: "ylang-ylang",
    name: "Ylang-Ylang",
    category: "Aromatic Plant",
    uses: ["Reduces anxiety", "Used in perfumes", "Supports heart", "Skin care"],
    image: "/assets/Images/Aromatic/Ylang.jpg",
    model: "/assets/3D models/Aromatic plants/ylang1.glb",
    description: "Ylang-Ylang is a tropical flower with sweet fragrance used in aromatherapy.",
    audio: "/audio/ylang-ylang.mp3",
    position: [-9.51, 0, -3.09] // Angle: 162°
  },

  // 🌿 Ayurvedic Plants - Total 9 (We only need 10 more to reach 20)
  {
    id: "amla",
    name: "Amla",
    category: "Ayurvedic Plant",
    uses: ["Boosts immunity", "Improves digestion", "Supports hair growth", "Rich in vitamin C"],
    image: "/assets/Images/Ayurvedic plants/amla.jpg",
    model: "/assets/3D models/Ayurvedic plants/amla.glb",
    description: "Amla is a potent Ayurvedic fruit rich in antioxidants and vitamins.",
    audio: "/audio/amla.mp3",
    position: [-10.0, 0, -0.0] // Angle: 180°
  },
  {
    id: "arjuna",
    name: "Arjuna",
    category: "Ayurvedic Plant",
    uses: ["Supports heart", "Reduces inflammation", "Aids blood circulation", "Ayurvedic medicine"],
    image: "/assets/Images/Ayurvedic plants/Arjuna.jpeg",
    model: "/assets/3D models/Ayurvedic plants/arjuna.glb",
    description: "Arjuna is an herb traditionally used for cardiovascular health.",
    audio: "/audio/arjuna.mp3",
    position: [-9.51, 0, 3.09] // Angle: 198°
  },
  {
    id: "ashoka",
    name: "Ashoka Tree",
    category: "Ayurvedic Plant",
    uses: ["Supports reproductive health", "Relieves menstrual pain", "Reduces inflammation", "Improves mood"],
    image: "/assets/Images/Ayurvedic plants/Ashokatree.png",
    model: "/assets/3D models/Ayurvedic plants/ashokatree.glb",
    description: "Ashoka is a sacred tree in Ayurveda known for female health benefits.",
    audio: "/audio/ashoka.mp3",
    position: [-8.09, 0, 5.88] // Angle: 216°
  },
  {
    id: "bael",
    name: "Bael",
    category: "Ayurvedic Plant",
    uses: ["Improves digestion", "Supports liver health", "Treats constipation", "Anti-inflammatory"],
    image: "/assets/Images/Ayurvedic plants/Bael.png",
    model: "/assets/3D models/Ayurvedic plants/bael.glb",
    description: "Bael is an Ayurvedic fruit used to support digestive health.",
    audio: "/audio/bael.mp3",
    position: [-5.88, 0, 8.09] // Angle: 234°
  },
  {
    id: "brahmi",
    name: "Brahmi",
    category: "Ayurvedic Plant",
    uses: ["Improves memory", "Reduces stress", "Supports brain health", "Anti-inflammatory"],
    image: "/assets/Images/Ayurvedic plants/Brahmi.jpeg",
    model: "/assets/3D models/Ayurvedic plants/brahmi.glb",
    description: "Brahmi is an Ayurvedic herb known to enhance cognitive functions.",
    audio: "/audio/brahmi.mp3",
    position: [-3.09, 0, 9.51] // Angle: 252°
  },
  {
    id: "giloy",
    name: "Giloy",
    category: "Ayurvedic Plant",
    uses: ["Boosts immunity", "Detoxifies body", "Reduces fever", "Supports digestion"],
    image: "/assets/Images/Ayurvedic plants/Giloy.jpg",
//     model: "/assets/3D models/Ayurvedic plants/giloy.glb",
    description: "Giloy is a climbing herb used for immunity and overall wellness in Ayurveda.",
    audio: "/audio/giloy.mp3",
    position: [-0.0, 0, 10.0] // Angle: 270°
  },
  {
    id: "haritaki",
    name: "Haritaki",
    category: "Ayurvedic Plant",
    uses: ["Supports digestion", "Detoxifies body", "Improves skin", "Boosts immunity"],
    image: "/assets/Images/Ayurvedic plants/Haritaki.jpg",
//     model: "/assets/3D models/Ayurvedic plants/haritaki.glb",
    description: "Haritaki is a medicinal fruit used in Ayurveda for detoxification.",
    audio: "/audio/haritaki.mp3",
    position: [3.09, 0, 9.51] // Angle: 288°
  },
  {
    id: "manjistha",
    name: "Manjistha",
    category: "Ayurvedic Plant",
    uses: ["Purifies blood", "Improves skin", "Reduces inflammation", "Supports liver"],
    image: "/assets/Images/Ayurvedic plants/manjistha.png",
//     model: "/assets/3D models/Ayurvedic plants/manjistha.glb",
    description: "Manjistha is a climbing herb in Ayurveda used for skin and blood purification.",
    audio: "/audio/manjistha.mp3",
    position: [5.88, 0, 8.09] // Angle: 306°
  },
  {
    id: "shatavari",
    name: "Shatavari",
    category: "Ayurvedic Plant",
    uses: ["Supports reproductive health", "Boosts immunity", "Reduces stress", "Anti-inflammatory"],
    image: "/assets/Images/Ayurvedic plants/shatavari.jpg",
//     model: "/assets/3D models/Ayurvedic plants/satavari.glb",
    description: "Shatavari is a vital herb in Ayurveda supporting female reproductive health.",
    audio: "/audio/shatavari.mp3",
    position: [8.09, 0, 5.88] // Angle: 324°
  },

  // 🌿 Culinary Plants - We only need 1 more plant to reach the 20 limit.
  {
    id: "chives",
    name: "Chives",
    category: "Culinary Plant",
    uses: ["Adds flavor", "Rich in vitamins", "Supports digestion", "Antioxidant"],
    image: "/assets/Images/Culinary plants/chives.jpg",
//     model: "/assets/3D models/Culinary plants/chives.glb",
    description: "Chives are edible herbs used to enhance flavor and nutrition.",
    audio: "/audio/chives.mp3",
    position: [9.51, 0, 3.09] // Angle: 342°
  },

    // The remaining 27 plants (which will NOT be shown) keep their original data.
  {
    id: "coriander",
    name: "Coriander",
    category: "Culinary Plant",
    uses: ["Enhances flavor", "Aids digestion", "Rich in antioxidants", "Supports heart health"],
    image: "/assets/Images/Culinary plants/coriander.jpg",
//     model: "/assets/3D models/Culinary plants/coriander.glb",
    description: "Coriander is an aromatic herb widely used in cooking and medicine.",
    audio: "/audio/coriander.mp3",
    position: [1.0, 0, -2.5]
  },
  {
    id: "garlic",
    name: "Garlic",
    category: "Culinary Plant",
    uses: ["Boosts immunity", "Reduces blood pressure", "Antimicrobial", "Supports heart health"],
    image: "/assets/Images/Culinary plants/garlic.webp",
//     model: "/assets/3D models/Culinary plants/garlic.glb",
    description: "Garlic is a culinary herb known for flavor and medicinal properties.",
    audio: "/audio/garlic.mp3",
    position: [-0.8, 0, -2.9]
  },
  {
    id: "mint",
    name: "Mint",
    category: "Culinary Plant",
    uses: ["Supports digestion", "Relieves headaches", "Freshens breath", "Anti-inflammatory"],
    image: "/assets/Images/Culinary plants/mint.webp",
//     model: "/assets/3D models/Culinary plants/mint.glb",
    description: "Mint is a popular herb used in teas, culinary dishes, and medicine.",
    audio: "/audio/mint.mp3",
    position: [0.9, 0, -2.7]
  },
  {
    id: "onion",
    name: "Onion",
    category: "Culinary Plant",
    uses: ["Enhances flavor", "Boosts immunity", "Supports heart", "Antioxidant"],
    image: "/assets/Images/Culinary plants/onion.png",
//     model: "/assets/3D models/Culinary plants/onion.glb",
    description: "Onion is a common culinary ingredient with medicinal properties.",
    audio: "/audio/onion.mp3",
    position: [-1.0, 0, -3.1]
  },
  {
    id: "parsley",
    name: "Parsley",
    category: "Culinary Plant",
    uses: ["Rich in vitamins", "Supports digestion", "Anti-inflammatory", "Boosts immunity"],
    image: "/assets/Images/Culinary plants/parsley.webp",
//     model: "/assets/3D models/Culinary plants/parsley.glb",
    description: "Parsley is a culinary herb used for flavor and nutrition.",
    audio: "/audio/parsley.mp3",
    position: [1.2, 0, -2.6]
  },
  {
    id: "sweet-basil",
    name: "Sweet Basil",
    category: "Culinary Plant",
    uses: ["Enhances flavor", "Supports digestion", "Anti-inflammatory", "Rich in antioxidants"],
    image: "/assets/Images/Culinary plants/sweet basil.webp",
//     model: "/assets/3D models/Culinary plants/sweetbasil.glb",
    description: "Sweet Basil is a culinary herb widely used in cooking and medicine.",
    audio: "/audio/sweet-basil.mp3",
    position: [-0.7, 0, -2.8]
  },
  {
    id: "thyme",
    name: "Thyme",
    category: "Culinary Plant",
    uses: ["Supports respiratory health", "Antimicrobial", "Boosts immunity", "Used in cooking"],
    image: "/assets/Images/Culinary plants/thyme.webp",
//     model: "/assets/3D models/Culinary plants/thyme.glb",
    description: "Thyme is an aromatic herb used for culinary and medicinal purposes.",
    audio: "/audio/thyme.mp3",
    position: [0.5, 0, -3.0]
  },

  // 🌿 Healing Plants
  {
    id: "aloe-vera",
    name: "Aloe Vera",
    category: "Healing Plant",
    uses: ["Heals burns", "Moisturizes skin", "Improves digestion", "Reduces dandruff"],
    image: "/assets/Images/Healing plants/aloevera.jpg",
//     model: "/assets/3D models/Healing plants/aloevera.glb",
    description: "Aloe Vera is a succulent plant known for its gel rich in vitamins and minerals.",
    audio: "/audio/aloe-vera.mp3",
    position: [-1.0, 0, -2.0]
  },
  {
    id: "ashwagandha",
    name: "Ashwagandha",
    category: "Healing Plant",
    uses: ["Reduces stress", "Boosts immunity", "Improves stamina", "Supports brain health"],
    image: "/assets/Images/Healing plants/ashwagandha.png",
//     model: "/assets/3D models/Healing plants/Ashwagandha.glb",
    description: "Ashwagandha is an Ayurvedic herb used for stress relief and overall vitality.",
    audio: "/audio/ashwagandha.mp3",
    position: [1.1, 0, -2.3]
  },
  {
    id: "calendula",
    name: "Calendula",
    category: "Healing Plant",
    uses: ["Heals wounds", "Soothes skin", "Reduces inflammation", "Supports digestion"],
    image: "/assets/Images/Healing plants/calendula.webp",
//     model: "/assets/3D models/Healing plants/calendula.glb",
    description: "Calendula is a medicinal flower used for skin healing and digestive health.",
    audio: "/audio/calendula.mp3",
    position: [-0.8, 0, -2.5]
  },
  {
    id: "echinacea",
    name: "Echinacea",
    category: "Healing Plant",
    uses: ["Boosts immunity", "Reduces cold symptoms", "Anti-inflammatory", "Supports skin health"],
    image: "/assets/Images/Healing plants/echinacea.jpg",
//     model: "/assets/3D models/Healing plants/echinacea.glb",
    description: "Echinacea is a flowering plant used to boost immunity and fight infections.",
    audio: "/audio/echinacea.mp3",
    position: [0.7, 0, -2.9]
  },
  {
    id: "ginger",
    name: "Ginger",
    category: "Healing Plant",
    uses: ["Aids digestion", "Reduces nausea", "Anti-inflammatory", "Boosts immunity"],
    image: "/assets/Images/Healing plants/Ginger.png",
//     model: "/assets/3D models/Healing plants/ginger.glb",
    description: "Ginger is a root widely used for culinary and medicinal purposes.",
    audio: "/audio/ginger.mp3",
    position: [-1.1, 0, -3.2]
  },
  {
    id: "gotu-kola",
    name: "Gotu Kola",
    category: "Healing Plant",
    uses: ["Improves memory", "Reduces anxiety", "Supports skin health", "Aids healing wounds"],
    image: "/assets/Images/Healing plants/gotukola.jpg",
//     model: "/assets/3D models/Healing plants/gotukola.glb",
    description: "Gotu Kola is an herb used in traditional medicine for memory and wound healing.",
    audio: "/audio/gotu-kola.mp3",
    position: [1.0, 0, -3.0]
  },
  {
    id: "neem",
    name: "Neem",
    category: "Healing Plant",
    uses: ["Purifies blood", "Anti-bacterial", "Supports skin health", "Boosts immunity"],
    image: "/assets/Images/Healing plants/neem.webp",
//     model: "/assets/3D models/Healing plants/neem.glb",
    description: "Neem is a medicinal tree used in Ayurvedic medicine for skin and immunity.",
    audio: "/audio/neem.mp3",
    position: [-0.7, 0, -2.7]
  },
  {
    id: "peppermint",
    name: "Peppermint",
    category: "Healing Plant",
    uses: ["Relieves headaches", "Aids digestion", "Freshens breath", "Reduces stress"],
    image: "/assets/Images/Healing plants/peppermint.jpg",
//     model: "/assets/3D models/Healing plants/mint.glb",
    description: "Peppermint is a hybrid mint plant used for medicinal and culinary purposes.",
    audio: "/audio/peppermint.mp3",
    position: [0.6, 0, -2.8]
  },
  {
    id: "tulsi",
    name: "Tulsi",
    category: "Healing Plant",
    uses: ["Boosts immunity", "Reduces stress", "Supports respiratory health", "Anti-inflammatory"],
    image: "/assets/Images/Healing plants/tulsi.webp",
//     model: "/assets/3D models/Healing plants/tulsi.glb",
    description: "Tulsi is a sacred plant in Ayurveda known for its healing properties.",
    audio: "/audio/tulsi.mp3",
    position: [-1.0, 0, -3.1]
  },

  // 🌿 Rare Plants
  {
    id: "bhutkeshi",
    name: "Bhutkeshi",
    category: "Rare Plant",
    uses: ["Traditional medicine", "Anti-inflammatory", "Supports digestion", "Aids skin health"],
    image: "/assets/Images/Rare plants/Bhutkeshi.png",
//     model: "/assets/3D models/RareMedical plants/Bhutkeshi.glb",
    audio: "/audio/bhutkeshi.mp3",
    description: "Bhutkeshi is a rare medicinal plant used in traditional remedies.",
    position: [1.2, 0, -2.2]
  },
  {
    id: "chitrak",
    name: "Chitrak",
    category: "Rare Plant",
    uses: ["Supports digestion", "Boosts metabolism", "Anti-inflammatory", "Aids skin health"],
    image: "/assets/Images/Rare plants/chitrak.png",
//     model: "/assets/3D models/RareMedical plants/chitrak.glb",
    description: "Chitrak is a rare Ayurvedic herb used for digestive health and metabolism.",
    audio: "/audio/chitrak.mp3",
    position: [-1.3, 0, -2.5]
  },
  {
    id: "gandhapura",
    name: "Gandhapura Wintergreen",
    category: "Rare Plant",
    uses: ["Reduces pain", "Aromatherapy", "Supports skin health", "Anti-inflammatory"],
    image: "/assets/Images/Rare plants/Gandhapura wintergreen.jpg",
//     model: "/assets/3D models/RareMedical plants/Gandhapura.glb",
    description: "Gandhapura, also known as Wintergreen, is a rare aromatic and medicinal plant.",
    audio: "/audio/gandhapura.mp3",
    position: [1.0, 0, -3.0]
  },
  {
    id: "jivanti",
    name: "Jivanti",
    category: "Rare Plant",
    uses: ["Boosts immunity", "Supports vitality", "Anti-aging", "Aids skin health"],
    image: "/assets/Images/Rare plants/jivanti.jpg",
//     model: "/assets/3D models/RareMedical plants/jivanti.glb",
    description: "Jivanti is a rare herb used for rejuvenation and vitality in Ayurveda.",
    audio: "/audio/jivanti.mp3",
    position: [-0.8, 0, -2.8]
  },
  {
    id: "kutki",
    name: "Kutki",
    category: "Rare Plant",
    uses: ["Supports liver health", "Detoxifies body", "Anti-inflammatory", "Boosts immunity"],
    image: "/assets/Images/Rare plants/kutki.jpg",
//     model: "/assets/3D models/RareMedical plants/kutki.glb",
    description: "Kutki is a rare medicinal herb used for liver and digestive health.",
    audio: "/audio/kutki.mp3",
    position: [0.7, 0, -3.1]
  },
  {
    id: "salam-panja",
    name: "Salampanja",
    category: "Rare Plant",
    uses: ["Traditional medicine", "Anti-inflammatory", "Supports digestion", "Boosts immunity"],
    image: "/assets/Images/Rare plants/salampanja.png",
//     model: "/assets/3D models/RareMedical plants/salampanja.glb",
    description: "Salamlanja is a rare herb used in traditional medicine.",
    audio: "/audio/salam-lanja.mp3",
    position: [1.1, 0, -2.9]
  },
  {
    id: "shankhpushpi",
    name: "Shankhpushpi",
    category: "Rare Plant",
    uses: ["Improves memory", "Reduces stress", "Supports brain health", "Anti-inflammatory"],
    image: "/assets/Images/Rare plants/Shankhpushpi.png",
//     model: "/assets/3D models/RareMedical plants/shankhpushpi.glb",
    description: "Shankhpushpi is a rare herb used in Ayurveda to support cognitive functions.",
    audio: "/audio/shankhpushpi.mp3",
    position: [-0.9, 0, -3.0]
  }
];

export default plants;