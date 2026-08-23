/* ============================================================
   新卡组模板 —— 复制本文件改名（如 deck_u2.js），填入内容，
   然后在 index.html 的「卡组数据」注释区加一行：
   <script src="decks/deck_u2.js"></script>
   ============================================================ */
window.CHEM_DECKS = window.CHEM_DECKS || [];
window.CHEM_DECKS.push({
  id: "u2",                                   // 唯一 id，别与现有卡组重复
  title: "Unit 2 · Energetics, Group Chemistry…",
  subtitle: "WCH12 · Topic 6–10",
  exam: "WCH12",
  topics: [
    {
      id: "t6",
      title: "Energetics",                    // 英文名
      cn: "能量学",                            // 中文名（界面 chip 用）
      branches: [                             // 知识地图分支
        { label: "焓变 Enthalpy change", items: [
          "要点短语",
          "⚠ 开头加⚠ = 高频丢分点（橙色显示）"
        ] }
      ],
      terms: [                                // 英文术语表
        { en: "enthalpy change", cn: "焓变", def: "Heat energy change at constant pressure." }
      ],
      cards: [                                // 闪卡
        {
          type: "concept",                    // concept 概念 | calc 计算 | error 易错
          front: "问题（中文为主，关键术语英文）",
          back: "① 采分点一\n② 采分点二\n③ 结论句",
          tags: ["定义背诵"]                   // 定义背诵/解释模板/计算/判死条款/高频考点/拔高
        },
        {
          type: "error",
          front: "易错：……",
          back: "✗ 错误写法\n✓ 正确写法\nMS 口径：Do not award …",
          tags: ["判死条款"]
        }
      ]
    }
  ]
});
