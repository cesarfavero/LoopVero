# `createServerAgentProxy`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/server-agent-proxy/server-agent-proxy.ts` · [README do módulo](../../../../../../modules/host/extensions/server-agent-proxy/server-agent-proxy-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:714578-714965](../../../../../../../reference/runtime/host-main.cjs#L714578-L714965) | `FunctionDeclaration` | não | `deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714578-714965](../../../../../../../reference/runtime/host-main.cjs#L714578-L714965) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:714578

Chamadas escritas diretamente neste corpo: `createSameIdRoomCreateRetryPolicy`, `createSandCursorBackendClient`, `createServerAgentActionCore`, `createServerAgentActivity`, `createServerTranscriptClient`, `createServerTranscriptIndexer`, `createServerTranscriptTail`, `new Map`, `new RPCVoiceCallHarness`, `new Set`.

SHA-256 do trecho: `9f755306a4ebb015b2fee265c7e3aef50adfb7435223a497175cb020049567d9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
