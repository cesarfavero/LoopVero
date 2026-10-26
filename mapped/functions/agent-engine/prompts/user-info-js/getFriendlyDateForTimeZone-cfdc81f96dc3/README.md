# `getFriendlyDateForTimeZone`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/user-info.js` · [README do módulo](../../../../../modules/agent-engine/prompts/user-info-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:639947-639958](../../../../../../reference/runtime/host-main.cjs#L639947-L639958) | `FunctionDeclaration` | não | `timeZone, mockNow` |
| [evaluation:430561-430572](../../../../../../reference/runtime/sand-eval-runner.cjs#L430561-L430572) | `FunctionDeclaration` | não | `timeZone, mockNow` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639947-639958](../../../../../../reference/runtime/host-main.cjs#L639947-L639958) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:430561-430572](../../../../../../reference/runtime/sand-eval-runner.cjs#L430561-L430572) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:639947

Chamadas escritas diretamente neste corpo: `.split`, `buildFriendlyDate`, `new Date`, `now.toISOString`.

SHA-256 do trecho: `00dcc639599cf6a9376ecbd41abcca589ba4bc121da01a657ae0213392e6c31c`.

### evaluation:430561

Chamadas escritas diretamente neste corpo: `.split`, `buildFriendlyDate`, `new Date`, `now.toISOString`.

SHA-256 do trecho: `00dcc639599cf6a9376ecbd41abcca589ba4bc121da01a657ae0213392e6c31c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
