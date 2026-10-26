# `SandSkillPublishService.resync`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/skills/README.md).

**Módulo:** `host/extensions/mcp/skill-publish.ts` · [README do módulo](../../../../../../modules/host/extensions/mcp/skill-publish-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:702187-702202](../../../../../../../reference/runtime/host-main.cjs#L702187-L702202) | `method` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702187-702202](../../../../../../../reference/runtime/host-main.cjs#L702187-L702202) | 1 | 0 | 3 | 1 | 0 | 0 |

### host:702187

Chamadas escritas diretamente neste corpo: `readSkillFrontmatter`, `requireManifestName`, `skillsRootRelativePath`, `this.requirePublishedPluginSkill`, `this.syncBestEffort`, `this.upload`.

SHA-256 do trecho: `d2a3a3d09759f5a3f247f1c31f783be953db837d336f786aa86b08f478148dab`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
