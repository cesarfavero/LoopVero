# `parseOriginListener`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/automation-trigger.ts` · [README do módulo](../../../../../modules/core/automations/automation-trigger-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716132-716163](../../../../../../reference/runtime/host-main.cjs#L716132-L716163) | `FunctionDeclaration` | não | `value` |
| [evaluation:527815-527846](../../../../../../reference/runtime/sand-eval-runner.cjs#L527815-L527846) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716132-716163](../../../../../../reference/runtime/host-main.cjs#L716132-L716163) | 9 | 1 | 0 | 4 | 0 | 0 |
| [evaluation:527815-527846](../../../../../../reference/runtime/sand-eval-runner.cjs#L527815-L527846) | 9 | 1 | 0 | 4 | 0 | 0 |

### host:716132

Chamadas escritas diretamente neste corpo: `Array.isArray`, `Number.isSafeInteger`, `isOriginEventKind`, `isValidOriginRepo`, `normalizeScopeToken`, `parseGithubUserAllowlist`, `parsedEvents.filter`, `parsedEvents.includes`, `parsedEvents.push`, `triggerParseFailure`.

SHA-256 do trecho: `fa92c0bffc97f44d37b8ac83f259157a1ac33ae18800c09cbaca6df2c14a3163`.

### evaluation:527815

Chamadas escritas diretamente neste corpo: `Array.isArray`, `Number.isSafeInteger`, `isOriginEventKind`, `isValidOriginRepo`, `normalizeScopeToken`, `parseGithubUserAllowlist`, `parsedEvents.filter`, `parsedEvents.includes`, `parsedEvents.push`, `triggerParseFailure`.

SHA-256 do trecho: `fa92c0bffc97f44d37b8ac83f259157a1ac33ae18800c09cbaca6df2c14a3163`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
