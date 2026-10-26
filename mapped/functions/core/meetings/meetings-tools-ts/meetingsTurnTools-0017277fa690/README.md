# `meetingsTurnTools`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/meetings/meetings-tools.ts` · [README do módulo](../../../../../modules/core/meetings/meetings-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:773622-773645](../../../../../../reference/runtime/host-main.cjs#L773622-L773645) | `FunctionDeclaration` | não | `host` |
| [evaluation:572848-572871](../../../../../../reference/runtime/sand-eval-runner.cjs#L572848-L572871) | `FunctionDeclaration` | não | `host` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773622-773645](../../../../../../reference/runtime/host-main.cjs#L773622-L773645) | 4 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:572848-572871](../../../../../../reference/runtime/sand-eval-runner.cjs#L572848-L572871) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:773622

Chamadas escritas diretamente neste corpo: `createFindMeetingTool`, `createGetMeetingSummaryTool`, `createJoinMeetingTool`, `createLeaveMeetingTool`, `createListMeetingsTool`, `createReadMeetingTranscriptTool`, `createUpdateMeetingTool`.

SHA-256 do trecho: `d7e434ca63027cfacf8898818e44120ce48b9b5d5655bdc495db67fbec6eda84`.

### evaluation:572848

Chamadas escritas diretamente neste corpo: `createFindMeetingTool`, `createGetMeetingSummaryTool`, `createJoinMeetingTool`, `createLeaveMeetingTool`, `createListMeetingsTool`, `createReadMeetingTranscriptTool`, `createUpdateMeetingTool`.

SHA-256 do trecho: `d7e434ca63027cfacf8898818e44120ce48b9b5d5655bdc495db67fbec6eda84`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
