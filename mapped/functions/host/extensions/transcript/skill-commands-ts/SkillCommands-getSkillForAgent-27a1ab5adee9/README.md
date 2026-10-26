# `SkillCommands.getSkillForAgent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/skill-commands.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/skill-commands-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:740359-740365](../../../../../../../reference/runtime/host-main.cjs#L740359-L740365) | `method` | sim | `agentId, workflowId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740359-740365](../../../../../../../reference/runtime/host-main.cjs#L740359-L740365) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:740359

Chamadas escritas diretamente neste corpo: `active.skills.get`, `this.tm.sessionStore.getAgentSkill`.

SHA-256 do trecho: `c1b2809842bf4d35f4dfc278757490484c55bd548b70db88a6e4f6e8d5c4dc70`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
