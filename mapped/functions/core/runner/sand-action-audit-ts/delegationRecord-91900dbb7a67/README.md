# `delegationRecord`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/sand-action-audit.ts` · [README do módulo](../../../../../modules/core/runner/sand-action-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:512274-512284](../../../../../../reference/runtime/sand-eval-runner.cjs#L512274-L512284) | `FunctionDeclaration` | não | `ctx, identity2, toolCallId, action` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:512274-512284](../../../../../../reference/runtime/sand-eval-runner.cjs#L512274-L512284) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:512274

Chamadas escritas diretamente neste corpo: `Date.now`, `identity2.getConversationId`, `identity2.resolveBoxId`, `turnAttributionFromContext`.

SHA-256 do trecho: `edd3144c72ad0efb388c514caa8727a04af0cdd5345716c0dd8c3b5fdc060ee9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
