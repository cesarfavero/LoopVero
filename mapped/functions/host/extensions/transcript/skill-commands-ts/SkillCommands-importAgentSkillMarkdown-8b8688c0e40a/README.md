# `SkillCommands.importAgentSkillMarkdown`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/skill-commands.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/skill-commands-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:740326-740339](../../../../../../../reference/runtime/host-main.cjs#L740326-L740339) | `method` | sim | `agentId, markdown, fallbackName` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740326-740339](../../../../../../../reference/runtime/host-main.cjs#L740326-L740339) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:740326

Chamadas escritas diretamente neste corpo: `active.skills.importMarkdown`, `active.skills.listAll`, `limitSurfacedSkills`, `this.tm.sessionStore.importAgentSkillMarkdown`.

SHA-256 do trecho: `16711a6a5737f5c62d0c6c65c36a6137a91ec57694aac862035bb1edfccf4b23`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
