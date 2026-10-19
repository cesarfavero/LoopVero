# Grok Bot renderer: inventário do código e assets

## Identidade e método

Referência: `Grok Bot.app/Contents/Resources/app.asar`, SHA-256 `055b087a9bacc3be4e5f80c468edf2fd031dd5b928ab2e7da7e01dd10de0e860`. A árvore original foi preservada; a cópia em `.research/reference-electron/` é material de pesquisa. A identidade e completude do ASAR foram verificadas pelo inventário REA, Evidence `ev_43b752aeb5eff46eb356a237575b47124b9e0b096a41f657b4db612470c2d0bb` (735 ocorrências, todas percorridas, 6 contradições de integridade registradas). Conteúdo com hash contraditório está excluído desta interpretação.

Uma paginação do inventário filtrada para a árvore `dist/renderer/` localizou 595 entradas: 590 arquivos e 5 diretórios. A cópia extraída contém 534 `.js`, 4 `.css`, 2 `.html`, 22 `.woff2`, 14 `.png`, 6 `.svg`, 5 `.wav`, 1 `.jpg`, 1 `.mp3` e 1 `.mjs`. O inventário é completo para o ASAR, mas não demonstra que todo recurso seja alcançável ou exibido.

O parent REA `ev_dd8bb1567120bd133c39a0ece676cf9c19530e126b902a7ff4a4ee53c09b8b1e` inclui o renderer `index.html`, porém a análise semântica foi parcial: 608 arquivos ficaram fora da seleção; a árvore contém 7.152 incógnitas semânticas e limitações nos bundles Main/Core/Coordinator. A view de módulos enumera 744 registros, que não equivalem a 744 arquivos. Nenhum módulo ausente ou nome de arquivo é tratado como prova negativa ou prova de execução.

## Mapa estático inicial de arquivos

| Grupo observado no artefato | Entradas / exemplos | O que o nome do arquivo permite dizer | Estado do vínculo com a interface |
|---|---|---|---|
| Entrada e base | `index.html`, `index-wlkGG389.js`, `index.eager-platform-*.js`, `index.eager-app-*.js` | A página carrega uma entrada e chunks eager separados | A montagem React e vários providers estão descritos em [RENDERER_TRACE.md](RENDERER_TRACE.md); todos os callsites ainda não foram recuperados |
| Conversa/transcript | famílias `chunk-chat-*`, `chunk-messages-*`, `chunk-thread-card-*`, `chunk-settled-message-card-*` | Existem muitas unidades compiladas relacionadas a chat e mensagens | Identidade funcional de cada variante e suas condições de renderização seguem por rastrear |
| Composer e nova conversa | `chunk-new-chat-bar-*`, `chunk-draft-composer-bubble-*`, `chunk-prompt-editor-*`, `chunk-group-chat-connect-waiting-*` | NewChatBar, transação de criação de grupo, wrapper de roster e contratos Coordinator/RPC estão mapeados em [GROUP_CHAT_CONTRACT.md](GROUP_CHAT_CONTRACT.md) | Ainda falta mapear o módulo de espera, transcript e gerenciamento de membros; caminhos estáticos não provam estado alcançado em runtime |
| Agentes e equipes | famílias `chunk-agents-*`, `chunk-team-bot-*`, `chunk-agent-avatar-editor-*`, `chunk-team-agent-rows-*` | Há módulos de agentes e painéis/linhas de configuração de equipes | Não se infere rota completa, permissões efetivas ou presença em todas as contas |
| Preferências e integração | famílias `chunk-settings-*`, `chunk-provider-*`, `chunk-grok-bot-team-custom-mcp-*`, `chunk-connect-*`, `chunk-plugins-*` | Há módulos com nomes ligados a settings, providers, MCP e plugins | O roteamento entre navegação, conteúdo e políticas ainda não está fechado |
| Ambiente e arquivos | `chunk-provider-computer-use-*`, `chunk-computer-screen-preview-*`, `chunk-file-*`, `chunk-fullscreen-file-viewer-*` | O bundle inclui módulos nomeados para computer use e viewers de arquivo | Interfaces, permissões, processos e fluxos de execução precisam ser rastreados separadamente |
| Automação e objetivos | `chunk-automation-detail-panel-*`, `chunk-objective-*` | Há ao menos um painel de automação e chunk de linguagem/feature cujo nome sugere objetivo | O nome não basta para classificar função; exige inspecionar exports/callers |
| Onboarding e overlays | `chunk-onboarding-flow-*`, `chunk-*-dialog-*`, `chunk-*-modal-*` | O inventário possui fluxos e componentes de diálogo/modal | Reachability, sequência e hierarquia visual continuam desconhecidas |
| Design e mídia | `index-DkV65EBE.css`, `desktop-mount-panel-*.css`, `fullscreen-file-viewer-body-*.css`, `markdown-math-katex-*.css`; fontes XVF, XVF Mono, Cursor Icons e KaTeX; logos, ícones, wallpaper, sons | CSS e recursos visuais são carregados no app; parte dos estilos é lazy ou especializada | Recuperar seletor é distinto de associá-lo ao componente e à captura/estado que o usa |

## Assets visuais identificados

- `index-DkV65EBE.css` é o stylesheet base compilado (701.663 bytes na cópia local); os outros três CSS são especializados para painel montado, viewer e matemática.
- Tipografia inclui `X-VF-C7NyO54W.woff2`, `XMono-VF-K4lk0ar0.woff2`, `cursor-icons-16-gwXtdAvu.woff2` e fontes KaTeX.
- Assets raster incluem o ícone da aplicação, wallpaper de demonstração do computer e imagens de integrações. O wallpaper está em chunk onboarding; não se presume que seja o wallpaper ativo do desktop.
- Logos SVG/PNG de provedores e integrações devem ser associados aos componentes por referência de import/uso antes de serem colocados em cada tela.
- O usuário autorizou copiar assets visuais licenciados para o app de teste. As cópias já feitas estão sob `apps/desktop/src/assets/licensed-test/`; isso não autoriza publicar o app nem comprova que esses assets correspondem ao estado visual inicial.

## Trabalho de mapeamento que ainda falta

O inventário fecha quais arquivos existem, não quais telas aparecem nem como interagem. Antes de redesenhar a shell, o próximo trace precisa ligar os chunks desde a entrada React e os registradores de lazy loading, identificar exports/componentes com AST/REA, seguir seus callsites e props, e relacionar classes atômicas/semânticas às regras no CSS. Para cada superfície, registrar estados que o código realmente permite, eventos que os alteram, assets referenciados, dimensões/tokens usados e as dependências ausentes. A execução controlada do app original entra depois para confirmar comportamento/estado inicial e produzir comparação visual com a mesma janela, escala e conteúdo.

Este arquivo é um inventário inicial confirmado, não o mapa integral solicitado e não autorização para avançar a réplica visual.
