# `BoxLogShipper.maybeReportProgress`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/box-log-shipper.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/box-log-shipper-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:731175-731204](../../../../../../../reference/runtime/host-main.cjs#L731175-L731204) | `method` | não | `files` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731175-731204](../../../../../../../reference/runtime/host-main.cjs#L731175-L731204) | 1 | 2 | 0 | 1 | 0 | 0 |

### host:731175

Chamadas escritas diretamente neste corpo: `Math.max`, `Math.min`, `saturatingAdd`, `this.clock.monotonicNow`, `this.offsets.get`, `this.pendingWindowStartedAtMs.values`, `this.reportBoxLogShip`, `toNonnegativeSafeInteger`.

Alvos de atribuição ou incremento: `bytesDelivered`, `bytesWritten`, `oldestPendingWindowAgeMs`, `this.lastProgressReportAtMs`.

SHA-256 do trecho: `22a304bddb2cc4173287bada5b7e69d72ff9bfa63da983f64a1198d08476dc4d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
