# `workerFailureReason`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/mcp/playwright-run-code-errors.ts` · [README do módulo](../../../../../modules/core/mcp/playwright-run-code-errors-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:700257-700266](../../../../../../reference/runtime/host-main.cjs#L700257-L700266) | `FunctionDeclaration` | não | `failure3, exited, exitCode, termSignal` |
| [evaluation:514038-514047](../../../../../../reference/runtime/sand-eval-runner.cjs#L514038-L514047) | `FunctionDeclaration` | não | `failure3, exited, exitCode, termSignal` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700257-700266](../../../../../../reference/runtime/host-main.cjs#L700257-L700266) | 8 | 0 | 0 | 8 | 0 | 0 |
| [evaluation:514038-514047](../../../../../../reference/runtime/sand-eval-runner.cjs#L514038-L514047) | 8 | 0 | 0 | 8 | 0 | 0 |

### host:700257

Chamadas escritas diretamente neste corpo: `HEAP_OOM.test`, `RLIMIT_ERROR.test`, `RLIMIT_SIGNALS.has`, `RUN_CODE_INVALID_RESULTS.has`, `failure3.message.startsWith`.

SHA-256 do trecho: `1324149bb784a71c8a36c19be53c7ff228eab3a732f479f01ef47dc3ccbd01ca`.

### evaluation:514038

Chamadas escritas diretamente neste corpo: `HEAP_OOM.test`, `RLIMIT_ERROR.test`, `RLIMIT_SIGNALS.has`, `RUN_CODE_INVALID_RESULTS.has`, `failure3.message.startsWith`.

SHA-256 do trecho: `1324149bb784a71c8a36c19be53c7ff228eab3a732f479f01ef47dc3ccbd01ca`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
