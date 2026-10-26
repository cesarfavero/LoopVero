# `hostCrashMarkerMetadata`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/host-crash-marker-forward.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/host-crash-marker-forward-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:471548-471569](../../../../../../../reference/runtime/host-main.cjs#L471548-L471569) | `FunctionDeclaration` | não | `marker17` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:471548-471569](../../../../../../../reference/runtime/host-main.cjs#L471548-L471569) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:471548

Chamadas escritas diretamente neste corpo: `Math.round`, `brandedErrorTag`, `brandedId`, `logFields`.

SHA-256 do trecho: `91ae6688901612f3107895fae25c66579724280c40cf6b58903ead4192f4d362`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
