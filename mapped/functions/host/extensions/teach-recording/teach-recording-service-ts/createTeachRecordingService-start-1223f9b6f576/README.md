# `createTeachRecordingService/start`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/teach-recording/teach-recording-service.ts` · [README do módulo](../../../../../../modules/host/extensions/teach-recording/teach-recording-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:729319-729340](../../../../../../../reference/runtime/host-main.cjs#L729319-L729340) | `ArrowFunctionExpression` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:729319-729340](../../../../../../../reference/runtime/host-main.cjs#L729319-L729340) | 4 | 0 | 2 | 3 | 2 | 1 |

### host:729319

Chamadas escritas diretamente neste corpo: `new SandTeachRecordingError`, `reportStartFailure`, `startRecording`, `statusOf2`.

Alvos de atribuição ou incremento: `startInFlight`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `be4431c782ac6aab3dfd16605d80fc8d49dc48e3308e8240c3f4ca5ce0a6618b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
