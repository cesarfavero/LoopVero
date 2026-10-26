# `groupPostText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/group-messaging/README.md).

**Módulo:** `core/groups/group-post.ts` · [README do módulo](../../../../../modules/core/groups/group-post-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:708128-708199](../../../../../../reference/runtime/host-main.cjs#L708128-L708199) | `FunctionDeclaration` | não | `message` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:708128-708199](../../../../../../reference/runtime/host-main.cjs#L708128-L708199) | 35 | 0 | 0 | 32 | 0 | 0 |

### host:708128

Chamadas escritas diretamente neste corpo: `.join`, `message.approval.items.map`, `message.connectors.join`, `message.credentialRequest.entries.map`, `message.draft.to.join`, `message.request.secrets.map`, `message.title.trim`, `summarizeWidget`.

SHA-256 do trecho: `0d67a2d280f3c9049dc82a6e67c8b488a0a5be8f2a779e1e8aa14ae329a5b24e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
