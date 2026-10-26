# `prewarmPlaywrightServer`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/sand-browser-tool-sets.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/sand-browser-tool-sets-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:751520-751580](../../../../../../../../reference/runtime/host-main.cjs#L751520-L751580) | `FunctionDeclaration` | sim | `args` |
| [evaluation:524371-524431](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L524371-L524431) | `FunctionDeclaration` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751520-751580](../../../../../../../../reference/runtime/host-main.cjs#L751520-L751580) | 5 | 1 | 5 | 3 | 1 | 1 |
| [evaluation:524371-524431](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L524371-L524431) | 5 | 1 | 5 | 3 | 1 | 1 |

### host:751520

Chamadas escritas diretamente neste corpo: `args.attachBoxServers`, `args.prepareChrome`, `boxAgentWindowIndex`, `createBoxSandMcpExec`, `listServer`, `performance.now`, `playwrightBoxMcpServerName`, `playwrightServerStatusClass`, `reportHostDiagnostic`, `serverReady`, `waitBeforeRecheck`.

Alvos de atribuição ou incremento: `listToolsStartedAt`, `recheck`, `server`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `2a36f6fe9f1f35d0984fb8f9dac249949602bf86a157009f97281557250c1a22`.

### evaluation:524371

Chamadas escritas diretamente neste corpo: `args.attachBoxServers`, `args.prepareChrome`, `boxAgentWindowIndex`, `createBoxSandMcpExec`, `listServer`, `performance.now`, `playwrightBoxMcpServerName`, `playwrightServerStatusClass`, `reportHostDiagnostic`, `serverReady`, `waitBeforeRecheck`.

Alvos de atribuição ou incremento: `listToolsStartedAt`, `recheck`, `server`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `7690c7e468624ece9fd5df108f8b400ba24b9ae6aef7cca785c3b26f0e25fd79`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
