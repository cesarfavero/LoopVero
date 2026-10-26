# `describePatternRun/waits`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `agent-engine/loop-detection/agent-loop-detector.js` · [README do módulo](../../../../../modules/agent-engine/loop-detection/agent-loop-detector-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:310954-310954](../../../../../../reference/runtime/sand-eval-runner.cjs#L310954-L310954) | `ArrowFunctionExpression` | não | `msg` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:310954-310954](../../../../../../reference/runtime/sand-eval-runner.cjs#L310954-L310954) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:310954 usa retorno implícito de arrow function.

### evaluation:310954

Chamadas escritas diretamente neste corpo: `.some`.

SHA-256 do trecho: `f163f3b0fd4127efba4c65406ae35dcf089673c9e65301c974af2dc99fd471e3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
