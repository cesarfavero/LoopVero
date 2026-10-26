# `queueWatchdogTelemetry`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/queue-telemetry-mappers.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/queue-telemetry-mappers-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:472202-472216](../../../../../../../reference/runtime/host-main.cjs#L472202-L472216) | `FunctionDeclaration` | não | `report` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:472202-472216](../../../../../../../reference/runtime/host-main.cjs#L472202-L472216) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:472202

Chamadas escritas diretamente neste corpo: `Math.round`, `brandedOrInvalidId`, `logFields`, `roundedMs`.

SHA-256 do trecho: `995b39ac3ab945faac29d08ea02866584afae758d61fb4ac3e09d726a87aa897`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
