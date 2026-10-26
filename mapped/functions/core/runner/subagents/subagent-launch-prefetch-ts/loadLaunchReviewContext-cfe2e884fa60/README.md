# `loadLaunchReviewContext`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/subagents/subagent-launch-prefetch.ts` · [README do módulo](../../../../../../modules/core/runner/subagents/subagent-launch-prefetch-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:556496-556514](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556496-L556514) | `FunctionDeclaration` | sim | `ctx, prefetched, load2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:556496-556514](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556496-L556514) | 0 | 0 | 1 | 1 | 0 | 1 |

### evaluation:556496

Chamadas escritas diretamente neste corpo: `String`, `__callDispose`, `__using`, `createSpan`, `ctx.withName`, `launchReviewContextMs.histogram`, `load2`, `performance.now`, `span.span.setAttribute`.

SHA-256 do trecho: `52695e5ba4b550fa7bbae9e8805d093761fd8b4336a1b3eaa48e8722cd0f31e1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
