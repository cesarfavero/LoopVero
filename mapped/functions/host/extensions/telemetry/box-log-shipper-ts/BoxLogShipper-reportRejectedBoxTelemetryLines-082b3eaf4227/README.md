# `BoxLogShipper.reportRejectedBoxTelemetryLines`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/box-log-shipper.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/box-log-shipper-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:731088-731098](../../../../../../../reference/runtime/host-main.cjs#L731088-L731098) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731088-731098](../../../../../../../reference/runtime/host-main.cjs#L731088-L731098) | 1 | 1 | 0 | 0 | 0 | 0 |

### host:731088

Chamadas escritas diretamente neste corpo: `this.reportHostLog`.

Alvos de atribuição ou incremento: `tally.logged`.

SHA-256 do trecho: `9bcf42b466a2c4c11616aa3474860f069a5b7c39207e8e5e2f7d2ee2255fa660`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
