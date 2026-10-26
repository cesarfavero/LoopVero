# `driverUnavailableFillResult`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-browser-fill.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:727434-727443](../../../../../../../reference/runtime/host-main.cjs#L727434-L727443) | `FunctionDeclaration` | não | `values, submitAfterFill` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727434-727443](../../../../../../../reference/runtime/host-main.cjs#L727434-L727443) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:727434

Chamadas escritas diretamente neste corpo: `.map`, `Object.fromEntries`, `Object.keys`, `failAllFills`, `values.filter`.

SHA-256 do trecho: `1a2119f26028e20f1fc5d2f960fc867cc49014146850e5c14e5ca1a9374a9d9d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
