# `scrubSubmittedUserFormValues`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-browser-fill.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:727410-727422](../../../../../../../reference/runtime/host-main.cjs#L727410-L727422) | `FunctionDeclaration` | não | `text3, values` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727410-727422](../../../../../../../reference/runtime/host-main.cjs#L727410-L727422) | 0 | 1 | 0 | 1 | 0 | 0 |

### host:727410

Chamadas escritas diretamente neste corpo: `.filter`, `.sort`, `needle.replace`, `new RegExp`, `new Set`, `scrubbed.replace`, `values.map`.

Alvos de atribuição ou incremento: `scrubbed`.

SHA-256 do trecho: `d2069da673df57d433b4b978a1e1104a6986ae7c294c4c01b1df94618aba2a6d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
