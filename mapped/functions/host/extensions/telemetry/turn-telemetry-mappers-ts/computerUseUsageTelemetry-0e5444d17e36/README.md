# `computerUseUsageTelemetry`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/turn-telemetry-mappers.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/turn-telemetry-mappers-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:472486-472507](../../../../../../../reference/runtime/host-main.cjs#L472486-L472507) | `FunctionDeclaration` | não | `report` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:472486-472507](../../../../../../../reference/runtime/host-main.cjs#L472486-L472507) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:472486

Chamadas escritas diretamente neste corpo: `Math.round`, `brandedId`, `brandedOrInvalidId`, `logFields`, `sandErrorTags`, `usageTokenTags`.

SHA-256 do trecho: `d8c12e965d36e94264e0eb5a2171a9c615c08a3ac185c275b6973343deccb02c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
