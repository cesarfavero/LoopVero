# `createStreamAttempt/runStreamOnce/drainCheckpoints`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/stream-attempt.ts` · [README do módulo](../../../../../modules/core/runner/stream-attempt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:590227-590232](../../../../../../reference/runtime/sand-eval-runner.cjs#L590227-L590232) | `ArrowFunctionExpression` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590227-590232](../../../../../../reference/runtime/sand-eval-runner.cjs#L590227-L590232) | 0 | 0 | 2 | 1 | 0 | 0 |

### evaluation:590227

Chamadas escritas diretamente neste corpo: `Promise.allSettled`, `firstRejected`, `host.drainStepCheckpoints`, `settleAttempt`.

SHA-256 do trecho: `11e233fbb313085954398f841f5b3c80d371d6d1fd92cc78a802db8b0d151cf7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
