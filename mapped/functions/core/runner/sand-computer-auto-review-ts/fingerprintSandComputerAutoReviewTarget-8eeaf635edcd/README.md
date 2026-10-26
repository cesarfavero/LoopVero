# `fingerprintSandComputerAutoReviewTarget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-computer-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-computer-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:699353-699361](../../../../../../reference/runtime/host-main.cjs#L699353-L699361) | `FunctionDeclaration` | não | `target` |
| [evaluation:513109-513117](../../../../../../reference/runtime/sand-eval-runner.cjs#L513109-L513117) | `FunctionDeclaration` | não | `target` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699353-699361](../../../../../../reference/runtime/host-main.cjs#L699353-L699361) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:513109-513117](../../../../../../reference/runtime/sand-eval-runner.cjs#L513109-L513117) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:699353

Chamadas escritas diretamente neste corpo: `fingerprintSandAutoReviewTarget`.

SHA-256 do trecho: `6d901e57ec2ad3af627ba65169ddfea49860fbc90d9262b29939ab6ded7d6521`.

### evaluation:513109

Chamadas escritas diretamente neste corpo: `fingerprintSandAutoReviewTarget`.

SHA-256 do trecho: `6d901e57ec2ad3af627ba65169ddfea49860fbc90d9262b29939ab6ded7d6521`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
