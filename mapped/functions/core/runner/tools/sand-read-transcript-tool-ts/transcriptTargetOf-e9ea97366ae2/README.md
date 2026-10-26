# `transcriptTargetOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `core/runner/tools/sand-read-transcript-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-read-transcript-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:766334-766347](../../../../../../../reference/runtime/host-main.cjs#L766334-L766347) | `FunctionDeclaration` | não | `args` |
| [evaluation:559698-559711](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559698-L559711) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766334-766347](../../../../../../../reference/runtime/host-main.cjs#L766334-L766347) | 4 | 0 | 0 | 1 | 1 | 0 |
| [evaluation:559698-559711](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559698-L559711) | 4 | 0 | 0 | 1 | 1 | 0 |

### host:766334

Chamadas escritas diretamente neste corpo: `new SandToolInputError`, `presentId`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `523f116b3edf6576ab55b380734297d6ee2aca05254e5e42b11de3278710fed7`.

### evaluation:559698

Chamadas escritas diretamente neste corpo: `new SandToolInputError`, `presentId`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `523f116b3edf6576ab55b380734297d6ee2aca05254e5e42b11de3278710fed7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
