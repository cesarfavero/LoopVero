# `createSystemPromptAssembly/frozen`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt-assembly.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-assembly-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:553100-553116](../../../../../../reference/runtime/sand-eval-runner.cjs#L553100-L553116) | `FunctionDeclaration` | não | `name18, renderLive` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:553100-553116](../../../../../../reference/runtime/sand-eval-runner.cjs#L553100-L553116) | 3 | 0 | 0 | 2 | 0 | 0 |

### evaluation:553100

Chamadas escritas diretamente neste corpo: `deps.compactionEpoch`, `deps.promptSectionSnapshots`, `isFrozenPromptSectionAbsenceUnresolved`, `pinnedSection`, `renderLive`, `resolveFrozenPromptSection`, `store.setPromptSectionSnapshot`, `withAutomationsSplit`.

SHA-256 do trecho: `2cb97c851b56b1ee4b51e96981e2512b707b5d3c2ea3d90faba2fa56bd2276ae`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
