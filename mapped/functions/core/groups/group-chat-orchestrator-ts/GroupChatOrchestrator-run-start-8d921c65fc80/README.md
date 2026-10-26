# `GroupChatOrchestrator.run/start`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/group-messaging/README.md).

**Módulo:** `core/groups/group-chat-orchestrator.ts` · [README do módulo](../../../../../modules/core/groups/group-chat-orchestrator-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:737418-737458](../../../../../../reference/runtime/host-main.cjs#L737418-L737458) | `ArrowFunctionExpression` | não | `member, force` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737418-737458](../../../../../../reference/runtime/host-main.cjs#L737418-L737458) | 4 | 0 | 0 | 0 | 0 | 0 |

### host:737418

Chamadas escritas diretamente neste corpo: `.then`, `buildGroupTurnPrompt`, `delivery.noteDispatched`, `delivery.unseen`, `force.hiddenPrompts.join`, `members2.filter`, `pending.add`, `this.deps.readHistory`, `this.deps.runMemberTurn`, `trigger2.caughtUp.add`, `working.set`.

Alvos de atribuição ou incremento: `dispatches`.

SHA-256 do trecho: `e0c5364a1ec3ca9cca4bfcb06556a112be189940d8189168ae51c8b031ff404d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
