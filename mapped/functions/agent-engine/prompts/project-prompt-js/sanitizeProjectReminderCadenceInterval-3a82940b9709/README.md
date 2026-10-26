# `sanitizeProjectReminderCadenceInterval`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/project-prompt.js` · [README do módulo](../../../../../modules/agent-engine/prompts/project-prompt-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:640931-640943](../../../../../../reference/runtime/host-main.cjs#L640931-L640943) | `FunctionDeclaration` | não | `interval` |
| [evaluation:431544-431556](../../../../../../reference/runtime/sand-eval-runner.cjs#L431544-L431556) | `FunctionDeclaration` | não | `interval` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640931-640943](../../../../../../reference/runtime/host-main.cjs#L640931-L640943) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:431544-431556](../../../../../../reference/runtime/sand-eval-runner.cjs#L431544-L431556) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:640931

Chamadas escritas diretamente neste corpo: `Math.floor`, `Number`, `Number.isFinite`.

SHA-256 do trecho: `39672ed912a5ac61ab1ee8887c3c6f8b35b1307a7b9333a8afc0debe012db7cd`.

### evaluation:431544

Chamadas escritas diretamente neste corpo: `Math.floor`, `Number`, `Number.isFinite`.

SHA-256 do trecho: `39672ed912a5ac61ab1ee8887c3c6f8b35b1307a7b9333a8afc0debe012db7cd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
