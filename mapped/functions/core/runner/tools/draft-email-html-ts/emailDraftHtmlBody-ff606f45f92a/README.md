# `emailDraftHtmlBody`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-email-html.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-email-html-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:732584-732595](../../../../../../../reference/runtime/host-main.cjs#L732584-L732595) | `FunctionDeclaration` | não | `body, options2 = {}` |
| [evaluation:539596-539607](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539596-L539607) | `FunctionDeclaration` | não | `body, options2 = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732584-732595](../../../../../../../reference/runtime/host-main.cjs#L732584-L732595) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:539596-539607](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539596-L539607) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:732584

Chamadas escritas diretamente neste corpo: `body.replace`, `escapeHtml`, `proseHtml`, `text3.matchAll`, `text3.slice`, `withoutTrailingProsePunctuation`.

Alvos de atribuição ou incremento: `cursor`, `html`.

SHA-256 do trecho: `a05f476b9eddbc6f6b75016b86c4519b1da37a380fa202a8c1de475e87dbaa4d`.

### evaluation:539596

Chamadas escritas diretamente neste corpo: `body.replace`, `escapeHtml`, `proseHtml`, `text3.matchAll`, `text3.slice`, `withoutTrailingProsePunctuation`.

Alvos de atribuição ou incremento: `cursor`, `html`.

SHA-256 do trecho: `a05f476b9eddbc6f6b75016b86c4519b1da37a380fa202a8c1de475e87dbaa4d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
