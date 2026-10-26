# `buildSandSubagentSystemPrompt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:532567-532591](../../../../../../reference/runtime/sand-eval-runner.cjs#L532567-L532591) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:532567-532591](../../../../../../reference/runtime/sand-eval-runner.cjs#L532567-L532591) | 9 | 0 | 0 | 1 | 0 | 0 |

### evaluation:532567

Chamadas escritas diretamente neste corpo: `.filter`, `.join`, `isUserComputerUseSubagentType`, `sandSubagentEmailPromptLine`, `sandSubagentSafetyPromptSection`.

Alvos de atribuição ou incremento: `deliveryInstruction`, `noUserLine`.

SHA-256 do trecho: `65a35ce8f33a995034a6c359e31d9773deb3c2d54b7229e3e45f73adb09af9e8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
