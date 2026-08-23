/* ============================================================
   学生个性化错题卡组（示例）· Unit 1 模拟考错题重现
   —— 这是"按学生建卡组"的示例：复制本文件改名即可为其他学生建错题组
   ============================================================ */
window.CHEM_DECKS = window.CHEM_DECKS || [];
window.CHEM_DECKS.push({
  id: "demo-u1-err",
  title: "示例学生 · U1 错题重现",
  subtitle: "模拟考错题重现示例（WCH11/01A 卷型）",
  exam: "WCH11",
  student: "示例学生",
  topics: [
    {
      id: "mock1",
      title: "Mock 失分重现",
      cn: "逐题对 MS 口径",
      branches: [
        { label: "本卷失分分布", items: [
          "⚠ Topic 3 化学键与结构 −4（唯一知识缺口）",
          "⚠ 英文表达与规范 −5",
          "化学细节 −2",
          "计算与点叉图全对 ✓"
        ] }
      ],
      terms: [],
      cards: [
        {
          type: "error",
          front: "易错：金属导电的解释里写 free electrons",
          back: "✗ metal has free electrons\n✓ metals contain delocalised electrons which can move / flow freely\nMS 原文：Ignore free electrons —— M1 直接不给。\n口诀：写金属，必写 delocalised。",
          tags: ["判死条款", "高频考点"]
        },
        {
          type: "error",
          front: "易错：Al₂O₃ 为什么熔融才导电？（你当时答成 covalent compound）",
          back: "① Al₂O₃ 是离子化合物\n② 固态：ions are fixed in the lattice，不能移动 → 不导电\n③ 熔融：ions are free to move → 导电\nMS：Do not award reference to delocalised electrons（这题不许提电子！）",
          tags: ["解释模板", "判死条款"]
        },
        {
          type: "error",
          front: "易错：锌 + 稀硫酸的现象，你写了 solution from blue to colorless",
          back: "✗ 蓝色是 CuSO₄ 的记忆残留——本反应全程无色！\n✓ 可写：bubbles / effervescence；zinc dissolves；temperature increases；过量锌沉底\n方法：先在草稿写方程式，再据此描述现象，不凭印象编。",
          tags: ["判死条款"]
        },
        {
          type: "error",
          front: "易错：离子方程式 Zn + 2H⁺ → Zn²⁺ + H₂ 只得一半分，为什么？",
          back: "漏了 state symbols！\n✓ Zn(s) + 2H⁺(aq) → Zn²⁺(aq) + H₂(g)\nMS：M2 = balancing AND state symbols。\n习惯：写完任何方程式，扫一眼 (s)(l)(g)(aq) 四件套。",
          tags: ["判死条款", "高频考点"]
        },
        {
          type: "error",
          front: "易错：解释硅熔点高，3 分只拿 2 分，缺的是哪一点？",
          back: "三点式缺一不可：\n① giant covalent / macromolecular lattice + covalent bonds\n② each silicon atom is bonded to four others（你漏的就是这句）\n③ a large amount of energy is required to break the bonds\n看分配点：3 分题写 3 句。",
          tags: ["解释模板", "高频考点"]
        },
        {
          type: "error",
          front: "易错：同位素化学性质相同的解释，第二个采分点是什么？",
          back: "① same number of electrons / same electronic configuration（你写了）\n② chemical properties depend on the number of electrons in the outer shell（你漏了）\n第二句是把「化学性质」与「外层电子」显式挂钩的结论句，换个说法重复第一句不给分。",
          tags: ["解释模板"]
        },
        {
          type: "error",
          front: "易错：考场上写了中文「不溶」「蒸馏」，后果？",
          back: "内容全对也判 0 分。\n✓ 想不起单词就用解释性英文绕：\n不溶 → does not dissolve in water / immiscible with water\n蒸馏 → (fractional) distillation\n铁律：卷面一个中文字都不能出现。",
          tags: ["判死条款"]
        },
        {
          type: "error",
          front: "易错：机理中间体的碳你标了 δ+，Br 标了 δ−",
          back: "✗ δ+ / δ− 只用于「还没断键」的极性共价键（如 H–Br）\n✓ 碳正离子 = 完整的 +；溴离子 = 完整的 Br⁻ 且必须画出孤对\nMS：Do not award partial charge on C / on Br。",
          tags: ["判死条款", "高频考点"]
        },
        {
          type: "error",
          front: "易错：解释 E/Z 时写 groups are in different orders",
          back: "✗ different orders / beside the C=C 都不给分\n✓ The highest priority groups are on different sides of the C=C (E)\n✓ …on the same side (Z)\n关键词：priority + sides。",
          tags: ["判死条款", "定义背诵"]
        },
        {
          type: "error",
          front: "易错：极化能力最强的组合是哪种离子对？（选择题 Q13 错题，答案 Li⁺ 与 I⁻）",
          back: "✓ 最小的阳离子 + 最大的阴离子\n" +
                "机制：共价 = 两核之间有共享电子密度。阳离子把阴离子电子云拉过来，被拉进两核之间的那部分就是共价成分。\n" +
                "阳离子求小：电场强度 ∝ 电荷 ÷ 半径²，半径进平方 → 越小拉力越集中\n" +
                "阴离子求大：外层电子离核远、屏蔽多、抓得松 → 电子云软、易变形\n" +
                "⚠ 两者对尺寸的要求相反，这正是本题考点——错项全是「阳离子更大、阴离子更小」",
          tags: ["高频考点"]
        },
        {
          type: "error",
          front: "反向问法：什么样的离子最接近理想离子模型？（Q13 的镜像）",
          back: "✓ 最大的阳离子 + 最小的阴离子 + 电荷都是 ±1 → 标杆 CsF\n" +
                "理想模型 = 不可变形的硬球 + 纯静电吸引 + 两核间无电子密度\n" +
                "电负性路线同样指向 CsF：Cs 0.79 vs F 3.98，差 3.19 为稳定二元化合物之最\n" +
                "⚠ 还有一条尺寸解释不了：Ag⁺(115pm) 与 Na⁺(102pm) 差不多大，但 Ag⁺ 是 4d¹⁰、屏蔽差，"
                + "AgCl 共价性明显更强 → 阳离子最好是稀有气体构型\n" +
                "MS 常写 Allow reverse argument：正问反问用同一套逻辑，但两个方向都要点到",
          tags: ["高频考点", "拔高"]
        },
        {
          type: "error",
          front: "U2 mock 选择错题：平衡建立过程的浓度-时间图怎么选？",
          back: "三步判图：\n① 起点：按题干初始量（大量 P 高起点、少量 Q 低起点）\n② 走向：净反应方向（P 降 Q 升）\n③ 终点：两线各自变平——平衡=浓度恒定，但不为零、不必相等\n✗ 两条水平直线 = 从头就平衡，没有 reaches equilibrium 的过程\n✗ 某物质降到 0 或后期加速上升都违背可逆/守恒",
          tags: ["高频考点"]
        },
        {
          type: "error",
          front: "U2 mock 选择错题：Hess 两条数据求 ΔfH(CH₄)，−858 与 −933 怎么组合？",
          back: "找公共物 CF₄ 当中转：\n保留 C+2F₂→CF₄ (−933)；反写 CH₄+2F₂→CF₄ 为 CF₄+2H₂→CH₄+2F₂ (+858)\n相加消 CF₄/2F₂：ΔfH = −933 + 858 = −75 ✓\n✗ −1791 = 两数直接加（忘了反写一条）\n✗ +75 = 减法方向反——先写「目标=谁减谁」再代数\n快检：ΔfH(CH₄) 常识值 ≈ −75，±1791 数量级直接排除",
          tags: ["计算", "高频考点"]
        },
        {
          type: "error",
          front: "复盘：这次 mock 你的三大规范动作是什么？",
          back: "① 全英文作答，禁中文\n② 方程式带 state symbols\n③ 解释题按分值配点数 + 结论句\n（本卷 11 分失分里 7 分是规范问题，不是知识问题）",
          tags: ["解释模板"]
        }
      ]
    }
  ]
});

