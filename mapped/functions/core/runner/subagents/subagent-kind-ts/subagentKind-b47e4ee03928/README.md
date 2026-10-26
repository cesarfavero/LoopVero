# `subagentKind`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/subagents/subagent-kind.ts` · [README do módulo](../../../../../../modules/core/runner/subagents/subagent-kind-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:740856-740865](../../../../../../../reference/runtime/host-main.cjs#L740856-L740865) | `FunctionDeclaration` | não | `raw` |
| [evaluation:479763-479772](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479763-L479772) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740856-740865](../../../../../../../reference/runtime/host-main.cjs#L740856-L740865) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:479763-479772](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479763-L479772) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:740856

Chamadas escritas diretamente neste corpo: `MEDIA_REVIEW_SUBAGENT_NAMES.find`, `NORMALIZED_SUBAGENT_NAMES.find`, `normalizeSubagentTypeName`.

SHA-256 do trecho: `201483d64b879ce7cf4824618050e720928e81667423673b205877f15851394f`.

### evaluation:479763

Chamadas escritas diretamente neste corpo: `MEDIA_REVIEW_SUBAGENT_NAMES.find`, `NORMALIZED_SUBAGENT_NAMES.find`, `normalizeSubagentTypeName`.

SHA-256 do trecho: `201483d64b879ce7cf4824618050e720928e81667423673b205877f15851394f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
