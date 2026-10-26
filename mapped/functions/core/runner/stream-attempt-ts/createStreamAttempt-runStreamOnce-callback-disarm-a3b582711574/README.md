# `createStreamAttempt/runStreamOnce/<callback>/disarm`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/stream-attempt.ts` · [README do módulo](../../../../../modules/core/runner/stream-attempt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:590301-590305](../../../../../../reference/runtime/sand-eval-runner.cjs#L590301-L590305) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590301-590305](../../../../../../reference/runtime/sand-eval-runner.cjs#L590301-L590305) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:590301

Chamadas escritas diretamente neste corpo: `armed.dispose`, `host.clearDeadlineHooksIf`.

Alvos de atribuição ou incremento: `settled`.

SHA-256 do trecho: `e81e215f572d2f38a143d054feac80f553cee6c407e8e4a6f38c4c6c98a69228`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
