import React from "react";

function App() {
  const services = [
    {
      title: "指引占卜",
      price: "$222",
      desc: "快速釐清目前狀態、感情關係與人生方向。",
    },
    {
      title: "深度占卜",
      price: "$888",
      desc: "深入解析內在狀態、關係課題與未來方向。",
    },
    {
      title: "魔法蠟燭",
      price: "$300 起",
      desc: "陪伴你整理情緒與能量，慢慢找回自己的狀態。",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #f7efff, #efe3ff)",
        color: "#3f2d4f",
        fontFamily: "sans-serif",
        padding: "60px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* 標題 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
            marginBottom: "30px",
          }}
        >
          <h1
            style={{
              fontSize: "60px",
              margin: 0,
              fontWeight: "bold",
            }}
          >
            confident_tarot
          </h1>

          <div
            style={{
              width: "2px",
              height: "60px",
              background: "#6d4a91",
            }}
          />

          <h2
            style={{
              fontSize: "52px",
              margin: 0,
            }}
          >
            自信塔羅
          </h2>
        </div>

        {/* 介紹 */}
        <p
          style={{
            fontSize: "28px",
            lineHeight: 1.8,
            marginBottom: "50px",
          }}
        >
          在混亂裡，陪你看見真正的方向。
        </p>

        {/* 服務項目 */}
        <h2
          style={{
            fontSize: "42px",
            marginBottom: "28px",
          }}
        >
          服務項目
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            marginBottom: "50px",
          }}
        >
          {services.map((service) => (
            <div
              key={service.title}
              style={{
                background: "rgba(255,255,255,0.85)",
                padding: "32px",
                borderRadius: "28px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
              }}
            >
              <h3
                style={{
                  fontSize: "32px",
                  marginBottom: "12px",
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  fontSize: "28px",
                  color: "#7f5aa6",
                  fontWeight: "bold",
                }}
              >
                {service.price}
              </p>

              <p
                style={{
                  lineHeight: 1.8,
                  fontSize: "20px",
                }}
              >
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 聯絡區 */}
        <div
          style={{
            background: "#4b3461",
            color: "white",
            padding: "42px",
            borderRadius: "32px",
          }}
        >
          <h2
            style={{
              fontSize: "40px",
              marginBottom: "20px",
            }}
          >
            聯絡與追蹤
          </h2>

          <p
            style={{
              fontSize: "22px",
              marginBottom: "32px",
              opacity: 0.9,
            }}
          >
            點擊下方按鈕即可加入 LINE 或追蹤 Instagram
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            {/* LINE */}
            <a
              href="https://lin.ee/dDmH13O"
              target="_blank"
              rel="noreferrer"
              style={{
                background: "#06C755",
                color: "white",
                padding: "18px 28px",
                borderRadius: "999px",
                textDecoration: "none",
                fontSize: "22px",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: "14px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
              }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg"
                alt="LINE"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "white",
                  borderRadius: "10px",
                  padding: "4px",
                }}
              />

              <span>LINE 官方帳號</span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/confident_tarot?igsh=amRoaDNjazNrb2Zr&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              style={{
                background:
                  "linear-gradient(45deg, #f58529, #dd2a7b, #8134af)",
                color: "white",
                padding: "18px 28px",
                borderRadius: "999px",
                textDecoration: "none",
                fontSize: "22px",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: "14px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
              }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                }}
              />

              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;