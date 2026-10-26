# `AutomationCompletionMiddleware.stream`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/runner/automation-completion-middleware.ts` · [README do módulo](../../../../../modules/core/runner/automation-completion-middleware-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:586412-586415](../../../../../../reference/runtime/sand-eval-runner.cjs#L586412-L586415) | `method` | não | `ctx, invocationId, tools, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586412-586415](../../../../../../reference/runtime/sand-eval-runner.cjs#L586412-L586415) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:586412

Chamadas escritas diretamente neste corpo: `this.injectPending`, `this.innerExecutor.stream`.

SHA-256 do trecho: `f9c2d51d9796a8738a172aba3c85fedb1d8b43128a685b6ae86c1d971426785d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
