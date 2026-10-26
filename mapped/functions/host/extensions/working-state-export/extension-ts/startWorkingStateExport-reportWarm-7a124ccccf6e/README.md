# `startWorkingStateExport/reportWarm`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/working-state-export/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/working-state-export/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:786093-786096](../../../../../../../reference/runtime/host-main.cjs#L786093-L786096) | `ArrowFunctionExpression` | não | `report` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786093-786096](../../../../../../../reference/runtime/host-main.cjs#L786093-L786096) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:786093

Chamadas escritas diretamente neste corpo: `context2.deps.telemetry.logs.reportWorkingStateWarm`, `recordWorkingStateWarmMetrics`.

SHA-256 do trecho: `355f442907922a1a593fa3485c7db3e0c2a980b706eb4810cec78fc4cadf63a6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
