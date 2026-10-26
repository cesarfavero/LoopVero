# `createSandTaskTool`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/subagents/sand-task-tool.ts` · [README do módulo](../../../../../../modules/core/runner/subagents/sand-task-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:763493-763540](../../../../../../../reference/runtime/host-main.cjs#L763493-L763540) | `FunctionDeclaration` | não | `args` |
| [evaluation:556535-556582](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556535-L556582) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763493-763540](../../../../../../../reference/runtime/host-main.cjs#L763493-L763540) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:556535-556582](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556535-L556582) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:763493

Chamadas escritas diretamente neste corpo: `args.gates.executorForkContext`, `args.gates.taskSubagentRoster`, `createTaskTool`, `hasExecutorSubagent`, `new CombinedResourceAccessor`, `remoteBoxResourceAccessor.get`, `resourceEntry`, `sandTaskDescriptionBase`, `withSubagentLaunchPrefetch`.

SHA-256 do trecho: `c2b54ac4156ae150a03bca301b0bdf8e7e0731111f3bbe9ec2062a9298922e0d`.

### evaluation:556535

Chamadas escritas diretamente neste corpo: `args.gates.executorForkContext`, `args.gates.taskSubagentRoster`, `createTaskTool`, `hasExecutorSubagent`, `new CombinedResourceAccessor`, `remoteBoxResourceAccessor.get`, `resourceEntry`, `sandTaskDescriptionBase`, `withSubagentLaunchPrefetch`.

SHA-256 do trecho: `c2b54ac4156ae150a03bca301b0bdf8e7e0731111f3bbe9ec2062a9298922e0d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
