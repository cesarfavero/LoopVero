# `UsageSanitizingMiddleware.stream`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/conversation-state.ts` · [README do módulo](../../../../../modules/core/runner/conversation-state-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:529583-529620](../../../../../../reference/runtime/sand-eval-runner.cjs#L529583-L529620) | `method` | não | `ctx, invocationId, tools, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:529583-529620](../../../../../../reference/runtime/sand-eval-runner.cjs#L529583-L529620) | 1 | 0 | 0 | 2 | 1 | 1 |

### evaluation:529583

Chamadas escritas diretamente neste corpo: `safelyObservePromptStream`, `sanitizeStreamResult`, `this.innerExecutor.stream`, `this.resolvedModelTracking.onRequestStart`, `this.resolvedModelTracking.tracker.beginRequest`.

Alvos de atribuição ou incremento: `streamResult`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `f2580e95c839fd044e8e694fd5c9b435e64ac2509b2114f6d47ba6fca5f657a6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
