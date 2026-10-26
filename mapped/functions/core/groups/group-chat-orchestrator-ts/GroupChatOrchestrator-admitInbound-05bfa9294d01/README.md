# `GroupChatOrchestrator.admitInbound`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/group-messaging/README.md).

**Módulo:** `core/groups/group-chat-orchestrator.ts` · [README do módulo](../../../../../modules/core/groups/group-chat-orchestrator-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:737532-737535](../../../../../../reference/runtime/host-main.cjs#L737532-L737535) | `method` | não | `members2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737532-737535](../../../../../../reference/runtime/host-main.cjs#L737532-L737535) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:737532

Chamadas escritas diretamente neste corpo: `new Set`, `this.deps.delivery.admit`, `this.deps.readHistory`.

SHA-256 do trecho: `e1fffda2cb7f9c9557121e17fcf0cb6a02fab275493393d7906cc62105759b62`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
