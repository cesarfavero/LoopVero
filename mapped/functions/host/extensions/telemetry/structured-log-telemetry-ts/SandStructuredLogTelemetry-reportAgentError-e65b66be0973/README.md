# `SandStructuredLogTelemetry.reportAgentError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/structured-log-telemetry.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:472934-472957](../../../../../../../reference/runtime/host-main.cjs#L472934-L472957) | `method` | não | `report` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:472934-472957](../../../../../../../reference/runtime/host-main.cjs#L472934-L472957) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:472934

Chamadas escritas diretamente neste corpo: `brandedId`, `errorDetailTags`, `eventLogFields`, `logFields`, `sandErrorTags`, `this.enqueue`.

SHA-256 do trecho: `29269d6737bab4b8400995f6d18debc249f37d277f850b9e70561ab61747afe6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
