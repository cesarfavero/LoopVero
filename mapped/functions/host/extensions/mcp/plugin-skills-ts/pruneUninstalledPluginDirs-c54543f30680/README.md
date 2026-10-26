# `pruneUninstalledPluginDirs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/skills/README.md).

**Módulo:** `host/extensions/mcp/plugin-skills.ts` · [README do módulo](../../../../../../modules/host/extensions/mcp/plugin-skills-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:701863-701894](../../../../../../../reference/runtime/host-main.cjs#L701863-L701894) | `FunctionDeclaration` | não | `cacheRoot, listedCacheKeys, indexedFilePaths` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701863-701894](../../../../../../../reference/runtime/host-main.cjs#L701863-L701894) | 4 | 2 | 0 | 1 | 0 | 3 |

### host:701863

Chamadas escritas diretamente neste corpo: `indexedFilePaths.some`, `keep.has`, `listedCacheKeys.map`, `new Set`, `pluginEntry.isDirectory`, `removeSandDataTreeSync`, `slugEntry.isDirectory`.

Alvos de atribuição ou incremento: `pluginEntries`, `slugEntries`.

SHA-256 do trecho: `a86ef4a5dea5768e0983544ad9cacd00443768e0e22ec64f396dc551e255a2ae`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
