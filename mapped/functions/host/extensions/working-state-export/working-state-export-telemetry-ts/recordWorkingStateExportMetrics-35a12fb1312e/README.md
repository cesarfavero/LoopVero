# `recordWorkingStateExportMetrics`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/working-state-export/working-state-export-telemetry.ts` · [README do módulo](../../../../../../modules/host/extensions/working-state-export/working-state-export-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:785795-785841](../../../../../../../reference/runtime/host-main.cjs#L785795-L785841) | `FunctionDeclaration` | não | `ctx, report` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:785795-785841](../../../../../../../reference/runtime/host-main.cjs#L785795-L785841) | 6 | 0 | 0 | 0 | 0 | 0 |

### host:785795

Chamadas escritas diretamente neste corpo: `exportAttempts.increment`, `exportClosureBlobs.histogram`, `exportClosureBytes.histogram`, `exportDuration.histogram`, `exportListingDuration.histogram`, `exportPossibleReupload.increment`, `exportUploadedBlobs.histogram`, `exportUploadedBytes.histogram`.

SHA-256 do trecho: `09f5e2222d18d9ddf329c848411ad088d99ec29d41c917f9042e23e05b0815d3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
