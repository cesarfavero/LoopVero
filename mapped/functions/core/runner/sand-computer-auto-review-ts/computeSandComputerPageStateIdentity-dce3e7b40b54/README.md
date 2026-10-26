# `computeSandComputerPageStateIdentity`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-computer-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-computer-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:699291-699302](../../../../../../reference/runtime/host-main.cjs#L699291-L699302) | `FunctionDeclaration` | não | `stdout` |
| [evaluation:513047-513058](../../../../../../reference/runtime/sand-eval-runner.cjs#L513047-L513058) | `FunctionDeclaration` | não | `stdout` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699291-699302](../../../../../../reference/runtime/host-main.cjs#L699291-L699302) | 4 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:513047-513058](../../../../../../reference/runtime/sand-eval-runner.cjs#L513047-L513058) | 4 | 1 | 0 | 1 | 0 | 0 |

### host:699291

Chamadas escritas diretamente neste corpo: `.digest`, `.update`, `lines2.join`, `lines2.push`, `lines2.sort`, `parseNavigationProbeOutput`, `rawUrl.trim`.

SHA-256 do trecho: `09a8525cf1d3221325a4d361be2313fc899ab33de8eacec7d7c5bd64d96ed984`.

### evaluation:513047

Chamadas escritas diretamente neste corpo: `.digest`, `.update`, `lines2.join`, `lines2.push`, `lines2.sort`, `parseNavigationProbeOutput`, `rawUrl.trim`.

SHA-256 do trecho: `d6ab4a19d614e3a2cbf878ccd61bc2e76619a958c6da103a369b629f3c0935db`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
