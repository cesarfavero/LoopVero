# `readSandBoxBrowserForAnyDisplay`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/observability/README.md).

**Módulo:** `core/runner/navigation-telemetry.ts` · [README do módulo](../../../../../modules/core/runner/navigation-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:490064-490081](../../../../../../reference/runtime/host-main.cjs#L490064-L490081) | `FunctionDeclaration` | não | `recordPathPrefix, primaryPort` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490064-490081](../../../../../../reference/runtime/host-main.cjs#L490064-L490081) | 3 | 1 | 0 | 4 | 1 | 1 |

### host:490064

Chamadas escritas diretamente neste corpo: `.filter`, `.map`, `.sort`, `entries.filter`, `findSystemErrno`, `readSandBoxBrowser`.

Alvos de atribuição ou incremento: `entries`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `ce01fdd01a059f69383fca88dc8f8b1bbddb24d88c8911f31d37416460e72c37`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
