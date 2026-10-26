# `sendToUserDescription`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-message-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:761198-761221](../../../../../../../reference/runtime/host-main.cjs#L761198-L761221) | `FunctionDeclaration` | não | `deps, concise = usesConciseSendToUser(deps)` |
| [evaluation:552013-552036](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552013-L552036) | `FunctionDeclaration` | não | `deps, concise = usesConciseSendToUser(deps)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761198-761221](../../../../../../../reference/runtime/host-main.cjs#L761198-L761221) | 5 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:552013-552036](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552013-L552036) | 5 | 0 | 0 | 3 | 0 | 0 |

### host:761198

Chamadas escritas diretamente neste corpo: `conciseSendToUserDescription`, `credentialRequestKind`, `deps.systemPromptHasSendToUserPolicy`, `deps.systemPromptPolicyHeadings`, `gatedInAppLinksGuidance`, `openingDeferringTo`, `sendToUserActionsGuidance`, `sendToUserLinkVisibility`, `widgetIntroDeferringTo`.

Alvos de atribuição ou incremento: `credentialRequest`, `endTurnGuidance`.

SHA-256 do trecho: `7f306eed8aea279e3a6701505129a2e8894012b1f1989e32dc8ba02f32d837e1`.

### evaluation:552013

Chamadas escritas diretamente neste corpo: `conciseSendToUserDescription`, `credentialRequestKind`, `deps.systemPromptHasSendToUserPolicy`, `deps.systemPromptPolicyHeadings`, `gatedInAppLinksGuidance`, `openingDeferringTo`, `sendToUserActionsGuidance`, `sendToUserLinkVisibility`, `widgetIntroDeferringTo`.

Alvos de atribuição ou incremento: `credentialRequest`, `endTurnGuidance`.

SHA-256 do trecho: `7f306eed8aea279e3a6701505129a2e8894012b1f1989e32dc8ba02f32d837e1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
