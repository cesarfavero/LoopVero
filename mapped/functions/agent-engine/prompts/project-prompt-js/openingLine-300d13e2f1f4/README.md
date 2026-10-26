# `openingLine`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/project-prompt.js` · [README do módulo](../../../../../modules/agent-engine/prompts/project-prompt-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:640997-641004](../../../../../../reference/runtime/host-main.cjs#L640997-L641004) | `FunctionDeclaration` | não | `options2` |
| [evaluation:431610-431617](../../../../../../reference/runtime/sand-eval-runner.cjs#L431610-L431617) | `FunctionDeclaration` | não | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640997-641004](../../../../../../reference/runtime/host-main.cjs#L640997-L641004) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:431610-431617](../../../../../../reference/runtime/sand-eval-runner.cjs#L431610-L431617) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:640997

Chamadas escritas diretamente neste corpo: `escapeProjectInitDescription`, `escapeProjectName`.

SHA-256 do trecho: `0914fab927db189ab356100fe8e198ca90ec45f70f61477f77cf681c613cc70e`.

### evaluation:431610

Chamadas escritas diretamente neste corpo: `escapeProjectInitDescription`, `escapeProjectName`.

SHA-256 do trecho: `0914fab927db189ab356100fe8e198ca90ec45f70f61477f77cf681c613cc70e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
