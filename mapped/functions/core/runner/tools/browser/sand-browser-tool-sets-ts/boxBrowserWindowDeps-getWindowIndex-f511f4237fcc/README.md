# `boxBrowserWindowDeps/getWindowIndex`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/sand-browser-tool-sets.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/sand-browser-tool-sets-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:751476-751483](../../../../../../../../reference/runtime/host-main.cjs#L751476-L751483) | `ArrowFunctionExpression` | sim | `ctx` |
| [evaluation:524327-524334](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L524327-L524334) | `ArrowFunctionExpression` | sim | `ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751476-751483](../../../../../../../../reference/runtime/host-main.cjs#L751476-L751483) | 0 | 0 | 2 | 1 | 0 | 0 |
| [evaluation:524327-524334](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L524327-L524334) | 0 | 0 | 2 | 1 | 0 | 0 |

### host:751476

Chamadas escritas diretamente neste corpo: `boxAgentWindowIndex`, `host.playwright.waitForPreparedChrome`, `host.remoteBox.ensureReady`, `host.resolveBoxId`, `withSandBoxTouchReason`.

SHA-256 do trecho: `0b9ca882080e382a55601582d8c9d9155e0e7b88862cb1fa96be0f0ada1de09c`.

### evaluation:524327

Chamadas escritas diretamente neste corpo: `boxAgentWindowIndex`, `host.playwright.waitForPreparedChrome`, `host.remoteBox.ensureReady`, `host.resolveBoxId`, `withSandBoxTouchReason`.

SHA-256 do trecho: `0b9ca882080e382a55601582d8c9d9155e0e7b88862cb1fa96be0f0ada1de09c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
