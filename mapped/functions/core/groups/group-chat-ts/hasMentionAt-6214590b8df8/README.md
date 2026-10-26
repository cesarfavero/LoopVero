# `hasMentionAt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/group-messaging/README.md).

**Módulo:** `core/groups/group-chat.ts` · [README do módulo](../../../../../modules/core/groups/group-chat-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:491291-491301](../../../../../../reference/runtime/host-main.cjs#L491291-L491301) | `FunctionDeclaration` | não | `lower, handle` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491291-491301](../../../../../../reference/runtime/host-main.cjs#L491291-L491301) | 1 | 1 | 0 | 2 | 0 | 0 |

### host:491291

Chamadas escritas diretamente neste corpo: `isWordChar`, `lower.indexOf`.

Alvos de atribuição ou incremento: `index`.

SHA-256 do trecho: `d2f6676cd169ee1dceb5cbbdd0a43781ceedacf97dc4b18bb4f913f64530e91e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
