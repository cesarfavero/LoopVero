# `classifyAgentError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/turn-runtime.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/turn-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:736911-736951](../../../../../../../reference/runtime/host-main.cjs#L736911-L736951) | `FunctionDeclaration` | não | `error64` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736911-736951](../../../../../../../reference/runtime/host-main.cjs#L736911-L736951) | 11 | 0 | 0 | 12 | 0 | 0 |

### host:736911

Chamadas escritas diretamente neste corpo: `SandError.agentUnclassified`, `SandError.backendCapacityDeferred`, `SandError.backendRejected`, `SandError.checkpointPublicationFailed`, `SandError.contextWindowOverflow`, `SandError.conversationTooLarge`, `SandError.firstTokenStall`, `SandError.providerOverloaded`, `SandError.streamIdleStall`, `SandError.streamReset`, `SandError.turnBackendUnreachable`, `SandError.turnRetryable`, `brandedErrno`, `connectCodeOf`, `findSystemErrno`, `isBackendUnreachableError`, `isCheckpointPublicationFailure`, `isContextOverflowDeadEnd`, `isConversationTooLargeRefusal`, `isFirstTokenStallError`, `isProviderCapacityError`, `isRetryableProviderError`, `isStreamIdleError`, `isTransientStreamError`, `serverRetryAfterMsFromError`.

SHA-256 do trecho: `42adbeaab4de9c876fbeb1c886237348cdd6150ecdaa0f543cba85e73304e329`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
