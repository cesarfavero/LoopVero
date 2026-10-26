# `runClassifier2/loadConversationContext`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-browser-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-browser-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:699845-699851](../../../../../../reference/runtime/host-main.cjs#L699845-L699851) | `ArrowFunctionExpression` | sim | `(nenhum)` |
| [evaluation:513601-513607](../../../../../../reference/runtime/sand-eval-runner.cjs#L513601-L513607) | `ArrowFunctionExpression` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699845-699851](../../../../../../reference/runtime/host-main.cjs#L699845-L699851) | 2 | 0 | 2 | 3 | 0 | 0 |
| [evaluation:513601-513607](../../../../../../reference/runtime/sand-eval-runner.cjs#L513601-L513607) | 2 | 0 | 2 | 3 | 0 | 0 |

### host:699845

Chamadas escritas diretamente neste corpo: `options2.extractConversationContext`, `tryExtractSandAutoReviewClassifierConversationContext`.

SHA-256 do trecho: `8c489958c17f9982c1c05beaa3ed89158d2dba1c6723bbb57653b38145f665b4`.

### evaluation:513601

Chamadas escritas diretamente neste corpo: `options2.extractConversationContext`, `tryExtractSandAutoReviewClassifierConversationContext`.

SHA-256 do trecho: `8c489958c17f9982c1c05beaa3ed89158d2dba1c6723bbb57653b38145f665b4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
