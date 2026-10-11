# OS-report — Ordem de Serviço

Aplicativo **PWA** para preenchimento de Ordens de Serviço (OS) e relatórios com fotos.

## 🌐 Acesso

O app está publicado via **GitHub Pages**:

👉 **https://LDElectric.github.io/OS-report/**

É um PWA (Progressive Web App), então pode ser **instalado** no celular ou computador e usado **offline** após o primeiro acesso.

## ✨ Funcionalidades

- Formulário de **Ordem de Serviço (OS)** — relatório do serviço executado
- Formulário de **Solicitação de Serviço (SS)** — registro do serviço a ser feito (gera insumo para a OS)
- Seletor de modo no topo (**Relatar OS / Registrar SS**): cada modo guarda seus próprios campos e fotos
- Suporte a fotos e relatórios
- Compartilhamento nativo do link do app (iOS, Android e cópia direta com feedback)
- Geração de **PDF** com identidade visual única para OS e SS
- Funciona **offline** (Service Worker com cache)
- Instalável como aplicativo nativo (Android / iOS / Desktop)

## 🚀 Como usar localmente

Você pode abrir o `index.html` diretamente no navegador ou servir com um servidor local simples:

```bash
# Com Python
python -m http.server 8080
```

Depois acesse `http://localhost:8080`.

## 🛠️ Estrutura

| Arquivo        | Descrição                                     |
|----------------|-----------------------------------------------|
| `index.html`   | Página principal do app                       |
| `manifest.json`| Manifesto do PWA (nome, ícone, tema)          |
| `sw.js`        | Service Worker (cache offline)                |
| `icon.png`     | Ícone do aplicativo                           |

---

Desenvolvido para uso interno da **LD Electric**.
