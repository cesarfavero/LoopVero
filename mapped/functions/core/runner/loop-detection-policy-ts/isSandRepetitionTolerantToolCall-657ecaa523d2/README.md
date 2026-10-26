# `isSandRepetitionTolerantToolCall`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/loop-detection-policy.ts` · [README do módulo](../../../../../modules/core/runner/loop-detection-policy-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:483283-483289](../../../../../../reference/runtime/sand-eval-runner.cjs#L483283-L483289) | `FunctionDeclaration` | não | `toolName, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:483283-483289](../../../../../../reference/runtime/sand-eval-runner.cjs#L483283-L483289) | 3 | 0 | 0 | 4 | 0 | 0 |

### evaluation:483283

Chamadas escritas diretamente neste corpo: `REPETITION_TOLERANT_TOOL_NAMES.has`, `actionOf`, `isTolerantComputerAction`, `resolveEffectiveToolCall`.

SHA-256 do trecho: `ad450d9b681f7e2a2ec10272e75997d76e089a67d5aced9686afff0ee79478e8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
