# `createServerTranscriptTail/scheduleBodyRetry`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/node/server-transcript/server-transcript-tail.ts` · [README do módulo](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:713445-713452](../../../../../../../reference/runtime/host-main.cjs#L713445-L713452) | `ArrowFunctionExpression` | não | `state, attempt` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:713445-713452](../../../../../../../reference/runtime/host-main.cjs#L713445-L713452) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:713445

Chamadas escritas diretamente neste corpo: `acceptsAgent`, `bodyRetryBackoff.schedule`, `retryPendingBodiesAfter`.

Alvos de atribuição ou incremento: `state.bodyRetry`.

SHA-256 do trecho: `6985f0540e0f032a545b6677e9a26402f7df357a15646cecc0f1e7a030696e65`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
