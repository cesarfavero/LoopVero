# `createStreamAttempt/runBoundedTurn/isRetryable`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/stream-attempt.ts` · [README do módulo](../../../../../modules/core/runner/stream-attempt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:590357-590363](../../../../../../reference/runtime/sand-eval-runner.cjs#L590357-L590363) | `ArrowFunctionExpression` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590357-590363](../../../../../../reference/runtime/sand-eval-runner.cjs#L590357-L590363) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:590357 usa retorno implícito de arrow function.

### evaluation:590357

Chamadas escritas diretamente neste corpo: `host.getStreamOutputProduced`, `shouldRetryTurnAttempt`.

SHA-256 do trecho: `8d60fa95e46e0d425a901be5058b28e922fc9b8fa02ecd6e2b8e9ab031ad5840`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
