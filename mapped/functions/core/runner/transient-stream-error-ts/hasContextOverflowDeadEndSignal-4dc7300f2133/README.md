# `hasContextOverflowDeadEndSignal`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/transient-stream-error.ts` · [README do módulo](../../../../../modules/core/runner/transient-stream-error-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:736302-736317](../../../../../../reference/runtime/host-main.cjs#L736302-L736317) | `FunctionDeclaration` | não | `error64, seen` |
| [evaluation:589994-590009](../../../../../../reference/runtime/sand-eval-runner.cjs#L589994-L590009) | `FunctionDeclaration` | não | `error63, seen` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736302-736317](../../../../../../reference/runtime/host-main.cjs#L736302-L736317) | 5 | 0 | 0 | 6 | 0 | 0 |
| [evaluation:589994-590009](../../../../../../reference/runtime/sand-eval-runner.cjs#L589994-L590009) | 5 | 0 | 0 | 6 | 0 | 0 |

### host:736302

Chamadas escritas diretamente neste corpo: `Array.isArray`, `fields3.errors.some`, `hasContextOverflowDeadEndSignal`, `isInputTokenLimitOverflowError`, `isSummarizationRetriesExhaustedError`, `seen.add`, `seen.has`.

SHA-256 do trecho: `b1d9ccd1f7ac3297a164764258b7525ef00db74681b06a1f2190b8765dc2a8b5`.

### evaluation:589994

Chamadas escritas diretamente neste corpo: `Array.isArray`, `fields3.errors.some`, `hasContextOverflowDeadEndSignal`, `isInputTokenLimitOverflowError`, `isSummarizationRetriesExhaustedError`, `seen.add`, `seen.has`.

SHA-256 do trecho: `2dbb3a67873ce52db50a953feebb4f1312b088f23eed8ab805afd42b3ce5022e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
