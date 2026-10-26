# `formatProjectThreadPrompt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/project-prompt.js` · [README do módulo](../../../../../modules/agent-engine/prompts/project-prompt-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:641313-641354](../../../../../../reference/runtime/host-main.cjs#L641313-L641354) | `FunctionDeclaration` | não | `options2` |
| [evaluation:431926-431967](../../../../../../reference/runtime/sand-eval-runner.cjs#L431926-L431967) | `FunctionDeclaration` | não | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:641313-641354](../../../../../../reference/runtime/host-main.cjs#L641313-L641354) | 6 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:431926-431967](../../../../../../reference/runtime/sand-eval-runner.cjs#L431926-L431967) | 6 | 0 | 0 | 4 | 0 | 0 |

### host:641313

Chamadas escritas diretamente neste corpo: `cloudStoreMappingLine`, `escapeProjectName`, `formatProjectSubagentDocsPrompt`, `isSafeProjectSubagentId`, `isSafeStorePathForPrompt`, `options2.mountedAgentStores.find`, `projectReference`, `promptOverrideOrDefault`, `threadStoreBody`.

SHA-256 do trecho: `eec0c676333f41a75f3c9213ad83f4fd794fb933d6d8872571b75b67f2f73240`.

### evaluation:431926

Chamadas escritas diretamente neste corpo: `cloudStoreMappingLine`, `escapeProjectName`, `formatProjectSubagentDocsPrompt`, `isSafeProjectSubagentId`, `isSafeStorePathForPrompt`, `options2.mountedAgentStores.find`, `projectReference`, `promptOverrideOrDefault`, `threadStoreBody`.

SHA-256 do trecho: `eec0c676333f41a75f3c9213ad83f4fd794fb933d6d8872571b75b67f2f73240`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
