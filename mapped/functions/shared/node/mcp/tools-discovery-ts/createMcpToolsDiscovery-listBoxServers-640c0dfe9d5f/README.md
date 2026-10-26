# `createMcpToolsDiscovery/_listBoxServers`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/tools-discovery.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:690934-690973](../../../../../../../reference/runtime/host-main.cjs#L690934-L690973) | `FunctionDeclaration` | sim | `serverIdentifiers, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690934-690973](../../../../../../../reference/runtime/host-main.cjs#L690934-L690973) | 3 | 0 | 4 | 2 | 1 | 0 |

### host:690934

Chamadas escritas diretamente neste corpo: `.catch`, `.filter`, `.map`, `_ensureBoxServersPushed`, `boxMcpExec.listTools`, `core2.definitionSource.ensureConfigLoaded`, `core2.definitionSource.getServersMissingPluginFiles`, `core2.definitionSource.reloadBoxServers`, `new SandMcpConfigError`, `new Set`, `servers.filter`.

Alvos de lançamento explícito: `SandMcpConfigError`.

SHA-256 do trecho: `9560a8b708623d5db799bfc3ba9616fe385d752fbc7d65366a75aed01c2b38d2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
