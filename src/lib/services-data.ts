import type { FAQ } from '@/types';

export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  description: string;
  heroDescription: string;
  overview: string[];
  whenNeeded: string[];
  benefits: string[];
  procedure: { heading: string; description: string }[];
  recovery: string[];
  cost: string;
  faqs: FAQ[];
}

const SERVICES: ServiceData[] = [
  {
    slug: 'root-canal-treatment-golaghat',
    title: 'Root Canal Treatment',
    shortTitle: 'Root Canal',
    category: 'Restorative Dentistry',
    description:
      'Pain-free root canal treatment in Golaghat. Save your natural tooth with modern, comfortable endodontic therapy.',
    heroDescription:
      'Modern root canal therapy is comfortable, precise, and often completed in a single visit. Relieve pain and save your natural tooth.',
    overview: [
      'Root canal treatment (endodontic therapy) is a procedure designed to save a tooth that is severely infected or decayed. Contrary to popular belief, modern root canal treatment is virtually pain-free and can often be completed in one or two visits.',
      'The procedure involves removing the infected pulp from inside the tooth, thoroughly cleaning and disinfecting the root canal system, and then sealing it to prevent reinfection. The result is a tooth that can function normally for years to come.',
    ],
    whenNeeded: [
      'Persistent toothache, especially when chewing or applying pressure',
      'Prolonged sensitivity to hot or cold temperatures',
      'Darkening or discolouration of the tooth',
      'Swelling and tenderness in the surrounding gums',
      'A recurring pimple on the gum near the affected tooth',
      'Deep decay or a crack that has reached the pulp',
    ],
    benefits: [
      'Saves your natural tooth — no need for extraction',
      'Eliminates pain caused by infected pulp',
      'Restores normal chewing function',
      'Prevents infection from spreading to neighbouring teeth',
      'Protects surrounding bone from deterioration',
      'More cost-effective long-term than extraction + replacement',
    ],
    procedure: [
      {
        heading: 'Examination and Diagnosis',
        description:
          'We examine the affected tooth and take digital X-rays to assess the extent of infection and determine if root canal therapy is the right option.',
      },
      {
        heading: 'Anaesthesia and Isolation',
        description:
          'The area is numbed with local anaesthesia to ensure complete comfort. A rubber dam is placed around the tooth to keep it dry and clean throughout the procedure.',
      },
      {
        heading: 'Pulp Removal and Cleaning',
        description:
          'A small access opening is made in the tooth crown. The infected pulp is removed, and the root canals are thoroughly cleaned, shaped, and disinfected.',
      },
      {
        heading: 'Sealing and Restoration',
        description:
          'After cleaning, the canals are filled with a biocompatible material and sealed. A temporary or permanent crown is placed to protect and restore the tooth.',
      },
    ],
    recovery: [
      'Mild soreness for a few days — manageable with over-the-counter pain relievers',
      'Avoid chewing on the treated tooth until the final restoration is placed',
      'Maintain normal oral hygiene, but be gentle around the treated area',
      'Follow up for crown placement if a temporary restoration was used',
      'Most patients return to normal activities the next day',
    ],
    cost:
      'The cost of root canal treatment varies depending on the tooth location and number of canals. We provide a detailed treatment plan with transparent pricing before starting.',
    faqs: [
      {
        question: 'Does root canal treatment hurt?',
        answer:
          'With modern anaesthesia and techniques, root canal treatment is no more uncomfortable than a routine filling. Most patients report feeling relief once the infected pulp is removed.',
      },
      {
        question: 'How long does a root canal last?',
        answer:
          'With proper restoration and good oral hygiene, a root canal-treated tooth can last a lifetime. Regular dental check-ups help ensure its longevity.',
      },
      {
        question: 'Is a crown necessary after root canal treatment?',
        answer:
          'Yes, in most cases. After root canal therapy, the tooth becomes more brittle. A crown protects it from fracture and restores full function.',
      },
    ],
  },
  {
    slug: 'teeth-whitening-golaghat',
    title: 'Teeth Whitening',
    shortTitle: 'Teeth Whitening',
    category: 'Cosmetic Dentistry',
    description:
      'Professional teeth whitening in Golaghat. Safe, effective, and noticeable results in a single session.',
    heroDescription:
      'Professional whitening for visibly brighter smiles. Safe, effective, and noticeable results in a single session.',
    overview: [
      'Professional teeth whitening is the safest and most effective way to brighten your smile. Unlike over-the-counter products, our in-clinic treatment uses medical-grade bleaching agents that deliver visible results in a single appointment.',
      'We begin with a thorough assessment to ensure your teeth and gums are healthy enough for whitening. The procedure is customised to your needs, with protective measures to ensure gum comfort throughout.',
    ],
    whenNeeded: [
      'Teeth stained from coffee, tea, or red wine consumption',
      'Yellowing caused by tobacco use',
      'Age-related darkening of enamel',
      'Discolouration from certain medications',
      'Desire for a brighter, more confident smile before an event',
      'Uneven tooth colour affecting your smile aesthetics',
    ],
    benefits: [
      'Visible results in a single session — up to several shades brighter',
      'Professionally supervised for maximum safety',
      'Longer-lasting results than drugstore products',
      'Custom treatment for sensitivity management',
      'Boosts confidence and enhances facial appearance',
      'Quick procedure with no downtime',
    ],
    procedure: [
      {
        heading: 'Assessment and Shade Recording',
        description:
          'We examine your teeth and gums, take a baseline shade reading, and discuss your desired level of whitening.',
      },
      {
        heading: 'Protection and Preparation',
        description:
          'Gums are carefully protected with a barrier to prevent irritation. The whitening gel is then applied to the tooth surfaces.',
      },
      {
        heading: 'Activation and Monitoring',
        description:
          'The whitening agent is activated and monitored throughout the session. Multiple short applications may be used to achieve optimal results.',
      },
      {
        heading: 'Finishing and Aftercare',
        description:
          'After the final application, the gel is removed and results are assessed. We provide personalised aftercare instructions to maintain your brighter smile.',
      },
    ],
    recovery: [
      'Temporary sensitivity to cold is normal and subsides within 24–48 hours',
      'Avoid strongly coloured foods and drinks for 48 hours',
      'Use the provided sensitivity toothpaste as recommended',
      'Touch-ups may be needed every 6–12 months depending on lifestyle',
      'Maintain regular brushing and flossing to prolong results',
    ],
    cost:
      'Professional teeth whitening is an investment in your confidence. We offer competitive pricing and will discuss all costs during your consultation.',
    faqs: [
      {
        question: 'Is professional whitening safe?',
        answer:
          'Yes. When performed by a dental professional, whitening is very safe. We take precautions to protect your gums and monitor the process to avoid over-bleaching.',
      },
      {
        question: 'How long do results last?',
        answer:
          'Results typically last 6–12 months with proper care. Avoiding staining foods and maintaining good oral hygiene helps prolong the brightness.',
      },
      {
        question: 'Can whitening damage enamel?',
        answer:
          'No. Professional whitening agents are designed to be safe for enamel. They break down stains without affecting the tooth structure.',
      },
    ],
  },
  {
    slug: 'dental-implants-golaghat',
    title: 'Dental Implants',
    shortTitle: 'Dental Implants',
    category: 'Restorative Dentistry',
    description:
      'Permanent, natural-looking dental implants in Golaghat. Restore function and aesthetics with lasting results.',
    heroDescription:
      'Permanent, natural-looking replacement for missing teeth. Implants restore full function and prevent bone loss.',
    overview: [
      'Dental implants are the gold standard for replacing missing teeth. A small titanium post is surgically placed into the jawbone, where it fuses naturally with the bone to create a stable foundation for a replacement tooth.',
      'Unlike dentures or bridges, implants stimulate the bone to prevent deterioration and feel just like natural teeth. They are designed to last a lifetime with proper care.',
    ],
    whenNeeded: [
      'One or more missing teeth affecting your smile or chewing',
      'Loose or uncomfortable dentures that need stabilisation',
      'A failed bridge or damaged natural tooth that cannot be saved',
      'Bone loss in the jaw from long-standing tooth absence',
      'Desire for a permanent tooth replacement solution',
      'Difficulty chewing or speaking due to missing teeth',
    ],
    benefits: [
      'Looks, feels, and functions like a natural tooth',
      'Prevents bone loss and preserves facial structure',
      'No need to alter adjacent healthy teeth (unlike bridges)',
      'Permanent solution — can last a lifetime with proper care',
      'Restores full chewing ability and speech clarity',
      'High success rate — over 95% in healthy patients',
    ],
    procedure: [
      {
        heading: 'Consultation and Treatment Planning',
        description:
          'We assess your oral health, take 3D scans, and develop a personalised implant plan. If bone grafting is needed, it is discussed at this stage.',
      },
      {
        heading: 'Implant Placement Surgery',
        description:
          'The titanium implant is precisely placed into the jawbone under local anaesthesia. The site is then allowed to heal and integrate with the bone over several months.',
      },
      {
        heading: 'Healing and Osseointegration',
        description:
          'Over 3–6 months, the implant fuses with the jawbone in a process called osseointegration. A temporary restoration may be worn during this period.',
      },
      {
        heading: 'Final Restoration',
        description:
          'Once healing is complete, a custom-made crown is attached to the implant. The result is a natural-looking, fully functional tooth.',
      },
    ],
    recovery: [
      'Mild swelling and discomfort for a few days after surgery',
      'Soft food diet recommended during the initial healing phase',
      'Avoid strenuous activity for the first week',
      'Good oral hygiene is essential — special cleaning aids may be recommended',
      'Regular follow-up visits to monitor implant integration',
    ],
    cost:
      'Dental implants are a long-term investment in your oral health. We provide a detailed treatment plan with all costs explained upfront, including any additional procedures like bone grafting if required.',
    faqs: [
      {
        question: 'Are dental implants painful?',
        answer:
          'The procedure is performed under local anaesthesia, so you will not feel pain during surgery. Post-operative discomfort is typically mild and manageable with pain relievers.',
      },
      {
        question: 'How long do dental implants take?',
        answer:
          'The entire process takes 3–6 months from implant placement to final restoration. This allows for proper healing and osseointegration.',
      },
      {
        question: 'Am I a candidate for dental implants?',
        answer:
          'Most healthy adults with adequate bone density are candidates. We conduct a thorough evaluation to determine your suitability and discuss alternatives if needed.',
      },
    ],
  },
  {
    slug: 'braces-orthodontics-golaghat',
    title: 'Braces and Orthodontics',
    shortTitle: 'Braces',
    category: 'Specialty Care',
    description:
      'Straighten your smile with braces and orthodontic treatment in Golaghat. Options for children, teens, and adults.',
    heroDescription:
      'Straighten your smile and improve your bite with modern orthodontic treatment. Options available for all ages.',
    overview: [
      'Orthodontic treatment corrects misaligned teeth and bite issues, improving both aesthetics and oral function. We offer a range of options including traditional braces and modern alternatives to suit different needs and preferences.',
      'Treatment not only creates a beautiful smile but also makes cleaning easier, reduces the risk of tooth decay, and alleviates strain on the jaw joints.',
    ],
    whenNeeded: [
      'Crowded, crooked, or overlapping teeth',
      'Gaps between teeth affecting appearance or function',
      'Overbite, underbite, or crossbite issues',
      'Difficulty chewing or biting properly',
      'Jaw pain or clicking sounds',
      'Teeth that wear unevenly due to misalignment',
    ],
    benefits: [
      'A straighter, more confident smile',
      'Improved oral hygiene — straight teeth are easier to clean',
      'Reduced risk of tooth decay and gum disease',
      'Better chewing function and speech',
      'Prevents uneven wear on tooth surfaces',
      'Can alleviate jaw pain and headaches from bite problems',
    ],
    procedure: [
      {
        heading: 'Initial Consultation and Assessment',
        description:
          'We evaluate your teeth, jaw, and bite, take X-rays and impressions, and discuss your goals to create a personalised treatment plan.',
      },
      {
        heading: 'Appliance Placement',
        description:
          'Braces or aligners are fitted to gradually guide your teeth into their ideal positions. The process is gentle and carefully planned.',
      },
      {
        heading: 'Regular Adjustment Visits',
        description:
          'Periodic visits — typically every 4–8 weeks — to adjust the appliance and monitor progress. Each adjustment gently moves teeth closer to their final position.',
      },
      {
        heading: 'Retention and Follow-Up',
        description:
          'After active treatment, retainers are provided to maintain your results. Follow-up visits ensure your smile stays in place long-term.',
      },
    ],
    recovery: [
      'Mild discomfort for 2–3 days after each adjustment — normal as teeth begin to move',
      'Soft foods recommended immediately after adjustments',
      'Extra care needed for brushing and flossing around brackets and wires',
      'Avoid sticky, hard, or sugary foods that can damage braces',
      'Wear retainers as instructed after treatment to prevent relapse',
    ],
    cost:
      'Orthodontic treatment is an investment that varies based on complexity and duration. We provide a clear treatment plan with all costs itemised before you begin.',
    faqs: [
      {
        question: 'At what age should orthodontic treatment start?',
        answer:
          'An orthodontic evaluation is recommended by age 7. Early detection allows us to guide jaw growth and create space for permanent teeth.',
      },
      {
        question: 'Are braces only for children?',
        answer:
          'Not at all. Adult orthodontics is increasingly popular. It is never too late to achieve a straighter, healthier smile.',
      },
      {
        question: 'How long does orthodontic treatment take?',
        answer:
          'Treatment duration varies based on the complexity of the case, typically ranging from 12 to 24 months for most patients.',
      },
    ],
  },
  {
    slug: 'pediatric-dentistry-golaghat',
    title: 'Pediatric Dentistry',
    shortTitle: 'Children\'s Dentistry',
    category: 'Specialty Care',
    description:
      'Gentle, child-friendly dental care in Golaghat. Building positive dental habits from an early age.',
    heroDescription:
      'Gentle, child-friendly dental care that builds trust and positive habits from the very first visit.',
    overview: [
      'Pediatric dentistry focuses on the oral health of children from infancy through adolescence. Our team is trained to make children feel comfortable, safe, and even excited about visiting the dentist.',
      'We believe that early positive experiences shape a lifetime of good oral health habits. Every visit is designed to be fun, educational, and stress-free.',
    ],
    whenNeeded: [
      'First dental visit by age 1 or within 6 months of the first tooth erupting',
      'Regular check-ups and cleanings every six months',
      'Cavities or tooth decay in baby or permanent teeth',
      'Teething discomfort and oral development concerns',
      'Thumb-sucking or pacifier habits affecting tooth alignment',
      'Fluoride treatments and dental sealants for cavity prevention',
    ],
    benefits: [
      'Early detection and prevention of dental problems',
      'Builds positive associations with dental care from a young age',
      'Education on proper brushing, flossing, and dietary habits',
      'Preventive treatments reduce the risk of future cavities',
      'Monitoring of jaw growth and tooth eruption patterns',
      'Peace of mind for parents knowing their child is in expert hands',
    ],
    procedure: [
      {
        heading: 'Welcome and Familiarisation',
        description:
          'We introduce your child to the clinic environment in a friendly, non-threatening way. The first visit is often a short, positive experience — a ride in the chair, a tooth count, and lots of encouragement.',
      },
      {
        heading: 'Gentle Examination',
        description:
          'We check your child\'s teeth, gums, and oral development using a gentle, tell-show-do approach. Everything is explained in age-appropriate language.',
      },
      {
        heading: 'Preventive Care',
        description:
          'Professional cleaning, fluoride application, and dental sealants are applied as needed to protect young teeth from decay.',
      },
      {
        heading: 'Parent Guidance',
        description:
          'We provide personalised advice on brushing techniques, dietary choices, and habits to support your child\'s oral health at home.',
      },
    ],
    recovery: [
      'No recovery time needed for routine check-ups and cleanings',
      'Mild numbness after fluoride treatment — resolves within minutes',
      'Normal eating and activities can resume immediately',
      'Encourage your child to brush gently if any sensitivity occurs',
      'Follow any specific aftercare instructions provided for treatments',
    ],
    cost:
      'We believe in accessible dental care for all children. Treatment costs are discussed upfront, and we help you understand insurance coverage or payment options.',
    faqs: [
      {
        question: 'When should I bring my child for their first dental visit?',
        answer:
          'The first visit should be by age 1 or within 6 months of the first tooth appearing. Early visits help prevent problems and build comfort.',
      },
      {
        question: 'How can I prepare my child for a dental visit?',
        answer:
          'Speak positively about the visit. Read children\'s books about going to the dentist. Avoid using words like "pain" or "needle." Our team is skilled at making first visits enjoyable.',
      },
      {
        question: 'Are dental X-rays safe for children?',
        answer:
          'Yes. Modern digital X-rays use minimal radiation — significantly less than traditional film. We follow ALARA (As Low As Reasonably Achievable) principles and use lead aprons for protection.',
      },
    ],
  },
  {
    slug: 'emergency-dental-care-golaghat',
    title: 'Emergency Dental Care',
    shortTitle: 'Emergency Care',
    category: 'Specialty Care',
    description:
      'Same-day emergency dental care in Golaghat. Fast relief for toothaches, injuries, and urgent dental problems.',
    heroDescription:
      'Same-day emergency appointments available. Fast relief when you need it most.',
    overview: [
      'Dental emergencies can be painful and stressful. We offer same-day appointments for urgent dental problems, providing fast relief and effective treatment when you need it most.',
      'From severe toothaches to knocked-out teeth, our team is equipped to handle a wide range of dental emergencies with compassion and efficiency.',
    ],
    whenNeeded: [
      'Severe toothache that does not subside with pain relievers',
      'Knocked-out or loosened tooth from injury or accident',
      'Cracked, chipped, or fractured tooth causing pain',
      'Lost filling or crown leaving the tooth exposed',
      'Abscess or swelling in the gum or face',
      'Uncontrolled bleeding from the mouth',
    ],
    benefits: [
      'Same-day appointments for urgent cases',
      'Fast pain relief and treatment',
      'Prevention of further damage or infection spread',
      'Preservation of natural teeth whenever possible',
      'Comprehensive care — from emergency treatment to follow-up',
      'Peace of mind knowing help is available when you need it',
    ],
    procedure: [
      {
        heading: 'Immediate Assessment',
        description:
          'We evaluate the urgency of your situation, take any necessary X-rays, and diagnose the problem quickly so treatment can begin without delay.',
      },
      {
        heading: 'Pain Management',
        description:
          'Local anaesthesia is administered to ensure your comfort. For infections, antibiotics may be prescribed before or alongside treatment.',
      },
      {
        heading: 'Emergency Treatment',
        description:
          'Depending on the diagnosis, we perform the necessary procedure — whether it is a temporary filling, tooth reimplantation, root canal therapy, or extraction.',
      },
      {
        heading: 'Follow-Up Plan',
        description:
          'We provide aftercare instructions and schedule a follow-up visit to complete any ongoing treatment, such as a permanent restoration.',
      },
    ],
    recovery: [
      'Follow specific aftercare instructions based on the procedure performed',
      'Take prescribed medications as directed',
      'Apply ice packs to reduce swelling if needed',
      'Avoid eating on the affected side until follow-up',
      'Contact us immediately if symptoms worsen',
    ],
    cost:
      'Emergency dental care costs depend on the treatment required. We discuss all fees before proceeding and offer flexible payment options.',
    faqs: [
      {
        question: 'What should I do if a tooth is knocked out?',
        answer:
          'Handle the tooth by the crown only (not the root). Rinse gently with water, place it back in the socket if possible, or store it in milk. Contact us immediately — time is critical.',
      },
      {
        question: 'Do you accept walk-in emergency patients?',
        answer:
          'Yes. While we recommend calling ahead, we do our best to accommodate walk-in emergencies. Call us for the fastest response.',
      },
      {
        question: 'Can a cracked tooth be saved?',
        answer:
          'In many cases, yes. The treatment depends on the severity and location of the crack. We will assess and recommend the best option to save your tooth.',
      },
    ],
  },
  {
    slug: 'general-dentistry-golaghat',
    title: 'General Dentistry',
    shortTitle: 'General Dentistry',
    category: 'General Dentistry',
    description:
      'Comprehensive general dentistry in Golaghat. Regular check-ups, cleanings, and preventive care for the whole family.',
    heroDescription:
      'Routine care that keeps your smile healthy. Check-ups, cleanings, and preventive treatments for every member of the family.',
    overview: [
      'General dentistry forms the foundation of good oral health. Regular check-ups and professional cleanings help prevent dental problems before they start, saving you time, discomfort, and expense.',
      'We provide comprehensive examinations that go beyond just checking for cavities — we assess your gum health, oral cancer risk, bite alignment, and overall oral health to create a complete picture of your well-being.',
    ],
    whenNeeded: [
      'Routine dental check-up every six months',
      'Professional cleaning to remove plaque and tartar buildup',
      'Persistent bad breath or unpleasant taste in the mouth',
      'Bleeding gums while brushing or flossing',
      'Visible stains or discolouration on teeth',
      'General oral health assessment and maintenance',
    ],
    benefits: [
      'Early detection of dental problems before they become serious',
      'Professional cleaning removes plaque you cannot reach at home',
      'Prevents gum disease and tooth decay',
      'Saves money by avoiding costly treatments later',
      'Fresh breath and a cleaner, brighter smile',
      'Personalised advice for your home care routine',
    ],
    procedure: [
      {
        heading: 'Health History Review',
        description:
          'We update your medical and dental history to understand any changes that may affect your oral health.',
      },
      {
        heading: 'Comprehensive Examination',
        description:
          'We examine your teeth, gums, bite, and oral tissues. Digital X-rays are taken as needed to detect issues not visible to the naked eye.',
      },
      {
        heading: 'Professional Cleaning',
        description:
          'Plaque and tartar are removed from all tooth surfaces, followed by polishing and flossing. A fluoride treatment may be applied for extra protection.',
      },
      {
        heading: 'Treatment Plan Discussion',
        description:
          'We discuss our findings with you, answer any questions, and recommend any necessary treatments or preventive measures.',
      },
    ],
    recovery: [
      'No recovery time needed — return to normal activities immediately',
      'Teeth may feel slightly sensitive after cleaning, which resolves quickly',
      'Avoid staining foods and drinks for a few hours after polishing',
      'Continue regular brushing and flossing as instructed',
      'Schedule your next visit in six months',
    ],
    cost:
      'Routine check-ups and cleanings are an affordable investment in your health. We accept most insurance plans and discuss costs transparently.',
    faqs: [
      {
        question: 'How often should I visit the dentist?',
        answer:
          'We recommend a check-up and professional cleaning every six months. Regular visits help detect problems early and keep your smile healthy.',
      },
      {
        question: 'What happens during a routine check-up?',
        answer:
          'A routine visit includes a thorough examination of your teeth and gums, professional cleaning, and a discussion of any concerns or treatment needs.',
      },
      {
        question: 'Is dental cleaning painful?',
        answer:
          'Professional cleaning is generally painless. If you have sensitive teeth or gum disease, we can adjust our approach to ensure your comfort.',
      },
    ],
  },
  {
    slug: 'dental-cleaning-golaghat',
    title: 'Dental Cleaning',
    shortTitle: 'Dental Cleaning',
    category: 'General Dentistry',
    description:
      'Professional dental cleaning in Golaghat. Remove plaque, tartar, and stains for a healthier, brighter smile.',
    heroDescription:
      'Professional cleaning removes built-up plaque and tartar that brushing alone cannot reach. Fresher breath, healthier gums.',
    overview: [
      'Professional dental cleaning, also known as prophylaxis, is a preventive procedure that removes plaque, tartar, and surface stains from your teeth. Even with diligent brushing and flossing, some deposits harden into calculus that can only be removed by a dental professional.',
      'Regular cleanings are essential for preventing gum disease, cavities, and bad breath. They also give us an opportunity to spot potential problems early.',
    ],
    whenNeeded: [
      'Routine cleaning every six months as part of preventive care',
      'Visible tartar buildup along the gumline',
      'Bleeding or tender gums during brushing',
      'Persistent bad breath that does not improve with brushing',
      'Surface stains from coffee, tea, or tobacco',
      'Before a special event for a brighter smile',
    ],
    benefits: [
      'Removes hardened tartar that home brushing cannot eliminate',
      'Reduces the risk of gum disease and tooth decay',
      'Leaves teeth feeling smooth and looking brighter',
      'Freshens breath by removing bacteria',
      'Gives your gums a healthy pink appearance',
      'Complements your daily oral hygiene routine',
    ],
    procedure: [
      {
        heading: 'Physical Examination',
        description:
          'A thorough examination of your mouth is conducted before cleaning begins to identify any areas of concern.',
      },
      {
        heading: 'Plaque and Tartar Removal',
        description:
          'Using a scaler, we gently remove plaque and tartar from around the gumline and between teeth. This step may take longer if significant buildup is present.',
      },
      {
        heading: 'Polishing',
        description:
          'A high-powered brush and gritty toothpaste are used to polish the teeth, removing surface stains and leaving your smile smooth and shiny.',
      },
      {
        heading: 'Fluoride Treatment',
        description:
          'A fluoride application helps strengthen enamel and protect against cavities until your next visit.',
      },
    ],
    recovery: [
      'No downtime — you can resume normal activities immediately',
      'Teeth may feel slightly sensitive to cold for a few hours',
      'Avoid dark-coloured beverages for 30 minutes after fluoride treatment',
      'Enjoy the smooth, clean feeling of your refreshed smile',
    ],
    cost:
      'Professional cleaning is a routine preventive procedure with affordable pricing. We accept most insurance plans and provide clear cost information.',
    faqs: [
      {
        question: 'How is professional cleaning different from brushing at home?',
        answer:
          'Professional cleaning removes hardened tartar that brushing and flossing cannot touch. It also reaches areas that are difficult to access with a toothbrush.',
      },
      {
        question: 'Does dental cleaning hurt?',
        answer:
          'Most patients experience no pain. If you have sensitive gums or significant buildup, you may feel some mild discomfort, which we can minimise with a gentle approach.',
      },
      {
        question: 'How long does a cleaning appointment take?',
        answer:
          'A typical cleaning appointment takes about 30–45 minutes. It may be longer if there is significant tartar buildup or if additional treatments are needed.',
      },
    ],
  },
  {
    slug: 'dental-fillings-golaghat',
    title: 'Dental Fillings',
    shortTitle: 'Fillings',
    category: 'General Dentistry',
    description:
      'Tooth-coloured dental fillings in Golaghat. Restore decayed teeth with natural-looking, durable materials.',
    heroDescription:
      'Tooth-coloured fillings that blend naturally with your smile. Restore decayed teeth comfortably and durably.',
    overview: [
      'Dental fillings are used to restore teeth damaged by decay. We use tooth-coloured composite resin materials that blend seamlessly with your natural teeth — no unsightly metal fillings.',
      'Composite fillings bond directly to the tooth structure, providing excellent durability while preserving more of your natural tooth compared to traditional amalgam fillings.',
    ],
    whenNeeded: [
      'Cavities or tooth decay detected during a routine check-up',
      'Sensitivity to hot, cold, or sweet foods indicating decay',
      'Visible holes or dark spots on tooth surfaces',
      'Chipped or fractured small areas of a tooth',
      'Worn-down tooth surfaces from grinding or clenching',
      'Replacing old, deteriorating metal fillings',
    ],
    benefits: [
      'Tooth-coloured appearance — completely natural-looking',
      'Bonds directly to the tooth for a stronger restoration',
      'Preserves more natural tooth structure than amalgam',
      'Sets quickly — completed in a single appointment',
      'Contains no mercury or metals',
      'Resistant to wear and suitable for most cavities',
    ],
    procedure: [
      {
        heading: 'Anaesthesia and Preparation',
        description:
          'The area is numbed for comfort. Decayed tooth material is gently removed using a dental drill or laser, leaving a clean cavity.',
      },
      {
        heading: 'Tooth Preparation',
        description:
          'The cavity is cleaned and shaped to ensure the filling bonds securely. The tooth is etched with a gentle gel to prepare the surface.',
      },
      {
        heading: 'Filling Placement',
        description:
          'The composite resin is applied in layers, with each layer hardened using a special curing light. The material is shaped to match the natural contours of your tooth.',
      },
      {
        heading: 'Finishing and Polishing',
        description:
          'The filling is trimmed, shaped, and polished to match your bite and feel completely smooth against your tongue.',
      },
    ],
    recovery: [
      'Numbness wears off in 1–3 hours — avoid eating until feeling returns',
      'Mild sensitivity to temperature for a few days is normal',
      'The filling may feel slightly different at first — your bite adjusts quickly',
      'Brush and floss normally once numbness subsides',
      'Contact us if the filling feels uneven or uncomfortable',
    ],
    cost:
      'The cost of a filling depends on the size and location of the cavity. We use high-quality composite materials and provide transparent pricing.',
    faqs: [
      {
        question: 'How long do dental fillings last?',
        answer:
          'With proper care, composite fillings last 5–10 years on average. Regular check-ups allow us to monitor their condition and replace them when needed.',
      },
      {
        question: 'Are tooth-coloured fillings as strong as silver fillings?',
        answer:
          'Modern composite materials are highly durable and bond directly to the tooth, which can actually strengthen it. They are suitable for most cavities.',
      },
      {
        question: 'Does getting a filling hurt?',
        answer:
          'The procedure is performed under local anaesthesia, so you should feel no pain. Some patients feel mild sensitivity afterwards, which resolves quickly.',
      },
    ],
  },
  {
    slug: 'crowns-bridges-golaghat',
    title: 'Crowns and Bridges',
    shortTitle: 'Crowns & Bridges',
    category: 'Restorative Dentistry',
    description:
      'Custom dental crowns and bridges in Golaghat. Restore damaged teeth and replace missing ones with natural-looking restorations.',
    heroDescription:
      'Custom crowns and bridges that restore function and aesthetics. Durable, natural-looking solutions for damaged or missing teeth.',
    overview: [
      'Dental crowns are custom-made caps that cover a damaged tooth to restore its shape, size, strength, and appearance. Bridges are used to replace one or more missing teeth by anchoring artificial teeth to the adjacent healthy teeth.',
      'Both options are crafted from high-quality materials that match the colour and translucency of your natural teeth, providing seamless, long-lasting results.',
    ],
    whenNeeded: [
      'A tooth too decayed or weakened for a filling to repair',
      'After a root canal treatment to protect the restored tooth',
      'A cracked, fractured, or worn-down tooth',
      'One or more missing teeth affecting your smile or chewing',
      'A bridge to prevent neighbouring teeth from shifting into gaps',
      'Improving the appearance of a misshapen or discoloured tooth',
    ],
    benefits: [
      'Restores full chewing function',
      'Natural appearance that blends with surrounding teeth',
      'Protects weak or cracked teeth from further damage',
      'Prevents adjacent teeth from shifting into gaps',
      'Long-lasting solution with proper care — 10–15 years or more',
      'Custom-made for a precise, comfortable fit',
    ],
    procedure: [
      {
        heading: 'Tooth Preparation and Impression',
        description:
          'The tooth is reshaped to accommodate the crown or bridge. An impression is taken to create a precise model for the dental laboratory.',
      },
      {
        heading: 'Temporary Restoration',
        description:
          'A temporary crown or bridge is placed to protect the prepared tooth while the permanent restoration is being fabricated.',
      },
      {
        heading: 'Custom Fabrication',
        description:
          'The permanent crown or bridge is crafted in a dental laboratory to match your tooth colour, shape, and bite perfectly.',
      },
      {
        heading: 'Final Placement',
        description:
          'The temporary restoration is removed, and the permanent crown or bridge is cemented into place. Adjustments are made to ensure a comfortable bite.',
      },
    ],
    recovery: [
      'Mild sensitivity to temperature is normal for a few days',
      'Avoid sticky or hard foods on the restoration for 24 hours',
      'Brush and floss normally, paying attention to the gumline around the restoration',
      'Use a floss threader or water flosser to clean under bridges',
      'Regular check-ups to monitor the restoration',
    ],
    cost:
      'Crowns and bridges are custom restorations, and costs vary based on materials and complexity. We discuss all options and pricing during your consultation.',
    faqs: [
      {
        question: 'How long does a crown or bridge last?',
        answer:
          'With proper oral hygiene and regular check-ups, crowns and bridges can last 10–15 years or longer before needing replacement.',
      },
      {
        question: 'Does getting a crown hurt?',
        answer:
          'Tooth preparation is performed under local anaesthesia, so the procedure is comfortable. Some sensitivity after the anaesthesia wears off is normal and temporary.',
      },
      {
        question: 'Are crowns noticeable?',
        answer:
          'Modern crowns are made from tooth-coloured materials like porcelain or ceramic and are designed to match your natural teeth perfectly. They are virtually indistinguishable.',
      },
    ],
  },
  {
    slug: 'dentures-golaghat',
    title: 'Dentures',
    shortTitle: 'Dentures',
    category: 'Restorative Dentistry',
    description:
      'Custom dentures in Golaghat. Complete and partial dentures for a natural-looking, functional smile.',
    heroDescription:
      'Custom dentures designed for comfort and a natural appearance. Restore your smile and confidence.',
    overview: [
      'Dentures are removable replacements for missing teeth and surrounding tissue. Whether you need a complete set or a partial denture to fill gaps, we create custom appliances that fit comfortably and look natural.',
      'Modern denture materials and techniques mean your dentures will be more comfortable, better fitting, and more natural-looking than ever before.',
    ],
    whenNeeded: [
      'All or most teeth missing in one or both jaws',
      'Several missing teeth in different areas of the mouth',
      'Existing dentures that are loose, uncomfortable, or worn out',
      'Difficulty eating or speaking due to tooth loss',
      'Desire for a more affordable tooth replacement option',
      'Dental ridge changes making current dentures ill-fitting',
    ],
    benefits: [
      'Restores the ability to eat and speak normally',
      'Improves facial appearance by supporting lips and cheeks',
      'Prevents remaining teeth from shifting',
      'More affordable than implants or extensive bridges',
      'Custom-made for a comfortable, secure fit',
      'Can be adjusted or relined as your mouth changes over time',
    ],
    procedure: [
      {
        heading: 'Comprehensive Examination',
        description:
          'We assess your oral health, take impressions, and discuss your goals to determine the best type of denture for your needs.',
      },
      {
        heading: 'Impressions and Measurements',
        description:
          'Detailed impressions and bite measurements are taken to ensure your dentures fit precisely and function comfortably.',
      },
      {
        heading: 'Try-In Appointment',
        description:
          'A wax model of your dentures is created so you can see how they will look and feel before the final version is made. Adjustments are made at this stage.',
      },
      {
        heading: 'Final Delivery and Fitting',
        description:
          'Your finished dentures are fitted and adjusted for comfort. We provide instructions on care, cleaning, and wearing your new dentures.',
      },
    ],
    recovery: [
      'Initial adjustment period of 1–2 weeks as you get used to wearing dentures',
      'Mild soreness or irritation is common — we can adjust the fit as needed',
      'Start with soft foods and gradually introduce firmer textures',
      'Practice speaking aloud to adapt more quickly',
      'Remove dentures at night to give your gums a rest',
    ],
    cost:
      'Dentures are a cost-effective tooth replacement solution. We provide a detailed breakdown of costs based on the type of denture you choose.',
    faqs: [
      {
        question: 'Will dentures look natural?',
        answer:
          'Yes. Modern dentures are crafted to match the natural colour, shape, and arrangement of teeth. They are designed to look completely natural.',
      },
      {
        question: 'How long does it take to get used to dentures?',
        answer:
          'Most patients adapt within 2–4 weeks. Speaking and eating may feel different at first, but your mouth quickly adjusts.',
      },
      {
        question: 'Do dentures need to be replaced?',
        answer:
          'Yes, dentures typically need relining or replacement every 5–8 years as your jawbone and gum tissue naturally change over time.',
      },
    ],
  },
  {
    slug: 'cosmetic-dentistry-golaghat',
    title: 'Cosmetic Dentistry',
    shortTitle: 'Cosmetic Dentistry',
    category: 'Cosmetic Dentistry',
    description:
      'Transform your smile with cosmetic dentistry in Golaghat. Veneers, whitening, bonding, and smile makeovers.',
    heroDescription:
      'Enhance the appearance of your smile with modern aesthetic treatments. From subtle improvements to complete smile transformations.',
    overview: [
      'Cosmetic dentistry focuses on improving the appearance of your teeth, gums, and smile. Whether you want a subtle enhancement or a complete transformation, we offer a range of treatments tailored to your goals.',
      'We begin every cosmetic case with a thorough consultation to understand your aesthetic concerns and desired outcome. Our approach is conservative and natural-looking — never overdone.',
    ],
    whenNeeded: [
      'Stained, discoloured, or yellowing teeth',
      'Chipped, cracked, or worn-down teeth',
      'Gaps between teeth affecting your smile',
      'Irregularly shaped or misaligned teeth',
      'Old, discoloured fillings you want to replace',
      'Desire for a more confident, attractive smile',
    ],
    benefits: [
      'Significant improvement in smile appearance',
      'Boosts self-confidence in social and professional settings',
      'Range of options to suit every budget and need',
      'Many treatments completed in one or two visits',
      'Natural-looking results tailored to your features',
      'Long-lasting improvements with proper care',
    ],
    procedure: [
      {
        heading: 'Smile Consultation',
        description:
          'We discuss your aesthetic goals, examine your teeth and smile, and recommend the most suitable cosmetic treatment plan.',
      },
      {
        heading: 'Treatment Planning',
        description:
          'Digital imaging or mock-ups may be used to show you potential results. We design a personalised plan that addresses your specific concerns.',
      },
      {
        heading: 'Cosmetic Treatment',
        description:
          'Depending on your plan, treatment may include teeth whitening, composite bonding, veneers, or a combination of procedures.',
      },
      {
        heading: 'Final Reveal and Follow-Up',
        description:
          'Your enhanced smile is revealed and adjusted for perfection. We provide aftercare instructions and schedule follow-up as needed.',
      },
    ],
    recovery: [
      'Minimal to no downtime depending on the procedure performed',
      'Temporary sensitivity may occur with whitening or bonding',
      'Avoid staining foods and drinks for 48 hours after whitening',
      'Follow specific aftercare instructions for your treatment type',
      'Regular maintenance visits to preserve your results',
    ],
    cost:
      'Cosmetic dentistry costs vary depending on the treatment type and complexity. We provide detailed pricing during your consultation with no obligation.',
    faqs: [
      {
        question: 'Is cosmetic dentistry only for aesthetics?',
        answer:
          'While the primary goal is aesthetic improvement, many cosmetic treatments also improve function, such as bonding that repairs a chipped tooth.',
      },
      {
        question: 'How long do cosmetic dentistry results last?',
        answer:
          'Longevity varies by treatment — whitening lasts 6–12 months, bonding 5–7 years, and veneers 10–15 years with proper care.',
      },
      {
        question: 'Is cosmetic dentistry painful?',
        answer:
          'Most cosmetic procedures are minimally invasive and require little to no anaesthesia. Any mild sensitivity is temporary.',
      },
    ],
  },
  {
    slug: 'smile-makeover-golaghat',
    title: 'Smile Makeover',
    shortTitle: 'Smile Makeover',
    category: 'Cosmetic Dentistry',
    description:
      'Complete smile makeovers in Golaghat. Transform your smile with a personalised combination of cosmetic treatments.',
    heroDescription:
      'A complete transformation of your smile through a carefully planned combination of cosmetic treatments. Designed entirely around you.',
    overview: [
      'A smile makeover is a comprehensive approach to transforming your smile. Rather than a single treatment, it combines multiple cosmetic and restorative procedures to address all your aesthetic concerns in a coordinated treatment plan.',
      'Your smile makeover is designed entirely around your facial features, skin tone, tooth shape, and personal goals. The result is a smile that looks natural, balanced, and beautiful.',
    ],
    whenNeeded: [
      'Multiple aesthetic concerns that a single treatment cannot address',
      'Combination of stained, chipped, gapped, and misaligned teeth',
      'Desire for a complete smile transformation rather than spot fixes',
      'Old or failing restorations that need comprehensive replacement',
      'Facial ageing that affects your smile appearance',
      'Preparing for a major life event — wedding, reunion, or public role',
    ],
    benefits: [
      'Completely customised to your unique facial features and goals',
      'Coordinates multiple treatments for harmonious, balanced results',
      'Addresses all your aesthetic concerns in one comprehensive plan',
      'Natural-looking transformation — not artificially perfect',
      'Combines artistry with clinical excellence',
      'Life-changing confidence boost',
    ],
    procedure: [
      {
        heading: 'Comprehensive Smile Analysis',
        description:
          'We analyse your facial proportions, smile line, tooth shape, colour, and alignment. Digital photography and imaging help visualise the potential outcome.',
      },
      {
        heading: 'Personalised Treatment Plan',
        description:
          'A custom plan is designed combining the most appropriate treatments — whitening, veneers, bonding, crowns, or orthodontics — sequenced for optimal results.',
      },
      {
        heading: 'Phased Treatment',
        description:
          'Treatments are carried out in a carefully sequenced order, starting with foundational care and building up to the final aesthetic refinements.',
      },
      {
        heading: 'Final Smile Reveal',
        description:
          'Your complete smile makeover is unveiled. Final adjustments are made to ensure you are delighted with the result.',
      },
    ],
    recovery: [
      'Recovery varies by the treatments included in your makeover',
      'Some temporary sensitivity may occur between phases',
      'Follow specific instructions for each treatment component',
      'Regular maintenance visits to preserve your makeover results',
      'Good oral hygiene is essential for long-term success',
    ],
    cost:
      'A smile makeover is a significant investment in your appearance and confidence. We provide a detailed treatment plan with all costs itemised before you begin.',
    faqs: [
      {
        question: 'How long does a smile makeover take?',
        answer:
          'The duration depends on the treatments involved. A simple makeover may take 2–3 visits, while complex cases involving orthodontics may take several months.',
      },
      {
        question: 'Will my smile makeover look natural?',
        answer:
          'Absolutely. Our philosophy is to enhance your natural smile, not create an artificial look. We consider your facial features, personality, and preferences.',
      },
      {
        question: 'Can I choose which treatments are included?',
        answer:
          'Yes. We present a recommended plan and discuss all options. You have full input into the final treatment choices that suit your goals and budget.',
      },
    ],
  },
  {
    slug: 'wisdom-tooth-removal-golaghat',
    title: 'Wisdom Tooth Removal',
    shortTitle: 'Wisdom Tooth Removal',
    category: 'Specialty Care',
    description:
      'Wisdom tooth extraction in Golaghat. Safe, comfortable removal of impacted or problematic third molars.',
    heroDescription:
      'Comfortable wisdom tooth removal. Relieve pain and prevent future dental problems with expert extraction care.',
    overview: [
      'Wisdom teeth (third molars) are the last teeth to emerge, typically appearing between ages 17 and 25. For many people, they cause problems because there is insufficient space in the jaw for them to erupt properly.',
      'Impacted or poorly positioned wisdom teeth can lead to pain, infection, damage to neighbouring teeth, and other complications. Removal is often recommended to prevent these issues.',
    ],
    whenNeeded: [
      'Pain or discomfort at the back of the mouth',
      'Impacted wisdom teeth that cannot erupt properly',
      'Repeated infections or inflammation around the wisdom tooth',
      'Crowding or shifting of other teeth caused by erupting wisdom teeth',
      'Damage to neighbouring teeth from impacted wisdom teeth',
      'Cysts or tumours developing around an impacted tooth',
    ],
    benefits: [
      'Eliminates pain and discomfort caused by problematic wisdom teeth',
      'Prevents damage to adjacent healthy teeth',
      'Reduces the risk of infection and gum disease',
      'Prevents crowding and alignment issues',
      'Removes the risk of cystic growth around impacted teeth',
      'Often recommended proactively in younger patients for faster recovery',
    ],
    procedure: [
      {
        heading: 'Assessment and X-Ray',
        description:
          'We take a panoramic X-ray to evaluate the position of your wisdom teeth and determine the best extraction approach.',
      },
      {
        heading: 'Anaesthesia',
        description:
          'Local anaesthesia numbs the area completely. For complex cases or anxious patients, sedation options are available.',
      },
      {
        heading: 'Tooth Extraction',
        description:
          'The wisdom tooth is carefully loosened and removed. For impacted teeth, a small incision in the gum may be needed. The extraction site is then cleaned and sutured if necessary.',
      },
      {
        heading: 'Recovery Instructions',
        description:
          'We provide detailed aftercare instructions to promote healing and prevent complications such as dry socket.',
      },
    ],
    recovery: [
      'Rest for 24–48 hours after the procedure',
      'Apply ice packs to reduce swelling during the first 24 hours',
      'Eat soft foods and avoid chewing near the extraction site',
      'Do not use a straw or spit forcefully — can dislodge the blood clot',
      'Mild pain and swelling subside within 3–5 days',
      'Follow up as scheduled to monitor healing',
    ],
    cost:
      'Wisdom tooth removal costs depend on the complexity of the extraction (simple vs. surgical). We provide a clear estimate after examination.',
    faqs: [
      {
        question: 'Is wisdom tooth removal painful?',
        answer:
          'The procedure is performed under anaesthesia, so you will not feel pain. Post-operative discomfort is managed with prescribed or over-the-counter pain relievers.',
      },
      {
        question: 'Do all wisdom teeth need to be removed?',
        answer:
          'Not necessarily. If your wisdom teeth are healthy, fully erupted, properly positioned, and easy to clean, they may not need removal. We evaluate each case individually.',
      },
      {
        question: 'What is dry socket?',
        answer:
          'Dry socket is a condition where the blood clot at the extraction site dislodges, exposing the underlying bone. It is painful but treatable. Following aftercare instructions significantly reduces the risk.',
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return SERVICES.map((service) => service.slug);
}

export function getAllServices(): ServiceData[] {
  return [...SERVICES];
}
