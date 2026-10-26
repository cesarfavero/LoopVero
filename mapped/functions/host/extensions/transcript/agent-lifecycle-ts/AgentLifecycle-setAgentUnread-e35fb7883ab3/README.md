# `AgentLifecycle.setAgentUnread`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/agent-lifecycle.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/agent-lifecycle-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:733804-733817](../../../../../../../reference/runtime/host-main.cjs#L733804-L733817) | `method` | sim | `agentId, isUnread, atMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733804-733817](../../../../../../../reference/runtime/host-main.cjs#L733804-L733817) | 2 | 0 | 3 | 0 | 0 | 0 |

### host:733804

Chamadas escritas diretamente neste corpo: `active.db.markRead`, `active.db.markUnread`, `this.tm.roster.emitAgentUpdate`, `this.tm.sessionStore.seedSessionActivityFromDbMtime`, `this.tm.sessionStore.setSessionUnread`.

SHA-256 do trecho: `35cfab606de547667aae8ad4e8c963b26cf19a98d0dde5397d640bbe4f247634`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
