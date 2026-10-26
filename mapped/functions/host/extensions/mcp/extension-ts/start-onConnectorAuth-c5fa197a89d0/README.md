# `start/onConnectorAuth`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `host/extensions/mcp/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/mcp/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:702488-702494](../../../../../../../reference/runtime/host-main.cjs#L702488-L702494) | `ArrowFunctionExpression` | não | `report` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702488-702494](../../../../../../../reference/runtime/host-main.cjs#L702488-L702494) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:702488

Chamadas escritas diretamente neste corpo: `connectorAuthAnalyticsProps`, `context2.deps.telemetry.analytics.trackEvent`, `context2.deps.telemetry.logs.reportConnectorAuth`.

SHA-256 do trecho: `a8be8299d857dd4ad612e0cbc8e0a8bc8249dd65bc58e696e65e913d4868b226`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
