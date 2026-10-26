# `memberMentionHandles`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/group-messaging/README.md).

**Módulo:** `core/groups/group-chat.ts` · [README do módulo](../../../../../modules/core/groups/group-chat-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:491279-491286](../../../../../../reference/runtime/host-main.cjs#L491279-L491286) | `FunctionDeclaration` | não | `name18` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491279-491286](../../../../../../reference/runtime/host-main.cjs#L491279-L491286) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:491279

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `handles.add`, `lower.replace`, `lower.split`, `name18.trim`, `new Set`.

SHA-256 do trecho: `2b2ef8fd17e0f3e1837300cdf9a46d2eb18c582ed38490e1f416445d2c56b54d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
