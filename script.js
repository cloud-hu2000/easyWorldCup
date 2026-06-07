const matchPresets = [
  {
    tag: "东道主登场",
    tagColor: "green",
    teamA: "加拿大",
    teamB: "波黑",
    codeA: "ca",
    codeB: "ba",
    time: "6月12日 加拿大 vs 波黑",
    reasons: [
      "加拿大是东道主之一，主场氛围会直接拉满，这种比赛天然有情绪价值。",
      "加拿大的速度和冲击力很强，波黑则更依赖经验、支点和中前场配合，节奏会有反差。",
      "如果你只想抓重点，就看加拿大两条边能不能冲起来，以及波黑老将能不能把比赛慢下来。",
    ],
    players: [
      { name: "阿方索·戴维斯", note: "加拿大 · 左路爆点", image: "assets/players/alphonso-davies.jpg" },
      { name: "乔纳森·戴维", note: "加拿大 · 前锋", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jonathan%20David%20asse%20losc%202425%20%28cropped%29.jpg?width=330" },
      { name: "埃丁·哲科", note: "波黑 · 中锋", image: "assets/players/edin-dzeko.jpg" },
    ],
    talkLines: [
      "加拿大这边就看戴维斯能不能把边路跑成高速路。",
      "波黑如果能让哲科舒服拿球，加拿大后防压力会很大。",
      "东道主首战最难的是情绪，踢顺了会很猛，踢急了就容易乱。",
    ],
    posts: ["主场气氛一上来，世界杯的感觉就对了。", "速度和经验的对抗，加拿大这场值得看。", "不只是比赛，也是东道主给世界的一次亮相。"],
  },
  {
    tag: "美国首战",
    tagColor: "orange",
    teamA: "美国",
    teamB: "巴拉圭",
    codeA: "us",
    codeB: "py",
    time: "6月12日 美国 vs 巴拉圭",
    reasons: [
      "美国是三大东道主之一，首战关注度很高，需要用表现把主场热度真正点起来。",
      "美国中前场活力足，巴拉圭南美球队的对抗、缠斗和反击都不好对付，比赛会很硬。",
      "核心看点是美国能不能把控球优势变成进球，巴拉圭能不能用一次反击偷到机会。",
    ],
    players: [
      { name: "普利西奇", note: "美国 · 进攻核心", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Christian%20Pulisic%20USMNT%20v%20Belgium%20Mar%2028%202026-73%20%28cropped%29.jpg?width=330" },
      { name: "泰勒·亚当斯", note: "美国 · 中场屏障", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Tyler%20Adams%2009052026%20%284%29.jpg?width=330" },
      { name: "米格尔·阿尔米隆", note: "巴拉圭 · 反击推进", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Miguel%20Almir%C3%B3n%20Red%20Bull%20Atlanta%205.31.25-069%20%28cropped%29.jpg?width=330" },
    ],
    talkLines: ["美国这场不能只热闹，最后一脚质量才是关键。", "巴拉圭这种队很会把比赛踢碎，美国得有耐心。", "普利西奇一拿球，巴拉圭右路基本就要进入警戒状态。"],
    posts: ["东道主首战，压力和期待一起开球。", "美国踢得越主动，巴拉圭的反击越值得提防。", "这场看完才懂，小组赛也可以很有火药味。"],
  },
  {
    tag: "回归世界杯",
    tagColor: "red",
    teamA: "海地",
    teamB: "苏格兰",
    codeA: "ht",
    codeB: "gb-sct",
    time: "6月13日 海地 vs 苏格兰",
    reasons: [
      "海地和苏格兰都是久别世界杯的球队，这场不一定最豪华，但情绪浓度很高。",
      "苏格兰会靠身体对抗、边路传中和定位球压迫海地；海地需要用速度和反击制造惊喜。",
      "很好看懂：谁先抢到第一点、谁能把混战变成机会，比赛就往谁那边倾斜。",
    ],
    players: [
      { name: "达肯斯·纳宗", note: "海地 · 前锋", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Duckens%20Nazon.jpg?width=330" },
      { name: "安迪·罗伯逊", note: "苏格兰 · 左后卫队长", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Andy%20Robertson%202018.jpg?width=330" },
      { name: "麦克托米奈", note: "苏格兰 · 中场后插上", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Scott%20McTominay%202018.jpg?width=330" },
    ],
    talkLines: ["苏格兰这种定位球质量，海地千万不能乱送角球和任意球。", "海地如果能把反击第一脚传出来，苏格兰后场会很难受。", "麦克托米奈最可怕的是后插上，不能只把他当普通中场看。"],
    posts: ["久别重逢的世界杯，拼的都是一口气。", "海地和苏格兰这场，越看越像一部热血片。", "不是只有豪门才有故事，世界杯每一队都有自己的理由。"],
  },
  {
    tag: "硬碰硬",
    tagColor: "blue",
    teamA: "澳大利亚",
    teamB: "土耳其",
    codeA: "au",
    codeB: "tr",
    time: "6月14日 澳大利亚 vs 土耳其",
    reasons: [
      "澳大利亚的身体对抗和空中球很强，土耳其的中前场技术和远射威胁更突出。",
      "这场会很像节奏争夺战：澳大利亚想把比赛踢得直接，土耳其想让中场控下来。",
      "重点盯土耳其核心能不能摆脱压迫，以及澳大利亚定位球能不能制造混乱。",
    ],
    players: [
      { name: "马修·瑞安", note: "澳大利亚 · 门将队长", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mathew%20Ryan%202018.jpg?width=330" },
      { name: "杰克逊·欧文", note: "澳大利亚 · 中场覆盖", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jackson%20Irvine%202018.jpg?width=330" },
      { name: "恰尔汗奥卢", note: "土耳其 · 中场指挥官", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hakan%20%C3%87alhano%C4%9Flu%202018.jpg?width=330" },
    ],
    talkLines: ["澳大利亚一定会抢第一点，土耳其要保护好禁区前二点球。", "恰尔汗奥卢只要能抬头，远射和直塞都很危险。", "这场别只看谁控球多，定位球和身体对抗可能更决定胜负。"],
    posts: ["硬碰硬的一场，世界杯味儿很足。", "澳大利亚负责把强度拉满，土耳其负责制造灵光一现。", "这种比赛最适合边看边学：足球有技术，也有身体对抗。"],
  },
  {
    tag: "欧洲强队",
    tagColor: "green",
    teamA: "德国",
    teamB: "库拉索",
    codeA: "de",
    codeB: "cw",
    time: "6月14日 德国 vs 库拉索",
    reasons: [
      "德国是传统豪门，首战天然有关注度；库拉索作为小球队挑战强队，很容易踢出故事感。",
      "这场适合看德国怎样破解密集防守：中场调度、边路传中、禁区前远射都会很关键。",
      "如果库拉索能顶住前 20 分钟，比赛悬念就会上来；如果德国早进球，可能会变成火力展示。",
    ],
    players: [
      { name: "穆西亚拉", note: "德国 · 盘带核心", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jamal%20Musiala%202022.jpg?width=330" },
      { name: "维尔茨", note: "德国 · 前场创造力", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Florian%20Wirtz%202022.jpg?width=330" },
      { name: "莱昂德罗·巴库纳", note: "库拉索 · 中场老将", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Leandro%20Bacuna.jpg?width=330" },
    ],
    talkLines: ["德国这场就看禁区前能不能打出连续配合。", "库拉索不能只防低位，反击第一脚必须准。", "穆西亚拉一转身，防线就会被迫往回收。"],
    posts: ["豪门首秀，看的就是掌控力。", "德国的节奏一旦跑起来，比赛会很快失去悬念。", "小球队挑战豪门，这就是世界杯最迷人的剧本之一。"],
  },
  {
    tag: "技术对攻",
    tagColor: "orange",
    teamA: "荷兰",
    teamB: "日本",
    codeA: "nl",
    codeB: "jp",
    time: "6月14日 荷兰 vs 日本",
    reasons: [
      "荷兰整体性强，日本节奏快、脚下细，这场是欧洲体系和亚洲技术流的正面碰撞。",
      "日本面对强队经常能踢出高质量压迫，荷兰则会用身体、传控和边路推进回应。",
      "普通观众重点看中场：谁能把球从压力里摘出来，谁就能把比赛带到自己想要的节奏。",
    ],
    players: [
      { name: "范戴克", note: "荷兰 · 后防核心", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Virgil%20van%20Dijk%202018.jpg?width=330" },
      { name: "加克波", note: "荷兰 · 前场终结", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cody%20Gakpo%202022.jpg?width=330" },
      { name: "久保建英", note: "日本 · 前场灵感", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Takefusa%20Kubo%202019.jpg?width=330" },
    ],
    talkLines: ["日本这场如果能抢下中场二点，荷兰会踢得很别扭。", "范戴克的站位太重要了，他基本决定荷兰后防线高度。", "久保建英拿球别眨眼，他可能一脚就把节奏变快。"],
    posts: ["荷兰和日本这场，技术含量真的够。", "一边是体系，一边是速度和细节，世界杯就该这么好看。", "看懂中场，就看懂了这场比赛大半。"],
  },
  {
    tag: "非洲冠军",
    tagColor: "red",
    teamA: "科特迪瓦",
    teamB: "厄瓜多尔",
    codeA: "ci",
    codeB: "ec",
    time: "6月14日 科特迪瓦 vs 厄瓜多尔",
    reasons: [
      "科特迪瓦有非洲冠军气质，厄瓜多尔身体强、速度快，两队都不怕对抗。",
      "这场可能非常直接：中场抢断后马上向前，边路一对一和禁区前二点球会很热闹。",
      "两队实力接近，小组出线分数可能就靠这种比赛，紧张感会比想象中强。",
    ],
    players: [
      { name: "凯西", note: "科特迪瓦 · 中场硬度", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Franck%20Kessie%202018.jpg?width=330" },
      { name: "阿丁格拉", note: "科特迪瓦 · 边路突破", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Simon%20Adingra.jpg?width=330" },
      { name: "凯塞多", note: "厄瓜多尔 · 中场拦截", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Moises%20Caicedo%202022.jpg?width=330" },
    ],
    talkLines: ["这场中场对抗会很狠，谁能抢下二点谁就占便宜。", "厄瓜多尔推进速度很快，科特迪瓦边后卫不能压得太死。", "凯西这种球员就是大赛保险柜，攻防都得看他。"],
    posts: ["强度拉满的一场，小组赛也能看出淘汰赛味道。", "科特迪瓦和厄瓜多尔，谁都不好惹。", "这场没有太多花活，但每一次对抗都很值钱。"],
  },
  {
    tag: "北欧锋线",
    tagColor: "blue",
    teamA: "瑞典",
    teamB: "突尼斯",
    codeA: "se",
    codeB: "tn",
    time: "6月14日 瑞典 vs 突尼斯",
    reasons: [
      "瑞典的锋线个人能力强，突尼斯防守纪律好，这场很像矛和盾的比赛。",
      "瑞典要靠伊萨克和库卢塞夫斯基制造单点优势，突尼斯则会尽量把比赛切碎、拖进身体对抗。",
      "如果瑞典早进球，比赛会打开；如果突尼斯守住，后半场会越来越紧。",
    ],
    players: [
      { name: "伊萨克", note: "瑞典 · 前锋", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Alexander%20Isak%202019.jpg?width=330" },
      { name: "库卢塞夫斯基", note: "瑞典 · 右路创造", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Dejan%20Kulusevski%202019.jpg?width=330" },
      { name: "斯希里", note: "突尼斯 · 中场屏障", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ellyes%20Skhiri.jpg?width=330" },
    ],
    talkLines: ["瑞典这场就看伊萨克能不能拿住第一下。", "突尼斯如果把节奏拖慢，瑞典会踢得很难受。", "库卢塞夫斯基内切那一下，防守人必须提前卡线路。"],
    posts: ["北欧锋线遇上非洲铁防，这场挺有对味。", "瑞典想打开局面，突尼斯想把比赛拖进泥潭。", "世界杯的小组赛，往往就是这种细节决定命运。"],
  },
  {
    tag: "夺冠热门",
    tagColor: "green",
    teamA: "西班牙",
    teamB: "佛得角",
    codeA: "es",
    codeB: "cv",
    time: "6月15日 西班牙 vs 佛得角",
    reasons: [
      "西班牙是技术流代表，传控和前场压迫都很成熟；佛得角则带着首次世界杯级别舞台的故事感。",
      "这场适合看西班牙如何耐心拆防线，尤其是边路年轻球员能不能打出突破。",
      "佛得角如果能守住阵型并打出反击，会让比赛比纸面实力更有悬念。",
    ],
    players: [
      { name: "亚马尔", note: "西班牙 · 边路天才", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Lamine%20Yamal%202024.jpg?width=330" },
      { name: "罗德里", note: "西班牙 · 中场节拍器", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Rodri%202018.jpg?width=330" },
      { name: "瑞安·门德斯", note: "佛得角 · 进攻老将", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ryan%20Mendes.jpg?width=330" },
    ],
    talkLines: ["西班牙这种比赛最怕急，耐心传到空当才是关键。", "亚马尔一对一的时候，佛得角肯定要有人协防。", "佛得角如果能把反击第一脚传准，比赛不会那么简单。"],
    posts: ["西班牙的球，还是得看节奏和耐心。", "年轻天才登场，世界杯的未来感来了。", "强队不是只看进几个，也看怎么一步步把比赛掌控住。"],
  },
  {
    tag: "巨星对话",
    tagColor: "orange",
    teamA: "比利时",
    teamB: "埃及",
    codeA: "be",
    codeB: "eg",
    time: "6月15日 比利时 vs 埃及",
    reasons: [
      "比利时有欧洲强队底子，埃及有萨拉赫这种一击改变比赛的巨星，这场天然有话题。",
      "比利时会尝试用中场控球和边路冲击压制埃及，埃及则会等待萨拉赫的反击空间。",
      "普通观众只要盯住两点：德布劳内的传球线路，以及萨拉赫启动时身后有没有空间。",
    ],
    players: [
      { name: "德布劳内", note: "比利时 · 中场大脑", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kevin%20De%20Bruyne%202018.jpg?width=330" },
      { name: "多库", note: "比利时 · 边路爆点", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jeremy%20Doku%202023.jpg?width=330" },
      { name: "萨拉赫", note: "埃及 · 进攻王牌", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mohamed%20Salah%202018.jpg?width=330" },
    ],
    talkLines: ["德布劳内只要抬头，比利时前锋就要开始跑了。", "埃及这场反击不多，但给萨拉赫一次就很危险。", "多库这种边路突破，最容易把比赛从平淡变成刺激。"],
    posts: ["一边是体系，一边是巨星，这场很有看头。", "萨拉赫在世界杯舞台上，就是天然主角。", "比利时想控场，埃及想等一瞬间，这就是足球。"],
  },
  {
    tag: "美洲劲旅",
    tagColor: "red",
    teamA: "沙特",
    teamB: "乌拉圭",
    codeA: "sa",
    codeB: "uy",
    time: "6月15日 沙特 vs 乌拉圭",
    reasons: [
      "沙特有爆冷传统，乌拉圭则是南美硬派强队，比赛从气质上就很有反差。",
      "乌拉圭中前场冲击力强，沙特需要靠整体跑动和快速反击找机会。",
      "这场最容易看懂的点是身体对抗：乌拉圭会不断施压，沙特能不能把球摘出来很关键。",
    ],
    players: [
      { name: "萨勒姆·达瓦萨里", note: "沙特 · 反击核心", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Salem%20Al-Dawsari%202018.jpg?width=330" },
      { name: "巴尔韦德", note: "乌拉圭 · 中场发动机", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Federico%20Valverde%202018.jpg?width=330" },
      { name: "努涅斯", note: "乌拉圭 · 前锋冲击", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Darwin%20Nunez%202022.jpg?width=330" },
    ],
    talkLines: ["乌拉圭这强度一上来，沙特出球会很难。", "沙特只要能打到达瓦萨里脚下，反击就有戏。", "巴尔韦德这种覆盖范围，真的像中场多一个人。"],
    posts: ["南美硬度碰上亚洲速度，这场不缺对抗。", "乌拉圭踢得就是一个压迫感。", "沙特想爆冷，必须把每一次反击都踢到极致。"],
  },
  {
    tag: "黑马窗口",
    tagColor: "blue",
    teamA: "伊朗",
    teamB: "新西兰",
    codeA: "ir",
    codeB: "nz",
    time: "6月16日 伊朗 vs 新西兰",
    reasons: [
      "伊朗经验丰富、身体对抗强，新西兰空中球和定位球有特点，这场很可能拼细节。",
      "两队都知道这种比赛不能输，所以节奏可能谨慎，但每一次定位球都会很紧张。",
      "对 casual fan 来说，盯住禁区：传中、头球、二点球，可能就是决定胜负的地方。",
    ],
    players: [
      { name: "塔雷米", note: "伊朗 · 前锋", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mehdi%20Taremi%202018.jpg?width=330" },
      { name: "阿兹蒙", note: "伊朗 · 禁区终结", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Sardar%20Azmoun%202018.jpg?width=330" },
      { name: "克里斯·伍德", note: "新西兰 · 高点中锋", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Chris%20Wood%202018.jpg?width=330" },
    ],
    talkLines: ["新西兰这种高点，伊朗防定位球必须集中。", "塔雷米很会找空间，他不碰球也可能在牵制防线。", "这场别嫌慢，越慢越说明双方都知道不能先犯错。"],
    posts: ["小组赛最紧的，往往就是这种谁都输不起的比赛。", "伊朗和新西兰这场，看的是细节和耐心。", "世界杯不是每场都轰轰烈烈，但每场都有命运感。"],
  },
  {
    tag: "冠军亮相",
    tagColor: "green",
    teamA: "法国",
    teamB: "塞内加尔",
    codeA: "fr",
    codeB: "sn",
    time: "6月16日 法国 vs 塞内加尔",
    reasons: [
      "法国是夺冠热门之一，首战关注点不只是赢球，还要看他们的锋线火力有没有马上进入状态。",
      "塞内加尔身体强、反击快，面对强队从来不是软柿子，这场很可能比纸面实力更胶着。",
      "这场适合看攻防转换：法国想用速度撕开空间，塞内加尔也会等法国压上后的身后机会。",
    ],
    players: [
      { name: "姆巴佩", note: "法国 · 速度王牌", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kylian%20Mbappe%202018.jpg?width=330" },
      { name: "格列兹曼", note: "法国 · 前场连接", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Antoine%20Griezmann%202018.jpg?width=330" },
      { name: "萨迪奥·马内", note: "塞内加尔 · 进攻核心", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Sadio%20Mane%202018.jpg?width=330" },
    ],
    talkLines: [
      "法国只要把姆巴佩冲起来，塞内加尔防线就会被迫后退。",
      "塞内加尔不能只防守，他们反击一旦打出来也很有杀伤。",
      "格列兹曼这种串联太关键了，他能让法国进攻不只是靠速度。",
    ],
    posts: [
      "法国一登场，世界杯的强队气场就来了。",
      "塞内加尔踢得够硬，这场不是简单的强弱对话。",
      "速度、身体、巨星，这就是世界杯小组赛的高级配置。",
    ],
  },
  {
    tag: "北欧硬仗",
    tagColor: "blue",
    teamA: "伊拉克",
    teamB: "挪威",
    codeA: "iq",
    codeB: "no",
    time: "6月16日 伊拉克 vs 挪威",
    reasons: [
      "伊拉克代表亚洲力量，挪威则拥有顶级锋线，这场的看点非常明确：能不能防住高点和冲击。",
      "挪威会尽量把球送到禁区危险区域，伊拉克需要靠整体防守和快速反击寻找机会。",
      "普通观众重点看禁区：谁能争到第一点，谁能保护第二落点，比赛很可能就在这里分胜负。",
    ],
    players: [
      { name: "侯赛因·阿里", note: "伊拉克 · 边路推进", image: "" },
      { name: "哈兰德", note: "挪威 · 终结机器", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Erling%20Haaland%202023.jpg?width=330" },
      { name: "厄德高", note: "挪威 · 中场组织", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Martin%20Odegaard%202018.jpg?width=330" },
    ],
    talkLines: [
      "挪威这场就看厄德高能不能把球舒服送到哈兰德脚下。",
      "伊拉克如果能顶住前半小时，比赛心态会完全不一样。",
      "防哈兰德不能只靠一个中卫，身前身后都得有人保护。",
    ],
    posts: [
      "一边是亚洲韧性，一边是北欧锋线，剧情很直接。",
      "哈兰德在世界杯舞台上，天然就是焦点。",
      "伊拉克想拿分，必须把每一次反击都踢得极致。",
    ],
  },
  {
    tag: "王者登场",
    tagColor: "orange",
    teamA: "阿根廷",
    teamB: "阿尔及利亚",
    codeA: "ar",
    codeB: "dz",
    time: "6月17日 阿根廷 vs 阿尔及利亚",
    reasons: [
      "阿根廷作为世界冠军级别球队，每一次亮相都自带关注度，大家会看他们还能不能延续冠军节奏。",
      "阿尔及利亚速度和技术都有特点，不会甘心只做陪衬，反击和边路一对一值得盯。",
      "这场适合看阿根廷的控制力：他们能不能把比赛节奏压住，并让对手很少拿到舒服反击。",
    ],
    players: [
      { name: "梅西", note: "阿根廷 · 进攻灵魂", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Lionel%20Messi%202022.jpg?width=330" },
      { name: "劳塔罗", note: "阿根廷 · 禁区终结", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Lautaro%20Martinez%202018.jpg?width=330" },
      { name: "马赫雷斯", note: "阿尔及利亚 · 边路王牌", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Riyad%20Mahrez%202018.jpg?width=330" },
    ],
    talkLines: [
      "阿根廷这场最重要的是别急，慢慢把阿尔及利亚防线拉开。",
      "马赫雷斯拿球的时候要小心，他一内切就可能有威胁。",
      "梅西不一定每次都冲刺，但他每次抬头都可能改变比赛。",
    ],
    posts: [
      "阿根廷一出场，故事感就直接拉满。",
      "冠军球队的比赛，看的不只是比分，还有掌控力。",
      "梅西还在世界杯舞台上，这本身就值得多看一眼。",
    ],
  },
  {
    tag: "欧洲节奏",
    tagColor: "green",
    teamA: "奥地利",
    teamB: "约旦",
    codeA: "at",
    codeB: "jo",
    time: "6月17日 奥地利 vs 约旦",
    reasons: [
      "奥地利压迫强、节奏快，约旦则有亚洲杯黑马气质，这场很适合看谁能先把比赛带进自己的方式。",
      "奥地利会用中场逼抢制造失误，约旦需要靠快速出球和边路反击缓解压力。",
      "如果约旦能守住阵型并偷到反击机会，比赛会比很多人想象中更有悬念。",
    ],
    players: [
      { name: "阿拉巴", note: "奥地利 · 后场核心", image: "https://commons.wikimedia.org/wiki/Special:FilePath/David%20Alaba%202018.jpg?width=330" },
      { name: "萨比策", note: "奥地利 · 中场推进", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Marcel%20Sabitzer%202018.jpg?width=330" },
      { name: "穆萨·塔马里", note: "约旦 · 边路爆点", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mousa%20Al-Tamari.jpg?width=330" },
    ],
    talkLines: [
      "奥地利这种压迫强度，约旦后场出球会很受考验。",
      "塔马里只要冲起来，奥地利边后卫就不能压得太深。",
      "这场别只看控球率，谁能把对手失误变成机会才关键。",
    ],
    posts: [
      "奥地利踢的是强度，约旦踢的是韧劲。",
      "小组赛的黑马窗口，往往就藏在这种比赛里。",
      "压迫和反击对上了，比赛一下就有看头。",
    ],
  },
  {
    tag: "巨星时间",
    tagColor: "red",
    teamA: "葡萄牙",
    teamB: "刚果（金）",
    codeA: "pt",
    codeB: "cd",
    time: "6月17日 葡萄牙 vs 刚果（金）",
    reasons: [
      "葡萄牙阵容星味很足，前场选择多；刚果（金）身体条件强，对抗不会轻易吃亏。",
      "这场关键看葡萄牙能不能把技术优势转化成禁区机会，而不是只在外围传来传去。",
      "刚果（金）如果能利用身体和速度打出反击，葡萄牙后防也会有压力。",
    ],
    players: [
      { name: "C罗", note: "葡萄牙 · 传奇前锋", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cristiano%20Ronaldo%202018.jpg?width=330" },
      { name: "B费", note: "葡萄牙 · 传球核心", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Bruno%20Fernandes%202018.jpg?width=330" },
      { name: "姆本巴", note: "刚果（金） · 后防支柱", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Chancel%20Mbemba%202018.jpg?width=330" },
    ],
    talkLines: [
      "葡萄牙这场不能只围着传，禁区里必须有人抢点。",
      "B费的直塞一旦出来，刚果（金）防线会很难回头追。",
      "刚果（金）身体对抗很强，葡萄牙不能把比赛踢得太松。",
    ],
    posts: [
      "葡萄牙的星光一亮，世界杯氛围就来了。",
      "C罗登场的比赛，永远有一种仪式感。",
      "强队想赢，也得先扛住对手的身体对抗。",
    ],
  },
  {
    tag: "豪门硬仗",
    tagColor: "blue",
    teamA: "英格兰",
    teamB: "克罗地亚",
    codeA: "gb-eng",
    codeB: "hr",
    time: "6月17日 英格兰 vs 克罗地亚",
    reasons: [
      "英格兰和克罗地亚都是大赛常客，这场从名字到历史都很有看点，完全不像普通小组赛。",
      "英格兰天赋厚，克罗地亚经验足，中场控制权会直接决定比赛气质。",
      "这场很适合 casual fan 看：盯住贝林厄姆和莫德里奇，基本就能看懂两队谁在掌控节奏。",
    ],
    players: [
      { name: "贝林厄姆", note: "英格兰 · 中场核心", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jude%20Bellingham%202022.jpg?width=330" },
      { name: "凯恩", note: "英格兰 · 前锋队长", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Harry%20Kane%202018.jpg?width=330" },
      { name: "莫德里奇", note: "克罗地亚 · 中场大师", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Luka%20Modric%202018.jpg?width=330" },
    ],
    talkLines: [
      "英格兰这场不能只靠天赋，中场节奏必须稳住。",
      "莫德里奇哪怕年纪大了，摆脱和分球还是教科书级别。",
      "贝林厄姆如果频繁前插，克罗地亚后腰会很难受。",
    ],
    posts: [
      "英格兰和克罗地亚，光看名字就知道不简单。",
      "年轻天赋遇上老派大师，这场中场太值得看。",
      "世界杯小组赛能有这种对话，已经很赚了。",
    ],
  },
  {
    tag: "非洲劲旅",
    tagColor: "green",
    teamA: "加纳",
    teamB: "巴拿马",
    codeA: "gh",
    codeB: "pa",
    time: "6月18日 加纳 vs 巴拿马",
    reasons: ["加纳身体强、转换快，巴拿马踢法直接，这场会很有对抗味。", "两队都把这类比赛当抢分窗口，开局态度会很积极。", "重点看加纳中前场冲击力，以及巴拿马能不能靠定位球制造威胁。"],
    players: [{ name: "库杜斯", note: "加纳 · 前场爆点", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mohammed%20Kudus%202022.jpg?width=330" }, { name: "托马斯·帕尔特伊", note: "加纳 · 中场屏障", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Thomas%20Partey%202018.jpg?width=330" }, { name: "阿尔贝托·金特罗", note: "巴拿马 · 边路推进", image: "" }],
    talkLines: ["加纳这场只要冲起来，巴拿马防线会很累。", "巴拿马不能轻易送中场失误，加纳反击太快。", "这种比赛定位球很可能决定结果。"],
    posts: ["强度拉满的小组赛，加纳和巴拿马都够拼。", "不是豪门对话，但节奏一点不闷。", "世界杯的好看，有时候就在这种硬碰硬里。"],
  },
  {
    tag: "首秀故事",
    tagColor: "blue",
    teamA: "乌兹别克斯坦",
    teamB: "哥伦比亚",
    codeA: "uz",
    codeB: "co",
    time: "6月18日 乌兹别克斯坦 vs 哥伦比亚",
    reasons: ["乌兹别克斯坦有首次世界杯级别舞台的故事感，哥伦比亚则是南美技术流代表。", "哥伦比亚个人能力更强，但乌兹别克斯坦纪律性和反击质量不容忽视。", "这场适合看南美节奏遇到亚洲组织，谁能先稳住中场。"],
    players: [{ name: "肖穆罗多夫", note: "乌兹别克斯坦 · 前锋", image: "" }, { name: "哈梅斯·罗德里格斯", note: "哥伦比亚 · 组织核心", image: "https://commons.wikimedia.org/wiki/Special:FilePath/James%20Rodriguez%202018.jpg?width=330" }, { name: "路易斯·迪亚斯", note: "哥伦比亚 · 边路王牌", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Luis%20Diaz%202022.jpg?width=330" }],
    talkLines: ["哥伦比亚这场就看迪亚斯能不能打开边路。", "乌兹别克斯坦如果阵型不乱，哥伦比亚也没那么容易打穿。", "哈梅斯一抬头，前锋就得马上启动。"],
    posts: ["乌兹别克斯坦的世界杯故事开始了。", "哥伦比亚的球，还是有那种南美灵气。", "一边是新鲜感，一边是技术流，这场挺有味道。"],
  },
  {
    tag: "防反考验",
    tagColor: "orange",
    teamA: "捷克",
    teamB: "南非",
    codeA: "cz",
    codeB: "za",
    time: "6月18日 捷克 vs 南非",
    reasons: ["捷克高点和定位球有优势，南非速度与灵活性更突出。", "这场不会只看控球，禁区前二点球和反击第一脚都很关键。", "两队风格反差明显，普通观众也能很快看懂谁在用什么方式赢球。"],
    players: [{ name: "希克", note: "捷克 · 中锋", image: "assets/players/patrik-schick.jpg" }, { name: "绍切克", note: "捷克 · 中场高点", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Tomas%20Soucek%202019.jpg?width=330" }, { name: "佩西·陶", note: "南非 · 前场核心", image: "" }],
    talkLines: ["捷克的定位球一定要重点看，个子和冲击都很明显。", "南非反击第一脚如果传准，捷克转身会很难受。", "这场谁先拿到二点球，谁就能把节奏抢过去。"],
    posts: ["捷克和南非这场，风格差异很清楚。", "小组赛看懂一场，从定位球和反击开始。", "不是最星光的一场，但对抗和细节都够看。"],
  },
  {
    tag: "欧洲内战",
    tagColor: "red",
    teamA: "瑞士",
    teamB: "波黑",
    codeA: "ch",
    codeB: "ba",
    time: "6月18日 瑞士 vs 波黑",
    reasons: ["瑞士稳定性强，波黑经验足，这场欧洲内战会很讲究细节。", "两队都不太会轻易失控，中场争夺和定位球会成为重点。", "如果波黑能让哲科舒服拿球，瑞士防线压力会明显上来。"],
    players: [{ name: "扎卡", note: "瑞士 · 中场大脑", image: "assets/players/granit-xhaka.jpg" }, { name: "恩博洛", note: "瑞士 · 前锋", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Breel%20Embolo%202022.jpg?width=330" }, { name: "哲科", note: "波黑 · 中锋", image: "assets/players/edin-dzeko.jpg" }],
    talkLines: ["瑞士这种队不花哨，但中场控制很稳。", "波黑只要找到哲科，进攻就有支点。", "这场可能不会特别开放，但每个定位球都很值钱。"],
    posts: ["欧洲内战，看的就是成熟和耐心。", "瑞士稳，波黑老辣，这场有点棋局感。", "小组赛不是只有狂攻，细节也能很好看。"],
  },
  {
    tag: "东道主再战",
    tagColor: "green",
    teamA: "加拿大",
    teamB: "卡塔尔",
    codeA: "ca",
    codeB: "qa",
    time: "6月18日 加拿大 vs 卡塔尔",
    reasons: ["加拿大主场继续登场，情绪和压力都会很足。", "加拿大速度更强，卡塔尔更依赖小范围配合，比赛节奏会有明显反差。", "这场重点看加拿大边路能不能持续冲击，以及卡塔尔能不能把球控下来。"],
    players: [{ name: "阿方索·戴维斯", note: "加拿大 · 左路爆点", image: "assets/players/alphonso-davies.jpg" }, { name: "乔纳森·戴维", note: "加拿大 · 前锋", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jonathan%20David%20asse%20losc%202425%20%28cropped%29.jpg?width=330" }, { name: "阿菲夫", note: "卡塔尔 · 前场灵感", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Qatar%20v%20Lebanon%20%2837%29%20%28cropped%29.jpg?width=330" }],
    talkLines: ["加拿大这场还是要靠边路速度打开局面。", "卡塔尔如果能连续传起来，加拿大就不能只靠冲。", "主场比赛最怕急，加拿大得把节奏稳住。"],
    posts: ["东道主继续登场，气氛不会差。", "速度碰上技术，这场挺适合入门看。", "加拿大想走远，这种比赛必须拿出稳定性。"],
  },
  {
    tag: "亚洲挑战",
    tagColor: "orange",
    teamA: "墨西哥",
    teamB: "韩国",
    codeA: "mx",
    codeB: "kr",
    time: "6月19日 墨西哥 vs 韩国",
    reasons: ["墨西哥主场气氛火热，韩国速度和跑动强，这场节奏不会慢。", "两队都很擅长用边路推进，攻防转换会是最大看点。", "墨西哥想用控球和压迫占主动，韩国会等待反击和前场球星的个人能力。"],
    players: [{ name: "希门尼斯", note: "墨西哥 · 中锋", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Raul%20Jimenez%202018.jpg?width=330" }, { name: "洛萨诺", note: "墨西哥 · 边路突击", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hirving%20Lozano%202018.jpg?width=330" }, { name: "孙兴慜", note: "韩国 · 反击核心", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Son%20Heung-min%202018.jpg?width=330" }],
    talkLines: ["韩国只要把孙兴慜冲起来，墨西哥后场就要紧张。", "墨西哥主场一压上，比赛节奏会很快。", "这场边路对抗会很多，谁回防慢谁就危险。"],
    posts: ["墨西哥和韩国，这场速度感很足。", "主场声浪加上亚洲反击，世界杯味儿来了。", "这场不用懂太多，盯着边路就够精彩。"],
  },
  {
    tag: "东道主硬仗",
    tagColor: "red",
    teamA: "美国",
    teamB: "澳大利亚",
    codeA: "us",
    codeB: "au",
    time: "6月19日 美国 vs 澳大利亚",
    reasons: ["美国主场作战，澳大利亚身体强硬，这场会很有强度。", "美国想靠速度和脚下推进，澳大利亚会用对抗和定位球制造麻烦。", "这类比赛很考验东道主耐心：不能被对手拖进纯身体战。"],
    players: [{ name: "普利西奇", note: "美国 · 进攻核心", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Christian%20Pulisic%20USMNT%20v%20Belgium%20Mar%2028%202026-73%20%28cropped%29.jpg?width=330" }, { name: "麦肯尼", note: "美国 · 中场冲击", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Weston%20McKennie%202019.jpg?width=330" }, { name: "马修·瑞安", note: "澳大利亚 · 门将队长", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mathew%20Ryan%202018.jpg?width=330" }],
    talkLines: ["美国不能只踢漂亮，澳大利亚会把强度拉满。", "澳大利亚定位球真的不能随便送。", "普利西奇如果能一对一突破，美国进攻就活了。"],
    posts: ["东道主遇上硬骨头，这场不轻松。", "美国想证明自己，澳大利亚负责制造麻烦。", "世界杯小组赛的压力，今天很真实。"],
  },
  {
    tag: "情绪拉满",
    tagColor: "blue",
    teamA: "苏格兰",
    teamB: "摩洛哥",
    codeA: "gb-sct",
    codeB: "ma",
    time: "6月19日 苏格兰 vs 摩洛哥",
    reasons: ["苏格兰身体和定位球强，摩洛哥技术和防守纪律都好，这场会很胶着。", "摩洛哥有大赛黑马气质，面对欧洲球队不怵。", "苏格兰想靠冲击制造混乱，摩洛哥则会用快速传切和边路推进回应。"],
    players: [{ name: "罗伯逊", note: "苏格兰 · 左路队长", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Andy%20Robertson%202018.jpg?width=330" }, { name: "麦克托米奈", note: "苏格兰 · 后插上", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Scott%20McTominay%202018.jpg?width=330" }, { name: "阿什拉夫", note: "摩洛哥 · 右路爆点", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Achraf%20Hakimi%202018.jpg?width=330" }],
    talkLines: ["苏格兰定位球一起，摩洛哥禁区会很紧张。", "阿什拉夫这条边如果冲起来，苏格兰左路也得回收。", "这场节奏可能很碎，但对抗会很好看。"],
    posts: ["苏格兰和摩洛哥，情绪和强度都在线。", "黑马气质对上英伦硬度，这场够味。", "世界杯就是这样，不同风格撞在一起才好看。"],
  },
  {
    tag: "桑巴登场",
    tagColor: "green",
    teamA: "巴西",
    teamB: "海地",
    codeA: "br",
    codeB: "ht",
    time: "6月20日 巴西 vs 海地",
    reasons: ["巴西自带巨星光环，面对海地这种比赛大家会看他们能不能踢出观赏性。", "海地会尽量压缩空间，巴西需要靠个人突破和连续传递拆防线。", "这场适合看巴西前场天赋如何把密集防守撕开。"],
    players: [{ name: "维尼修斯", note: "巴西 · 边路爆点", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Vinicius%20Junior%202018.jpg?width=330" }, { name: "罗德里戈", note: "巴西 · 前场终结", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Rodrygo%202018.jpg?width=330" }, { name: "纳宗", note: "海地 · 前锋", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Duckens%20Nazon.jpg?width=330" }],
    talkLines: ["巴西这种比赛不能急，越急越容易被海地拖慢。", "维尼修斯一对一就是最大看点。", "海地只要守到后半段，心理优势就会慢慢上来。"],
    posts: ["桑巴一登场，世界杯的颜色就鲜亮了。", "巴西看的是天赋，也看耐心。", "海地很拼，但巴西的星味确实太足。"],
  },
  {
    tag: "直接对话",
    tagColor: "red",
    teamA: "土耳其",
    teamB: "巴拉圭",
    codeA: "tr",
    codeB: "py",
    time: "6月20日 土耳其 vs 巴拉圭",
    reasons: ["土耳其中场技术强，巴拉圭对抗硬，这场会很像出线竞争的直接对话。", "双方都不想输，比赛可能先谨慎，再逐渐进入对抗节奏。", "重点看土耳其能不能把球控下来，以及巴拉圭能不能把比赛踢碎。"],
    players: [{ name: "恰尔汗奥卢", note: "土耳其 · 中场指挥官", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hakan%20%C3%87alhano%C4%9Flu%202018.jpg?width=330" }, { name: "居莱尔", note: "土耳其 · 前场灵感", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Arda%20Guler%202024.jpg?width=330" }, { name: "阿尔米隆", note: "巴拉圭 · 反击推进", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Miguel%20Almir%C3%B3n%20Red%20Bull%20Atlanta%205.31.25-069%20%28cropped%29.jpg?width=330" }],
    talkLines: ["土耳其如果让恰尔汗奥卢舒服拿球，巴拉圭会很被动。", "巴拉圭最会把比赛切碎，土耳其得保持耐心。", "这场远射和定位球都值得重点看。"],
    posts: ["土耳其和巴拉圭，谁都不会让你舒服踢。", "技术遇上缠斗，这场很世界杯。", "小组出线的味道，已经开始浓了。"],
  },
  {
    tag: "欧洲火花",
    tagColor: "orange",
    teamA: "荷兰",
    teamB: "瑞典",
    codeA: "nl",
    codeB: "se",
    time: "6月20日 荷兰 vs 瑞典",
    reasons: ["荷兰整体性强，瑞典锋线个人能力突出，这场是欧洲风格的强强碰撞。", "荷兰想用传控和边路推进压制，瑞典会寻找伊萨克的纵深空间。", "中场和禁区前沿会很关键，谁能把球送到锋线脚下谁就占优。"],
    players: [{ name: "范戴克", note: "荷兰 · 后防核心", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Virgil%20van%20Dijk%202018.jpg?width=330" }, { name: "加克波", note: "荷兰 · 前场终结", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cody%20Gakpo%202022.jpg?width=330" }, { name: "伊萨克", note: "瑞典 · 前锋", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Alexander%20Isak%202019.jpg?width=330" }],
    talkLines: ["荷兰后场有范戴克，瑞典反击第一脚必须特别准。", "伊萨克拿球那一下很关键，他能不能转身决定威胁。", "这场中场一旦失控，双方都会被打身后。"],
    posts: ["荷兰和瑞典，欧洲味儿很正。", "一边讲体系，一边看锋线天赋。", "这场不是大开大合，但质量很高。"],
  },
  {
    tag: "强度测试",
    tagColor: "blue",
    teamA: "德国",
    teamB: "科特迪瓦",
    codeA: "de",
    codeB: "ci",
    time: "6月20日 德国 vs 科特迪瓦",
    reasons: ["德国要面对科特迪瓦的身体强度，这会是对他们中后场的一次真实测试。", "科特迪瓦不怕对抗，反击和边路单点能力都能给德国制造麻烦。", "重点看德国能不能用传导绕开对抗，而不是被拖入肉搏节奏。"],
    players: [{ name: "穆西亚拉", note: "德国 · 盘带核心", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jamal%20Musiala%202022.jpg?width=330" }, { name: "维尔茨", note: "德国 · 前场创造", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Florian%20Wirtz%202022.jpg?width=330" }, { name: "凯西", note: "科特迪瓦 · 中场硬度", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Franck%20Kessie%202018.jpg?width=330" }],
    talkLines: ["德国这场不能怕身体对抗，球必须转移得更快。", "科特迪瓦只要抢下中场二点，就能直接打反击。", "穆西亚拉这种摆脱，是德国破解硬度的钥匙。"],
    posts: ["德国遇上科特迪瓦，技术和强度正面对话。", "这场能看出德国是不是真的稳。", "强队想走远，就得能赢这种硬仗。"],
  },
  {
    tag: "抢分窗口",
    tagColor: "green",
    teamA: "厄瓜多尔",
    teamB: "库拉索",
    codeA: "ec",
    codeB: "cw",
    time: "6月21日 厄瓜多尔 vs 库拉索",
    reasons: ["厄瓜多尔身体和速度优势明显，库拉索需要靠组织和经验顶住压力。", "这种比赛对小组出线很关键，强队一旦丢分就会很被动。", "重点看厄瓜多尔中场能不能压住，以及库拉索反击有没有质量。"],
    players: [{ name: "凯塞多", note: "厄瓜多尔 · 中场拦截", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Moises%20Caicedo%202022.jpg?width=330" }, { name: "恩纳·瓦伦西亚", note: "厄瓜多尔 · 前锋", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Enner%20Valencia%202018.jpg?width=330" }, { name: "巴库纳", note: "库拉索 · 中场老将", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Leandro%20Bacuna.jpg?width=330" }],
    talkLines: ["厄瓜多尔这种推进速度，库拉索不能让中场被打穿。", "库拉索如果先守住，厄瓜多尔会越来越急。", "凯塞多在中场一抢下来，反击马上就能启动。"],
    posts: ["出线路上的关键抢分战，厄瓜多尔不能大意。", "库拉索想爆冷，得先把节奏拖住。", "这种比赛拼的是效率，不是名气。"],
  },
  {
    tag: "亚洲技术流",
    tagColor: "orange",
    teamA: "突尼斯",
    teamB: "日本",
    codeA: "tn",
    codeB: "jp",
    time: "6月21日 突尼斯 vs 日本",
    reasons: ["日本脚下细、节奏快，突尼斯防守纪律强，这场很考验日本破密防能力。", "突尼斯会压缩空间，逼日本在小范围里做决定。", "重点看日本前场能不能打出连续配合，以及突尼斯反击能不能偷到机会。"],
    players: [{ name: "久保建英", note: "日本 · 前场灵感", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Takefusa%20Kubo%202019.jpg?width=330" }, { name: "三笘薰", note: "日本 · 边路突破", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kaoru%20Mitoma%202022.jpg?width=330" }, { name: "斯希里", note: "突尼斯 · 中场屏障", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ellyes%20Skhiri.jpg?width=330" }],
    talkLines: ["日本这场要有耐心，不能被突尼斯拖进身体对抗。", "三笘薰一对一如果打开，突尼斯防线会被迫倾斜。", "突尼斯反击次数不多，但每次都可能很危险。"],
    posts: ["日本踢密防，看的就是细节和耐心。", "突尼斯很硬，日本很细，这场挺有门道。", "技术流不是只好看，也得能解决问题。"],
  },
  {
    tag: "强队控场",
    tagColor: "red",
    teamA: "西班牙",
    teamB: "沙特",
    codeA: "es",
    codeB: "sa",
    time: "6月21日 西班牙 vs 沙特",
    reasons: ["西班牙会掌控球权，沙特则有爆冷传统和快速反击能力。", "这场看点在于西班牙能不能把传控转化成真正机会，而不是只在外围倒脚。", "沙特如果能守住中路并打出达瓦萨里的速度，比赛会有悬念。"],
    players: [{ name: "亚马尔", note: "西班牙 · 边路天才", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Lamine%20Yamal%202024.jpg?width=330" }, { name: "罗德里", note: "西班牙 · 中场节拍器", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Rodri%202018.jpg?width=330" }, { name: "达瓦萨里", note: "沙特 · 反击核心", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Salem%20Al-Dawsari%202018.jpg?width=330" }],
    talkLines: ["西班牙这场不能只控球，最后一脚必须更狠。", "沙特只要能打出一次高质量反击，就会让比赛变紧。", "亚马尔一拿球，对面边路就必须有人协防。"],
    posts: ["西班牙的球，看的就是耐心和掌控。", "沙特想爆冷，得把反击踢到极致。", "强队赢球，也要先解决密集防守。"],
  },
  {
    tag: "巨星对线",
    tagColor: "green",
    teamA: "比利时",
    teamB: "伊朗",
    codeA: "be",
    codeB: "ir",
    time: "6月21日 比利时 vs 伊朗",
    reasons: ["比利时进攻天赋强，伊朗防守经验足，这场是进攻拆防线的典型题。", "伊朗不会轻易给空间，比利时需要靠德布劳内和边路突破制造机会。", "如果伊朗拖到后半段还没丢球，比利时压力会越来越大。"],
    players: [{ name: "德布劳内", note: "比利时 · 中场大脑", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kevin%20De%20Bruyne%202018.jpg?width=330" }, { name: "多库", note: "比利时 · 边路爆点", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jeremy%20Doku%202023.jpg?width=330" }, { name: "塔雷米", note: "伊朗 · 前锋", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mehdi%20Taremi%202018.jpg?width=330" }],
    talkLines: ["比利时这场就看德布劳内能不能找到身后线路。", "伊朗防守很有经验，不会轻易被一脚打穿。", "多库如果能连续过人，比利时就能把防线扯开。"],
    posts: ["比利时拆伊朗防线，这场像一道战术题。", "强队想赢，先得有耐心。", "伊朗守得越久，比赛越紧张。"],
  },
  {
    tag: "出线关键",
    tagColor: "blue",
    teamA: "乌拉圭",
    teamB: "佛得角",
    codeA: "uy",
    codeB: "cv",
    time: "6月21日 乌拉圭 vs 佛得角",
    reasons: ["乌拉圭强度和冲击力都高，佛得角有黑马故事，这场会很有命运感。", "乌拉圭会不断压迫和冲击禁区，佛得角需要把防守纪律做到极致。", "重点看乌拉圭中场能不能持续抢回球权，以及佛得角有没有反击惊喜。"],
    players: [{ name: "巴尔韦德", note: "乌拉圭 · 中场发动机", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Federico%20Valverde%202018.jpg?width=330" }, { name: "努涅斯", note: "乌拉圭 · 前锋冲击", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Darwin%20Nunez%202022.jpg?width=330" }, { name: "瑞安·门德斯", note: "佛得角 · 进攻老将", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ryan%20Mendes.jpg?width=330" }],
    talkLines: ["乌拉圭一上强度，佛得角出球会很难。", "佛得角不能只守，反击第一脚必须准。", "巴尔韦德覆盖范围太大，像中场多一个人。"],
    posts: ["乌拉圭的比赛，总有一种压迫感。", "佛得角想写童话，就得先扛住强度。", "小组赛的命运线，往往就在这种比赛里。"],
  },
  {
    tag: "高点对抗",
    tagColor: "orange",
    teamA: "新西兰",
    teamB: "埃及",
    codeA: "nz",
    codeB: "eg",
    time: "6月22日 新西兰 vs 埃及",
    reasons: ["新西兰空中球有特点，埃及有萨拉赫这种能一脚改变比赛的球星。", "这场会在两种方式之间摇摆：新西兰找高点，埃及找速度和反击。", "普通观众重点看禁区和边路，机会大概率从这两个地方来。"],
    players: [{ name: "克里斯·伍德", note: "新西兰 · 高点中锋", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Chris%20Wood%202018.jpg?width=330" }, { name: "萨拉赫", note: "埃及 · 进攻王牌", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mohamed%20Salah%202018.jpg?width=330" }, { name: "特雷泽盖", note: "埃及 · 边路突击", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Trezeguet%202018.jpg?width=330" }],
    talkLines: ["新西兰这种传中，埃及中卫必须盯住第二点。", "埃及反击只要给萨拉赫空间，就会很危险。", "这场别只看脚下，空中球也是主要剧情。"],
    posts: ["高点遇上巨星，这场看点很清楚。", "萨拉赫在场，埃及永远有一击制胜的可能。", "新西兰踢得直接，但直接也能很有效。"],
  },
  {
    tag: "冠军考题",
    tagColor: "green",
    teamA: "阿根廷",
    teamB: "奥地利",
    codeA: "ar",
    codeB: "at",
    time: "6月22日 阿根廷 vs 奥地利",
    reasons: ["阿根廷要面对奥地利的高压迫，这会是冠军级球队控场能力的考题。", "奥地利会尝试抢节奏，阿根廷需要用传控和经验把压力化解掉。", "重点看梅西和中场能不能找到压迫身后的空当。"],
    players: [{ name: "梅西", note: "阿根廷 · 进攻灵魂", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Lionel%20Messi%202022.jpg?width=330" }, { name: "德保罗", note: "阿根廷 · 中场跑动", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Rodrigo%20De%20Paul%202018.jpg?width=330" }, { name: "萨比策", note: "奥地利 · 中场推进", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Marcel%20Sabitzer%202018.jpg?width=330" }],
    talkLines: ["奥地利一压上，阿根廷出球质量就很关键。", "梅西如果能在中路转身，奥地利防线马上会退。", "这场不是看阿根廷能不能控球，而是看他们怎么破压迫。"],
    posts: ["冠军球队遇上高压迫，这场有技术含量。", "阿根廷的从容，是被逼出来的。", "梅西一脚传球，还是能让比赛突然安静。"],
  },
  {
    tag: "强队冲击",
    tagColor: "red",
    teamA: "法国",
    teamB: "伊拉克",
    codeA: "fr",
    codeB: "iq",
    time: "6月22日 法国 vs 伊拉克",
    reasons: ["法国整体实力更强，但伊拉克会用整体防守和反击尽量拖住比赛。", "这场适合看法国如何面对低位防守，以及他们的前场速度能不能早点破局。", "如果伊拉克守住前半小时，法国的耐心和临门一脚会被放大检验。"],
    players: [{ name: "姆巴佩", note: "法国 · 速度王牌", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kylian%20Mbappe%202018.jpg?width=330" }, { name: "楚阿梅尼", note: "法国 · 中场屏障", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Aurelien%20Tchouameni%202022.jpg?width=330" }, { name: "阿里·阿德南", note: "伊拉克 · 后场老将", image: "" }],
    talkLines: ["法国这场最怕急，低位防守不能硬撞。", "伊拉克如果守得住，反击一次就可能让法国紧张。", "姆巴佩在左路一启动，比赛节奏就变了。"],
    posts: ["法国想赢，也得先解一道密防题。", "强队的比赛，耐心比天赋更重要。", "伊拉克这场只要扛住，就有故事。"],
  },
  {
    tag: "锋线碰撞",
    tagColor: "blue",
    teamA: "挪威",
    teamB: "塞内加尔",
    codeA: "no",
    codeB: "sn",
    time: "6月23日 挪威 vs 塞内加尔",
    reasons: ["挪威有哈兰德，塞内加尔有强硬防线和快速反击，这场身体对抗会很足。", "两队都不缺冲击力，禁区内的对抗和传中质量会很关键。", "重点看塞内加尔能不能限制哈兰德，以及挪威能不能防住马内的反击。"],
    players: [{ name: "哈兰德", note: "挪威 · 终结机器", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Erling%20Haaland%202023.jpg?width=330" }, { name: "厄德高", note: "挪威 · 中场组织", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Martin%20Odegaard%202018.jpg?width=330" }, { name: "马内", note: "塞内加尔 · 进攻核心", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Sadio%20Mane%202018.jpg?width=330" }],
    talkLines: ["挪威这场就看厄德高和哈兰德连线能不能打出来。", "塞内加尔身体强，防哈兰德不会只靠一个人。", "马内只要拿到空间，挪威后防也会很慌。"],
    posts: ["哈兰德对上塞内加尔，这场很有力量感。", "锋线明星和硬派防线，世界杯味儿太足。", "一场球，两种冲击力。"],
  },
  {
    tag: "反击对话",
    tagColor: "orange",
    teamA: "约旦",
    teamB: "阿尔及利亚",
    codeA: "jo",
    codeB: "dz",
    time: "6月23日 约旦 vs 阿尔及利亚",
    reasons: ["约旦有黑马韧性，阿尔及利亚技术和速度都不错，这场会很讲反击效率。", "两队都可能先稳防守，再利用边路和转换找机会。", "重点看谁能把不多的机会踢成真正威胁。"],
    players: [{ name: "塔马里", note: "约旦 · 边路爆点", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mousa%20Al-Tamari.jpg?width=330" }, { name: "马赫雷斯", note: "阿尔及利亚 · 边路王牌", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Riyad%20Mahrez%202018.jpg?width=330" }, { name: "本纳赛尔", note: "阿尔及利亚 · 中场推进", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ismael%20Bennacer%202019.jpg?width=330" }],
    talkLines: ["这场谁先丢球，谁就会被迫把节奏打开。", "塔马里和马赫雷斯这两条边都值得盯。", "机会不会太多，最后一脚质量就是胜负手。"],
    posts: ["约旦和阿尔及利亚，看的是反击质量。", "黑马韧性遇上边路天赋，这场很有悬念。", "世界杯的小组赛，效率就是命。"],
  },
  {
    tag: "强队验货",
    tagColor: "green",
    teamA: "葡萄牙",
    teamB: "乌兹别克斯坦",
    codeA: "pt",
    codeB: "uz",
    time: "6月23日 葡萄牙 vs 乌兹别克斯坦",
    reasons: ["葡萄牙星味足，乌兹别克斯坦组织性强，这场是强队面对新军的典型考验。", "葡萄牙需要早点把优势转化成进球，否则比赛会越踢越紧。", "乌兹别克斯坦如果守住中路并打出反击，能给葡萄牙制造麻烦。"],
    players: [{ name: "C罗", note: "葡萄牙 · 传奇前锋", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cristiano%20Ronaldo%202018.jpg?width=330" }, { name: "B费", note: "葡萄牙 · 传球核心", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Bruno%20Fernandes%202018.jpg?width=330" }, { name: "肖穆罗多夫", note: "乌兹别克斯坦 · 前锋", image: "" }],
    talkLines: ["葡萄牙不能只围着传，禁区里一定要有人抢点。", "乌兹别克斯坦如果不乱，葡萄牙也要耐心拆。", "B费一脚直塞，往往比十脚横传更有威胁。"],
    posts: ["葡萄牙的星光，还是足够吸睛。", "强队踢新军，看的就是破局能力。", "乌兹别克斯坦不怵，比赛才有味道。"],
  },
  {
    tag: "经典大赛味",
    tagColor: "red",
    teamA: "英格兰",
    teamB: "加纳",
    codeA: "gb-eng",
    codeB: "gh",
    time: "6月23日 英格兰 vs 加纳",
    reasons: ["英格兰阵容厚，加纳身体和反击都强，这场名字上就很有大赛味。", "英格兰需要用中场控制压住加纳的转换速度。", "加纳如果能把比赛带进对抗和冲刺，英格兰会踢得不舒服。"],
    players: [{ name: "贝林厄姆", note: "英格兰 · 中场核心", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jude%20Bellingham%202022.jpg?width=330" }, { name: "凯恩", note: "英格兰 · 前锋队长", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Harry%20Kane%202018.jpg?width=330" }, { name: "库杜斯", note: "加纳 · 前场爆点", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mohammed%20Kudus%202022.jpg?width=330" }],
    talkLines: ["英格兰这场不能让加纳打出连续反击。", "贝林厄姆如果频繁前插，加纳中场会很难盯。", "库杜斯这种球员，一次摆脱就能把比赛点燃。"],
    posts: ["英格兰对加纳，这场有大赛质感。", "天赋、身体、速度，全都凑齐了。", "小组赛能看到这种对话，已经值了。"],
  },
];

const fallbackPlayers = ["队长", "核心中场", "锋线尖刀"];
let activeIndex = 0;
let currentPage = 0;
const pageSize = 5;

const prevPageButton = document.querySelector("#prevPage");
const nextPageButton = document.querySelector("#nextPage");
const pageInfo = document.querySelector("#pageInfo");
const matchList = document.querySelector("#matchList");
const reasonsEl = document.querySelector("#reasons");
const playersEl = document.querySelector("#players");
const talkLinesEl = document.querySelector("#talkLines");
const postsEl = document.querySelector("#posts");
const footerDialog = document.querySelector("#footerDialog");
const footerDialogTitle = document.querySelector("#footerDialogTitle");
const footerDialogBody = document.querySelector("#footerDialogBody");

const footerInfo = {
  about: {
    title: "关于我们",
    body: "作者微信 cloudhu2000。如果你是技术小白，我正好也在做 AI 陪跑，欢迎联系。",
  },
  feedback: {
    title: "反馈建议",
    body: "作者微信 cloudhu2000。如果你是技术小白，我正好也在做 AI 陪跑，欢迎联系。",
  },
  privacy: {
    title: "隐私政策",
    body: "本应用为纯前端应用，不设置账号登录，不主动收集、存储或上传个人身份信息。页面内容与交互主要在你的浏览器本地运行；如页面加载国旗、球员图片等第三方公开资源，相关请求可能由资源提供方按其规则处理。若后续新增数据收集或服务端功能，将及时在页面中更新说明。",
  },
};

function flagUrl(code) {
  return `https://flagcdn.com/w80/${code}.png`;
}

function escapeHtml(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

function listItems(items) {
  return items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function initials(name) {
  return [...name].slice(0, 2).join("");
}

function createFallbackAvatar(text) {
  const avatar = document.createElement("span");
  avatar.className = "avatar";
  avatar.textContent = text;
  return avatar;
}

function renderMatchList() {
  const totalPages = Math.ceil(matchPresets.length / pageSize);
  const start = currentPage * pageSize;
  const pageMatches = matchPresets.slice(start, start + pageSize);

  matchList.innerHTML = pageMatches
    .map((match, index) => {
      const matchIndex = start + index;
      return `
        <button class="match ${matchIndex === activeIndex ? "active" : ""}" type="button" data-index="${matchIndex}">
          <span class="tag ${match.tagColor}">${match.tag}</span>
          <span class="time">${match.time}</span>
          <img class="flag-img" src="${flagUrl(match.codeA)}" alt="${match.teamA}国旗" />
          <strong>${match.teamA}</strong>
          <b>VS</b>
          <img class="flag-img" src="${flagUrl(match.codeB)}" alt="${match.teamB}国旗" />
          <strong>${match.teamB}</strong>
        </button>
      `;
    })
    .join("");

  pageInfo.textContent = `${currentPage + 1} / ${totalPages}`;
  prevPageButton.disabled = currentPage === 0;
  nextPageButton.disabled = currentPage === totalPages - 1;

  matchList.querySelectorAll(".match").forEach((button) => {
    button.addEventListener("click", () => setActiveMatch(Number(button.dataset.index)));
  });
}

function render(data) {
  reasonsEl.innerHTML = listItems(data.reasons);
  talkLinesEl.innerHTML = listItems(data.talkLines);
  postsEl.innerHTML = listItems(data.posts);
  playersEl.innerHTML = data.players
    .map((player) => {
      const image = player.image
        ? `<img class="player-photo" src="${player.image}" alt="${player.name}照片" loading="lazy" onerror="this.replaceWith(createFallbackAvatar('${escapeHtml(initials(player.name))}'))" />`
        : `<span class="avatar">${initials(player.name)}</span>`;

      return `
        <article class="player">
          ${image}
          <strong>${escapeHtml(player.name)}</strong>
          <small>${escapeHtml(player.note)}</small>
        </article>
      `;
    })
    .join("");
}

function createStaticResult(teamA, teamB, time) {
  const preset = matchPresets.find((match) => match.teamA === teamA && match.teamB === teamB);
  if (preset) return preset;

  return {
    teamA,
    teamB,
    time,
    reasons: [
      `${teamA} 对阵 ${teamB}，天然就有对抗感，适合从球队风格和明星球员入手看。`,
      "重点看谁先掌握节奏，谁能把比赛带进自己舒服的方式。",
      "如果你不懂战术，就盯住反击、定位球和门前机会，基本不会错过重点。",
    ],
    players: fallbackPlayers.map((role, index) => ({
      name: index === 0 ? `${teamA}${role}` : index === 1 ? `${teamB}${role}` : "关键替补",
      note: index === 0 ? `${teamA} · 必看` : index === 1 ? `${teamB} · 必看` : "可能改变比赛",
      image: "",
    })),
    talkLines: [
      `这场就看 ${teamA} 能不能先把节奏压住。`,
      `${teamB} 只要反击打起来，比赛马上就会变得很刺激。`,
      "这种比赛最怕定位球，细节可能直接决定结果。",
    ],
    posts: [
      `${teamA} vs ${teamB}，今晚的情绪价值给满了。`,
      "不一定全懂，但这一场真的看进去了。",
      "世界杯的魅力就是，哨声一响，故事就开始了。",
    ],
  };
}

function setActiveMatch(index) {
  activeIndex = index;
  currentPage = Math.floor(activeIndex / pageSize);
  const match = matchPresets[index];
  renderMatchList();
  render(match);
}

function getMatchDay(match) {
  const result = match.time.match(/^6月(\d+)日/);
  return result ? Number(result[1]) : null;
}

function getUtc8TodayParts(now = new Date()) {
  const utc8 = new Date(now.getTime() + 8 * 60 * 60 * 1000);
  return {
    year: utc8.getUTCFullYear(),
    month: utc8.getUTCMonth() + 1,
    day: utc8.getUTCDate(),
  };
}

function findInitialMatchIndex() {
  const days = matchPresets.map(getMatchDay).filter((day) => day !== null);
  const firstDay = Math.min(...days);
  const lastDay = Math.max(...days);
  const today = getUtc8TodayParts();

  if (today.year !== 2026 || today.month !== 6 || today.day < firstDay || today.day > lastDay) {
    return 0;
  }

  const todayIndex = matchPresets.findIndex((match) => getMatchDay(match) === today.day);
  return todayIndex === -1 ? 0 : todayIndex;
}


prevPageButton.addEventListener("click", () => {
  if (currentPage === 0) return;
  currentPage -= 1;
  setActiveMatch(currentPage * pageSize);
});

nextPageButton.addEventListener("click", () => {
  const totalPages = Math.ceil(matchPresets.length / pageSize);
  if (currentPage >= totalPages - 1) return;
  currentPage += 1;
  setActiveMatch(currentPage * pageSize);
});

document.querySelectorAll("[data-footer-topic]").forEach((button) => {
  button.addEventListener("click", () => {
    const info = footerInfo[button.dataset.footerTopic];
    if (!info) return;
    footerDialogTitle.textContent = info.title;
    footerDialogBody.innerHTML = `<p>${escapeHtml(info.body)}</p>`;
    footerDialog.showModal();
  });
});

footerDialog.querySelector(".dialog-close").addEventListener("click", () => footerDialog.close());

footerDialog.addEventListener("click", (event) => {
  if (event.target === footerDialog) {
    footerDialog.close();
  }
});

setActiveMatch(findInitialMatchIndex());
