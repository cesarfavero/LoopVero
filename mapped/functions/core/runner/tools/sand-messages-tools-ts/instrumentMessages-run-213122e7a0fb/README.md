# `instrumentMessages/run`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-messages-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-messages-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:778197-778216](../../../../../../../reference/runtime/host-main.cjs#L778197-L778216) | `ArrowFunctionExpression` | sim | `ctx, op, display` |
| [evaluation:577932-577951](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577932-L577951) | `ArrowFunctionExpression` | sim | `ctx, op, display` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:778197-778216](../../../../../../../reference/runtime/host-main.cjs#L778197-L778216) | 1 | 0 | 1 | 1 | 1 | 1 |
| [evaluation:577932-577951](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577932-L577951) | 1 | 0 | 1 | 1 | 1 | 1 |

### host:778197

Chamadas escritas diretamente neste corpo: `isIntentionalAbortReason2`, `messages2.run`, `performance.now`, `reportMessagesToolUse`.

Alvos de atribuição ou incremento: `result`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `2f1a096e542cbc75ae3986b204546d96642e22fbbedd6b8cab927e87fd483372`.

### evaluation:577932

Chamadas escritas diretamente neste corpo: `isIntentionalAbortReason2`, `messages.run`, `performance.now`, `reportMessagesToolUse`.

Alvos de atribuição ou incremento: `result`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `2f4a4db834e18cf5d386bff0f7c58866778e614c69a9a8f8eb865e53a73e2f9d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
