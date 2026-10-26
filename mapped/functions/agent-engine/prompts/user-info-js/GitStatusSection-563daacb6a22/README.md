# `GitStatusSection`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/user-info.js` · [README do módulo](../../../../../modules/agent-engine/prompts/user-info-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:640036-640050](../../../../../../reference/runtime/host-main.cjs#L640036-L640050) | `FunctionDeclaration` | não | `{ gitRepos, gitReposWithStatus, initialWorkingDirectory, agentType, toolInfo }` |
| [evaluation:430650-430664](../../../../../../reference/runtime/sand-eval-runner.cjs#L430650-L430664) | `FunctionDeclaration` | não | `{ gitRepos, gitReposWithStatus, initialWorkingDirectory, agentType, toolInfo }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640036-640050](../../../../../../reference/runtime/host-main.cjs#L640036-L640050) | 5 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:430650-430664](../../../../../../reference/runtime/sand-eval-runner.cjs#L430650-L430664) | 5 | 0 | 0 | 1 | 0 | 0 |

### host:640036

Chamadas escritas diretamente neste corpo: `deduplicateRepos`, `gitReposWithStatus.map`, `initialWorkingDirectory.trim`, `jsx`, `jsxs`, `new Set`, `reposToDisplay.map`.

SHA-256 do trecho: `2b3713b0382445962b04ead8442c676726c4809a21fc3b9b40ac4088b70e5ca3`.

### evaluation:430650

Chamadas escritas diretamente neste corpo: `deduplicateRepos`, `gitReposWithStatus.map`, `initialWorkingDirectory.trim`, `jsx`, `jsxs`, `new Set`, `reposToDisplay.map`.

SHA-256 do trecho: `2b3713b0382445962b04ead8442c676726c4809a21fc3b9b40ac4088b70e5ca3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
