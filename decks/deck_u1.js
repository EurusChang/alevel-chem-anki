/* Unit 1 全考点卡组 —— 由5个topic起草+独立审核流水线生成，11处审核修正已应用 */
window.CHEM_DECKS = window.CHEM_DECKS || [];
window.CHEM_DECKS.push({
 "id": "u1",
 "title": "Unit 1 · Structure, Bonding & Intro Organic",
 "subtitle": "WCH11 · Topic 1–5 · 全考点卡组",
 "exam": "WCH11",
 "topics": [
  {
   "id": "t1",
   "title": "Formulae, equations & amounts",
   "cn": "物质的量与计算",
   "branches": [
    {
     "label": "物质的量 Amount of substance",
     "items": [
      "n = m ÷ M（g mol⁻¹）",
      {
       "t": "⚠ n = cV，V 必须换 dm³",
       "q": "25.0 cm³ of 0.150 mol dm⁻³ NaOH——求 n(NaOH)。",
       "a": "n = cV = 0.150 × (25.0÷1000) = 3.75×10⁻³ mol\n✗ 直接 0.150×25.0 = 3.75 mol（大了一千倍，一眼假）"
      },
      {
       "t": "⚠ 气体 RTP: V ÷ 24000 cm³",
       "q": "RTP 下 720 cm³ CO₂ 是多少 mol？1 mol 气体在 RTP 占多少体积？",
       "a": "n = 720 ÷ 24000 = 0.0300 mol\n1 mol 气体 @RTP = 24 dm³ = 24000 cm³（只适用气体，与种类无关）"
      },
      "⚠ pV=nRT 用 Pa/m³/K，+273",
      "R = 8.31 J mol⁻¹ K⁻¹",
      "N_A = 6.02×10²³ mol⁻¹",
      {
       "t": "limiting reagent: 比 mol÷系数",
       "q": "0.40 mol Al 与 0.36 mol O₂ 反应（4Al + 3O₂ → 2Al₂O₃），谁是 limiting reagent？",
       "a": "各除以系数：Al 0.40÷4 = 0.10；O₂ 0.36÷3 = 0.12\n小者为限量 → Al is limiting\n✗ 直接比 mol 大小或比质量"
      }
     ]
    },
    {
     "label": "化学式与方程式 Formulae & equations",
     "items": [
      "⚠ Ar: weighted mean + 1/12 C-12",
      "empirical: simplest ratio",
      {
       "t": "MF = (EF)ₙ，n = Mr÷EF",
       "q": "某化合物实验式 CH₂O，Mr = 90.0——求分子式。",
       "a": "EF 质量 = 12+2+16 = 30\nn = 90 ÷ 30 = 3 → C₃H₆O₃\n口径：MF = (EF)ₙ，n = Mr ÷ EF 质量"
      },
      "⚠ ionic equation 标 state symbols",
      "只拆可溶强电解质",
      {
       "t": "删 spectator ions",
       "y": "2023.6 真题 · Q20",
       "focus": "重点看离子方程式与原子经济部分",
       "qimg": [
        "decks/media/2023_6_q20_p12.jpg",
        "decks/media/2023_6_q20_p13.jpg",
        "decks/media/2023_6_q20_p14.jpg"
       ],
       "aimg": [
        "decks/media/2023_6_q20_ms17.jpg",
        "decks/media/2023_6_q20_ms18.jpg",
        "decks/media/2023_6_q20_ms19.jpg",
        "decks/media/2023_6_q20_ms20.jpg"
       ]
      },
      {
       "t": "⚠ 水合物用水合 Mr (246.4)",
       "y": "2024.10 真题 · Q17",
       "focus": "全题：NaOH·xH₂O 作图求 x",
       "qimg": [
        "decks/media/2024_10_q17_p12.jpg",
        "decks/media/2024_10_q17_p13.jpg",
        "decks/media/2024_10_q17_p14.jpg"
       ],
       "aimg": [
        "decks/media/2024_10_q17_ms12.jpg",
        "decks/media/2024_10_q17_ms13.jpg",
        "decks/media/2024_10_q17_ms14.jpg",
        "decks/media/2024_10_q17_ms15.jpg"
       ]
      }
     ]
    },
    {
     "label": "产率与原子经济 Yield & AE",
     "items": [
      "yield = actual÷theoretical ×100",
      "⚠ AE 只看方程式 Mr",
      {
       "t": "AE = 目标Mr×系数 ÷ Σ(Mr×系数)反应物",
       "q": "CaCO₃ → CaO + CO₂，求 CaO 的 atom economy。[Mr: 100.1 / 56.1 / 44.0]",
       "a": "AE = 56.1 ÷ 100.1 × 100 = 56.0%\n分母 = 全部反应物的 Mr×系数；只看方程式，与实验产率无关"
      },
      "addition 反应 AE = 100%",
      "yield<100%: 副反应/损失"
     ]
    },
    {
     "label": "酸与离子检验 Acids & ion tests",
     "items": [
      "acid+metal→salt+H₂",
      "acid+carbonate→CO₂",
      "CO₂: limewater turns milky",
      {
       "t": "⚠ SO₄²⁻: 稀HCl酸化+BaCl₂",
       "q": "How would you test for sulfate ions? 写全试剂与现象，并解释为什么先加稀 HCl。",
       "a": "① Add dilute HCl, then barium chloride solution\n② white precipitate (BaSO₄)\n③ 先酸化排除 CO₃²⁻/SO₃²⁻ 干扰（它们的钡盐溶于酸）\n✗ 用稀 H₂SO₄ 酸化——自带 SO₄²⁻，整问作废"
      },
      {
       "t": "⚠ 卤离子: 稀HNO₃+AgNO₃",
       "q": "检验 Br⁻ 的试剂与现象？为什么酸只能用稀 HNO₃？",
       "a": "Add dilute nitric acid then silver nitrate solution → cream precipitate (AgBr)\nCl⁻ white / I⁻ yellow\n✗ 用稀 HCl——自带 Cl⁻ 会出白色沉淀干扰"
      },
      {
       "t": "NH₃: damp red litmus→blue",
       "q": "如何证明溶液中含 NH₄⁺？写操作与现象（含那个必写的词）。",
       "a": "Add NaOH solution and warm gently\ndamp red litmus paper turns blue\n⚠ 漏写 damp 扣分——干石蕊纸不变色"
      }
     ]
    },
    {
     "label": "答题规范 Exam technique",
     "items": [
      "⚠ 全英文作答",
      "⚠ 3分题写3点+结论句",
      "⚠ 现象只写看得见的",
      "s.f. 跟题目最少位",
      "中间不四舍五入"
     ]
    }
   ],
   "terms": [
    {
     "en": "relative atomic mass (Ar)",
     "cn": "相对原子质量",
     "def": "Weighted mean mass of an atom compared to 1/12 the mass of an atom of carbon-12."
    },
    {
     "en": "relative formula mass (Mr)",
     "cn": "相对分子/式量",
     "def": "Weighted mean mass of a formula unit compared to 1/12 the mass of a carbon-12 atom."
    },
    {
     "en": "molar mass",
     "cn": "摩尔质量",
     "def": "Mass per mole of a substance, measured in g mol⁻¹."
    },
    {
     "en": "mole",
     "cn": "摩尔",
     "def": "Amount of substance containing as many particles as atoms in 12 g of carbon-12."
    },
    {
     "en": "Avogadro constant",
     "cn": "阿伏伽德罗常数",
     "def": "Number of particles per mole of substance; 6.02×10²³ mol⁻¹."
    },
    {
     "en": "empirical formula",
     "cn": "实验式",
     "def": "Simplest whole number ratio of atoms of each element in a compound."
    },
    {
     "en": "molecular formula",
     "cn": "分子式",
     "def": "Actual number of atoms of each element in one molecule of a compound."
    },
    {
     "en": "spectator ion",
     "cn": "旁观离子",
     "def": "Ion unchanged in a reaction and omitted from the ionic equation."
    },
    {
     "en": "state symbols",
     "cn": "状态符号",
     "def": "(s), (l), (g) and (aq), showing physical states of species in equations."
    },
    {
     "en": "limiting reagent",
     "cn": "限量试剂",
     "def": "Reactant fully used up first, which determines the maximum amount of product."
    },
    {
     "en": "percentage yield",
     "cn": "百分产率",
     "def": "Actual amount of product divided by theoretical amount, multiplied by 100."
    },
    {
     "en": "theoretical yield",
     "cn": "理论产量",
     "def": "Maximum amount of product predicted from the balanced equation."
    },
    {
     "en": "atom economy",
     "cn": "原子经济性",
     "def": "(Mr × coefficient) of the desired product divided by the sum of (Mr × coefficient) of all reactants, times 100."
    },
    {
     "en": "molar volume",
     "cn": "气体摩尔体积",
     "def": "Volume occupied by one mole of any gas; 24 dm³ at RTP."
    },
    {
     "en": "ideal gas equation",
     "cn": "理想气体方程",
     "def": "pV = nRT, with p in Pa, V in m³ and T in K."
    },
    {
     "en": "concentration",
     "cn": "浓度",
     "def": "Amount of solute in mol per dm³ of solution."
    },
    {
     "en": "standard solution",
     "cn": "标准溶液",
     "def": "A solution whose concentration is accurately known."
    },
    {
     "en": "water of crystallisation",
     "cn": "结晶水",
     "def": "Water molecules included in the crystal structure of a hydrated salt."
    },
    {
     "en": "anhydrous",
     "cn": "无水的",
     "def": "Containing no water of crystallisation."
    },
    {
     "en": "effervescence",
     "cn": "冒气泡",
     "def": "Bubbling seen as a gas is released during a reaction."
    },
    {
     "en": "precipitate",
     "cn": "沉淀",
     "def": "Insoluble solid formed when two solutions are mixed."
    },
    {
     "en": "stoichiometry",
     "cn": "化学计量比",
     "def": "Molar ratio of reactants and products shown by a balanced equation."
    }
   ],
   "cards": [
    {
     "type": "concept",
     "front": "用英文默写 relative atomic mass (Ar) 的定义（两个采分点）",
     "back": "① \"the weighted mean mass of an atom of an element\"（加权平均质量）\n② \"compared to 1/12 the mass of an atom of carbon-12\"（对比碳-12 的 1/12）\n两点缺一不可，漏 weighted mean 或 1/12 C-12 都扣分",
     "tags": [
      "定义背诵",
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "relative formula mass (Mr) 和 molar mass 的定义？",
     "back": "① Mr: \"the weighted mean mass of a formula unit compared to 1/12 the mass of an atom of carbon-12\"\n② molar mass = mass per mole of substance，单位 g mol⁻¹\n③ 数值相同，但 Mr 无单位、molar mass 有单位",
     "tags": [
      "定义背诵"
     ]
    },
    {
     "type": "concept",
     "front": "Avogadro constant 定义？1 mol H₂O 有多少分子、多少原子？",
     "back": "① N_A = 6.02×10²³ mol⁻¹ = number of particles per mole\n② 1 mol H₂O 含 6.02×10²³ 个 molecules\n③ 问 atoms 要 ×3 = 1.81×10²⁴（别忘乘化学式内原子个数）",
     "tags": [
      "定义背诵",
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "empirical formula 的英文定义？C₆H₁₂O₆ 的实验式是？",
     "back": "① \"the simplest whole number ratio of atoms of each element in a compound\"\n② 关键词: simplest + whole number ratio 两个都要\n③ C₆H₁₂O₆ → CH₂O；离子化合物只有 empirical formula（如 NaCl）",
     "tags": [
      "定义背诵"
     ]
    },
    {
     "type": "concept",
     "front": "molecular formula 定义？与 empirical formula 如何互推？",
     "back": "① \"the actual number of atoms of each element in one molecule\"\n② MF = (EF)ₙ，n = Mr ÷ EF 的质量\n③ 例: EF=CH₂ (14)，Mr=56 → n=4 → C₄H₈",
     "tags": [
      "定义背诵",
      "计算"
     ]
    },
    {
     "type": "concept",
     "front": "写 ionic equation 的三步法？",
     "back": "① 写配平 full equation 并标 state symbols\n② 只拆可溶强电解质 (aq) 成离子；(s)/(l)/(g) 和弱电解质不拆\n③ 删两边不变的 spectator ions，查原子+电荷守恒\n例: Ba²⁺(aq)+SO₄²⁻(aq)→BaSO₄(s)",
     "tags": [
      "解释模板",
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "酸的三类反应及产物通式？",
     "back": "① acid + metal → salt + H₂\n② acid + base/alkali（metal oxide/hydroxide）→ salt + H₂O\n③ acid + carbonate → salt + H₂O + CO₂\n①③ 有 effervescence；③ 气体使 limewater 浑浊",
     "tags": [
      "高频考点",
      "解释模板"
     ]
    },
    {
     "type": "concept",
     "front": "如何检验 CO₂？现象英文原句和原理？",
     "back": "① Bubble the gas through limewater\n② \"limewater turns milky/cloudy\"（变浑浊）\n③ 原理: CO₂ + Ca(OH)₂ → CaCO₃(s) + H₂O，白色沉淀是 CaCO₃",
     "tags": [
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "检验 SO₄²⁻ 的试剂、现象？为什么先加稀 HCl？",
     "back": "① Add dilute HCl, then barium chloride solution\n② \"white precipitate\" (BaSO₄)\n③ 先酸化是排除 CO₃²⁻/SO₃²⁻ 干扰——它们的钡盐也是白色沉淀，但溶于酸会被除去",
     "tags": [
      "高频考点",
      "解释模板"
     ]
    },
    {
     "type": "concept",
     "front": "检验卤离子的试剂、三种沉淀颜色？为什么用稀 HNO₃？",
     "back": "① Add dilute nitric acid, then silver nitrate solution\n② Cl⁻: white ppt；Br⁻: cream ppt；I⁻: yellow ppt\n③ HNO₃ 排除 CO₃²⁻/OH⁻ 干扰（Ag₂CO₃ 也是沉淀）；不能用 HCl——自带 Cl⁻",
     "tags": [
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "检验 NH₄⁺ / NH₃ 的方法与现象英文原句？",
     "back": "① Add NaOH solution and warm gently\n② 用 damp red litmus paper 检验气体（必须 damp！）\n③ \"damp red litmus paper turns blue\" → NH₃ → 证明含 NH₄⁺\n干石蕊纸不变色，漏写 damp 扣分",
     "tags": [
      "高频考点",
      "解释模板"
     ]
    },
    {
     "type": "concept",
     "front": "percentage yield 与 atom economy 的本质区别？",
     "back": "① yield 看实验实际: actual ÷ theoretical ×100，受副反应/损失影响\n② AE 只看方程式: 目标产物 Mr×系数 ÷ 全部 reactants 的 Mr×系数之和 ×100，与实验无关\n③ yield=100% 时 AE 仍可能很低（有副产物）",
     "tags": [
      "高频考点",
      "解释模板"
     ]
    },
    {
     "type": "calc",
     "front": "计算: 9.8 g H₂SO₄ 是多少 mol？公式与步骤",
     "back": "① n = m ÷ M（mol = g ÷ g mol⁻¹）\n② M(H₂SO₄) = 2.0+32.1+64.0 = 98.1\n③ n = 9.8 ÷ 98.1 ≈ 0.10 mol\n提醒: Ar 用 Periodic Table 值（S=32.1），别默写整数",
     "tags": [
      "计算"
     ]
    },
    {
     "type": "calc",
     "front": "计算: 25.0 cm³ 0.100 mol dm⁻³ NaOH 的物质的量？",
     "back": "① n = c × V，V 必须是 dm³\n② 25.0 cm³ ÷ 1000 = 0.0250 dm³\n③ n = 0.100 × 0.0250 = 2.50×10⁻³ mol\n忘 ÷1000 结果大 1000 倍，一眼假",
     "tags": [
      "计算",
      "高频考点"
     ]
    },
    {
     "type": "calc",
     "front": "RTP 下 480 cm³ CO₂ 是多少 mol？摩尔体积口径？",
     "back": "① RTP: 1 mol 气体占 24 dm³ = 24000 cm³\n② n = V(cm³) ÷ 24000 或 V(dm³) ÷ 24\n③ 480 ÷ 24000 = 0.0200 mol\n只适用于气体，与气体种类无关",
     "tags": [
      "计算"
     ]
    },
    {
     "type": "calc",
     "front": "pV = nRT 的单位链和使用步骤？",
     "back": "① p 用 Pa（kPa ×1000）\n② V 用 m³（cm³ ×10⁻⁶，dm³ ×10⁻³）\n③ T 用 K（°C +273）\n④ R = 8.31 J mol⁻¹ K⁻¹\n⑤ 常考求 Mr: 先解出 n，再 M = m ÷ n",
     "tags": [
      "计算",
      "高频考点"
     ]
    },
    {
     "type": "calc",
     "front": "由质量分数求 empirical formula 的两步法？（C 85.7%, H 14.3%）",
     "back": "① 各元素 % ÷ Ar: C 85.7/12.0=7.14；H 14.3/1.0=14.3\n② 全部除以最小值: 1 : 2 → CH₂\n若出现 1.5 之类，整体 ×2 凑整数，不许强行四舍五入",
     "tags": [
      "计算",
      "高频考点"
     ]
    },
    {
     "type": "calc",
     "front": "由方程式求质量的三步链？（5.00 g CaCO₃ 分解得多少 g CaO）",
     "back": "① n(CaCO₃) = 5.00 ÷ 100.1 = 0.0500 mol\n② 摩尔比 1:1 → n(CaO) = 0.0500 mol\n③ m = 0.0500 × 56.1 = 2.80 g\n口诀: 已知量→mol→比例→所求量，最后才换单位",
     "tags": [
      "计算"
     ]
    },
    {
     "type": "calc",
     "front": "如何判断 limiting reagent？（0.30 mol Al 与 0.40 mol O₂）",
     "back": "① 先都换成 mol（绝不能直接比质量）\n② 各除以系数: 4Al+3O₂→2Al₂O₃，Al: 0.30/4=0.075；O₂: 0.40/3=0.133\n③ 小者为 limiting（Al），后续全用它算\n作答写 \"Al is limiting because...\"",
     "tags": [
      "计算",
      "高频考点"
     ]
    },
    {
     "type": "calc",
     "front": "percentage yield 的计算步骤？",
     "back": "① theoretical yield: 由 limiting reagent 经方程式算出的最大产量\n② % yield = actual ÷ theoretical × 100\n③ 用 mol 或 mass 均可，但分子分母须同物质同单位\n<100% 原因: 副反应/可逆/转移损失",
     "tags": [
      "计算"
     ]
    },
    {
     "type": "calc",
     "front": "atom economy 公式？为什么 addition reaction AE=100%？",
     "back": "① AE = 目标产物 Mr×系数 ÷ 全部反应物 Mr×系数之和 × 100\n② 分母是方程式全部 reactants，不是实际投料\n③ addition 只生成一种产物，所有原子都进产物 → AE=100%\n提高 AE: 改合成路线或利用副产物",
     "tags": [
      "计算",
      "高频考点"
     ]
    },
    {
     "type": "calc",
     "front": "加热失重法求 MgSO₄·xH₂O 中的 x？",
     "back": "① 失重 = 水的质量；残留 = 无水盐质量\n② n(MgSO₄) = 残留 ÷ 120.4；n(H₂O) = 失重 ÷ 18.0\n③ x = n(H₂O) ÷ n(MgSO₄)，取整\n提醒: heat to constant mass 才证明水已失完",
     "tags": [
      "计算"
     ]
    },
    {
     "type": "calc",
     "front": "同温同压下由方程式求气体体积怎么快算？",
     "back": "① 同温同压时，气体体积比 = 摩尔比（Avogadro's law）\n② 例: 2CO + O₂ → 2CO₂，50 cm³ CO 只需 25 cm³ O₂\n③ 只对气体成立；有固体/液体参与时仍要老实走 mol",
     "tags": [
      "计算",
      "拔高"
     ]
    },
    {
     "type": "error",
     "front": "易错：ionic equation 漏写 state symbols",
     "back": "✗ Ag⁺ + Cl⁻ → AgCl\n✓ Ag⁺(aq) + Cl⁻(aq) → AgCl(s)\nMS 口径: 题目注明 \"including state symbols\" 时漏写不给分；沉淀必须 (s)，溶液中离子必须 (aq)",
     "tags": [
      "判死条款",
      "高频考点"
     ]
    },
    {
     "type": "error",
     "front": "易错：n=cV 时体积单位没换算",
     "back": "✗ n = 0.100 × 25.0 = 2.5 mol（cm³ 直接乘）\n✓ n = 0.100 × (25.0 ÷ 1000) = 2.50×10⁻³ mol\nc 的单位是 mol dm⁻³，V 必须 ÷1000 变 dm³；结果大得离谱就是这里错",
     "tags": [
      "判死条款",
      "计算"
     ]
    },
    {
     "type": "error",
     "front": "易错：pV=nRT 直接代 kPa、cm³、°C",
     "back": "✗ p=100 kPa、V=200 cm³、T=25 直接代入\n✓ p=1.00×10⁵ Pa；V=2.00×10⁻⁴ m³；T=298 K（25+273）\nMS: 单位错会连锁丢整问计算分，先写换算再代入",
     "tags": [
      "判死条款",
      "计算"
     ]
    },
    {
     "type": "error",
     "front": "易错：有效数字与中途四舍五入",
     "back": "✗ 中间步骤就四舍五入，最终 3 s.f. 却偏出范围\n✓ 中间保留计算器全值，只在最终答案取 s.f.（跟题目数据最少位，通常 3 s.f.）\nMS 常写 \"allow 2.80–2.81\"，中途舍入会掉出允许区间",
     "tags": [
      "判死条款",
      "计算"
     ]
    },
    {
     "type": "error",
     "front": "易错：MgSO₄·7H₂O 计算用了无水盐的 Mr",
     "back": "✗ n = m ÷ 120.4（漏结晶水）\n✓ n = m ÷ 246.4（120.4 + 7×18.0）\n题目给的是水合物质量就必须用水合 Mr；·7H₂O 是化学式的一部分，不是装饰",
     "tags": [
      "判死条款",
      "计算"
     ]
    },
    {
     "type": "error",
     "front": "易错：Ar 定义只写一半",
     "back": "✗ \"average mass of an atom\"（漏 weighted mean，漏比较基准）\n✓ \"weighted mean mass of an atom compared to 1/12 the mass of an atom of carbon-12\"\nMS: weighted mean 与 1/12 C-12 是两个独立采分点，缺一失一分",
     "tags": [
      "判死条款",
      "定义背诵"
     ]
    },
    {
     "type": "error",
     "front": "易错：现象题凭印象编（Zn + 稀 H₂SO₄）",
     "back": "✗ \"blue colour fades / 蓝色褪去\"（Zn²⁺ 无色，根本没有蓝色！）\n✓ effervescence / bubbles of gas；zinc dissolves；colourless solution formed\n现象只写看得见的: 气泡、固体溶解、颜色、放热；不能写离子名或结论",
     "tags": [
      "判死条款",
      "高频考点"
     ]
    },
    {
     "type": "error",
     "front": "易错：atom economy 里代入实际质量或产率",
     "back": "✗ AE = 实际产量 ÷ 投料质量 ×100（这是 yield 的思路）\n✓ AE 只用方程式里的 Mr×系数: desired product ÷ all reactants\nAE 是纯理论值，与实验好坏无关；两公式混用直接 0 分",
     "tags": [
      "判死条款",
      "计算"
     ]
    },
    {
     "type": "error",
     "front": "易错：检验 SO₄²⁻/卤离子时酸化用错酸",
     "back": "✗ SO₄²⁻ 检验用稀 H₂SO₄ 酸化（自带 SO₄²⁻，检验作废）\n✗ 卤离子检验用稀 HCl（自带 Cl⁻）\n✓ SO₄²⁻: 稀 HCl + BaCl₂；卤离子: 稀 HNO₃ + AgNO₃\nMS: 酸选错整问不得分",
     "tags": [
      "判死条款",
      "高频考点"
     ]
    },
    {
     "type": "error",
     "front": "易错：3 分解释题只写 2 点 / 用中文作答",
     "back": "✗ 只摆数据不写结论句；✗ 中文作答（MS 只认英文，0 分）\n✓ 按分值数点作答: 3 分 = 3 点，最后必写结论 \"so/therefore + 直接回应题目\"\n模板: 数据/现象 → 原因 → therefore 结论",
     "tags": [
      "判死条款",
      "解释模板"
     ]
    }
   ]
  },
  {
   "id": "t2",
   "title": "Atomic structure & periodic table",
   "cn": "原子结构与周期表",
   "branches": [
    {
     "label": "原子结构 Atomic structure",
     "items": [
      "p/n/e 相对质量与电荷",
      "⚠ isotope 定义两要素",
      "⚠ 性质相同→外层电子结论句",
      "质量数 A=p+n、序数 Z=p",
      "Ar 定义含 1/12 C-12"
     ]
    },
    {
     "label": "质谱 Mass spectrometry",
     "items": [
      {
       "t": "五步：气化电离加速偏转检测",
       "q": "按顺序写出质谱仪的五个阶段（英文），并说明偏转程度由什么决定。",
       "a": "evaporation → ionisation → acceleration → deflection → detection\n偏转 ∝ 1/(m/z)：m/z 越小偏转越大\n✗ 说「质量越小偏转越大」——必须说 m/z"
      },
      "⚠ 偏转看 m/z 不是 mass",
      "⚠ 强度做分母算 Ar",
      {
       "t": "Cl₂ 峰 70/72/74 = 9:6:1",
       "q": "Cl₂ 的分子离子区有哪几个峰？相对强度比是多少？（³⁵Cl:³⁷Cl = 3:1）",
       "a": "m/z = 70 (³⁵+³⁵)、72 (³⁵+³⁷)、74 (³⁷+³⁷)\n强度比 9 : 6 : 1（3×3 : 2×3×1 : 1×1）"
      },
      {
       "t": "M:M+2 → Cl 3:1、Br 1:1",
       "y": "2022.6 真题 · Q20",
       "focus": "重点看质谱部分：Br 同位素 M / M+2 峰",
       "qimg": [
        "decks/media/2022_6_q20_p16.jpg",
        "decks/media/2022_6_q20_p17.jpg",
        "decks/media/2022_6_q20_p18.jpg"
       ],
       "aimg": [
        "decks/media/2022_6_q20_ms15.jpg",
        "decks/media/2022_6_q20_ms16.jpg",
        "decks/media/2022_6_q20_ms17.jpg",
        "decks/media/2022_6_q20_ms18.jpg",
        "decks/media/2022_6_q20_ms19.jpg"
       ]
      },
      "已知 Ar 反设 x% 求丰度"
     ]
    },
    {
     "label": "电子排布 Electronic configuration",
     "items": [
      "顺序 1s→3p→4s→3d→4p",
      "⚠ 4s 先填也先失",
      {
       "t": "⚠ Cr 3d⁵4s¹、Cu 3d¹⁰4s¹",
       "y": "2022.1 真题 · Q20",
       "focus": "重点看 (a)(b)：Cu 的电子排布与同位素",
       "qimg": [
        "decks/media/2022_1_q20_p10.jpg",
        "decks/media/2022_1_q20_p11.jpg",
        "decks/media/2022_1_q20_p12.jpg"
       ],
       "aimg": [
        "decks/media/2022_1_q20_ms14.jpg",
        "decks/media/2022_1_q20_ms15.jpg",
        "decks/media/2022_1_q20_ms16.jpg",
        "decks/media/2022_1_q20_ms17.jpg",
        "decks/media/2022_1_q20_ms18.jpg",
        "decks/media/2022_1_q20_ms19.jpg"
       ]
      },
      {
       "t": "Fe²⁺ 3d⁶ / Fe³⁺ 3d⁵",
       "q": "写 Fe²⁺ 和 Fe³⁺ 的电子排布。先失哪层？",
       "a": "Fe: [Ar]3d⁶4s² → Fe²⁺: [Ar]3d⁶ → Fe³⁺: [Ar]3d⁵\n⚠ 4s 先填也先失\n✗ Fe²⁺ 写成 3d⁴4s²"
      },
      "轨道最多 2 电子自旋相反",
      "s/p/d block 按亚层划分"
     ]
    },
    {
     "label": "电离能 Ionisation energy",
     "items": [
      "⚠ 定义 one mole gaseous 1+",
      {
       "t": "⚠ 方程式必须带 (g)",
       "q": "写出 Na 的第一电离能方程式（含状态符号），并给英文定义的三个采分要素。",
       "a": "Na(g) → Na⁺(g) + e⁻\n定义三要素：one mole ｜ gaseous atoms ｜ form 1+ ions\n✗ 漏 (g) 或写成 Na(s)——整问 0 分"
      },
      "三因素：核电荷/距离/屏蔽",
      "⚠ attraction 结论句必写",
      {
       "t": "同周期总体升、同族降",
       "y": "2022.1 真题 · Q23",
       "focus": "全题：第二周期 IE 趋势 + N 的逐级电离能",
       "qimg": [
        "decks/media/2022_1_q23_p19.jpg",
        "decks/media/2022_1_q23_p20.jpg"
       ],
       "aimg": [
        "decks/media/2022_1_q23_ms32.jpg",
        "decks/media/2022_1_q23_ms33.jpg",
        "decks/media/2022_1_q23_ms34.jpg"
       ]
      }
     ]
    },
    {
     "label": "IE 反常与大跳跃 anomalies",
     "items": [
      {
       "t": "⚠ Mg→Al：3p 能量高于 3s",
       "q": "Explain why the first ionisation energy of Al is lower than that of Mg.（2 分口径）",
       "a": "① Al 的外层电子在 3p 亚层，能量高于 Mg 的 3s\n② 离核更远/受屏蔽多 → 更易失去 → IE 更低\n✗ 只写「3p 不稳定」不给分"
      },
      {
       "t": "⚠ P→S：paired electrons 排斥",
       "q": "Explain why the first ionisation energy of S is lower than that of P.",
       "a": "① S 的 3p 出现成对电子（P 是 3p³ 各占一轨道）\n② paired electrons repel → 该电子更易失去\n✗ 只写「半满稳定」不给分——必须落到成对电子排斥"
      },
      "✗ 半满稳定不给分",
      {
       "t": "逐级 IE 大跳跃定族",
       "q": "某元素逐级电离能 /kJ mol⁻¹：578, 1817, 2745, 11578… 它在第几族？为什么？",
       "a": "第 3 与第 4 之间大跳跃 → 前 3 个电子在外层 → Group 3（Al）\n口径：跳跃前已失电子数 = 最外层电子数 = 族数"
      },
      "跳跃前电子数=族数"
     ]
    }
   ],
   "terms": [
    {
     "en": "atomic number (Z)",
     "cn": "原子序数/质子数",
     "def": "The number of protons in the nucleus of an atom."
    },
    {
     "en": "mass number (A)",
     "cn": "质量数",
     "def": "The total number of protons and neutrons in the nucleus of an atom."
    },
    {
     "en": "isotopes",
     "cn": "同位素",
     "def": "Atoms of the same element with the same number of protons but different numbers of neutrons."
    },
    {
     "en": "relative atomic mass (Ar)",
     "cn": "相对原子质量",
     "def": "Weighted mean mass of an atom compared with 1/12 the mass of a carbon-12 atom."
    },
    {
     "en": "relative isotopic mass",
     "cn": "相对同位素质量",
     "def": "Mass of an atom of an isotope compared with 1/12 the mass of an atom of carbon-12."
    },
    {
     "en": "mass spectrometer",
     "cn": "质谱仪",
     "def": "Instrument that measures the m/z values and relative abundances of ions."
    },
    {
     "en": "ionisation (in mass spec)",
     "cn": "电离",
     "def": "High-energy electrons knock out an electron, forming positive ions."
    },
    {
     "en": "m/z (mass-to-charge ratio)",
     "cn": "质荷比",
     "def": "The mass of an ion divided by its charge."
    },
    {
     "en": "molecular ion (M⁺)",
     "cn": "分子离子",
     "def": "Ion formed when a molecule loses one electron, giving a peak at Mr."
    },
    {
     "en": "fragmentation",
     "cn": "碎裂",
     "def": "Breaking of a molecular ion into a smaller fragment ion and a neutral fragment; only the ions are detected."
    },
    {
     "en": "relative abundance",
     "cn": "相对丰度",
     "def": "The proportion or percentage of each isotope present in a sample."
    },
    {
     "en": "deflection",
     "cn": "偏转",
     "def": "Change in path of ions in a magnetic field, dependent on m/z."
    },
    {
     "en": "first ionisation energy",
     "cn": "第一电离能",
     "def": "Energy required to remove one electron from each atom in one mole of gaseous atoms to form one mole of gaseous 1+ ions."
    },
    {
     "en": "successive ionisation energies",
     "cn": "逐级电离能",
     "def": "Energies needed to remove electrons one by one from the same atom."
    },
    {
     "en": "nuclear charge",
     "cn": "核电荷",
     "def": "The positive charge of the nucleus, equal to the number of protons."
    },
    {
     "en": "shielding (screening)",
     "cn": "屏蔽效应",
     "def": "Inner-shell electrons repel outer electrons, reducing attraction from the nucleus."
    },
    {
     "en": "electronic configuration",
     "cn": "电子排布",
     "def": "Arrangement of electrons in shells, sub-shells and orbitals of an atom."
    },
    {
     "en": "orbital",
     "cn": "轨道",
     "def": "Region of space holding up to two electrons with opposite spins."
    },
    {
     "en": "sub-shell",
     "cn": "亚层",
     "def": "Set of orbitals of the same type and energy, e.g. s, p, d."
    },
    {
     "en": "quantum shell",
     "cn": "电子层",
     "def": "Main energy level of electrons at a given distance from the nucleus."
    },
    {
     "en": "s/p/d block",
     "cn": "s/p/d 区",
     "def": "Region of the periodic table where the highest-energy electron occupies that sub-shell."
    },
    {
     "en": "periodicity",
     "cn": "周期性",
     "def": "Repeating pattern of physical and chemical properties across successive periods."
    }
   ],
   "cards": [
    {
     "type": "concept",
     "front": "质子、中子、电子的相对质量和相对电荷分别是多少？",
     "back": "① proton: relative mass 1, charge +1\n② neutron: relative mass 1, charge 0\n③ electron: relative mass 1/1836（可写 negligible）, charge −1\n④ 质量数 A = p + n，原子序数 Z = p",
     "tags": [
      "定义背诵",
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "Isotope（同位素）的英文定义原句怎么写？",
     "back": "① 背英文原句：Atoms of the same element with the same number of protons but different numbers of neutrons\n② 提示：same protons + different neutrons 两点缺一不可\n③ 也可写 same atomic number, different mass number",
     "tags": [
      "定义背诵",
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "为什么同位素化学性质相同？（2 分题，两个采分点）",
     "back": "① Isotopes have the same electronic configuration / same number of (outer) electrons\n② 结论句（学生常漏的第 2 分）：Chemical properties depend on the number of electrons in the outer shell\n③ 中文提示：先说电子排布相同，再补'化学性质由外层电子决定'",
     "tags": [
      "解释模板",
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "质谱仪 mass spectrometer 五个阶段（按顺序）？",
     "back": "① evaporation/vaporisation 样品气化\n② ionisation：electron gun 轰击打掉电子 → 正离子\n③ acceleration：电场中加速\n④ deflection：磁场中偏转\n⑤ detection：到达检测器产生电流，电流大小 ∝ 丰度",
     "tags": [
      "定义背诵",
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "质谱中离子偏转程度 deflection 由什么决定？",
     "back": "① 由 m/z 决定：the smaller the m/z, the greater the deflection\n② 偏转与 m/z 成反比（同电荷时，质量越小偏转越大）\n③ 电荷越大（2+）偏转越大\n④ 不能只写 mass，必须写 m/z",
     "tags": [
      "高频考点",
      "解释模板"
     ]
    },
    {
     "type": "concept",
     "front": "为什么 Cl 的 relative atomic mass = 35.5 不是整数？",
     "back": "① Chlorine has two isotopes: Cl-35 and Cl-37\n② Ar is the weighted mean mass of the isotopes\n③ 按丰度 75:25 加权：(35×75 + 37×25)/100 = 35.5",
     "tags": [
      "解释模板",
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "relative atomic mass (Ar) 的英文定义？",
     "back": "① Weighted mean mass of an atom of an element\n② compared with 1/12 (of the) mass of an atom of carbon-12\n③ 两个采分点：weighted mean/average + 1/12 C-12\n④ Ar 无单位",
     "tags": [
      "定义背诵"
     ]
    },
    {
     "type": "concept",
     "front": "电子亚层填充顺序（到 4p）？4s 和 3d 谁先填？",
     "back": "① 顺序：1s 2s 2p 3s 3p 4s 3d 4p\n② 4s 能量低于 3d，先填 4s（4s fills before 3d）\n③ 例：K [Ar]4s¹、Ca [Ar]4s²、Sc [Ar]3d¹4s²\n④ 书写时按主量子数排：3d 写在 4s 前面",
     "tags": [
      "定义背诵",
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "Fe²⁺ 和 Fe³⁺ 的电子排布？失电子顺序规律？",
     "back": "① Fe: 1s²2s²2p⁶3s²3p⁶3d⁶4s²\n② 规律：4s 先填也先失（4s electrons are lost first）\n③ Fe²⁺: [Ar]3d⁶（失 2 个 4s）\n④ Fe³⁺: [Ar]3d⁵（再失 1 个 3d）",
     "tags": [
      "定义背诵",
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "first ionisation energy 的英文定义原句？（含方程式）",
     "back": "① 背原句：The energy required to remove one electron from each atom in one mole of gaseous atoms to form one mole of gaseous 1+ ions\n② 方程式：Na(g) → Na⁺(g) + e⁻\n③ 三采分点：one mole / gaseous / 1+ ions",
     "tags": [
      "定义背诵",
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "解释 ionisation energy 大小的三因素答题模板？",
     "back": "① nuclear charge：质子数/核电荷大小\n② distance：outer electron 离核远近（shell 数）\n③ shielding：内层电子的屏蔽\n④ 结论句必写：so the attraction between the nucleus and the outer electron is stronger/weaker, more/less energy needed",
     "tags": [
      "解释模板",
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "同周期从左到右 first IE 为何总体升高？",
     "back": "① nuclear charge increases（质子数增多）\n② electrons enter the same shell → similar shielding\n③ atomic radius decreases\n④ 结论句：stronger attraction on the outer electron, more energy needed to remove it",
     "tags": [
      "解释模板",
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "同族向下 first IE 为何降低？",
     "back": "① more shells：outer electron further from the nucleus\n② more shielding by inner electrons\n③ 这两条压过 nuclear charge 增大的影响\n④ 结论句：weaker attraction on the outer electron, less energy needed to remove it",
     "tags": [
      "解释模板",
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "反常①：为什么 Al 的 first IE 低于 Mg？",
     "back": "① Mg 外层电子在 3s，Al 在 3p\n② The 3p electron is higher in energy than 3s（离核稍远、受 3s 屏蔽）\n③ 结论句：less energy needed to remove the 3p electron\n④ 采分关键词：3p + higher energy",
     "tags": [
      "解释模板",
      "拔高",
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "反常②：为什么 S 的 first IE 低于 P？",
     "back": "① S (3p⁴) 中有 two electrons paired in the same 3p orbital\n② repulsion between the paired electrons\n③ 结论句：less energy needed to remove one of the paired electrons\n④ 只写'P 半满更稳定'不给分",
     "tags": [
      "解释模板",
      "拔高",
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "逐级电离能 successive IE 出现大跳跃说明什么？",
     "back": "① 大跳跃 = 开始从 inner shell 移走电子（更近核、屏蔽更少）\n② 跳跃前已移走的电子数 = 外层电子数 = 族数\n③ 例：IE₂→IE₃ 大跳 → 2 个外层电子 → Group 2\n④ 答题句式：large jump between IEn and IEn+1 → n outer electrons",
     "tags": [
      "高频考点",
      "解释模板"
     ]
    },
    {
     "type": "concept",
     "front": "Cl₂ 质谱分子离子峰有哪几个 m/z？比例多少？",
     "back": "① 三个峰：m/z = 70 (³⁵Cl³⁵Cl)、72 (³⁵Cl³⁷Cl)、74 (³⁷Cl³⁷Cl)\n② 比例 9:6:1（由丰度 3:1 组合而来）\n③ 另有碎片峰 m/z = 35、37，比例 3:1",
     "tags": [
      "高频考点",
      "拔高"
     ]
    },
    {
     "type": "concept",
     "front": "含 1 个 Cl / 1 个 Br 的分子，M 与 M+2 峰比例？",
     "back": "① 含 1 个 Cl：M : M+2 = 3 : 1（³⁵Cl:³⁷Cl = 75:25）\n② 含 1 个 Br：M : M+2 ≈ 1 : 1（⁷⁹Br:⁸¹Br ≈ 50:50）\n③ 反推：双峰 1:1 → 含 Br；3:1 → 含 Cl",
     "tags": [
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "周期表 s/p/d block 怎么划分？由什么决定？",
     "back": "① block 由最高能量电子所在亚层决定（sub-shell of the highest-energy electron）\n② s-block：Group 1–2（+ He）\n③ p-block：Group 3–0\n④ d-block：Sc–Zn 等过渡金属区",
     "tags": [
      "定义背诵"
     ]
    },
    {
     "type": "calc",
     "front": "计算：Cu 含 69.2% ⁶³Cu 和 30.8% ⁶⁵Cu，求 Ar",
     "back": "① 公式：Ar = Σ(isotope mass × % abundance) ÷ 100\n② (63×69.2 + 65×30.8) ÷ 100 = 63.6\n③ 保留 3 s.f.，Ar 无单位\n④ 易错：忘记除以 100；答案必须落在 63–65 之间（自检）",
     "tags": [
      "计算",
      "高频考点"
     ]
    },
    {
     "type": "calc",
     "front": "丰度给的是相对强度（不是百分数）时，Ar 怎么算？",
     "back": "① 分母改用强度总和：Ar = Σ(mass × intensity) ÷ Σ(intensity)\n② 例 Mg：24(63.0)、25(8.1)、26(9.1)\n③ (24×63.0+25×8.1+26×9.1)÷80.2 = 24.3\n④ 易错：仍除以 100 → 答案离谱，务必自检",
     "tags": [
      "计算",
      "高频考点"
     ]
    },
    {
     "type": "calc",
     "front": "反求丰度：B 的 Ar=10.8，同位素 ¹⁰B/¹¹B 各占多少？",
     "back": "① 设 ¹⁰B 占 x%，¹¹B 占 (100−x)%\n② 10x + 11(100−x) = 10.8 × 100\n③ 解得 x = 20 → ¹⁰B 20%、¹¹B 80%\n④ 自检：Ar=10.8 更接近 11，丰度应偏向 ¹¹B",
     "tags": [
      "计算"
     ]
    },
    {
     "type": "calc",
     "front": "推导：Cl₂ 三个分子峰为何是 9:6:1？",
     "back": "① ³⁵Cl : ³⁷Cl = 3 : 1\n② m/z 70 (35+35)：3×3 = 9\n③ m/z 72 (35+37 或 37+35)：3×1×2 = 6\n④ m/z 74 (37+37)：1×1 = 1\n⑤ 方法：概率相乘，不同同位素组合要 ×2",
     "tags": [
      "计算",
      "拔高"
     ]
    },
    {
     "type": "calc",
     "front": "给一串逐级电离能数据，如何确定元素的族？",
     "back": "① 逐个算相邻差值/倍数，找最大跳跃 large jump\n② 跳跃在 IEn 与 IEn+1 之间 → n 个外层电子 → Group n\n③ 例：738, 1451, 7733… 跳在第 2→3 → Group 2\n④ 必写结论句：so the element is in Group 2",
     "tags": [
      "计算",
      "高频考点"
     ]
    },
    {
     "type": "error",
     "front": "易错：写 first IE 方程式时漏 state symbols",
     "back": "✗ Na → Na⁺ + e⁻\n✓ Na(g) → Na⁺(g) + e⁻\nMS 口径：equation must include state symbols — do not award without (g)\n定义句里同样必须出现 gaseous",
     "tags": [
      "判死条款",
      "高频考点"
     ]
    },
    {
     "type": "error",
     "front": "易错：解释同位素化学性质相同只写一半（少结论句）",
     "back": "✗ 只写 same number of electrons（2 分只拿 1 分）\n✓ 补结论句：chemical properties depend on the number of electrons in the outer shell\nMS 口径：结论句是独立采分点\n口诀：分值 = 句数，2 分题写 2 句",
     "tags": [
      "判死条款",
      "解释模板",
      "高频考点"
     ]
    },
    {
     "type": "error",
     "front": "易错：解释 P→S 电离能下降写'3p 半满更稳定'",
     "back": "✗ half-filled 3p is (extra) stable —— 不给分\n✓ In S, two electrons are paired in the same 3p orbital; repulsion between them means less energy to remove one\nMS 口径：must refer to paired electrons / repulsion；stability alone not awarded",
     "tags": [
      "判死条款",
      "拔高"
     ]
    },
    {
     "type": "error",
     "front": "易错：写 Fe³⁺ 排布时先扣 3d 电子",
     "back": "✗ Fe³⁺: [Ar]3d³4s²\n✓ Fe³⁺: [Ar]3d⁵ —— 4s electrons are lost before 3d\n记忆：4s 先填、也先失\n对照：Fe²⁺ = [Ar]3d⁶（只失 2 个 4s）",
     "tags": [
      "判死条款",
      "高频考点"
     ]
    },
    {
     "type": "error",
     "front": "易错：Cr、Cu 排布写成 3d⁴4s² / 3d⁹4s²",
     "back": "✗ Cr [Ar]3d⁴4s²　✗ Cu [Ar]3d⁹4s²\n✓ Cr [Ar]3d⁵4s¹　✓ Cu [Ar]3d¹⁰4s¹\n记法：Cr 凑半满 d⁵、Cu 凑全满 d¹⁰，各从 4s 借走 1 个电子",
     "tags": [
      "判死条款",
      "定义背诵"
     ]
    },
    {
     "type": "error",
     "front": "易错：质谱偏转只答'质量越小偏转越大'",
     "back": "✗ deflection depends on mass\n✓ deflection depends on m/z (mass-to-charge ratio); smaller m/z → greater deflection\nMS 口径：必须写 m/z，只写 mass 不完整\n补充：2+ 离子偏转比 1+ 更大",
     "tags": [
      "判死条款",
      "高频考点"
     ]
    },
    {
     "type": "error",
     "front": "易错：IE 定义漏 one mole 或 gaseous",
     "back": "✗ energy to remove an electron from an atom\n✓ energy to remove one electron from each atom in one mole of gaseous atoms to form one mole of gaseous 1+ ions\nMS 口径：漏 (one) mole 或 gaseous 均不满分",
     "tags": [
      "判死条款",
      "定义背诵"
     ]
    },
    {
     "type": "error",
     "front": "易错：3 分解释题只写 2 点 / 用中文作答",
     "back": "✗ 只写 nuclear charge + shielding，漏 attraction 结论句\n✓ 因素点写全后必加：so the attraction on the outer electron increases, more energy needed\n✗ 中文作答一律 0 分，所有答案必须英文\n口诀：分值 = 句数",
     "tags": [
      "判死条款",
      "解释模板",
      "高频考点"
     ]
    }
   ]
  },
  {
   "id": "t3",
   "title": "Bonding & structure",
   "cn": "化学键与结构",
   "branches": [
    {
     "label": "三大强键 Bonding types",
     "items": [
      "⚠ ionic 必写 electrostatic attraction",
      "⚠ 金属键写 delocalised 不写 free",
      "正金属离子 + 电子海晶格",
      {
       "t": "dative: 双电子同源, 箭头给→受",
       "q": "What is a dative covalent bond? NH₄⁺ 里它怎么形成？",
       "a": "共价键中两个共用电子来自同一原子\nNH₃ 的 N 提供孤对，H⁺ 提供空轨道\n箭头方向：给电子方 → 受电子方（N→H）\n形成后与普通共价键完全相同"
      },
      {
       "t": "NH₄⁺ / H₃O⁺ / Al₂Cl₆ 氯桥 Cl→Al",
       "q": "画 Al₂Cl₆ 二聚体时，配位键箭头从哪指向哪？为什么能形成？",
       "a": "桥上的 Cl → Al（Cl 给孤对，Al 有空轨道、缺电子）\n✗ 箭头从 Al 出发——MS 判死\n每个 Al 通过一条正常键 + 一条配位键与桥 Cl 相连"
      }
     ]
    },
    {
     "label": "极化与共价性 Polarisation",
     "items": [
      "⚠ 最强 = 最小阳 + 最大阴 (Li⁺I⁻)",
      "阳离子小+电荷高 = 高电荷密度",
      "阴离子大 → 电子云易变形",
      "后果: covalent character",
      "⚠ AlCl₃ 两条解释路线不可混用",
      "⚠ 共价性本质: 电子密度被拉进两核之间",
      "⚠ 最接近纯离子 = 最大阳 + 最小阴 (CsF)",
      "⚠ d¹⁰ 例外: Ag⁺ 比同尺寸更能极化"
     ]
    },
    {
     "label": "形状与键角 VSEPR",
     "items": [
      {
       "t": "⚠ 必写孤对斥力 > 成键对斥力",
       "y": "2021.1 真题 · Q19",
       "focus": "重点看 (a)：NCl₃ 键对/孤对/键角/形状",
       "qimg": [
        "decks/media/2021_1_q19_p11.jpg",
        "decks/media/2021_1_q19_p12.jpg",
        "decks/media/2021_1_q19_p13.jpg"
       ],
       "aimg": [
        "decks/media/2021_1_q19_ms16.jpg",
        "decks/media/2021_1_q19_ms17.jpg",
        "decks/media/2021_1_q19_ms18.jpg",
        "decks/media/2021_1_q19_ms19.jpg",
        "decks/media/2021_1_q19_ms20.jpg"
       ]
      },
      "2,0 linear 180°",
      "3,0 planar 120°; 4,0 109.5°",
      {
       "t": "3,1 pyramidal 107°; 2,2 bent 104.5°",
       "q": "NH₃ 和 H₂O 的形状、键角分别是什么？为什么比 109.5° 小？",
       "a": "NH₃: trigonal pyramidal 107°（3 键对+1 孤对）\nH₂O: bent 104.5°（2 键对+2 孤对）\n孤对斥力 > 键对斥力，每多一对孤对约压缩 2.5°\n⚠ 英文形状名 + 精确键角都要写"
      },
      "5,0 120°&90°; 6,0 octahedral 90°"
     ]
    },
    {
     "label": "电负性与极性 Polarity",
     "items": [
      "F > O > N ≈ Cl",
      {
       "t": "⚠ 极性键 ≠ 极性分子, 看对称性",
       "q": "CO₂ 和 H₂O 都含极性键，为什么一个是非极性分子、一个是极性分子？",
       "a": "两步判断：① 键有无极性（电负性差）② 分子形状是否对称\nCO₂ linear 对称 → 偶极互相抵消 → 非极性\nH₂O bent 不对称 → 偶极不抵消 → 极性\n同理 CCl₄ 非极性、CHCl₃ 极性"
      },
      "CO₂/CCl₄/BF₃ 偶极抵消→非极性",
      "H₂O/NH₃/CHCl₃ 极性",
      "⚠ 只标 δ+/δ−, 不写完整电荷"
     ]
    },
    {
     "label": "四大晶格 Lattices",
     "items": [
      "⚠ 巨共价三点式 + 能量结论句",
      "离子导电三态口径 (ions 移动)",
      "⚠ 简单分子熔化不断共价键",
      {
       "t": "石墨: 第4电子离域→导电",
       "q": "Explain why graphite conducts electricity but diamond does not.（3 分口径）",
       "a": "① 石墨每个 C 只与 3 个 C 成键\n② 第 4 个电子 delocalised，可在层间自由移动 → 导电\n③ 金刚石每个 C 与 4 个 C 成键，无自由电子 → 不导电\n结论句必写"
      },
      "层间弱作用 → 可滑动",
      "脆性: 同号离子相斥"
     ]
    },
    {
     "label": "σ/π 键与 E/Z",
     "items": [
      {
       "t": "σ 头碰头, π 肩并肩",
       "y": "2022.6 真题 · Q21",
       "focus": "全题：CO₂ vs SiO₂，σ/π 轨道重叠",
       "qimg": [
        "decks/media/2022_6_q21_p19.jpg",
        "decks/media/2022_6_q21_p20.jpg",
        "decks/media/2022_6_q21_p21.jpg"
       ],
       "aimg": [
        "decks/media/2022_6_q21_ms20.jpg",
        "decks/media/2022_6_q21_ms21.jpg",
        "decks/media/2022_6_q21_ms22.jpg",
        "decks/media/2022_6_q21_ms23.jpg",
        "decks/media/2022_6_q21_ms24.jpg"
       ]
      },
      "π 旋转会断 → restricted rotation",
      "⚠ E/Z 必写 on different sides"
     ]
    }
   ],
   "terms": [
    {
     "en": "ionic bond",
     "cn": "离子键",
     "def": "Electrostatic attraction between oppositely charged ions."
    },
    {
     "en": "covalent bond",
     "cn": "共价键",
     "def": "Electrostatic attraction between two nuclei and the shared pair of electrons."
    },
    {
     "en": "metallic bond",
     "cn": "金属键",
     "def": "Electrostatic attraction between positive metal ions and delocalised electrons."
    },
    {
     "en": "dative covalent bond",
     "cn": "配位键",
     "def": "Covalent bond in which both shared electrons come from the same atom."
    },
    {
     "en": "delocalised electrons",
     "cn": "离域电子",
     "def": "Electrons free to move throughout the structure, not belonging to one atom."
    },
    {
     "en": "electronegativity",
     "cn": "电负性",
     "def": "Ability of an atom to attract the bonding pair of electrons in a covalent bond."
    },
    {
     "en": "polarisation",
     "cn": "极化作用",
     "def": "Distortion of an anion's electron cloud by a small, highly charged cation."
    },
    {
     "en": "polarising power",
     "cn": "极化能力",
     "def": "Ability of a cation to distort the electron cloud of an anion."
    },
    {
     "en": "charge density",
     "cn": "电荷密度",
     "def": "Charge-to-radius ratio; high for small, highly charged ions."
    },
    {
     "en": "covalent character",
     "cn": "共价成分",
     "def": "Degree of electron sharing in an ionic bond caused by polarisation."
    },
    {
     "en": "sigma (σ) bond",
     "cn": "σ 键",
     "def": "Bond formed by head-on overlap of orbitals along the bond axis."
    },
    {
     "en": "pi (π) bond",
     "cn": "π 键",
     "def": "Bond formed by sideways overlap of p orbitals above and below the axis."
    },
    {
     "en": "lone pair",
     "cn": "孤对电子",
     "def": "Pair of outer-shell electrons not used in bonding."
    },
    {
     "en": "bond angle",
     "cn": "键角",
     "def": "Angle between two covalent bonds at the same central atom."
    },
    {
     "en": "tetrahedral",
     "cn": "正四面体形",
     "def": "Shape with four bonding pairs around the central atom; angle 109.5 degrees."
    },
    {
     "en": "trigonal pyramidal",
     "cn": "三角锥形",
     "def": "Shape with three bonding pairs and one lone pair; angle 107 degrees."
    },
    {
     "en": "bent / V-shaped",
     "cn": "角形（V形）",
     "def": "Shape with two bonding pairs and two lone pairs; angle 104.5 degrees."
    },
    {
     "en": "polar molecule",
     "cn": "极性分子",
     "def": "Molecule containing polar bonds whose dipoles do not cancel."
    },
    {
     "en": "dipole",
     "cn": "偶极",
     "def": "Separation of partial charges (delta+ and delta-) across a bond or molecule."
    },
    {
     "en": "giant covalent lattice",
     "cn": "巨型共价晶格",
     "def": "Network of atoms joined together by many strong covalent bonds."
    },
    {
     "en": "simple molecular lattice",
     "cn": "简单分子晶格",
     "def": "Lattice of molecules held together by weak intermolecular forces."
    },
    {
     "en": "isoelectronic",
     "cn": "等电子的",
     "def": "Species that have the same number of electrons."
    },
    {
     "en": "malleable",
     "cn": "有延展性的",
     "def": "Can change shape because layers of metal ions slide over each other."
    },
    {
     "en": "brittle",
     "cn": "脆性的",
     "def": "Shatters when layers shift and ions of like charge repel."
    },
    {
     "en": "polarisability",
     "cn": "可极化性",
     "def": "Ease with which an anion's electron cloud is distorted by a nearby cation."
    },
    {
     "en": "ideal ionic model",
     "cn": "理想离子模型",
     "def": "Model treating ions as undistorted spheres held only by electrostatic attraction."
    },
    {
     "en": "noble gas configuration",
     "cn": "稀有气体构型",
     "def": "Electron configuration with a full outer shell, the same as the nearest noble gas."
    }
   ],
   "cards": [
    {
     "type": "concept",
     "front": "定义 ionic bond（离子键），MS 采分点是什么？",
     "back": "① (Strong) electrostatic attraction —— 漏 electrostatic 不给分\n② between oppositely charged ions / 带相反电荷的离子之间\n③ 背整句: \"An ionic bond is the electrostatic attraction between oppositely charged ions.\"",
     "tags": [
      "定义背诵",
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "等电子离子（isoelectronic，如 N³⁻→Al³⁺）半径为何递减？",
     "back": "① Same number of electrons / 电子数相同（same electronic configuration）\n② Nuclear charge increases / 质子数（核电荷）递增\n③ Electrons attracted more strongly → ionic radius decreases / 对电子吸引更强 → 半径减小",
     "tags": [
      "解释模板",
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "什么样的阳离子极化能力（polarising power）强？答题句怎么写？",
     "back": "① Small cation + high charge / 半径小、电荷高\n② = high charge density 高电荷密度\n③ 英文句: \"The cation has a high charge density and distorts / polarises the electron cloud of the anion.\"",
     "tags": [
      "解释模板",
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "什么样的阴离子易被极化（polarised）？极化最强的组合是？",
     "back": "① Large anion / 阴离子半径大\n② Electron cloud far from nucleus, easily distorted / 电子云离核远、易变形\n③ 极化最强 = smallest cation + largest anion，如 Li⁺ 与 I⁻（LiI）",
     "tags": [
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "极化的后果是什么？如何解释 AlCl₃ 有明显共价性？",
     "back": "① Polarisation → covalent character 共价成分\n② 路线A: Al³⁺ is small and highly charged → high charge density → polarises Cl⁻ strongly\n③ 结论句: so the bonding has significant covalent character\n（路线B=电负性差小，两条路线不可混写）",
     "tags": [
      "解释模板",
      "拔高"
     ]
    },
    {
     "type": "concept",
     "front": "解释离子化合物高熔点和脆性（brittle）",
     "back": "① 高熔点: strong electrostatic attraction between oppositely charged ions → large amount of energy to overcome\n② 脆性: 受力后 layers shift → like charges are next to each other → repel → lattice shatters / 晶格碎裂",
     "tags": [
      "解释模板",
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "离子化合物导电性三态口径（固态/熔融/水溶液）怎么写？",
     "back": "① Solid: ions are fixed in the lattice, cannot move → does not conduct / 固态离子固定不导电\n② Molten or aqueous: ions are free to move and carry charge → conducts / 熔融或溶液中离子自由移动\n③ 主语必须是 ions，写 electrons 直接丢分",
     "tags": [
      "解释模板",
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "定义 metallic bonding（金属键），MS 三个采分点？",
     "back": "① (Regular lattice of) positive metal ions / 正金属离子\n② sea of delocalised electrons / 离域电子海\n③ (strong) electrostatic attraction between them\nMS 原文: Ignore \"free electrons\" —— 必须写 delocalised",
     "tags": [
      "定义背诵",
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "解释金属导电和导热（英文答题句）",
     "back": "① Delocalised electrons are free to move through the structure / 离域电子自由移动\n② 导电: electrons move towards the positive terminal and carry charge\n③ 导热: (delocalised) electrons transfer kinetic energy through the metal",
     "tags": [
      "解释模板"
     ]
    },
    {
     "type": "concept",
     "front": "解释金属的延展性（malleable / ductile）",
     "back": "① Layers of (metal) ions can slide over each other / 离子层可相互滑动\n② Delocalised electrons move with them → metallic bonding is not broken / 金属键不定向、不被破坏\n③ 结论: so the metal changes shape without shattering",
     "tags": [
      "解释模板"
     ]
    },
    {
     "type": "concept",
     "front": "σ bond 与 π bond 的区别（成键方式 + 电子云位置）",
     "back": "① σ: head-on / end-on overlap of orbitals，电子密度在两核连线上（头碰头）\n② π: sideways overlap of p orbitals，电子密度在键轴上下（肩并肩）\n③ C=C = 1 σ + 1 π；π 键较弱且阻止旋转",
     "tags": [
      "高频考点",
      "拔高"
     ]
    },
    {
     "type": "concept",
     "front": "为什么 C=C 不能旋转？与 E/Z 异构什么关系？",
     "back": "① Rotation would break the π bond / 旋转会破坏 p 轨道侧向重叠\n② → restricted rotation about the C=C bond\n③ 不同基团被固定在双键两侧 → E/Z (geometric) isomers\n关键词: restricted rotation + on different sides",
     "tags": [
      "解释模板",
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "定义 dative covalent bond（配位键），举 3 个例子",
     "back": "① A covalent bond in which both electrons (of the shared pair) come from the same atom / 共用电子对由一方单独提供\n② 例: NH₄⁺（N→H⁺）、H₃O⁺（O→H⁺）、Al₂Cl₆（Cl→Al）\n③ 箭头由给电子方指向受体（donor → acceptor）",
     "tags": [
      "定义背诵",
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "解释 Al₂Cl₆ 二聚体中的 dative bond（含箭头方向）",
     "back": "① AlCl₃ 中 Al 外层只有 6 电子，electron deficient / 缺电子\n② 桥氯 bridging Cl 用 lone pair 给 Al 形成 dative bond\n③ 箭头方向: Cl→Al，共 2 条氯桥配位键，形成二聚体 dimer",
     "tags": [
      "拔高",
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "定义 electronegativity（电负性），最强的元素顺序？",
     "back": "① The ability of an atom to attract the bonding pair of electrons (in a covalent bond)\n② 顺序: F > O > N ≈ Cl（F 最强，4.0）\n③ 趋势: 同周期→右增大，同族→下减小",
     "tags": [
      "定义背诵",
      "高频考点"
     ]
    },
    {
     "type": "calc",
     "front": "方法：两步判断分子是否为 polar molecule",
     "back": "① 第一步: 有无 polar bonds（电负性差）\n② 第二步: 形状是否对称 → do the dipoles cancel?\n③ 对称抵消→非极性: CO₂、CCl₄、BF₃\n④ 不对称/有孤对→极性: H₂O、NH₃、CHCl₃\n提醒: 有极性键 ≠ 极性分子",
     "tags": [
      "计算",
      "高频考点"
     ]
    },
    {
     "type": "calc",
     "front": "方法：由分子式推形状和键角（VSEPR 步骤）",
     "back": "① Bonding pairs = 与中心原子直接成键的原子个数\n② Lone pairs = (中心原子外层电子数 − 成键原子数，阳离子再减电荷、阴离子加电荷) ÷ 2\n③ 按 (bp, lp) 查表报 shape + bond angle\n④ 解释必写: electron pairs repel and get as far apart as possible\n验证: NH₃ → (5−3)÷2=1 lp → trigonal pyramidal 107°；NH₄⁺ → (5−4−1)÷2=0 lp → tetrahedral 109.5°",
     "tags": [
      "计算",
      "解释模板"
     ]
    },
    {
     "type": "concept",
     "front": "无孤对电子的五种形状 + 键角（bp = 2/3/4/5/6）",
     "back": "① 2bp: linear 180°（CO₂、BeCl₂）\n② 3bp: trigonal planar 120°（BF₃）\n③ 4bp: tetrahedral 109.5°（CH₄、NH₄⁺）\n④ 5bp: trigonal bipyramidal 120° & 90°（PCl₅）\n⑤ 6bp: octahedral 90°（SF₆）",
     "tags": [
      "定义背诵",
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "含孤对的形状：NH₃、H₂O 的形状 + 键角 + 解释",
     "back": "① NH₃ (3bp,1lp): trigonal pyramidal 107°\n② H₂O (2bp,2lp): bent / V-shaped 104.5°\n③ 每多 1 对孤对，键角约减 2.5°\n④ 必写: lone pair–bond pair repulsion > bond pair–bond pair repulsion",
     "tags": [
      "定义背诵",
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "四大晶格的微粒（particles）和作用力分别是什么？",
     "back": "① Metallic: 金属阳离子 + delocalised electrons，metallic bonds（Mg、Cu）\n② Ionic: 正负离子，electrostatic attraction（NaCl）\n③ Giant covalent: atoms，covalent bonds（diamond、SiO₂）\n④ Simple molecular: molecules，weak intermolecular forces（I₂、CO₂）",
     "tags": [
      "定义背诵",
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "四大晶格的熔点和导电性对比",
     "back": "① Metallic: 熔点较高，固液均导电（delocalised electrons）\n② Ionic: 高熔点，仅 molten/aqueous 导电（ions free to move）\n③ Giant covalent: 极高熔点，不导电（graphite 除外）\n④ Simple molecular: 低熔点，不导电",
     "tags": [
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "解释模板：为什么 diamond / SiO₂ 熔点极高？（3 分题）",
     "back": "① Giant covalent lattice / structure\n② Many strong covalent bonds must be broken；each C joined to 4 others（SiO₂: each Si bonded to 4 O）\n③ 结论句: (so a) large amount of energy is needed to break the bonds\n三点缺一不可",
     "tags": [
      "解释模板",
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "金刚石 vs 石墨：结构差异三点",
     "back": "① Diamond: each C bonded to 4 C，tetrahedral，109.5°\n② Graphite: each C bonded to 3 C，平面六元环层状，120°\n③ Graphite 第 4 个电子 delocalised（between layers）；层间只有 weak forces",
     "tags": [
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "解释石墨导电 + 可作润滑剂/铅笔芯",
     "back": "① 导电: each C forms only 3 bonds → 4th electron is delocalised → free to move along the layers\n② 滑动: weak forces between layers → layers slide over each other\n③ 必须写 delocalised electrons（MS: Ignore free electrons）",
     "tags": [
      "解释模板",
      "高频考点"
     ]
    },
    {
     "type": "calc",
     "front": "方法：比较共价性/极化程度（如 NaCl→MgCl₂→AlCl₃）",
     "back": "① 比 charge density: 电荷↑、半径↓ → polarising power↑\n② Na⁺ < Mg²⁺ < Al³⁺ → covalent character 递增\n③ 阴离子越大越易被极化: F⁻ < Cl⁻ < Br⁻ < I⁻\n④ 落点句: distorts the electron cloud → covalent character",
     "tags": [
      "计算",
      "拔高"
     ]
    },
    {
     "type": "calc",
     "front": "方法：由熔点/导电数据反推晶格类型（表格题）",
     "back": "① 高熔点 + 三态均不导电 → giant covalent\n② 高熔点 + 仅熔融/溶液导电 → ionic\n③ 高熔点 + 固液均导电 → metallic\n④ 低熔点（或易升华）+ 不导电 → simple molecular\n先看导电，再看熔点",
     "tags": [
      "计算",
      "高频考点"
     ]
    },
    {
     "type": "error",
     "front": "易错：金属键/石墨/金属导电写 free electrons",
     "back": "✗ free electrons / sea of free electrons\n✓ delocalised electrons\nMS 原文: \"Ignore free electrons\" —— 写 free 该采分点 0 分\n金属键定义、金属导电导热、石墨导电，全部只认 delocalised",
     "tags": [
      "判死条款",
      "高频考点"
     ]
    },
    {
     "type": "error",
     "front": "易错：ionic bond / metallic bond 定义漏写 electrostatic",
     "back": "✗ attraction between oppositely charged ions\n✓ electrostatic attraction between oppositely charged ions\nMS 口径: 无 electrostatic 不给定义分\n金属键同理: electrostatic attraction between positive ions and delocalised electrons",
     "tags": [
      "判死条款",
      "定义背诵"
     ]
    },
    {
     "type": "error",
     "front": "易错：选\"极化最显著/共价性最强\"的离子对选错",
     "back": "✗ 凭印象选\"都大\"或\"都小\"的组合\n✓ smallest cation + largest anion → 极化最强，如 Li⁺ 与 I⁻（LiI）\n口诀: 阳小阴大共价强\n反向: 最接近纯离子 = largest cation + smallest anion（CsF）",
     "tags": [
      "判死条款",
      "高频考点"
     ]
    },
    {
     "type": "error",
     "front": "易错：解释 AlCl₃ 共价性时两条 MS 路线混写",
     "back": "✓ 路线A: Al³⁺ small + highly charged → high charge density → polarises Cl⁻\n✓ 路线B: electronegativity difference between Al and Cl is small → 电子共用\n✗ 两条各写一半混在一起\nMS 口径: 任选一条写完整，混用不得分",
     "tags": [
      "判死条款",
      "拔高"
     ]
    },
    {
     "type": "error",
     "front": "易错：3 分解释题只写 2 点、缺结论句",
     "back": "✗ 只写 \"giant covalent + strong covalent bonds\" 就停笔\n✓ 补结论句: \"so a large amount of energy is needed to break the bonds\"\n规则: 采分点数 = 分值；解释熔点/导电/极性最后必须落回题目问的性质",
     "tags": [
      "判死条款",
      "解释模板"
     ]
    },
    {
     "type": "error",
     "front": "易错：解释 E/Z 异构不写 \"on different sides\"",
     "back": "✗ 只写 \"the double bond cannot rotate\"\n✓ ① restricted rotation about the C=C (π) bond\n✓ ② two different groups on different sides of the double bond\n两个采分点缺一不可，漏 \"on different sides\" 必丢分",
     "tags": [
      "判死条款",
      "高频考点"
     ]
    },
    {
     "type": "error",
     "front": "易错：极性键把 δ+/δ− 写成完整电荷 + / −",
     "back": "✗ H⁺—Cl⁻（完整电荷 = 离子键，直接判错）\n✓ Hδ+—Clδ−，partial charges 部分电荷\nMS 口径: polar covalent bond 只能标 δ+/δ−；标完整电荷 Do not award",
     "tags": [
      "判死条款"
     ]
    },
    {
     "type": "error",
     "front": "易错：解释 I₂/CO₂ 低熔点写 \"break covalent bonds\"",
     "back": "✗ covalent bonds are broken when it melts\n✓ only weak forces between molecules are overcome; covalent bonds do not break\n凡 simple molecular 熔沸点题，写断共价键该问 0 分",
     "tags": [
      "判死条款",
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "机制题：为什么「极化越强 = 共价性越强」？",
     "back": "① 共价的本质 = 两个核之间存在共享的电子密度\n② 理想离子键里，阴离子电子云是规整的球，两核之间是空的\n③ 阳离子把阴离子的电子云往自己这边拉，一部分电子密度被拉进两核之间\n④ 这部分被共享的电子密度就是 covalent character\n所以：拉得越狠 → 共价成分越多",
     "tags": [
      "解释模板",
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "为什么阳离子求「小」、阴离子求「大」，尺寸要求正好相反？",
     "back": "两者考的是不同属性：\n① 阳离子看拉力 polarising power：电场强度 ∝ 电荷 ÷ 半径²（半径进平方），半径越小正电荷越集中，且阴离子能贴得更近 → 拉力越强\n② 阴离子看软度 polarisability：半径越大，外层电子离自己的核越远、内层屏蔽越多、抓得越松 → 电子云越易变形\n③ 小而有力的手，捏大而软的气球 → 变形最大\nLi⁺(76 pm) + I⁻(220 pm) 就是这个极端",
     "tags": [
      "解释模板",
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "什么样的离子最接近「理想离子模型」？",
     "back": "理想模型 = 不可变形的硬球 + 纯静电吸引 + 两核间无电子密度。三条件（与极化正好相反）：\n① 阳离子大 → 电荷分散、charge density 低、极化能力弱\n② 阴离子小 → 电子被抓得紧、不易变形\n③ 两者电荷都低（±1）\n标杆 CsF：Cs⁺ 167 pm（最大阳离子）+ F⁻ 133 pm（最小阴离子）\n电负性路线同样指向它：Cs 0.79 vs F 3.98，差值 3.19 为稳定二元化合物之最",
     "tags": [
      "定义背诵",
      "高频考点"
     ]
    },
    {
     "type": "error",
     "front": "易错：只看半径判断极化，忽略电子构型（d¹⁰ 例外）",
     "back": "✗ Ag⁺(115 pm) 和 Na⁺(102 pm) 差不多大，所以 AgCl 与 NaCl 离子性差不多\n✓ Ag⁺ 外层是 4d¹⁰，d 电子屏蔽效果差，核电荷「漏」得多，实际极化能力远强于同尺寸的稀有气体构型离子\n✓ 所以 AgCl 的共价性明显比 NaCl 强\n→ 理想离子模型还有第四个条件：阳离子最好是 noble gas configuration（Na⁺/K⁺/Mg²⁺），不是 Ag⁺/Cu⁺/Zn²⁺",
     "tags": [
      "判死条款",
      "拔高"
     ]
    },
    {
     "type": "error",
     "front": "易错：polarising power 与 polarisability 混用",
     "back": "✗ 写「阴离子的 polarising power 大」\n✓ polarising power = 阳离子「拉别人」的能力（小 + 高电荷）\n✓ polarisability = 阴离子「自己被拉变形」的难易（大 + 高电荷）\n答题两个方向都要点到：只写阳离子或只写阴离子，通常只得一半分",
     "tags": [
      "判死条款",
      "定义背诵"
     ]
    },
    {
     "type": "concept",
     "front": "拔高：怎么用实验证明「离子模型有多准」？",
     "back": "比较两个晶格能：\n① 理论值：把离子当纯点电荷，用静电模型算出来\n② 实验值：由 Born–Haber 循环从实测数据反推\n③ 两值接近 → 纯离子模型成立（NaCl 只差十几 kJ mol⁻¹）\n④ 实验值明显更大 → 多出的部分是静电模型没算进去的额外成键 = 共价成分（AgCl 差一百多）\n（这是 Unit 4 Topic 12 的内容，U1 只需知道方向）",
     "tags": [
      "拔高"
     ]
    }
   ]
  },
  {
   "id": "t4",
   "title": "Intro organic & alkanes",
   "cn": "有机入门与烷烃",
   "branches": [
    {
     "label": "命名与化学式 Naming & Formulae",
     "items": [
      "词根 meth→oct 对应 1–8 碳",
      {
       "t": "⚠编号取最小 locant",
       "q": "给 (CH₃)₂CHCH(CH₃)CH₂CH₃ 命名（写出完整 IUPAC 名）。",
       "a": "最长链 5 碳 pentane；从取代基近端编号 → 2,3-dimethylpentane\n规则：编号取最小 locant 组合；数字与字母用连字符、数字间用逗号"
      },
      "取代基字母序，di- 不排序",
      "⚠数字-字母连字符、数字逗号",
      "五种化学式区分",
      "skeletal 端点拐点都是 C"
     ]
    },
    {
     "label": "异构 Isomerism",
     "items": [
      "链/位置/官能团三类",
      {
       "t": "⚠烯烃↔环烷烃官能团异构",
       "q": "C₄H₈ 有哪两类官能团异构体？各举一例。",
       "a": "烯烃：but-1-ene / but-2-ene(E,Z) / methylpropene\n环烷烃：cyclobutane / methylcyclopropane\n同通式 CₙH₂ₙ、不同官能团 → functional group isomers\n⚠ 数异构体别漏环状 + E/Z"
      },
      "画异构体先长链后支链",
      "命名查重防重复计数",
      {
       "t": "⚠最后必查 E/Z 几何异构",
       "y": "2022.10 真题 · Q15",
       "focus": "重点看 C₄H₈ 同分异构与命名部分",
       "qimg": [
        "decks/media/2022_10_q15_p14.jpg",
        "decks/media/2022_10_q15_p15.jpg",
        "decks/media/2022_10_q15_p16.jpg",
        "decks/media/2022_10_q15_p17.jpg"
       ],
       "aimg": [
        "decks/media/2022_10_q15_ms16.jpg",
        "decks/media/2022_10_q15_ms17.jpg",
        "decks/media/2022_10_q15_ms18.jpg",
        "decks/media/2022_10_q15_ms19.jpg",
        "decks/media/2022_10_q15_ms20.jpg"
       ]
      }
     ]
    },
    {
     "label": "自由基取代 Free Radical Substitution",
     "items": [
      "initiation 需 UV 均裂",
      {
       "t": "⚠传递步必再生 Cl•",
       "y": "2025.1 真题 · Q25",
       "focus": "重点看 (a)：丁烷+Cl₂ 自由基取代",
       "qimg": [
        "decks/media/2025_1_q25_p20.jpg",
        "decks/media/2025_1_q25_p21.jpg"
       ],
       "aimg": [
        "decks/media/2025_1_q25_ms23.jpg",
        "decks/media/2025_1_q25_ms24.jpg",
        "decks/media/2025_1_q25_ms25.jpg",
        "decks/media/2025_1_q25_ms26.jpg"
       ]
      },
      "termination 两自由基结合",
      "⚠点在 C 上且不带电荷",
      "微量 C₂H₆ 证明机理",
      "过量 CH₄ 减少多取代"
     ]
    },
    {
     "label": "原油三工艺 Crude Oil Processes",
     "items": [
      "分馏按 boiling point",
      {
       "t": "cracking：高温+zeolite",
       "q": "Cracking 和 reforming 的条件与目的分别是什么？",
       "a": "cracking：高温 + zeolite 催化剂，长链→短链，产物必含烯烃；提高汽油产量+得聚合原料\nreforming：直链→支链/环状，提高 octane number、燃烧更平稳\n⚠ 两者条件别互换"
      },
      "⚠裂化产物必含 alkene",
      "reforming 直链→支/环",
      "目的：提高 octane number"
     ]
    },
    {
     "label": "燃烧与环境 Combustion & Environment",
     "items": [
      {
       "t": "⚠CO 毒性解释写满三点",
       "q": "Why is carbon monoxide toxic? 完整采分口径怎么写？",
       "a": "CO binds (irreversibly) to haemoglobin\nforms carboxyhaemoglobin → 血红蛋白无法运 O₂\n→ 组织缺氧\n配套方程：2CO + 2NO → 2CO₂ + N₂（catalytic converter）"
      },
      "碳颗粒→global dimming",
      "NOx：引擎高温 N₂+O₂",
      "SO₂/NOx→acid rain",
      "⚠2CO+2NO→2CO₂+N₂",
      "biofuel 碳中和有局限",
      "H₂ 清洁但储存难"
     ]
    },
    {
     "label": "断键与反应类型 Fission & Reactions",
     "items": [
      "均裂→radicals，异裂→ions",
      "radical＝单电子粒子",
      "加成/取代/消去/氧化",
      "⚠烷烃只取代不加成"
     ]
    }
   ],
   "terms": [
    {
     "en": "hydrocarbon",
     "cn": "碳氢化合物",
     "def": "A compound containing carbon and hydrogen only."
    },
    {
     "en": "saturated",
     "cn": "饱和的",
     "def": "Containing carbon–carbon single bonds only."
    },
    {
     "en": "unsaturated",
     "cn": "不饱和的",
     "def": "Containing at least one carbon–carbon double bond."
    },
    {
     "en": "homologous series",
     "cn": "同系列",
     "def": "Series with the same general formula; adjacent members differ by CH2."
    },
    {
     "en": "functional group",
     "cn": "官能团",
     "def": "Atom or group of atoms responsible for the characteristic reactions of a compound."
    },
    {
     "en": "structural isomers",
     "cn": "结构异构体",
     "def": "Compounds with the same molecular formula but different structural formulae."
    },
    {
     "en": "empirical formula",
     "cn": "实验式（最简式）",
     "def": "Simplest whole-number ratio of atoms of each element in a compound."
    },
    {
     "en": "molecular formula",
     "cn": "分子式",
     "def": "Actual number of atoms of each element in one molecule."
    },
    {
     "en": "displayed formula",
     "cn": "展开结构式",
     "def": "Formula showing all atoms and all bonds in the molecule."
    },
    {
     "en": "skeletal formula",
     "cn": "骨架式",
     "def": "Line formula where each vertex is a carbon; hydrogens on carbon are omitted but hydrogens in functional groups (O–H, N–H) are shown."
    },
    {
     "en": "homolytic fission",
     "cn": "均裂",
     "def": "Bond breaking in which each atom takes one electron, forming radicals."
    },
    {
     "en": "heterolytic fission",
     "cn": "异裂",
     "def": "Bond breaking in which one atom takes both electrons, forming ions."
    },
    {
     "en": "free radical",
     "cn": "自由基",
     "def": "A species with an unpaired electron."
    },
    {
     "en": "substitution",
     "cn": "取代反应",
     "def": "Reaction in which one atom or group is replaced by another."
    },
    {
     "en": "addition",
     "cn": "加成反应",
     "def": "Reaction in which two molecules combine to form a single product."
    },
    {
     "en": "fractional distillation",
     "cn": "分馏",
     "def": "Separating crude oil into fractions according to boiling point."
    },
    {
     "en": "cracking",
     "cn": "裂化",
     "def": "Breaking long-chain alkanes into shorter alkanes and alkenes using heat and a zeolite catalyst."
    },
    {
     "en": "reforming",
     "cn": "重整",
     "def": "Converting straight-chain alkanes into branched or cyclic hydrocarbons to raise octane number."
    },
    {
     "en": "octane number",
     "cn": "辛烷值",
     "def": "A measure of how smoothly a fuel burns in an engine."
    },
    {
     "en": "initiation",
     "cn": "链引发",
     "def": "Step in which UV light breaks a bond homolytically to form radicals."
    },
    {
     "en": "propagation",
     "cn": "链传递",
     "def": "Steps in which a radical reacts to give a product and a new radical."
    },
    {
     "en": "termination",
     "cn": "链终止",
     "def": "Step in which two radicals combine to form a molecule."
    },
    {
     "en": "carbon neutral",
     "cn": "碳中和",
     "def": "A process with no net carbon dioxide emission to the atmosphere."
    },
    {
     "en": "biofuel",
     "cn": "生物燃料",
     "def": "A fuel produced from recently living plant or animal material."
    }
   ],
   "cards": [
    {
     "type": "concept",
     "front": "定义：hydrocarbon / saturated / unsaturated（英文定义怎么背？）",
     "back": "① Hydrocarbon: a compound containing carbon and hydrogen ONLY（only 必写）\n② Saturated: contains carbon–carbon single bonds only（只有单键）\n③ Unsaturated: contains at least one C=C double bond（至少一个碳碳双键）",
     "tags": [
      "定义背诵",
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "五种化学式各是什么？以 butane 为例",
     "back": "① Molecular 分子式：C₄H₁₀（实际原子数）\n② Empirical 实验式：C₂H₅（最简整数比）\n③ Structural 结构简式：CH₃CH₂CH₂CH₃\n④ Displayed 展开式：画出所有原子和所有键\n⑤ Skeletal 骨架式：折线，端点/拐点=C，H 省略（O–H 等官能团上的 H 要画）",
     "tags": [
      "定义背诵"
     ]
    },
    {
     "type": "concept",
     "front": "背英文：functional group 与 homologous series 的定义",
     "back": "① Functional group: atom or group of atoms responsible for the characteristic reactions（决定化性的原子团）\n② Homologous series: same general formula, adjacent members differ by CH₂\n③ 补充采分点：similar chemical properties；gradual trend in physical properties（化性相似，物性递变）",
     "tags": [
      "定义背诵",
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "三类 structural isomerism 是哪三类？各举一例",
     "back": "① Chain 链异构：碳骨架不同，butane vs methylpropane\n② Position 位置异构：官能团位置不同，1- vs 2-chlorobutane\n③ Functional group 官能团异构：官能团不同，如 alkene vs cycloalkane\n定义：same molecular formula, different structural formula",
     "tags": [
      "定义背诵",
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "为什么 alkenes 和 cycloalkanes 互为异构体？属哪类？",
     "back": "① 通式都是 CₙH₂ₙ，分子式相同\n② 结构不同：一个含 C=C，一个是环状全单键\n③ 属 functional group isomers 官能团异构\n④ 例：propene C₃H₆ 与 cyclopropane C₃H₆",
     "tags": [
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "homolytic vs heterolytic fission 区别？各生成什么？",
     "back": "① Homolytic 均裂：each atom takes one electron → two radicals 自由基\n② Heterolytic 异裂：one atom takes both electrons → positive and negative ions\n③ Radical: species with an unpaired electron（含单电子）\n④ 均裂常由 UV light 引发",
     "tags": [
      "定义背诵"
     ]
    },
    {
     "type": "concept",
     "front": "四种反应类型 addition/substitution/elimination/oxidation 怎么判断？",
     "back": "① Addition 加成：两分子合为一个产物，无副产物（不饱和烃典型）\n② Substitution 取代：一个原子/基团被替换（烷烃+卤素）\n③ Elimination 消去：脱去小分子生成双键\n④ Oxidation 氧化：燃烧即氧化，complete → CO₂ + H₂O",
     "tags": [
      "定义背诵"
     ]
    },
    {
     "type": "concept",
     "front": "解释 fractional distillation 如何分离原油（采分点）",
     "back": "① Crude oil heated/vaporised 进入分馏塔\n② 塔内温度梯度：下热上冷\n③ Separated by boiling point：短链低沸点升到塔顶冷凝，长链高沸点留塔底\n④ 结论句：each fraction contains hydrocarbons with similar boiling points",
     "tags": [
      "解释模板",
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "Cracking 的条件、目的和一个方程？",
     "back": "① 条件：high temperature + zeolite catalyst 沸石催化剂\n② 长链烷烃断成短链 alkane + alkene（产物必含烯烃）\n③ 目的：短链燃料 demand > supply；烯烃作聚合物原料\n④ 例：C₁₀H₂₂ → C₈H₁₈ + C₂H₄（C、H 必须守恒）",
     "tags": [
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "Reforming 的目的和产物类型？",
     "back": "① 把 straight-chain 直链烷烃变为 branched 支链或 cyclic 环状\n② 目的：提高辛烷值 octane number，promotes efficient/smoother combustion\n③ 例：hexane → cyclohexane + H₂\n④ 注意：碳数不变，只改骨架，常放出 H₂",
     "tags": [
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "解释模板：为什么 CO 有毒？（3 分题标准作答）",
     "back": "① CO binds (irreversibly) to haemoglobin in red blood cells\n② prevents haemoglobin carrying oxygen（形成 carboxyhaemoglobin）\n③ 结论句：less oxygen transported to cells, causing death\n来源：incomplete combustion 不完全燃烧",
     "tags": [
      "解释模板",
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "碳颗粒、NOx、SO₂ 各自的来源与危害？",
     "back": "① Carbon particulates：不完全燃烧；global dimming 全球变暗 + 呼吸疾病 asthma\n② NOx：引擎内高温使 N₂ + O₂ 化合生成；photochemical smog 光化学烟雾 + acid rain\n③ SO₂：燃料中硫杂质燃烧；形成 acid rain 酸雨",
     "tags": [
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "Catalytic converter 除去 CO 和 NO 的方程？催化剂？",
     "back": "① 方程必背：2CO + 2NO → 2CO₂ + N₂（注意配平）\n② 有害 CO、NO 转为无害 CO₂、N₂\n③ 催化剂：platinum/rhodium 铂铑，蜂窝载体增大表面积\n④ 也把未燃烃氧化为 CO₂ + H₂O",
     "tags": [
      "定义背诵",
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "CH₄+Cl₂ 自由基取代三步叫什么？写 initiation",
     "back": "① 三步：initiation → propagation → termination\n② Initiation：Cl₂ → 2Cl•　条件必写 UV light\n③ 本质：homolytic fission 均裂，每原子各得一个电子\n④ 总反应：CH₄ + Cl₂ → CH₃Cl + HCl",
     "tags": [
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "写出 propagation 两步方程；为什么叫链式反应？",
     "back": "① CH₄ + Cl• → •CH₃ + HCl\n② •CH₃ + Cl₂ → CH₃Cl + Cl•\n③ 每步消耗一个自由基又生成一个自由基 → chain reaction 循环\n④ Cl• 不断再生，少量 UV 即可持续反应",
     "tags": [
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "Termination 有哪几种？为何产物含 C₂H₆ 能证明机理？",
     "back": "① 两自由基结合：Cl•+Cl•→Cl₂；•CH₃+Cl•→CH₃Cl；•CH₃+•CH₃→C₂H₆\n② 自由基被消耗，链终止\n③ 检出微量 C₂H₆（trace of ethane）→ 证明存在 •CH₃ 相互结合，支持 radical mechanism\n④ termination 产物量极少",
     "tags": [
      "拔高"
     ]
    },
    {
     "type": "concept",
     "front": "为什么 CH₄+Cl₂ 得到 CH₂Cl₂、CHCl₃ 等混合产物？",
     "back": "① CH₃Cl 中仍有 C–H，可被继续取代 further substitution\n② 依次生成 CH₂Cl₂ → CHCl₃ → CCl₄\n③ 想主产 CH₃Cl：用 excess CH₄ 过量甲烷\n④ 想得 CCl₄：用 excess Cl₂",
     "tags": [
      "拔高"
     ]
    },
    {
     "type": "concept",
     "front": "Biofuels 为什么说 carbon neutral？该说法的局限？",
     "back": "① 论证：植物光合吸收的 CO₂ = 燃烧放出的 CO₂ → net zero CO₂ emission\n② 局限：种植/收割/运输/加工消耗 fossil fuels，有额外 CO₂ 排放 → 并非真正 carbon neutral\n③ 其他：占用耕地、影响粮食供应\n④ 优点：renewable 可再生",
     "tags": [
      "解释模板"
     ]
    },
    {
     "type": "concept",
     "front": "氢作燃料的优点和缺点各两条？",
     "back": "① 优：燃烧只生成 H₂O，无 CO₂/CO 排放\n② 优：可由电解水制得，renewable\n③ 缺：气体难储运——需高压/液化，易燃易爆\n④ 缺：制氢常依赖 fossil fuels 发电，间接排放 CO₂；加氢设施少",
     "tags": [
      "解释模板"
     ]
    },
    {
     "type": "calc",
     "front": "方法：IUPAC 命名四步法（给结构写名字）",
     "back": "① 找最长碳链 longest chain → 主链词根\n② 从离取代基最近一端编号 lowest locant\n③ 取代基按字母序 alphabetical order（di-/tri- 不参与排序）\n④ 数字-字母之间用连字符，数字间用逗号：2,2-dimethylbutane\n⑤ 词根：meth1 eth2 prop3 but4 pent5 hex6 hept7 oct8",
     "tags": [
      "计算",
      "高频考点"
     ]
    },
    {
     "type": "calc",
     "front": "计算：由质量分数求 empirical formula 再求 molecular formula",
     "back": "① 各元素 % ÷ Ar 得摩尔比\n② 同除最小值化最简整数比 → empirical formula\n③ Mr ÷ empirical mass = n\n④ molecular formula = (empirical)ₙ\n易错：比值 1:1.5 要 ×2 变 2:3，不能四舍五入",
     "tags": [
      "计算"
     ]
    },
    {
     "type": "calc",
     "front": "方法：系统地画出某分子式的全部异构体",
     "back": "① 先画最长直链，再逐步缩短主链、加支链\n② 每画一个就命名一次，名字相同 = 重复\n③ 检查位置异构、官能团异构\n④ 最后固定检查：有没有 geometric (E/Z) isomers——C=C 每端各接两个不同基团才有\n例：C₅H₁₂ 共 3 种",
     "tags": [
      "计算",
      "高频考点"
     ]
    },
    {
     "type": "calc",
     "front": "计算：写烷烃 complete / incomplete combustion 方程",
     "back": "① Complete：alkane + O₂ → CO₂ + H₂O；先配 C 再配 H 最后配 O，O₂ 可用分数\n② 例：C₄H₁₀ + 6½O₂ → 4CO₂ + 5H₂O\n③ Incomplete：产物为 CO 或 C（+ H₂O）\n④ 提醒：题目写 limited oxygen 就写 CO",
     "tags": [
      "计算"
     ]
    },
    {
     "type": "error",
     "front": "易错：写 hydrocarbon 定义时漏掉 only",
     "back": "✗ a compound containing carbon and hydrogen\n✓ a compound containing carbon and hydrogen ONLY\nMS 口径：Do not award without 'only'\n同理 saturated 必须写 single bonds only",
     "tags": [
      "判死条款",
      "定义背诵"
     ]
    },
    {
     "type": "error",
     "front": "易错：命名时编号方向与标点格式",
     "back": "✗ 3-methylbutane（从远端编号）\n✓ 2-methylbutane（lowest locant 最小编号）\n✗ 2 2 dimethylbutane / 2.2-dimethylbutane\n✓ 2,2-dimethylbutane：数字间逗号，数字-字母连字符\nMS 口径：locant 错误不给分，标点不规范冒风险",
     "tags": [
      "判死条款",
      "高频考点"
     ]
    },
    {
     "type": "error",
     "front": "易错：自由基机理里写电荷或 δ+/δ−",
     "back": "✗ Cl⁻、CH₃⁺、δ+/δ− 出现在 free radical 机理中\n✓ 所有中间体都是电中性 radical，用 • 表示单电子：Cl•、•CH₃\nMS 口径：radical 带电荷 Do not award\n此机理不要求 curly arrows，别画离子箭头",
     "tags": [
      "判死条款"
     ]
    },
    {
     "type": "error",
     "front": "易错：甲基自由基的 • 点位置",
     "back": "✗ 写 CH₃ 不带点；或把点标在 H 上\n✓ •CH₃ / CH₃•——dot 必须标在 carbon 上（未成对电子在 C）\nMS 口径：dot missing 或点在 H 上不给分\n方程里每个 radical 都要带点，漏一个丢一分",
     "tags": [
      "判死条款"
     ]
    },
    {
     "type": "error",
     "front": "易错：把 propagation 第二步写成两个自由基相加",
     "back": "✗ •CH₃ + Cl• → CH₃Cl 当作 propagation\n✓ propagation：•CH₃ + Cl₂ → CH₃Cl + Cl•（必须再生自由基）\n两个自由基结合的是 termination\n另：initiation 漏写 UV 条件扣分",
     "tags": [
      "判死条款",
      "高频考点"
     ]
    },
    {
     "type": "error",
     "front": "易错：解释 E/Z 异构时不写 'on different sides'",
     "back": "✗ 只写 restricted rotation about C=C 就停笔\n✓ 补全：groups are on different sides of the C=C（E）/ on the same side（Z）\n采分点：① restricted rotation ② C=C 每个碳接两个不同基团 ③ same/different sides",
     "tags": [
      "判死条款",
      "解释模板"
     ]
    },
    {
     "type": "error",
     "front": "易错：数 C₄H₈ 异构体时漏掉几何异构",
     "back": "✗ 只数 but-1-ene、but-2-ene、methylpropene、cyclobutane\n✓ 结构异构还有 methylcyclopropane（环也要数全）；且 but-2-ene 要拆 E-/Z- —— 共 6 种\n口诀：画完所有结构异构（含环状）后，最后固定检查每个 C=C 有无 E/Z",
     "tags": [
      "判死条款",
      "高频考点"
     ]
    },
    {
     "type": "error",
     "front": "易错：烷烃与溴反应的现象凭印象编",
     "back": "✗ 常温暗处写\"溴褪色\"\"生成沉淀\"（编造）\n✓ 暗处：no change / brown colour remains——烷烃不反应\n✓ UV 下：brown colour fades slowly + steamy/misty fumes of HBr\nMS 口径：现象必须是可观察的颜色/气体变化",
     "tags": [
      "判死条款"
     ]
    },
    {
     "type": "error",
     "front": "易错：3 分解释题只写 2 个采分点、缺结论句",
     "back": "✗ CO binds to haemoglobin, prevents O₂ carriage.（只 2 点）\n✓ 补结论：so less oxygen reaches cells → death\n模板：原因① → 机理② → 结论句③（so/therefore…）\n分值 = 采分点数，3 分题必写 3 句",
     "tags": [
      "判死条款",
      "解释模板"
     ]
    },
    {
     "type": "error",
     "front": "易错：考场用中文作答或中英混写",
     "back": "✗ 任何中文表述——Edexcel 阅卷不识别，按 0 分处理\n✓ 全英文作答；写不出整句就写关键词组：homolytic fission / regenerates Cl•\n背卡时中文只用于理解，back 里的英文原句必须能默写\n方程、数字、符号不受影响",
     "tags": [
      "判死条款"
     ]
    }
   ]
  },
  {
   "id": "t5",
   "title": "Alkenes",
   "cn": "烯烃",
   "branches": [
    {
     "label": "成键与活性 C=C bonding",
     "items": [
      "1σ + 1π 组成双键",
      "π 电子云在平面上下",
      "⚠π 电子暴露→吸引 electrophile",
      "π 键较弱、加成时先断",
      "⚠解释题结论句必写"
     ]
    },
    {
     "label": "E/Z 异构 E/Z isomerism",
     "items": [
      "⚠两条件缺一不给分",
      "restricted rotation about C=C",
      "每个双键碳两个不同基团",
      "CIP：原子序数大者优先",
      "⚠必写 same/different sides",
      "1,1-二取代无 E/Z",
      "cis/trans 只是特例常被 Ignore"
     ]
    },
    {
     "label": "加成反应 Addition reactions",
     "items": [
      "H₂/Ni/150°C→margarine",
      "⚠溴水 orange→colourless 两端",
      {
       "t": "HBr 室温 electrophilic addition",
       "y": "2023.1 真题 · Q22",
       "focus": "全题：丙烯加成/聚合/机理与主产物",
       "qimg": [
        "decks/media/2023_1_q22_p13.jpg",
        "decks/media/2023_1_q22_p14.jpg",
        "decks/media/2023_1_q22_p15.jpg"
       ],
       "aimg": [
        "decks/media/2023_1_q22_ms13.jpg",
        "decks/media/2023_1_q22_ms14.jpg",
        "decks/media/2023_1_q22_ms15.jpg",
        "decks/media/2023_1_q22_ms16.jpg",
        "decks/media/2023_1_q22_ms17.jpg"
       ]
      },
      {
       "t": "水合 H₃PO₄/300°C/60atm",
       "q": "工业由乙烯制乙醇的试剂与三个条件？这是什么反应类型？",
       "a": "steam (H₂O(g)) + H₃PO₄ catalyst，300 °C，60–70 atm\nhydration / (electrophilic) addition\n⚠ 条件三件套都要写，别与卤代/氢化条件混"
      },
      {
       "t": "冷稀 KMnO₄→diol 紫色褪去",
       "q": "冷的稀酸性 KMnO₄ 与烯烃反应：产物、现象、用途？",
       "a": "产物 diol（两个 –OH 加在双键两碳）\n现象 purple → colourless\n用途：检验 C=C（另一检验 = 溴水 orange→colourless）\n⚠ 试剂写全：cold dilute acidified KMnO₄"
      }
     ]
    },
    {
     "label": "机理规范 Mechanism rules",
     "items": [
      "⚠箭头起点=π 键或孤对",
      "⚠carbocation 完整 + 非 δ+",
      "Br⁻ 画孤对+完整负电荷",
      {
       "t": "Br₂ induced dipole δ+ 在近端",
       "q": "Br₂ 本身非极性，为什么能进攻 C=C？δ+ 标在哪个 Br 上？",
       "a": "接近富电子 π 键时被诱导极化（induced dipole）\nδ+ 标在靠近 C=C 的那个 Br 上\n随后 Br–Br 异裂，机理照常走两步\n✗ 给 Br₂ 标永久偶极或完整电荷"
      },
      "⚠马氏=经更稳定 carbocation",
      "叔>仲>伯 inductive effect"
     ]
    },
    {
     "label": "加聚与环保 Polymers",
     "items": [
      "单体必含 C=C",
      "AE=100% 无副产物",
      "⚠repeat unit 两端伸出键",
      {
       "t": "反推单体：两碳剪开还原 C=C",
       "q": "由聚合物主链 –CH₂–C(CH₃)H–CH₂–C(CH₃)H– 反推单体。",
       "a": "沿主链每两个碳剪一段 → CH₂–C(CH₃)H\n把这两碳间单键改回 C=C → CH₂=CHCH₃ (propene)\n检查：重复单元原子数必须与单体一致"
      },
      "non-biodegradable 填埋问题",
      "焚烧 PVC 释放 HCl"
     ]
    }
   ],
   "terms": [
    {
     "en": "alkene",
     "cn": "烯烃",
     "def": "Unsaturated hydrocarbon containing at least one carbon–carbon double bond."
    },
    {
     "en": "sigma (σ) bond",
     "cn": "σ 键",
     "def": "Bond from head-on orbital overlap, with electron density between the two nuclei."
    },
    {
     "en": "pi (π) bond",
     "cn": "π 键",
     "def": "Bond from sideways overlap of p orbitals, electron density above and below the bond axis."
    },
    {
     "en": "unsaturated",
     "cn": "不饱和的",
     "def": "Containing at least one carbon–carbon double bond."
    },
    {
     "en": "electrophile",
     "cn": "亲电试剂",
     "def": "An electron pair acceptor attracted to regions of high electron density."
    },
    {
     "en": "electrophilic addition",
     "cn": "亲电加成",
     "def": "Reaction in which an electrophile adds across the C=C, breaking the π bond."
    },
    {
     "en": "carbocation",
     "cn": "碳正离子",
     "def": "Intermediate containing a carbon atom bearing a full positive charge."
    },
    {
     "en": "positive inductive effect",
     "cn": "正诱导效应",
     "def": "Electron-donating effect of alkyl groups that spreads and stabilises a positive charge."
    },
    {
     "en": "stereoisomers",
     "cn": "立体异构体",
     "def": "Molecules with the same structural formula but different spatial arrangement of atoms."
    },
    {
     "en": "E/Z isomerism",
     "cn": "E/Z 异构",
     "def": "Isomerism from restricted rotation about C=C with two different groups on each carbon."
    },
    {
     "en": "restricted rotation",
     "cn": "受限旋转",
     "def": "Rotation about the C=C is prevented because it would break the π bond."
    },
    {
     "en": "CIP priority rules",
     "cn": "CIP 优先规则",
     "def": "Priority given to the atom of higher atomic number attached to each C=C carbon."
    },
    {
     "en": "induced dipole",
     "cn": "诱导偶极",
     "def": "Temporary dipole formed in Br₂ when π electrons repel its electron cloud."
    },
    {
     "en": "curly arrow",
     "cn": "弯箭头",
     "def": "Shows movement of an electron pair, starting from a bond or lone pair."
    },
    {
     "en": "Markovnikov addition",
     "cn": "马氏加成",
     "def": "Major product forms via the more stable carbocation intermediate."
    },
    {
     "en": "hydrogenation",
     "cn": "氢化（加氢）",
     "def": "Addition of hydrogen across C=C using a nickel catalyst at about 150 °C."
    },
    {
     "en": "hydration",
     "cn": "水合反应",
     "def": "Addition of steam to an alkene with H₃PO₄ catalyst forming an alcohol."
    },
    {
     "en": "diol",
     "cn": "二元醇",
     "def": "Compound with two –OH groups, formed from an alkene with cold dilute acidified KMnO₄."
    },
    {
     "en": "addition polymerisation",
     "cn": "加聚反应",
     "def": "Many unsaturated monomers join to form one polymer with no other product."
    },
    {
     "en": "monomer",
     "cn": "单体",
     "def": "Small molecule containing C=C that joins to others to form a polymer."
    },
    {
     "en": "repeat unit",
     "cn": "重复单元",
     "def": "Smallest section of a polymer chain whose repetition gives the whole chain."
    },
    {
     "en": "atom economy",
     "cn": "原子经济性",
     "def": "Molar mass of desired product divided by total molar mass of all products, ×100."
    },
    {
     "en": "biodegradable",
     "cn": "可生物降解的",
     "def": "Able to be broken down by microorganisms in the environment."
    }
   ],
   "cards": [
    {
     "type": "concept",
     "front": "C=C 双键由哪两种键组成？π 键电子云分布在哪里？",
     "back": "① 1 个 σ bond + 1 个 π bond\n② σ：轨道头对头重叠，电子密度在两核之间\n③ π：p 轨道侧面重叠，electron density above and below the plane of the C=C\n④ π 电子云暴露（exposed），易被进攻",
     "tags": [
      "定义背诵",
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "解释：为什么 alkenes 比 alkanes 活泼？（3 分模板）",
     "back": "① The C=C has a π bond / region of high electron density\n② π electrons are exposed（在平面上下）\n③ 结论句：so it attracts electrophiles → reacts more readily\n提示：点数=分数，最后必须落到 electrophile",
     "tags": [
      "解释模板",
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "electrophile（亲电试剂）的考试级定义？",
     "back": "① An electron pair acceptor\n② attracted to regions of high electron density（如 C=C 的 π bond）\n③ 例：H⁺、Br₂ 的 δ+ 端（induced dipole）",
     "tags": [
      "定义背诵"
     ]
    },
    {
     "type": "concept",
     "front": "产生 E/Z isomerism 的两个条件？（缺一不给分）",
     "back": "① Restricted rotation about the C=C bond\n② Each carbon of the C=C has two different groups attached\n③ 两条必须同时写全，只写一条不给分",
     "tags": [
      "定义背诵",
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "CIP priority rules 怎么定基团优先级？",
     "back": "① 比较直接连在双键碳上原子的 atomic number，大者优先（higher priority）\n② 相同则比较外一层原子（next atoms along），逐层比\n③ 例：Br > Cl > O > N > C > H",
     "tags": [
      "定义背诵",
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "E 和 Z 的判断句（必背英文原句）？",
     "back": "① Z: the two highest priority groups are on the same side of the C=C\n② E: the highest priority groups are on opposite sides of the C=C\n③ 记忆：Z = zusammen 同侧；E = entgegen 对侧",
     "tags": [
      "定义背诵",
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "cis/trans 与 E/Z 命名的适用范围区别？",
     "back": "① cis/trans 只适用于双键两碳上有相同基团（如各带一个 H）的特例\n② E/Z 通用，任何满足两条件的烯烃都能命名\n③ MS 口径：常 Ignore cis/trans，但题目要求 E/Z 时必须用 E/Z",
     "tags": [
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "为什么末端烯烃（如 but-1-ene）没有 E/Z 异构？",
     "back": "① 其中一个双键碳连有 two identical groups/atoms（如两个 H）\n② 不满足\"每个双键碳两个不同基团\"条件\n③ 英文答句：one carbon of the C=C has two identical groups, so no E/Z isomerism",
     "tags": [
      "解释模板",
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "烯烃 + H₂ 的条件和工业用途？",
     "back": "① 试剂 H₂，催化剂 Ni，约 150°C\n② 类型 addition，π 键断，产物 alkane\n③ 用途：氢化植物油制 margarine，提高熔点使其变固态",
     "tags": [
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "检验 C=C 的试剂和现象？（现象两端都要写）",
     "back": "① 加 bromine water 并振荡\n② 现象：from orange/brown to colourless（起点+终点缺一不可）\n③ 若是烷烃：no change / stays orange（只在 UV 下缓慢取代）",
     "tags": [
      "高频考点",
      "解释模板"
     ]
    },
    {
     "type": "concept",
     "front": "烯烃 + HBr 的条件、反应类型和产物？",
     "back": "① 条件：room temperature，无需催化剂\n② 类型：electrophilic addition\n③ 产物 bromoalkane；不对称烯烃的 major product 经 more stable carbocation 生成",
     "tags": [
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "工业乙烯水合制乙醇的条件？（三个数字都要背）",
     "back": "① H₂O(g)（steam）\n② 催化剂 H₃PO₄（phosphoric acid）\n③ 300°C、约 60 atm\n④ 类型：addition/hydration，产物 ethanol",
     "tags": [
      "定义背诵",
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "烯烃 + 冷稀酸化 KMnO₄：产物和现象？",
     "back": "① 产物：diol（两个 –OH 分别加到双键两碳上）\n② 现象：purple colour fades / from purple to colourless\n③ 类型：oxidation；试剂必须写 cold dilute acidified KMnO₄",
     "tags": [
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "HBr 亲电加成机理的 4 个采分点？",
     "back": "① H–Br 标偶极：Hδ+–Brδ−\n② 弯箭头从 π bond 中部指向 Hδ+\n③ 中间体 carbocation 带完整 +；H–Br 键断裂箭头指向 Br\n④ Br⁻ 带完整负电荷+孤对，箭头从 lone pair 指向 C+",
     "tags": [
      "高频考点",
      "解释模板"
     ]
    },
    {
     "type": "concept",
     "front": "Br₂ 是非极性分子，机理中 δ+ 从哪来？",
     "back": "① C=C 的 π electrons repel Br₂ 的电子云\n② 形成 induced dipole（诱导偶极）\n③ δ+ 标在靠近 C=C 的 Br 上，δ− 在远端\n④ 之后同 HBr：π→Brδ+，经 carbocation，Br⁻ 进攻",
     "tags": [
      "高频考点",
      "拔高"
     ]
    },
    {
     "type": "concept",
     "front": "Markovnikov 主产物的本质解释？（只写规则名不给分）",
     "back": "① 必背句：the major product forms via the more stable carbocation\n② 稳定性：tertiary > secondary > primary\n③ 原因：更多 alkyl groups → positive inductive effect → 正电荷被分散",
     "tags": [
      "解释模板",
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "为什么 alkyl groups 能稳定 carbocation？",
     "back": "① Alkyl groups push electrons towards the C+（positive inductive / electron-donating effect）\n② 正电荷被分散（charge is spread out → stabilised）\n③ 结论：所连烷基越多越稳定，故 tertiary 最稳定",
     "tags": [
      "解释模板",
      "拔高"
     ]
    },
    {
     "type": "concept",
     "front": "addition polymerisation 的三个特征？",
     "back": "① 单体必须含 C=C（unsaturated monomer）\n② 只生成 polymer 一种产物 → atom economy = 100%\n③ π 键断开连成长链；repeat unit 的原子种类和数目与单体完全一致",
     "tags": [
      "定义背诵",
      "高频考点"
     ]
    },
    {
     "type": "concept",
     "front": "聚合物废弃的三种处理方式及各自问题？",
     "back": "① Landfill：多数聚合物 non-biodegradable，长期占地\n② Incineration：可回收能量，但含氯聚合物（PVC）燃烧释放 HCl，需碱吸收\n③ Recycling：节省原料但需分拣；发展方向 biodegradable polymers",
     "tags": [
      "高频考点"
     ]
    },
    {
     "type": "calc",
     "front": "方法：由 monomer 画 repeat unit（3 步）",
     "back": "① 把 C=C 改成 C–C 单键\n② 其余基团保持原位不动\n③ 括号两端各画一条伸出的键，右下角标 n\n易错提醒：repeat unit 原子数必须与单体一致，多 H 或少 H 全扣",
     "tags": [
      "计算",
      "高频考点"
     ]
    },
    {
     "type": "calc",
     "front": "方法：由 polymer 链反推 monomer",
     "back": "① 沿主链每 2 个碳剪一段（找重复单元）\n② 把这两个碳之间的单键改回 C=C\n③ 去掉两端伸出键，检查原子数一致\n易错提醒：剪 3 个碳必错——monomer 必须含 C=C",
     "tags": [
      "计算"
     ]
    },
    {
     "type": "calc",
     "front": "计算：为什么加聚反应 atom economy = 100%？",
     "back": "① AE = (M of desired product ÷ ΣM of all products) × 100%\n② 加聚只有 polymer 一种产物，无副产物\n③ 分子=分母 → AE = 100%\n提醒：用 % 作单位；有小分子放出的聚合 AE < 100%",
     "tags": [
      "计算",
      "高频考点"
     ]
    },
    {
     "type": "calc",
     "front": "计算：1 mol 烃恰好与 2 mol Br₂ 加成，说明什么？",
     "back": "① 每个 C=C 消耗 1 mol Br₂\n② n(Br₂)/n(烃) = 2 → 分子含 2 个 C=C\n③ 气体先用 RTP 24 dm³ mol⁻¹（24000 cm³）换算成 mol\n④ 再结合分子式确定结构",
     "tags": [
      "计算",
      "拔高"
     ]
    },
    {
     "type": "error",
     "front": "易错：解释 E/Z 异构时描述基团位置的措辞",
     "back": "✗ the groups are beside the C=C\n✓ the (highest priority) groups are on different sides / on the same side of the C=C\nMS 口径：Do not award \"beside\"，必须出现 side(s)",
     "tags": [
      "判死条款",
      "高频考点"
     ]
    },
    {
     "type": "error",
     "front": "易错：机理中间体 carbocation 的电荷标法",
     "back": "✗ 在中间体碳上标 δ+\n✓ 完整正电荷 +（full positive charge on carbon）\nMS 口径：Do not award δ+ on the carbocation；δ+/δ− 只用于 H–Br、Br–Br 的偶极标注",
     "tags": [
      "判死条款",
      "高频考点"
     ]
    },
    {
     "type": "error",
     "front": "易错：机理最后一步 Br⁻ 的画法",
     "back": "✗ Br 不带负电荷 / 不画孤对 / 箭头从原子中部出发\n✓ Br⁻ 带完整负电荷并画出 lone pair，弯箭头从 lone pair 指向 C+\nMS 口径：漏电荷或箭头不从孤对出发均不给该步分",
     "tags": [
      "判死条款"
     ]
    },
    {
     "type": "error",
     "front": "易错：亲电加成第一步弯箭头的起点",
     "back": "✗ 箭头从 C 原子或 H 原子出发\n✓ 从 π bond（双键中部）出发，指向 Hδ+ / Brδ+\nMS 口径：curly arrows must start from a bond or lone pair，起点错该步 0 分",
     "tags": [
      "判死条款",
      "高频考点"
     ]
    },
    {
     "type": "error",
     "front": "易错：溴水检验烯烃的现象描述",
     "back": "✗ turns clear（clear ≠ colourless，不给分）\n✗ 只写 decolourised 不写起点色\n✗ 凭印象编现象\n✓ from orange/brown to colourless（起点+终点都写）\nMS 口径：Do not award \"clear\"",
     "tags": [
      "判死条款",
      "高频考点"
     ]
    },
    {
     "type": "error",
     "front": "易错：解释主产物只写 \"Markovnikov's rule\"",
     "back": "✗ 只答 by Markovnikov's rule（规则名≠解释，0 分）\n✓ via the more stable secondary/tertiary carbocation，+ positive inductive effect of alkyl groups\nMS 口径：naming the rule alone scores 0",
     "tags": [
      "判死条款",
      "高频考点"
     ]
    },
    {
     "type": "error",
     "front": "易错：repeat unit 画法细节",
     "back": "✗ 括号两端不画伸出键 / 保留 C=C / 原子数与单体不符\n✓ 主链全单键，两端各伸一条键出括号，原子与单体一一对应\nMS 口径：missing continuation bonds 扣分",
     "tags": [
      "判死条款",
      "高频考点"
     ]
    },
    {
     "type": "error",
     "front": "易错：3 分解释题只写 2 点、缺结论句",
     "back": "✗ 写完 high electron density 就停笔\n✓ 点数=分数：① π bond 电子密度高 ② π electrons exposed ③ 结论 so attracts electrophiles / more reactive\n口径：结论句单独占 1 分，必须落回题目所问",
     "tags": [
      "判死条款",
      "解释模板"
     ]
    },
    {
     "type": "error",
     "front": "易错：Br₂ 机理中偶极类型和 δ+ 位置",
     "back": "✗ 写 Br₂ 有 permanent dipole / δ+ 标在远离 C=C 的 Br 上\n✓ induced dipole（由 π electrons 诱导产生），δ+ 在靠近 C=C 的 Br\n且 Br–Br 断键箭头指向远端 Br（带走电子对成 Br⁻）",
     "tags": [
      "判死条款",
      "拔高"
     ]
    },
    {
     "type": "error",
     "front": "易错：解释题用中文或中英混写作答",
     "back": "✗ 卷面出现中文解释——考官不读中文，判 0\n✓ 术语和整句都用英文：electrophilic addition、carbocation、induced dipole、on different sides…\n对策：刷卡时直接背 back 里的英文原句",
     "tags": [
      "判死条款"
     ]
    }
   ]
  }
 ]
});
