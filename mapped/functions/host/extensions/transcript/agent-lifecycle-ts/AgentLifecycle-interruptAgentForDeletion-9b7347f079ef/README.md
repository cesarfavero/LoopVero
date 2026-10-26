# `AgentLifecycle.interruptAgentForDeletion`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/agent-lifecycle.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/agent-lifecycle-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:733756-733761](../../../../../../../reference/runtime/host-main.cjs#L733756-L733761) | `method` | sim | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733756-733761](../../../../../../../reference/runtime/host-main.cjs#L733756-L733761) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:733756

Chamadas escritas diretamente neste corpo: `this.tm.groupChat.cancelTemporalMemberTurns`, `this.tm.runLifecycle.drainExclusiveRuns`, `this.tm.sessions.deletedAgentIds.add`, `this.tm.sessions.forgetStoredIdsAtDuplicate`.

SHA-256 do trecho: `c5713a3b1230816647d005afaae66470de6998f488cc73f95e02aeef93e6df08`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
