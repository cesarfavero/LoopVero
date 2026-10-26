# `SkillCommands.runAgentWorkflowNow`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/skill-commands.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/skill-commands-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:740354-740358](../../../../../../../reference/runtime/host-main.cjs#L740354-L740358) | `method` | sim | `agentId, workflowId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740354-740358](../../../../../../../reference/runtime/host-main.cjs#L740354-L740358) | 1 | 0 | 2 | 1 | 0 | 0 |

### host:740354

Chamadas escritas diretamente neste corpo: `skillToAutomation`, `this.getSkillForAgent`, `this.tm.sendPrompt`.

SHA-256 do trecho: `3d64b99259323da339bc52caefdfa590b6eaca47bf9593d77b941305fac43fe4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
