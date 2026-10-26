# `buildProjectPermissionsContext`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-computer-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-computer-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:699362-699398](../../../../../../reference/runtime/host-main.cjs#L699362-L699398) | `FunctionDeclaration` | não | `args` |
| [evaluation:513118-513154](../../../../../../reference/runtime/sand-eval-runner.cjs#L513118-L513154) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699362-699398](../../../../../../reference/runtime/host-main.cjs#L699362-L699398) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:513118-513154](../../../../../../reference/runtime/sand-eval-runner.cjs#L513118-L513154) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:699362

Chamadas escritas diretamente neste corpo: `appendUnique`, `new Set`.

SHA-256 do trecho: `0a00c9587dc68024b5521307a10c5344202ade963e4e68b9c66aae20479bce97`.

### evaluation:513118

Chamadas escritas diretamente neste corpo: `appendUnique2`, `new Set`.

SHA-256 do trecho: `0bc6b39709683963b7d823258b6b4b1052e86bc54cc213e239345a705748f13e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
