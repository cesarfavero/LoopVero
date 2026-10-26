# `emailTurnTools/reviewClaim`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/email-turn-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/email-turn-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:765278-765292](../../../../../../../reference/runtime/host-main.cjs#L765278-L765292) | `ArrowFunctionExpression` | sim | `{ toolCallId, target, signal }` |
| [evaluation:558646-558660](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558646-L558660) | `ArrowFunctionExpression` | sim | `{ toolCallId, target, signal }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765278-765292](../../../../../../../reference/runtime/host-main.cjs#L765278-L765292) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:558646-558660](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558646-L558660) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:765278

Chamadas escritas diretamente neste corpo: `host.assertNoPendingAutoReviewApproval`, `host.getConversationId`, `reviewSandEmailClaim`.

SHA-256 do trecho: `6c8418f2166d4d942825e1d69568315cd19e5d5bc9b7e071f63b0789d8c7b310`.

### evaluation:558646

Chamadas escritas diretamente neste corpo: `host.assertNoPendingAutoReviewApproval`, `host.getConversationId`, `reviewSandEmailClaim`.

SHA-256 do trecho: `6c8418f2166d4d942825e1d69568315cd19e5d5bc9b7e071f63b0789d8c7b310`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
