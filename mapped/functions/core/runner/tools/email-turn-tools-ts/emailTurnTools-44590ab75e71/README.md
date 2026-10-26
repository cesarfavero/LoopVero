# `emailTurnTools`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/email-turn-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/email-turn-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:765228-765305](../../../../../../../reference/runtime/host-main.cjs#L765228-L765305) | `FunctionDeclaration` | não | `host, decisions, review, recordDelivery` |
| [evaluation:558596-558673](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558596-L558673) | `FunctionDeclaration` | não | `host, decisions, review, recordDelivery` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765228-765305](../../../../../../../reference/runtime/host-main.cjs#L765228-L765305) | 6 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:558596-558673](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558596-L558673) | 6 | 0 | 0 | 2 | 0 | 0 |

### host:765228

Chamadas escritas diretamente neste corpo: `createCheckEmailInboxAvailabilityTool`, `createClaimEmailInboxTool`, `createListEmailInboxesTool`, `createReadEmailAttachmentTool`, `createReadEmailThreadTool`, `createSearchEmailThreadsTool`, `createSendEmailTool`, `decisions.offers`, `host.gates.agentEmailDrafts`, `host.gates.agentEmailMultipleInboxes`, `tools.push`.

SHA-256 do trecho: `635bc4c63d2aef3fa0b04c34bfe78026a2857155a8926d67562959161d95ed12`.

### evaluation:558596

Chamadas escritas diretamente neste corpo: `createCheckEmailInboxAvailabilityTool`, `createClaimEmailInboxTool`, `createListEmailInboxesTool`, `createReadEmailAttachmentTool`, `createReadEmailThreadTool`, `createSearchEmailThreadsTool`, `createSendEmailTool`, `decisions.offers`, `host.gates.agentEmailDrafts`, `host.gates.agentEmailMultipleInboxes`, `tools.push`.

SHA-256 do trecho: `635bc4c63d2aef3fa0b04c34bfe78026a2857155a8926d67562959161d95ed12`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
