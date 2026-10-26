# `createTeachRecordingService/pendingRecording`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/teach-recording/teach-recording-service.ts` · [README do módulo](../../../../../../modules/host/extensions/teach-recording/teach-recording-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:729097-729121](../../../../../../../reference/runtime/host-main.cjs#L729097-L729121) | `ArrowFunctionExpression` | não | `{     agentId,     key,     queuedFile,     content   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:729097-729121](../../../../../../../reference/runtime/host-main.cjs#L729097-L729121) | 2 | 0 | 0 | 4 | 0 | 1 |

### host:729097

Chamadas escritas diretamente neste corpo: `.toString`, `/^[0-9a-f]{64}$/.test`, `Buffer.from`, `JSON.parse`, `clientNonceForQueue`, `queuedFile.slice`, `signQueueEntry`.

SHA-256 do trecho: `5bb1503ccd66aaee4663491e0f829adabf524de9b37f3cbe5150d8ed472bb0f0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
