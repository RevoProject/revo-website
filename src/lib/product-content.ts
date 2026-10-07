export type Language = "en" | "pl";

export interface SiteContent {
  header: {
    features: string;
    whyRevostream: string;
    roadmap: string;
    history: string;
  };
  hero: {
    withoutLimits: string;
    theOpenSourceAlternativeToClosed: string;
    downloadForLinux: string;
    viewOnGithub: string;
    availableFor: string;
    stable: string;
    experimental: string;
    experimental2: string;
  };
  demo: {
    productDemo: string;
    seeTheStudio: string;
    noSubscriptionsNoVendorLockIn: string;
    revostreamKeepsTheProductionWorkflowOn: string;
    record: string;
    goLive: string;
    revostreamControlCenter: string;
    scenesSourcesToolsAndLiveProduction: string;
  };
  features: {
    features: string;
    everythingYouNeedToGoLive: string;
    professionalControlsCleanSceneManagementAnd: string;
    liveProduction: string;
    professionalToolsForHighQualityStreaming: string;
    flexibleAndPowerfulSceneManagement: string;
    plugins: string;
    extendFunctionalityWithCommunityPlugins: string;
    builtWithAndForTheCommunity: string;
  };
  capabilities: {
    whatCanIActuallyDoWith: string;
    productionToolsThat: string;
    feelLikeARealStudio: string;
    notJustAStreamingEngineRevostream: string;
    goLive: string;
    streamWithModernProtocolsAndKeep: string;
    buildScenes: string;
    cameraScreenBrowserMedia: string;
    composeScenesFromTheSourcesThat: string;
    controlProduction: string;
    scenesTransitionsAudioOverlays: string;
    switchMixAndControlTheStream: string;
    streamAnywhere: string;
    twitchYoutubeKickCustomRtmp: string;
    useStandardOutputsAndCustomEndpoints: string;
  };
  protocols: {
    builtFor: string;
    modernStreaming: string;
  };
  why: {
    whyRevostream: string;
    ownTheStack: string;
    ownTheStream: string;
    streamingShouldnTMeanRentingYour: string;
    revostreamIsBuiltAroundAnOpen: string;
    noRecurringSoftwareTax: string;
    noSubscriptionWallBetweenYouAnd: string;
    noVendorLockIn: string;
    yourWorkflowIsNotTiedTo: string;
    openByDesign: string;
    builtInPublicWithACodebase: string;
    builtForDevelopers: string;
    rustTauriSvelteAndLibobsForm: string;
    theRevoIdea: string;
    yourStreamShouldBeInfrastructureYou: string;
    builtOnLibobsTodayBuildingIts: string;
  };
  switch: {
    whySwitch: string;
    fromClosedPlatforms: string;
    toAnOpenStack: string;
    youDonTSwitchBecauseStreaming: string;
    closedPlatformFirst: string;
    businessModel: string;
    platformServiceDependencies: string;
    ecosystemControlled: string;
    yourStack: string;
    architecture: string;
    extensibility: string;
    platformDefined: string;
    openAndExtensible: string;
    vendorControlled: string;
    libobsTodayRustCoreNext: string;
    protocols: string;
    platformIntegrations: string;
    openProtocols: string;
    development: string;
    productRoadmap: string;
    openDevelopment: string;
    platforms: string;
    platformSpecificConstraints: string;
    architectureEvolution: string;
    today: string;
    compatibilityMatureMediaPipeline: string;
    next: string;
    nativeArchitectureLongTermControl: string;
    notAnObsKiller: string;
    obsProvedThatOpenSourceStreaming: string;
    revostreamTakesThatIdeaInA: string;
  };
  comparison: {
    whyRevostream: string;
    thePowerOfObs: string;
    theExperienceOfAModernStudio: string;
    yourObsConceptsAndEcosystemWith: string;
    capability: string;
    interface: string;
    classic: string;
    creatorFocused: string;
    modernDesktopUi: string;
    obsPlugins: string;
    native: string;
    supported: string;
    supported2: string;
    productionTools: string;
    extensible: string;
    limited: string;
    openAndExtensible: string;
    performance: string;
    native2: string;
    higherOverhead: string;
    benchmarkInProgress: string;
    architecture: string;
    coreDirection: string;
    established: string;
    established2: string;
    rustNativeRoadmap: string;
    architectureAndPerformanceComparisonsShouldBe: string;
    notAnObsKiller: string;
    aBetterWayToUseThe: string;
    yourObsConceptsYourWorkflowA: string;
  };
  community: {
    buildItWithUs: string;
    followDevelopmentOpenIssuesProposeFeatures: string;
    viewRepository: string;
    latestRelease: string;
  };
  roadmap: {
    roadmap: string;
    whatSNext: string;
    milestonesStayVisibleButTheyCome: string;
    inProgress: string;
    nativeCapturePipelineStreamOutputAnd: string;
    q3ProductionLayer: string;
    planned: string;
    scenesSourcesTransitions: string;
    dynamicSceneSwitchingOverlaysAndProduction: string;
    planned2: string;
    stableDesktopBuildsAndPlatformSpecific: string;
  };
  history: {
    history: string;
    builtThroughIteration: string;
    revostreamDidnTStartWithA: string;
    firstStepCCore: string;
    buildOnCCodePracticalAt: string;
    secondStepStreamlabsObsStudioNode: string;
    exploredANodeBasedDirectionTied: string;
    thirdStepLibobsRevoLibRust: string;
    useLibobsTodayWhileBuildingRevo: string;
  };
}

export const productContent: Record<Language, SiteContent> = {
  "en": {
    "header": {
      "features": "Features",
      "whyRevostream": "Why RevoStream",
      "roadmap": "Roadmap",
      "history": "History"
    },
    "hero": {
      "withoutLimits": "WITHOUT LIMITS",
      "theOpenSourceAlternativeToClosed": "The open-source alternative to closed streaming studios.",
      "downloadForLinux": " Download for Linux ",
      "viewOnGithub": " View on GitHub",
      "availableFor": "Available for",
      "stable": "Stable",
      "experimental": "Experimental",
      "experimental2": "Experimental"
    },
    "demo": {
      "productDemo": "Product demo",
      "seeTheStudio": "See the studio.",
      "noSubscriptionsNoVendorLockIn": "No subscriptions. No vendor lock-in. Your stream, your stack.",
      "revostreamKeepsTheProductionWorkflowOn": "RevoStream keeps the production workflow on your machine and the architecture open.",
      "record": "● Record",
      "goLive": "⌁ Go live",
      "revostreamControlCenter": "RevoStream Control Center",
      "scenesSourcesToolsAndLiveProduction": " · scenes, sources, tools and live production"
    },
    "features": {
      "features": "Features",
      "everythingYouNeedToGoLive": "Everything you need to go live.",
      "professionalControlsCleanSceneManagementAnd": "Professional controls, clean scene management and an extensible architecture — wrapped in a fast desktop workflow.",
      "liveProduction": "Live Production",
      "professionalToolsForHighQualityStreaming": "Professional tools for high-quality streaming.",
      "flexibleAndPowerfulSceneManagement": "Flexible and powerful scene management.",
      "plugins": "Plugins",
      "extendFunctionalityWithCommunityPlugins": "Extend functionality with community plugins.",
      "builtWithAndForTheCommunity": "Built with and for the community."
    },
    "capabilities": {
      "whatCanIActuallyDoWith": "What can I actually do with it?",
      "productionToolsThat": "Production tools that",
      "feelLikeARealStudio": "feel like a real studio.",
      "notJustAStreamingEngineRevostream": "Not just a streaming engine. RevoStream is built around the things you actually do before, during and after you hit Go Live.",
      "goLive": "Go live",
      "streamWithModernProtocolsAndKeep": "Stream with modern protocols and keep the output under your control.",
      "buildScenes": "Build scenes",
      "cameraScreenBrowserMedia": "Camera · Screen · Browser · Media",
      "composeScenesFromTheSourcesThat": "Compose scenes from the sources that make up your production.",
      "controlProduction": "Control production",
      "scenesTransitionsAudioOverlays": "Scenes · Transitions · Audio · Overlays",
      "switchMixAndControlTheStream": "Switch, mix and control the stream without leaving the desktop studio.",
      "streamAnywhere": "Stream anywhere",
      "twitchYoutubeKickCustomRtmp": "Twitch · YouTube · Kick · Custom RTMP",
      "useStandardOutputsAndCustomEndpoints": "Use standard outputs and custom endpoints for the platforms you choose."
    },
    "protocols": {
      "builtFor": "BUILT FOR",
      "modernStreaming": "MODERN STREAMING"
    },
    "why": {
      "whyRevostream": "Why RevoStream",
      "ownTheStack": "Own the stack.",
      "ownTheStream": "Own the stream.",
      "streamingShouldnTMeanRentingYour": "Streaming shouldn't mean renting your workflow.",
      "revostreamIsBuiltAroundAnOpen": "RevoStream is built around an open-source desktop model: transparent tooling, native performance and a production stack you can inspect, extend and control.",
      "noRecurringSoftwareTax": "No recurring software tax",
      "noSubscriptionWallBetweenYouAnd": "No subscription wall between you and your production setup.",
      "noVendorLockIn": "No vendor lock-in",
      "yourWorkflowIsNotTiedTo": "Your workflow is not tied to one closed platform.",
      "openByDesign": "Open by design",
      "builtInPublicWithACodebase": "Built in public with a codebase the community can follow.",
      "builtForDevelopers": "Built for developers",
      "rustTauriSvelteAndLibobsForm": "Rust, Tauri, Svelte and libobs form the foundation.",
      "theRevoIdea": "THE REVO IDEA",
      "yourStreamShouldBeInfrastructureYou": "“Your stream should be infrastructure you control — not a service you rent.”",
      "builtOnLibobsTodayBuildingIts": "Built on libobs today. Building its own Rust core for tomorrow. The goal is a desktop stack that stays close to the user and becomes increasingly native over time."
    },
    "switch": {
      "whySwitch": "Why switch?",
      "fromClosedPlatforms": "From closed platforms",
      "toAnOpenStack": "to an open stack.",
      "youDonTSwitchBecauseStreaming": "You don't switch because streaming is broken. You switch when you want more control over the tools, the workflow and what happens next.",
      "closedPlatformFirst": "Closed / platform-first",
      "businessModel": "Business model",
      "platformServiceDependencies": "Platform / service dependencies",
      "ecosystemControlled": "Ecosystem-controlled",
      "yourStack": "Your stack",
      "architecture": "Architecture",
      "extensibility": "Extensibility",
      "platformDefined": "Platform-defined",
      "openAndExtensible": "Open & extensible",
      "vendorControlled": "Vendor-controlled",
      "libobsTodayRustCoreNext": "libobs today → Rust core next",
      "protocols": "Protocols",
      "platformIntegrations": "Platform integrations",
      "openProtocols": "Open protocols",
      "development": "Development",
      "productRoadmap": "Product roadmap",
      "openDevelopment": "Open development",
      "platforms": "Platforms",
      "platformSpecificConstraints": "Platform-specific constraints",
      "architectureEvolution": "ARCHITECTURE EVOLUTION",
      "today": "TODAY",
      "compatibilityMatureMediaPipeline": "compatibility · mature media pipeline",
      "next": "NEXT",
      "nativeArchitectureLongTermControl": "native architecture · long-term control",
      "notAnObsKiller": "NOT AN OBS KILLER.",
      "obsProvedThatOpenSourceStreaming": "OBS proved that open-source streaming works.",
      "revostreamTakesThatIdeaInA": "RevoStream takes that idea in a product-focused, modern desktop direction — while evolving from libobs today toward its own Rust-native core tomorrow."
    },
    "comparison": {
      "whyRevostream": "Why RevoStream?",
      "thePowerOfObs": "The power of OBS.",
      "theExperienceOfAModernStudio": "The experience of a modern studio.",
      "yourObsConceptsAndEcosystemWith": "Your OBS concepts and ecosystem — with a modern desktop experience and a roadmap toward a Rust-native architecture.",
      "capability": "Capability",
      "interface": "Interface",
      "classic": "Classic",
      "creatorFocused": "Creator-focused",
      "modernDesktopUi": "Modern desktop UI",
      "obsPlugins": "OBS plugins",
      "native": " Native",
      "supported": " Supported",
      "supported2": " Supported",
      "productionTools": "Production tools",
      "extensible": "Extensible",
      "limited": " Limited",
      "openAndExtensible": " Open & extensible",
      "performance": "Performance",
      "native2": "Native",
      "higherOverhead": "Higher overhead*",
      "benchmarkInProgress": "Benchmark in progress",
      "architecture": "Architecture",
      "coreDirection": "Core direction",
      "established": "Established",
      "established2": "Established",
      "rustNativeRoadmap": "Rust-native roadmap",
      "architectureAndPerformanceComparisonsShouldBe": " Architecture and performance comparisons should be treated as claims to validate with feature-by-feature testing and reproducible benchmarks.\n  ",
      "notAnObsKiller": "NOT AN OBS KILLER.",
      "aBetterWayToUseThe": "A better way to use the ecosystem you already know.",
      "yourObsConceptsYourWorkflowA": "Your OBS concepts. Your workflow. A modern studio experience."
    },
    "community": {
      "buildItWithUs": "Build it with us.",
      "followDevelopmentOpenIssuesProposeFeatures": "Follow development, open issues, propose features or contribute code. RevoStream is evolving in the open — and the roadmap is visible to everyone.",
      "viewRepository": " View repository",
      "latestRelease": " Latest release"
    },
    "roadmap": {
      "roadmap": "Roadmap",
      "whatSNext": "What's next.",
      "milestonesStayVisibleButTheyCome": "Milestones stay visible — but they come after you've seen the product and understood why it exists.",
      "inProgress": "In progress",
      "nativeCapturePipelineStreamOutputAnd": "Native capture pipeline, stream output and scene rendering.",
      "q3ProductionLayer": "Q3 — PRODUCTION LAYER",
      "planned": "Planned",
      "scenesSourcesTransitions": "Scenes · Sources · Transitions",
      "dynamicSceneSwitchingOverlaysAndProduction": "Dynamic scene switching, overlays and production controls.",
      "planned2": "Planned",
      "stableDesktopBuildsAndPlatformSpecific": "Stable desktop builds and platform-specific integrations."
    },
    "history": {
      "history": "History",
      "builtThroughIteration": "Built through iteration.",
      "revostreamDidnTStartWithA": "RevoStream didn't start with a perfect stack. It evolved by following the problems that mattered.",
      "firstStepCCore": "First step — C++ core",
      "buildOnCCodePracticalAt": "Build on C++ code. Practical at the time, but difficult to maintain and reason about long-term.",
      "secondStepStreamlabsObsStudioNode": "Second step — Streamlabs / OBS Studio Node",
      "exploredANodeBasedDirectionTied": "Explored a Node-based direction tied to older versions and limited platform support.",
      "thirdStepLibobsRevoLibRust": "Third step — libobs → revo-lib → Rust",
      "useLibobsTodayWhileBuildingRevo": "Use libobs today while building revo-lib as the path toward a Rust-native core and long-term cross-platform control."
    }
  },
  "pl": {
    "header": {
      "features": "Funkcje",
      "whyRevostream": "Dlaczego RevoStream",
      "roadmap": "Plan rozwoju",
      "history": "Historia"
    },
    "hero": {
      "withoutLimits": "BEZ OGRANICZEŃ",
      "theOpenSourceAlternativeToClosed": "Otwarta alternatywa dla zamkniętych studiów streamingowych.",
      "downloadForLinux": " Pobierz dla Linux ",
      "viewOnGithub": " Zobacz na GitHub",
      "availableFor": "Dostępne dla",
      "stable": "Stabilna",
      "experimental": "Eksperymentalna",
      "experimental2": "Eksperymentalna"
    },
    "demo": {
      "productDemo": "Demo produktu",
      "seeTheStudio": "Zobacz studio.",
      "noSubscriptionsNoVendorLockIn": "Bez subskrypcji. Bez uzależnienia od dostawcy. Twój stream, Twój stack.",
      "revostreamKeepsTheProductionWorkflowOn": "RevoStream utrzymuje workflow produkcyjny na Twoim komputerze, a architekturę pozostawia otwartą.",
      "record": "● Nagraj",
      "goLive": "⌁ Rozpocznij transmisję",
      "revostreamControlCenter": "Centrum sterowania RevoStream",
      "scenesSourcesToolsAndLiveProduction": " · sceny, źródła, narzędzia i produkcja na żywo"
    },
    "features": {
      "features": "Funkcje",
      "everythingYouNeedToGoLive": "Wszystko, czego potrzebujesz, aby rozpocząć transmisję.",
      "professionalControlsCleanSceneManagementAnd": "Profesjonalne sterowanie, przejrzyste zarządzanie scenami i rozszerzalna architektura — w szybkim desktopowym workflow.",
      "liveProduction": "Produkcja na żywo",
      "professionalToolsForHighQualityStreaming": "Profesjonalne narzędzia do streamingu wysokiej jakości.",
      "flexibleAndPowerfulSceneManagement": "Elastyczne i zaawansowane zarządzanie scenami.",
      "plugins": "Pluginy",
      "extendFunctionalityWithCommunityPlugins": "Rozszerzaj funkcjonalność dzięki pluginom społeczności.",
      "builtWithAndForTheCommunity": "Tworzone wspólnie ze społecznością i dla niej."
    },
    "capabilities": {
      "whatCanIActuallyDoWith": "Co właściwie mogę z tym zrobić?",
      "productionToolsThat": "Narzędzia produkcyjne, które",
      "feelLikeARealStudio": "dają poczucie prawdziwego studia.",
      "notJustAStreamingEngineRevostream": "To nie tylko silnik streamingu. RevoStream jest zbudowany wokół rzeczy, które naprawdę robisz przed, w trakcie i po rozpoczęciu transmisji.",
      "goLive": "Rozpocznij transmisję",
      "streamWithModernProtocolsAndKeep": "Streamuj przy użyciu nowoczesnych protokołów i zachowaj kontrolę nad wyjściem.",
      "buildScenes": "Buduj sceny",
      "cameraScreenBrowserMedia": "Kamera · Ekran · Przeglądarka · Media",
      "composeScenesFromTheSourcesThat": "Twórz sceny ze źródeł, które składają się na Twoją produkcję.",
      "controlProduction": "Steruj produkcją",
      "scenesTransitionsAudioOverlays": "Sceny · Przejścia · Audio · Nakładki",
      "switchMixAndControlTheStream": "Przełączaj, miksuj i kontroluj transmisję bez opuszczania desktopowego studia.",
      "streamAnywhere": "Streamuj wszędzie",
      "twitchYoutubeKickCustomRtmp": "Twitch · YouTube · Kick · Własny RTMP",
      "useStandardOutputsAndCustomEndpoints": "Korzystaj ze standardowych wyjść i własnych endpointów dla wybranych platform."
    },
    "protocols": {
      "builtFor": "STWORZONE DLA",
      "modernStreaming": "NOWOCZESNEGO STREAMINGU"
    },
    "why": {
      "whyRevostream": "Dlaczego RevoStream",
      "ownTheStack": "Kontroluj stack.",
      "ownTheStream": "Kontroluj stream.",
      "streamingShouldnTMeanRentingYour": "Streaming nie powinien oznaczać wynajmowania swojego workflow.",
      "revostreamIsBuiltAroundAnOpen": "RevoStream opiera się na otwartym modelu desktopowym: przejrzystych narzędziach, natywnej wydajności i stacku produkcyjnym, który możesz analizować, rozszerzać i kontrolować.",
      "noRecurringSoftwareTax": "Bez cyklicznych opłat za oprogramowanie",
      "noSubscriptionWallBetweenYouAnd": "Bez bariery subskrypcji między Tobą a Twoim setupem produkcyjnym.",
      "noVendorLockIn": "Bez uzależnienia od dostawcy",
      "yourWorkflowIsNotTiedTo": "Twój workflow nie jest związany z jedną zamkniętą platformą.",
      "openByDesign": "Otwarte z założenia",
      "builtInPublicWithACodebase": "Tworzone publicznie, z codebase'em, który społeczność może śledzić.",
      "builtForDevelopers": "Stworzone dla developerów",
      "rustTauriSvelteAndLibobsForm": "Rust, Tauri, Svelte i libobs tworzą fundament projektu.",
      "theRevoIdea": "IDEA REVO",
      "yourStreamShouldBeInfrastructureYou": "„Twój stream powinien być infrastrukturą, którą kontrolujesz — nie usługą, którą wynajmujesz.”",
      "builtOnLibobsTodayBuildingIts": "Dziś oparte na libobs. Jutro budujące własny core w Rust. Celem jest desktopowy stack, który pozostaje blisko użytkownika i z czasem staje się coraz bardziej natywny."
    },
    "switch": {
      "whySwitch": "Dlaczego zmienić?",
      "fromClosedPlatforms": "Z zamkniętych platform",
      "toAnOpenStack": "na otwarty stack.",
      "youDonTSwitchBecauseStreaming": "Nie zmieniasz platformy dlatego, że streaming jest zepsuty. Zmieniasz ją, gdy chcesz większej kontroli nad narzędziami, workflow i tym, co będzie się działo dalej.",
      "closedPlatformFirst": "Zamknięte / platform-first",
      "businessModel": "Model biznesowy",
      "platformServiceDependencies": "Zależność od platformy / usługi",
      "ecosystemControlled": "Kontrolowany przez ekosystem",
      "yourStack": "Twój stack",
      "architecture": "Architektura",
      "extensibility": "Rozszerzalność",
      "platformDefined": "Definiowana przez platformę",
      "openAndExtensible": "Otwarte i rozszerzalne",
      "vendorControlled": "Kontrolowany przez dostawcę",
      "libobsTodayRustCoreNext": "libobs dziś → Rust core jutro",
      "protocols": "Protokoły",
      "platformIntegrations": "Integracje platformowe",
      "openProtocols": "Otwarte protokoły",
      "development": "Rozwój",
      "productRoadmap": "Plan rozwoju produktu",
      "openDevelopment": "Otwarty rozwój",
      "platforms": "Platformy",
      "platformSpecificConstraints": "Ograniczenia platformowe",
      "architectureEvolution": "EWOLUCJA ARCHITEKTURY",
      "today": "DZIŚ",
      "compatibilityMatureMediaPipeline": "kompatybilność · dojrzały pipeline multimedialny",
      "next": "NASTĘPNIE",
      "nativeArchitectureLongTermControl": "natywna architektura · długoterminowa kontrola",
      "notAnObsKiller": "TO NIE JEST „OBS KILLER”.",
      "obsProvedThatOpenSourceStreaming": "OBS udowodnił, że open-source streaming działa.",
      "revostreamTakesThatIdeaInA": "RevoStream rozwija tę ideę w kierunku nowoczesnego, produktowego desktopu — przechodząc od libobs dziś do własnego, natywnego core'a w Rust jutro."
    },
    "comparison": {
      "whyRevostream": "Dlaczego RevoStream?",
      "thePowerOfObs": "Moc OBS.",
      "theExperienceOfAModernStudio": "Doświadczenie nowoczesnego studia.",
      "yourObsConceptsAndEcosystemWith": "Twoje koncepcje i ekosystem OBS — z nowoczesnym doświadczeniem desktopowym i planem przejścia do architektury natywnej dla Rust.",
      "capability": "Możliwość",
      "interface": "Interfejs",
      "classic": "Klasyczny",
      "creatorFocused": "Skupiony na twórcach",
      "modernDesktopUi": "Nowoczesny UI desktopowy",
      "obsPlugins": "Pluginy OBS",
      "native": " Natywne",
      "supported": " Obsługiwane",
      "supported2": " Obsługiwane",
      "productionTools": "Narzędzia produkcyjne",
      "extensible": "Rozszerzalne",
      "limited": " Ograniczone",
      "openAndExtensible": " Otwarte i rozszerzalne",
      "performance": "Wydajność",
      "native2": "Natywne",
      "higherOverhead": "Wyższy narzut*",
      "benchmarkInProgress": "Benchmark w przygotowaniu",
      "architecture": "Architektura",
      "coreDirection": "Kierunek rozwoju core",
      "established": "Nakierowany",
      "established2": "Nakierowany",
      "rustNativeRoadmap": "Plan rozwoju w kierunku natywnego Rusta",
      "architectureAndPerformanceComparisonsShouldBe": " Porównania architektury i wydajności należy traktować jako twierdzenia wymagające weryfikacji testami funkcja po funkcji oraz powtarzalnymi benchmarkami.\n  ",
      "notAnObsKiller": "TO NIE JEST „OBS KILLER”.",
      "aBetterWayToUseThe": "Lepszy sposób na wykorzystanie ekosystemu, który już znasz.",
      "yourObsConceptsYourWorkflowA": "Twoje koncepcje OBS. Twój workflow. Doświadczenie nowoczesnego studia."
    },
    "community": {
      "buildItWithUs": "Buduj z nami.",
      "followDevelopmentOpenIssuesProposeFeatures": "Śledź rozwój, otwieraj zgłoszenia, proponuj funkcje lub kontrybuuj kod. RevoStream rozwija się publicznie — roadmapa jest dostępna dla wszystkich.",
      "viewRepository": " Zobacz repozytorium",
      "latestRelease": " Najnowsze wydanie"
    },
    "roadmap": {
      "roadmap": "Plan rozwoju",
      "whatSNext": "Co dalej.",
      "milestonesStayVisibleButTheyCome": "Kamienie milowe pozostają widoczne — ale pojawiają się dopiero po poznaniu produktu i zrozumieniu, dlaczego powstaje.",
      "inProgress": "W trakcie",
      "nativeCapturePipelineStreamOutputAnd": "Natywny pipeline przechwytywania, wyjście streamu i renderowanie scen.",
      "q3ProductionLayer": "Q3 — WARSTWA PRODUKCYJNA",
      "planned": "Planowane",
      "scenesSourcesTransitions": "Sceny i Źródła · Przejścia",
      "dynamicSceneSwitchingOverlaysAndProduction": "Dynamiczne przełączanie scen, nakładki i sterowanie produkcją.",
      "planned2": "Planowane",
      "stableDesktopBuildsAndPlatformSpecific": "Stabilne wersje desktopowe i integracje specyficzne dla platform."
    },
    "history": {
      "history": "Historia",
      "builtThroughIteration": "Budowane iteracyjnie.",
      "revostreamDidnTStartWithA": "RevoStream nie zaczynał z idealnym stackiem. Ewoluował, rozwiązując problemy, które naprawdę miały znaczenie.",
      "firstStepCCore": "Pierwszy krok — core w C++",
      "buildOnCCodePracticalAt": "Budowa na kodzie C++. Praktyczne rozwiązanie na tamten moment, ale trudne w długoterminowym utrzymaniu i rozwijaniu.",
      "secondStepStreamlabsObsStudioNode": "Drugi krok — Streamlabs / OBS Studio Node",
      "exploredANodeBasedDirectionTied": "Eksploracja kierunku opartego na Node, związanego ze starszymi wersjami i ograniczonym wsparciem platform.",
      "thirdStepLibobsRevoLibRust": "Trzeci krok — libobs → revo-lib → Rust",
      "useLibobsTodayWhileBuildingRevo": "Dziś korzystamy z libobs, budując jednocześnie revo-lib jako drogę do natywnego core'a w Rust i długoterminowej kontroli cross-platform."
    }
  }
};
