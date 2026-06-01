import { ref, computed } from 'vue'

const LANGUAGE_STORAGE_KEY = 'bella-language'

const language = ref(typeof window !== 'undefined' ? localStorage.getItem(LANGUAGE_STORAGE_KEY) || 'eng' : 'eng')

function setLanguage(l) {
  language.value = l
  if (typeof window !== 'undefined') localStorage.setItem(LANGUAGE_STORAGE_KEY, l)
}

const translations = {
  eng: {
    nav: {
      home: 'Home', about: 'About', services: 'Services', gallery: 'Gallery', photos: 'Photos', videos: 'Videos', destination: 'Destination', north: 'Northern Province', south: 'Southern Province', west: 'Western Province', east: 'Eastern Province', kigali: 'Kigali City', contact: 'Contact'
    },
    home: {
      tag: 'Visit Rwanda Today',
      title: 'Explore The Beauty of Rwanda',
      subtitle: 'Discover breathtaking landscapes, vibrant culture, mountain gorillas, beautiful lakes, and unforgettable adventures in the Land of a Thousand Hills.'
    },
    service: {
      title: 'Our Travel Services',
      subtitle: 'From mountain gorillas and safari adventures to cultural experiences and city tours, we help you discover the best of Rwanda.'
    },
    photos: {
      title: 'Explore Rwanda Through Photos',
      subtitle: 'Browse a curated destination gallery of Rwanda’s top travel experiences, including wildlife, lakes, culture, and city life.'
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'We would love to hear from you.'
    }
    ,
    about: {
      tag: 'Discover Rwanda',
      headingPrefix: 'A Journey Through',
      headingHighlight: 'Nature & Culture',
      subtitle1: 'Explore breathtaking landscapes, rich traditions, and unforgettable adventures in the heart of Africa.',
      subtitle2: 'From the lively streets of Kigali to the calm shores of Lake Kivu and the incredible wildlife in Volcanoes National Park, every journey in Rwanda creates unforgettable memories.'
      ,
      ctaExplore: 'Explore Rwanda',
      ctaLearn: 'Learn More',
      stats: {
        visitors: 'Annual Visitors',
        attractions: 'Tourist Attractions',
        experience: 'Adventure Experience',
        rating: 'Visitor Satisfaction'
      }
    },
    south: {
      title: 'Southern Province',
      subtitle: 'Experience thrilling safaris and pristine natural landscapes.',
      cta: 'Plan Your Safari'
      ,
      about1: 'The Southern Province is the gateway to Rwanda\'s safari experiences. Home to the iconic Akagera National Park, this region showcases the country\'s diversity with vast savannas, acacia woodlands, and abundant wildlife. It\'s the perfect destination for those seeking adventure and authentic African landscapes.',
      about2: 'From big five safaris to bird watching, cultural village visits to pristine lakes, the Southern Province offers a complete Rwandan experience combined with natural beauty and warm hospitality.'
    },
    east: {
      title: 'Eastern Province',
      subtitle: 'Discover cultural heritage, scenic beauty, and agricultural traditions.',
      cta: 'Plan Your Visit'
      ,
      about1: 'The Eastern Province is known for its rich cultural heritage, agricultural significance, and historical importance. Home to vast tea plantations and rolling hills, this region offers insights into Rwanda\'s rural life, traditions, and economic development.',
      about2: 'Visit important memorials, explore tea estates, trek through hills, and connect with local communities who maintain traditional ways of life while embracing modern Rwanda.'
    },
    kigali: {
      title: 'Kigali City',
      subtitle: 'Experience Rwanda\'s vibrant capital with rich history and modern culture.',
      cta: 'Plan Your Trip',
      about1: "Kigali, Rwanda's capital and largest city, is a dynamic blend of history, culture, and modernity. Known as one of Africa's cleanest and safest cities, Kigali has transformed into a vibrant hub of commerce, art, and innovation.",
      about2: "From important genocide memorials and museums to contemporary art galleries, bustling markets, and excellent restaurants, Kigali offers diverse experiences for every visitor."
    },
    video: {
      title: "Discover Rwanda's Natural Wonders",
      subtitle: 'Experience breathtaking landscapes, vibrant culture, and unforgettable adventures.',
      cta: 'Watch Our Videos'
    }
  },
  kin: {
    nav: {
      home: 'Ahabanza', about: 'Ibyerekeye', services: 'Serivisi', gallery: 'Ishusho', photos: 'Amafoto', videos: 'Videwo', destination: 'Aho ugiye', north: 'Amajyaruguru', south: 'Amajyepfo', west: 'Uburengerazuba', east: 'Iburasirazuba', kigali: 'Umujyi wa Kigali', contact: 'Hamagara'
    },
    home: {
      tag: 'Sura u Rwanda uyu munsi',
      title: 'Sura ubwiza bwa Rwanda',
      subtitle: 'Menya imisozi itatse ubwiza, umuco ukungahaye, ingagi zo mu misozi, ibiyaga byiza, n’uburambe butazibagirana.'
    },
    service: {
      title: 'Serivisi z’Ingendo',
      subtitle: 'Uhereye ku ngendo z’ingagi kugera ku muco n’imijyi, turagufasha kwiga neza Rwanda.'
    },
    photos: {
      title: 'Sura u Rwanda mu Mafoto',
      subtitle: 'Reba amafoto y’ibice byiza by’igihugu: inyamaswa, ibiyaga, umuco, n’imijyi.'
    },
    contact: {
      title: 'Twandikire',
      subtitle: 'Turashaka kumva amakuru yawe.'
    }
    ,
    about: {
      tag: 'Sobanukirwa u Rwanda',
      headingPrefix: 'Inzira Iva',
      headingHighlight: 'Mu Mwuka n\'Umuco',
      subtitle1: 'Sura imisozi itatse ubwiza, imigenzo ikungahaye, n\'uburambe butazibagirana mu mutima wa Afurika.',
      subtitle2: 'Uhereye mu mijyi ya Kigali kugeza ku nkengero za Lake Kivu n\'inyamaswa za Volcanoes, buri rugendo mu Rwanda ruranga ibihe utazibagirwa.'
      ,
      ctaExplore: 'Sura u Rwanda',
      ctaLearn: 'Menya byinshi',
      stats: {
        visitors: 'Abasura buri mwaka',
        attractions: 'Ahantu nyaburanga',
        experience: 'Uburambe bw\'ingendo',
        rating: 'Ibyishimo by\'abasura'
      }
    },
    south: {
      title: 'Amajyaruguru',
      subtitle: 'Menya ingendo z\'amashami n\'ibirwa by\'ubwiza.',
      cta: 'Tegura Safari Yawe'
      ,
      about1: 'Amajyaruguru ni inzira y\'ingendo za safari mu Rwanda. Akagera National Park niyo ituma iyi karere igaragara, igaragaza ubwiza bw\'igihugu ku busitani, amashyamba, n\'inyamaswa nyinshi. Ni ahantu heza ku bashaka ubuhamya n\'ubwiza bwa Afurika.',
      about2: 'Guhera kuri safari z\'inyamaswa, kureba inyoni, gusura imidugudu y\'umuco kugeza ku biyaga byiza, Amajyaruguru atanga uburambe bwuzuye bwa Rwanda hamwe n\'ubwiza bw\'akamaro n\'umutima mwiza.'
    },
    east: {
      title: 'Iburasirazuba',
      subtitle: 'Sobanukirwa umuco, ubwiza bw\'ibyatsi, n\'ubuhinzi.',
      cta: 'Tegura Urugendo'
      ,
      about1: 'Iburasirazuba rizwi kubera umuco ukungahaye, akamaro k\'ubuhinzi, n\'akamaro k\'amateka. Hari ibibaya bya tea n\'imisiri, aho ushobora gusobanukirwa ubuzima bwo mu cyaro.',
      about2: 'Sura ibimenyetso by\'amateka, menya ibibanza by\'itea, ketura imisozi, kandi uhuze n\'imiryango y\'aho bakomeza umuco mu gihe banakoresha iterambere.'
    },
    kigali: {
      title: 'Umujyi wa Kigali',
      subtitle: 'Menya umujyi uhumeka umuco n\'iterambere rya Rwanda.',
      cta: 'Tegura Urugendo',
      about1: 'Kigali, umujyi wa Rwanda, ni umuvangavanze w\'amateka, umuco, n\'iterambere. Izwi nk\'umujyi usukuye kandi ufite umutekano, Kigali yabaye ihuriro ry\'ubucuruzi, ubuhanzi, n\'udushya.',
      about2: 'Uhereye ku byibutsa by\'amateka kugeza ku nzu ndangamurage, galerii z\'ubuhanzi, amasoko n\'amahoteri, Kigali itanga uburambe butandukanye.'
    },
    video: {
      title: "Sobanukirwa Ibikoresho By\'Ubwiza bwa Rwanda",
      subtitle: 'Menya imisozi, umuco, n\'uburambe butazibagirana.',
      cta: 'Reba Videwo Zacu'
    }
  },
  fra: {
    nav: {
      home: 'Accueil', about: 'À propos', services: 'Services', gallery: 'Galerie', photos: 'Photos', videos: 'Vidéos', destination: 'Destinations', north: 'Province du Nord', south: 'Province du Sud', west: 'Province de l’Ouest', east: 'Province de l’Est', kigali: 'Ville de Kigali', contact: 'Contact'
    },
    home: {
      tag: 'Visitez le Rwanda aujourd’hui',
      title: 'Explorez la beauté du Rwanda',
      subtitle: 'Découvrez des paysages à couper le souffle, une culture vibrante, des gorilles de montagne, de beaux lacs et des aventures inoubliables.'
    },
    service: {
      title: 'Nos Services de Voyage',
      subtitle: 'Des treks aux gorilles aux expériences culturelles et visites urbaines, nous vous aidons à découvrir le meilleur du Rwanda.'
    },
    photos: {
      title: 'Découvrez le Rwanda en photos',
      subtitle: 'Parcourez une galerie de destinations sélectionnées: faune, lacs, culture et vie urbaine.'
    },
    contact: {
      title: 'Contactez-nous',
      subtitle: 'Nous serions ravis de vous entendre.'
    }
    ,
    about: {
      tag: 'Découvrez le Rwanda',
      headingPrefix: 'Un Voyage à Travers',
      headingHighlight: 'la Nature et la Culture',
      subtitle1: 'Explorez des paysages à couper le souffle, des traditions riches et des aventures inoubliables au cœur de l\'Afrique.',
      subtitle2: 'Des rues animées de Kigali aux rives paisibles du lac Kivu et à la faune incroyable du parc des volcans, chaque voyage au Rwanda crée des souvenirs inoubliables.'
      ,
      ctaExplore: 'Explorez le Rwanda',
      ctaLearn: 'En savoir plus',
      stats: {
        visitors: "Visiteurs annuels",
        attractions: "Attractions touristiques",
        experience: "Expérience d'aventure",
        rating: "Satisfaction des visiteurs"
      }
    },
    south: {
      title: 'Province du Sud',
      subtitle: 'Vivez des safaris palpitants et des paysages naturels préservés.',
      cta: 'Planifiez votre safari'
      ,
      about1: 'La Province du Sud est la porte d\'entrée des safaris du Rwanda. Le parc national d\'Akagera en est l\'emblème, et la région montre la diversité du pays avec de vastes savanes, des forêts d\'acacias et une faune abondante. C\'est la destination idéale pour ceux qui recherchent l\'aventure et des paysages africains authentiques.',
      about2: 'Des safaris du big five à l\'observation des oiseaux, des visites de villages culturels aux lacs immaculés, la Province du Sud offre une expérience rwandaise complète combinant beauté naturelle et hospitalité chaleureuse.'
    },
    east: {
      title: 'Province de l\'Est',
      subtitle: 'Découvrez le patrimoine culturel, la beauté paysagère et les traditions agricoles.',
      cta: 'Planifiez votre visite'
      ,
      about1: 'La Province de l\'Est est connue pour son riche patrimoine culturel, son importance agricole et son rôle historique. Avec ses vastes plantations de thé et ses collines, la région offre un aperçu de la vie rurale rwandaise.',
      about2: 'Visitez des mémoriaux importants, explorez des domaines de thé, randonnez dans les collines et rencontrez des communautés locales qui préservent leurs traditions tout en adoptant le Rwanda moderne.'
    },
    kigali: {
      title: 'Ville de Kigali',
      subtitle: 'Découvrez la capitale dynamique du Rwanda, riche en histoire et culture moderne.',
      cta: 'Planifiez votre voyage',
      about1: "Kigali, capitale du Rwanda, est un mélange dynamique d'histoire, de culture et de modernité. Connue comme l'une des villes les plus propres et les plus sûres d'Afrique, Kigali est devenue un centre vibrant de commerce, d'art et d'innovation.",
      about2: "Des mémoriaux importants aux galeries d'art contemporaines, en passant par les marchés animés et d'excellents restaurants, Kigali offre des expériences variées pour tous les visiteurs."
    },
    video: {
      title: 'Découvrez les merveilles naturelles du Rwanda',
      subtitle: 'Vivez des paysages à couper le souffle, une culture vibrante et des aventures inoubliables.',
      cta: 'Regardez nos vidéos'
    }
  }
}

function t(path) {
  const parts = path.split('.')
  let cur = translations[language.value]
  for (const p of parts) {
    if (!cur) return ''
    cur = cur[p]
  }
  return cur || ''
}

const navLabels = computed(() => translations[language.value].nav)

export function useI18n() {
  return { language, setLanguage, t, navLabels }
}

export default useI18n
