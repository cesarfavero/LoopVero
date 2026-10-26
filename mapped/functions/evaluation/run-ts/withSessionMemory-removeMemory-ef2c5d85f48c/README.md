# `withSessionMemory/removeMemory`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `evaluation/run.ts` · [README do módulo](../../../../modules/evaluation/run-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:630244-630244](../../../../../reference/runtime/sand-eval-runner.cjs#L630244-L630244) | `ArrowFunctionExpression` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:630244-630244](../../../../../reference/runtime/sand-eval-runner.cjs#L630244-L630244) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:630244 usa retorno implícito de arrow function.

### evaluation:630244

Chamadas escritas diretamente neste corpo: `session.removeMemory`.

SHA-256 do trecho: `aebbe5e7b95bbc9b607418667dcd5a220d2823dbef5f367471149090fc69c883`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
