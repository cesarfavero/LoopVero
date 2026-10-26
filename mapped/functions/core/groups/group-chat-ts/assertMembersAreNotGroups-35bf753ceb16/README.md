# `assertMembersAreNotGroups`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/group-messaging/README.md).

**Módulo:** `core/groups/group-chat.ts` · [README do módulo](../../../../../modules/core/groups/group-chat-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:491275-491278](../../../../../../reference/runtime/host-main.cjs#L491275-L491278) | `FunctionDeclaration` | não | `requestedMemberIds, isGroupId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491275-491278](../../../../../../reference/runtime/host-main.cjs#L491275-L491278) | 1 | 0 | 0 | 0 | 1 | 0 |

### host:491275

Chamadas escritas diretamente neste corpo: `.filter`, `new SandGroupNestingError`, `new Set`.

Alvos de lançamento explícito: `SandGroupNestingError`.

SHA-256 do trecho: `37c2248d3f6eabec9a8a3a9fe5767b7b80b3ec3fbd1d413035475bdcbadf6334`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
