# `startIdleCompaction`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/context-compaction/README.md).

**Módulo:** `core/runner/idle-compaction/idle-compaction.ts` · [README do módulo](../../../../../../modules/core/runner/idle-compaction/idle-compaction-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:526374-526447](../../../../../../../reference/runtime/sand-eval-runner.cjs#L526374-L526447) | `FunctionDeclaration` | sim | `runner, options2 = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:526374-526447](../../../../../../../reference/runtime/sand-eval-runner.cjs#L526374-L526447) | 3 | 0 | 1 | 3 | 0 | 1 |

### evaluation:526374

Chamadas escritas diretamente neste corpo: `Promise.withResolvers`, `durationMs`, `errorLogTag`, `performance.now`, `runner.onSummaryLifecycle`, `runner.run`, `settle2`, `stop`, `summary`.

Alvos de atribuição ou incremento: `summary`.

SHA-256 do trecho: `0a038c1403e33b45edad01af0da6ed1e447a82fbb08fad802a5b2944b62dd563`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
