# `groupReplyTarget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/group-messaging/README.md).

**Módulo:** `core/groups/group-history.ts` · [README do módulo](../../../../../modules/core/groups/group-history-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:737625-737644](../../../../../../reference/runtime/host-main.cjs#L737625-L737644) | `FunctionDeclaration` | não | `entriesById, replyToId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737625-737644](../../../../../../reference/runtime/host-main.cjs#L737625-L737644) | 6 | 0 | 0 | 3 | 0 | 0 |

### host:737625

Chamadas escritas diretamente neste corpo: `.slice`, `.trim`, `entriesById.get`, `groupPostText`, `rawQuote.replace`.

Alvos de atribuição ou incremento: `rawQuote`, `speaker`.

SHA-256 do trecho: `c903a1b9f0c5385798e29ff7364ff19f40b584439af37c9635fa47458618e9b1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
