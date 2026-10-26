# `formatProjectSubagentDocsPrompt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/project-prompt.js` · [README do módulo](../../../../../modules/agent-engine/prompts/project-prompt-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:641292-641312](../../../../../../reference/runtime/host-main.cjs#L641292-L641312) | `FunctionDeclaration` | não | `options2` |
| [evaluation:431905-431925](../../../../../../reference/runtime/sand-eval-runner.cjs#L431905-L431925) | `FunctionDeclaration` | não | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:641292-641312](../../../../../../reference/runtime/host-main.cjs#L641292-L641312) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:431905-431925](../../../../../../reference/runtime/sand-eval-runner.cjs#L431905-L431925) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:641292

Chamadas escritas diretamente neste corpo: `cloudStoreMappingLine`, `isSafeProjectSubagentId`, `isSafeStorePathForPrompt`.

SHA-256 do trecho: `b16771ae0087d914d9eb0c79c999ea10ca3a2af15b66913990f82d0fc0dd6fa6`.

### evaluation:431905

Chamadas escritas diretamente neste corpo: `cloudStoreMappingLine`, `isSafeProjectSubagentId`, `isSafeStorePathForPrompt`.

SHA-256 do trecho: `b16771ae0087d914d9eb0c79c999ea10ca3a2af15b66913990f82d0fc0dd6fa6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
