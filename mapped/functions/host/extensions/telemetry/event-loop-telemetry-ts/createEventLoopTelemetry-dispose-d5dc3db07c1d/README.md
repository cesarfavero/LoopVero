# `createEventLoopTelemetry/dispose`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/event-loop-telemetry.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/event-loop-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:456310-456314](../../../../../../../reference/runtime/host-main.cjs#L456310-L456314) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:456310-456314](../../../../../../../reference/runtime/host-main.cjs#L456310-L456314) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:456310

Chamadas escritas diretamente neste corpo: `monitor.disable`.

Alvos de atribuição ou incremento: `disposed`.

SHA-256 do trecho: `a4ac7301a7fdf58d04b692965dc60da801209c75b5f085a8f58fd8da8748d64c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
