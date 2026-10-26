# `gateConsentedHostTab`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-browser-fill.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:727444-727457](../../../../../../../reference/runtime/host-main.cjs#L727444-L727457) | `FunctionDeclaration` | sim | `ctx, runner, consentedHost` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727444-727457](../../../../../../../reference/runtime/host-main.cjs#L727444-L727457) | 5 | 0 | 2 | 5 | 0 | 0 |

### host:727444

Chamadas escritas diretamente neste corpo: `hostMatchesConsentedUserFormHost`, `livePageHostOf`, `runner.run`, `selectTabOnConsentedHost`.

SHA-256 do trecho: `7e48c117ba81e90b3a032f39f5a3168b9d209bd10f7b63a09dd895d6f4e57a74`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
