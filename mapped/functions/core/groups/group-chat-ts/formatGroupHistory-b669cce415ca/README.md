# `formatGroupHistory`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/group-messaging/README.md).

**Módulo:** `core/groups/group-chat.ts` · [README do módulo](../../../../../modules/core/groups/group-chat-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:491396-491400](../../../../../../reference/runtime/host-main.cjs#L491396-L491400) | `FunctionDeclaration` | não | `history, viewerId, limit3 = GROUP_PROMPT_HISTORY_LIMIT` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491396-491400](../../../../../../reference/runtime/host-main.cjs#L491396-L491400) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:491396

Chamadas escritas diretamente neste corpo: `.join`, `history.slice`, `recent.map`.

SHA-256 do trecho: `ce967c55a7a1218fad892260f2862dd9695f67f2b934b1c011e66087fc792bda`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
