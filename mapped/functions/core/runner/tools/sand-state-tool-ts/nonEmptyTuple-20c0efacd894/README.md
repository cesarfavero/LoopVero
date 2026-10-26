# `nonEmptyTuple`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-state-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-state-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:762588-762594](../../../../../../../reference/runtime/host-main.cjs#L762588-L762594) | `FunctionDeclaration` | não | `items` |
| [evaluation:555198-555204](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555198-L555204) | `FunctionDeclaration` | não | `items` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762588-762594](../../../../../../../reference/runtime/host-main.cjs#L762588-L762594) | 1 | 0 | 0 | 1 | 1 | 0 |
| [evaluation:555198-555204](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555198-L555204) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:762588

Chamadas escritas diretamente neste corpo: `new Error`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `bb6adb50ad353e3a3a83fe80c1b5c7be8861cc963cb1c2a9825fe33343939a09`.

### evaluation:555198

Chamadas escritas diretamente neste corpo: `new Error`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `bb6adb50ad353e3a3a83fe80c1b5c7be8861cc963cb1c2a9825fe33343939a09`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
