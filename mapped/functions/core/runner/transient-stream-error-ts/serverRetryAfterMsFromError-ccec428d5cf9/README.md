# `serverRetryAfterMsFromError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/transient-stream-error.ts` · [README do módulo](../../../../../modules/core/runner/transient-stream-error-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:736417-736419](../../../../../../reference/runtime/host-main.cjs#L736417-L736419) | `FunctionDeclaration` | não | `error64` |
| [evaluation:590084-590086](../../../../../../reference/runtime/sand-eval-runner.cjs#L590084-L590086) | `FunctionDeclaration` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736417-736419](../../../../../../reference/runtime/host-main.cjs#L736417-L736419) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:590084-590086](../../../../../../reference/runtime/sand-eval-runner.cjs#L590084-L590086) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:736417

Chamadas escritas diretamente neste corpo: `findServerRetryAfterMs`, `new Set`.

SHA-256 do trecho: `64a05f846dcb82689350cbfb9a78da3daaf17a6ad63029c5ed4529ddd636acff`.

### evaluation:590084

Chamadas escritas diretamente neste corpo: `findServerRetryAfterMs`, `new Set`.

SHA-256 do trecho: `83b4ceaad5f68b904f10d7adb1c260ec45f8de52bd0d94762d29e71c59b30134`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
