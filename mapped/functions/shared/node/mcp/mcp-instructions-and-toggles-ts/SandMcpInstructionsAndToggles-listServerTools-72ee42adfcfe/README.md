# `SandMcpInstructionsAndToggles.listServerTools`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-instructions-and-toggles.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-instructions-and-toggles-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:688470-688517](../../../../../../../reference/runtime/host-main.cjs#L688470-L688517) | `method` | sim | `rawServerId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:688470-688517](../../../../../../../reference/runtime/host-main.cjs#L688470-L688517) | 6 | 1 | 2 | 1 | 1 | 0 |

### host:688470

Chamadas escritas diretamente neste corpo: `byName3.has`, `byName3.set`, `byName3.values`, `disabled.includes`, `effectiveMcpToolPermission`, `isDeclaredReadOnlyMcpTool`, `isReadForToolPermissions`, `mcpToolGroupPermissionOf`, `mcpToolPermissionScope`, `new Map`, `new SandMcpConfigError`, `routedToolCarriedPermission`, `rowServerHost`, `settings.getMcpDisabledToolsByServerId`, `settings.getToolPermissions`, `this.deps.getToolsRaw`, `this.deps.resolveListedDisplayServer`, `this.deps.settingsStore`, `this.displayRowForIdentifier`, `validateMcpDisplayServerId`.

Alvos de lançamento explícito: `SandMcpConfigError`.

SHA-256 do trecho: `04c066e4f33b88a4bd9f328ce1e219527554f5a5b26534a08647253d958f7d83`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
