# `queueDequeuedTelemetry`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/queue-telemetry-mappers.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/queue-telemetry-mappers-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:472185-472201](../../../../../../../reference/runtime/host-main.cjs#L472185-L472201) | `FunctionDeclaration` | não | `report` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:472185-472201](../../../../../../../reference/runtime/host-main.cjs#L472185-L472201) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:472185

Chamadas escritas diretamente neste corpo: `Math.round`, `brandedOrInvalidId`, `logFields`, `roundedMs`.

SHA-256 do trecho: `ddb27624cca7a12201b7538ab62842b054d41d8dd2852bf90fbad43f4cbdf6bc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
