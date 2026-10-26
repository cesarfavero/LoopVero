# `memberNameHandles`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/group-messaging/README.md).

**Módulo:** `core/groups/group-chat.ts` · [README do módulo](../../../../../modules/core/groups/group-chat-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:491323-491331](../../../../../../reference/runtime/host-main.cjs#L491323-L491331) | `FunctionDeclaration` | não | `name18` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491323-491331](../../../../../../reference/runtime/host-main.cjs#L491323-L491331) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:491323

Chamadas escritas diretamente neste corpo: `.replace`, `.toLowerCase`, `handles.add`, `isDistinctNameWord`, `lower.split`, `name18.trim`, `new Set`.

SHA-256 do trecho: `8ce74dcdb683477da9fb174a9d7c33ed351b41e9a4647e3eb193787c5775ee72`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
