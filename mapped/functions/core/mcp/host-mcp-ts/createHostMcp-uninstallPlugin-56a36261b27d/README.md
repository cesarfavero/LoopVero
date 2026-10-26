# `createHostMcp/uninstallPlugin`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/host-mcp.ts` · [README do módulo](../../../../../modules/core/mcp/host-mcp-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:701036-701045](../../../../../../reference/runtime/host-main.cjs#L701036-L701045) | `FunctionExpression` | sim | `pluginId` |
| [host:701245-701251](../../../../../../reference/runtime/host-main.cjs#L701245-L701251) | `FunctionExpression` | sim | `pluginId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701036-701045](../../../../../../reference/runtime/host-main.cjs#L701036-L701045) | 1 | 0 | 2 | 1 | 0 | 0 |
| [host:701245-701251](../../../../../../reference/runtime/host-main.cjs#L701245-L701251) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:701036

Chamadas escritas diretamente neste corpo: `dropLiveSkillReferences`, `manager.uninstallPlugin`, `pluginSkillSourceUrls`, `serversMutated`, `syncPluginSkillsInBackground`, `uninstallClearedInstallRecord`.

SHA-256 do trecho: `08aa953df9b9ac392265dff8f68389352e3cf0869e5440029f9727c0cf1da643`.

### host:701245

Chamadas escritas diretamente neste corpo: `mutations.uninstallPlugin`.

SHA-256 do trecho: `32b4ba0e12132edd89dbc18ae3c328896342cf433d847efbfa3e0431e29e2708`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
