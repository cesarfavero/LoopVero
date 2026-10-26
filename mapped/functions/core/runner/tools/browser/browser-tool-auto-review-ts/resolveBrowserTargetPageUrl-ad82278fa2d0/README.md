# `resolveBrowserTargetPageUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/tools/browser/browser-tool-auto-review.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/browser-tool-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:743413-743431](../../../../../../../../reference/runtime/host-main.cjs#L743413-L743431) | `FunctionDeclaration` | não | `{   probeStdout,   stateJson,   viewId }` |
| [evaluation:516264-516282](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516264-L516282) | `FunctionDeclaration` | não | `{   probeStdout,   stateJson,   viewId }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:743413-743431](../../../../../../../../reference/runtime/host-main.cjs#L743413-L743431) | 5 | 1 | 0 | 3 | 0 | 0 |
| [evaluation:516264-516282](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516264-L516282) | 5 | 1 | 0 | 3 | 0 | 0 |

### host:743413

Chamadas escritas diretamente neste corpo: `normalizeNavigationUrl`, `parseBrowserViewState`, `parseNavigationProbeOutput`, `state.urls.get`, `state.views.get`.

SHA-256 do trecho: `74583fccad33b545a74f755752c492b38eb1d384408665b2681416eeb785e19a`.

### evaluation:516264

Chamadas escritas diretamente neste corpo: `normalizeNavigationUrl`, `parseBrowserViewState`, `parseNavigationProbeOutput`, `state.urls.get`, `state.views.get`.

SHA-256 do trecho: `74583fccad33b545a74f755752c492b38eb1d384408665b2681416eeb785e19a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
