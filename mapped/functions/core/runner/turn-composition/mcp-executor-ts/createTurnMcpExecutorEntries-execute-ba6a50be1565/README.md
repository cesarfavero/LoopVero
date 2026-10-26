# `createTurnMcpExecutorEntries/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/turn-composition/mcp-executor.ts` · [README do módulo](../../../../../../modules/core/runner/turn-composition/mcp-executor-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:586026-586236](../../../../../../../reference/runtime/sand-eval-runner.cjs#L586026-L586236) | `ArrowFunctionExpression` | sim | `ctx, args, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586026-586236](../../../../../../../reference/runtime/sand-eval-runner.cjs#L586026-L586236) | 22 | 0 | 8 | 5 | 1 | 5 |

### evaluation:586026

Chamadas escritas diretamente neste corpo: `.get`, `PERSONAL_BANK_AND_BROKERAGE_CONNECTOR_TAGS.has`, `appendNoteToMcpResult`, `boundedMcpToolName`, `ctx.get`, `ctx.with`, `describeResultNote`, `errorLogTag`, `grokBotSignedOutNeedsAuthMessage`, `guidedMcpExecutor.execute`, `host.autoReviewGate.assertNoPendingApproval`, `host.observation.beginMcpExecObservation`, `mainTurnSignedOut`, `mcp.getConnectorAuthStates`, `mcpErrorClassOf`, `mcpErrorResultClassOf`, `mcpResultErrorDetail`, `mcpThrownErrorDetail`, `mcpToolCallTarget`, `needsAuthHold.heldError`, `new McpError`, `new McpResult`, `new SystemReminder`, `playwrightBoxMcpWindowIndex`, `readSandAgentLoopModel`, `reportHostDiagnostic`, `resolveServerHost`, `result.result.value.systemReminders.push`, `scmWriteBlock`, `settleMcpExecObservation`, `signedOutMcpError`, `signedOutToolResultError`, `surfaceNeedsAuthCard`, `surfacePendingSignInCard.bind`, `systemReminderBody`, `toolCallTransientKindOf`, `turnToolHost.gates.driveTranslatorToolTags`, `turnToolHost.gates.financialDataReminder`, `watchStdioSignInDuring`.

Alvos de atribuição ou incremento: `probes`, `result`, `result.result.value.error`, `signInNote`, `signedOut`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `10a109cc9e32907521fbf64e203c46f07dd07da6e0bae946bfffa7f17b74ded8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
