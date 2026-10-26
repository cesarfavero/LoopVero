# `ModelStreamWallClockMiddleware.stream`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/model-stream/wall-clock-limit.ts` · [README do módulo](../../../../../../modules/core/runner/model-stream/wall-clock-limit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:586688-586742](../../../../../../../reference/runtime/sand-eval-runner.cjs#L586688-L586742) | `method` | não | `ctx, invocationId, tools, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586688-586742](../../../../../../../reference/runtime/sand-eval-runner.cjs#L586688-L586742) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:586688

Chamadas escritas diretamente neste corpo: `ctx.withCancel`, `cutAfter`, `fullStream`, `result.response.then`, `this.expiry.arm`, `this.innerExecutor.stream`.

Alvos de atribuição ou incremento: `this.streams`.

SHA-256 do trecho: `d0077b7ccd53531e5c9fd734b874fa10a722466f15e52552f2a91d7bba1ab38e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
