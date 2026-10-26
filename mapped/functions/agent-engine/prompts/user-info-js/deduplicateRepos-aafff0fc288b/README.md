# `deduplicateRepos`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/user-info.js` · [README do módulo](../../../../../modules/agent-engine/prompts/user-info-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:640051-640055](../../../../../../reference/runtime/host-main.cjs#L640051-L640055) | `FunctionDeclaration` | não | `gitRepos, gitReposWithStatus` |
| [evaluation:430665-430669](../../../../../../reference/runtime/sand-eval-runner.cjs#L430665-L430669) | `FunctionDeclaration` | não | `gitRepos, gitReposWithStatus` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640051-640055](../../../../../../reference/runtime/host-main.cjs#L640051-L640055) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:430665-430669](../../../../../../reference/runtime/sand-eval-runner.cjs#L430665-L430669) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:640051

Chamadas escritas diretamente neste corpo: `gitRepos.filter`, `gitReposWithStatus.map`, `new Set`.

SHA-256 do trecho: `56b24c0e34a47aece77f1981c46018f7b0922da986a7b1f2d36d97740a44fe2c`.

### evaluation:430665

Chamadas escritas diretamente neste corpo: `gitRepos.filter`, `gitReposWithStatus.map`, `new Set`.

SHA-256 do trecho: `56b24c0e34a47aece77f1981c46018f7b0922da986a7b1f2d36d97740a44fe2c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
