# `createServerTranscriptIndexer/retryAfter`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/server-agent-proxy/server-transcript-indexer.ts` · [README do módulo](../../../../../../modules/host/extensions/server-agent-proxy/server-transcript-indexer-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:714253-714263](../../../../../../../reference/runtime/host-main.cjs#L714253-L714263) | `ArrowFunctionExpression` | sim | `current2, agentId, state, delay5` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714253-714263](../../../../../../../reference/runtime/host-main.cjs#L714253-L714263) | 2 | 0 | 1 | 2 | 1 | 1 |

### host:714253

Chamadas escritas diretamente neste corpo: `request5`.

Alvos de atribuição ou incremento: `state.retry`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `e23492ce6a6d54b2665d3a028a02456e6f95e786e64813f1704aba23a9b81e91`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
