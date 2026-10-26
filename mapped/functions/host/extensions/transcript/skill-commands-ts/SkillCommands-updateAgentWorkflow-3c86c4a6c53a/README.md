# `SkillCommands.updateAgentWorkflow`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/skill-commands.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/skill-commands-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:740306-740315](../../../../../../../reference/runtime/host-main.cjs#L740306-L740315) | `method` | sim | `agentId, workflowId, spec` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740306-740315](../../../../../../../reference/runtime/host-main.cjs#L740306-L740315) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:740306

Chamadas escritas diretamente neste corpo: `this.enqueueSkillMutation`.

SHA-256 do trecho: `5b52e5eb8a295c0c57abe9efed3dc52de691c4e8f64a29e1fd8bd072d8ea6485`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
