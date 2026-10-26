# `isSandBoxBrowser`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/observability/README.md).

**Módulo:** `core/runner/navigation-telemetry.ts` · [README do módulo](../../../../../modules/core/runner/navigation-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:490051-490053](../../../../../../reference/runtime/host-main.cjs#L490051-L490053) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490051-490053](../../../../../../reference/runtime/host-main.cjs#L490051-L490053) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:490051

Chamadas escritas diretamente neste corpo: `SAND_BOX_BROWSERS.some`.

SHA-256 do trecho: `588ce874ab5f3b14909d6d526fd54907b4f2261e72394e9c46176ea614dd68c6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
