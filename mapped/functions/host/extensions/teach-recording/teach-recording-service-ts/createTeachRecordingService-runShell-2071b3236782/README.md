# `createTeachRecordingService/runShell`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/teach-recording/teach-recording-service.ts` · [README do módulo](../../../../../../modules/host/extensions/teach-recording/teach-recording-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:728911-728929](../../../../../../../reference/runtime/host-main.cjs#L728911-L728929) | `ArrowFunctionExpression` | sim | `connection, command, toolCallId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:728911-728929](../../../../../../../reference/runtime/host-main.cjs#L728911-L728929) | 1 | 0 | 1 | 1 | 1 | 0 |

### host:728911

Chamadas escritas diretamente neste corpo: `buildHostShellArgs`, `connection.remoteAccessor.get`, `new SandTeachRecordingError`, `shell.execute`.

Alvos de lançamento explícito: `SandTeachRecordingError`.

SHA-256 do trecho: `7fac1d5f2c7c3390f156c00eec47fb59579a3607afac2304e3389b0ae75f58e7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
