# 🕵️ OSINT Dashboard

A lightweight and fast **Open Source Intelligence (OSINT)** dashboard built for threat hunters, incident responders, SOC analysts, and digital investigators.  
Supports **searching IPs, domains, URLs, and hashes** across dozens of open-source tools — all from one page.

---

## ✨ Features

- 🔎 Search bar to quickly query multiple OSINT tools at once
- 🎯 Categories include: IP info, Threat Intel, Hash Lookups, Email, Vulnerability Databases, and more
- 🌙 Dark mode toggle (auto default)
- ⚙️ Tool filtering by name or description
- ⚡ Simple, fast, and fully client-side — **no backend or tracking**
- 🧠 Easily extensible: just update the `categories` JSON list in the HTML

---

## 🚀 How to Use

1. **Open `index.html`** in your browser  
2. Type an IP, domain, hash, email, or keyword  
3. Click `ADD` to auto-populate links across all relevant tools  
4. Use the filter bar to find tools by name or purpose  
5. Click a card to open the tool in a new tab

---

## 🧩 Example Use Cases

- Investigate suspicious IPs/domains using 20+ intel feeds
- Enrich indicators with WHOIS, GeoIP, reverse DNS, and malware data
- Perform passive recon with open DNS and cert transparency tools
- Find leaked emails and passwords in known breaches
- Explore reputation scores and threat rankings with 1 click

---

### 🧼 Reset Layout (For New Tools or Categories)

If you add a new tool or category and it doesn't show up:

1. Open DevTools → Console (`F12`)
2. Paste this:
   ```js
   localStorage.removeItem("osintToolOrder");
3. Refresh the page (`Ctrl+Shift+R`)

✅ Done!
---

## 👨‍💻 Credits

🛡️ Made for defenders, by [Ekrem O.](https://www.linkedin.com/in/ekremozdemir19/)

---

## 📜 License

MIT License
