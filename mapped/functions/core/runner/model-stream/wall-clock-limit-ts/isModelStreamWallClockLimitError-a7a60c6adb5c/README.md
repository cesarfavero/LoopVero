# `isModelStreamWallClockLimitError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/model-stream/wall-clock-limit.ts` · [README do módulo](../../../../../../modules/core/runner/model-stream/wall-clock-limit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:586666-586676](../../../../../../../reference/runtime/sand-eval-runner.cjs#L586666-L586676) | `FunctionDeclaration` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586666-586676](../../../../../../../reference/runtime/sand-eval-runner.cjs#L586666-L586676) | 1 | 1 | 0 | 2 | 0 | 0 |

### evaluation:586666

Chamadas escritas diretamente neste corpo: `new Set`, `seen.add`, `seen.has`.

Alvos de atribuição ou incremento: `current2`.

SHA-256 do trecho: `40f719cb101b428852a8241799f2c79c4888a7698ffb332b37b7eab381c1afbf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
