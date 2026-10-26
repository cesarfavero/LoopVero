# `describeHeldGesture`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-computer-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-computer-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:699437-699440](../../../../../../reference/runtime/host-main.cjs#L699437-L699440) | `FunctionDeclaration` | não | `base, modifiers` |
| [evaluation:513193-513196](../../../../../../reference/runtime/sand-eval-runner.cjs#L513193-L513196) | `FunctionDeclaration` | não | `base, modifiers` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699437-699440](../../../../../../reference/runtime/host-main.cjs#L699437-L699440) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:513193-513196](../../../../../../reference/runtime/sand-eval-runner.cjs#L513193-L513196) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:699437

Chamadas escritas diretamente neste corpo: `.toUpperCase`, `gesture.charAt`, `gesture.slice`.

SHA-256 do trecho: `a9072a9c80cb53c97a0254965cd292f435366a85cf607ac8b85788bf4e71e520`.

### evaluation:513193

Chamadas escritas diretamente neste corpo: `.toUpperCase`, `gesture.charAt`, `gesture.slice`.

SHA-256 do trecho: `a9072a9c80cb53c97a0254965cd292f435366a85cf607ac8b85788bf4e71e520`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
