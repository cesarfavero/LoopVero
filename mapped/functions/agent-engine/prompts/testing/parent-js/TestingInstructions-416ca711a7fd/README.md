# `TestingInstructions`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/testing/parent.js` · [README do módulo](../../../../../../modules/agent-engine/prompts/testing/parent-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:636348-636357](../../../../../../../reference/runtime/host-main.cjs#L636348-L636357) | `FunctionDeclaration` | não | `options2` |
| [evaluation:424401-424410](../../../../../../../reference/runtime/sand-eval-runner.cjs#L424401-L424410) | `FunctionDeclaration` | não | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:636348-636357](../../../../../../../reference/runtime/host-main.cjs#L636348-L636357) | 4 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:424401-424410](../../../../../../../reference/runtime/sand-eval-runner.cjs#L424401-L424410) | 4 | 0 | 0 | 1 | 0 | 0 |

### host:636348

Chamadas escritas diretamente neste corpo: `.find`, `jsx`, `jsxs`, `resolvePromptArtifactsDir`.

SHA-256 do trecho: `3699418b418015631693e87bea980b490dedea896fa9ae5e1f78b6202bede190`.

### evaluation:424401

Chamadas escritas diretamente neste corpo: `.find`, `jsx`, `jsxs`, `resolvePromptArtifactsDir`.

SHA-256 do trecho: `3699418b418015631693e87bea980b490dedea896fa9ae5e1f78b6202bede190`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
