# Site twomind. — pronto para a Vercel

Site estático com 306 páginas em 3 idiomas (pt-BR, pt-PT e inglês), SEO local por serviço e cidade, hreflang, sitemap e configuração da Vercel.

## Publicar

**Opção 1: pela linha de comando**
1. Instale a CLI: `npm i -g vercel`
2. Dentro desta pasta: `vercel --prod`
3. Na primeira vez, escolha "Other" como framework, sem comando de build e com a pasta de saída `.` (a raiz).

**Opção 2: pelo GitHub**
1. Crie um repositório e envie o conteúdo desta pasta.
2. Na Vercel: Add New › Project › importe o repositório.
3. Framework: Other. Build command: vazio. Output directory: vazio (raiz).

## Domínio
Em Project › Settings › Domains, adicione `www.empresanodigital.com.br` e `empresanodigital.com.br` (redirecionando para o www). Siga os registros DNS que a Vercel mostrar.

## Antes de publicar
- `assets/site.js`: preencha `WHATS = ''` com o número (só dígitos, com 55 e DDD).
- Google Tag Manager: o build tem um campo GTM_ID. Sem ele, os eventos já vão para `window.dataLayer` (cta_click, whatsapp_click, generate_lead) e passam a contar quando o GTM for instalado.
- Instagram: links apontam para instagram.com/twomind.

## Depois de publicar
- Google Search Console: verifique o domínio e envie `https://www.empresanodigital.com.br/sitemap.xml`.
- Crie ou atualize o Perfil da Empresa no Google.

## Estrutura
- `/` pt-BR · `/pt-pt/` Portugal · `/en/` inglês
- `/{servico}/{cidade}/` páginas locais (ex.: `/trafego-pago/joinville/`, `/en/paid-traffic/joinville/`)
- `/cidades/{cidade}/` e `/en/cities/{cidade}/` páginas por cidade
- `vercel.json`: URLs limpas com barra final, cache de assets e cabeçalhos de segurança
