# `traceComputerUseSpan`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/computer-use-tracing/computer-use-spans.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/computer-use-tracing/computer-use-spans-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:743039-743054](../../../../../../../../reference/runtime/host-main.cjs#L743039-L743054) | `FunctionDeclaration` | sim | `ctx, name18, attributes, run` |
| [evaluation:515890-515905](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515890-L515905) | `FunctionDeclaration` | sim | `ctx, name18, attributes, run` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:743039-743054](../../../../../../../../reference/runtime/host-main.cjs#L743039-L743054) | 0 | 0 | 1 | 1 | 1 | 2 |
| [evaluation:515890-515905](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515890-L515905) | 0 | 0 | 1 | 1 | 1 | 2 |

### host:743039

Chamadas escritas diretamente neste corpo: `__callDispose`, `__using`, `run`, `span.failIfNoOutcome`, `startComputerUseSpan`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `3191205894729efc329728fcbf4af1e205620512294c78601506caf8776a1823`.

### evaluation:515890

Chamadas escritas diretamente neste corpo: `__callDispose`, `__using`, `run`, `span.failIfNoOutcome`, `startComputerUseSpan`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `528524fc9ad3c8a22d372ccaea7c9bb8c104445a556b5fdc542b3ab071eee6f0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
