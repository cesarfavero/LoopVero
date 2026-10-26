# `createSlackThreadTools`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/slack/slack-thread-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/slack/slack-thread-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:768257-768264](../../../../../../../../reference/runtime/host-main.cjs#L768257-L768264) | `FunctionDeclaration` | não | `host` |
| [evaluation:563773-563780](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563773-L563780) | `FunctionDeclaration` | não | `host` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768257-768264](../../../../../../../../reference/runtime/host-main.cjs#L768257-L768264) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:563773-563780](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563773-L563780) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:768257

Chamadas escritas diretamente neste corpo: `createDeleteOwnSlackMessageTool`, `createSetSlackStatusTool`, `tools.push`.

SHA-256 do trecho: `1f1c88606a4ee84664c7edd153182c6432abe97081efa9e289a9fe52d79a5d6e`.

### evaluation:563773

Chamadas escritas diretamente neste corpo: `createDeleteOwnSlackMessageTool`, `createSetSlackStatusTool`, `tools.push`.

SHA-256 do trecho: `1f1c88606a4ee84664c7edd153182c6432abe97081efa9e289a9fe52d79a5d6e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
