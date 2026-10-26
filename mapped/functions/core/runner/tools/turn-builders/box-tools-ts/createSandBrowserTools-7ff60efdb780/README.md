# `createSandBrowserTools`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/turn-builders/box-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/turn-builders/box-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:778908-778937](../../../../../../../../reference/runtime/host-main.cjs#L778908-L778937) | `FunctionDeclaration` | não | `{   host,   decisions,   turn,   props,   resolveAgentDisplay,   extractAutoReviewConversationContext: extractAutoReviewConversationContext3 }` |
| [evaluation:578642-578671](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578642-L578671) | `FunctionDeclaration` | não | `{   host,   decisions,   turn,   props,   resolveAgentDisplay,   extractAutoReviewConversationContext: extractAutoReviewConversationContext3 }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:778908-778937](../../../../../../../../reference/runtime/host-main.cjs#L778908-L778937) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:578642-578671](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578642-L578671) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:778908

Chamadas escritas diretamente neste corpo: `.map`, `SAND_BROWSER_TOOL_SETS[computed].createTools`, `boxBrowserWindowDeps`, `browserAutoReviewConfig`, `playwrightRunCodeToolDeps`, `resolveSandBrowserSurface`, `sandBrowserArmDeps`, `secureValueGuardForHost`.

SHA-256 do trecho: `5941f74ff7f5e48cb93241e8a7cc1d5c4ad15b474822e493145891565232ce1f`.

### evaluation:578642

Chamadas escritas diretamente neste corpo: `.map`, `SAND_BROWSER_TOOL_SETS[computed].createTools`, `boxBrowserWindowDeps`, `browserAutoReviewConfig`, `playwrightRunCodeToolDeps`, `resolveSandBrowserSurface`, `sandBrowserArmDeps`, `secureValueGuardForHost`.

SHA-256 do trecho: `5941f74ff7f5e48cb93241e8a7cc1d5c4ad15b474822e493145891565232ce1f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
