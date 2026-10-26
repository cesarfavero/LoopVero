# `buildComposer2CustomUserRuleRealEnvironment`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/user-info.js` · [README do módulo](../../../../../modules/agent-engine/prompts/user-info-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:640164-640177](../../../../../../reference/runtime/host-main.cjs#L640164-L640177) | `FunctionDeclaration` | não | `{ includeCommandExecutionEnforcement, includeDateAuthority }` |
| [evaluation:430778-430791](../../../../../../reference/runtime/sand-eval-runner.cjs#L430778-L430791) | `FunctionDeclaration` | não | `{ includeCommandExecutionEnforcement, includeDateAuthority }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640164-640177](../../../../../../reference/runtime/host-main.cjs#L640164-L640177) | 3 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:430778-430791](../../../../../../reference/runtime/sand-eval-runner.cjs#L430778-L430791) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:640164

Chamadas escritas diretamente neste corpo: `.join`.

SHA-256 do trecho: `9dc60104275086b49729cc5e9ba34f1357f1160164b73fd029648fdf8fe7a8ab`.

### evaluation:430778

Chamadas escritas diretamente neste corpo: `.join`.

SHA-256 do trecho: `9dc60104275086b49729cc5e9ba34f1357f1160164b73fd029648fdf8fe7a8ab`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
