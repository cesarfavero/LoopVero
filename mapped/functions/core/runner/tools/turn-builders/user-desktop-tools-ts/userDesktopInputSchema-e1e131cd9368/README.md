# `userDesktopInputSchema`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/turn-builders/user-desktop-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/turn-builders/user-desktop-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:781826-781835](../../../../../../../../reference/runtime/host-main.cjs#L781826-L781835) | `FunctionDeclaration` | não | `{ name: name18, inputSchema }` |
| [evaluation:582171-582180](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582171-L582180) | `FunctionDeclaration` | não | `{ name: name18, inputSchema }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781826-781835](../../../../../../../../reference/runtime/host-main.cjs#L781826-L781835) | 2 | 0 | 0 | 1 | 1 | 0 |
| [evaluation:582171-582180](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582171-L582180) | 2 | 0 | 0 | 1 | 1 | 0 |

### host:781826

Chamadas escritas diretamente neste corpo: `JSON.parse`, `JSON.stringify`, `isUnknownRecord2`, `new Error`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `834df624c920a1be4e061073aab5bcb19d063de7f2ca31b39229039d029d7983`.

### evaluation:582171

Chamadas escritas diretamente neste corpo: `JSON.parse`, `JSON.stringify`, `isUnknownRecord2`, `new Error`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `834df624c920a1be4e061073aab5bcb19d063de7f2ca31b39229039d029d7983`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
