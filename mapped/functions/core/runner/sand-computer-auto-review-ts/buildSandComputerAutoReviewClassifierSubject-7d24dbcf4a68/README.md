# `buildSandComputerAutoReviewClassifierSubject`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-computer-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-computer-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:699346-699352](../../../../../../reference/runtime/host-main.cjs#L699346-L699352) | `FunctionDeclaration` | não | `args` |
| [evaluation:513102-513108](../../../../../../reference/runtime/sand-eval-runner.cjs#L513102-L513108) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699346-699352](../../../../../../reference/runtime/host-main.cjs#L699346-L699352) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:513102-513108](../../../../../../reference/runtime/sand-eval-runner.cjs#L513102-L513108) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:699346

Chamadas escritas diretamente neste corpo: `normalizeSandComputerDescription`, `normalizeSandComputerExactActionArgs`.

SHA-256 do trecho: `0e7be6059a4297f3e52e0227e5f444fb02f20f896bdc25738d963a9dd8c24b0d`.

### evaluation:513102

Chamadas escritas diretamente neste corpo: `normalizeSandComputerDescription`, `normalizeSandComputerExactActionArgs`.

SHA-256 do trecho: `0e7be6059a4297f3e52e0227e5f444fb02f20f896bdc25738d963a9dd8c24b0d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
