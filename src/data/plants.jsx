const plants = [
  //healing plants start
  {
    "id": "aloe-vera",
    "name": "Aloe Vera",
    "category": "Healing Herb",
    "uses": [
     "Heals burns and wounds",
    "Works as a skin moisturizer",
    "Improves digestion",
    "Reduces dandruff in hair"
    ],
    "image": "/assets/Images/Healing plants/aloevera.jpg",
    "model": "/assets/3D models/Ayurvedic plants/brahmi.glb",
    "description": "Aloe Vera is a succulent plant known for its gel, which is rich in vitamins and minerals. It is widely used for skincare and digestive health.",
    "audio": "/audio/aloe-vera.mp3",
    "position": [-1.0, 0, -2.0]
  },
  // {
  //   "id": "turmeric",
  //   "name": "Turmeric (Haldi)",
  //   "category": "Healing + Ayurvedic",
  //   "uses": [
  //     "Anti-inflammatory",
  //     "Immunity booster",
  //     "Wound healer",
  //     "Improves digestion"
  //   ],
  //   "image": "/assets/Images/Healing plants/",
  //   "model": "/assets/3D models/tulsi3dmodel.glb",
  //   "description": "Turmeric contains curcumin, which has powerful anti-inflammatory and antioxidant properties.",
  //   "audio": "/audio/turmeric.mp3",
  //   "position": [1.2, 0, -2.5]
  // },
  // {
  //   "id": "ginger",
  //   "name": "Ginger (Adrak)",
  //   "category": "Healing + Culinary",
  //   "uses": [
  //     "Relieves nausea",
  //     "Improves digestion",
  //     "Fights cold & cough",
  //     "Anti-inflammatory"
  //   ],
  //   "image": "/assets/Images/Healing plants/Ginger.jpg",
  //   "model": "/assets/3D models/Healing plants/lemontree.glb",
  //   "description": "Ginger is a commonly used root in cooking and medicine, known for its warming effect and digestive benefits.",
  //   "audio": "/audio/ginger.mp3",
  //   "position": [0.5, 0, -1.8]
  // },
  // {
  //   "id": "neem",
  //   "name": "Neem",
  //   "category": "Healing + Ayurvedic",
  //   "uses": [
  //     "Skin infection cure",
  //     "Natural blood purifier",
  //     "Dental care",
  //     "Boosts immunity"
  //   ],
  //   "image": "/assets/Images/Healing plants/neem.webp",
  //   "model": "/assets/3D models/Healing plants/lemon3dmodel.glb",
  //   "description": "Neem is called the 'village pharmacy' due to its wide range of medicinal properties.",
  //   "audio": "/audio/neem.mp3",
  //   "position": [-2.0, 0, -1.5]
  // },
  // {
  //   "id": "ashwagandha",
  //   "name": "Ashwagandha",
  //   "category": "Healing + Rare Medicinal",
  //   "uses": [
  //     "Stress & anxiety relief",
  //     "Improves strength",
  //     "Boosts immunity",
  //     "Enhances memory"
  //   ],
  //   "image": "/assets/Images/Healing plants/ashwgandha.png",
  //   "model": "/assets/3D models/Healing plants/Ahwagandha.glb",
  //   "description": "Ashwagandha is an adaptogenic herb that helps the body manage stress and improve energy.",
  //   "audio": "/audio/ashwagandha.mp3",
  //   "position": [2.0, 0, -2.2]
  // },
  // {
  //   "id": "tulsi",
  //   "name": "Tulsi (Holy Basil)",
  //   "category": "Healing + Ayurvedic",
  //   "uses": [
  //     "Cold & cough relief",
  //     "Stress reduction",
  //     "Purifies air",
  //     "Immunity booster"
  //   ],
  //   "image": "/assets/Images/Healing plants/tulsi.webp",
  //   "model": "/assets/3D models/Healing plants/tulsi3dmodel.glb",
  //   "description": "Tulsi is considered sacred and is widely used in Ayurveda for respiratory and immune health.",
  //   "audio": "/audio/tulsi.mp3",
  //   "position": [-1.6, 0, -2.3]
  // },
  // {
  //   "id": "peppermint",
  //   "name": "Peppermint",
  //   "category": "Healing + Aromatic",
  //   "uses": [
  //     "Relieves headache",
  //     "Improves digestion",
  //     "Freshens breath",
  //     "Relieves nausea"
  //   ],
  //   "image": "/assets/Images/Healing plants/peppermint.jpg",
  //   "model": "/assets/3D models/Healing plants/redginger.glb",
  //   "description": "Peppermint contains menthol, which provides a cooling sensation and health benefits.",
  //   "audio": "/audio/peppermint.mp3",
  //   "position": [0.2, 0, -3.0]
  // },
  // {
  //   "id": "gotu-kola",
  //   "name": "Gotu Kola (Brahmi Booti)",
  //   "category": "Healing + Rare Medicinal",
  //   "uses": [
  //     "Improves memory",
  //     "Wound healing",
  //     "Reduces anxiety",
  //     "Boosts blood circulation"
  //   ],
  //   "image": "/assets/Images/Healing plants/gotukala.jpg",
  //   "model": "/assets/3D models/Healing plants/lemon3dmodel.glb",
  //   "description": "Gotu Kola is an ancient herb used in Ayurveda for brain health and skin healing.",
  //   "audio": "/audio/gotu-kola.mp3",
  //   "position": [1.8, 0, -1.2]
  // },
  // {
  //   "id": "calendula",
  //   "name": "Calendula (Marigold Flower)",
  //   "category": "Healing + Aromatic",
  //   "uses": [
  //     "Heals skin wounds",
  //     "Reduces inflammation",
  //     "Soothes rashes",
  //     "Used in creams & oils"
  //   ],
  //   "image": "/assets/Images/Healing plants/calendula.webp",
  //   "model": "/assets/3D models/Healing plants/lemon3dmodel.glb",
  //   "description": "Calendula petals are known for their skin-soothing and anti-inflammatory effects.",
  //   "audio": "/audio/calendula.mp3",
  //   "position": [-0.8, 0, -2.7]
  // },

  // 
  // {
  //   "id": "licorice",
  //   "name": "Licorice Root (Mulethi)",
  //   "category": "Healing + Ayurvedic",
  //   "uses": [
  //     "Soothes sore throat",
  //     "Improves digestion",
  //     "Boosts immunity",
  //     "Reduces inflammation"
  //   ],
  //   "image": "/Images/licorice.webp",
  //   "model": "/models/licorice.glb",
  //   "description": "Licorice root has been used in traditional medicine for centuries to treat respiratory and digestive issues.",
  //   "audio": "/audio/licorice.mp3",
  //   "position": [2.3, 0, -1.5]
  // },

  // // Ayurvedic Plants start
  // {
  //   "id": "amla",
  //   "name": "Amla (Indian Gooseberry)",
  //   "category": "Ayurvedic",
  //   "uses": [
  //     "Rich source of Vitamin C",
  //     "Improves digestion",
  //     "Boosts hair growth",
  //     "Strengthens immunity"
  //   ],
  //   "image": "/Images/amla.webp",
  //   "model": "/models/amla.glb",
  //   "description": "Amla is a superfruit in Ayurveda, known for its rejuvenating properties and antioxidant power.",
  //   "audio": "/audio/amla.mp3",
  //   "position": [-1.5, 0, -2.0]
  // },
  // {
  //   "id": "shatavari",
  //   "name": "Shatavari",
  //   "category": "Ayurvedic",
  //   "uses": [
  //     "Enhances female reproductive health",
  //     "Reduces stress",
  //     "Improves immunity",
  //     "Supports lactation"
  //   ],
  //   "image": "/Images/shatavari.webp",
  //   "model": "/models/shatavari.glb",
  //   "description": "Shatavari is considered a natural adaptogen, especially beneficial for women’s health.",
  //   "audio": "/audio/shatavari.mp3",
  //   "position": [1.0, 0, -2.5]
  // },
  // {
  //   "id": "giloy",
  //   "name": "Giloy (Guduchi)",
  //   "category": "Ayurvedic",
  //   "uses": [
  //     "Fights infections",
  //     "Reduces fever",
  //     "Improves liver health",
  //     "Boosts immunity"
  //   ],
  //   "image": "/Images/giloy.webp",
  //   "model": "/models/giloy.glb",
  //   "description": "Giloy is often called 'Amrita' in Ayurveda, meaning nectar, due to its powerful healing properties.",
  //   "audio": "/audio/giloy.mp3",
  //   "position": [0.3, 0, -1.7]
  // },
  // {
  //   "id": "bael",
  //   "name": "Bael (Bilva)",
  //   "category": "Ayurvedic",
  //   "uses": [
  //     "Good for digestion",
  //     "Controls blood sugar",
  //     "Cures diarrhea",
  //     "Improves respiratory health"
  //   ],
  //   "image": "/Images/bael.webp",
  //   "model": "/models/bael.glb",
  //   "description": "Bael fruit is a sacred Ayurvedic plant known for its digestive and detoxifying properties.",
  //   "audio": "/audio/bael.mp3",
  //   "position": [2.0, 0, -2.2]
  // },
  // {
  //   "id": "haritaki",
  //   "name": "Haritaki",
  //   "category": "Ayurvedic",
  //   "uses": [
  //     "Detoxifies body",
  //     "Improves bowel health",
  //     "Boosts memory",
  //     "Strengthens immunity"
  //   ],
  //   "image": "/Images/haritaki.webp",
  //   "model": "/models/haritaki.glb",
  //   "description": "Haritaki is one of the ingredients of Triphala, called the 'king of medicines' in Ayurveda.",
  //   "audio": "/audio/haritaki.mp3",
  //   "position": [-2.1, 0, -1.8]
  // },
  // {
  //   "id": "brahmi",
  //   "name": "Brahmi",
  //   "category": "Ayurvedic",
  //   "uses": [
  //     "Boosts brain function",
  //     "Reduces anxiety",
  //     "Improves focus",
  //     "Supports memory"
  //   ],
  //   "image": "/Images/brahmi.webp",
  //   "model": "/models/brahmi.glb",
  //   "description": "Brahmi is an ancient herb that enhances cognitive functions and mental clarity.",
  //   "audio": "/audio/brahmi.mp3",
  //   "position": [-0.5, 0, -2.9]
  // },
  // {
  //   "id": "arjuna",
  //   "name": "Arjuna Tree",
  //   "category": "Ayurvedic",
  //   "uses": [
  //     "Strengthens the heart",
  //     "Controls cholesterol",
  //     "Improves circulation",
  //     "Reduces chest pain"
  //   ],
  //   "image": "/Images/arjuna.webp",
  //   "model": "/models/arjuna.glb",
  //   "description": "Arjuna tree bark is widely used in Ayurveda for cardiovascular health.",
  //   "audio": "/audio/arjuna.mp3",
  //   "position": [1.6, 0, -2.1]
  // },
  // {
  //   "id": "triphala",
  //   "name": "Triphala",
  //   "category": "Ayurvedic",
  //   "uses": [
  //     "Improves digestion",
  //     "Detoxifies body",
  //     "Supports weight loss",
  //     "Strengthens immunity"
  //   ],
  //   "image": "/Images/triphala.webp",
  //   "model": "/models/triphala.glb",
  //   "description": "Triphala is a combination of three Ayurvedic fruits, considered a complete health tonic.",
  //   "audio": "/audio/triphala.mp3",
  //   "position": [0.8, 0, -2.3]
  // },
  // {
  //   "id": "manjistha",
  //   "name": "Manjistha",
  //   "category": "Ayurvedic",
  //   "uses": [
  //     "Purifies blood",
  //     "Improves skin health",
  //     "Reduces acne",
  //     "Supports liver health"
  //   ],
  //   "image": "/Images/manjistha.webp",
  //   "model": "/models/manjistha.glb",
  //   "description": "Manjistha is a blood-purifying herb, used to treat skin diseases and detoxify the body.",
  //   "audio": "/audio/manjistha.mp3",
  //   "position": [2.2, 0, -1.9]
  // },
  // {
  //   "id": "ashoka",
  //   "name": "Ashoka Tree",
  //   "category": "Ayurvedic",
  //   "uses": [
  //     "Balances female hormones",
  //     "Improves menstrual health",
  //     "Reduces pain & cramps",
  //     "Strengthens uterus"
  //   ],
  //   "image": "/Images/ashoka.webp",
  //   "model": "/models/ashoka.glb",
  //   "description": "Ashoka tree bark is used in Ayurveda for women’s reproductive health and hormonal balance.",
  //   "audio": "/audio/ashoka.mp3",
  //   "position": [-1.3, 0, -2.4]
  // },
  // // Culinary and Aromatic Plants start
  // {
  //   "id": "coriander",
  //   "name": "Coriander (Cilantro / Dhania)",
  //   "category": "Culinary",
  //   "uses": [
  //     "Adds flavor to curries & salads",
  //     "Improves digestion",
  //     "Controls blood sugar",
  //     "Rich in antioxidants"
  //   ],
  //   "image": "/Images/coriander.webp",
  //   "model": "/models/coriander.glb",
  //   "description": "Coriander leaves and seeds are widely used in cooking and also have medicinal benefits.",
  //   "audio": "/audio/coriander.mp3",
  //   "position": [0, 0, 0]
  // },
  // {
  //   "id": "mint",
  //   "name": "Mint (Pudina)",
  //   "category": "Culinary + Aromatic",
  //   "uses": [
  //     "Refreshing flavor in drinks",
  //     "Improves digestion",
  //     "Relieves nausea",
  //     "Freshens breath"
  //   ],
  //   "image": "/Images/mint.webp",
  //   "model": "/models/mint.glb",
  //   "description": "Mint is a popular herb in chutneys, teas, and cooling drinks.",
  //   "audio": "/audio/mint.mp3",
  //   "position": [0, 0, 0]
  // },
  // {
  //   "id": "curry-leaves",
  //   "name": "Curry Leaves (Kadi Patta)",
  //   "category": "Culinary",
  //   "uses": [
  //     "Adds aroma to South Indian dishes",
  //     "Improves hair health",
  //     "Supports digestion",
  //     "Rich in vitamins A, B, C, E"
  //   ],
  //   "image": "/Images/curry-leaves.webp",
  //   "model": "/models/curry-leaves.glb",
  //   "description": "Curry leaves are an essential spice in Indian cooking, with health-boosting properties.",
  //   "audio": "/audio/curry-leaves.mp3",
  //   "position": [0, 0, 0]
  // },
  // {
  //   "id": "garlic",
  //   "name": "Garlic (Lahsun)",
  //   "category": "Culinary + Healing",
  //   "uses": [
  //     "Adds flavor to food",
  //     "Improves heart health",
  //     "Boosts immunity",
  //     "Fights infections"
  //   ],
  //   "image": "/Images/garlic.webp",
  //   "model": "/models/garlic.glb",
  //   "description": "Garlic is used worldwide in cooking and medicine for its strong flavor and healing benefits.",
  //   "audio": "/audio/garlic.mp3",
  //   "position": [0, 0, 0]
  // },
  // {
  //   "id": "onion",
  //   "name": "Onion (Pyaaz)",
  //   "category": "Culinary",
  //   "uses": [
  //     "Base for curries & gravies",
  //     "Improves digestion",
  //     "Controls blood sugar",
  //     "Rich in antioxidants"
  //   ],
  //   "image": "/Images/onion.webp",
  //   "model": "/models/onion.glb",
  //   "description": "Onion is a staple culinary vegetable, used raw, cooked, or fried in countless dishes.",
  //   "audio": "/audio/onion.mp3",
  //   "position": [0, 0, 0]
  // },
  // {
  //   "id": "basil",
  //   "name": "Basil (Sweet Basil)",
  //   "category": "Culinary + Aromatic",
  //   "uses": [
  //     "Used in Italian dishes (pasta, pizza)",
  //     "Reduces stress",
  //     "Good for skin health",
  //     "Improves digestion"
  //   ],
  //   "image": "/Images/basil.webp",
  //   "model": "/models/basil.glb",
  //   "description": "Sweet Basil is widely used in Mediterranean cuisine for its sweet aroma and flavor.",
  //   "audio": "/audio/basil.mp3",
  //   "position": [0, 0, 0]
  // },
  // {
  //   "id": "thyme",
  //   "name": "Thyme",
  //   "category": "Culinary + Aromatic",
  //   "uses": [
  //     "Seasoning for soups & meats",
  //     "Supports respiratory health",
  //     "Improves immunity",
  //     "Antibacterial properties"
  //   ],
  //   "image": "/Images/thyme.webp",
  //   "model": "/models/thyme.glb",
  //   "description": "Thyme is a Mediterranean herb used for flavor and health benefits.",
  //   "audio": "/audio/thyme.mp3",
  //   "position": [0, 0, 0]
  // },
  // {
  //   "id": "rosemary",
  //   "name": "Rosemary",
  //   "category": "Culinary + Aromatic",
  //   "uses": [
  //     "Adds flavor to roasted dishes",
  //     "Improves memory",
  //     "Boosts hair health",
  //     "Relieves stress"
  //   ],
  //   "image": "/Images/rosemary.webp",
  //   "model": "/models/rosemary.glb",
  //   "description": "Rosemary is a fragrant herb used in European cooking and herbal remedies.",
  //   "audio": "/audio/rosemary.mp3",
  //   "position": [0, 0, 0]
  // },
  // {
  //   "id": "parsley",
  //   "name": "Parsley",
  //   "category": "Culinary",
  //   "uses": [
  //     "Garnish for soups & salads",
  //     "Freshens breath",
  //     "Rich in Vitamin K",
  //     "Supports kidney health"
  //   ],
  //   "image": "/Images/parsley.webp",
  //   "model": "/models/parsley.glb",
  //   "description": "Parsley is a leafy herb used as garnish and seasoning, with many health benefits.",
  //   "audio": "/audio/parsley.mp3",
  //   "position": [0, 0, 0]
  // },
  // {
  //   "id": "chives",
  //   "name": "Chives",
  //   "category": "Culinary",
  //   "uses": [
  //     "Mild onion flavor for soups & salads",
  //     "Improves digestion",
  //     "Boosts immunity",
  //     "Supports heart health"
  //   ],
  //   "image": "/Images/chives.webp",
  //   "model": "/models/chives.glb",
  //   "description": "Chives are small green herbs with a mild onion-like flavor, used in garnishing.",
  //   "audio": "/audio/chives.mp3",
  //   "position": [0, 0, 0]
  // },
  // {
  //   "id": "lavender",
  //   "name": "Lavender",
  //   "category": "Aromatic + Healing",
  //   "uses": [
  //     "Relieves stress & anxiety",
  //     "Improves sleep",
  //     "Used in perfumes & oils",
  //     "Natural insect repellent"
  //   ],
  //   "image": "/Images/lavender.webp",
  //   "model": "/models/lavender.glb",
  //   "description": "Lavender is a fragrant herb known for its calming aroma and medicinal properties.",
  //   "audio": "/audio/lavender.mp3",
  //   "position": [0, 0, 0]
  // },
  // {
  //   "id": "jasmine",
  //   "name": "Jasmine",
  //   "category": "Aromatic",
  //   "uses": [
  //     "Used in perfumes",
  //     "Relieves stress",
  //     "Improves mood",
  //     "Used in teas & oils"
  //   ],
  //   "image": "/Images/jasmine.webp",
  //   "model": "/models/jasmine.glb",
  //   "description": "Jasmine is a sweet-smelling flower often used in aromatherapy and skincare.",
  //   "audio": "/audio/jasmine.mp3",
  //   "position": [0, 0, 0]
  // },
  // {
  //   "id": "lemongrass",
  //   "name": "Lemongrass",
  //   "category": "Aromatic + Culinary",
  //   "uses": [
  //     "Flavoring in soups & teas",
  //     "Repels mosquitoes",
  //     "Relieves stress",
  //     "Improves digestion"
  //   ],
  //   "image": "/Images/lemongrass.webp",
  //   "model": "/models/lemongrass.glb",
  //   "description": "Lemongrass is a tropical aromatic plant used in cooking and herbal medicine.",
  //   "audio": "/audio/lemongrass.mp3",
  //   "position": [0, 0, 0]
  // },
  // {
  //   "id": "rose",
  //   "name": "Rose",
  //   "category": "Aromatic + Healing",
  //   "uses": [
  //     "Used in perfumes & rose water",
  //     "Improves skin health",
  //     "Reduces stress",
  //     "Soothes sore throat"
  //   ],
  //   "image": "/Images/rose.webp",
  //   "model": "/models/rose.glb",
  //   "description": "Roses are globally loved for their fragrance and are widely used in cosmetics and Ayurveda.",
  //   "audio": "/audio/rose.mp3",
  //   "position": [0, 0, 0]
  // },
  // {
  //   "id": "chamomile",
  //   "name": "Chamomile",
  //   "category": "Aromatic + Healing",
  //   "uses": [
  //     "Calming tea for sleep",
  //     "Reduces stress",
  //     "Improves digestion",
  //     "Soothes skin"
  //   ],
  //   "image": "/Images/chamomile.webp",
  //   "model": "/models/chamomile.glb",
  //   "description": "Chamomile is a daisy-like aromatic flower, used in teas and essential oils for relaxation.",
  //   "audio": "/audio/chamomile.mp3",
  //   "position": [0, 0, 0]
  // },
  // {
  //   "id": "eucalyptus",
  //   "name": "Eucalyptus",
  //   "category": "Aromatic + Healing",
  //   "uses": [
  //     "Clears congestion",
  //     "Relieves cold & cough",
  //     "Used in oils & balms",
  //     "Repels insects"
  //   ],
  //   "image": "/Images/eucalyptus.webp",
  //   "model": "/models/eucalyptus.glb",
  //   "description": "Eucalyptus leaves contain oil with a strong aroma, widely used in medicine.",
  //   "audio": "/audio/eucalyptus.mp3",
  //   "position": [0, 0, 0]
  // },
  // {
  //   "id": "sandalwood",
  //   "name": "Sandalwood",
  //   "category": "Aromatic + Ayurvedic",
  //   "uses": [
  //     "Used in incense & perfumes",
  //     "Calms the mind",
  //     "Improves skin glow",
  //     "Used in meditation rituals"
  //   ],
  //   "image": "/Images/sandalwood.webp",
  //   "model": "/models/sandalwood.glb",
  //   "description": "Sandalwood is highly valued for its woody aroma and is sacred in many cultures.",
  //   "audio": "/audio/sandalwood.mp3",
  //   "position": [0, 0, 0]
  // },
  // {
  //   "id": "patchouli",
  //   "name": "Patchouli",
  //   "category": "Aromatic",
  //   "uses": [
  //     "Used in perfumes & incense",
  //     "Reduces stress",
  //     "Improves skin health",
  //     "Natural insect repellent"
  //   ],
  //   "image": "/Images/patchouli.webp",
  //   "model": "/models/patchouli.glb",
  //   "description": "Patchouli has a strong earthy fragrance, often used in perfumes and essential oils.",
  //   "audio": "/audio/patchouli.mp3",
  //   "position": [0, 0, 0]
  // },
  // {
  //   "id": "vetiver",
  //   "name": "Vetiver (Khus)",
  //   "category": "Aromatic + Healing",
  //   "uses": [
  //     "Cooling effect in summer drinks",
  //     "Used in perfumes",
  //     "Reduces stress",
  //     "Improves skin health"
  //   ],
  //   "image": "/Images/vetiver.webp",
  //   "model": "/models/vetiver.glb",
  //   "description": "Vetiver roots are aromatic and cooling, used in drinks, perfumes, and traditional medicine.",
  //   "audio": "/audio/vetiver.mp3",
  //   "position": [0, 0, 0]
  // },
  // {
  //   "id": "ylang-ylang",
  //   "name": "Ylang-Ylang",
  //   "category": "Aromatic",
  //   "uses": [
  //     "Used in perfumes",
  //     "Improves mood",
  //     "Reduces stress",
  //     "Boosts skin health"
  //   ],
  //   "image": "/Images/ylang-ylang.webp",
  //   "model": "/models/ylang-ylang.glb",
  //   "description": "Ylang-Ylang is a tropical flower with a sweet fragrance, widely used in aromatherapy.",
  //   "audio": "/audio/ylang-ylang.mp3",
  //   "position": [0, 0, 0]
  // },
  // {
  //   "id": "sarpagandha",
  //   "name": "Sarpagandha (Rauvolfia serpentina)",
  //   "category": "Rare Medicinal",
  //   "uses": [
  //     "Treats high blood pressure",
  //     "Calms anxiety",
  //     "Used in Ayurveda for mental disorders",
  //     "Improves sleep"
  //   ],
  //   "image": "/Images/sarpagandha.webp",
  //   "model": "/models/sarpagandha.glb",
  //   "description": "Sarpagandha is a rare Ayurvedic herb traditionally used for hypertension and insomnia.",
  //   "audio": "/audio/sarpagandha.mp3",
  //   "position": [0, 0, 0]
  // },
  // {
  //   "id": "safed-musli",
  //   "name": "Safed Musli",
  //   "category": "Rare Medicinal",
  //   "uses": [
  //     "Boosts stamina & strength",
  //     "Improves fertility",
  //     "Enhances immunity",
  //     "Used as natural tonic"
  //   ],
  //   "image": "/Images/safed-musli.webp",
  //   "model": "/models/safed-musli.glb",
  //   "description": "Safed Musli is a rare medicinal root known for its rejuvenating and aphrodisiac properties.",
  //   "audio": "/audio/safed-musli.mp3",
  //   "position": [0, 0, 0]
  // },
  // {
  //   "id": "kutki",
  //   "name": "Kutki (Picrorhiza kurroa)",
  //   "category": "Rare Medicinal",
  //   "uses": [
  //     "Improves liver function",
  //     "Treats jaundice",
  //     "Reduces fever",
  //     "Detoxifies the body"
  //   ],
  //   "image": "/Images/kutki.webp",
  //   "model": "/models/kutki.glb",
  //   "description": "Kutki is a bitter herb used for liver disorders and detoxification in Ayurveda.",
  //   "audio": "/audio/kutki.mp3",
  //   "position": [0, 0, 0]
  // },
  // {
  //   "id": "jivanti",
  //   "name": "Jivanti (Leptadenia reticulata)",
  //   "category": "Rare Medicinal",
  //   "uses": [
  //     "Improves vitality",
  //     "Supports lactation in women",
  //     "Strengthens immunity",
  //     "Used as anti-aging herb"
  //   ],
  //   "image": "/Images/jivanti.webp",
  //   "model": "/models/jivanti.glb",
  //   "description": "Jivanti is a rare herb valued for its rejuvenating and nourishing effects.",
  //   "audio": "/audio/jivanti.mp3",
  //   "position": [0, 0, 0]
  // },
  // {
  //   "id": "mucuna-pruriens",
  //   "name": "Mucuna Pruriens (Kaunch Beej)",
  //   "category": "Rare Medicinal",
  //   "uses": [
  //     "Improves brain function",
  //     "Increases fertility",
  //     "Boosts energy",
  //     "Supports nervous system"
  //   ],
  //   "image": "/Images/mucuna-pruriens.webp",
  //   "model": "/models/mucuna-pruriens.glb",
  //   "description": "Mucuna seeds are rich in L-Dopa, which supports brain and reproductive health.",
  //   "audio": "/audio/mucuna-pruriens.mp3",
  //   "position": [0, 0, 0]
  // },
  // {
  //   "id": "shankhpushpi",
  //   "name": "Shankhpushpi",
  //   "category": "Rare Medicinal",
  //   "uses": [
  //     "Boosts memory & concentration",
  //     "Reduces stress",
  //     "Improves sleep",
  //     "Supports mental health"
  //   ],
  //   "image": "/Images/shankhpushpi.webp",
  //   "model": "/models/shankhpushpi.glb",
  //   "description": "Shankhpushpi is a brain tonic in Ayurveda, widely used for memory enhancement.",
  //   "audio": "/audio/shankhpushpi.mp3",
  //   "position": [0, 0, 0]
  // },
  // {
  //   "id": "bhutkeshi",
  //   "name": "Bhutkeshi (Indian Valerian)",
  //   "category": "Rare Medicinal",
  //   "uses": [
  //     "Natural sedative",
  //     "Relieves anxiety",
  //     "Improves sleep quality",
  //     "Reduces stress"
  //   ],
  //   "image": "/Images/bhutkeshi.webp",
  //   "model": "/models/bhutkeshi.glb",
  //   "description": "Bhutkeshi root is a rare herb used for its calming and sleep-inducing effects.",
  //   "audio": "/audio/bhutkeshi.mp3",
  //   "position": [0, 0, 0]
  // },
  // {
  //   "id": "salampanja",
  //   "name": "Salampanja (Orchis latifolia)",
  //   "category": "Rare Medicinal",
  //   "uses": [
  //     "Aphrodisiac",
  //     "Boosts strength",
  //     "Improves immunity",
  //     "Used in Unani & Ayurveda"
  //   ],
  //   "image": "/Images/salampanja.webp",
  //   "model": "/models/salampanja.glb",
  //   "description": "Salampanja is a rare orchid root, used for vitality and energy enhancement.",
  //   "audio": "/audio/salampanja.mp3",
  //   "position": [0, 0, 0]
  // },
  // {
  //   "id": "chitrak",
  //   "name": "Chitrak (Plumbago zeylanica)",
  //   "category": "Rare Medicinal",
  //   "uses": [
  //     "Improves digestion",
  //     "Treats skin diseases",
  //     "Reduces inflammation",
  //     "Stimulates appetite"
  //   ],
  //   "image": "/Images/chitrak.webp",
  //   "model": "/models/chitrak.glb",
  //   "description": "Chitrak is a powerful digestive herb, used carefully due to its strong potency.",
  //   "audio": "/audio/chitrak.mp3",
  //   "position": [0, 0, 0]
  // },
  // {
  //   "id": "gandhapura",
  //   "name": "Gandhapura (Wintergreen)",
  //   "category": "Rare Medicinal",
  //   "uses": [
  //     "Pain relief oil",
  //     "Treats joint pain & arthritis",
  //     "Reduces inflammation",
  //     "Used in balms"
  //   ],
  //   "image": "/Images/gandhapura.webp",
  //   "model": "/models/gandhapura.glb",
  //   "description": "Gandhapura leaves produce an oil used in pain-relieving balms and ointments.",
  //   "audio": "/audio/gandhapura.mp3",
  //   "position": [0, 0, 0]
  // }
];

export default plants;
