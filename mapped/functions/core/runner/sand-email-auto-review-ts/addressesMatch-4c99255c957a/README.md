# `addressesMatch`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-email-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-email-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:764540-764542](../../../../../../reference/runtime/host-main.cjs#L764540-L764542) | `FunctionDeclaration` | não | `left, right` |
| [evaluation:557908-557910](../../../../../../reference/runtime/sand-eval-runner.cjs#L557908-L557910) | `FunctionDeclaration` | não | `left, right` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764540-764542](../../../../../../reference/runtime/host-main.cjs#L764540-L764542) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:557908-557910](../../../../../../reference/runtime/sand-eval-runner.cjs#L557908-L557910) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:764540

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `left.trim`, `right.trim`.

SHA-256 do trecho: `51e1fd492ea87bf4b355c120b7f0f145bf5d6e4fa02282e2cebefb09efc620f3`.

### evaluation:557908

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `left.trim`, `right.trim`.

SHA-256 do trecho: `51e1fd492ea87bf4b355c120b7f0f145bf5d6e4fa02282e2cebefb09efc620f3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
