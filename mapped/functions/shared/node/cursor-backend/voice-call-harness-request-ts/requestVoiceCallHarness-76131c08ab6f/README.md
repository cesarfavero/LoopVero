# `requestVoiceCallHarness`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/cursor-backend/voice-call-harness-request.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/voice-call-harness-request-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:709732-709766](../../../../../../../reference/runtime/host-main.cjs#L709732-L709766) | `FunctionDeclaration` | sim | `deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:709732-709766](../../../../../../../reference/runtime/host-main.cjs#L709732-L709766) | 4 | 0 | 2 | 2 | 0 | 0 |

### host:709732

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `VoiceCallHarnessSessionRequest.fromJsonString`, `VoiceCallHarnessToolRequest.fromJsonString`, `answer.output.toJson`, `client.voiceCallHarnessSession`, `client.voiceCallHarnessTool`, `createSandCursorBackendClient`, `deps.timeZone.trim`, `invariant`, `plan.toJson`, `toolOutcomeKindOf`.

SHA-256 do trecho: `4b6be47ec06764fb7979df3020073f05044089d0f82f2be21684796d760eacca`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
