export const departmentsList = [
  {
    id: "emergency",
    name: {
      en: "Emergency Department",
      ar: "قسم الطوارئ"
    },
    icon: "Activity",
    description: {
      en: "24/7 critical care, trauma management, and urgent medical interventions with state-of-the-art life-support equipment.",
      ar: "رعاية حرجة على مدار الساعة، وإدارة الحالات الطارئة والتدخلات الطبية العاجلة بأحدث أجهزة دعم الحياة."
    }
  },
  {
    id: "gp",
    name: {
      en: "General Practitioner",
      ar: "الطب العام والأسرة"
    },
    icon: "Stethoscope",
    description: {
      en: "Comprehensive primary healthcare, routine checkups, chronic disease management, and preventative health guidance.",
      ar: "رعاية صحية أولية متكاملة، فحوصات دورية، إدارة الأمراض المزمنة، وتوجيهات صحية وقائية لكافة الأعمار."
    }
  },
  {
    id: "dentistry",
    name: {
      en: "Dentistry & Oral Surgery",
      ar: "طب وجراحة الأسنان"
    },
    icon: "Smile",
    description: {
      en: "Advanced cosmetic dentistry, orthodontics, implants, root canal treatments, and preventative oral hygiene services.",
      ar: "تجميل الأسنان المتقدم، تقويم الأسنان، زراعة الأسنان، علاجات الجذور، وخدمات الوقاية وصحة الفم واللثة."
    }
  },
  {
    id: "dermatology",
    name: {
      en: "Dermatology & Cosmetology",
      ar: "الجلدية والتجميل"
    },
    icon: "Sparkles",
    description: {
      en: "Treatment of skin, hair, and nail disorders, alongside advanced aesthetic procedures, laser therapies, and anti-aging care.",
      ar: "علاج اضطرابات الجلد والشعر والأظافر، إلى جانب الإجراءات التجميلية المتقدمة، العلاج بالليزر ومكافحة الشيخوخة."
    }
  },
  {
    id: "pediatrics",
    name: {
      en: "Pediatrics & Neonatology",
      ar: "طب الأطفال وحديثي الولادة"
    },
    icon: "Baby",
    description: {
      en: "Specialized healthcare for infants, children, and adolescents, including vaccinations, growth monitoring, and pediatric diseases.",
      ar: "رعاية صحية متخصصة للرضع والأطفال والمراهقين، تشمل التطعيمات ومتابعة النمو وعلاج أمراض الأطفال."
    }
  },
  {
    id: "obgyn",
    name: {
      en: "Obstetrics & Gynecology",
      ar: "النساء والتوليد"
    },
    icon: "HeartHandshake",
    description: {
      en: "Comprehensive women's health, pre-natal and post-natal care, high-risk pregnancy monitoring, and gynecological surgeries.",
      ar: "رعاية صحية متكاملة للمرأة، رعاية الحمل والولادة، متابعة الحمل عالي الخطورة، وجراحات أمراض النساء."
    }
  },
  {
    id: "customer_service",
    name: {
      en: "Customer Service & Care",
      ar: "خدمة العملاء ورعاية المرضى"
    },
    icon: "Headphones",
    description: {
      en: "Dedicated support team assisting with clinic guidelines, scheduling feedback, insurance claims, and inquiries.",
      ar: "فريق دعم مخصص للمساعدة في إرشادات العيادة، ملاحظات الجدولة، مطالبات التأمين، وكافة الاستفسارات."
    }
  }
];

export const doctorsData = [
  // EMERGENCY
  {
    id: "dr-mahmoud-harbi",
    departmentId: "emergency",
    name: {
      en: "Dr. Mahmoud Al-Harbi",
      ar: "د. محمود الحربي"
    },
    specialty: {
      en: "Emergency Medicine Consultant",
      ar: "استشاري طب الطوارئ"
    },
    experienceYears: 15,
    gender: "male",
    qualification: {
      en: "Saudi Board in Emergency Medicine, Fellowship of the Royal College of Emergency Medicine (FRCEM, UK).",
      ar: "البورد السعودي في طب الطوارئ، زمالة الكلية الملكية لطب الطوارئ (المملكة المتحدة)."
    },
    bio: {
      en: "Dr. Mahmoud has over 15 years of experience managing critical trauma cases, cardiac emergencies, and acute medical resuscitations in top-tier Saudi hospitals.",
      ar: "يمتلك الدكتور محمود خبرة تزيد عن 15 عاماً في إدارة حالات الحوادث الحرجة، طوارئ القلب، والإنعاش الطبي الحاد في كبرى المستشفيات السعودية."
    },
    schedule: {
      days: {
        en: "Saturday, Monday, Wednesday",
        ar: "السبت، الاثنين، الأربعاء"
      },
      hours: {
        en: "8:00 AM - 4:00 PM",
        ar: "8:00 ص - 4:00 م"
      }
    },
    phone: "+966 55 111 0001",
    whatsapp: "+966 55 111 0001"
  },
  {
    id: "dr-khalid-qahtani",
    departmentId: "emergency",
    name: {
      en: "Dr. Khalid Al-Qahtani",
      ar: "د. خالد القحطاني"
    },
    specialty: {
      en: "Trauma & Emergency Specialist",
      ar: "أخصائي الحوادث وطب الطوارئ"
    },
    experienceYears: 10,
    gender: "male",
    qualification: {
      en: "M.Sc. in Critical Care Medicine, Arab Board of Emergency Medicine.",
      ar: "ماجستير طب العناية الحرجة، البورد العربي في طب الطوارئ."
    },
    bio: {
      en: "Specialist in emergency triage, pediatric emergencies, and disaster medicine. Dedicated to providing rapid, high-quality patient care during golden hours.",
      ar: "أخصائي في فرز حالات الطوارئ، طوارئ الأطفال، وطب الكوارث. مكرس لتقديم رعاية سريعة وعالية الجودة للمرضى خلال الساعات الذهبية."
    },
    schedule: {
      days: {
        en: "Sunday, Tuesday, Thursday",
        ar: "الأحد، الثلاثاء، الخميس"
      },
      hours: {
        en: "4:00 PM - 12:00 AM",
        ar: "4:00 م - 12:00 ص"
      }
    },
    phone: "+966 55 111 0002",
    whatsapp: "+966 55 111 0002"
  },

  // GENERAL PRACTITIONER
  {
    id: "dr-ahmed-otaibi",
    departmentId: "gp",
    name: {
      en: "Dr. Ahmed Al-Otaibi",
      ar: "د. أحمد العتيبي"
    },
    specialty: {
      en: "Family Medicine Consultant",
      ar: "استشاري طب الأسرة والمجتمع"
    },
    experienceYears: 12,
    gender: "male",
    qualification: {
      en: "American Board of Family Medicine, Fellow of the American Academy of Family Physicians.",
      ar: "البورد الأمريكي في طب الأسرة، زمالة الأكاديمية الأمريكية لأطباء الأسرة."
    },
    bio: {
      en: "Dr. Ahmed focuses on preventative care, comprehensive family health, vaccination schedules, and long-term management of diabetes and hypertension.",
      ar: "يركز الدكتور أحمد على الرعاية الوقائية، صحة الأسرة الشاملة، جداول التطعيمات، والإدارة طويلة المدى لمرض السكري وارتفاع ضغط الدم."
    },
    schedule: {
      days: {
        en: "Saturday - Wednesday",
        ar: "السبت - الأربعاء"
      },
      hours: {
        en: "9:00 AM - 5:00 PM",
        ar: "9:00 ص - 5:00 م"
      }
    },
    phone: "+966 55 222 0001",
    whatsapp: "+966 55 222 0001"
  },
  {
    id: "dr-mohammed-shammari",
    departmentId: "gp",
    name: {
      en: "Dr. Mohammed Al-Shammari",
      ar: "د. محمد الشمري"
    },
    specialty: {
      en: "General Practice Specialist",
      ar: "أخصائي الطب العام"
    },
    experienceYears: 8,
    gender: "male",
    qualification: {
      en: "MBBS from King Saud University, Diploma in Family Health.",
      ar: "بكالوريوس الطب والجراحة من جامعة الملك سعود، دبلوم صحة الأسرة."
    },
    bio: {
      en: "Dr. Mohammed is dedicated to diagnosing acute illnesses, minor surgical procedures in-clinic, and providing health screening and advice for adult patients.",
      ar: "يكرس الدكتور محمد جهوده لتشخيص الأمراض الحادة، إجراء العمليات الجراحية الصغرى بالعيادة، وتقديم الفحوصات والنصائح الصحية للمرضى البالغين."
    },
    schedule: {
      days: {
        en: "Sunday - Thursday",
        ar: "الأحد - الخميس"
      },
      hours: {
        en: "1:00 PM - 9:00 PM",
        ar: "1:00 م - 9:00 م"
      }
    },
    phone: "+966 55 222 0002",
    whatsapp: "+966 55 222 0002"
  },

  // DENTISTRY
  {
    id: "dr-faisal-mutairi",
    departmentId: "dentistry",
    name: {
      en: "Dr. Faisal Al-Mutairi",
      ar: "د. فيصل المطيري"
    },
    specialty: {
      en: "Orthodontics Consultant",
      ar: "استشاري تقويم الأسنان والفكين"
    },
    experienceYears: 14,
    gender: "male",
    qualification: {
      en: "Ph.D. in Orthodontics (France), Member of the World Federation of Orthodontists.",
      ar: "دكتوراه في تقويم الأسنان (فرنسا)، عضو الاتحاد العالمي لأطباء تقويم الأسنان."
    },
    bio: {
      en: "Expert in traditional braces, clear aligners (Invisalign), and pediatric jaw growth guiding treatments. Over 14 years shaping beautiful smiles.",
      ar: "خبير في التقويم التقليدي، التقويم الشفاف (إنفزلاين)، وعلاجات توجيه نمو الفك للأطفال. خبرة تفوق 14 عاماً في رسم الابتسامات الجميلة."
    },
    schedule: {
      days: {
        en: "Saturday, Monday, Wednesday",
        ar: "السبت، الاثنين، الأربعاء"
      },
      hours: {
        en: "10:00 AM - 6:00 PM",
        ar: "10:00 ص - 6:00 م"
      }
    },
    phone: "+966 55 333 0001",
    whatsapp: "+966 55 333 0001"
  },
  {
    id: "dr-sara-zahrani",
    departmentId: "dentistry",
    name: {
      en: "Dr. Sara Al-Zahrani",
      ar: "د. سارة الزهراني"
    },
    specialty: {
      en: "Cosmetic Dentistry & Implantologist",
      ar: "أخصائية تجميل وزراعة الأسنان"
    },
    experienceYears: 11,
    gender: "female",
    qualification: {
      en: "Master of Dental Science in Implantology, Fellowship in Laser Dentistry.",
      ar: "ماجستير علوم طب الأسنان في زراعة الأسنان، زمالة طب الأسنان بالليزر."
    },
    bio: {
      en: "Specialist in Hollywood smile design, ceramic veneers, painless root canal treatment, and single/multiple dental implant placements.",
      ar: "متخصصة في تصميم ابتسامة هوليوود، القشور الخزفية، علاج الجذور بدون ألم، وزراعة الأسنان المفردة والمتعددة."
    },
    schedule: {
      days: {
        en: "Sunday, Tuesday, Thursday",
        ar: "الأحد، الثلاثاء، الخميس"
      },
      hours: {
        en: "1:00 PM - 9:00 PM",
        ar: "1:00 م - 9:00 م"
      }
    },
    phone: "+966 55 333 0002",
    whatsapp: "+966 55 333 0002"
  },
  {
    id: "dr-youssef-ghamdi",
    departmentId: "dentistry",
    name: {
      en: "Dr. Youssef Al-Ghamdi",
      ar: "د. يوسف الغامدي"
    },
    specialty: {
      en: "Pediatric Dentist",
      ar: "أخصائي طب أسنان الأطفال"
    },
    experienceYears: 9,
    gender: "male",
    qualification: {
      en: "Saudi Board of Pediatric Dentistry, Member of the International Association of Paediatric Dentistry.",
      ar: "البورد السعودي لطب أسنان الأطفال، عضو الجمعية الدولية لطب أسنان الأطفال."
    },
    bio: {
      en: "Known for his patient, gentle approach with children, Dr. Youssef specializes in early preventive dental habits and treatments under sedation if necessary.",
      ar: "معروف بأسلوبه الصبور واللطيف مع الأطفال، يتخصص الدكتور يوسف في عادات الوقاية المبكرة للأسنان وعلاجات الأطفال تحت التخدير عند الحاجة."
    },
    schedule: {
      days: {
        en: "Saturday, Sunday, Tuesday",
        ar: "السبت، الأحد، الثلاثاء"
      },
      hours: {
        en: "9:00 AM - 5:00 PM",
        ar: "9:00 ص - 5:00 م"
      }
    },
    phone: "+966 55 333 0003",
    whatsapp: "+966 55 333 0003"
  },

  // DERMATOLOGY
  {
    id: "dr-mona-harbi",
    departmentId: "dermatology",
    name: {
      en: "Dr. Mona Al-Harbi",
      ar: "د. منى الحربي"
    },
    specialty: {
      en: "Dermatology & Cosmetology Consultant",
      ar: "استشارية الأمراض الجلدية والتجميل"
    },
    experienceYears: 16,
    gender: "female",
    qualification: {
      en: "MD in Dermatology, European Board in Dermatology and Venereology (EBDV).",
      ar: "دكتوراه في الأمراض الجلدية، البورد الأوروبي في الأمراض الجلدية والتناسلية."
    },
    bio: {
      en: "A highly requested expert in clinical dermatology, anti-aging solutions, Botox, fillers, chemical peels, and advanced laser therapies.",
      ar: "خبيرة مطلوبة بشدة في الأمراض الجلدية السريرية، حلول مكافحة الشيخوخة، البوتوكس، الفيلر، التقشير الكيميائي، وعلاجات الليزر المتقدمة."
    },
    schedule: {
      days: {
        en: "Saturday, Monday, Wednesday",
        ar: "السبت، الاثنين، الأربعاء"
      },
      hours: {
        en: "12:00 PM - 8:00 PM",
        ar: "12:00 م - 8:00 م"
      }
    },
    phone: "+966 55 444 0001",
    whatsapp: "+966 55 444 0001"
  },
  {
    id: "dr-norah-qahtani",
    departmentId: "dermatology",
    name: {
      en: "Dr. Norah Al-Qahtani",
      ar: "د. نورة القحطاني"
    },
    specialty: {
      en: "Dermatology Specialist",
      ar: "أخصائية الجلدية والتجميل"
    },
    experienceYears: 7,
    gender: "female",
    qualification: {
      en: "Arab Board of Dermatology, Diploma in Aesthetic Medicine (AAAM).",
      ar: "البورد العربي للأمراض الجلدية، دبلوم الطب التجميلي من الأكاديمية الأمريكية."
    },
    bio: {
      en: "Specialized in treating chronic skin conditions like eczema, psoriasis, and acne vulgaris, as well as modern skin rejuvenation and microneedling.",
      ar: "متخصصة في علاج الأمراض الجلدية المزمنة مثل الإكزيما والصدفية وحب الشباب، فضلاً عن تقنيات نضارة البشرة الحديثة والوخز بالإبر الدقيقة."
    },
    schedule: {
      days: {
        en: "Sunday, Tuesday, Thursday",
        ar: "الأحد، الثلاثاء، الخميس"
      },
      hours: {
        en: "9:00 AM - 5:00 PM",
        ar: "9:00 ص - 5:00 م"
      }
    },
    phone: "+966 55 444 0002",
    whatsapp: "+966 55 444 0002"
  },

  // PEDIATRICS
  {
    id: "dr-huda-otaibi",
    departmentId: "pediatrics",
    name: {
      en: "Dr. Huda Al-Otaibi",
      ar: "د. هدى العتيبي"
    },
    specialty: {
      en: "Pediatrics Consultant",
      ar: "استشارية طب الأطفال"
    },
    experienceYears: 15,
    gender: "female",
    qualification: {
      en: "Fellowship in Pediatrics from King Faisal Specialist Hospital, Arab Board of Pediatrics.",
      ar: "زمالة طب الأطفال من مستشفى الملك فيصل التخصصي، البورد العربي لطب الأطفال."
    },
    bio: {
      en: "With 15 years in general pediatrics, Dr. Huda handles pediatric chronic illnesses, early childhood growth disorders, and comprehensive nutrition counseling.",
      ar: "مع 15 عاماً في طب الأطفال العام، تتعامل الدكتورة هدى مع أمراض الأطفال المزمنة، اضطرابات النمو في مرحلة الطفولة المبكرة، واستشارات التغذية الشاملة."
    },
    schedule: {
      days: {
        en: "Saturday, Sunday, Tuesday",
        ar: "السبت، الأحد، الثلاثاء"
      },
      hours: {
        en: "9:00 AM - 5:00 PM",
        ar: "9:00 ص - 5:00 م"
      }
    },
    phone: "+966 55 555 0001",
    whatsapp: "+966 55 555 0001"
  },
  {
    id: "dr-abdullah-dosari",
    departmentId: "pediatrics",
    name: {
      en: "Dr. Abdullah Al-Dosari",
      ar: "د. عبد الله الدوسري"
    },
    specialty: {
      en: "Pediatrician Specialist",
      ar: "أخصائي طب الأطفال وحديثي الولادة"
    },
    experienceYears: 9,
    gender: "male",
    qualification: {
      en: "Saudi Board of Pediatrics, M.Sc. in Child Health (UK).",
      ar: "البورد السعودي لطب الأطفال، ماجستير صحة الطفل (المملكة المتحدة)."
    },
    bio: {
      en: "Dr. Abdullah specializes in neonatal health checks, pediatric asthma, allergy management, and monitoring developmental milestones.",
      ar: "يتخصص الدكتور عبد الله في فحوصات الأطفال حديثي الولادة، ربو الأطفال، إدارة الحساسية، ومتابعة مراحل النمو الحركي والإدراكي."
    },
    schedule: {
      days: {
        en: "Monday, Wednesday, Thursday",
        ar: "الاثنين، الأربعاء، الخميس"
      },
      hours: {
        en: "1:00 PM - 9:00 PM",
        ar: "1:00 م - 9:00 م"
      }
    },
    phone: "+966 55 555 0002",
    whatsapp: "+966 55 555 0002"
  },

  // OBGYN
  {
    id: "dr-aisha-harbi",
    departmentId: "obgyn",
    name: {
      en: "Dr. Aisha Al-Harbi",
      ar: "د. عائشة الحربي"
    },
    specialty: {
      en: "Obstetrics & Gynecology Consultant",
      ar: "استشارية أمراض النساء والولادة"
    },
    experienceYears: 18,
    gender: "female",
    qualification: {
      en: "Fellowship of the Royal College of Obstetricians and Gynaecologists (FRCOG, UK), Arab Board in OBGYN.",
      ar: "زمالة الكلية الملكية لأطباء النساء والتوليد (لندن)، البورد العربي في النساء والتوليد."
    },
    bio: {
      en: "Dr. Aisha is a pioneer in managing high-risk pregnancies, recurrent miscarriages, and performing advanced laparoscopic gynecological surgeries.",
      ar: "تعد الدكتورة عائشة رائدة في إدارة الحمل عالي الخطورة، حالات الإجهاض المتكرر، وإجراء جراحات مناظير أمراض النساء المتقدمة."
    },
    schedule: {
      days: {
        en: "Saturday, Monday, Wednesday",
        ar: "السبت، الاثنين، الأربعاء"
      },
      hours: {
        en: "10:00 AM - 6:00 PM",
        ar: "10:00 ص - 6:00 م"
      }
    },
    phone: "+966 55 666 0001",
    whatsapp: "+966 55 666 0001"
  },
  {
    id: "dr-reem-zahrani",
    departmentId: "obgyn",
    name: {
      en: "Dr. Reem Al-Zahrani",
      ar: "د. ريم الزهراني"
    },
    specialty: {
      en: "Obstetrics & Gynecology Specialist",
      ar: "أخصائية أمراض النساء والولادة"
    },
    experienceYears: 10,
    gender: "female",
    qualification: {
      en: "Saudi Board of Obstetrics & Gynecology, Member of the Society of Obstetricians and Gynaecologists of Canada (SOGC).",
      ar: "البورد السعودي لأمراض النساء والتوليد، عضو جمعية أطباء النساء والتوليد الكندية."
    },
    bio: {
      en: "Specialist in normal and cesarean deliveries, managing hormonal imbalances, polycystic ovary syndrome (PCOS), and pre-marriage health screening.",
      ar: "أخصائية في الولادات الطبيعية والقيصرية، علاج الاضطرابات الهرمونية، متلازمة تكيس المبايض، وفحوصات ما قبل الزواج."
    },
    schedule: {
      days: {
        en: "Sunday, Tuesday, Thursday",
        ar: "الأحد، الثلاثاء، الخميس"
      },
      hours: {
        en: "1:00 PM - 9:00 PM",
        ar: "1:00 م - 9:00 م"
      }
    },
    phone: "+966 55 666 0002",
    whatsapp: "+966 55 666 0002"
  },

  // CUSTOMER SERVICE
  {
    id: "team-reception",
    departmentId: "customer_service",
    name: {
      en: "Reception Team",
      ar: "فريق الاستقبال"
    },
    specialty: {
      en: "Front Desk & Scheduling Support",
      ar: "دعم مكتب الاستقبال والجدولة"
    },
    experienceYears: 5,
    gender: "team",
    qualification: {
      en: "Certified Healthcare Administration Professionals.",
      ar: "متخصصون معتمدون في إدارة الرعاية الصحية."
    },
    bio: {
      en: "Our reception team greets you with a warm smile, helps with insurance papers, schedules appointments, and answers incoming inquiries promptly.",
      ar: "يرحب بك فريق الاستقبال بابتسامة دافئة، ويساعدك في تعبئة أوراق التأمين، وجدولة المواعيد، والإجابة على الاستفسارات الواردة بفعالية."
    },
    schedule: {
      days: {
        en: "Saturday - Friday",
        ar: "السبت - الجمعة"
      },
      hours: {
        en: "24 Hours (Rotational)",
        ar: "24 ساعة (تناوبي)"
      }
    },
    phone: "+966 55 777 0001",
    whatsapp: "+966 55 777 0001"
  },
  {
    id: "team-customercare",
    departmentId: "customer_service",
    name: {
      en: "Customer Care Team",
      ar: "فريق رعاية العملاء"
    },
    specialty: {
      en: "Patient Relations & Feedback",
      ar: "علاقات المرضى والملاحظات"
    },
    experienceYears: 6,
    gender: "team",
    qualification: {
      en: "Quality Assurance & Patient Satisfaction Experts.",
      ar: "خبراء ضمان الجودة وخدمة وإرضاء المرضى."
    },
    bio: {
      en: "The Customer Care team monitors service quality, resolves complaints, coordinates VIP patients, and guides you regarding medical reports and queries.",
      ar: "يتابع فريق خدمة العملاء جودة الخدمات المقدمة، ويحل الشكاوى، وينسق رعاية كبار الشخصيات، ويقدم تقارير واستفسارات طبية."
    },
    schedule: {
      days: {
        en: "Saturday - Thursday",
        ar: "السبت - الخميس"
      },
      hours: {
        en: "8:00 AM - 10:00 PM",
        ar: "8:00 ص - 10:00 م"
      }
    },
    phone: "+966 55 777 0002",
    whatsapp: "+966 55 777 0002"
  }
];
