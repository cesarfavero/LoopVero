# `createStreamAttempt/runStreamOnce/persistCheckpoint`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/stream-attempt.ts` · [README do módulo](../../../../../modules/core/runner/stream-attempt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:590210-590226](../../../../../../reference/runtime/sand-eval-runner.cjs#L590210-L590226) | `ArrowFunctionExpression` | sim | `checkpointCtx, checkpoint` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590210-590226](../../../../../../reference/runtime/sand-eval-runner.cjs#L590210-L590226) | 1 | 0 | 1 | 1 | 1 | 1 |

### evaluation:590210

Chamadas escritas diretamente neste corpo: `.then`, `Promise.resolve`, `checkpointOperations.add`, `checkpointOperations.delete`, `isCurrentAttempt`.

Alvos de atribuição ou incremento: `checkpointFailure`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `f014b9d7184d24654dbb0eccfad6c03c18a9958181115875cdb5910ee55b5261`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
