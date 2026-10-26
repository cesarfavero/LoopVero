# `createStreamAttempt/runStreamOnce/<callback>/reset`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/stream-attempt.ts` · [README do módulo](../../../../../modules/core/runner/stream-attempt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:590306-590312](../../../../../../reference/runtime/sand-eval-runner.cjs#L590306-L590312) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590306-590312](../../../../../../reference/runtime/sand-eval-runner.cjs#L590306-L590312) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:590306

Chamadas escritas diretamente neste corpo: `armed.dispose`, `firstTokenExpiry.arm`, `host.getStreamOutputProduced`.

Alvos de atribuição ou incremento: `armed`, `armedDeadlineMs`.

SHA-256 do trecho: `6557e0fcebcff0f49a65fdab69a4092c3fa124c388fc620101652fe57996ab5c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
