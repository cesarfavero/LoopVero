# `runWithTransientRetry`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/transient-stream-error.ts` · [README do módulo](../../../../../modules/core/runner/transient-stream-error-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:590117-590146](../../../../../../reference/runtime/sand-eval-runner.cjs#L590117-L590146) | `FunctionDeclaration` | sim | `run, policy` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590117-590146](../../../../../../reference/runtime/sand-eval-runner.cjs#L590117-L590146) | 2 | 1 | 2 | 1 | 1 | 1 |

### evaluation:590117

Chamadas escritas diretamente neste corpo: `Math.floor`, `Math.max`, `computeBackoffDelayMs`, `computeServerPacedDelayMs`, `isRetryable`, `policy.onRetry`, `run`, `serverRetryAfterMsFromError`, `sleep2`.

Alvos de atribuição ou incremento: `attempt`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `3d9245f58c61e64f22c7ac9f9f64b14e6026060a8e7d153a70656a984eef19ac`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
