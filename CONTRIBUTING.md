# 貢獻指南

感謝您對 W3C Agent Ontology Use Cases 專案的興趣！我們歡迎社群成員貢獻新的 Use Case，以豐富本體論的應用範例。

本指南將說明如何貢獻一個新的 Use Case，包括流程、格式要求和提交方式。

## 貢獻流程

1.  **Fork 專案**：首先，請 Fork 本專案到您的 GitHub 帳戶。
2.  **Clone 您的 Fork**：將您 Fork 的專案 Clone 到本地開發環境。
    ```bash
    git clone https://github.com/您的用戶名/agent-ontology-use-cases.git
    cd agent-ontology-use-cases
    ```
3.  **建立新分支**：為您的貢獻建立一個新的分支。建議使用有意義的名稱，例如 `feat/new-use-case-name`。
    ```bash
    git checkout -b feat/您的新用例名稱
    ```
4.  **建立新的 Use Case 目錄**：在 `use-cases/` 目錄下，根據您的 Use Case 主題，選擇或建立一個新的子目錄。例如，如果您的 Use Case 屬於「AI 與機器學習」類別，您可以在 `use-cases/ai-and-ml/` 下建立一個新的目錄，名稱應簡潔且具描述性（例如 `my-new-ai-use-case`）。
    ```bash
    mkdir -p use-cases/您的類別/您的新用例名稱
    ```
5.  **開發您的 Use Case**：
    *   在新的 Use Case 目錄中，建立所有必要的檔案（詳見下方的「檔案要求」）。
    *   確保您的 Use Case 遵循本體論的規範，並提供清晰的範例。
6.  **執行本地檢查**：在提交之前，請務必執行以下指令，確保程式碼品質和格式一致。
    ```bash
    pnpm install
    pnpm lint
    pnpm format
    pnpm typecheck # 如果您的貢獻包含 TypeScript 程式碼
    ```
7.  **提交變更**：將您的變更提交到您的分支。請使用清晰且具描述性的 commit message。
    ```bash
    git add .
    git commit -m "feat: Add [您的新用例名稱] use case"
    ```
8.  **Push 到您的 Fork**：將您的分支推送到您 Fork 的遠端儲存庫。
    ```bash
    git push origin feat/您的新用例名稱
    ```
9.  **建立 Pull Request (PR)**：在 GitHub 上，從您的分支向本專案的 `main` 分支建立一個 Pull Request。請提供詳細的描述，說明您的 Use Case 解決了什麼問題，以及它如何展示 Agent Ontology 的概念。

## 檔案要求

每個新的 Use Case 目錄應包含以下檔案：

*   **`README.md`**：
    *   **標題**：Use Case 的名稱。
    *   **簡介**：簡要說明 Use Case 的目的和背景。
    *   **使用者故事 (User Story)**：以「As a [角色], I want to [目標], so that [價值]」的格式描述。
    *   **關鍵概念 (Key Concepts Illustrated)**：列出此 Use Case 所展示的 Agent Ontology 核心概念。
    *   **工作流程分解 (Workflow Breakdown)**：詳細說明 Use Case 的步驟和代理人之間的互動。
    *   **本體論映射 (Ontology Mapping)**：說明 Use Case 中的實體如何映射到 Agent Ontology 的概念。
*   **`.jsonld` 檔案**：至少一個 JSON-LD 格式的檔案，代表 Agent Ontology 的實例。
*   **`.ttl` 檔案**：至少一個 Turtle (Terse RDF Triple Language) 格式的檔案，代表 Agent Ontology 的實例。
*   **`.shacl.jsonld` 檔案** (可選但強烈建議)：JSON-LD 格式的 SHACL 檔案，定義此 Use Case 的驗證規則。
*   **`.shacl.ttl` 檔案** (可選但強烈建議)：Turtle 格式的 SHACL 檔案，定義此 Use Case 的驗證規則。

## 格式要求

*   **檔案命名**：Use Case 目錄名稱和檔案名稱應使用小寫字母和連字號 (`-`)。
*   **程式碼風格**：請遵循專案的 ESLint 和 Prettier 設定。在提交前執行 `pnpm lint` 和 `pnpm format`。
*   **文件清晰度**：`README.md` 應清晰、簡潔、易於理解，並提供足夠的細節來解釋 Use Case。
*   **本體論一致性**：確保您的 `.jsonld` 和 `.ttl` 檔案嚴格遵循 Agent Ontology 的定義。如果提供 SHACL 檔案，請確保它們能正確驗證您的實例。

## 審查流程

提交 PR 後，專案維護者將會審查您的貢獻。他們可能會提出修改建議或要求澄清。請耐心配合，直到您的貢獻被接受並合併到 `main` 分支。

感謝您的貢獻！
