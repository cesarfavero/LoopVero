# `HostTelemetryService.forwardDesktopHealth/setLast`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/host-telemetry-service.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/host-telemetry-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:732287-732290](../../../../../../../reference/runtime/host-main.cjs#L732287-L732290) | `ArrowFunctionExpression` | não | `revision, atMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732287-732290](../../../../../../../reference/runtime/host-main.cjs#L732287-L732290) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:732287

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

Alvos de atribuição ou incremento: `this.lastForwardedDesktopHealthAtMs`, `this.lastForwardedDesktopHealthRevision`.

SHA-256 do trecho: `bbd5caeeb14cd3144c761c1a9d9cb43cecc26dc7f2e1f25916afca2ef1190e1b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
