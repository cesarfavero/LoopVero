# `SandStructuredLogTelemetry.reportTurnInterrupt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/structured-log-telemetry.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:473422-473425](../../../../../../../reference/runtime/host-main.cjs#L473422-L473425) | `method` | não | `report` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:473422-473425](../../../../../../../reference/runtime/host-main.cjs#L473422-L473425) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:473422

Chamadas escritas diretamente neste corpo: `this.enqueue`, `turnInterruptTelemetry`.

SHA-256 do trecho: `795d78bea3e8dcce76f9c35b0320812722c158c270a4ce7220ba424f8ac3bb30`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
