# `createTurnMcpExecutorEntries`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/turn-composition/mcp-executor.ts` · [README do módulo](../../../../../../modules/core/runner/turn-composition/mcp-executor-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:585907-586246](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585907-L586246) | `FunctionDeclaration` | não | `host, turnToolHost, turn` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585907-586246](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585907-L586246) | 7 | 0 | 0 | 2 | 0 | 0 |

### evaluation:585907

Chamadas escritas diretamente neste corpo: `allowsSystemReminder`, `createMcpAppServerCheck`, `createNeedsAuthCards`, `host.mcpConfigJsonForTurn`, `host.promptGlue.createMcpTextSpiller`, `mcp.createExecutor`, `mcp.createStateExecutor`, `resourceEntry`, `turnToolHost.gates.needsAuthLiveState`, `turnToolHost.gates.needsAuthTurnHold`, `turnToolHost.gates.stdioSignInCard`, `turnToolHost.getConversationId`, `withAtlassianCloudId`, `withConnectorDraftCardReminder`, `withGmailToolGuards`, `withMcpAppNotShownReminder`, `withPlaywrightResultShaping`, `withPlaywrightSnapshotFallback`, `withPluginGuideReminderWhenOn`, `withServersNeedingAuth`, `withUnapprovableAttachmentForwardRefusal`, `wrapMcpExecutorForAudit`, `wrapMcpExecutorForLibraryDocs`.

SHA-256 do trecho: `1c999393f1fde08070c764bb25a10a9a3f117dd55cadcc5125a3c7b37a04644b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
