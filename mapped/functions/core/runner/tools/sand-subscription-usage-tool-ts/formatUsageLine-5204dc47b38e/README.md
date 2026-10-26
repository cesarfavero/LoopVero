# `formatUsageLine`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-subscription-usage-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-subscription-usage-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:766611-766617](../../../../../../../reference/runtime/host-main.cjs#L766611-L766617) | `FunctionDeclaration` | não | `usage` |
| [evaluation:562124-562130](../../../../../../../reference/runtime/sand-eval-runner.cjs#L562124-L562130) | `FunctionDeclaration` | não | `usage` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766611-766617](../../../../../../../reference/runtime/host-main.cjs#L766611-L766617) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:562124-562130](../../../../../../../reference/runtime/sand-eval-runner.cjs#L562124-L562130) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:766611

Chamadas escritas diretamente neste corpo: `Math.min`, `Number`, `usage.usagePercent.toFixed`.

SHA-256 do trecho: `3a3a5a6dc91c18731e1e5b893851752c6e4f51d206844b5e1f39d131a14bd422`.

### evaluation:562124

Chamadas escritas diretamente neste corpo: `Math.min`, `Number`, `usage.usagePercent.toFixed`.

SHA-256 do trecho: `3a3a5a6dc91c18731e1e5b893851752c6e4f51d206844b5e1f39d131a14bd422`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
