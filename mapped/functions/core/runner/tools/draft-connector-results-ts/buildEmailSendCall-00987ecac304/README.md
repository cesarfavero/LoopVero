# `buildEmailSendCall`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-connector-results.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-connector-results-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:732889-732957](../../../../../../../reference/runtime/host-main.cjs#L732889-L732957) | `FunctionDeclaration` | não | `route, draft, sendingAddress` |
| [evaluation:540411-540479](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540411-L540479) | `FunctionDeclaration` | não | `route, draft, sendingAddress` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732889-732957](../../../../../../../reference/runtime/host-main.cjs#L732889-L732957) | 10 | 0 | 0 | 7 | 0 | 0 |
| [evaluation:540411-540479](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540411-L540479) | 10 | 0 | 0 | 7 | 0 | 0 |

### host:732889

Chamadas escritas diretamente neste corpo: `agentInboxSendCall`, `cardHtmlBody`, `draft.to.join`, `grokGmailSendCall`, `inertDraftText`, `isAgentInboxRoute`, `isGrokGmailRoute`, `restGmailSendCall`, `sendGmailDraftFromVerifiedSender`, `sendStagedDraft`, `signedGmailBodies`.

SHA-256 do trecho: `4182edb211d9274e502e5b0f002cbee8d4a3a13e7431cb35d2259f2a15a1a1e5`.

### evaluation:540411

Chamadas escritas diretamente neste corpo: `agentInboxSendCall`, `cardHtmlBody`, `draft.to.join`, `grokGmailSendCall`, `inertDraftText`, `isAgentInboxRoute`, `isGrokGmailRoute`, `restGmailSendCall`, `sendGmailDraftFromVerifiedSender`, `sendStagedDraft`, `signedGmailBodies`.

SHA-256 do trecho: `4182edb211d9274e502e5b0f002cbee8d4a3a13e7431cb35d2259f2a15a1a1e5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
