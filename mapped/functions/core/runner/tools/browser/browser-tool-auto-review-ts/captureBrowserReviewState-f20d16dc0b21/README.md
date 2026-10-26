# `captureBrowserReviewState`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/tools/browser/browser-tool-auto-review.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/browser-tool-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:743432-743495](../../../../../../../../reference/runtime/host-main.cjs#L743432-L743495) | `FunctionDeclaration` | sim | `args` |
| [evaluation:516283-516346](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516283-L516346) | `FunctionDeclaration` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:743432-743495](../../../../../../../../reference/runtime/host-main.cjs#L743432-L743495) | 8 | 0 | 2 | 2 | 4 | 2 |
| [evaluation:516283-516346](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516283-L516346) | 8 | 0 | 2 | 2 | 4 | 2 |

### host:743432

Chamadas escritas diretamente neste corpo: `.execute`, `args.ctx.withTimeoutAndCancel`, `args.resolveDisplayNumber`, `args.resourceAccessor.get`, `buildHostShellArgs`, `cancelProbe`, `captureFailed`, `classifyNavigationProbeResult`, `computeSandComputerPageStateIdentity`, `navigationProbeCommand`, `new SandBrowserAutoReviewBlockedError`, `probeTimedOut`, `resolveBrowserTargetPageUrl`, `statePart.trim`, `stdout.indexOf`, `stdout.slice`, `withTimeout`.

Alvos de atribuição ou incremento: `captureAborted`, `displayNumber`, `result`.

Alvos de lançamento explícito: `SandBrowserAutoReviewBlockedError`, `captureFailed`.

SHA-256 do trecho: `7f4b3aa01c62ea8171f835cf8c418daae0051a2a263fd354363953a8d8342682`.

### evaluation:516283

Chamadas escritas diretamente neste corpo: `.execute`, `args.ctx.withTimeoutAndCancel`, `args.resolveDisplayNumber`, `args.resourceAccessor.get`, `buildHostShellArgs`, `cancelProbe`, `captureFailed`, `classifyNavigationProbeResult`, `computeSandComputerPageStateIdentity`, `navigationProbeCommand`, `new SandBrowserAutoReviewBlockedError`, `probeTimedOut`, `resolveBrowserTargetPageUrl`, `statePart.trim`, `stdout.indexOf`, `stdout.slice`, `withTimeout`.

Alvos de atribuição ou incremento: `captureAborted`, `displayNumber`, `result`.

Alvos de lançamento explícito: `SandBrowserAutoReviewBlockedError`, `captureFailed`.

SHA-256 do trecho: `7f4b3aa01c62ea8171f835cf8c418daae0051a2a263fd354363953a8d8342682`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
