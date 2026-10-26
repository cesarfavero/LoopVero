# `createSubagentManagementTools`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/tools/sand-subagent-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-subagent-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:781064-781142](../../../../../../../reference/runtime/host-main.cjs#L781064-L781142) | `FunctionDeclaration` | não | `controller, options2` |
| [evaluation:581411-581489](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581411-L581489) | `FunctionDeclaration` | não | `controller, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781064-781142](../../../../../../../reference/runtime/host-main.cjs#L781064-L781142) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:581411-581489](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581411-L581489) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:781064

Chamadas escritas diretamente neste corpo: `checkSubagentParameters`, `defineCommunicateTool`, `messageSubagentParameters`, `stopSubagentParameters`, `withSubagentIdAlias`.

SHA-256 do trecho: `a9bea62e685624d1dcff07a2c0d21f32e5b2c32b57949d6ccf9e142a9124b283`.

### evaluation:581411

Chamadas escritas diretamente neste corpo: `checkSubagentParameters`, `defineCommunicateTool`, `messageSubagentParameters`, `stopSubagentParameters`, `withSubagentIdAlias`.

SHA-256 do trecho: `a9bea62e685624d1dcff07a2c0d21f32e5b2c32b57949d6ccf9e142a9124b283`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
