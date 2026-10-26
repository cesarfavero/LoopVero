# `classify`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-draft-verification-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-draft-verification-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:541749-541765](../../../../../../reference/runtime/sand-eval-runner.cjs#L541749-L541765) | `FunctionDeclaration` | não | `ctx, route, options2, toolCallId, mode` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:541749-541765](../../../../../../reference/runtime/sand-eval-runner.cjs#L541749-L541765) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:541749

Chamadas escritas diretamente neste corpo: `runSandAutoReviewClassifier`.

SHA-256 do trecho: `908cf2c637be9b65b952f80dcca0327b8919ef8f8600fa1090a793c4c71a4dad`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
