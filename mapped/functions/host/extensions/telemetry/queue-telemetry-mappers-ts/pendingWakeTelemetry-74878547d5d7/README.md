# `pendingWakeTelemetry`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/queue-telemetry-mappers.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/queue-telemetry-mappers-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:472234-472248](../../../../../../../reference/runtime/host-main.cjs#L472234-L472248) | `FunctionDeclaration` | não | `report` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:472234-472248](../../../../../../../reference/runtime/host-main.cjs#L472234-L472248) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:472234

Chamadas escritas diretamente neste corpo: `brandedErrorTag`, `brandedOrInvalidId`, `logFields`, `roundedMs`.

SHA-256 do trecho: `e792447e20c903b87a75b57462cf837166fc72678c7180424122a8f0967ad124`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
