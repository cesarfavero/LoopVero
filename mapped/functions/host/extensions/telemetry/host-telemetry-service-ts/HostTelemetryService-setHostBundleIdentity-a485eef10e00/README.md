# `HostTelemetryService.setHostBundleIdentity`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/host-telemetry-service.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/host-telemetry-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:732150-732157](../../../../../../../reference/runtime/host-main.cjs#L732150-L732157) | `method` | sim | `identity` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732150-732157](../../../../../../../reference/runtime/host-main.cjs#L732150-L732157) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:732150

Chamadas escritas diretamente neste corpo: `this.boxLogShipper.start`, `this.logs.setHostBundleIdentity`, `this.startHostCrashMarkerForwarding`.

SHA-256 do trecho: `e947cbd70973453907a543fc8c94728644aa7f1da63124bf7800bd5f4de1c311`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
