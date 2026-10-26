# `ModelStreamWallClockMiddleware.stream/fullStream`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/model-stream/wall-clock-limit.ts` · [README do módulo](../../../../../../modules/core/runner/model-stream/wall-clock-limit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:586709-586724](../../../../../../../reference/runtime/sand-eval-runner.cjs#L586709-L586724) | `FunctionExpression` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586709-586724](../../../../../../../reference/runtime/sand-eval-runner.cjs#L586709-L586724) | 2 | 1 | 0 | 0 | 2 | 1 |

### evaluation:586709

Chamadas escritas diretamente neste corpo: `MODEL_OUTPUT_PART_TYPES.has`, `armed.dispose`, `cutAfter`, `expiry.arm`.

Alvos de atribuição ou incremento: `armed`, `streaming`.

Alvos de lançamento explícito: `LogicalExpression`, `limitError`.

SHA-256 do trecho: `30e06746a53e1f1be430c688a3f8d127e87c4ba6fd2190a78ec64a0ceb868f8e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
