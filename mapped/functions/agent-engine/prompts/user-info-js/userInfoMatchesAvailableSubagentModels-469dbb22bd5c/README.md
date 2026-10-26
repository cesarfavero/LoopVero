# `userInfoMatchesAvailableSubagentModels`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/user-info.js` · [README do módulo](../../../../../modules/agent-engine/prompts/user-info-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:640475-640480](../../../../../../reference/runtime/host-main.cjs#L640475-L640480) | `FunctionDeclaration` | não | `content, description9` |
| [evaluation:431089-431094](../../../../../../reference/runtime/sand-eval-runner.cjs#L431089-L431094) | `FunctionDeclaration` | não | `content, description9` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640475-640480](../../../../../../reference/runtime/host-main.cjs#L640475-L640480) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:431089-431094](../../../../../../reference/runtime/sand-eval-runner.cjs#L431089-L431094) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:640475

Chamadas escritas diretamente neste corpo: `content.includes`, `renderAvailableSubagentModelsSection`.

SHA-256 do trecho: `1ecc2f17f2ba12168b9331f1f434b60fcb3cba922b0fe11660a905234e1a2570`.

### evaluation:431089

Chamadas escritas diretamente neste corpo: `content.includes`, `renderAvailableSubagentModelsSection`.

SHA-256 do trecho: `1ecc2f17f2ba12168b9331f1f434b60fcb3cba922b0fe11660a905234e1a2570`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
