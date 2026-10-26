# `offeredMemoryTypes`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/state-tools/split-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/state-tools/split-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:771606-771608](../../../../../../../../reference/runtime/host-main.cjs#L771606-L771608) | `FunctionDeclaration` | não | `memoryTypes, teamBot` |
| [evaluation:570839-570841](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570839-L570841) | `FunctionDeclaration` | não | `memoryTypes, teamBot` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771606-771608](../../../../../../../../reference/runtime/host-main.cjs#L771606-L771608) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:570839-570841](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570839-L570841) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:771606

Chamadas escritas diretamente neste corpo: `memoryTypes.filter`.

SHA-256 do trecho: `82fd0d724438e8a0e749feac953f53fcf35fdff48d4309693b27fd5500547eee`.

### evaluation:570839

Chamadas escritas diretamente neste corpo: `memoryTypes.filter`.

SHA-256 do trecho: `82fd0d724438e8a0e749feac953f53fcf35fdff48d4309693b27fd5500547eee`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
