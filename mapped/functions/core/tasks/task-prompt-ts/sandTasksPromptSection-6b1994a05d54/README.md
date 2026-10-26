# `sandTasksPromptSection`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/tasks/task-prompt.ts` · [README do módulo](../../../../../modules/core/tasks/task-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:538895-538900](../../../../../../reference/runtime/sand-eval-runner.cjs#L538895-L538900) | `FunctionDeclaration` | não | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538895-538900](../../../../../../reference/runtime/sand-eval-runner.cjs#L538895-L538900) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:538895

Chamadas escritas diretamente neste corpo: `SAND_TASKS_PROMPT_SECTION.replace`, `encodeURIComponent`.

SHA-256 do trecho: `84e0ea45c46e8a9b07da12d87fb8dc6fe1193393caa1292044b93c91d56c09fa`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
