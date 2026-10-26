# `redactMcpValue`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-auto-review-summaries.ts` · [README do módulo](../../../../../modules/core/runner/sand-auto-review-summaries-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:693750-693779](../../../../../../reference/runtime/host-main.cjs#L693750-L693779) | `FunctionDeclaration` | não | `value, key, depth = 0` |
| [evaluation:491019-491048](../../../../../../reference/runtime/sand-eval-runner.cjs#L491019-L491048) | `FunctionDeclaration` | não | `value, key, depth = 0` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:693750-693779](../../../../../../reference/runtime/host-main.cjs#L693750-L693779) | 9 | 0 | 0 | 6 | 0 | 0 |
| [evaluation:491019-491048](../../../../../../reference/runtime/sand-eval-runner.cjs#L491019-L491048) | 9 | 0 | 0 | 6 | 0 | 0 |

### host:693750

Chamadas escritas diretamente neste corpo: `Array.isArray`, `Object.entries`, `Object.fromEntries`, `SAND_AUTO_REVIEW_SECRET_KEY_PATTERN.test`, `SAND_AUTO_REVIEW_SECRET_VALUE_PATTERN.test`, `allEntries.slice`, `compactHeadAndTail`, `entries.map`, `redactSandAutoReviewInlineSecrets`, `selected.map`, `value.slice`.

SHA-256 do trecho: `a17b04fb2103a6af13e8dca0ecd4ea703408851370533e5648730dd4a2039273`.

### evaluation:491019

Chamadas escritas diretamente neste corpo: `Array.isArray`, `Object.entries`, `Object.fromEntries`, `SAND_AUTO_REVIEW_SECRET_KEY_PATTERN.test`, `SAND_AUTO_REVIEW_SECRET_VALUE_PATTERN.test`, `allEntries.slice`, `compactHeadAndTail`, `entries.map`, `redactSandAutoReviewInlineSecrets`, `selected.map`, `value.slice`.

SHA-256 do trecho: `a17b04fb2103a6af13e8dca0ecd4ea703408851370533e5648730dd4a2039273`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
