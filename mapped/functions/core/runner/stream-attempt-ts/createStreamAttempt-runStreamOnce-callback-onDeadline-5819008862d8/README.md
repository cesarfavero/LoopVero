# `createStreamAttempt/runStreamOnce/<callback>/onDeadline`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/stream-attempt.ts` · [README do módulo](../../../../../modules/core/runner/stream-attempt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:590268-590288](../../../../../../reference/runtime/sand-eval-runner.cjs#L590268-L590288) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590268-590288](../../../../../../reference/runtime/sand-eval-runner.cjs#L590268-L590288) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:590268

Chamadas escritas diretamente neste corpo: `.then`, `cancelAttempt`, `drainCheckpoints`, `host.getStreamOutputProduced`, `new SandRunAbortError`.

Alvos de atribuição ou incremento: `deadlineFired`, `settled`.

SHA-256 do trecho: `dfc45fb98eb543618636e90c87403da554e88bcd607f0427729d812b9a9cf04b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
