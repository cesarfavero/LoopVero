# `GroupChatOrchestrator.run`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/group-messaging/README.md).

**Módulo:** `core/groups/group-chat-orchestrator.ts` · [README do módulo](../../../../../modules/core/groups/group-chat-orchestrator-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:737389-737525](../../../../../../reference/runtime/host-main.cjs#L737389-L737525) | `method` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737389-737525](../../../../../../reference/runtime/host-main.cjs#L737389-L737525) | 13 | 4 | 7 | 3 | 1 | 2 |

### host:737389

Chamadas escritas diretamente neste corpo: `Promise.allSettled`, `Promise.race`, `delivery.admit`, `forced.delete`, `forced.get`, `forcedTurns`, `heldTurns`, `mayStart`, `members2.filter`, `members2.flatMap`, `mergeForced`, `new Map`, `new Promise`, `new Set`, `settleNext`, `settled.shift`, `start`, `takeInbound`, `this.deps.isCurrent`, `this.deps.readHistory`, `this.deps.resolveMembers`, `this.deps.waitForInbound`.

Alvos de atribuição ou incremento: `failure3`, `trigger2.waves`, `turn`, `woken`.

Alvos de lançamento explícito: `turnFailure.error`.

SHA-256 do trecho: `6121d57710b0a4e8db36d545906c59aa6813f0cdbd911f51c66e252e85355583`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
