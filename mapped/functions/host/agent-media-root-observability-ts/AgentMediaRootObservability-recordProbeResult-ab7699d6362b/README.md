# `AgentMediaRootObservability.recordProbeResult`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/agent-media-root-observability.ts` · [README do módulo](../../../../modules/host/agent-media-root-observability-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:723925-723949](../../../../../reference/runtime/host-main.cjs#L723925-L723949) | `method` | não | `report, result` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723925-723949](../../../../../reference/runtime/host-main.cjs#L723925-L723949) | 2 | 0 | 0 | 0 | 0 | 1 |

### host:723925

Chamadas escritas diretamente neste corpo: `mediaRootWriteProbe.increment`, `metricLabels`, `telemetryReport`, `this.options.report`, `this.options.reportInternalError`.

SHA-256 do trecho: `451f8df2739695fcbc92a131ca65e6b4f3c8fccfd86c95522e49d442660972b7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
