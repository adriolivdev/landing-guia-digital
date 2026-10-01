# 🚀 Instruções de Deploy — empresanodigital.com.br

**Site:** Adriane Oliveira - Gestão de Anúncios e Sites para Clínicas
**Domínio:** empresanodigital.com.br

---

## 1️⃣ Preparação do Domínio

### Configurar Domínio
- [ ] Apontar DNS para servidor/hospedagem
- [ ] Configurar SSL/HTTPS (Let's Encrypt gratuito)
- [ ] Adicionar certificado SSL (obrigatório para SEO)
- [ ] Forçar HTTPS via .htaccess (já configurado)

### DNS Records (Exemplo)
```
Type: A
Name: @
Value: [IP_DO_SERVIDOR]
TTL: 3600

Type: CNAME
Name: www
Value: empresanodigital.com.br
TTL: 3600
```

---

## 2️⃣ Upload de Arquivos

### Arquivos Principais
```
📁 public_html/ ou htdocs/
├── index.html ✅
├── styles.css ✅
├── script.js ✅
├── robots.txt ✅
├── sitemap.xml ✅
├── .htaccess ✅
└── 📁 images/
    ├── logo.png
    ├── hero-1.jpg
    ├── hero-2.jpg
    ├── [... outras imagens ...]
    └── modelo-odonto.jpg
```

### Passos
1. Conectar via FTP/SFTP ao servidor
2. Fazer upload de todos os arquivos
3. Configurar permissões:
   - `.htaccess` → 644
   - `robots.txt` → 644
   - `sitemap.xml` → 644
   - Pastas → 755

---

## 3️⃣ Configurações do Servidor

### Ativar mod_rewrite (Apache)
```bash
# SSH - Ativar módulos
a2enmod rewrite
a2enmod deflate
a2enmod expires

# Reiniciar Apache
systemctl restart apache2
```

### Configurar PHP (se necessário)
```php
; php.ini
upload_max_filesize = 10M
post_max_size = 10M
max_execution_time = 300
```

### Configurar Email (opcional)
```
Mail desde: adriane@empresanodigital.com.br
SMTP: [Configurar conforme hosting]
```

---

## 4️⃣ HTTPS e Certificado SSL

### Gerar SSL (Let's Encrypt - Gratuito)
```bash
# Instalar Certbot
apt-get install certbot python3-certbot-apache

# Gerar certificado
certbot certonly --apache -d empresanodigital.com.br

# Auto-renew
certbot renew --dry-run
```

### Configurar no .htaccess (já está)
```apache
# Força HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

---

## 5️⃣ Google Search Console

### Passo 1: Verificar Domínio
1. Ir para https://search.google.com/search-console
2. Adicionar propriedade: `empresanodigital.com.br`
3. Verificar via DNS (recomendado) ou arquivo HTML

### Passo 2: Enviar Sitemap
1. Na seção "Sitemaps"
2. Enviar: `https://empresanodigital.com.br/sitemap.xml`
3. Aguardar "Sucesso"

### Passo 3: Monitorar
- Verificar "Cobertura" (erros de indexação)
- Monitorar "Performance"
- Analisar "Core Web Vitals"

---

## 6️⃣ Google Business Profile

### Criar Perfil Local
1. Ir para https://business.google.com
2. Clicar "Adicionar negócio"
3. Nome: "Adriane Oliveira - Empresa no Digital"
4. Categoria: "Agência de Publicidade"
5. Cidades: Joinville, Blumenau, Itajaí, SC

### Preencher Informações
- **Telefone:** (47) 98839-3646
- **Email:** adriane@empresanodigital.com.br
- **Website:** https://empresanodigital.com.br
- **Descrição:** "Gestão de anúncios (Google Ads, Meta Ads) e sites para clínicas e consultórios"
- **Horário:** Seg-Sex 9h-18h

### Adicionar Fotos
- Logo/Foto profissional
- Exemplos de trabalhos
- Equipe

### Habilitar Features
- [x] Reviews
- [x] Mensagens (WhatsApp)
- [x] Reserva de consulta
- [x] Abrir agora

---

## 7️⃣ Analytics e Rastreamento

### Google Analytics 4
```html
<!-- Adicionar no <head> antes de </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Google Tag Manager
```html
<!-- Adicionar após <body> de abertura -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXXX');</script>
```

---

## 8️⃣ Testes Pré-Launch

### Checklist Técnico
- [ ] HTTPS funcionando (verde no navegador)
- [ ] robots.txt acessível
- [ ] sitemap.xml acessível
- [ ] Imagens carregando corretamente
- [ ] Responsivo em mobile (testar em 3+ dispositivos)
- [ ] Performance: PageSpeed > 90

### Testes de SEO
- [ ] Google Rich Results Test ✅
- [ ] Mobile-Friendly Test ✅
- [ ] Core Web Vitals OK
- [ ] Schema markup validando

### Testes de Funcionalidade
- [ ] Todos os links funcionando
- [ ] WhatsApp: onClick abrindo chat
- [ ] Formulário enviando corretamente
- [ ] FAQ accordion funcionando

### Testes de Segurança
- [ ] Sem avisos de certificado
- [ ] Sem conteúdo misto (HTTP/HTTPS)
- [ ] Headers de segurança presentes

---

## 9️⃣ Pós-Launch

### Primeira Semana
- [ ] Monitorar Google Search Console
- [ ] Verificar Google Analytics
- [ ] Responder reviews no Google
- [ ] Postar nas redes sociais

### Primeiro Mês
- [ ] Atingir 1000 impressões no Google
- [ ] Otimizar keywords com baixo ranking
- [ ] Adicionar conteúdo complementar (blog)
- [ ] Coletar reviews de clientes

### Primeiros 3 Meses
- [ ] Aparecer na página 1 para keywords principais
- [ ] Crescimento de tráfego orgânico
- [ ] Aumentar engagement
- [ ] Coletar leads qualificados

---

## 🔐 Checklist de Segurança

- [ ] HTTPS ativo
- [ ] SSL certificado válido
- [ ] .htaccess protegendo arquivos sensíveis
- [ ] Senhas de acesso fortes (FTP, cPanel, etc)
- [ ] Backups automáticos habilitados
- [ ] Firewall/WAF configurado

---

## 📞 Suporte Técnico

Se tiver dúvidas durante o deploy:

- **Suporte Hosting:** Contatar provedora
- **Suporte Google:** support.google.com
- **Contato Adriane:** (47) 98839-3646

---

## 📋 Comandos Rápidos (SSH)

```bash
# Verificar permissões
ls -la

# Mudar permissões
chmod 644 .htaccess robots.txt sitemap.xml
chmod 755 -R images/

# Verificar logs
tail -f /var/log/apache2/error.log
tail -f /var/log/apache2/access.log

# Reiniciar Apache
sudo systemctl restart apache2

# Testar .htaccess
curl -I https://empresanodigital.com.br
```

---

**Status:** ✅ Pronto para Deploy
**Data:** 30/09/2026
