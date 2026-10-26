# `attemptEmailSend`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-email-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-email-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:764393-764483](../../../../../../../reference/runtime/host-main.cjs#L764393-L764483) | `FunctionDeclaration` | sim | `deps, args` |
| [evaluation:557761-557851](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557761-L557851) | `FunctionDeclaration` | sim | `deps, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764393-764483](../../../../../../../reference/runtime/host-main.cjs#L764393-L764483) | 19 | 0 | 5 | 3 | 3 | 0 |
| [evaluation:557761-557851](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557761-L557851) | 19 | 0 | 5 | 3 | 3 | 0 |

### host:764393

Chamadas escritas diretamente neste corpo: `.join`, `JSON.stringify`, `deps.email.describeAttachments`, `deps.email.listInboxes`, `deps.email.send`, `deps.getAgentDir`, `deps.reviewSend`, `describeAttachments`, `describeRecipients`, `describeSuppressed`, `described2.map`, `grokBotStoreAttachmentAliases`, `inboxes.map`, `input2.replyTo.map`, `new SandToolInputError`, `normalizeSendEmailArgs`, `owned.join`, `resolveAttachmentPaths`, `sendingAddressOwnership`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `340c413473f91f307b3819aa5c31d74116e2327732fd387e06d9c45f8a67d1a0`.

### evaluation:557761

Chamadas escritas diretamente neste corpo: `.join`, `JSON.stringify`, `deps.email.describeAttachments`, `deps.email.listInboxes`, `deps.email.send`, `deps.getAgentDir`, `deps.reviewSend`, `describeAttachments`, `describeRecipients`, `describeSuppressed`, `described2.map`, `grokBotStoreAttachmentAliases`, `inboxes.map`, `input2.replyTo.map`, `new SandToolInputError`, `normalizeSendEmailArgs`, `owned.join`, `resolveAttachmentPaths`, `sendingAddressOwnership`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `340c413473f91f307b3819aa5c31d74116e2327732fd387e06d9c45f8a67d1a0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
