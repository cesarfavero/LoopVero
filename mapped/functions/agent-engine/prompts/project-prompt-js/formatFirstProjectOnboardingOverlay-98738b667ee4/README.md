# `formatFirstProjectOnboardingOverlay`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/project-prompt.js` · [README do módulo](../../../../../modules/agent-engine/prompts/project-prompt-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:641153-641166](../../../../../../reference/runtime/host-main.cjs#L641153-L641166) | `FunctionDeclaration` | não | `args` |
| [evaluation:431766-431779](../../../../../../reference/runtime/sand-eval-runner.cjs#L431766-L431779) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:641153-641166](../../../../../../reference/runtime/host-main.cjs#L641153-L641166) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:431766-431779](../../../../../../reference/runtime/sand-eval-runner.cjs#L431766-L431779) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:641153

Chamadas escritas diretamente neste corpo: `firstProjectKickoffScript`, `sections.join`, `sections.push`.

SHA-256 do trecho: `5d36f1d6d7def900348c0cada1bdc878beb4f7fdb10c6ce8a5705ce115759c7e`.

### evaluation:431766

Chamadas escritas diretamente neste corpo: `firstProjectKickoffScript`, `sections.join`, `sections.push`.

SHA-256 do trecho: `5d36f1d6d7def900348c0cada1bdc878beb4f7fdb10c6ce8a5705ce115759c7e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
