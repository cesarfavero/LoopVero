# `gateOnPlaywrightCurrentTab`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-browser-fill.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:727458-727510](../../../../../../../reference/runtime/host-main.cjs#L727458-L727510) | `FunctionDeclaration` | sim | `ctx, runner, consentedHost, currentTab` |
| [evaluation:561913-561965](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561913-L561965) | `FunctionDeclaration` | sim | `ctx, runner, consentedHost, currentTab` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727458-727510](../../../../../../../reference/runtime/host-main.cjs#L727458-L727510) | 20 | 1 | 3 | 13 | 0 | 1 |
| [evaluation:561913-561965](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561913-L561965) | 20 | 1 | 3 | 13 | 0 | 1 |

### host:727458

Chamadas escritas diretamente neste corpo: `Array.isArray`, `JSON.parse`, `exact.push`, `fillableHostOfUrl`, `hostMatchesConsentedUserFormHost`, `listedTab`, `preferredListedIndex`, `runner.run`, `sameDocument.push`, `urlWithoutFragment`.

Alvos de atribuição ou incremento: `driverCurrentIndex`, `entries`.

SHA-256 do trecho: `c75d15eb46f514da9563517eb8f384fd3f693238ce5f9270b00db4626e0eecdb`.

### evaluation:561913

Chamadas escritas diretamente neste corpo: `Array.isArray`, `JSON.parse`, `exact.push`, `fillableHostOfUrl`, `hostMatchesConsentedUserFormHost`, `listedTab`, `preferredListedIndex`, `runner.run`, `sameDocument.push`, `urlWithoutFragment`.

Alvos de atribuição ou incremento: `driverCurrentIndex`, `entries`.

SHA-256 do trecho: `c75d15eb46f514da9563517eb8f384fd3f693238ce5f9270b00db4626e0eecdb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
