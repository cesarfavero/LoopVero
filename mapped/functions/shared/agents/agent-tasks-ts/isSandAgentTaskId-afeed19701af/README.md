# `isSandAgentTaskId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tasks/README.md).

**Módulo:** `shared/agents/agent-tasks.ts` · [README do módulo](../../../../../modules/shared/agents/agent-tasks-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:710842-710844](../../../../../../reference/runtime/host-main.cjs#L710842-L710844) | `FunctionDeclaration` | não | `value` |
| [evaluation:524655-524657](../../../../../../reference/runtime/sand-eval-runner.cjs#L524655-L524657) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:710842-710844](../../../../../../reference/runtime/host-main.cjs#L710842-L710844) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:524655-524657](../../../../../../reference/runtime/sand-eval-runner.cjs#L524655-L524657) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:710842

Chamadas escritas diretamente neste corpo: `SAND_AGENT_TASK_ID_PATTERN.test`.

SHA-256 do trecho: `a67c5fe60167e44eacaf69413803f7bdca847fc91726e6559400ac33b55027fb`.

### evaluation:524655

Chamadas escritas diretamente neste corpo: `SAND_AGENT_TASK_ID_PATTERN.test`.

SHA-256 do trecho: `a67c5fe60167e44eacaf69413803f7bdca847fc91726e6559400ac33b55027fb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
