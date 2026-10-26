# `TokenRefreshingSpanExporter.resolveDelegate`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/host-tracing.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/host-tracing-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:731595-731623](../../../../../../../reference/runtime/host-main.cjs#L731595-L731623) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731595-731623](../../../../../../../reference/runtime/host-main.cjs#L731595-L731623) | 4 | 0 | 0 | 2 | 0 | 1 |

### host:731595

Chamadas escritas diretamente neste corpo: `.catch`, `new import_exporter_trace_otlp_proto.OTLPTraceExporter`, `previous.shutdown`, `this.getToken`.

Alvos de atribuição ou incremento: `this.delegate`, `this.delegateToken`, `token`.

SHA-256 do trecho: `a0b61dd4cbabdc6075ad927d1b602a9e6b51b83fbbcf47349f70d8dc68a3821a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
