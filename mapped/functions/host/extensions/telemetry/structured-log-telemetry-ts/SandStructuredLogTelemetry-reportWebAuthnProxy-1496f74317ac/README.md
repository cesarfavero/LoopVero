# `SandStructuredLogTelemetry.reportWebAuthnProxy`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/structured-log-telemetry.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:473267-473270](../../../../../../../reference/runtime/host-main.cjs#L473267-L473270) | `method` | não | `report` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:473267-473270](../../../../../../../reference/runtime/host-main.cjs#L473267-L473270) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:473267

Chamadas escritas diretamente neste corpo: `this.enqueue`, `webauthnProxyTelemetry`.

SHA-256 do trecho: `79273acb56f9388f6d19e5cf52533049c6fae8d6643c478f68e4bea61b225011`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
