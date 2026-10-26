# `createSandSplitStateTools`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/state-tools/split-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/state-tools/split-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:771957-772012](../../../../../../../../reference/runtime/host-main.cjs#L771957-L772012) | `FunctionDeclaration` | não | `deps, options2` |
| [evaluation:571190-571245](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571190-L571245) | `FunctionDeclaration` | não | `deps, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771957-772012](../../../../../../../../reference/runtime/host-main.cjs#L771957-L772012) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:571190-571245](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571190-L571245) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:771957

Chamadas escritas diretamente neste corpo: `avatarDescription`, `defineCommunicateTool`, `deps.teamBot`, `profileDescription`, `profileParameters`, `skillDescription`, `skillParameters`, `tools.map`.

SHA-256 do trecho: `877e80d48813bcbc3adabc58717c323e6b10925e840429fbc242c7482a5c92fe`.

### evaluation:571190

Chamadas escritas diretamente neste corpo: `avatarDescription`, `defineCommunicateTool`, `deps.teamBot`, `profileDescription`, `profileParameters`, `skillDescription`, `skillParameters`, `tools.map`.

SHA-256 do trecho: `877e80d48813bcbc3adabc58717c323e6b10925e840429fbc242c7482a5c92fe`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
