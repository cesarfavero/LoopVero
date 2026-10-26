# `sendMessageParametersByTurnBehavior`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-message-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:761276-761297](../../../../../../../reference/runtime/host-main.cjs#L761276-L761297) | `FunctionDeclaration` | não | `deps` |
| [evaluation:552091-552112](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552091-L552112) | `FunctionDeclaration` | não | `deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761276-761297](../../../../../../../reference/runtime/host-main.cjs#L761276-L761297) | 5 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:552091-552112](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552091-L552112) | 5 | 0 | 0 | 4 | 0 | 0 |

### host:761276

Chamadas escritas diretamente neste corpo: `deps.taskThreads`.

SHA-256 do trecho: `6d0afacc50b85729b8616bed950e51f743d007cdc12c2ed15b00bedbfab1e9f0`.

### evaluation:552091

Chamadas escritas diretamente neste corpo: `deps.taskThreads`.

SHA-256 do trecho: `6d0afacc50b85729b8616bed950e51f743d007cdc12c2ed15b00bedbfab1e9f0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
