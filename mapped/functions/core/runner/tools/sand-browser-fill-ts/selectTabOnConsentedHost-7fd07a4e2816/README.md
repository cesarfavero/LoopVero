# `selectTabOnConsentedHost`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-browser-fill.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:727322-727351](../../../../../../../reference/runtime/host-main.cjs#L727322-L727351) | `FunctionDeclaration` | sim | `ctx, runner, consentedHost` |
| [evaluation:561828-561857](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561828-L561857) | `FunctionDeclaration` | sim | `ctx, runner, consentedHost` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727322-727351](../../../../../../../reference/runtime/host-main.cjs#L727322-L727351) | 9 | 1 | 2 | 5 | 0 | 1 |
| [evaluation:561828-561857](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561828-L561857) | 9 | 1 | 2 | 5 | 0 | 1 |

### host:727322

Chamadas escritas diretamente neste corpo: `Array.isArray`, `JSON.parse`, `fillableHostOfUrl`, `hostMatchesConsentedUserFormHost`, `runner.run`.

Alvos de atribuição ou incremento: `driverDied`, `entries`.

SHA-256 do trecho: `0eff3553ebb846c5cd630ea23a0f5de39be269c6ecefd2a42e6e63b4ccb55a52`.

### evaluation:561828

Chamadas escritas diretamente neste corpo: `Array.isArray`, `JSON.parse`, `fillableHostOfUrl`, `hostMatchesConsentedUserFormHost`, `runner.run`.

Alvos de atribuição ou incremento: `driverDied`, `entries`.

SHA-256 do trecho: `0eff3553ebb846c5cd630ea23a0f5de39be269c6ecefd2a42e6e63b4ccb55a52`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
