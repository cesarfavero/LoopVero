# `createStreamAttempt/run`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/stream-attempt.ts` · [README do módulo](../../../../../modules/core/runner/stream-attempt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:590386-590410](../../../../../../reference/runtime/sand-eval-runner.cjs#L590386-L590410) | `ArrowFunctionExpression` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590386-590410](../../../../../../reference/runtime/sand-eval-runner.cjs#L590386-L590410) | 3 | 0 | 1 | 1 | 1 | 1 |

### evaluation:590386

Chamadas escritas diretamente neste corpo: `host.reportTurnRetry`, `isRetryableProviderError`, `runBoundedTurn`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `44764061af7f18a7ae6a926ee49aed3b1e66fbc0de3195366c9864da815c3cb0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
