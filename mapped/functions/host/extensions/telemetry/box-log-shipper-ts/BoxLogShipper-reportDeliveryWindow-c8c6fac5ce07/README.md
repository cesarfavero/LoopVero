# `BoxLogShipper.reportDeliveryWindow`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/box-log-shipper.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/box-log-shipper-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:731099-731115](../../../../../../../reference/runtime/host-main.cjs#L731099-L731115) | `method` | não | `path33, candidateEndOffset, records2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731099-731115](../../../../../../../reference/runtime/host-main.cjs#L731099-L731115) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:731099

Chamadas escritas diretamente neste corpo: `this.clock.monotonicNow`, `this.pendingDeliveryWindows.set`, `this.pendingWindowStartedAtMs.has`, `this.pendingWindowStartedAtMs.set`, `this.reportBatch`, `this.setOffset`.

SHA-256 do trecho: `2f4bccf1b532b9c4ab320fe2354f3f13a59de918adc5b955131b05603652f930`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
