# `createTurnMachineTools`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/turn-builders/turn-tool-context.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/turn-builders/turn-tool-context-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:569441-569540](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L569441-L569540) | `FunctionDeclaration` | não | `host, turn, props, shared` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:569441-569540](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L569441-L569540) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:569441

Chamadas escritas diretamente neste corpo: `createAwaitTool`, `createFileTransferAudit`, `createReadTool`, `createSandAutoReviewShellGate`, `createShellTool`, `host.createFileTransferController`, `host.getConversationId`, `host.hasShellUserComputer`, `host.hasUserComputer`, `new CombinedResourceAccessor`, `props.resourceAccessor.get`, `readonlyWakeUserMachineOffers`, `resourceEntry`, `sandMaxBlockUntilMs`, `scopeLocalTool`, `turn.getAutoReviewUserInstructions`, `withRecordedToolCallNames`, `wrapReadExecutorForFileTransferAudit`.

SHA-256 do trecho: `a33be9459221c97bf076b16e0506f01f70f32daccd53a8c5995129103fd6fb8f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
