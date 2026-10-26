# `groupPostFromWire`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/group-messaging/README.md).

**Módulo:** `core/groups/group-post.ts` · [README do módulo](../../../../../modules/core/groups/group-post-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:708244-708269](../../../../../../reference/runtime/host-main.cjs#L708244-L708269) | `FunctionDeclaration` | não | `wire, reportDegraded = () => { }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:708244-708269](../../../../../../reference/runtime/host-main.cjs#L708244-L708269) | 8 | 0 | 0 | 6 | 0 | 0 |

### host:708244

Chamadas escritas diretamente neste corpo: `decodeLoss`, `isDeliverableKind`, `isRoomSettleBoundKind`, `isUnknownRecord2`, `parseDeliverableGroupPost`, `parseJsonOrUndefined`, `reportDegraded`, `textGroupPost`.

SHA-256 do trecho: `08b51249cf117672eb8b6e7df6b26f57a700865c745784c8e16b04cbe363dae8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
