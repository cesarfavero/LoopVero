# `createTurnRunShell/runTurn/onRequestStart/onStreamEnd`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-run-shell.ts` · [README do módulo](../../../../../modules/core/runner/turn-run-shell-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:592052-592060](../../../../../../reference/runtime/sand-eval-runner.cjs#L592052-L592060) | `ArrowFunctionExpression` | não | `outcome` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:592052-592060](../../../../../../reference/runtime/sand-eval-runner.cjs#L592052-L592060) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:592052

Chamadas escritas diretamente neste corpo: `cancelRun`, `new SandRunAbortError`.

SHA-256 do trecho: `8f8f06a862f2ae30d7cf7bb19313d1e309fe4cc2eafd309648f61636e97f1e29`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
