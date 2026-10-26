# `recordWorkingStateWarmMetrics`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/working-state-export/working-state-export-telemetry.ts` · [README do módulo](../../../../../../modules/host/extensions/working-state-export/working-state-export-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:785842-785871](../../../../../../../reference/runtime/host-main.cjs#L785842-L785871) | `FunctionDeclaration` | não | `ctx, report` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:785842-785871](../../../../../../../reference/runtime/host-main.cjs#L785842-L785871) | 6 | 0 | 0 | 0 | 0 | 0 |

### host:785842

Chamadas escritas diretamente neste corpo: `String`, `warmAttempts.increment`, `warmClosureBlobs.histogram`, `warmClosureBytes.histogram`, `warmDuration.histogram`, `warmPossibleReupload.increment`, `warmUploadedBlobs.histogram`, `warmUploadedBytes.histogram`.

SHA-256 do trecho: `4b451c76d16c97cbd64c988e91947bd9bcbf1db3658a971f546fcae8d3fa9050`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
