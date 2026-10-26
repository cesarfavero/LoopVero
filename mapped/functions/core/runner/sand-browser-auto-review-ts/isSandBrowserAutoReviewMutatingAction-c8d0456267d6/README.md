# `isSandBrowserAutoReviewMutatingAction`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-browser-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-browser-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:699678-699683](../../../../../../reference/runtime/host-main.cjs#L699678-L699683) | `FunctionDeclaration` | não | `action` |
| [evaluation:513434-513439](../../../../../../reference/runtime/sand-eval-runner.cjs#L513434-L513439) | `FunctionDeclaration` | não | `action` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699678-699683](../../../../../../reference/runtime/host-main.cjs#L699678-L699683) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:513434-513439](../../../../../../reference/runtime/sand-eval-runner.cjs#L513434-L513439) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:699678

Chamadas escritas diretamente neste corpo: `BYPASS_BROWSER_OPS.has`.

SHA-256 do trecho: `a94bc880aaf5fb662402361773e5af486fe97336749925a582cea2ae509347f5`.

### evaluation:513434

Chamadas escritas diretamente neste corpo: `BYPASS_BROWSER_OPS.has`.

SHA-256 do trecho: `a94bc880aaf5fb662402361773e5af486fe97336749925a582cea2ae509347f5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
