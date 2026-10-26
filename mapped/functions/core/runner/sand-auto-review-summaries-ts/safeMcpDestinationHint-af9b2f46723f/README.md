# `safeMcpDestinationHint`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-auto-review-summaries.ts` · [README do módulo](../../../../../modules/core/runner/sand-auto-review-summaries-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:491153-491168](../../../../../../reference/runtime/sand-eval-runner.cjs#L491153-L491168) | `FunctionDeclaration` | não | `mcpArguments` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:491153-491168](../../../../../../reference/runtime/sand-eval-runner.cjs#L491153-L491168) | 4 | 1 | 0 | 3 | 0 | 0 |

### evaluation:491153

Chamadas escritas diretamente neste corpo: `.replace`, `.toLowerCase`, `.trim`, `MCP_DESTINATION_KEYS.has`, `Object.entries`, `SAND_AUTO_REVIEW_SECRET_KEY_PATTERN.test`, `SAND_AUTO_REVIEW_SECRET_VALUE_PATTERN.test`, `compact`, `rawKey.replace`, `redactSandAutoReviewInlineSecrets`.

SHA-256 do trecho: `2f18502ce5c0fc64ebe89a674449a14db7d2d7ba4ada3c288cd7d20aabc2f719`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
