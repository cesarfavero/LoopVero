# `userDesktopToolResult`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/turn-builders/user-desktop-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/turn-builders/user-desktop-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:781795-781825](../../../../../../../../reference/runtime/host-main.cjs#L781795-L781825) | `FunctionDeclaration` | não | `result` |
| [evaluation:582140-582170](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582140-L582170) | `FunctionDeclaration` | não | `result` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781795-781825](../../../../../../../../reference/runtime/host-main.cjs#L781795-L781825) | 8 | 0 | 0 | 7 | 0 | 0 |
| [evaluation:582140-582170](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582140-L582170) | 8 | 0 | 0 | 7 | 0 | 0 |

### host:781795

Chamadas escritas diretamente neste corpo: `callToolResult.safeParse`, `output2.data.content.map`, `refusal3`, `textItem`, `toolResult`, `unexpectedOutputText`.

SHA-256 do trecho: `8e7ade759416643c9884c8717549745929dc19e09dba1e87c2f5264a33f51a47`.

### evaluation:582140

Chamadas escritas diretamente neste corpo: `callToolResult.safeParse`, `output2.data.content.map`, `refusal3`, `textItem`, `toolResult`, `unexpectedOutputText`.

SHA-256 do trecho: `8e7ade759416643c9884c8717549745929dc19e09dba1e87c2f5264a33f51a47`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
