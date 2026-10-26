# `unavailableGenerateImage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/evals/runner-options.ts` · [README do módulo](../../../../../modules/core/evals/runner-options-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:596563-596569](../../../../../../reference/runtime/sand-eval-runner.cjs#L596563-L596569) | `ArrowFunctionExpression` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596563-596569](../../../../../../reference/runtime/sand-eval-runner.cjs#L596563-L596569) | 0 | 0 | 0 | 0 | 1 | 0 |

### evaluation:596563

Chamadas escritas diretamente neste corpo: `new ToolCallError`.

Alvos de lançamento explícito: `ToolCallError`.

SHA-256 do trecho: `27d688b2af99e7b3fcca544fa0363c6ffae08b60572c1ab89cc1f2644f3435cc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
