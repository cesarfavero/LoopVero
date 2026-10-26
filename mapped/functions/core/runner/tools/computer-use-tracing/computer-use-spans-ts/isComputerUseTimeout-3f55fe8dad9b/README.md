# `isComputerUseTimeout`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/computer-use-tracing/computer-use-spans.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/computer-use-tracing/computer-use-spans-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:742961-742963](../../../../../../../../reference/runtime/host-main.cjs#L742961-L742963) | `FunctionDeclaration` | não | `error64` |
| [evaluation:515812-515814](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515812-L515814) | `FunctionDeclaration` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742961-742963](../../../../../../../../reference/runtime/host-main.cjs#L742961-L742963) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:515812-515814](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515812-L515814) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:742961

Chamadas escritas diretamente neste corpo: `isFusedStepGuardTimeoutReason`.

SHA-256 do trecho: `4be4230ac6c420c806de1d0a9f9286faf27ec80c4d7abaf708d819be8343cdab`.

### evaluation:515812

Chamadas escritas diretamente neste corpo: `isFusedStepGuardTimeoutReason`.

SHA-256 do trecho: `ceae6899860469801f8da731aebc2c32f7eaff5459c82d3bd43e7248cbe07bae`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
