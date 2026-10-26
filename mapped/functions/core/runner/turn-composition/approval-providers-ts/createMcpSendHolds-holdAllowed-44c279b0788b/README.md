# `createMcpSendHolds/holdAllowed`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/turn-composition/approval-providers.ts` · [README do módulo](../../../../../../modules/core/runner/turn-composition/approval-providers-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:583702-583702](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583702-L583702) | `ArrowFunctionExpression` | não | `target, appliedRules` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583702-583702](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583702-L583702) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:583702 usa retorno implícito de arrow function.

### evaluation:583702

Chamadas escritas diretamente neste corpo: `forwardedAttachmentHold`, `uncoveredSendHold`.

SHA-256 do trecho: `ed52c7d6c7597249d7631e7dd1aba123d17cf098d9289442116cdf46e35a3b06`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
