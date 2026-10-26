# `parseGithubListener`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/automation-trigger.ts` · [README do módulo](../../../../../modules/core/automations/automation-trigger-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716097-716131](../../../../../../reference/runtime/host-main.cjs#L716097-L716131) | `FunctionDeclaration` | não | `value` |
| [evaluation:527780-527814](../../../../../../reference/runtime/sand-eval-runner.cjs#L527780-L527814) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716097-716131](../../../../../../reference/runtime/host-main.cjs#L716097-L716131) | 10 | 1 | 0 | 4 | 0 | 0 |
| [evaluation:527780-527814](../../../../../../reference/runtime/sand-eval-runner.cjs#L527780-L527814) | 10 | 1 | 0 | 4 | 0 | 0 |

### host:716097

Chamadas escritas diretamente neste corpo: `Array.isArray`, `Number.isSafeInteger`, `events.some`, `isGithubEventKind`, `isValidGithubRepo`, `normalizeScopeToken`, `parseCiBranch`, `parseGithubUserAllowlist`, `parsedEvents.filter`, `parsedEvents.includes`, `parsedEvents.push`, `triggerParseFailure`.

SHA-256 do trecho: `3d0e85012c76e96d044f08c542c02480412761c313725bb5c6e32a2236652e2e`.

### evaluation:527780

Chamadas escritas diretamente neste corpo: `Array.isArray`, `Number.isSafeInteger`, `events.some`, `isGithubEventKind`, `isValidGithubRepo`, `normalizeScopeToken`, `parseCiBranch`, `parseGithubUserAllowlist`, `parsedEvents.filter`, `parsedEvents.includes`, `parsedEvents.push`, `triggerParseFailure`.

SHA-256 do trecho: `3d0e85012c76e96d044f08c542c02480412761c313725bb5c6e32a2236652e2e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
