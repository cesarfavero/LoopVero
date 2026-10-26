# `createIdleCompactionCollector/onRequestStart/onUsage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/context-compaction/README.md).

**Módulo:** `core/runner/idle-compaction/idle-compaction.ts` · [README do módulo](../../../../../../modules/core/runner/idle-compaction/idle-compaction-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:526459-526464](../../../../../../../reference/runtime/sand-eval-runner.cjs#L526459-L526464) | `ArrowFunctionExpression` | não | `call` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:526459-526464](../../../../../../../reference/runtime/sand-eval-runner.cjs#L526459-L526464) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:526459

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

Alvos de atribuição ou incremento: `usage.cacheReadTokens`, `usage.cacheWriteTokens`, `usage.inputTokens`, `usage.outputTokens`.

SHA-256 do trecho: `dd20e9e47f0f4d11eda149f3384c2f538fb0b176671cdc5d1ecd3eb7fdf208f2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
