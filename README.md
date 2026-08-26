# LP — Defesa Trabalhista Empresarial (BGL Advogados)

Landing page independente para tráfego pago (Google Ads).
**Não altera e não depende do site institucional** — usa CSS e JS próprios.

```
defesa-trabalhista/
├── index.html   → conteúdo e estrutura
├── lp.css       → estilo autônomo (identidade BGL: navy / creme / prata)
├── lp.js        → CONFIG + tracking + formulário + galeria + avaliações
└── assets/      → imagens da página (sobem junto, na mesma pasta)
    ├── logo-bgl.png · logo-mark.png
    ├── favicon-32.png · apple-touch-icon.png
    ├── og-image.jpg          (1200 × 630, compartilhamento em redes)
    ├── office-hero.jpg · office-sobre.jpg · office-detail.jpg
    ├── thallys-lopo.jpg · cecilia-galvao.jpg   (retratos originais)
    └── cecilia-galvao-card.jpg   (recorte do card, ver seção 4)
```

**Para subir:** envie a pasta inteira, com `assets/` dentro. Os caminhos das
imagens são relativos (`assets/...`), então a página funciona em qualquer
subpasta sem ajuste. Só as URLs absolutas de `og:image` e do schema apontam
para `.../defesa-trabalhista/assets/` — se a pasta final tiver outro nome,
corrija essas cinco linhas no `<head>` do `index.html`.

URL prevista: `https://www.bgladvogados.com.br/defesa-trabalhista/`

---

## 1. O que precisa ser preenchido antes de subir os anúncios

Tudo fica no objeto **`CONFIG`**, nas primeiras ~100 linhas de `lp.js`.

| Chave | Situação | Observação |
|---|---|---|
| `WHATSAPP_NUMBER` | ✅ preenchido | `5562992509988` — destino do formulário e de todos os CTAs |
| `GA4_MEASUREMENT_ID` | ✅ preenchido | `G-92B1N6DHGM` — mesma propriedade do site. Use `''` para não carregar |
| `GOOGLE_REVIEWS_URL` | ✅ preenchido | perfil real da BGL no Google |
| `SITE_URL` / `INSTAGRAM_URL` / `GOOGLE_MAPS_URL` | ✅ preenchidos | links reais |
| `FORM_ENDPOINT` | ⬜ opcional | URL do CRM/webhook. Não bloqueia: o contato chega pelo WhatsApp (seção 2) |
| `PRIVACY_URL` | ⬜ **pendente** | está como `PRIVACY_POLICY_URL` |
| `REVIEWS_SUMMARY.count` | ✅ decidido | mantido vazio de propósito: a página informa a nota, não a quantidade |
| `REVIEWS[0..5]` | ✅ preenchido | 6 avaliações reais do perfil do Google |
| fotografias | ✅ publicadas | hero, galeria, sócios, logos e `og-image.jpg` — todas em `assets/` (seção 4) |
| fotos `bgl-01..04` | ⬜ opcional | fachada, recepção, sala dos advogados, equipe — blocos comentados no HTML (seção 4) |
| `GOOGLE_ADS_ID` / `GOOGLE_ADS_CONVERSION` | ⬜ opcional | conta e rótulo de conversão do Ads |

Nada foi inventado: enquanto um item estiver pendente, a página **omite** o
elemento em vez de exibir conteúdo fictício.

---

## 2. Formulário → WhatsApp

O botão de envio **abre o WhatsApp da BGL com o formulário já respondido**.
Não existe mais a etapa de "aguardar contato": validou, o WhatsApp abre com a
mensagem pronta e o usuário só toca em enviar na conversa.

Mensagem gerada (campo vazio não entra):

```
Olá, BGL Advogados. Sou <nome>, da empresa <empresa>.
Preenchi o formulário da página de defesa trabalhista empresarial.

WhatsApp: (62) 99123-4567
Documento recebido: <resposta>
Situação atual: <resposta>
Assunto principal: <resposta>
Data da audiência: 30/09/2026

O que aconteceu:
<relato>
```

O número de destino é `CONFIG.WHATSAPP_NUMBER` (lp.js).

### Por que o WhatsApp abre antes do envio ao CRM

Navegadores só permitem abrir uma janela enquanto o clique do usuário ainda
está "quente". Qualquer espera antes disso — o POST ao CRM, uma Promise, um
`await` — faz o iOS Safari e o Chrome **bloquearem o popup**. Por isso
`lp.js` abre o WhatsApp de forma síncrona, na primeira linha do submit, e só
depois dispara tracking e CRM. **Não inverta essa ordem.**

Se ainda assim a aba for bloqueada, a página navega para o WhatsApp na
própria aba — e a tela de confirmação traz um botão para reabrir o link.

### Validação

Nada abre sem: empresa, nome, WhatsApp com DDD (10 a 13 dígitos), as três
perguntas de qualificação e o **aceite da Política de Privacidade** (LGPD).
Testado: formulário vazio, sem consentimento e com telefone curto não abrem
o WhatsApp.

### Cópia para o CRM (opcional)

`FORM_ENDPOINT` deixou de ser bloqueante — o contato chega pelo WhatsApp com
ou sem ele. Quando preenchido, `lp.js` faz um `POST` JSON em paralelo, com
`keepalive: true` (sobrevive à saída da página). Se falhar, falha em
silêncio: o WhatsApp já foi aberto.

```json
{
  "empresa": "...", "nome": "...", "whatsapp": "(62) 9....",
  "documento": "...", "situacao": "...", "assunto": "...",
  "audiencia": "2026-09-10", "relato": "...", "consentimento": true,
  "utm_source": "google", "utm_medium": "cpc", "utm_campaign": "...",
  "utm_content": "...", "utm_term": "...", "gclid": "...",
  "origem": "LP Defesa Trabalhista Empresarial",
  "canal": "whatsapp",
  "mensagem_whatsapp": "Olá, BGL Advogados. Sou ...",
  "enviado_em": "2026-08-22T12:00:00.000Z",
  "pagina": "https://..."
}
```

Sem `FORM_ENDPOINT`, os dados aparecem no console do navegador para
conferência durante os testes.

---

## 3. Avaliações do Google

Os cards são renderizados por `lp.js` a partir de `CONFIG.REVIEWS`.
**Um card só aparece quando `text` E `name` estiverem preenchidos.**

Estão publicadas **6 avaliações reais**, copiadas na íntegra do perfil público
da BGL — sem edição, resumo ou correção de texto. Todas 5 estrelas.
A nota exibida é 5,0; a quantidade de avaliações fica oculta por opção
(`REVIEWS_SUMMARY.count` vazio).

### Critério de seleção (importante)

Duas avaliações reais do perfil foram **deliberadamente deixadas de fora**,
porque esta página é peça publicitária de escritório de advocacia:

- uma relata resultado de processo ("ganhamos a causa") — divulgação de êxito;
- outra usa superlativo comparativo ("os melhores") e emojis.

Ambas seguem normalmente no perfil do Google; apenas não entram no anúncio.
Ao trocar ou acrescentar avaliações, aplicar o mesmo filtro: nada de resultado,
comparação, superlativo ou valores.

Também não foi incluída marcação `Review`/`aggregateRating` no schema: o Google
não considera elegíveis avaliações que o próprio anunciante publica sobre si.

## 4. Fotografias

Tudo o que a página exibe são fotografias **reais**, já publicadas pela BGL.
Nenhuma imagem de banco de imagens foi usada.

| Onde aparece | Arquivo | Dimensão |
|---|---|---|
| Topo (hero) | `assets/thallys-lopo.jpg` — retrato do sócio | 900 × 1125 |
| Galeria — principal | `assets/office-hero.jpg` | 1200 × 1800 |
| Galeria — ambiente de trabalho | `assets/office-sobre.jpg` | 1000 × 1250 |
| Galeria — detalhe do ambiente | `assets/office-detail.jpg` | 900 × 1125 |
| Sócios (cards) | `assets/thallys-lopo.jpg` · `assets/cecilia-galvao-card.jpg` | 900 × 1125 |
| Topo / rodapé | `assets/logo-mark.png` · `assets/logo-bgl.png` | — |
| Compartilhamento | `assets/og-image.jpg` | 1200 × 630 |

A galeria fecha em mosaico com **três fotografias + o bloco de endereço**:
no desktop, a principal ocupa 2 × 2 e o endereço ocupa 2 colunas na base.

`og-image.jpg` foi recortada de `office-hero.jpg` (faixa central, sala de
reunião com a marca na tela) no formato 1200 × 630 exigido pelo Open Graph.


### Hero e cards dos sócios

O topo da página traz o **retrato do sócio**, não a foto do ambiente: em LP de
conversão, o rosto de quem vai atender responde melhor do que o escritório
vazio. A legenda leva nome e OAB, como pede a publicidade advocatícia.
Para usar a outra sócia, troque o `src` da `figure.hero__media` no
`index.html` por `assets/cecilia-galvao.jpg` e ajuste alt, legenda e o
`<link rel="preload">` do `<head>`.

Os cards do bloco "Quem conduz o atendimento" mostram o **retrato inteiro**
(4:5, sem recorte no CSS) e trazem nome e OAB numa **tarja abaixo da foto**.

A tarja não é sobreposta de propósito: nas duas fotografias o colarinho e a
gravata ficam nos últimos 10% da imagem, de modo que qualquer faixa de nome
sobre a foto os cobria por completo.

**Alinhamento dos dois retratos.** Nos arquivos originais o rosto de um dos
sócios é cerca de 1,6× maior que o do outro (cabeça de 545 px contra 335 px
em imagens de mesma altura), o que deixava uma cabeça visivelmente mais
baixa que a outra — e nenhum ajuste de CSS corrige isso. Por isso existe
`cecilia-galvao-card.jpg`: um recorte de `cecilia-galvao.jpg`
(região 134, 36, 663 × 829, reescalada para 900 × 1125) que iguala a altura
da cabeça e o topo do enquadramento ao de `thallys-lopo.jpg`.

O original `cecilia-galvao.jpg` continua na pasta: é a fonte do recorte e a
alternativa para o hero. **Ao trocar qualquer retrato, refaça o par** — o
alinhamento está na imagem, não no CSS.

**Não usadas de propósito:** as `cover-*.jpg` são imagens de banco de imagens
(pessoas sorrindo em escritório) e foram descartadas.

### Fotografias que ainda podem entrar

Quatro fotos previstas **não existem** e por isso estão **comentadas** no
`index.html` (bloco logo abaixo da galeria) — assim a página sobe sem nenhuma
requisição 404 e sem erro no console.

```
assets/escritorio/bgl-01.jpg   fachada / entrada
assets/escritorio/bgl-02.jpg   recepção
assets/escritorio/bgl-03.jpg   sala dos advogados
assets/escritorio/bgl-04.jpg   equipe (foto de grupo)
```

Para ativar: salve as fotos nesses caminhos e retire o comentário HTML que
envolve os quatro `<figure data-photo-slot=...>`. O `lp.js` exibe as que
existirem e remove as que faltarem — nenhuma imagem quebrada.

Proporção sugerida: **3:4 (retrato)**, ex.: 1100 × 1466 px, até ~250 KB.
Para manter o mosaico do desktop fechado, acrescente fotografias de 4 em 4.

## 5. Tracking

GA4 é carregado por `lp.js` (não há tag no HTML). Eventos disparados:

| Evento | Quando |
|---|---|
| `page_view` | carregamento (via `gtag config`, já com as UTMs) |
| `form_start` | primeira digitação no formulário |
| `form_submit` | envio validado (leva `destino: whatsapp`) |
| `whatsapp_click` | qualquer botão/link de WhatsApp, inclusive o envio do formulário |
| `cta_click` | demais CTAs |
| `google_reviews_click` | botão/link para o perfil no Google |

Todos levam `location` (onde o clique ocorreu) e as UTMs.
As UTMs (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`)
e `gclid` são lidas da URL, guardadas em `sessionStorage` e enviadas junto com
o formulário. Os eventos também vão para o `dataLayer`, caso o GTM seja usado.

Para registrar conversão no Google Ads, preencha `GOOGLE_ADS_ID` e
`GOOGLE_ADS_CONVERSION`: a conversão dispara junto com `form_submit`.

---

## 6. Publicidade advocatícia

O texto foi escrito sem promessa de resultado, garantia, comparação,
superlativo, preço, desconto, "consulta grátis", urgência artificial,
contador regressivo ou caso de sucesso. O rodapé traz o aviso de caráter
informativo. Qualquer alteração de copy deve preservar isso.

---

## 7. Indexação

A página está com `index, follow` e canônica própria. Se preferir mantê-la
fora da busca orgânica (para não concorrer com
`/trabalhista-empresarial/`, que é a página institucional do tema), troque
a meta robots por:

```html
<meta name="robots" content="noindex, follow">
```

e não a inclua no `sitemap.xml`.
