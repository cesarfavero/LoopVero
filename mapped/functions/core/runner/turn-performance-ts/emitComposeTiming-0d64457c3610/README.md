# `emitComposeTiming`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-performance.ts` · [README do módulo](../../../../../modules/core/runner/turn-performance-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:547198-547215](../../../../../../reference/runtime/sand-eval-runner.cjs#L547198-L547215) | `FunctionDeclaration` | não | `ctx, observation, tags` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:547198-547215](../../../../../../reference/runtime/sand-eval-runner.cjs#L547198-L547215) | 1 | 1 | 0 | 0 | 0 | 0 |

### evaluation:547198

Chamadas escritas diretamente neste corpo: `histogram.histogram`, `turnSendWithoutComposeSignal.increment`.

SHA-256 do trecho: `a7c2522d2c2872c047f480c1e5c0b11670b0e15b9bf79c6da26b8537990c28f9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
