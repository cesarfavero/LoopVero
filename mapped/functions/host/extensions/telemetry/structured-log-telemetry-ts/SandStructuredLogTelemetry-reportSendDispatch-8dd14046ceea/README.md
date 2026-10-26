# `SandStructuredLogTelemetry.reportSendDispatch`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/structured-log-telemetry.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:473515-473518](../../../../../../../reference/runtime/host-main.cjs#L473515-L473518) | `method` | não | `report` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:473515-473518](../../../../../../../reference/runtime/host-main.cjs#L473515-L473518) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:473515

Chamadas escritas diretamente neste corpo: `sendDispatchTelemetry`, `this.enqueue`.

SHA-256 do trecho: `b847925b8ba2c9bfb775ac09da23ecec00fe97d8307c0d9fd1240f9dbd4066d7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
