# `createCheckSubscriptionUsageTool/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-subscription-usage-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-subscription-usage-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:766657-766666](../../../../../../../reference/runtime/host-main.cjs#L766657-L766666) | `ArrowFunctionExpression` | sim | `ctx, _args, d` |
| [evaluation:562170-562179](../../../../../../../reference/runtime/sand-eval-runner.cjs#L562170-L562179) | `ArrowFunctionExpression` | sim | `ctx, _args, d` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766657-766666](../../../../../../../reference/runtime/host-main.cjs#L766657-L766666) | 0 | 0 | 1 | 2 | 0 | 1 |
| [evaluation:562170-562179](../../../../../../../reference/runtime/sand-eval-runner.cjs#L562170-L562179) | 0 | 0 | 1 | 2 | 0 | 1 |

### host:766657

Chamadas escritas diretamente neste corpo: `Date.now`, `d.getCycleUsage`, `errorLogTag`, `formatCycleUsage`, `logger121.warn`.

Alvos de atribuição ou incremento: `usage`.

SHA-256 do trecho: `7ff4a6c746f38b44aad6a563afa4a37be4dac1f7050e439bdf723a83b93583fd`.

### evaluation:562170

Chamadas escritas diretamente neste corpo: `Date.now`, `d.getCycleUsage`, `errorLogTag`, `formatCycleUsage`, `logger94.warn`.

Alvos de atribuição ou incremento: `usage`.

SHA-256 do trecho: `0b875d68e64682399eef40d7434a700a5ec6bf763eba4bc0980780bdef557eba`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
