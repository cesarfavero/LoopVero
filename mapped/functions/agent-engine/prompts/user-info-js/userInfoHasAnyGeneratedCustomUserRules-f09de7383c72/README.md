# `userInfoHasAnyGeneratedCustomUserRules`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/user-info.js` · [README do módulo](../../../../../modules/agent-engine/prompts/user-info-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:640337-640340](../../../../../../reference/runtime/host-main.cjs#L640337-L640340) | `FunctionDeclaration` | não | `content` |
| [evaluation:430951-430954](../../../../../../reference/runtime/sand-eval-runner.cjs#L430951-L430954) | `FunctionDeclaration` | não | `content` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640337-640340](../../../../../../reference/runtime/host-main.cjs#L640337-L640340) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:430951-430954](../../../../../../reference/runtime/sand-eval-runner.cjs#L430951-L430954) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:640337

Chamadas escritas diretamente neste corpo: `stripWhitespace`, `stripped.includes`.

SHA-256 do trecho: `877a3e6eb8a494f654236e99ffeba933a8d02e88c37853431ec620dc24bf21df`.

### evaluation:430951

Chamadas escritas diretamente neste corpo: `stripWhitespace`, `stripped.includes`.

SHA-256 do trecho: `877a3e6eb8a494f654236e99ffeba933a8d02e88c37853431ec620dc24bf21df`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
