# `SkillCommands.getAgentWorkflows`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/skill-commands.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/skill-commands-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:740289-740295](../../../../../../../reference/runtime/host-main.cjs#L740289-L740295) | `method` | sim | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740289-740295](../../../../../../../reference/runtime/host-main.cjs#L740289-L740295) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:740289

Chamadas escritas diretamente neste corpo: `active.skills.listAll`, `limitSurfacedSkills`, `this.tm.sessionStore.listAgentSkills`.

SHA-256 do trecho: `27df237c1d8cdc0d886cb80975d6497066ca73924e3e167c17ad09456ff7e74e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
