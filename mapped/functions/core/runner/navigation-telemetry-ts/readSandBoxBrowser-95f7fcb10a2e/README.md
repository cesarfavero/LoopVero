# `readSandBoxBrowser`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/observability/README.md).

**Módulo:** `core/runner/navigation-telemetry.ts` · [README do módulo](../../../../../modules/core/runner/navigation-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:490054-490063](../../../../../../reference/runtime/host-main.cjs#L490054-L490063) | `FunctionDeclaration` | não | `recordPath` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490054-490063](../../../../../../reference/runtime/host-main.cjs#L490054-L490063) | 2 | 0 | 0 | 2 | 1 | 1 |

### host:490054

Chamadas escritas diretamente neste corpo: `.trim`, `findSystemErrno`, `isSandBoxBrowser`.

Alvos de atribuição ou incremento: `recorded`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `c5249b7e5560e9bff2e7dbbdd858489033d41af63e42719b6b88bbb5f629fe79`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
