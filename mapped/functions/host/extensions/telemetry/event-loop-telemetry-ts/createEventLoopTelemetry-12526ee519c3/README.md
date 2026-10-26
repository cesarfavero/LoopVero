# `createEventLoopTelemetry`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/event-loop-telemetry.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/event-loop-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:456276-456316](../../../../../../../reference/runtime/host-main.cjs#L456276-L456316) | `FunctionDeclaration` | não | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:456276-456316](../../../../../../../reference/runtime/host-main.cjs#L456276-L456316) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:456276

Chamadas escritas diretamente neste corpo: `import_node_perf_hooks.performance.eventLoopUtilization`, `monitor.enable`, `now`.

SHA-256 do trecho: `a84a8b823c55298fed1e28dbf380f7631dcd36d291403de149e17c92d1b50eda`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
