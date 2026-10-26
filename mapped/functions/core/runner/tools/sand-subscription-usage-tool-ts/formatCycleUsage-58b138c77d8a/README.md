# `formatCycleUsage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-subscription-usage-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-subscription-usage-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:766641-766650](../../../../../../../reference/runtime/host-main.cjs#L766641-L766650) | `FunctionDeclaration` | não | `usage, nowMs2` |
| [evaluation:562154-562163](../../../../../../../reference/runtime/sand-eval-runner.cjs#L562154-L562163) | `FunctionDeclaration` | não | `usage, nowMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766641-766650](../../../../../../../reference/runtime/host-main.cjs#L766641-L766650) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:562154-562163](../../../../../../../reference/runtime/sand-eval-runner.cjs#L562154-L562163) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:766641

Chamadas escritas diretamente neste corpo: `.filter`, `formatOnDemandLine`, `formatPlanLine`, `formatResetLine`, `formatTrialLine`, `formatUsageLine`, `lines2.join`.

SHA-256 do trecho: `d7818019605d15573be76016b614216473fdcae783fe41b3cc0cbdf9f9d6a2ac`.

### evaluation:562154

Chamadas escritas diretamente neste corpo: `.filter`, `formatOnDemandLine`, `formatPlanLine`, `formatResetLine`, `formatTrialLine`, `formatUsageLine`, `lines2.join`.

SHA-256 do trecho: `fa1653e0a0ce413ae91cedc7592fd124d5125aa080e3c4ddfdfd673918491f48`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
