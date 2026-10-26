# `createHostMcp/installEntry`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/host-mcp.ts` · [README do módulo](../../../../../modules/core/mcp/host-mcp-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:701016-701025](../../../../../../reference/runtime/host-main.cjs#L701016-L701025) | `FunctionExpression` | sim | `request5` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701016-701025](../../../../../../reference/runtime/host-main.cjs#L701016-L701025) | 0 | 0 | 2 | 1 | 0 | 0 |

### host:701016

Chamadas escritas diretamente neste corpo: `dropLiveSkillReferences`, `manager.installEntry`, `pluginSkillSourceUrls`, `serversMutated`, `syncPluginSkillsInBackground`.

SHA-256 do trecho: `8e3e305212b9205993434b9baf78ff5d422731656ae3fee7cc6b43b09b11d1ef`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
