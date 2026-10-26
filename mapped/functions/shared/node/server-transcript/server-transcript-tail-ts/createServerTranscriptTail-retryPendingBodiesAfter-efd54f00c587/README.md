# `createServerTranscriptTail/retryPendingBodiesAfter`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/node/server-transcript/server-transcript-tail.ts` · [README do módulo](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:713453-713464](../../../../../../../reference/runtime/host-main.cjs#L713453-L713464) | `ArrowFunctionExpression` | sim | `state, handle` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:713453-713464](../../../../../../../reference/runtime/host-main.cjs#L713453-L713464) | 2 | 0 | 2 | 2 | 1 | 1 |

### host:713453

Chamadas escritas diretamente neste corpo: `retryPendingBodies`.

Alvos de atribuição ou incremento: `state.bodyRetry`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `f886ab1b171841c42643aa6517064d8d3a85af05be683fb875f12abd7893b6dd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
