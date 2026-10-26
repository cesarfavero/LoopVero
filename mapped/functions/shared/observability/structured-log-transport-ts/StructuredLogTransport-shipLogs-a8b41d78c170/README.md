# `StructuredLogTransport.shipLogs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/observability/structured-log-transport.ts` · [README do módulo](../../../../../modules/shared/observability/structured-log-transport-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:453349-453382](../../../../../../reference/runtime/host-main.cjs#L453349-L453382) | `method` | sim | `logs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453349-453382](../../../../../../reference/runtime/host-main.cjs#L453349-L453382) | 3 | 0 | 1 | 3 | 0 | 1 |

### host:453349

Chamadas escritas diretamente neste corpo: `isValidLogShipReceipt`, `new AbortController`, `this.options.createClient`, `this.options.submitDeadline.run`, `this.reportSubmitTimeout`, `this.requestAbortControllers.add`, `this.requestAbortControllers.delete`.

Alvos de atribuição ou incremento: `attemptedClient`, `this.client`, `this.submitTimeoutStreakActive`.

SHA-256 do trecho: `beed7f17cdc099fe793406400d02513a87fcd49ed747e8147f8d8afaeaade3e5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
