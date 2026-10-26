# `createSandNavigationProbe/probe`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/sand-action-audit.ts` · [README do módulo](../../../../../modules/core/runner/sand-action-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:512794-512798](../../../../../../reference/runtime/sand-eval-runner.cjs#L512794-L512798) | `ArrowFunctionExpression` | não | `ctx, remoteAccessor, displayNumber` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:512794-512798](../../../../../../reference/runtime/sand-eval-runner.cjs#L512794-L512798) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:512794

Chamadas escritas diretamente neste corpo: `ctx.withDetached`, `probeTargetsByDisplay.set`, `requestProbe`, `turnAttributionFromContext`.

Alvos de atribuição ou incremento: `lastRequestedTurn`.

SHA-256 do trecho: `d4459ddaf6bd0ac647c6dc5f705ef938798ce7296eabd2e548cca45a5d4e2eef`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
