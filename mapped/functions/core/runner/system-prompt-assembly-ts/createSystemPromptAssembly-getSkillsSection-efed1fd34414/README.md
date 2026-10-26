# `createSystemPromptAssembly/getSkillsSection`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt-assembly.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-assembly-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:553248-553264](../../../../../../reference/runtime/sand-eval-runner.cjs#L553248-L553264) | `FunctionDeclaration` | não | `skillPointers` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:553248-553264](../../../../../../reference/runtime/sand-eval-runner.cjs#L553248-L553264) | 5 | 0 | 0 | 2 | 0 | 0 |

### evaluation:553248

Chamadas escritas diretamente neste corpo: `.some`, `deps.skillAccess`, `deps.skillStore`, `deps.teamBot`, `renderSkillsSystemPrompt`, `skillAuthoringPointer`, `store.getLocation`, `store.list`.

SHA-256 do trecho: `28ff7c02510e42159ea0772096faf8fb23549d3a0b0600ded2bdb1c9db4cb703`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
