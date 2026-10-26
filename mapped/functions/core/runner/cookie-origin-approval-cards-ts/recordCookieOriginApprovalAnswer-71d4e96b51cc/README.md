# `recordCookieOriginApprovalAnswer`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/cookie-origin-approval-cards.ts` · [README do módulo](../../../../../modules/core/runner/cookie-origin-approval-cards-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:775010-775019](../../../../../../reference/runtime/host-main.cjs#L775010-L775019) | `FunctionDeclaration` | não | `audit, toolCallId, cardId, answer` |
| [evaluation:574639-574648](../../../../../../reference/runtime/sand-eval-runner.cjs#L574639-L574648) | `FunctionDeclaration` | não | `audit, toolCallId, cardId, answer` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775010-775019](../../../../../../reference/runtime/host-main.cjs#L775010-L775019) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:574639-574648](../../../../../../reference/runtime/sand-eval-runner.cjs#L574639-L574648) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:775010

Chamadas escritas diretamente neste corpo: `.ruleRefused`, `audit.recordHumanAnswer`, `humanOnlyReviewLedger`.

SHA-256 do trecho: `0bd133fd6f48cc5f5c9cf6cef96912a08240ed2a2aa59885823fe9f7c3b53e6f`.

### evaluation:574639

Chamadas escritas diretamente neste corpo: `.ruleRefused`, `audit.recordHumanAnswer`, `humanOnlyReviewLedger`.

SHA-256 do trecho: `0bd133fd6f48cc5f5c9cf6cef96912a08240ed2a2aa59885823fe9f7c3b53e6f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
