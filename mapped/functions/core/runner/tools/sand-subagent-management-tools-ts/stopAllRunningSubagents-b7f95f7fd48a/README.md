# `stopAllRunningSubagents`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/tools/sand-subagent-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-subagent-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:780933-780975](../../../../../../../reference/runtime/host-main.cjs#L780933-L780975) | `FunctionDeclaration` | sim | `controller, args` |
| [evaluation:581280-581322](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581280-L581322) | `FunctionDeclaration` | sim | `controller, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780933-780975](../../../../../../../reference/runtime/host-main.cjs#L780933-L780975) | 4 | 1 | 2 | 1 | 0 | 0 |
| [evaluation:581280-581322](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581280-L581322) | 4 | 1 | 2 | 1 | 0 | 0 |

### host:780933

Chamadas escritas diretamente neste corpo: `Promise.all`, `alreadyFinished.push`, `controller.listRunningSubagents`, `failed2.push`, `running.map`, `stopDelegatedWorkSafely`, `stopped2.push`, `stoppedSubagentOf`.

SHA-256 do trecho: `fd6ecc192e7094d1ae1f1f5b480c083855e59a671ff061bd89575779c7c61979`.

### evaluation:581280

Chamadas escritas diretamente neste corpo: `Promise.all`, `alreadyFinished.push`, `controller.listRunningSubagents`, `failed.push`, `running.map`, `stopDelegatedWorkSafely`, `stopped.push`, `stoppedSubagentOf`.

SHA-256 do trecho: `e2406b22c01f28d6d7f85ea44b0df16d5d47831b9e73fb733c265a5a8c6d9667`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
