# This file creates all the required records for The Awareness Index application

# Clear existing data
puts "Clearing existing data..."
ResourceLink.destroy_all
Subsection.destroy_all
Section.destroy_all

# Create sections with their subsections and resource links
puts "Creating sections, subsections, and resource links..."

# Section 1: Meditation & Mindfulness
meditation = Section.create!(
  title: "Meditation & Mindfulness",
  description: "Explore the ancient and modern practices of meditation and mindfulness. Discover tools and techniques to develop presence, reduce stress, and cultivate inner awareness."
)

guided_meditations = meditation.subsections.create!(
  title: "Guided Meditations",
  description: "Collections of guided meditations for beginners and experienced practitioners alike."
)

guided_meditations.resource_links.create!([
  {
    title: "Insight Timer",
    url: "https://insighttimer.com/",
    description: "Free app with over 100,000 guided meditations and music tracks for sleep, anxiety, and stress."
  },
  {
    title: "Waking Up with Sam Harris",
    url: "https://www.wakingup.com/",
    description: "A course in meditation and mindfulness guided by neuroscientist and philosopher Sam Harris."
  },
  {
    title: "UCLA Mindful Awareness Research Center",
    url: "https://www.uclahealth.org/programs/marc",
    description: "Free guided meditations from UCLA's mindfulness center, available in multiple languages."
  },
  {
    title: "Tara Brach Guided Meditations",
    url: "https://www.tarabrach.com/guided-meditations/",
    description: "A collection of guided meditations from psychologist and meditation teacher Tara Brach."
  },
  {
    title: "Headspace",
    url: "https://www.headspace.com/",
    description: "Subscription-based app offering guided meditation sessions for stress, focus, sleep, and more."
  }
])

techniques = meditation.subsections.create!(
  title: "Techniques & Traditions",
  description: "Explore various meditation techniques from different spiritual and cultural traditions."
)

techniques.resource_links.create!([
  {
    title: "Vipassana Meditation",
    url: "https://www.dhamma.org/",
    description: "Information on Vipassana meditation as taught by S.N. Goenka, with free 10-day retreat centers worldwide."
  },
  {
    title: "Zen Habits",
    url: "https://zenhabits.net/meditation-guide/",
    description: "A beginner's guide to Zen meditation from the popular minimalist blog."
  },
  {
    title: "Transcendental Meditation",
    url: "https://www.tm.org/",
    description: "Official site for Transcendental Meditation technique, research, and teacher training."
  },
  {
    title: "Mindfulness-Based Stress Reduction (MBSR)",
    url: "https://www.mindfulnesscds.com/",
    description: "Resources from Jon Kabat-Zinn, founder of MBSR, including guided meditations and courses."
  },
  {
    title: "Loving-Kindness Meditation Guide",
    url: "https://www.contemplativemind.org/practices/tree/loving-kindness",
    description: "Step-by-step guide to metta (loving-kindness) meditation practice from The Center for Contemplative Mind in Society."
  }
])

benefits = meditation.subsections.create!(
  title: "Benefits & Scientific Studies",
  description: "Research and evidence on the benefits of regular meditation practice."
)

benefits.resource_links.create!([
  {
    title: "Harvard Health: Benefits of Meditation",
    url: "https://www.health.harvard.edu/mind-and-mood/meditation-in-psychotherapy",
    description: "Harvard Medical School's overview of the health benefits of meditation based on clinical research."
  },
  {
    title: "National Center for Complementary and Integrative Health",
    url: "https://www.nccih.nih.gov/health/meditation-in-depth",
    description: "Government resource on meditation research, including scientific findings and clinical applications."
  },
  {
    title: "Greater Good Science Center",
    url: "https://greatergood.berkeley.edu/topic/mindfulness/definition",
    description: "UC Berkeley's research center exploring the science of well-being, with resources on mindfulness."
  },
  {
    title: "Mindfulness Research Guide",
    url: "https://www.mindfulnessresearch.net/",
    description: "Comprehensive database of mindfulness research papers and studies from around the world."
  },
  {
    title: "Center for Healthy Minds",
    url: "https://centerhealthyminds.org/science/overview",
    description: "Research from the University of Wisconsin-Madison on how meditation affects the brain and body."
  }
])

# Section 2: Consciousness & Science
consciousness = Section.create!(
  title: "Consciousness & Science",
  description: "Explore the intersection of scientific inquiry and consciousness studies. Learn about cutting-edge research that bridges neuroscience, physics, and the mystery of subjective experience."
)

neuroscience = consciousness.subsections.create!(
  title: "Neuroscience & Cognitive Studies",
  description: "Research on the neural correlates of consciousness and cognitive approaches to understanding the mind."
)

neuroscience.resource_links.create!([
  {
    title: "Association for the Scientific Study of Consciousness",
    url: "https://theassc.org/",
    description: "Organization dedicated to promoting rigorous research into the nature of consciousness."
  },
  {
    title: "Anil Seth's Consciousness Research",
    url: "https://www.anilseth.com/",
    description: "Work by neuroscientist Anil Seth on the neuroscience of consciousness, including his TED talks and publications."
  },
  {
    title: "Journal of Consciousness Studies",
    url: "https://www.ingentaconnect.com/content/imp/jcs",
    description: "Peer-reviewed academic journal focused on the study of consciousness."
  },
  {
    title: "NeuroImage",
    url: "https://www.journals.elsevier.com/neuroimage",
    description: "Journal publishing cutting-edge neuroimaging research related to brain function and structure."
  },
  {
    title: "Frontiers in Human Neuroscience",
    url: "https://www.frontiersin.org/journals/human-neuroscience",
    description: "Open-access journal publishing research on the understanding of human neuroscience."
  }
])

quantum = consciousness.subsections.create!(
  title: "Quantum Theories of Consciousness",
  description: "Explorations of how quantum physics may relate to consciousness and subjective experience."
)

quantum.resource_links.create!([
  {
    title: "Center for Quantum Consciousness",
    url: "https://www.quantumconsciousness.org/",
    description: "Stuart Hameroff and Roger Penrose's research on quantum computing in brain microtubules."
  },
  {
    title: "Institute of Noetic Sciences",
    url: "https://noetic.org/science/",
    description: "Research organization exploring the frontiers of consciousness, including quantum approaches."
  },
  {
    title: "Quantum Mind",
    url: "https://plato.stanford.edu/entries/qt-consciousness/",
    description: "Stanford Encyclopedia of Philosophy entry on quantum approaches to consciousness."
  },
  {
    title: "Dean Radin's Research",
    url: "https://www.deanradin.com/selected-peer-reviewed-journal-publications",
    description: "Publications by researcher Dean Radin on consciousness and quantum effects."
  },
  {
    title: "Consciousness and the Physical World",
    url: "https://www.consciousnessandphysicalreality.com/",
    description: "Resources exploring the relationship between physics, quantum mechanics, and consciousness."
  }
])

interdisciplinary = consciousness.subsections.create!(
  title: "Interdisciplinary Research",
  description: "Research that bridges multiple disciplines to explore the nature of consciousness."
)

interdisciplinary.resource_links.create!([
  {
    title: "Center for Consciousness Studies",
    url: "https://consciousness.arizona.edu/",
    description: "University of Arizona's interdisciplinary center for the study of consciousness."
  },
  {
    title: "Mind & Life Institute",
    url: "https://www.mindandlife.org/",
    description: "Organization fostering dialogue between contemplative traditions and modern science."
  },
  {
    title: "The Consciousness Chronicles",
    url: "https://www.consciousnesschronicles.com/",
    description: "Documentary series featuring interviews with leading consciousness researchers from various fields."
  },
  {
    title: "Science and Nonduality",
    url: "https://www.scienceandnonduality.com/",
    description: "Community of scientists, philosophers, and spiritual teachers exploring the nature of consciousness."
  },
  {
    title: "Templeton World Charity Foundation",
    url: "https://www.templetonworldcharity.org/consciousness",
    description: "Foundation funding interdisciplinary research projects on consciousness and subjective experience."
  }
])

# Section 3: The Monroe Institute & Hemi-Sync
monroe = Section.create!(
  title: "The Monroe Institute & Hemi-Sync",
  description: "Explore the pioneering work of Robert Monroe and the Monroe Institute's research into expanded states of consciousness through audio technology and techniques."
)

overview = monroe.subsections.create!(
  title: "Overview & Philosophy",
  description: "Introduction to the Monroe Institute's mission, history, and core concepts."
)

overview.resource_links.create!([
  {
    title: "The Monroe Institute",
    url: "https://www.monroeinstitute.org/",
    description: "Official website of the Monroe Institute, with information on programs, research, and history."
  },
  {
    title: "Robert Monroe's Books",
    url: "https://www.monroeinstitute.org/blogs/blog/robert-monroes-books",
    description: "Information about Robert Monroe's trilogy: 'Journeys Out of the Body', 'Far Journeys', and 'Ultimate Journey'."
  },
  {
    title: "Monroe Institute YouTube Channel",
    url: "https://www.youtube.com/user/TheMonroeInstitute",
    description: "Videos from the Monroe Institute, including interviews, explanations, and testimonials."
  },
  {
    title: "Focus Levels Explained",
    url: "https://www.monroeinstitute.org/blogs/blog/the-monroe-institute-focus-levels-explained",
    description: "Explanation of the different states of consciousness (Focus Levels) explored in Monroe programs."
  },
  {
    title: "Monroe Institute Research",
    url: "https://www.monroeinstitute.org/research",
    description: "Overview of research conducted at the Monroe Institute on consciousness exploration."
  }
])

hemi_sync = monroe.subsections.create!(
  title: "Hemi-Sync Technology & Audio Tools",
  description: "Resources about the binaural beat technology developed at the Monroe Institute."
)

hemi_sync.resource_links.create!([
  {
    title: "Hemi-Sync Official Site",
    url: "https://hemi-sync.com/",
    description: "Official website for Hemi-Sync audio products and information about the technology."
  },
  {
    title: "How Hemi-Sync Works",
    url: "https://hemi-sync.com/hemi-sync-technology/",
    description: "Explanation of the science behind Hemi-Sync binaural beat technology."
  },
  {
    title: "Hemi-Sync Streaming App",
    url: "https://hemi-sync.com/streaming-app/",
    description: "Information about the Hemi-Sync app for streaming audio exercises and meditations."
  },
  {
    title: "Gateway Experience",
    url: "https://hemi-sync.com/product-category/gateway-experience/",
    description: "Information about the Gateway Experience, Monroe's flagship consciousness expansion program."
  },
  {
    title: "SAM (Spatial Audio for Meditation)",
    url: "https://hemi-sync.com/product-category/spatial-audio-for-meditation/",
    description: "Newer technology from the Monroe Institute offering immersive 3D sound experiences."
  }
])

research = monroe.subsections.create!(
  title: "Research & Experiences",
  description: "Scientific research and personal accounts related to Monroe Institute programs and Hemi-Sync technology."
)

research.resource_links.create!([
  {
    title: "Monroe Institute Research Papers",
    url: "https://www.monroeinstitute.org/research-papers",
    description: "Collection of research papers on Hemi-Sync and states of consciousness."
  },
  {
    title: "CIA Gateway Process Document",
    url: "https://www.cia.gov/readingroom/document/cia-rdp96-00788r001700210016-5",
    description: "Declassified CIA document analyzing the Monroe Institute's Gateway Process."
  },
  {
    title: "Journal of Scientific Exploration",
    url: "https://journalofscientificexploration.org/",
    description: "Journal featuring peer-reviewed research on consciousness phenomena, including some Monroe Institute studies."
  },
  {
    title: "Hemi-Sync Research Compilation",
    url: "https://hemi-sync.com/research-papers/",
    description: "Collection of research papers documenting the effects of Hemi-Sync technology."
  },
  {
    title: "Monroe Institute Forum",
    url: "https://www.monroeinstitute.org/forum",
    description: "Community forum where participants share experiences with Monroe programs and techniques."
  }
])

# Section 4: Remote Viewing & Non-Local Perception
remote_viewing = Section.create!(
  title: "Remote Viewing & Non-Local Perception",
  description: "Explore the phenomenon of remote viewing, its history in government research programs, scientific studies, and practical applications of this consciousness-based perception skill."
)

history = remote_viewing.subsections.create!(
  title: "Remote Viewing History & Methods",
  description: "History of remote viewing research and various methodologies developed over time."
)

history.resource_links.create!([
  {
    title: "International Remote Viewing Association",
    url: "https://www.irva.org/",
    description: "Organization dedicated to promoting remote viewing, with resources and historical information."
  },
  {
    title: "Stanford Research Institute Remote Viewing Program",
    url: "https://www.cia.gov/readingroom/search/site/remote%20viewing",
    description: "Declassified documents from the CIA's Stargate Project on remote viewing research."
  },
  {
    title: "Controlled Remote Viewing Manual",
    url: "https://www.remoteviewed.com/crv-manuals/",
    description: "Training manuals developed by the military for controlled remote viewing protocols."
  },
  {
    title: "Joseph McMoneagle's Website",
    url: "https://www.mceagle.com/",
    description: "Resources from one of the original remote viewers in the U.S. military's psychic spy program."
  },
  {
    title: "Russell Targ's Research",
    url: "https://www.espresearch.com/",
    description: "Information from physicist Russell Targ, who co-founded the SRI remote viewing program."
  }
])

scientific = remote_viewing.subsections.create!(
  title: "Scientific Research & Experiments",
  description: "Peer-reviewed studies and ongoing research exploring remote viewing abilities."
)

scientific.resource_links.create!([
  {
    title: "Journal of Scientific Exploration - Remote Viewing Studies",
    url: "https://scientificexploration.org/journal",
    description: "Academic journal publishing peer-reviewed studies on remote viewing phenomena."
  },
  {
    title: "The Division of Perceptual Studies",
    url: "https://med.virginia.edu/perceptual-studies/",
    description: "University of Virginia's research division studying phenomena suggesting extended consciousness."
  },
  {
    title: "Princeton Engineering Anomalies Research (PEAR)",
    url: "https://www.princeton.edu/~pear/",
    description: "Archive of Princeton University's 28-year research program on consciousness-related anomalies."
  },
  {
    title: "Society for Scientific Exploration",
    url: "https://www.scientificexploration.org/",
    description: "Professional organization of scientists and scholars committed to studying unusual and unexplained phenomena."
  },
  {
    title: "Remote Viewing Bibliography",
    url: "https://www.irva.org/library/bibliography",
    description: "Comprehensive bibliography of scientific papers and publications on remote viewing."
  }
])

applications = remote_viewing.subsections.create!(
  title: "Applications & Ethical Use",
  description: "Practical applications of remote viewing skills and ethical considerations for their use."
)

applications.resource_links.create!([
  {
    title: "Applied Precognition Project",
    url: "https://www.appliedprecog.com/",
    description: "Organization exploring practical applications of intuitive skills including remote viewing."
  },
  {
    title: "Farsight Institute",
    url: "https://farsight.org/",
    description: "Research institute focused on scientific applications of remote viewing for studying historical events."
  },
  {
    title: "Remote Viewing Ethics Guidelines",
    url: "https://www.irva.org/remote-viewing/ethics",
    description: "Ethical guidelines for the practice of remote viewing from the International Remote Viewing Association."
  },
  {
    title: "Archaeological Applications of Remote Viewing",
    url: "https://www.stephanaschwartz.com/category/remote-viewing-archaeology/",
    description: "Stephan Schwartz's work using remote viewing for archaeological discoveries."
  },
  {
    title: "Practical Remote Viewing",
    url: "https://www.learningstrategies.com/RemoteViewing/Home.asp",
    description: "Training resources for developing practical remote viewing skills."
  }
])

# Section 5: Out-of-Body Experiences (OBEs) & Astral Projection
obes = Section.create!(
  title: "Out-of-Body Experiences (OBEs) & Astral Projection",
  description: "Explore the phenomenon of consciousness seemingly operating outside the physical body, including techniques, personal accounts, and scientific research."
)

techniques = obes.subsections.create!(
  title: "Techniques & Induction Methods",
  description: "Approaches and methods for facilitating out-of-body experiences."
)

techniques.resource_links.create!([
  {
    title: "The Phase Method by Michael Raduga",
    url: "https://obe4u.com/how-to-enter-the-phase-state/",
    description: "Step-by-step technique for inducing out-of-body experiences from the founder of the Phase Research Center."
  },
  {
    title: "William Buhlman's OBE Techniques",
    url: "https://www.williambuhlman.com/out-of-body-experience-techniques/",
    description: "Collection of OBE induction techniques from experienced practitioner and author William Buhlman."
  },
  {
    title: "Robert Bruce's Treatise on Astral Projection",
    url: "https://www.astraldynamics.com/home/",
    description: "Comprehensive guide to energy work and astral projection techniques by Robert Bruce."
  },
  {
    title: "The Monroe Institute Gateway Experience",
    url: "https://www.monroeinstitute.org/products/gateway-experience",
    description: "Audio program designed to facilitate out-of-body states through binaural beat technology."
  },
  {
    title: "Lucidology",
    url: "http://www.lucidology.com/",
    description: "Collection of OBE induction techniques focused on the hypnagogic state between waking and sleeping."
  }
])

accounts = obes.subsections.create!(
  title: "Personal Accounts & Testimonies",
  description: "First-hand accounts of out-of-body experiences from various sources."
)

accounts.resource_links.create!([
  {
    title: "The Out-of-Body Experience Research Foundation",
    url: "https://www.oberf.org/",
    description: "Database of thousands of firsthand accounts of out-of-body and near-death experiences."
  },
  {
    title: "Robert Monroe's Books",
    url: "https://www.monroeinstitute.org/blogs/blog/robert-monroes-books",
    description: "Classic trilogy of books documenting Robert Monroe's personal out-of-body journeys."
  },
  {
    title: "Jurgen Ziewe's Multidimensional Man",
    url: "http://www.multidimensionalman.com/",
    description: "Website based on the book describing decades of documented out-of-body experiences."
  },
  {
    title: "Graham Nicholls OBE Archives",
    url: "https://grahamnicholls.com/out-of-body-experiences/",
    description: "Collection of articles and accounts from OBE researcher and author Graham Nicholls."
  },
  {
    title: "The Reddit Astral Projection Community",
    url: "https://www.reddit.com/r/AstralProjection/",
    description: "Active forum where thousands of practitioners share experiences and techniques."
  }
])

studies = obes.subsections.create!(
  title: "Studies from Monroe Institute & Others",
  description: "Scientific research and studies investigating out-of-body experiences."
)

studies.resource_links.create!([
  {
    title: "Psychophysiological Correlates of OBEs",
    url: "https://www.frontiersin.org/articles/10.3389/fnhum.2014.00070/full",
    description: "Scientific paper exploring the neurological correlates of out-of-body experiences."
  },
  {
    title: "The Projection of Consciousness Research",
    url: "https://www.iac.org/research/",
    description: "Research from the International Academy of Consciousness on OBEs and related phenomena."
  },
  {
    title: "Thomas Campbell's My Big TOE",
    url: "https://www.my-big-toe.com/",
    description: "Theory of Everything by NASA physicist based partly on his out-of-body explorations."
  },
  {
    title: "Dr. Charles Tart's OBE Research",
    url: "https://www.paradigm-sys.com/cttart/",
    description: "Research by psychologist Charles Tart on verifiable elements of out-of-body experiences."
  },
  {
    title: "The AWARE Study",
    url: "https://www.researchgate.net/publication/262932307_AWARE-AWAreness_during_REsuscitation-A_prospective_study",
    description: "Research on consciousness during cardiac arrest with protocols for testing out-of-body perception."
  }
])

# Section 6: Dreamwork & Lucid Dreaming
dreamwork = Section.create!(
  title: "Dreamwork & Lucid Dreaming",
  description: "Explore the world of dreams, lucid dreaming techniques, and approaches to working with dream content for personal insight and growth."
)

basics = dreamwork.subsections.create!(
  title: "Lucid Dreaming Basics",
  description: "Introduction to lucid dreaming concepts, techniques, and resources for beginners."
)

basics.resource_links.create!([
  {
    title: "World of Lucid Dreaming",
    url: "https://www.world-of-lucid-dreaming.com/",
    description: "Comprehensive website with tutorials, articles, and techniques for lucid dreaming."
  },
  {
    title: "Lucidity Institute",
    url: "https://lucidity.com/",
    description: "Organization founded by Dr. Stephen LaBerge, pioneer of scientific lucid dream research."
  },
  {
    title: "Dream Studies Portal",
    url: "https://dreamstudies.org/",
    description: "Educational website on the science and anthropology of dreams and lucid dreaming."
  },
  {
    title: "Lucid Dreaming Reddit Community",
    url: "https://www.reddit.com/r/LucidDreaming/",
    description: "Active forum with resources, experiences, and techniques for lucid dreaming."
  },
  {
    title: "MILD Technique Guide",
    url: "https://skyfalldreams.net/guides/skyfalls-mild-guide/",
    description: "Detailed guide to the Mnemonic Induction of Lucid Dreams technique developed by LaBerge."
  }
])

recall = dreamwork.subsections.create!(
  title: "Dream Recall & Journaling",
  description: "Resources and techniques for improving dream recall and maintaining an effective dream journal."
)

recall.resource_links.create!([
  {
    title: "Dream Journaling Guide",
    url: "https://thedreamersguide.com/dream-journaling/",
    description: "Comprehensive guide to starting and maintaining an effective dream journal."
  },
  {
    title: "Dream Recall Techniques",
    url: "https://www.dreamresearch.net/dream-recall",
    description: "Scientific approaches to improving dream recall from sleep researchers."
  },
  {
    title: "Digital Dream Journaling Apps",
    url: "https://luciddreamlife.com/best-dream-journal-apps/",
    description: "Comparison of apps designed specifically for recording and analyzing dreams."
  },
  {
    title: "Dream Symbols & Interpretation",
    url: "https://dreams.ucsc.edu/Library/index.html",
    description: "UC Santa Cruz Dream Library with resources on dream symbolism and patterns."
  },
  {
    title: "The Dream Recovery System",
    url: "https://dreamrecoverysystem.com/",
    description: "Structured method for recalling and documenting dream experiences in detail."
  }
])

therapeutic = dreamwork.subsections.create!(
  title: "Therapeutic & Spiritual Insights",
  description: "Approaches to working with dreams for psychological healing and spiritual growth."
)

therapeutic.resource_links.create!([
  {
    title: "International Association for the Study of Dreams",
    url: "https://www.asdreams.org/",
    description: "Professional organization dedicated to the pure and applied investigation of dreams."
  },
  {
    title: "Jungian Dream Interpretation",
    url: "https://jungiancenter.org/understanding-our-dreams/",
    description: "Resources on Carl Jung's approach to dream analysis and symbolism."
  },
  {
    title: "Dream Yoga",
    url: "https://www.lionsroar.com/waking-up-from-the-dream-of-a-lifetime/",
    description: "Buddhist approaches to lucid dreaming as a spiritual practice."
  },
  {
    title: "The Dream Work Toolkit",
    url: "https://jeremytaylor.com/dream-work/dreamwork-toolkit/",
    description: "Collection of methods for working with dreams from dream researcher Jeremy Taylor."
  },
  {
    title: "Tibetan Sleep Yoga",
    url: "https://www.ligmincha.org/dream-yoga/",
    description: "Resources on the Tibetan tradition of dream practice and consciousness training."
  }
])

puts "Seeding completed successfully!"
