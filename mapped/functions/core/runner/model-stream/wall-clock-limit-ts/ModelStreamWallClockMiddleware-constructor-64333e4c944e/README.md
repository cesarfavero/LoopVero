# `ModelStreamWallClockMiddleware.constructor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/model-stream/wall-clock-limit.ts` · [README do módulo](../../../../../../modules/core/runner/model-stream/wall-clock-limit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:586678-586683](../../../../../../../reference/runtime/sand-eval-runner.cjs#L586678-L586683) | `method` | não | `innerExecutor, limitMs, cuts` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586678-586683](../../../../../../../reference/runtime/sand-eval-runner.cjs#L586678-L586683) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:586678

Chamadas escritas diretamente neste corpo: `createExpiryPolicy`, `super`.

Alvos de atribuição ou incremento: `this.cuts`, `this.expiry`, `this.limitMs`.

SHA-256 do trecho: `3dacd9e71dadf4d44eabb66d3a0f6f9cc3fe8ee9701d4ba42463a08bd594709e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
