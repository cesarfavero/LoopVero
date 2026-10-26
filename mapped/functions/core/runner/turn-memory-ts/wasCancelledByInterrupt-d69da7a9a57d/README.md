# `wasCancelledByInterrupt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/turn-memory.ts` · [README do módulo](../../../../../modules/core/runner/turn-memory-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:590604-590606](../../../../../../reference/runtime/sand-eval-runner.cjs#L590604-L590606) | `FunctionDeclaration` | não | `error63, continuity` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590604-590606](../../../../../../reference/runtime/sand-eval-runner.cjs#L590604-L590606) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:590604

Chamadas escritas diretamente neste corpo: `continuity.wasInterrupted`, `isCancellationError`.

SHA-256 do trecho: `a1bfbab1e699b6974e0775d843ebfdd3781e9414b66c434ed3e2906830e34107`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
