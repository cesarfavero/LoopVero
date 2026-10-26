# `GroupChatGlue.runGroupTurn`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/group-chat-glue.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/group-chat-glue-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:738518-738551](../../../../../../../reference/runtime/host-main.cjs#L738518-L738551) | `method` | sim | `session, epoch, options2 = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738518-738551](../../../../../../../reference/runtime/host-main.cjs#L738518-L738551) | 4 | 0 | 3 | 1 | 1 | 1 |

### host:738518

Chamadas escritas diretamente neste corpo: `describeAgentRunError`, `hostTrayTitle`, `new GroupChatOrchestrator`, `orchestrator.run`, `this.groupIdentityFor`, `this.groupOrchestratorDeps`, `this.localGroupConfig`, `this.tm.roster.emitAgentUpdate`, `this.tm.runLifecycle.endSessionRun`, `this.tm.trayErrors.pushError`.

Alvos de lançamento explícito: `result.failure.error`.

SHA-256 do trecho: `d7112a670001a1b431bbccb9f9495794e1353e9e97b6dcd9fcf09ffd6687a385`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
