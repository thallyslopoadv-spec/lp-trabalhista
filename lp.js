/* ==========================================================================
   BGL Advogados — Landing Page: Defesa Trabalhista Empresarial
   Script autônomo (sem dependências externas, sem backend).
   --------------------------------------------------------------------------
   TUDO O QUE PRECISA SER EDITADO ESTÁ NO OBJETO "CONFIG" ABAIXO.
   ========================================================================== */
(function () {
  'use strict';

  /* ======================================================================
     ┌────────────────────────────────────────────────────────────────────┐
     │  CONFIG — ÚNICO PONTO DE EDIÇÃO DE DADOS, LINKS E INTEGRAÇÕES      │
     └────────────────────────────────────────────────────────────────────┘
     ====================================================================== */
  var CONFIG = {

    /* --- WhatsApp -------------------------------------------------------
       Formato internacional, somente dígitos: 55 + DDD + número.
       Valor atual: número institucional publicado pela BGL — (62) 99250-9988.
       ------------------------------------------------------------------ */
    WHATSAPP_NUMBER: '5562992509988',

    /* --- Google Analytics 4 ---------------------------------------------
       ID de medição da propriedade da BGL (G-XXXXXXXXXX).
       Deixe string vazia ('') para NÃO carregar o GA4 nesta página.
       ------------------------------------------------------------------ */
    GA4_MEASUREMENT_ID: 'G-92B1N6DHGM',

    /* --- Google Ads (opcional) ------------------------------------------
       Preencha para carregar a tag do Google Ads e registrar a conversão.
       GOOGLE_ADS_ID:         'AW-XXXXXXXXXX'
       GOOGLE_ADS_CONVERSION: 'AW-XXXXXXXXXX/AbC-D_efG-h12_34-567'  <-- rótulo
       Enquanto vazios, nada é carregado nem disparado.
       ------------------------------------------------------------------ */
    GOOGLE_ADS_ID: '',
    GOOGLE_ADS_CONVERSION: '',

    /* --- Endpoint do formulário -----------------------------------------
       URL que receberá o POST (JSON) com os dados do formulário.
       Ex.: webhook do CRM, Zapier/Make, Apps Script, API própria.
       Enquanto estiver vazio, o formulário NÃO envia nada para fora:
       exibe a mensagem de confirmação e oferece o contato por WhatsApp
       com os dados já preenchidos.
       ------------------------------------------------------------------ */
    FORM_ENDPOINT: '',

    /* --- Links externos (usados no rodapé e nos CTAs) ------------------- */
    SITE_URL:          'https://www.bgladvogados.com.br/',
    INSTAGRAM_URL:     'https://www.instagram.com/bgladvogados_/',
    GOOGLE_MAPS_URL:   'https://www.google.com/maps/search/?api=1&query=-16.695603,-49.291391',

    /* Perfil público da BGL no Google (avaliações). */
    GOOGLE_REVIEWS_URL: 'https://share.google/m26Zf6uMnE35SLIaC',

    /* Política de Privacidade.
       PLACEHOLDER: substituir pela URL real quando a página existir.
       Enquanto o valor abaixo estiver como está, o link é apresentado
       apontando para o site institucional.                              */
    PRIVACY_URL: 'PRIVACY_POLICY_URL',

    /* --- Contato institucional ------------------------------------------ */
    PHONE_DISPLAY: '(62) 99250-9988',
    EMAIL:         'contato@bgladvogados.com.br',
    ADDRESS:       'Edifício Terra Office — Av. C4, Qd. 49, Lt. 1 a 14, Sala 1301-A — Jardim América, Goiânia/GO, 74265-040',

    /* ==================================================================
       AVALIAÇÕES DO GOOGLE  —  SOMENTE DADOS REAIS
       ------------------------------------------------------------------
       ATENÇÃO: nada aqui pode ser inventado.
       • Um card só é exibido quando "text" E "name" estiverem preenchidos.
       • Enquanto estiverem vazios, a grade de cards não é renderizada e a
         página exibe apenas o resumo + botão para o perfil real do Google.
       • "stars" deve refletir a nota real daquela avaliação (1 a 5).
       ================================================================== */
    REVIEWS_SUMMARY: {
      /* REVIEWS_RATING — nota real do perfil. '' oculta a linha. */
      rating: '5,0',
      /* REVIEWS_COUNT — número real de avaliações (ex.: '27 avaliações').
         Mantido vazio por opção: a página informa a nota, não a quantidade. */
      count: ''
    },

    /* Avaliações reais, copiadas na íntegra do perfil público da BGL no
       Google. Textos e nomes não foram editados, resumidos ou corrigidos.
       Todas com 5 estrelas.

       NOTA DE PUBLICIDADE ADVOCATÍCIA: avaliações que relatam resultado de
       processo ("ganhamos a causa") ou usam superlativo comparativo ("os
       melhores") existem no perfil, mas foram deliberadamente deixadas de
       fora desta página, que é peça publicitária. Não reinserir sem revisão. */
    REVIEWS: [
      /* REVIEW_01 */ {
        stars: 5,
        name: 'Leandra Borges de Camargo',
        text: 'Equipe excelente! Atendimento extremamente profissional, atencioso e transparente desde o primeiro contato. A equipe demonstra muito conhecimento, comprometimento e dedicação em buscar as melhores soluções para seus clientes. Recomendo de olhos fechados para quem procura um serviço jurídico de qualidade e confiança.'
      },
      /* REVIEW_02 */ {
        stars: 5,
        name: 'Patricia Oliveira',
        text: 'Atendimento impecável, com muita transparência e respeito. Dra. Cecília e Dr. Thallys, muito competentes.'
      },
      /* REVIEW_03 */ {
        stars: 5,
        name: 'Processos Casa Brasil',
        text: 'Excelente atendimento e equipe altamente qualificada. O BGL Advogados - Brito Galvão & Lopo Goiânia presta um serviço com profissionalismo, ética e muita dedicação aos seus clientes. As orientações são claras, o acompanhamento é atencioso e o comprometimento com a busca das melhores soluções faz toda a diferença. Recomendo o escritório para quem procura um atendimento jurídico sério, competente e de confiança.'
      },
      /* REVIEW_04 */ {
        stars: 5,
        name: 'Luís Eduardo',
        text: 'Profissionais de excelência. Atendimento humano e personalizado de alta eficiência técnica.'
      },
      /* REVIEW_05 */ {
        stars: 5,
        name: 'Mônica Vilela',
        text: 'Gostaria de registrar minha satisfação com o atendimento. Profissionais muito atenciosos, claros nas orientações e sempre disponíveis para ajudar. O serviço foi conduzido com responsabilidade e eficiência. Recomendo.'
      },
      /* REVIEW_06 */ {
        stars: 5,
        name: 'Eudes Lemes',
        text: 'Excelente profissional, muito competente e atenciosa. Esclareceu todas as dúvidas e manteve uma comunicação eficiente. Foi dedicada a cada etapa do processo, recomendo seus serviços sem dúvida!'
      }
    ]
  };

  /* Exposto para inspeção/ajuste rápido no console durante a implantação. */
  window.BGL_LP_CONFIG = CONFIG;

  var doc = document;
  var $  = function (sel, ctx) { return (ctx || doc).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || doc).querySelectorAll(sel)); };

  /* ======================================================================
     1. UTM / parâmetros de campanha
     ====================================================================== */
  var UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
  var EXTRA_KEYS = ['gclid', 'gbraid', 'wbraid'];

  function readTracking() {
    var stored = {};
    try {
      stored = JSON.parse(sessionStorage.getItem('bgl_lp_tracking') || '{}') || {};
    } catch (e) { stored = {}; }

    var params = new URLSearchParams(window.location.search);
    var fresh = {};
    UTM_KEYS.concat(EXTRA_KEYS).forEach(function (k) {
      var v = params.get(k);
      if (v) { fresh[k] = v; }
    });

    /* Parâmetros da URL atual têm precedência sobre os já armazenados. */
    var merged = Object.assign({}, stored, fresh);
    if (!merged.landing_page) { merged.landing_page = window.location.pathname; }
    if (!merged.first_referrer) { merged.first_referrer = doc.referrer || ''; }

    try { sessionStorage.setItem('bgl_lp_tracking', JSON.stringify(merged)); } catch (e) {}
    return merged;
  }

  var TRACKING = readTracking();

  /* Espelha as UTMs nos campos ocultos do formulário. */
  function fillTrackingInputs() {
    UTM_KEYS.forEach(function (k) {
      var input = $('#f_' + k);
      if (input) { input.value = TRACKING[k] || ''; }
    });
    var gclid = $('#f_gclid');
    if (gclid) { gclid.value = TRACKING.gclid || TRACKING.gbraid || TRACKING.wbraid || ''; }
  }

  /* ======================================================================
     2. Google Analytics 4 / Google Ads
     ====================================================================== */
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;

  function loadTag(id) {
    var s = doc.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id);
    doc.head.appendChild(s);
  }

  function initAnalytics() {
    var ids = [CONFIG.GA4_MEASUREMENT_ID, CONFIG.GOOGLE_ADS_ID].filter(Boolean);
    if (!ids.length) { return; }

    loadTag(ids[0]);
    gtag('js', new Date());

    if (CONFIG.GA4_MEASUREMENT_ID) {
      /* page_view é enviado automaticamente por este config, já com as UTMs
         presentes na URL. Os parâmetros abaixo acompanham todos os eventos. */
      gtag('config', CONFIG.GA4_MEASUREMENT_ID, {
        page_title: doc.title,
        page_location: window.location.href,
        campaign_source:  TRACKING.utm_source  || undefined,
        campaign_medium:  TRACKING.utm_medium  || undefined,
        campaign_name:    TRACKING.utm_campaign|| undefined,
        campaign_content: TRACKING.utm_content || undefined,
        campaign_term:    TRACKING.utm_term    || undefined
      });
    }
    if (CONFIG.GOOGLE_ADS_ID) { gtag('config', CONFIG.GOOGLE_ADS_ID); }
  }

  /* Eventos: page_view (automático), form_start, form_submit,
              whatsapp_click, cta_click, google_reviews_click.        */
  function track(eventName, params) {
    var payload = Object.assign({
      lp: 'defesa-trabalhista',
      utm_source:   TRACKING.utm_source   || '',
      utm_medium:   TRACKING.utm_medium   || '',
      utm_campaign: TRACKING.utm_campaign || '',
      utm_content:  TRACKING.utm_content  || '',
      utm_term:     TRACKING.utm_term     || ''
    }, params || {});

    if (typeof window.gtag === 'function') { window.gtag('event', eventName, payload); }
    window.dataLayer.push(Object.assign({ event: eventName }, payload));
  }

  function trackAdsConversion() {
    if (CONFIG.GOOGLE_ADS_CONVERSION && typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', { send_to: CONFIG.GOOGLE_ADS_CONVERSION });
    }
  }

  /* ======================================================================
     3. WhatsApp
     ====================================================================== */
  var DEFAULT_WA_MESSAGE =
    'Olá, BGL Advogados. Minha empresa está diante de uma situação trabalhista ' +
    'e gostaria de falar com a equipe.';

  /* Monta a mensagem que chega no WhatsApp da BGL com o formulário já
     respondido: quem é, o que a empresa recebeu, em que pé está o caso e
     o relato. Campo vazio simplesmente não entra na mensagem.          */
  function buildWhatsAppMessage(data) {
    if (!data || (!data.nome && !data.empresa)) { return DEFAULT_WA_MESSAGE; }

    var nome = data.nome || '[nome não informado]';
    var empresa = data.empresa || '[empresa não informada]';
    var msg = 'Olá, BGL Advogados. Sou ' + nome + ', da empresa ' + empresa + '. ' +
              'Preenchi o formulário da página de defesa trabalhista empresarial.';

    var linhas = [];
    if (data.whatsapp)  { linhas.push('WhatsApp: ' + data.whatsapp); }
    if (data.documento) { linhas.push('Documento recebido: ' + data.documento); }
    if (data.situacao)  { linhas.push('Situação atual: ' + data.situacao); }
    if (data.assunto)   { linhas.push('Assunto principal: ' + data.assunto); }
    if (data.audiencia) { linhas.push('Data da audiência: ' + formatDate(data.audiencia)); }
    if (linhas.length)  { msg += '\n\n' + linhas.join('\n'); }

    if (data.relato)    { msg += '\n\nO que aconteceu:\n' + data.relato; }

    return msg;
  }

  function whatsappURL(message) {
    var num = (CONFIG.WHATSAPP_NUMBER || '').replace(/\D/g, '');
    if (!num) { return '#'; }
    return 'https://wa.me/' + num + '?text=' + encodeURIComponent(message || DEFAULT_WA_MESSAGE);
  }

  function formatDate(iso) {
    if (!iso) { return ''; }
    var parts = String(iso).split('-');
    if (parts.length !== 3) { return iso; }
    return parts[2] + '/' + parts[1] + '/' + parts[0];
  }

  /* Aplica o link de WhatsApp a todos os elementos [data-wa]. */
  function initWhatsAppLinks(message) {
    var href = whatsappURL(message);
    $$('[data-wa]').forEach(function (el) {
      el.setAttribute('href', href);
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener');
    });
  }

  /* ======================================================================
     4. Cliques rastreados (CTA / WhatsApp / avaliações)
     ====================================================================== */
  function initClickTracking() {
    doc.addEventListener('click', function (ev) {
      var el = ev.target.closest ? ev.target.closest('[data-wa], [data-cta], [data-reviews-link]') : null;
      if (!el) { return; }

      var local = el.getAttribute('data-location') || 'nao-identificado';
      var label = (el.getAttribute('data-cta-label') || el.textContent || '').trim().slice(0, 80);

      if (el.hasAttribute('data-wa')) {
        track('whatsapp_click', { location: local, link_text: label });
      } else if (el.hasAttribute('data-reviews-link')) {
        track('google_reviews_click', { location: local, link_text: label });
      } else {
        track('cta_click', { location: local, link_text: label });
      }
    }, true);
  }

  /* ======================================================================
     5. Avaliações do Google — renderiza SOMENTE o que for real
     ====================================================================== */
  function initReviews() {
    var section = $('#avaliacoes');
    if (!section) { return; }

    /* 5.1 Resumo */
    var scoreEl = $('[data-reviews-score]', section);
    var countEl = $('[data-reviews-count]', section);
    var starsEl = $('[data-reviews-stars]', section);
    var summary = CONFIG.REVIEWS_SUMMARY || {};

    if (scoreEl) {
      if (summary.rating) {
        scoreEl.textContent = summary.rating;
        if (starsEl) { starsEl.innerHTML = starsMarkup(Math.round(parseFloat(String(summary.rating).replace(',', '.'))) || 5); }
      } else {
        var wrap = scoreEl.closest('.g-summary__data');
        if (wrap) { wrap.hidden = true; }
      }
    }
    if (countEl) {
      if (summary.count) { countEl.textContent = summary.count; }
      else { countEl.hidden = true; }
    }

    /* 5.2 Cards — apenas avaliações com texto e nome reais preenchidos */
    var grid = $('[data-reviews-grid]', section);
    var pending = $('[data-reviews-pending]', section);
    if (!grid) { return; }

    var real = (CONFIG.REVIEWS || []).filter(function (r) {
      return r && String(r.text).trim() !== '' && String(r.name).trim() !== '';
    });

    if (!real.length) {
      grid.hidden = true;
      if (pending) { pending.hidden = false; }
      return;
    }

    grid.hidden = false;
    if (pending) { pending.hidden = true; }
    grid.innerHTML = real.map(function (r) {
      var stars = Math.max(1, Math.min(5, parseInt(r.stars, 10) || 5));
      return '' +
        '<figure class="review">' +
          '<div class="stars" role="img" aria-label="' + stars + ' de 5 estrelas">' + starsMarkup(stars) + '</div>' +
          '<blockquote class="review__text">' + escapeHTML(r.text) + '</blockquote>' +
          '<figcaption class="review__foot">' +
            '<span class="review__name">' + escapeHTML(r.name) + '</span>' +
            '<span class="review__src">' + googleGlyph() + 'Google</span>' +
          '</figcaption>' +
        '</figure>';
    }).join('');
  }

  function starsMarkup(n) {
    var star = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.5l2.95 6.05 6.67.92-4.84 4.66 1.16 6.62L12 18.6l-5.94 3.15 1.16-6.62L2.38 9.47l6.67-.92L12 2.5z"/></svg>';
    return new Array(n + 1).join(star);
  }

  function googleGlyph() {
    return '<svg viewBox="0 0 48 48" aria-hidden="true">' +
      '<path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/>' +
      '<path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/>' +
      '<path fill="#FBBC05" d="M11.69 28.18c-.44-1.32-.69-2.73-.69-4.18s.25-2.86.69-4.18v-5.7H4.34A21.98 21.98 0 0 0 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"/>' +
      '<path fill="#EA4335" d="M24 9.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 3.18 29.93 1 24 1 15.4 1 7.96 5.93 4.34 13.12l7.35 5.7C13.42 13.62 18.27 9.75 24 9.75z"/></svg>';
  }

  function escapeHTML(str) {
    return String(str)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  /* ======================================================================
     6. Links externos vindos do CONFIG
     ====================================================================== */
  function initExternalLinks() {
    var map = {
      'site':     CONFIG.SITE_URL,
      'instagram':CONFIG.INSTAGRAM_URL,
      'google':   CONFIG.GOOGLE_REVIEWS_URL,
      'maps':     CONFIG.GOOGLE_MAPS_URL,
      'privacy':  CONFIG.PRIVACY_URL
    };

    $$('[data-link]').forEach(function (el) {
      var key = el.getAttribute('data-link');
      var url = map[key];

      /* Placeholder ainda não substituído: aponta para o site institucional
         e sinaliza a pendência no console, sem quebrar a navegação.      */
      if (key === 'privacy' && (!url || url === 'PRIVACY_POLICY_URL')) {
        el.setAttribute('href', CONFIG.SITE_URL);
        el.setAttribute('data-placeholder', 'PRIVACY_POLICY_URL');
        return;
      }
      if (!url) { el.setAttribute('aria-disabled', 'true'); return; }
      el.setAttribute('href', url);
    });

    /* Botão de avaliações: se não houver URL real, o botão não é exibido. */
    $$('[data-reviews-link]').forEach(function (el) {
      if (CONFIG.GOOGLE_REVIEWS_URL) { el.setAttribute('href', CONFIG.GOOGLE_REVIEWS_URL); }
      else { el.hidden = true; }
    });

    /* Telefone / e-mail */
    $$('[data-tel]').forEach(function (el) {
      el.setAttribute('href', 'tel:+' + (CONFIG.WHATSAPP_NUMBER || '').replace(/\D/g, ''));
      if (!el.textContent.trim()) { el.textContent = CONFIG.PHONE_DISPLAY; }
    });
    $$('[data-mail]').forEach(function (el) {
      el.setAttribute('href', 'mailto:' + CONFIG.EMAIL);
      if (!el.textContent.trim()) { el.textContent = CONFIG.EMAIL; }
    });
  }

  /* ======================================================================
     7. Galeria — remove os espaços cujas fotografias ainda não existem
     ------------------------------------------------------------------
     Nenhuma imagem é gerada ou substituída por banco de imagens: se o
     arquivo real ainda não estiver em /assets/escritorio/, o espaço
     simplesmente não é exibido.
     ====================================================================== */
  function initGallery() {
    $$('[data-photo-slot]').forEach(function (slot) {
      var img = slot.querySelector('img');
      var src = img && img.getAttribute('data-src');

      /* Sem caminho definido: o espaço não tem razão de existir. */
      if (!src) { remove(slot); return; }

      /* Testa o arquivo antes de exibir: enquanto a fotografia real não
         estiver publicada, o espaço é removido e nada quebra na página.  */
      var probe = new Image();
      probe.onload = function () {
        img.setAttribute('src', src);
        img.removeAttribute('data-src');
      };
      probe.onerror = function () { remove(slot); };
      probe.src = src;
    });

    function remove(el) { if (el && el.parentNode) { el.parentNode.removeChild(el); } }
  }

  /* ======================================================================
     8. Formulário de qualificação
     ====================================================================== */
  function initForm() {
    var form = $('#form-qualificacao');
    if (!form) { return; }

    var success = $('#form-sucesso');
    var started = false;

    /* form_start: primeira interação real do usuário com o formulário. */
    form.addEventListener('input', function () {
      if (started) { return; }
      started = true;
      track('form_start', { location: 'formulario' });
    }, { once: false });

    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      clearErrors(form);

      var data = collect(form);
      var errors = validate(form, data);

      if (errors.length) {
        errors[0].el.focus();
        return;
      }

      var message = buildWhatsAppMessage(data);
      var url = whatsappURL(message);

      /* ------------------------------------------------------------------
         O WhatsApp abre PRIMEIRO e de forma SÍNCRONA.

         Navegadores só autorizam abrir uma janela enquanto o clique do
         usuário ainda está "quente": qualquer espera (o POST ao CRM, uma
         Promise, um await) faz o iOS Safari e o Chrome bloquearem o popup.
         Por isso a abertura vem antes do envio e do tracking — o resto
         acontece em seguida, sem segurar o contato.
         ------------------------------------------------------------------ */
      openWhatsApp(url);

      var payload = Object.assign({}, data, TRACKING, {
        origem: 'LP Defesa Trabalhista Empresarial',
        canal: 'whatsapp',
        mensagem_whatsapp: message,
        enviado_em: new Date().toISOString(),
        pagina: window.location.href
      });

      track('form_submit', {
        location: 'formulario',
        assunto: data.assunto || '',
        situacao: data.situacao || '',
        destino: 'whatsapp'
      });
      trackAdsConversion();
      track('whatsapp_click', { location: 'formulario-envio' });

      /* Cópia para o CRM, quando houver endpoint. Não bloqueia nada: o
         contato já está a caminho do WhatsApp mesmo que o POST falhe.   */
      send(payload);

      showSuccess(form, success, data);
    });

    /* Abre em nova aba para não perder a página; se o navegador bloquear
       a aba (política de popup), navega na própria aba — em nenhum dos
       dois casos o usuário fica sem o WhatsApp.                         */
    function openWhatsApp(url) {
      if (!url || url === '#') { return; }
      var win = null;
      try { win = window.open(url, '_blank'); } catch (e) { win = null; }
      if (!win) { window.location.href = url; return; }
      try { win.opener = null; } catch (e) {}
    }

    function send(payload) {
      if (!CONFIG.FORM_ENDPOINT) {
        /* Sem endpoint configurado: nada é enviado para fora. O contato
           não depende disso — ele foi pelo WhatsApp.                    */
        if (window.console && console.info) {
          console.info('[BGL LP] FORM_ENDPOINT não configurado. Dados capturados:', payload);
        }
        return;
      }
      try {
        fetch(CONFIG.FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          /* keepalive: a requisição sobrevive à saída da página quando o
             WhatsApp abre na mesma aba.                                 */
          keepalive: true
        })['catch'](function () { /* silencioso: o WhatsApp já foi aberto */ });
      } catch (e) { /* idem */ }
    }
  }

  function collect(form) {
    var fd = new FormData(form);
    var data = {};
    fd.forEach(function (v, k) { data[k] = typeof v === 'string' ? v.trim() : v; });
    data.consentimento = !!$('#f_consentimento').checked;
    return data;
  }

  function validate(form, data) {
    var errors = [];

    function fail(id, message) {
      var el = $('#' + id);
      if (!el) { return; }
      var field = el.closest('.field') || el.closest('.consent');
      if (field) {
        field.classList.add('has-error');
        var msg = $('.field__error', field);
        if (msg && message) { msg.textContent = message; }
      }
      el.setAttribute('aria-invalid', 'true');
      errors.push({ el: el });
    }

    if (!data.empresa) { fail('f_empresa', 'Informe o nome da empresa.'); }
    if (!data.nome)    { fail('f_nome', 'Informe seu nome.'); }

    var digits = (data.whatsapp || '').replace(/\D/g, '');
    if (digits.length < 10 || digits.length > 13) {
      fail('f_whatsapp', 'Informe um WhatsApp com DDD.');
    }
    if (!data.documento) { fail('f_documento', 'Selecione uma opção.'); }
    if (!data.situacao)  { fail('f_situacao', 'Selecione uma opção.'); }
    if (!data.assunto)   { fail('f_assunto', 'Selecione uma opção.'); }

    if (!data.consentimento) {
      var box = $('#f_consentimento');
      var wrap = box.closest('.consent');
      if (wrap) { wrap.classList.add('has-error'); }
      box.setAttribute('aria-invalid', 'true');
      errors.push({ el: box });
    }

    return errors;
  }

  function clearErrors(form) {
    $$('.has-error', form).forEach(function (f) { f.classList.remove('has-error'); });
    $$('[aria-invalid]', form).forEach(function (el) { el.removeAttribute('aria-invalid'); });
  }

  function showSuccess(form, success, data) {
    var message = buildWhatsAppMessage(data);
    var waBtn = $('#sucesso-whatsapp');
    if (waBtn) {
      waBtn.setAttribute('href', whatsappURL(message));
      waBtn.setAttribute('target', '_blank');
      waBtn.setAttribute('rel', 'noopener');
    }
    form.hidden = true;
    if (success) {
      success.classList.add('is-visible');
      success.setAttribute('tabindex', '-1');
      success.focus({ preventScroll: true });
      success.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  /* Máscara leve e tolerante para o WhatsApp (não bloqueia digitação). */
  function initPhoneMask() {
    var input = $('#f_whatsapp');
    if (!input) { return; }
    input.addEventListener('input', function () {
      var d = input.value.replace(/\D/g, '').slice(0, 11);
      if (d.length <= 2) { input.value = d; return; }
      if (d.length <= 6) { input.value = '(' + d.slice(0, 2) + ') ' + d.slice(2); return; }
      if (d.length <= 10) { input.value = '(' + d.slice(0, 2) + ') ' + d.slice(2, 6) + '-' + d.slice(6); return; }
      input.value = '(' + d.slice(0, 2) + ') ' + d.slice(2, 7) + '-' + d.slice(7);
    });
  }

  /* ======================================================================
     9. Revelação discreta ao rolar
     ====================================================================== */
  function initReveal() {
    var items = $$('.reveal');
    if (!items.length) { return; }

    var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-in'); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    items.forEach(function (el) { io.observe(el); });
  }

  /* ======================================================================
     10. FAQ — um item aberto por vez (accordion)
     ====================================================================== */
  function initFAQ() {
    var items = $$('.faq details');
    items.forEach(function (item) {
      item.addEventListener('toggle', function () {
        if (!item.open) { return; }
        items.forEach(function (other) { if (other !== item) { other.open = false; } });
      });
    });
  }

  /* ======================================================================
     11. Barra fixa mobile — reserva a altura real no fim da página
     ------------------------------------------------------------------
     Garante que a barra nunca cubra o rodapé, qualquer que seja a altura
     dos botões, o tamanho de fonte do usuário ou a safe area do aparelho.
     ====================================================================== */
  function initStickyBar() {
    var bar = $('.stickybar');
    if (!bar) { return; }

    function sync() {
      var visible = window.getComputedStyle(bar).display !== 'none';
      doc.documentElement.style.setProperty('--stickybar-h', visible ? bar.offsetHeight + 'px' : '0px');
    }

    sync();
    window.addEventListener('resize', sync);
    window.addEventListener('orientationchange', sync);
    if ('ResizeObserver' in window) { new ResizeObserver(sync).observe(bar); }
  }

  /* ======================================================================
     12. Ano do rodapé
     ====================================================================== */
  function initYear() {
    var el = $('[data-year]');
    if (el) { el.textContent = new Date().getFullYear(); }
  }

  /* ======================================================================
     Inicialização
     ====================================================================== */
  function init() {
    initAnalytics();
    fillTrackingInputs();
    initExternalLinks();
    initWhatsAppLinks(DEFAULT_WA_MESSAGE);
    initClickTracking();
    initReviews();
    initGallery();
    initForm();
    initPhoneMask();
    initReveal();
    initFAQ();
    initStickyBar();
    initYear();
  }

  if (doc.readyState === 'loading') {
    doc.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
