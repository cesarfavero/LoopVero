# `createCombinedComputerUseSelection/read`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/subagents/combined-computer-use.ts` · [README do módulo](../../../../../../modules/core/runner/subagents/combined-computer-use-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:535659-535680](../../../../../../../reference/runtime/sand-eval-runner.cjs#L535659-L535680) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:535659-535680](../../../../../../../reference/runtime/sand-eval-runner.cjs#L535659-L535680) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:535659

Chamadas escritas diretamente neste corpo: `Object.freeze`, `now`, `options2.getRemoteBoxAvailable`, `selectionReason`.

Alvos de atribuição ou incremento: `decision`.

SHA-256 do trecho: `db71386dfb972406f967df7d44183d81b756bd134131833ba41af29de57cb9e0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
