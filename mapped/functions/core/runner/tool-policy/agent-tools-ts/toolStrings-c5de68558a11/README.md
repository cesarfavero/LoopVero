# `toolStrings`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tool-policy/agent-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tool-policy/agent-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:756551-756558](../../../../../../../reference/runtime/host-main.cjs#L756551-L756558) | `FunctionDeclaration` | não | `tools` |
| [evaluation:542471-542478](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542471-L542478) | `FunctionDeclaration` | não | `tools` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756551-756558](../../../../../../../reference/runtime/host-main.cjs#L756551-L756558) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:542471-542478](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542471-L542478) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:756551

Chamadas escritas diretamente neste corpo: `new Map`, `strings.set`.

SHA-256 do trecho: `5a3b2bd803d33bab7ff0dedc825f6cfe37ede1d6cd9835a93e16b3c9ee76fb38`.

### evaluation:542471

Chamadas escritas diretamente neste corpo: `new Map`, `strings.set`.

SHA-256 do trecho: `5a3b2bd803d33bab7ff0dedc825f6cfe37ede1d6cd9835a93e16b3c9ee76fb38`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
