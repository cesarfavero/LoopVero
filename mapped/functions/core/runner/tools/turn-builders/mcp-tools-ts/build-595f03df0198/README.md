# `build`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/turn-builders/mcp-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/turn-builders/mcp-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:780730-780768](../../../../../../../../reference/runtime/host-main.cjs#L780730-L780768) | `ArrowFunctionExpression` | não | `{     host,     turn,     decisions,     mcpMetaToolNames   }` |
| [evaluation:580972-581051](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L580972-L581051) | `ArrowFunctionExpression` | não | `ctx` |
| [evaluation:581068-581106](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581068-L581106) | `ArrowFunctionExpression` | não | `{     host,     turn,     decisions,     mcpMetaToolNames   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780730-780768](../../../../../../../../reference/runtime/host-main.cjs#L780730-L780768) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:580972-581051](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L580972-L581051) | 11 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:581068-581106](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581068-L581106) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:780730

Chamadas escritas diretamente neste corpo: `createMcpManagementTools`, `host.gates.webFetchDisabled`, `host.teamBot`.

SHA-256 do trecho: `6328a44e655018d1f1d274b5af0b1cff0f51272312781f7e25e6abbe6083d946`.

### evaluation:580972

Chamadas escritas diretamente neste corpo: `atlassianHostFilledArguments`, `createCallMcpTool`, `createGetMcpToolsTool`, `createSandAutoReviewMcpGate`, `createSandMcpMetaToolOptions`, `ctx.decisions.offers`, `mcpToolPermissionResolver`, `readonlyCallMcpToolOptions`, `targetedNeedsGrantRequestForTurn`, `turn.externalSendCheckFor`, `turn.getAutoReviewUserInstructions`, `withoutPlaywrightBoxServers`.

SHA-256 do trecho: `7dc328a06fd69b49a847127202db831ebb4bc7ef251505d883ac894c8358884d`.

### evaluation:581068

Chamadas escritas diretamente neste corpo: `createMcpManagementTools`, `host.gates.webFetchDisabled`, `host.teamBot`.

SHA-256 do trecho: `6328a44e655018d1f1d274b5af0b1cff0f51272312781f7e25e6abbe6083d946`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
