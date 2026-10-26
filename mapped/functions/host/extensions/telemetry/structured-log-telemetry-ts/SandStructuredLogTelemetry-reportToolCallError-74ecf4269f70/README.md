# `SandStructuredLogTelemetry.reportToolCallError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/structured-log-telemetry.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:472818-472832](../../../../../../../reference/runtime/host-main.cjs#L472818-L472832) | `method` | não | `report` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:472818-472832](../../../../../../../reference/runtime/host-main.cjs#L472818-L472832) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:472818

Chamadas escritas diretamente neste corpo: `brandedConnectorTag`, `brandedErrorTag`, `brandedId`, `brandedOrInvalidId`, `cappedToolCallMs`, `logFields`, `this.enqueue`.

SHA-256 do trecho: `273dfb1ce5b08d83f4e4a01b91893399943daaa578f4dcb9bf047902564b9cbe`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
