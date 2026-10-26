# `summarizeTypedText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-auto-review-summaries.ts` · [README do módulo](../../../../../modules/core/runner/sand-auto-review-summaries-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:693974-693979](../../../../../../reference/runtime/host-main.cjs#L693974-L693979) | `FunctionDeclaration` | não | `text3` |
| [evaluation:491410-491415](../../../../../../reference/runtime/sand-eval-runner.cjs#L491410-L491415) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:693974-693979](../../../../../../reference/runtime/host-main.cjs#L693974-L693979) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:491410-491415](../../../../../../reference/runtime/sand-eval-runner.cjs#L491410-L491415) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:693974

Chamadas escritas diretamente neste corpo: `.includes`, `/(?:api[_ -]?key|authorization|credential|password|secret|token)\s*[:=]/i.test`, `/^[A-Za-z0-9+/_=-]{24,}$/.test`, `SAND_AUTO_REVIEW_SECRET_VALUE_PATTERN.test`, `compactHeadAndTail`, `redactSandAutoReviewInlineSecrets`, `text3.trim`.

SHA-256 do trecho: `249334ad7a08e3a42fefde589c0cdb91b421505b69fc72290ddf034a612347a4`.

### evaluation:491410

Chamadas escritas diretamente neste corpo: `.includes`, `/(?:api[_ -]?key|authorization|credential|password|secret|token)\s*[:=]/i.test`, `/^[A-Za-z0-9+/_=-]{24,}$/.test`, `SAND_AUTO_REVIEW_SECRET_VALUE_PATTERN.test`, `compactHeadAndTail`, `redactSandAutoReviewInlineSecrets`, `text3.trim`.

SHA-256 do trecho: `249334ad7a08e3a42fefde589c0cdb91b421505b69fc72290ddf034a612347a4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
