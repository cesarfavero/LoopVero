# `summarizeEmailHtml`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-auto-review-summaries.ts` · [README do módulo](../../../../../modules/core/runner/sand-auto-review-summaries-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:693852-693863](../../../../../../reference/runtime/host-main.cjs#L693852-L693863) | `FunctionDeclaration` | não | `html` |
| [evaluation:491288-491299](../../../../../../reference/runtime/sand-eval-runner.cjs#L491288-L491299) | `FunctionDeclaration` | não | `html` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:693852-693863](../../../../../../reference/runtime/host-main.cjs#L693852-L693863) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:491288-491299](../../../../../../reference/runtime/sand-eval-runner.cjs#L491288-L491299) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:693852

Chamadas escritas diretamente neste corpo: `.join`, `.map`, `.replace`, `Array.from`, `compactHeadAndTail`, `html.matchAll`, `html.replace`, `new Set`, `redactSandAutoReviewInlineSecrets`, `urls.slice`.

SHA-256 do trecho: `a4d98b56e411ef31e9ab54bf2d19f81f281f28fdebf06a814c48c211576a767f`.

### evaluation:491288

Chamadas escritas diretamente neste corpo: `.join`, `.map`, `.replace`, `Array.from`, `compactHeadAndTail`, `html.matchAll`, `html.replace`, `new Set`, `redactSandAutoReviewInlineSecrets`, `urls.slice`.

SHA-256 do trecho: `a4d98b56e411ef31e9ab54bf2d19f81f281f28fdebf06a814c48c211576a767f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
