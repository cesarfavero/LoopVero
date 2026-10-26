# `createSandBrowserOpRunner/sensitiveRequest`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-browser-fill.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:726814-726891](../../../../../../../reference/runtime/host-main.cjs#L726814-L726891) | `ArrowFunctionExpression` | sim | `ctx, encoded, op` |
| [evaluation:561429-561506](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561429-L561506) | `ArrowFunctionExpression` | sim | `ctx, encoded, op` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726814-726891](../../../../../../../reference/runtime/host-main.cjs#L726814-L726891) | 13 | 1 | 4 | 6 | 0 | 0 |
| [evaluation:561429-561506](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561429-L561506) | 13 | 1 | 4 | 6 | 0 | 0 |

### host:726814

Chamadas escritas diretamente neste corpo: `.execute`, `Date.now`, `deps.agentBox.downloadFile.bind`, `deps.resourceAccessor.get`, `downloadTerminal`, `new BackgroundShellSpawnArgs`, `new WriteShellStdinArgs`, `parseDriverResponse`, `parseShellTerminalFooter`.

SHA-256 do trecho: `04d7108638ddfc194ddc2ff6e52ec6ab181bfb77477724ef0ba8e82507355696`.

### evaluation:561429

Chamadas escritas diretamente neste corpo: `.execute`, `Date.now`, `deps.agentBox.downloadFile.bind`, `deps.resourceAccessor.get`, `downloadTerminal`, `new BackgroundShellSpawnArgs`, `new WriteShellStdinArgs`, `parseDriverResponse`, `parseShellTerminalFooter`.

SHA-256 do trecho: `94408609373078d595545f40051cdb85925a10f61c444b2813474ddee317d152`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
