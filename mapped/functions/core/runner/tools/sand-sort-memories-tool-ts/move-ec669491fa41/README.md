# `move`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-sort-memories-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-sort-memories-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:754267-754297](../../../../../../../reference/runtime/host-main.cjs#L754267-L754297) | `FunctionDeclaration` | sim | `{   records: records2,   from: from2,   to: to3 }` |
| [evaluation:536735-536765](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536735-L536765) | `FunctionDeclaration` | sim | `{   records: records2,   from: from2,   to: to3 }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754267-754297](../../../../../../../reference/runtime/host-main.cjs#L754267-L754297) | 1 | 2 | 2 | 3 | 0 | 2 |
| [evaluation:536735-536765](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536735-L536765) | 1 | 2 | 2 | 3 | 0 | 2 |

### host:754267

Chamadas escritas diretamente neste corpo: `.map`, `copied.push`, `errorMessage`, `from2.flush`, `from2.removeMemoryByContent`, `held.has`, `new Set`, `to3.addMemory`, `to3.flush`, `to3.listMemories`.

SHA-256 do trecho: `9f2b30d523bee9909d93b5456b71077e3f3ba6572c10a84be55bbd100e9cca6f`.

### evaluation:536735

Chamadas escritas diretamente neste corpo: `.map`, `copied.push`, `errorMessage2`, `from2.flush`, `from2.removeMemoryByContent`, `held.has`, `new Set`, `to3.addMemory`, `to3.flush`, `to3.listMemories`.

SHA-256 do trecho: `156bcf139c09c9bbca4fcd03fb163d2bce268fa354c894b7884e58f0b93b4067`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
