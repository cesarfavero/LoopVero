# `HostTelemetryService.setHttpProxyName`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/host-telemetry-service.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/host-telemetry-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:732124-732149](../../../../../../../reference/runtime/host-main.cjs#L732124-L732149) | `method` | sim | `rawName` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732124-732149](../../../../../../../reference/runtime/host-main.cjs#L732124-L732149) | 3 | 0 | 1 | 1 | 0 | 0 |

### host:732124

Chamadas escritas diretamente neste corpo: `brandedId`, `new Error`, `normalizeHttpProxyName`, `reportFallback`, `store.write`, `this.logs.getHttpProxyName`, `this.logs.reportHttpProxyNameChanged`, `this.logs.setHttpProxyName`, `this.options.clock.now`.

Alvos de atribuição ou incremento: `persisted`.

SHA-256 do trecho: `815329ef05cf69e85da93024575b266cb95f860d0a858b0020d4ec877d28ca16`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
