# `FileSkillStore.constructor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/skills/README.md).

**Módulo:** `host/skills/skill-store.ts` · [README do módulo](../../../../../modules/host/skills/skill-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:720887-720912](../../../../../../reference/runtime/host-main.cjs#L720887-L720912) | `method` | não | `agentDir, globalDir, resolveUserTimeZone = () => void 0` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720887-720912](../../../../../../reference/runtime/host-main.cjs#L720887-L720912) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:720887

Chamadas escritas diretamente neste corpo: `createDebouncePolicy`, `getAgentAutomationsDir`, `getManagedSkillsDir`, `getPluginSkillsDir`, `getPluginsRootDir`, `new FileAutomationStore`, `new GlobalSkillLibrary`, `new WatchedDirectory`, `this.migrateLegacyPerAgentSkills`.

Alvos de atribuição ou incremento: `this.agentDir`, `this.automations`, `this.library`, `this.managedDir`, `this.managedDirWatcher`, `this.pluginSkillsDir`, `this.pluginSkillsDirWatcher`, `this.pluginsRoot`.

SHA-256 do trecho: `a568fcca7c305da30426d2909a3064b504a8978d9ff3c6678389ff4491432fcf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
