# `createBackgroundWatches/drainBackgroundShellWork`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/background-work.ts` · [README do módulo](../../../../../modules/core/runner/background-work-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:490689-490699](../../../../../../reference/runtime/sand-eval-runner.cjs#L490689-L490699) | `ArrowFunctionExpression` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:490689-490699](../../../../../../reference/runtime/sand-eval-runner.cjs#L490689-L490699) | 0 | 1 | 1 | 0 | 0 | 0 |

### evaluation:490689

Chamadas escritas diretamente neste corpo: `hasRunningBackgroundShellWork`, `new Promise`.

SHA-256 do trecho: `4c91d95119a137aef0d48c4aeee4f7bc9d7ed556fb101cc8ae39add1485f1c32`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
