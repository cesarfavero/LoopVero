# `createSystemPromptAssembly/resolveRelatedConversationsSection`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt-assembly.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-assembly-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:553606-553614](../../../../../../reference/runtime/sand-eval-runner.cjs#L553606-L553614) | `FunctionDeclaration` | não | `store` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:553606-553614](../../../../../../reference/runtime/sand-eval-runner.cjs#L553606-L553614) | 3 | 0 | 0 | 3 | 0 | 0 |

### evaluation:553606

Chamadas escritas diretamente neste corpo: `deps.compactionEpoch`, `deps.relatedConversations`, `pinnedSection`, `resolveRelatedConversationsPromptSection`.

SHA-256 do trecho: `d54c5e8ffe22cc4b6483d464670cd1cef324a22f25d4ddb2878a1b05f967e7e9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
