# `assembleMessageBody`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-message-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:760927-761109](../../../../../../../reference/runtime/host-main.cjs#L760927-L761109) | `FunctionDeclaration` | sim | `ctx, rawArgs, deps, cards` |
| [evaluation:551742-551924](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551742-L551924) | `FunctionDeclaration` | sim | `ctx, rawArgs, deps, cards` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760927-761109](../../../../../../../reference/runtime/host-main.cjs#L760927-L761109) | 47 | 1 | 7 | 9 | 9 | 0 |
| [evaluation:551742-551924](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551742-L551924) | 47 | 1 | 7 | 9 | 9 | 0 |

### host:760927

Chamadas escritas diretamente neste corpo: `Date.now`, `clampCredentialPurpose`, `clampSecretDescription`, `clampSecretLabel`, `credential.logins.map`, `deps.activeTurnRequestSource`, `deps.resolveCredentialBrowserTarget`, `describeChannelAddressProblem`, `images.push`, `isWebpageAttachmentUrl`, `measureMediaDimensions`, `new SandToolInputError`, `normalizeCredentialTarget`, `resolveAttachmentSource`, `resolveCloudAgentTitleBestEffort`, `resolveSendMessageAct`, `resolveSendMessageOpen`, `resolveSendMessageSecretTarget`, `sendToUserActEnabled`, `sendToUserLinkVisibility`, `sendToUserOpenEnabled`, `textMessageBody`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `b2a785136d898a06adfc24682d932dec19123f55e98d87c0edbb0c68a29993ae`.

### evaluation:551742

Chamadas escritas diretamente neste corpo: `Date.now`, `clampCredentialPurpose`, `clampSecretDescription`, `clampSecretLabel`, `credential.logins.map`, `deps.activeTurnRequestSource`, `deps.resolveCredentialBrowserTarget`, `describeChannelAddressProblem`, `images.push`, `isWebpageAttachmentUrl`, `measureMediaDimensions`, `new SandToolInputError`, `normalizeCredentialTarget`, `resolveAttachmentSource`, `resolveCloudAgentTitleBestEffort`, `resolveSendMessageAct`, `resolveSendMessageOpen`, `resolveSendMessageSecretTarget`, `sendToUserActEnabled`, `sendToUserLinkVisibility`, `sendToUserOpenEnabled`, `textMessageBody`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `cf858697a22737d5b11e955dd9449372416d5cbfa99d75345b0b79867cc9384e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
