# `recallMemoryTools`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/tools/recall-memory-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/recall-memory-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:769862-769875](../../../../../../../reference/runtime/host-main.cjs#L769862-L769875) | `FunctionDeclaration` | não | `host, options2 = {}` |
| [evaluation:565531-565544](../../../../../../../reference/runtime/sand-eval-runner.cjs#L565531-L565544) | `FunctionDeclaration` | não | `host, options2 = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769862-769875](../../../../../../../reference/runtime/host-main.cjs#L769862-L769875) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:565531-565544](../../../../../../../reference/runtime/sand-eval-runner.cjs#L565531-L565544) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:769862

Chamadas escritas diretamente neste corpo: `createRecallMemoryTool`, `offersMemoryLibrary`.

SHA-256 do trecho: `a6fd8ea9f7ef91a3be65da003097d43060f5106aa4329f06c1ead1a007330893`.

### evaluation:565531

Chamadas escritas diretamente neste corpo: `createRecallMemoryTool`, `offersMemoryLibrary`.

SHA-256 do trecho: `a6fd8ea9f7ef91a3be65da003097d43060f5106aa4329f06c1ead1a007330893`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
