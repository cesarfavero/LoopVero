# `sandMcpAutoReviewAction`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-auto-review-summaries.ts` · [README do módulo](../../../../../modules/core/runner/sand-auto-review-summaries-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:491122-491136](../../../../../../reference/runtime/sand-eval-runner.cjs#L491122-L491136) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:491122-491136](../../../../../../reference/runtime/sand-eval-runner.cjs#L491122-L491136) | 3 | 0 | 0 | 1 | 0 | 0 |

### evaluation:491122

Chamadas escritas diretamente neste corpo: `.join`, `Object.hasOwn`, `candidates.reduce`, `mcpNameWords`, `withoutServerPrefix`.

SHA-256 do trecho: `8e83f999c80661bbe14806e77213c9a1569cea7672e7f025765388121ddd7c2c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
