# `SandStructuredLogTelemetry.reportPendingWake`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/structured-log-telemetry.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:473535-473538](../../../../../../../reference/runtime/host-main.cjs#L473535-L473538) | `method` | não | `report` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:473535-473538](../../../../../../../reference/runtime/host-main.cjs#L473535-L473538) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:473535

Chamadas escritas diretamente neste corpo: `pendingWakeTelemetry`, `this.enqueue`.

SHA-256 do trecho: `3e0b16d93b7c493ca53091841c0dedd2770fd0038900a1bc02bdd7fda2155bfb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
