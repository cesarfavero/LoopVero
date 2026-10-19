# Design system original: evidência inicial

## Fonte e escopo

- Aplicativo: Grok Bot 0.71.2.
- ASAR: `Grok Bot.app/Contents/Resources/app.asar`, SHA-256 `055b087a9bacc3be4e5f80c468edf2fd031dd5b928ab2e7da7e01dd10de0e860`.
- CSS: `dist/renderer/assets/index-DkV65EBE.css`, SHA-256 `30beefeee1dd1b707732f529954a6ab7b9be5bbb43fa2ec4ac9525c4dee7ed5a`.
- Extração: cópia local ignorada em `.research/reference-electron/`; análise estática, sem editar ou executar o app original.
- Autoridade: os valores declarados no CSS são **recuperados**. Isso não prova que uma rota específica os use, nem qual tema está ativo no primeiro boot.

## Tipografia

| Propriedade | Evidência | Estado |
| --- | --- | --- |
| `XVF`, peso variável 200–800 | `@font-face`, arquivo `X-VF-C7NyO54W.woff2` | Recuperada |
| `XVF Mono`, peso variável 200–800 | `@font-face`, arquivo `XMono-VF-K4lk0ar0.woff2` | Recuperada |
| `cursor-icons` | `@font-face`, arquivo `cursor-icons-16-gwXtdAvu.woff2` | Recuperada |
| Stack sans global | Root CSS referencia `--cursor-font-family` com fallbacks do sistema; classes `ui-*` também referenciam SF Pro | Recuperada, uso por superfície ainda precisa ser rastreado |
| Escala de tamanho, line-height e letter-spacing | Existem regras por componente e tokens em camadas distintas | Pendente de extração por superfície; sem estimativas globais |

As fontes de teste autorizadas estão copiadas em `apps/desktop/src/assets/`. Sua declaração local não força XVF como fonte global: é necessário provar o mapeamento de tokens e a família efetivamente aplicada a cada componente.

## Cores e temas

O CSS tem camadas `reset`, `anysphere.tokens`, `anysphere.scss`, `anysphere.stylex`, `glass.scss`, `glass.stylex` e `overrides`. Os valores abaixo são **recuperados** da paleta clara declarada em `:root,.sand-1wuigm2`:

| Token | Valor | Estado |
| --- | --- | --- |
| `--sand-bg-pane` | `#ffffff` | Recuperado |
| `--sand-bg-chrome` | `#fcfcfc` | Recuperado |
| `--sand-bg-sidebar` | `#f5f5f5` | Recuperado |
| `--sand-bg-primary` | `#1c1c1c` | Recuperado |
| `--cursor-accent` | `#599CE7` | Recuperado |
| `--cursor-base` | `#F0F0F0` | Recuperado |
| `--cursor-added` | `#70B489` | Recuperado |

O stylesheet também contém tokens para superfícies elevadas, estados hover/active/focus, bordas, perigo, Git, inputs e media. Não os reduza a esta pequena amostra. A paleta escura, a preferência persistida e o tema realmente ativo no boot ainda não foram provados.

## Layout, medidas e densidade

- O CSS define largura de sidebar via `--sand-sidebar-width`; um fallback de `280px` e largura mínima de chat `424px` aparecem em cálculos de layout. **Recuperados como valores de fallback**, não como medidas invariáveis da janela.
- Há media queries em diversos limiares, inclusive 480, 500, 560, 639/640, 768, 800, 1024, 1279 e 1280 px, além de estados por altura, hover, reduced motion e forced colors. **Recuperados**, mas a composição de cada rota precisa ser associada às regras correspondentes.
- O bundle descreve panes independentes, layouts de thread takeover/split/held, sidebar, info pane e composer. Ver [trace do renderer](../research/RENDERER_TRACE.md). A composição alcançável e as medidas por estado seguem em investigação.
- Grid, espaçamento, dimensões de cards, raios e sombras: são declarados no CSS por classes/tokens, porém ainda **não mapeados sistematicamente** para cada componente. Não copiar valores aproximados do shell provisório como se fossem os do original.

## Ícones, camadas e movimento

- A fonte de ícones `cursor-icons` e o conjunto de classes/SVGs empacotado estão **recuperados**; o catálogo e o mapeamento dos controles ainda não estão completos.
- O CSS inclui diversas animações keyframe com nomes gerados e regras `prefers-reduced-motion`. Nomes e presença são **recuperados**; sem identificar componente, duração e easing associados, não há especificação de movimento verificada.
- A hierarquia de z-index, portais, overlays e stacking contexts está pendente de associação entre seletores e módulos React.

## Medido e estimado

- **Medido:** nenhum estado de tela do aplicativo original nesta etapa. Não há screenshot comparável autenticado neste documento.
- **Estimado:** nenhum valor declarado como medida. Os fallbacks CSS são documentados como fallbacks, não como estimativas de viewport.
- **Pendente:** captura pareada do original e da reconstrução, na mesma resolução, escala, tema, conteúdo e estado. Até essa comparação, nenhuma superfície é `VISUALLY_VERIFIED`.

## Próximo trabalho

1. Associar tokens e seletores a componentes/imports alcançáveis no renderer.
2. Recuperar o boot snapshot e determinar tema, escala e layout iniciais.
3. Capturar estados de referência do aplicativo original e medir panes, composer, tipografia, scroll e overlays.
4. Comparar cada tela com screenshot diff e registrar diferenças na matriz de paridade.
