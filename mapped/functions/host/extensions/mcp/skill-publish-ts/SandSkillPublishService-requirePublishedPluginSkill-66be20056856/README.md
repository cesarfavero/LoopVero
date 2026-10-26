# `SandSkillPublishService.requirePublishedPluginSkill`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/skills/README.md).

**Módulo:** `host/extensions/mcp/skill-publish.ts` · [README do módulo](../../../../../../modules/host/extensions/mcp/skill-publish-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:702313-702328](../../../../../../../reference/runtime/host-main.cjs#L702313-L702328) | `method` | não | `workflowId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702313-702328](../../../../../../../reference/runtime/host-main.cjs#L702313-L702328) | 3 | 0 | 0 | 1 | 3 | 0 |

### host:702313

Chamadas escritas diretamente neste corpo: `index.skills.find`, `new SandSkillPublishError`, `this.options.pluginSkills.currentIndex`.

Alvos de lançamento explícito: `SandSkillPublishError`.

SHA-256 do trecho: `100204cd3f60199517377127f509e094e7f273a781388b57a101ba1061f07d79`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
