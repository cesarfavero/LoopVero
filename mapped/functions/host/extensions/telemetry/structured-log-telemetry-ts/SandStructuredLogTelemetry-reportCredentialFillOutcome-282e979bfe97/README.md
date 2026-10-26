# `SandStructuredLogTelemetry.reportCredentialFillOutcome`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/structured-log-telemetry.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:473067-473141](../../../../../../../reference/runtime/host-main.cjs#L473067-L473141) | `method` | não | `report` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:473067-473141](../../../../../../../reference/runtime/host-main.cjs#L473067-L473141) | 14 | 0 | 0 | 0 | 0 | 0 |

### host:473067

Chamadas escritas diretamente neste corpo: `Math.floor`, `Math.max`, `Math.min`, `Math.round`, `SandError.credentialSubmitFailed`, `booleanTag`, `brandLiteralEnum`, `brandedErrorClass`, `brandedId`, `logFields`, `sandErrorTags`, `this.enqueue`.

SHA-256 do trecho: `3c43e5f5e5c6e340f8809181cfa7e4606a8848f786023e7b7e40621d23eb70ea`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
