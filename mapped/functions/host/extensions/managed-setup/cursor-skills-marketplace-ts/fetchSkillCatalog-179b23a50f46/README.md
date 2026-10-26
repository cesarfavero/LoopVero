# `fetchSkillCatalog`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/skills/README.md).

**Módulo:** `host/extensions/managed-setup/cursor-skills-marketplace.ts` · [README do módulo](../../../../../../modules/host/extensions/managed-setup/cursor-skills-marketplace-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:683364-683402](../../../../../../../reference/runtime/host-main.cjs#L683364-L683402) | `FunctionDeclaration` | sim | `backend, getAccessToken, getTeamId, getMachineId, report` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683364-683402](../../../../../../../reference/runtime/host-main.cjs#L683364-L683402) | 4 | 2 | 1 | 1 | 0 | 1 |

### host:683364

Chamadas escritas diretamente neste corpo: `client.listMarketplacePlugins`, `createDashboardClient`, `entries.push`, `entries.sort`, `errorLogTag`, `new Set`, `plugin.id.toString`, `rememberPluginLogoUrl`, `report`, `seen.add`, `seen.has`, `skill.name.toLowerCase`.

SHA-256 do trecho: `55e8e14706d3820618629c1183c0935ca3aed952eb75adb7fc478e5bf6325fe6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
