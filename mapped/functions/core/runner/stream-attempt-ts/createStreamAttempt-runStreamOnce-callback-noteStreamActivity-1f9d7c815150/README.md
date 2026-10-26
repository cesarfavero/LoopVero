# `createStreamAttempt/runStreamOnce/<callback>/noteStreamActivity`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/stream-attempt.ts` · [README do módulo](../../../../../modules/core/runner/stream-attempt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:590313-590326](../../../../../../reference/runtime/sand-eval-runner.cjs#L590313-L590326) | `ArrowFunctionExpression` | não | `activity` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590313-590326](../../../../../../reference/runtime/sand-eval-runner.cjs#L590313-L590326) | 4 | 0 | 0 | 2 | 0 | 0 |

### evaluation:590313

Chamadas escritas diretamente neste corpo: `armed.dispose`, `idleExpiry.arm`, `toolCallsInFlight.add`, `toolCallsInFlight.delete`.

Alvos de atribuição ou incremento: `armed`, `armedDeadlineMs`.

SHA-256 do trecho: `9954f81fe2315bbe39e42b5a9f11e2e2a6a547e423746e9decc081e692340bbd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
