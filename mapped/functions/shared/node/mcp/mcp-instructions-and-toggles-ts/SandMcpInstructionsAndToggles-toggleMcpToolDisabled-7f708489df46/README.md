# `SandMcpInstructionsAndToggles.toggleMcpToolDisabled`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-instructions-and-toggles.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-instructions-and-toggles-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:688518-688550](../../../../../../../reference/runtime/host-main.cjs#L688518-L688550) | `method` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:688518-688550](../../../../../../../reference/runtime/host-main.cjs#L688518-L688550) | 6 | 0 | 2 | 1 | 2 | 0 |

### host:688518

Chamadas escritas diretamente neste corpo: `mcpToolPermissionScope`, `new SandMcpConfigError`, `nextRoutedToolDisableToggle`, `rowServerHost`, `settings.getMcpDisabledToolsByServerId`, `settings.getToolPermissions`, `settings.setMcpDisabledToolsByServerId`, `settings.setToolPermissions`, `this.deps.resolveListedDisplayServer`, `this.deps.settingsStore`, `this.listServerTools`, `validateMcpDisplayServerId`, `withMcpToolPermissionPolicy`.

Alvos de atribuição ou incremento: `disabledByServerId[computed]`.

Alvos de lançamento explícito: `SandMcpConfigError`.

SHA-256 do trecho: `f6832b66603e6da9b9250dd0c35885bf3a7f407af288933f2f6f2fe62f0e4563`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
