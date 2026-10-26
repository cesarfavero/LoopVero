# `groupLineAudience`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/group-messaging/README.md).

**Módulo:** `core/groups/group-chat.ts` · [README do módulo](../../../../../modules/core/groups/group-chat-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:491361-491370](../../../../../../reference/runtime/host-main.cjs#L491361-L491370) | `FunctionDeclaration` | não | `line, members2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491361-491370](../../../../../../reference/runtime/host-main.cjs#L491361-L491370) | 5 | 0 | 0 | 2 | 0 | 0 |

### host:491361

Chamadas escritas diretamente neste corpo: `.map`, `members2.filter`, `named2.add`, `named2.delete`, `new Set`, `parseGroupAddressees`, `parseGroupMentions`.

SHA-256 do trecho: `e88f7924c238b30cabc90e5796390ea7e1c71260f2727f4dc591205eb93d3d89`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
