# `withSessionMemory/writeMemory`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `evaluation/run.ts` · [README do módulo](../../../../modules/evaluation/run-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:630243-630243](../../../../../reference/runtime/sand-eval-runner.cjs#L630243-L630243) | `ArrowFunctionExpression` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:630243-630243](../../../../../reference/runtime/sand-eval-runner.cjs#L630243-L630243) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:630243 usa retorno implícito de arrow function.

### evaluation:630243

Chamadas escritas diretamente neste corpo: `session.writeMemory`.

SHA-256 do trecho: `13035fcc03705527d3ec1ce679a3e7837f8d2711b0c5e52e97abc76b0f9a1c7d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
