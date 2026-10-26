# `resolveSandTurnToolDecisions/offersTool`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tool-policy/enforcement.ts` · [README do módulo](../../../../../../modules/core/runner/tool-policy/enforcement-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:543271-543271](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543271-L543271) | `ArrowFunctionExpression` | não | `toolId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:543271-543271](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543271-L543271) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:543271 usa retorno implícito de arrow function.

### evaluation:543271

Chamadas escritas diretamente neste corpo: `READONLY_CHILD_INBOX_WRITES.has`, `childInboxWritesWithheld`, `policy.offers`.

SHA-256 do trecho: `8b856e30a67edc1e4feedddbac1aa1fae381e07b6cea2a4e7b94d994ffa5984a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
