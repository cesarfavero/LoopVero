# `SkillCommands.updateAgentWorkflow/activeMutation`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/skill-commands.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/skill-commands-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:740309-740312](../../../../../../../reference/runtime/host-main.cjs#L740309-L740312) | `ArrowFunctionExpression` | não | `active` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740309-740312](../../../../../../../reference/runtime/host-main.cjs#L740309-L740312) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:740309

Chamadas escritas diretamente neste corpo: `active.skills.listAll`, `active.skills.update`, `limitSurfacedSkills`.

SHA-256 do trecho: `739c2480ca06ba57728302a23a6ad3642739eaa7eca8888af2c3107f7a9ad8da`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
