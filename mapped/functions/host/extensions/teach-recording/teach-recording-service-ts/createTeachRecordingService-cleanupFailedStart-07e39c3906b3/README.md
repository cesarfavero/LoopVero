# `createTeachRecordingService/cleanupFailedStart`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/teach-recording/teach-recording-service.ts` · [README do módulo](../../../../../../modules/host/extensions/teach-recording/teach-recording-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:729030-729048](../../../../../../../reference/runtime/host-main.cjs#L729030-L729048) | `ArrowFunctionExpression` | sim | `{     connection,     recording   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:729030-729048](../../../../../../../reference/runtime/host-main.cjs#L729030-L729048) | 1 | 0 | 1 | 0 | 1 | 0 |

### host:729030

Chamadas escritas diretamente neste corpo: `discardRecording`, `ffmpegCmdlineOwnsVideo`, `new SandTeachRecordingError`.

Alvos de lançamento explícito: `SandTeachRecordingError`.

SHA-256 do trecho: `25bcb293779097ce51a7333281e730af153182edd20f642c6d717b24b1db3bbc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
