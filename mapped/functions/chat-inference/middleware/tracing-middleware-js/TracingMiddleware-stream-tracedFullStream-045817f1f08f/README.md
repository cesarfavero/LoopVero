# `TracingMiddleware.stream/tracedFullStream`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/inference/README.md).

**Módulo:** `chat-inference/middleware/tracing-middleware.js` · [README do módulo](../../../../../modules/chat-inference/middleware/tracing-middleware-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:617865-617892](../../../../../../reference/runtime/host-main.cjs#L617865-L617892) | `FunctionExpression` | sim | `(nenhum)` |
| [evaluation:287236-287263](../../../../../../reference/runtime/sand-eval-runner.cjs#L287236-L287263) | `FunctionExpression` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617865-617892](../../../../../../reference/runtime/host-main.cjs#L617865-L617892) | 3 | 1 | 0 | 0 | 1 | 1 |
| [evaluation:287236-287263](../../../../../../reference/runtime/sand-eval-runner.cjs#L287236-L287263) | 3 | 1 | 0 | 0 | 1 | 1 |

### host:617865

Chamadas escritas diretamente neste corpo: `performance.now`, `ttfToolCallHistogram.histogram`, `ttftHistogram.histogram`.

Alvos de atribuição ou incremento: `firstTokenTime`, `firstToolCallTime`, `seenFirstToken`, `seenFirstToolCall`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `b0119fc6efed7ce1c9599477df4b36990a6824c1915084e556465bcf1aa507de`.

### evaluation:287236

Chamadas escritas diretamente neste corpo: `performance.now`, `ttfToolCallHistogram.histogram`, `ttftHistogram.histogram`.

Alvos de atribuição ou incremento: `firstTokenTime`, `firstToolCallTime`, `seenFirstToken`, `seenFirstToolCall`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `e11241d5c4cfb0488a6cff595faee58f32607c18385ce09e51e047ced1fe6184`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
