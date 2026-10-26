# `SandSubagentHostAdapter.createOrResume`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/agent-adapters.ts` · [README do módulo](../../../../../modules/core/runner/agent-adapters-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:582979-583016](../../../../../../reference/runtime/sand-eval-runner.cjs#L582979-L583016) | `method` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:582979-583016](../../../../../../reference/runtime/sand-eval-runner.cjs#L582979-L583016) | 9 | 0 | 1 | 5 | 3 | 1 |

### evaluation:582979

Chamadas escritas diretamente neste corpo: `crypto.randomUUID`, `isComputerUseSubagentType`, `new SandSubagentDispatchError`, `this.createRunner`, `this.detached.mintSubagentId`, `this.dispatcher.allocateComputerUseWindow`, `this.dispatcher.freeComputerUseWindow`, `this.dispatcher.isRunning`, `this.sessions.has`, `this.sessions.set`.

Alvos de lançamento explícito: `SandSubagentDispatchError`, `error63`.

SHA-256 do trecho: `a667e571f276e64bee0a3166bee9d60bdbf21fc0bedeeea44d8c5e60a7b69ad8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
