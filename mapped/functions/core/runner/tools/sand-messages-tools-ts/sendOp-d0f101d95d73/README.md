# `sendOp`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-messages-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-messages-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:777961-777975](../../../../../../../reference/runtime/host-main.cjs#L777961-L777975) | `FunctionDeclaration` | não | `args` |
| [evaluation:577696-577710](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577696-L577710) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777961-777975](../../../../../../../reference/runtime/host-main.cjs#L777961-L777975) | 4 | 0 | 0 | 2 | 2 | 0 |
| [evaluation:577696-577710](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577696-L577710) | 4 | 0 | 0 | 2 | 2 | 0 |

### host:777961

Chamadas escritas diretamente neste corpo: `new Error`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `7724d6bfbde7f06e8e9a1dc06146d25aba7c35a190ff2536877d5fa137621810`.

### evaluation:577696

Chamadas escritas diretamente neste corpo: `new Error`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `7724d6bfbde7f06e8e9a1dc06146d25aba7c35a190ff2536877d5fa137621810`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
