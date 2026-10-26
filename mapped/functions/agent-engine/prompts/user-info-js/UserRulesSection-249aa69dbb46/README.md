# `UserRulesSection`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/user-info.js` · [README do módulo](../../../../../modules/agent-engine/prompts/user-info-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:640367-640369](../../../../../../reference/runtime/host-main.cjs#L640367-L640369) | `FunctionDeclaration` | não | `{ userRules, composer2CustomUserRules = [] }` |
| [evaluation:430981-430983](../../../../../../reference/runtime/sand-eval-runner.cjs#L430981-L430983) | `FunctionDeclaration` | não | `{ userRules, composer2CustomUserRules = [] }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640367-640369](../../../../../../reference/runtime/host-main.cjs#L640367-L640369) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:430981-430983](../../../../../../reference/runtime/sand-eval-runner.cjs#L430981-L430983) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:640367

Chamadas escritas diretamente neste corpo: `composer2CustomUserRules.map`, `jsxs`, `userRules.map`.

SHA-256 do trecho: `c41eb5462d7755f1e194fef3234ae47f1bddbc3dd86f7cbdfc5adbf6dd30ddfa`.

### evaluation:430981

Chamadas escritas diretamente neste corpo: `composer2CustomUserRules.map`, `jsxs`, `userRules.map`.

SHA-256 do trecho: `c41eb5462d7755f1e194fef3234ae47f1bddbc3dd86f7cbdfc5adbf6dd30ddfa`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
