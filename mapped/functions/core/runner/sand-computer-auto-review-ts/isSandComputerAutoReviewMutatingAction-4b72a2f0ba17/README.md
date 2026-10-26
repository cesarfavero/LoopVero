# `isSandComputerAutoReviewMutatingAction`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-computer-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-computer-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:699306-699308](../../../../../../reference/runtime/host-main.cjs#L699306-L699308) | `FunctionDeclaration` | não | `action` |
| [evaluation:513062-513064](../../../../../../reference/runtime/sand-eval-runner.cjs#L513062-L513064) | `FunctionDeclaration` | não | `action` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699306-699308](../../../../../../reference/runtime/host-main.cjs#L699306-L699308) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:513062-513064](../../../../../../reference/runtime/sand-eval-runner.cjs#L513062-L513064) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:699306

Chamadas escritas diretamente neste corpo: `isSandComputerAutoReviewBypassAction`.

SHA-256 do trecho: `218354d8651b92482433ca7f1a7121cd5e3a72ea0c11615234b2aa13d7d9bd69`.

### evaluation:513062

Chamadas escritas diretamente neste corpo: `isSandComputerAutoReviewBypassAction`.

SHA-256 do trecho: `218354d8651b92482433ca7f1a7121cd5e3a72ea0c11615234b2aa13d7d9bd69`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
