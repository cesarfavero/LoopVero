# `SandPluginSkillsService.runPass`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/skills/README.md).

**Módulo:** `host/extensions/mcp/plugin-skills.ts` · [README do módulo](../../../../../../modules/host/extensions/mcp/plugin-skills-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:702017-702057](../../../../../../../reference/runtime/host-main.cjs#L702017-L702057) | `method` | sim | `trigger2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702017-702057](../../../../../../../reference/runtime/host-main.cjs#L702017-L702057) | 2 | 0 | 1 | 2 | 1 | 1 |

### host:702017

Chamadas escritas diretamente neste corpo: `Date.now`, `errorLogTag`, `getPluginDataRootDir`, `getPluginSkillsDir`, `getPluginsRootDir`, `nextIndexEntries`, `pruneUninstalledPluginDataDirs`, `pruneUninstalledPluginDirs`, `records2.map`, `skillRecordsIdentity`, `this.current`, `this.currentIndex`, `this.options.load`, `this.options.log`, `this.options.reportSync`, `writePluginSkillsCache`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `466348aca5b4f3559f0ed86f8ea6e6606be75d383be3a0dd97c17b5358b03b92`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
