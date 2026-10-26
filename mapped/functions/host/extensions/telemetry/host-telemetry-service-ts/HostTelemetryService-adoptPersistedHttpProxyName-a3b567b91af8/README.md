# `HostTelemetryService.adoptPersistedHttpProxyName`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/host-telemetry-service.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/host-telemetry-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:732110-732123](../../../../../../../reference/runtime/host-main.cjs#L732110-L732123) | `method` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732110-732123](../../../../../../../reference/runtime/host-main.cjs#L732110-L732123) | 2 | 0 | 1 | 1 | 0 | 1 |

### host:732110

Chamadas escritas diretamente neste corpo: `reportFallback`, `resolveStartupHttpProxyName`, `this.logs.getHttpProxyName`, `this.logs.setHttpProxyName`.

SHA-256 do trecho: `46b8fcfdf785264fa433fece304f54bedf9b91fd60e63d5a5ac3548c2f796935`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
