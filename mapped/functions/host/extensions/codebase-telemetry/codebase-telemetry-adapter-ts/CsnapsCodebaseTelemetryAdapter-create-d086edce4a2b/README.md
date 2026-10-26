# `_CsnapsCodebaseTelemetryAdapter.create`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/codebase-telemetry/codebase-telemetry-adapter.ts` · [README do módulo](../../../../../../modules/host/extensions/codebase-telemetry/codebase-telemetry-adapter-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:540533-540614](../../../../../../../reference/runtime/host-main.cjs#L540533-L540614) | `method` | sim | `{     credentials,     paths,     backendUrl,     csnapsBinPath,     spawnCsnaps: spawnCsnaps2,     uploadPolling,     createUploadCredentials,     logger: logger132,     signal   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:540533-540614](../../../../../../../reference/runtime/host-main.cjs#L540533-L540614) | 0 | 0 | 2 | 1 | 2 | 2 |

### host:540533

Chamadas escritas diretamente neste corpo: `createDeadlinePolicy`, `csnaps.close`, `new CodebaseTelemetryCleanupError`, `new _CsnapsCodebaseTelemetryAdapter`, `spawnCsnaps2`.

Alvos de lançamento explícito: `CodebaseTelemetryCleanupError`, `error64`.

SHA-256 do trecho: `dc9a6c95768e20783a076016ca6164ddb1292e74d53395402cac63820b4b34e0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
