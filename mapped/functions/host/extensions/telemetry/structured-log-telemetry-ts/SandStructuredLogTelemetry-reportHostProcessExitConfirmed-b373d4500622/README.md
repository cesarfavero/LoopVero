# `SandStructuredLogTelemetry.reportHostProcessExitConfirmed`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/structured-log-telemetry.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:473587-473596](../../../../../../../reference/runtime/host-main.cjs#L473587-L473596) | `method` | sim | `marker17` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:473587-473596](../../../../../../../reference/runtime/host-main.cjs#L473587-L473596) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:473587

Chamadas escritas diretamente neste corpo: `SandError.unregistered`, `hostCrashMarkerMetadata`, `logFields`, `sandErrorTags`, `this.transport.shipConfirmed`.

SHA-256 do trecho: `fdcae1b3a8f5acd0229f8119491ad1dc217e9e78fca4adcaefb5dab94071bdf8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
