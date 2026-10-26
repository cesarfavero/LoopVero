# `SkillCommands.enqueueSkillMutation`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/skill-commands.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/skill-commands-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:740234-740267](../../../../../../../reference/runtime/host-main.cjs#L740234-L740267) | `method` | não | `{     agentId,     activeMutation,     inactiveMutation   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740234-740267](../../../../../../../reference/runtime/host-main.cjs#L740234-L740267) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:740234

Chamadas escritas diretamente neste corpo: `this.tm.automationRuntime.enqueueAutomationLifecycleMutation`.

SHA-256 do trecho: `6f33bcc9ce63d0fd197935a69cfb03c0db96ed013831ceec9e9254cb529580ee`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
