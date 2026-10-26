# `createTurnApprovalProviders`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/turn-composition/approval-providers.ts` · [README do módulo](../../../../../../modules/core/runner/turn-composition/approval-providers-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:583706-583770](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583706-L583770) | `FunctionDeclaration` | não | `host, turnToolHost, turn` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583706-583770](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583706-L583770) | 5 | 0 | 0 | 1 | 0 | 0 |

### evaluation:583706

Chamadas escritas diretamente neste corpo: `allowsSystemReminder`, `createBlockedSendDraftReminder`, `createMcpSendHolds`, `createSandMcpApprovalProvider`, `createSandShellApprovalProvider`, `turnToolHost.getConversationId`.

SHA-256 do trecho: `8ea086777bcfab850528431b5053047a408ddb0d54720d2aa3df1129f9543958`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
