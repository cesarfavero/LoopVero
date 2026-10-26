# `promptOverrideOrDefault`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/project-prompt.js` · [README do módulo](../../../../../modules/agent-engine/prompts/project-prompt-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:640985-640990](../../../../../../reference/runtime/host-main.cjs#L640985-L640990) | `FunctionDeclaration` | não | `override, defaultPrompt` |
| [evaluation:431598-431603](../../../../../../reference/runtime/sand-eval-runner.cjs#L431598-L431603) | `FunctionDeclaration` | não | `override, defaultPrompt` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640985-640990](../../../../../../reference/runtime/host-main.cjs#L640985-L640990) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:431598-431603](../../../../../../reference/runtime/sand-eval-runner.cjs#L431598-L431603) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:640985

Chamadas escritas diretamente neste corpo: `RESERVED_PROJECT_PROMPT_TAG.test`, `containsUnsafeControlCharacter`, `override.trim`.

SHA-256 do trecho: `1bb107b4d5354b7b8eb239079bc85c00525978143dc4e7201915ecdb044a6d78`.

### evaluation:431598

Chamadas escritas diretamente neste corpo: `RESERVED_PROJECT_PROMPT_TAG.test`, `containsUnsafeControlCharacter`, `override.trim`.

SHA-256 do trecho: `1bb107b4d5354b7b8eb239079bc85c00525978143dc4e7201915ecdb044a6d78`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
