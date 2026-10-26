# `collectExecutorText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/sand-memory.ts` · [README do módulo](../../../../../modules/core/runner/sand-memory-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:536332-536343](../../../../../../reference/runtime/sand-eval-runner.cjs#L536332-L536343) | `FunctionDeclaration` | sim | `executor, ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:536332-536343](../../../../../../reference/runtime/sand-eval-runner.cjs#L536332-L536343) | 3 | 1 | 0 | 1 | 1 | 0 |

### evaluation:536332

Chamadas escritas diretamente neste corpo: `String`, `executor.stream`, `new Error`.

Alvos de atribuição ou incremento: `text3`.

Alvos de lançamento explícito: `ConditionalExpression`.

SHA-256 do trecho: `c033e829fa7c185ecd426f1167136231528f113896cda115b8a8e2aa153f2811`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
