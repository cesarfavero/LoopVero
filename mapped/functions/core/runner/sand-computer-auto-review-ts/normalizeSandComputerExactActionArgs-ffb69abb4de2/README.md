# `normalizeSandComputerExactActionArgs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-computer-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-computer-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:699322-699336](../../../../../../reference/runtime/host-main.cjs#L699322-L699336) | `FunctionDeclaration` | não | `raw` |
| [evaluation:513078-513092](../../../../../../reference/runtime/sand-eval-runner.cjs#L513078-L513092) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699322-699336](../../../../../../reference/runtime/host-main.cjs#L699322-L699336) | 4 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:513078-513092](../../../../../../reference/runtime/sand-eval-runner.cjs#L513078-L513092) | 4 | 0 | 0 | 1 | 0 | 0 |

### host:699322

Chamadas escritas diretamente neste corpo: `rejectOversizedField`.

SHA-256 do trecho: `e8598251b6c7347e1d221d65d97437a0cba80f3c704e2809207f2a0dec5a3a45`.

### evaluation:513078

Chamadas escritas diretamente neste corpo: `rejectOversizedField`.

SHA-256 do trecho: `e8598251b6c7347e1d221d65d97437a0cba80f3c704e2809207f2a0dec5a3a45`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
