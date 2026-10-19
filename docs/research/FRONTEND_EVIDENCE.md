# Renderer original: evidência inicial

## Proveniência e método

- Referência: `Grok Bot.app/Contents/Resources/app.asar`; `CFBundleShortVersionString` de `Info.plist`: `0.71.2`.
- SHA-256 de `app.asar`: `055b087a9bacc3be4e5f80c468edf2fd031dd5b928ab2e7da7e01dd10de0e860`.
- O cabeçalho ASAR foi lido estaticamente (JSON a partir do offset 16). Os offsets apontaram para conteúdos lidos diretamente do arquivo, sem executar código original e sem modificar os artefatos. O inventário contém 668 entradas. Não há source maps identificados neste levantamento.
- `GrokBotResearch/sand/` contém Sand Host e dependências auxiliares; o renderer está no ASAR da aplicação original. O diretório de implementação ainda não existia neste levantamento.

## Entrada e composição

`dist/renderer/index.html` contém `#root`, shell de boot transparente `#sand-boot-shell`, título `Grok Bot`, viewport responsivo e CSP. Carrega `assets/index-wlkGG389.js`, quatro módulos `index.eager-*`, `assets/index-DkV65EBE.css` e `chunk-prompt-editor-A2oxbQX4.js` como preload. Isto estabelece a composição inicial, mas não identifica sozinho todas as rotas ou o estado inicial de usuário autenticado.

O CSS principal tem 701.663 bytes. Declara camadas `reset`, `anysphere.tokens`, `anysphere.scss`, `anysphere.stylex`, `glass.scss`, `glass.stylex` e `overrides`. A família de classes `sand-*` e tokens `--sand-*` aparecem amplamente. Há também tokens `--cursor-*` e classes `ui-*`; não se deve substituir automaticamente todos por um único tema simplificado. O root CSS declara stack sans baseada em `--cursor-font-family`/VS Code e fallback de sistema; XVF/XVF Mono estão declaradas como famílias separadas, sem evidência de que sejam a fonte global padrão.

Tokens confirmados em `assets/index-DkV65EBE.css`:

| Token | Valor encontrado | Leitura |
| --- | --- | --- |
| `--sand-bg-pane` | `#ffffff` | Paleta clara definida em `:root,.sand-1wuigm2` |
| `--sand-bg-chrome` | `#fcfcfc` | Chrome da paleta clara |
| `--sand-bg-sidebar` | `#f5f5f5` | Sidebar da paleta clara |
| `--sand-bg-primary` | `#1c1c1c` | Superfície/ação primária nessa paleta |
| `--cursor-accent` | `#599CE7` | Token de camada UI herdada |

O CSS contém `@font-face` para `XVF` (200–800), `XVF Mono` (200–800) e `cursor-icons`. Os arquivos correspondentes estão em `dist/renderer/assets/` (`X-VF-C7NyO54W.woff2`, `XMono-VF-K4lk0ar0.woff2`, `cursor-icons-16-gwXtdAvu.woff2`). Há referência a `SF Pro` como fallback em classes `ui-*`. O CSS revela `--sand-sidebar-width` variável, e um cálculo responsivo usa fallback de `280px` para sidebar e `424px` para largura mínima do chat; são pistas de layout, ainda sem verificação por screenshot.

## Superfícies apontadas por módulos

O inventário do ASAR mostra chunks dedicados a `chunk-onboarding-flow-Bvw-idpK.js`, `chunk-prompt-editor-A2oxbQX4.js`, `chunk-automation-detail-panel-C7pwVm8D.js`, `chunk-thread-card-Bd1pjUBX.js` e `chunk-computer-screen-preview-LY_WYUeq.js`. Existem dezenas de `chunk-chat-*`, `chunk-settings-*` e `chunk-agents-*`, além de `chunk-team-bot-*`, `chunk-cloud-agent-card-elevated-*`, `chunk-box-desktop-modal-*`, `chunk-transcript-markdown-*`, `chunk-voice-memo-bubble-*` e `chunk-auto-review-*`.

Estes nomes evidenciam código empacotado para essas superfícies; não provam que todas sejam alcançáveis para toda conta, nem seus detalhes de interação. O chunk de preview de computador contém classes `sand-computer-cursor-overlay`, `sand-computer-cursor-glyph` e variável `--sand-computer-preview-fit`, compatíveis com uma prévia de tela e cursor sobreposto. A validação exata requer trace de módulos/contratos e observação do aplicativo original.

## Próximas medições para paridade visual

1. Capturar screenshots da aplicação original nas telas de onboarding, conversa vazia, conversa ativa, sidebar, agentes, automações, configurações e computer use, com largura/altura e tema registrados.
2. Comparar geometria, tipografia, cores, densidade, estados de hover/foco, animações e overflow por tela. Não inferir dimensões definitivas de um fallback CSS.
3. Rastrear imports/exportações de chunks centrais e contratos renderer ↔ preload ↔ Electron main antes da implementação dos fluxos.
4. Registrar as variantes claras/escuras e estado de autenticação com evidência visual; a paleta clara no CSS não demonstra qual tema é padrão.

## Passagem REA focada nos módulos de navegação e atividade (2026-10-19)

- Reconfirmei o ASAR atual pelo SHA-256 `055b087a9bacc3be4e5f80c468edf2fd031dd5b928ab2e7da7e01dd10de0e860`; a cópia extraída em `.research/reference-electron` tem SHA de diretório `bc764ccd6c001dfac44d98b1ffc9471b95286d10126f640331e6b188cc8b355b`.
- Reusei a Evidence REA do ASAR `ev_095a9e033edda996b07778187a762514f5728d4a5f021b57d809f7111a2e6705`. A view informa inventário de 612 arquivos relevantes; a análise anterior selecionou quatro arquivos e deixou 608 fora, incluindo semântica parcial/truncada, 39.978 incógnitas semânticas e 609 incógnitas de aplicação. O resultado não é base para declarar ausência.
- Para avançar pelo código de navegação/atividade, rodei análise REA estática separada na extração selecionando `dist/renderer/assets/index.eager-app-DSuGVQNC.js`, `index.eager-platform-DKZJbDqM.js`, `chunk-view-DYLZy-Qo.js` e `chunk-settings-D4W8HPM6.js`. Evidence de análise `ev_7bd9173d4638b3582a2de234144ad0ea504860d42a82a321e41ae51ed2529c8f`; resumo `ev_40855102bb83037a79a3bb55e30326c33b2f2b0fd6ca48411cd703e00932c3d4`.
- O conjunto contém 1.217.061 bytes e foi parseado sem falhas. A seleção deixou 608 arquivos fora. O entrypoint `index.eager-app-DSuGVQNC.js` tem 1.801.380 bytes; o próprio REA reportou que seu grafo semântico não iniciou por falta do orçamento restante, e o grafo expandido de aplicação excedeu o orçamento. `chunk-view-DYLZy-Qo.js` e o módulo platform também excederam o orçamento de retenção semântica. Portanto, este passe confirma identidade, parsing e limite do analisador, mas ainda não fornece arestas/callsites suficientes para implementar Inbox/Background tasks com fidelidade.
- A tentativa inicial de selecionar `chunk-chat-BahomzMZ.js`, `chunk-agents-Dl43u0z-.js` e `chunk-settings-DBFA-WOy.js` parseou três arquivos sem falhas, mas revelou-se inadequada: o chunk de chat tem majoritariamente dados de localização, e a extração genérica encontrou só três findings nos 121.706 bytes. Esses chunks não devem ser tratados como módulos funcionais só por seus nomes.
- Próxima passada de código: usar os facts estáticos conservados para recortar funções/componentes do entrypoint e separar cada declaração/componente em entradas JavaScript temporárias pequenas; analisar cada recorte com REA, conferindo origem e offsets no arquivo original. Seguir os handlers e estados de navegação/atividade e então comparar com o renderer próprio. Não usar screenshots como substituto desse rastreamento.

## Complemento desta implementação

- REA voltou a analisar o ASAR original (`055b087a…de0e860`) selecionando os dois bundles React centrais. A operação foi estática, com `record-and-continue` por seis divergências de integridade em arquivos nativos desempacotados. Evidence pai `ev_73141b05e408feca636666170d2df9710b6a658e805e38b866739df58f402b42`; resumo `ev_45bc5776ee8506be5cb9d85a01d5b91b3ffd66e76cf0bd5b21ca46279b55f892`. O resumo confirma 610 arquivos não selecionados e grafos semânticos parciais; os dois bundles React centrais excederam o orçamento de resultado restante. Não usar ausência de arestas como ausência de funcionalidade.
- A implementação local agora carrega os arquivos XVF e XVF Mono que acompanham o app original, copiados para `apps/desktop/src/assets/` com autorização explícita do usuário para o build de teste local. Os hashes de origem podem ser recuperados do índice ASAR; esses arquivos são assets de referência autorizados para esta cópia de teste, não uma conclusão sobre redistribuição pública.
- O CSS da implementação foi ajustado para a paleta clara encontrada no código original (`#fff`, `#fcfcfc`, `#f5f5f5`, texto `#1c1c1c`, accent `#599CE7`) e mantém a stack global sans baseada no sistema, conforme o root CSS original. As fontes XVF/XVF Mono do artefato estão incluídas no app de teste, mas não foram forçadas como família global sem evidência de uso global no original. Isso corrige a contradição anterior de superfícies escuras, mas não estabelece fidelidade de layout ou paridade visual: a estrutura React ainda é uma implementação provisória e faltam traces de componentes/estados e comparação controlada com a aplicação original.
- Captura controlada por REA em 2026-10-19 (`capture_electron_scenario`, Evidence `ev_be59a2e523c4956c400709516ebf9de8a67b3b55d7d5e4fcdb8a4ba3855f86cd`) usou o executável Electron absoluto do workspace, entrada `apps/desktop/src/main.cjs`, raiz `apps/desktop` e perfil temporário. Observou janela visível `TheGrok` em `http://127.0.0.1:4180/`, carregamento concluído e invocações IPC `state:load` e `provider:status`, sem erro nesses handlers. A captura foi parcial: o hook não instrumenta o contexto preload/renderer, os valores IPC não foram retidos e não houve envio de mensagem; não comprova o fluxo completo nem paridade visual. O launcher existente resolve Electron dentro do workspace, valida o caminho da entrada e não tem fallback para abrir a página padrão. Uma seleção CUA posterior apontou para um Electron preexistente do GG-Bot; essa janela não foi iniciada pelo launcher TheGrok e não é evidência sobre ele.


## Fluxo real de conversa em Electron isolado

Em 2026-10-19, TheGrok foi iniciado pelo launcher do workspace, usando Vite em `127.0.0.1:4181`, Electron com `--user-data-dir=/tmp/thegrok-isolated-data/profile` e CDP restrito a loopback em `127.0.0.1:9237`. O processo carregou título `TheGrok`, composer e estado primário, anunciou provider conectado e não produziu exceções no console. Uma interação CDP de teclado enviou: “Use obrigatoriamente a ferramenta get_local_time antes de responder. Depois informe a data e hora retornadas.”

O fluxo observado foi composer → `window.grok.sendMessage` → IPC `agent:turn` → runtime Responses → `get_local_time` → retorno `function_call_output` → resposta final → persistência. O transcript exibiu a mensagem, a resposta e a seção `ACTIVITY / Get Local Time / completed`. O arquivo temporário `/tmp/thegrok-isolated-data/profile/thegrok-state.json` continha a resposta assistant com task ID e `toolCalls` separado, status `completed`, ferramenta `get_local_time` e resumo correspondente. Nenhum erro JS/console foi observado. CodexRouter permaneceu acessado apenas em `127.0.0.1:17842`; nenhuma configuração global foi alterada.

Essa é prova funcional do fluxo da reconstrução neste host e não prova comportamento equivalente do harness original, paridade visual, execução distribuída, retomada após reinício ou cancelamento. O teste usou a instância TheGrok isolada e não abriu nem enviou prompt ao Grok Bot original.

## Composição estática adicional

O rastreio focado de composição, estados de layout, tema e ciclo do composer está em [RENDERER_TRACE.md](RENDERER_TRACE.md). Ele aponta que a estrutura atual da implementação (lista de bots + chat + painel de detalhes) ainda não representa o shell completo baseado em tarefas do original; não promover paridade visual até mapear e implementar essa composição.

## REA e transcript tipado: nova análise

Em 2026-10-19, REA refez a análise estática do ASAR focando `index-wlkGG389.js` e `index.eager-app-DSuGVQNC.js`: Evidence de análise pai `ev_8d917749d8bac2f07b1b2affdfde39c7e3454fd360752a732e66831114c3bcb9`, resumo `ev_e6a0b5cab857987a144d6f620bd27616df6c3d92aa54987c652e539c380e55ae`. O hash ASAR confere com o inventário. A análise parseou os bundles como texto inerte, mas deixou 610 arquivos não selecionados; ambos os módulos centrais excederam o orçamento de grafo e a cobertura resultante é parcial. Seis artefatos nativos desempacotados têm bytes que contradizem metadados de integridade e foram excluídos como base de conclusões.

No código minificado do bundle principal, `tool-call` é uma variante de entry do outline com `id`, `status` e `summary`; seu nome deriva de `name`, com ícones `loading` para pending, `x-circle` para failed e `wrench` nos demais estados. A linha do outline pode expandir detalhes. Um renderer de transcript retorna `null` para essa variante. O coordinator contém um validador mais amplo com `name`, `argumentsJson`, `atMs` e resultado opcional. São observações estáticas sobre renderer/coordinator, não prova de exibição em runtime nem protocolo de ferramenta do CodexRouter. Referência detalhada: [CHAT_PROTOCOL.md](CHAT_PROTOCOL.md).

## Assets licenciados em build privado de teste (2026-10-19)

Com autorização explícita do usuário para copiar assets licenciados ao app de teste, uma inspeção REA estática adicional do ASAR (`055b087a…0e860`) e do CSS/bundles produziu parent Evidence `ev_f4a77bf9333c636d3cc299017b5862545874591afdc9ca0cbe9fcfc37cb3e7a9`, resumo `ev_74e426004b9c2a22c9fde1eb2b067f9be38ddf67e9dc32129047f23fea4d2041`. A análise é parcial, com 611 arquivos fora da seleção; presença de referência não significa que o recurso apareça em todo estado.

Foram copiados, com SHA-256 conferidos contra os bytes extraídos da referência, para `apps/desktop/src/assets/licensed-test/`:

- `cursor-icons-16-gwXtdAvu.woff2` (`3887767e…96054a`), declarada no CSS e pré-carregada pelo HTML original. A fonte é empacotada no build; o app ainda usa ícones SVG locais porque o mapeamento glyph/codepoint das telas relevantes não foi resolvido.
- `app-icon.png` (`79e6a73e…169ad2`), copiado de `app-icon-C7NKj2u7.png`, referenciado pelo bundle eager original. O app local o usa como marca e ícone do Dock em macOS.

As fontes `X-VF-C7NyO54W.woff2` e `XMono-VF-K4lk0ar0.woff2` já estavam no app e os hashes conferem com o original. Outros assets referenciados para onboarding, tela de computador ou integrações serão copiados quando essas superfícies forem implementadas. Esta inclusão destina-se ao app privado de teste, não a uma distribuição pública.
