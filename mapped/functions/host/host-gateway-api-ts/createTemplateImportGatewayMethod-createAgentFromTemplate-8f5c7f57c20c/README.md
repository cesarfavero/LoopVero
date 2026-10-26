# `createTemplateImportGatewayMethod/createAgentFromTemplate`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/host-gateway-api.ts` · [README do módulo](../../../../modules/host/host-gateway-api-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:491742-491837](../../../../../reference/runtime/host-main.cjs#L491742-L491837) | `ArrowFunctionExpression` | não | `{       shareId,       agentId,       expectedActiveVersion,       creatorContext,       language: language2,       isAutomatic     }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491742-491837](../../../../../reference/runtime/host-main.cjs#L491742-L491837) | 2 | 1 | 0 | 2 | 0 | 0 |

### host:491742

Chamadas escritas diretamente neste corpo: `.then`, `mintsByAgentId.delete`, `mintsByAgentId.get`, `mintsByAgentId.keys`, `mintsByAgentId.set`.

SHA-256 do trecho: `864ebadd2645102d2f79f85924dbc7f4c04b70593a716555990644846fb57bca`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
