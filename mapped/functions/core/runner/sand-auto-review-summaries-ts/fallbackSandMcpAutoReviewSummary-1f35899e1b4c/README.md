# `fallbackSandMcpAutoReviewSummary`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-auto-review-summaries.ts` · [README do módulo](../../../../../modules/core/runner/sand-auto-review-summaries-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:491169-491184](../../../../../../reference/runtime/sand-eval-runner.cjs#L491169-L491184) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:491169-491184](../../../../../../reference/runtime/sand-eval-runner.cjs#L491169-L491184) | 4 | 0 | 0 | 4 | 0 | 0 |

### evaluation:491169

Chamadas escritas diretamente neste corpo: `.includes`, `base.toLowerCase`, `compact`, `genericSandMcpAutoReviewSummary`, `hint.toLowerCase`, `humanizeMcpToolAction`, `safeMcpDestinationHint`.

SHA-256 do trecho: `02c6c1abc1466ecee605c6718ea769e244db74fba31f5091c972eb7cecf8501e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
