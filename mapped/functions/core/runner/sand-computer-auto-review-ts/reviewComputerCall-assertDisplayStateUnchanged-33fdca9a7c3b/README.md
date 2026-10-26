# `reviewComputerCall/assertDisplayStateUnchanged`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-computer-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-computer-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:699585-699593](../../../../../../reference/runtime/host-main.cjs#L699585-L699593) | `ArrowFunctionExpression` | sim | `(nenhum)` |
| [evaluation:513341-513349](../../../../../../reference/runtime/sand-eval-runner.cjs#L513341-L513349) | `ArrowFunctionExpression` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699585-699593](../../../../../../reference/runtime/host-main.cjs#L699585-L699593) | 1 | 0 | 1 | 0 | 1 | 0 |
| [evaluation:513341-513349](../../../../../../reference/runtime/sand-eval-runner.cjs#L513341-L513349) | 1 | 0 | 1 | 0 | 1 | 0 |

### host:699585

Chamadas escritas diretamente neste corpo: `options2.captureDisplayStateIdentity`, `pageChangedAfterReview`.

Alvos de lançamento explícito: `pageChangedAfterReview`.

SHA-256 do trecho: `21037ac81b564ebf7310cb6a67d616214acb67e926f14595b5661e8f27f16557`.

### evaluation:513341

Chamadas escritas diretamente neste corpo: `options2.captureDisplayStateIdentity`, `pageChangedAfterReview`.

Alvos de lançamento explícito: `pageChangedAfterReview`.

SHA-256 do trecho: `21037ac81b564ebf7310cb6a67d616214acb67e926f14595b5661e8f27f16557`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
