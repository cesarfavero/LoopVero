# `RosterEmit.emitAgentUpdate`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/roster-emit.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/roster-emit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:739061-739064](../../../../../../../reference/runtime/host-main.cjs#L739061-L739064) | `method` | não | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739061-739064](../../../../../../../reference/runtime/host-main.cjs#L739061-L739064) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:739061

Chamadas escritas diretamente neste corpo: `this.pendingDeltaAgentIds.add`, `this.scheduleCoalescedEmit`.

SHA-256 do trecho: `e17e3366b34b3cc0d7a851642b60f6ac7b45fc48d456c12f2969ab9eaa196048`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
